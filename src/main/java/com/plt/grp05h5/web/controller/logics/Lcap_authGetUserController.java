package com.plt.grp05h5.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.netease.lowcode.auth.LCAPAuthService; 
import com.netease.lowcode.auth.domain.LCAPUser; 
import com.plt.grp05h5.web.ApiReturn; 
import org.springframework.web.bind.annotation.PostMapping; 

@RestController
public class Lcap_authGetUserController {

    @PostMapping("/api/lcap_auth/getUser")
    public ApiReturn<LCAPUser> getUser() throws Exception {
        return ApiReturn.of(LCAPAuthService.getUser());
    } 

}
