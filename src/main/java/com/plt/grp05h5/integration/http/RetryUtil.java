package com.plt.grp05h5.integration.http;

import com.netease.codewave.nasl.java.tools.Buildins;
import com.github.rholder.retry.*;

import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeUnit;

@SuppressWarnings("all")
public class RetryUtil {

        /**
         * 调用重试，针对所有异常
         *
         * @param callable       重试的方法
         * @param calleeName     方法名
         * @param times          重试次数
         * @param interval       重试间隔
         * @return 方法调用返回值
         */
        public static <V> V call(Callable<V> callable, String calleeName, Integer times, Integer interval) {
            return call(callable, calleeName, times, interval, null);
        }

        /**
         * 调用重试，可以指定异常
         *
         * @param callable       重试的方法
         * @param calleeName     方法名
         * @param times          重试次数
         * @param interval       重试间隔
         * @param exceptionClass 重试异常，若不指定，则所有异常都会进行重试
         * @return 方法调用返回值
         */
        public static <V> V call(Callable<V> callable, String calleeName, Integer times, Integer interval, Class<? extends Throwable> exceptionClass) {
            // 若不指定异常，则所有异常都会进行重试
            if (exceptionClass == null) {
                exceptionClass = Throwable.class;
            }
            // 获取网关超时时间
            int gatewayTimeout = HttpApiUtil.getTimeout(Buildins.function().getAppConfigProperty("http_request_timeout"), Buildins.function().getAppConfigProperty("custom.http_request_timeout"));

            // 真实调用次数为重试次数加1
            int realCallTimes = times != null ? times + 1 : 1;
            Retryer<V> retry = RetryerBuilder.<V>newBuilder()
                    .retryIfExceptionOfType(exceptionClass) // 异常重试源
                    .withStopStrategy(new StopStrategy() {
                        @Override
                        public boolean shouldStop(Attempt failedAttempt) {
                            // 重试次数结合网关超时时间，避免无用调用
                            return failedAttempt.getAttemptNumber() >= realCallTimes || failedAttempt.getDelaySinceFirstAttempt() >= gatewayTimeout;
                        }
                    })// 设置最大调用次数
                    .withWaitStrategy(WaitStrategies.fixedWait(interval, TimeUnit.MILLISECONDS))  // 设置等待间隔时间
                    .withRetryListener(new RetryLogListener(calleeName))
                    .build();
            try {
                return retry.call(callable);
            } catch (ExecutionException | RetryException e) {
                throw new RuntimeException(e);
            }
        }

        /**
         * 适配不需要返回结果的重试
         *
         * @param runnable   重试的方法
         * @param calleeName 方法名
         * @param times      重试次数
         * @param interval   重试间隔
         */
        public static void callWithoutResult(Runnable runnable, String calleeName, int times, int interval) {
            call(() -> {
                runnable.run();
                return null;
            }, calleeName, times, interval);
        }

}