package com.plt.grp05h5.service.system.iam;

import com.plt.grp05h5.context.UserContext;
import com.netease.codewave.domain.iam.api.authentication.IAuthenticationService;
import com.netease.codewave.domain.iam.api.domain.User;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Service;

import java.util.Objects;

/**
 * 认证系统服务
 */
@Service
public class AuthenticationServiceImpl implements IAuthenticationService {
    @Override
    public boolean isAuthenticated() {
        return Objects.nonNull(UserContext.getCurrentUser()) && StringUtils.isNotEmpty(UserContext.getCurrentUser().userId);
    }

    @Override
    public User getCurrentUser() {
        if (isAuthenticated()) {
            UserContext.UserInfo userInfo = UserContext.getCurrentUser();
            if (Objects.nonNull(userInfo)) {
                User user = new User();
                user.source = userInfo.source;
                user.userId = userInfo.userId;
                user.userName = userInfo.userName;
                user.displayName = userInfo.nickName;
                return user;
            }
        }
        return null;
    }
}
