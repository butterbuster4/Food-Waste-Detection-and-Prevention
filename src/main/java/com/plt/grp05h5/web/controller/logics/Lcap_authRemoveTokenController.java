package com.plt.grp05h5.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.netease.lowcode.auth.LCAPAuthService; 
import com.plt.grp05h5.web.ApiReturn; 
import org.springframework.web.bind.annotation.PostMapping; 

@RestController
public class Lcap_authRemoveTokenController {

    @PostMapping("/api/lcap_auth/removeToken")
    public ApiReturn<Boolean> removeToken() throws Exception {
        return ApiReturn.of(LCAPAuthService.removeToken());
    } 

}
