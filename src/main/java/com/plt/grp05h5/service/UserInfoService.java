package com.plt.grp05h5.service;

import com.plt.grp05h5.web.dto.UserListReqDTO;
import com.plt.grp05h5.web.dto.UserListResDTO;
import com.netease.codewave.domain.iam.api.domain.Page;
import com.netease.codewave.domain.iam.api.domain.User;
import com.netease.codewave.domain.iam.api.domain.UserQuery;

import java.util.List;

/**
* auto generate UserInfoService
* 给ide提供一个全局系统逻辑来获取用户列表，可以兼容用户下沉和非下沉场景
*
* @author sys
*/
public interface UserInfoService {
    List<UserListResDTO> getUserListFromAppOrNuims(UserListReqDTO reqDTO);


    default Page<User> getUserPage(UserQuery userQuery){
        return Page.empty();
    };
}
