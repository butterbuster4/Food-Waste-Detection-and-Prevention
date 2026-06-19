package com.plt.grp05h5.web.controller.logics.dto; 

import java.util.List; 
import com.netease.lowcode.permission.domain.DeployResourceMetaData; 

public class Lcap_permissionUploadResourceControllerDto {

    public List<DeployResourceMetaData> resourceMetaDataCollect;

    public List<DeployResourceMetaData> getResourceMetaDataCollect() {
        return resourceMetaDataCollect;
    } 

    public void setResourceMetaDataCollect(List<DeployResourceMetaData> resourceMetaDataCollect) {
        this.resourceMetaDataCollect = resourceMetaDataCollect; 
    } 

}
