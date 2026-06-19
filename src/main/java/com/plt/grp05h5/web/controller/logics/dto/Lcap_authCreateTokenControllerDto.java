package com.plt.grp05h5.web.controller.logics.dto; 

import com.netease.lowcode.auth.domain.LCAPUser; 

public class Lcap_authCreateTokenControllerDto {

    public LCAPUser lcapUser;

    public LCAPUser getLcapUser() {
        return lcapUser;
    } 

    public void setLcapUser(LCAPUser lcapUser) {
        this.lcapUser = lcapUser; 
    } 

}
