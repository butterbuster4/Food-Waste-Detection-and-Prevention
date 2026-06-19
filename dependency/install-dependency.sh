#!/bin/bash

work_dir=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
maven_command=$1
maven_url=$2
maven_repository_id=$3

function deploy() {
  if [[ -z $maven_url ]]; then
      echo "Usage: $0 deploy <repository_url> [<repository_id>]"
      echo "-- repository_url: The URL of the repository to deploy the artifact to. This parameter is required."
      echo "-- repository_id: Server Id to map on the <id> under <server> section of settings.xml. In most cases, this parameter will be required for authentication."
      exit 0;
  fi

   for file in "$work_dir"/*.zip; do
     [ -e "$file" ] || continue

     file_name=$(basename "$file" .zip)
     echo "解压: $file"
     mkdir -p "$work_dir/output/$file_name"
     unzip -q -n "$file" -d "$work_dir/output/$file_name"

     for jar_file in $(find "$work_dir/output/$file_name" -iname *.jar -type f | grep -v "__MACOSX"); do
       dir_name=$(dirname "$jar_file")
       jar_name=$(basename "$jar_file" .jar)
       if [[ -z $maven_repository_id ]]; then
           mvn deploy:deploy-file -Durl="$maven_url" -Dfile="$dir_name/$jar_name".jar -DpomFile="$dir_name/$jar_name".pom
       else
           mvn deploy:deploy-file -DrepositoryId="$maven_repository_id" -Durl="$maven_url" -Dfile="$dir_name/$jar_name".jar -DpomFile="$dir_name/$jar_name".pom
       fi
     done

   done
}

function install() {
   for file in "$work_dir"/*.zip; do
     [ -e "$file" ] || continue

     file_name=$(basename "$file" .zip)

     echo "解压: $file"
     mkdir -p "$work_dir/output/$file_name"
     unzip -q -n "$file" -d "$work_dir/output/$file_name"

     if [ -e "$work_dir/output/$file_name/$file_name/install.sh" ]; then
       cd "$work_dir/output/$file_name/$file_name"
       chmod +x install.sh
       ./install.sh
       cd "$work_dir"
     else
       for jar_file in $(find "$work_dir/output/$file_name" -iname *.jar -type f | grep -v "__MACOSX"); do
         dir_name=$(dirname "$jar_file")
         jar_name=$(basename "$jar_file" .jar)
         mvn install:install-file -Dfile="$dir_name/$jar_name".jar -DpomFile="$dir_name/$jar_name".pom
       done
     fi
   done
}

if [[ -z $maven_command ]]; then
   maven_command="install"
fi

case $maven_command in
  "deploy")
      deploy
      ;;
  "install")
      install
      ;;
  *)
      echo "Usage: $0 {install|deploy}"
      echo "-- install: Uses the information in the POM (groupId, artifactId, version) to determine the proper location for the artifact within the local repository."
      echo "-- deploy:  Add artifact(s) to a remote repository for sharing with other developers and projects."

      exit 1
esac

exit 0
