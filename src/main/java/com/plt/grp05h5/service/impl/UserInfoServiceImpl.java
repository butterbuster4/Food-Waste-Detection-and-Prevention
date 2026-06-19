package com.plt.grp05h5.service.impl;

import com.plt.grp05h5.service.UserInfoService;
import com.plt.grp05h5.web.dto.UserListReqDTO;
import com.plt.grp05h5.web.dto.UserListResDTO;
import com.netease.codewave.domain.iam.api.domain.Page;
import com.netease.codewave.domain.iam.api.domain.User;
import com.netease.codewave.domain.iam.api.domain.UserQuery;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;
import java.util.Collections;
import org.springframework.util.CollectionUtils;

/**
* auto generate UserInfoServiceImpl
*
* 应用内用户相关的系统逻辑
*
* @author sys
*/
@Service
public class UserInfoServiceImpl implements UserInfoService {
    private Logger logger = LoggerFactory.getLogger(UserInfoServiceImpl.class);

    /**
     * 用户下沉的用户获取逻辑
     *
     * @return
     */
    @Override
    public List<UserListResDTO> getUserListFromAppOrNuims(UserListReqDTO reqDTO) {
        return Collections.emptyList();
    }


    @Override
    public Page<User> getUserPage(UserQuery userQuery) {
        return Page.empty();
     }
}
