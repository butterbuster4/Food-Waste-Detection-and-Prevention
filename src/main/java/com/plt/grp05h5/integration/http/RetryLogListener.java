package com.plt.grp05h5.integration.http;

import com.github.rholder.retry.Attempt;
import com.github.rholder.retry.RetryListener;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@SuppressWarnings("all")
public class RetryLogListener implements RetryListener {

    private static final Logger log = LoggerFactory.getLogger("LCAP_EXTENSION_LOGGER");

    private static final DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

    /**
     * 调用名
     */
    private final String calleeName;

    public RetryLogListener(String calleeName) {
        this.calleeName = calleeName;
    }

    @Override
    public <V> void onRetry(Attempt<V> attempt) {
        // 打印日志，重试时才进行日志打印
        long attemptNumber = attempt.getAttemptNumber() - 1;
        if (attemptNumber > 0) {
            log.info(String.format("%s 完成第 %s 次重试 %s", formatter.format(LocalDateTime.now()), attemptNumber, calleeName));
        }
    }

}