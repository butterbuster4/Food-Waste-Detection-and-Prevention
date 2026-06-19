package com.plt.grp05h5.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.netease.lowcode.permission.domain.UserResourceQueryResult; 
import com.netease.lowcode.permission.LCAPPermissionService; 
import java.util.List; 
import com.plt.grp05h5.web.controller.logics.dto.Lcap_permissionGetUserResourcesControllerDto; 
import com.plt.grp05h5.web.ApiReturn; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody; 

@RestController
public class Lcap_permissionGetUserResourcesController {

    @PostMapping("/api/lcap_permission/getUserResources")
    public ApiReturn<List<UserResourceQueryResult>> getUserResources(@RequestBody Lcap_permissionGetUserResourcesControllerDto lcap_permissionGetUserResourcesControllerDto) throws Exception {
        return ApiReturn.of(LCAPPermissionService.getUserResources(lcap_permissionGetUserResourcesControllerDto.getUserId()));
    } 

}
