package com.plt.grp05h5.integration.http;

import com.netease.cloud.RemoteCallApi;
import com.netease.cloud.RemoteCallApiClient;
import com.netease.cloud.RemoteCallRequest;
import com.netease.cloud.RemoteCallResponse;
import okhttp3.*;
import okhttp3.internal.sse.RealEventSource;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.http.HttpHeaders;
import org.springframework.web.client.RestClientResponseException;
import org.springframework.web.servlet.mvc.method.annotation.SseEmitter;

import javax.annotation.PostConstruct;
import java.lang.reflect.InvocationTargetException;
import java.time.Duration;
import java.util.List;
import java.util.Map;

/**
 * http-sse 接口调用
 */
@RemoteCallApiClient
public class CallHttpSSEApiService implements RemoteCallApi {

    private static final Logger log = LoggerFactory.getLogger(CallHttpSSEApiService.class);

    private final MediaType DEFAULT_MEDIA_TYPE = MediaType.parse("application/json; charset=UTF-8");

    private OkHttpClient okHttpClient;

    @Autowired
    private Environment environment;

    int timeOut = 0;

    @PostConstruct
    public void init() {
        // 获取超时时间，默认 30s
        timeOut = HttpApiUtil.getTimeout(environment.getProperty("http_request_timeout"), environment.getProperty("custom.http_request_timeout"));
        Duration timeout = Duration.ofSeconds(timeOut);
        OkHttpClient.Builder builder = new OkHttpClient.Builder();
        builder.readTimeout(timeout).
                writeTimeout(timeout).
                connectTimeout(timeout);
        okHttpClient = builder.build();
    }

    @Override
    public <T, R> RemoteCallResponse<R> call(RemoteCallRequest<T, R> request) {
        if (!(request instanceof HttpCallRequest)) {
            throw new RuntimeException(request.getClass().toString() + " cant cast to HttpCallRequest");
        }
        //构建httpEntity
        HttpCallRequest<T, R> httpCallRequest = (HttpCallRequest<T, R>) request;
        try {
            SseEmitter sseEmitter = new SseEmitter((long) timeOut);
            Request okHttpRequest = buildOkHttpRequest(httpCallRequest);
            RealEventSource realEventSource = new RealEventSource(okHttpRequest, new SseEventSourceListener(sseEmitter));
            realEventSource.connect(okHttpClient);
            return (RemoteCallResponse<R>) (RemoteCallResponse<SseEmitter>) () -> sseEmitter;
        } catch (RestClientResponseException e) {
            log.error("okhttp call RestClientResponseException error", e);
            throw new RuntimeException(e.getResponseBodyAsString(), e);
        } catch (Exception ex) {
            log.error("okhttp call error:{}, request:{}", ex, HttpApiUtil.toJSONString(request));
            throw new RuntimeException(ex.getMessage(), ex);
        }
    }

    /**
     * 构建 okhttp请求体
     *
     * @param httpCallRequest 请求参数
     * @param <T>
     * @param <R>
     * @return 构造好的okhttp请求体
     * @throws InvocationTargetException
     * @throws IllegalAccessException
     */
    public <T, R> Request buildOkHttpRequest(HttpCallRequest<T, R> httpCallRequest) throws InvocationTargetException, IllegalAccessException {
        String url = httpCallRequest.getUrl();
        if (StringUtils.isEmpty(url)) {
            throw new RuntimeException("http url can not be null");
        }
        String body = getRequestBody(httpCallRequest);
        MediaType requestMediaType = getRequestMediaType(httpCallRequest.getHeaders());
        RequestBody requestBody = RequestBody.create(body, requestMediaType);
        Request.Builder requestBuilder = new Request.Builder();
        // 处理header
        if (httpCallRequest.getHeaders() != null && httpCallRequest.getHeaders().size() > 0) {
            for (Map.Entry<String, List<String>> headerEntry : httpCallRequest.getHeaders().entrySet()) {
                List<String> headerValue = headerEntry.getValue();
                if (headerValue == null || headerValue.size() == 0) {
                    continue;
                }
                requestBuilder.addHeader(headerEntry.getKey(), headerEntry.getValue().get(0));
            }
        }

        // 构建带有查询参数的URL
        HttpUrl.Builder urlBuilder = HttpUrl.parse(url).newBuilder();
        if (httpCallRequest.getQueryString() != null && httpCallRequest.getQueryString().size() > 0) {
            for (Map.Entry<String, Object> queryEntry : httpCallRequest.getQueryString().entrySet()) {
                String key = queryEntry.getKey();
                Object value = queryEntry.getValue();
                if (key == null || value == null) {
                    continue;
                }
                if (value instanceof String) {
                    urlBuilder.addQueryParameter(key, (String) value);
                } else {
                    urlBuilder.addQueryParameter(key, HttpApiUtil.toJSONString(value));
                }
            }
        }
        Request.Builder reqBuilder = requestBuilder.url(urlBuilder.build().toString());
        String method = httpCallRequest.getRequestMethod().toString();
        switch (method) {
            case "GET":
                reqBuilder.get();
                break;
            case "HEAD":
                reqBuilder.head();
                break;
            case "POST":
                reqBuilder.post(requestBody);
                break;
            case "PUT":
                reqBuilder.put(requestBody);
                break;
            case "DELETE":
                reqBuilder.delete(requestBody);
                break;
            case "PATCH":
                reqBuilder.patch(requestBody);
                break;
            default:
                throw new RuntimeException("unsupported http method: " + method);
        }
        return reqBuilder.build();
    }

    /**
     * 解析 请求体ContentType, 默认为 application/json; charset=utf-8
     *
     * @param headers 请求头
     * @return 解析后的 ContentType
     */
    private MediaType getRequestMediaType(HttpHeaders headers) {
        if (headers == null || headers.getContentType() == null) {
            return DEFAULT_MEDIA_TYPE;
        }
        MediaType mediaType = MediaType.parse(headers.getContentType().toString());
        if (mediaType != null) {
            return mediaType;
        }
        return DEFAULT_MEDIA_TYPE;
    }

    /**
     * 获取请求体
     *
     * @param httpCallRequest http请求
     * @param <T>             请求体泛型
     * @param <R>             返回值泛型
     * @return 请全体
     * @throws InvocationTargetException ignore
     * @throws IllegalAccessException    ignore
     */
    private static <T, R> String getRequestBody(HttpCallRequest<T, R> httpCallRequest) throws InvocationTargetException, IllegalAccessException {
        String body = "";
        if (httpCallRequest.isHasXmlHeader()) {
            body = httpCallRequest.buildXmlDataParam();
        } else if (httpCallRequest.getHasFormDataHeader()) {
            body = HttpApiUtil.toJSONString(httpCallRequest.buildFormDataParam());
        } else {
            body = HttpApiUtil.toJSONString(DynamicJsonConvert.convertJsonField(httpCallRequest.getBody()));
        }
        return body;
    }

    @Override
    public String protocolType() {
        return "HTTP_SSE";
    }
}