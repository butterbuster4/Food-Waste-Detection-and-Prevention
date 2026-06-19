package com.plt.grp05h5.repository.interceptor;

import org.apache.ibatis.executor.statement.StatementHandler;
import org.apache.ibatis.plugin.*;
import org.apache.ibatis.session.ResultHandler;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.stereotype.Component;

import java.sql.Statement;
import java.util.Properties;

@Intercepts(
        {
                @Signature(type = StatementHandler.class, method = "query", args = {Statement.class, ResultHandler.class}),
        }
)
@Component
//@ConditionalOnProperty(value = "lcp.slow-query.enable", havingValue = "true")
public class SlowQueryInterceptor implements Interceptor {

    private static final Logger LOGGER = LoggerFactory.getLogger(SlowQueryInterceptor.class);
    @Value("${lcp.slow-query.threshold:600000}")
    private Long threshold;
    @Value("${lcp.slow-query.enable:false}")
    private Boolean enable;

    @Override
    public Object intercept(Invocation invocation) throws Throwable {
        if (!enable) {
            return invocation.proceed();
        }
        long startTime = System.currentTimeMillis();
        Object result = invocation.proceed();
        long endTime = System.currentTimeMillis();
        threshold = null == threshold ? 600000 : threshold;
        if (endTime - startTime >= threshold) {
            StatementHandler statementHandler = (StatementHandler) invocation.getTarget();
            String sql = ( null != statementHandler && null != statementHandler.getBoundSql() ) ? statementHandler.getBoundSql().getSql() : "未知";
            LOGGER.warn("出现慢查询，要求{}ms内，实际花费{}ms，慢查询sql为:{}", threshold, endTime - startTime, sql);
        }
        return result;
    }

    @Override
    public Object plugin(Object o) {
        return Plugin.wrap(o, this);
    }

    @Override
    public void setProperties(Properties properties) {
    }
}