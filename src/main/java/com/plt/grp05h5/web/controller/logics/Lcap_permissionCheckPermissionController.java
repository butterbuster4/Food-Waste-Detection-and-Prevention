package com.plt.grp05h5.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.netease.lowcode.permission.LCAPPermissionService; 
import com.plt.grp05h5.web.controller.logics.dto.Lcap_permissionCheckPermissionControllerDto; 
import com.plt.grp05h5.web.ApiReturn; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody; 

@RestController
public class Lcap_permissionCheckPermissionController {

    @PostMapping("/api/lcap_permission/checkPermission")
    public ApiReturn<Boolean> checkPermission(@RequestBody Lcap_permissionCheckPermissionControllerDto lcap_permissionCheckPermissionControllerDto) throws Exception {
        return ApiReturn.of(LCAPPermissionService.checkPermission(lcap_permissionCheckPermissionControllerDto.getUserId(), lcap_permissionCheckPermissionControllerDto.getResourceValue(), lcap_permissionCheckPermissionControllerDto.getResourceType(), lcap_permissionCheckPermissionControllerDto.getClientType()));
    } 

}
