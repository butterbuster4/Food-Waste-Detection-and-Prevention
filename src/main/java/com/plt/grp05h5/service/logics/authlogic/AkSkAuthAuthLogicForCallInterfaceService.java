package com.plt.grp05h5.service.logics.authlogic; 

import org.springframework.stereotype.Service; 
import org.slf4j.Logger; 
import org.slf4j.LoggerFactory; 
import com.plt.grp05h5.domain.http.HttpRequest; 
import com.plt.grp05h5.config.Constants; 
import com.netease.codewave.nasl.java.tools.Buildins; 

@Service
public class AkSkAuthAuthLogicForCallInterfaceService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);

    public HttpRequest auth(HttpRequest<String> request) {
        String ak = "";
        String sk = "";
        String timestamp = "";
        String signature = "";
        ak = "Codewave"; 
        Buildins.function().mapPut(request.headers, "ak", ak);
        sk = "Codewave"; 
        timestamp = Buildins.function().toString(Buildins.function().currDateTime()); 
        Buildins.function().mapPut(request.headers, "timestamp", timestamp);
        signature = (ak + (sk + timestamp)); 
        Buildins.function().mapPut(request.headers, "signature", signature);
        return request;
    } 

}
