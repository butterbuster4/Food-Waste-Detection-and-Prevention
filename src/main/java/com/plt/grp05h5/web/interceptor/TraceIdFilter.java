package com.plt.grp05h5.web.interceptor;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.slf4j.MDC;

import com.plt.grp05h5.util.TraceIdHolder;
import com.plt.grp05h5.util.JacksonUtils;
import com.plt.grp05h5.web.ApiReturn;
import com.plt.grp05h5.exception.ErrorManager;
import org.springframework.http.HttpStatus;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import java.nio.charset.StandardCharsets;
import java.io.IOException;
import java.util.UUID;

public class TraceIdFilter implements Filter {
    private static final Logger logger = LoggerFactory.getLogger(TraceIdFilter.class);

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        logger.debug("init TraceIdFilter...");
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
        try {
            String uniqueId = UUID.randomUUID().toString();
            StringBuilder uuidBuilder = new StringBuilder(TraceIdHolder.LOG_TRACE_PREFIX);
            uuidBuilder.append(uniqueId);
            MDC.put(TraceIdHolder.LOG_TRACE_KEY, uuidBuilder.toString());
            MDC.put(TraceIdHolder.TRACE_ID, uniqueId);
            TraceIdHolder.setTraceId(uniqueId);
            chain.doFilter(request, response);
        } catch (Exception e) {
            logger.error("error", e);
            handleReturn((HttpServletResponse) response, ApiReturn.ofError(500, ErrorManager.ofSystemInternalError(e.getMessage()),e.getMessage()));
        } finally {
            TraceIdHolder.remove();
        }
    }

    @Override
    public void destroy() {
        logger.debug("destroy TraceIdFilter...");
        MDC.remove(TraceIdHolder.LOG_TRACE_KEY);
    }

    private void handleReturn(HttpServletResponse response, ApiReturn apiReturn) throws IOException {
        response.setCharacterEncoding(StandardCharsets.UTF_8.name());
        response.setContentType("application/json");
        response.setStatus(HttpStatus.INTERNAL_SERVER_ERROR.value());
        response.getWriter().write(JacksonUtils.toJson(apiReturn));
    }
}
