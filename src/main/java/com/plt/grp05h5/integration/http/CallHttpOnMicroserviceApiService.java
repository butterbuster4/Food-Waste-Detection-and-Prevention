package com.plt.grp05h5.integration.http;

import org.springframework.web.client.RestClientResponseException;
import com.netease.cloud.RemoteCallApi;
import com.netease.cloud.RemoteCallRequest;
import com.netease.cloud.RemoteCallResponse;
import com.netease.cloud.RemoteCallApiClient;

/**
 * 调用 微服务 注册中心 http接口
 */
@RemoteCallApiClient
public class CallHttpOnMicroserviceApiService implements RemoteCallApi{

    @Override
    public <T, R> RemoteCallResponse<R> call(RemoteCallRequest<T, R> request) {
        if (!(request instanceof HttpCallRequest)) {
            throw new RuntimeException(request.getClass().toString() + " cant cast to HttpCallRequest");
        }
        //构建httpEntity
        HttpCallRequest<T, R> httpCallRequest = (HttpCallRequest<T, R>) request;
        try {
             // 从request中拿连接器对象，以及连接器函数
             return new HttpCallResponse<>(httpCallRequest.getConnectorFunction().apply((T) httpCallRequest));
        } catch (RestClientResponseException e) {
            throw new RuntimeException(e.getResponseBodyAsString(), e);
        } catch (Exception ex) {
            throw new RuntimeException(ex.getMessage(), ex);
        }
    }

    @Override
    public String protocolType() {
        return "HTTP_ON_MICROSERVICE";
    }
}
