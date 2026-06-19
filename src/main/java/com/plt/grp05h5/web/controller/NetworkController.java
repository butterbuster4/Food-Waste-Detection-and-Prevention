package com.plt.grp05h5.web.controller;

import com.plt.grp05h5.util.NetWorkUtils;
import com.plt.grp05h5.web.ApiReturn;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

/**
 * Network related
 *
 * @author ifcc
 */
@RestController
public class NetworkController {
    @GetMapping("/api/system/getCurrentIp")
    public ApiReturn<String> getCurrentIp(HttpServletRequest request) {
        return ApiReturn.of(NetWorkUtils.getCurrentIp(request));
    }
}