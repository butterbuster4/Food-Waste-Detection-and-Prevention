@echo off
set bash_file=%0
set maven_command=%1
set maven_url=%2
set maven_repository=%3

if "%1"=="" (set maven_command=install)

if "%maven_command%"=="deploy" (call:deploy) else if "%maven_command%"=="install" (call:install) else (echo. Usage: %bash_file% {install^|deploy})

goto end

:deploy

if "%maven_url%"=="" (
	echo. Usage: %bash_file% deploy ^<repository_url^> ^[^<repository_id^>^]
    echo -- repository_url: The URL of the repository to deploy the artifact to. This parameter is required.
    echo -- repository_id: Server Id to map on the ^<id^> under ^<server^> section of settings.xml In most cases, this parameter will be required for authentication.
    goto end
)

::find all zip file
for %%f in (*.zip) do (
    set "file_name=%%~nf"

    ::unzip zip file
    echo unzip: %%f
    mkdir output\%%~nf

    powershell Expand-Archive -Force %%f -DestinationPath output\%%~nf


	cd /d output\%%~nf
	for /r %%j in (*.jar) do (
		echo deploy: %%~nj
		echo deploy: %%j

		if "%maven_repository%" == "" (
			mvn deploy:deploy-file -Durl=%maven_url% -Dfile=%%j -DpomFile=%%~pj\%%~nj.pom
		) else (
			mvn deploy:deploy-file -Durl=%maven_url% -DrepositoryId=%maven_repository% -Dfile=%%j -DpomFile=%%~pj\%%~nj.pom
		)
	)
	cd /d "%~dp0"
)

goto:eof

:install

cd /d "%~dp0"

::find all zip file
for %%f in (*.zip) do (
    set "file_name=%%~nf"

    ::unzip zip file
    echo unzip: %%f
    mkdir output\%%~nf

    powershell Expand-Archive -Force %%f -DestinationPath output\%%~nf

    ::check install exist or not
    if exist "output\%%~nf\%%~nf\install.bat" (
        echo install: %%~nf
        cd /d output\%%~nf\%%~nf
        call install.bat
        cd /d "%~dp0"
    ) else (
        cd /d output\%%~nf
        for /r %%j in (*.jar) do (
            echo install: %%~nj
			echo install: %%j
            mvn install:install-file -Dfile=%%j -DpomFile=%%~pj\%%~nj.pom
		)
        cd /d "%~dp0"
    )
)

goto:eof

:end