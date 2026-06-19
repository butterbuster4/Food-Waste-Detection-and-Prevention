package com.plt.grp05h5.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.netease.lowcode.permission.LCAPPermissionService; 
import com.plt.grp05h5.web.controller.logics.dto.Lcap_permissionUploadResourceControllerDto; 
import com.plt.grp05h5.web.ApiReturn; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody; 

@RestController
public class Lcap_permissionUploadResourceController {

    @PostMapping("/api/lcap_permission/uploadResource")
    public ApiReturn<Boolean> uploadResource(@RequestBody Lcap_permissionUploadResourceControllerDto lcap_permissionUploadResourceControllerDto) throws Exception {
        return ApiReturn.of(LCAPPermissionService.uploadResource(lcap_permissionUploadResourceControllerDto.getResourceMetaDataCollect()));
    } 

}
