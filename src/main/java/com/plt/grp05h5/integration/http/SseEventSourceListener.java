package com.plt.grp05h5.integration.http;

import okhttp3.*;
import okhttp3.sse.EventSource;
import okhttp3.sse.EventSourceListener;
import org.apache.catalina.connector.ClientAbortException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.Assert;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import java.io.IOException;

/**
 * SSE listener
 */
public class SseEventSourceListener extends EventSourceListener {

    private static final Logger log = LoggerFactory.getLogger(SseEventSourceListener.class);

    private final SseEmitter sseEmitter;

    public SseEventSourceListener(SseEmitter sseEmitter) {
        Assert.notNull(sseEmitter, "sseEmitter cannot null.");
        this.sseEmitter = sseEmitter;
    }

    @Override
    public void onEvent(EventSource eventSource, String id, String type, String data) {
        log.debug("Execute onEvent method id: {}, type: {}, data: {}", id, type, data);
        try {
            sseEmitter.send(SseEmitter.event().name(type).data(data).id(id));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public void onOpen(EventSource eventSource, Response response) {
        log.debug("Execute onOpen method, response: {}", response);
    }

    @Override
    public void onClosed(EventSource eventSource) {
        sseEmitter.complete();
        log.debug("onClosed event");
    }

    @Override
    public void onFailure(EventSource eventSource, Throwable e, Response response) {
        sseEmitter.completeWithError(e);
        // 客户端主动断开连接，不处理
        if (e instanceof ClientAbortException) {
            log.warn("客户端连接已断开", e);
            return;
        }
        log.error("sse failure, response:{}", response, e);
    }
}