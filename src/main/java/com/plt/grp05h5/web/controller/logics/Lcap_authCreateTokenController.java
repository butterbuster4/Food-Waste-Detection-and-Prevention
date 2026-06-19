package com.plt.grp05h5.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.plt.grp05h5.web.controller.logics.dto.Lcap_authCreateTokenControllerDto; 
import com.netease.lowcode.auth.LCAPAuthService; 
import com.plt.grp05h5.web.ApiReturn; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody; 

@RestController
public class Lcap_authCreateTokenController {

    @PostMapping("/api/lcap_auth/createToken")
    public ApiReturn<Boolean> createToken(@RequestBody Lcap_authCreateTokenControllerDto lcap_authCreateTokenControllerDto) throws Exception {
        return ApiReturn.of(LCAPAuthService.createToken(lcap_authCreateTokenControllerDto.getLcapUser()));
    } 

}
