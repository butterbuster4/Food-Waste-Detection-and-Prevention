package com.plt.grp05h5.service.system.iam;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.core.io.ClassPathResource;
import com.fasterxml.jackson.core.type.TypeReference;
import java.io.IOException;
import java.io.InputStream;
import java.util.Objects;
import java.util.Map;
import java.util.List;
import java.util.ArrayList;
import org.springframework.util.CollectionUtils;
import com.netease.codewave.domain.iam.api.authorization.IAuthorizationService;
import com.netease.codewave.domain.iam.api.domain.Resource;
import org.springframework.stereotype.Service;

/**
* 鉴权系统服务
*/
@Service
public class AuthorizationServiceImpl implements IAuthorizationService {


    private <T> T readFileToCollect(String filePath, TypeReference<T> typeReference) {
        ClassPathResource classPathResource = new ClassPathResource(filePath);
        InputStream inputStream = null;
        try {
            inputStream = classPathResource.getInputStream();
        } catch (IOException e) {
            return null;
        }
        T readValue = null;
        try {
            readValue = new ObjectMapper().readValue(inputStream, typeReference);
        } catch (IOException e) {
            return null;
        }
        return readValue;
    }

    public List<Resource> getUserResourceList(String userId) {
        List<Resource> uiResourceList = new ArrayList<>();
        List<Map> resourceMetaData = readFileToCollect("permission/resourceMetaData.json", new TypeReference<List<Map>>() {});
        if(!CollectionUtils.isEmpty(resourceMetaData)){
            resourceMetaData.stream().forEach(result->{
                Object resourceTypeObject = result.get("name");
                if(Objects.nonNull(resourceTypeObject)){
                    Resource item = new Resource();
                    item.setResourceType("ui");//与前端页约定类型，统一为ui
                    item.setResourceValue(resourceTypeObject.toString());
                    uiResourceList.add(item);
                }
            });
        }
        return uiResourceList;
   }



}