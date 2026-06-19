package com.plt.grp05h5.web.interceptor;

import org.apache.catalina.Globals;
import org.apache.logging.log4j.core.config.Order;
import org.springframework.stereotype.Component;

import javax.servlet.*;
import javax.servlet.annotation.WebFilter;
import java.io.IOException;

/**
 * 异步请求支持
 *
 * @date 2024-08-21 14:56
 */
@Order(Integer.MIN_VALUE)
@WebFilter(urlPatterns = "/api/connectors/*", filterName = "AsyncSupportFilter", asyncSupported = true)
@Component
public class AsyncSupportFilter implements Filter {

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        request.setAttribute(Globals.ASYNC_SUPPORTED_ATTR, true);
        chain.doFilter(request, response);
    }
}