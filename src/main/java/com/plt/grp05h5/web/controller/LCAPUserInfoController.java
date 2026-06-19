package com.plt.grp05h5.web.controller;

import com.plt.grp05h5.context.UserContext;
import com.plt.grp05h5.config.Constants;
import com.plt.grp05h5.web.ApiReturn;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import java.util.Objects;
import java.util.HashMap;
import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.BeanUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
* auto generate LCAPUserSystemController
* 用户下沉时，页面模版里默认会调应用的一些接口
* 比如检查用户登录状态的getUser接口
*
* @author sys
*/
@RestController
@RequestMapping
public class LCAPUserInfoController {
    private final Logger log = LoggerFactory.getLogger(LCAPUserInfoController.class);
    /**
    * 其中 api/user/system/getUser 路径会慢慢废弃
    * @return
    */
    @GetMapping({Constants.AUTH_FILTER_API_GET_USER0,Constants.AUTH_FILTER_API_GET_USER})
    public ApiReturn<Map> getUser() {
        UserContext.UserInfo currentUserInfo = UserContext.getCurrentUserInfo();
        Map res = new HashMap<>();
        Map<String, String> map = new HashMap<>();
        if (Objects.isNull(currentUserInfo)) {
            log.warn("当前用户信息为空...");
            res.put(Constants.AUTH_FILTER_CODE_STR, Constants.AUTH_FILTER_FAIL_STR);
            res.put(Constants.AUTH_FILTER_DATA_STR, map);
            map.put(Constants.AUTH_FILTER_RESULT_STR, "false");
            return ApiReturn.of(res);
        }
        if (Objects.nonNull(UserContext.getIfRemoteUserCenter()) && UserContext.getIfRemoteUserCenter()) {
            res.put(Constants.AUTH_FILTER_CODE_STR, Constants.AUTH_FILTER_SUCCESS_STR);
            res.put(Constants.AUTH_FILTER_DATA_STR, map);
            map.put(Constants.AUTH_FILTER_USERID_STR, currentUserInfo.getUserId());
            map.put(Constants.AUTH_FILTER_USERNAME_STR, currentUserInfo.getUserName());
            map.put(Constants.AUTH_FILTER_PHONE_STR, currentUserInfo.getPhone());
            map.put(Constants.AUTH_FILTER_NICKNAME_STR, currentUserInfo.getNickName());
            map.put(Constants.AUTH_FILTER_EMAIL_STR, currentUserInfo.getEmail());
            map.put(Constants.AUTH_FILTER_DISPLAY_NAME_STR, currentUserInfo.getNickName());
            map.put(Constants.AUTH_FILTER_RESULT_STR, "true");
            return ApiReturn.of(res);
        }
        log.error("无用户LCAPUser实体，直接返回UserContext信息");
        res.put(Constants.AUTH_FILTER_CODE_STR, Constants.AUTH_FILTER_SUCCESS_STR);
        res.put(Constants.AUTH_FILTER_DATA_STR, map);
        map.put(Constants.AUTH_FILTER_USERID_STR, currentUserInfo.getUserId());
        map.put(Constants.AUTH_FILTER_USERNAME_STR, currentUserInfo.getUserName());
        map.put(Constants.AUTH_FILTER_PHONE_STR, currentUserInfo.getPhone());
        map.put(Constants.AUTH_FILTER_NICKNAME_STR, currentUserInfo.getNickName());
        map.put(Constants.AUTH_FILTER_EMAIL_STR, currentUserInfo.getEmail());
        map.put(Constants.AUTH_FILTER_DISPLAY_NAME_STR, currentUserInfo.getNickName());
        map.put(Constants.AUTH_FILTER_RESULT_STR, "true");
        return ApiReturn.of(res);
    }
}