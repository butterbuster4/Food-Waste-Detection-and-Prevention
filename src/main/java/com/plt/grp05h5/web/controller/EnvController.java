package com.plt.grp05h5.web.controller;

import org.springframework.web.bind.annotation.GetMapping;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.plt.grp05h5.config.RemoteUserCenterProperties;
import java.util.HashMap;
import java.util.Map;
import com.plt.grp05h5.web.ApiReturn;
import com.plt.grp05h5.service.system.configuration.NaslConfigurationComponent;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;



/**
 * Get app properties
 *
 * @author ifcc
 */
@RestController
public class EnvController {
   @Autowired
   private RemoteUserCenterProperties remoteUserCenterConfig;
   private static final ObjectMapper MAPPER = new ObjectMapper();
    @Autowired
    private NaslConfigurationComponent naslConfigurationComponent;

   @GetMapping("/api/system/config")
   public Map<String, String> getEvnConfig() throws JsonProcessingException {
       Map<String, String> result = new HashMap<>();
       result.put("userCenter", MAPPER.writeValueAsString(remoteUserCenterConfig));
       return result;
   }
   @GetMapping("/api/system/getCustomConfigV2/{configKey}")
   public ApiReturn<String> getCustomConfigV2(@PathVariable("configKey") String configKey, @RequestParam(value = "group", required = false) String group) {
        return ApiReturn.of(naslConfigurationComponent.getUnPrivateCustomConfig(group, configKey));
   }

    @Deprecated
    @GetMapping("/api/system/getCustomConfig/{configKey}")
    public String getCustomConfig(@PathVariable("configKey") String configKey, @RequestParam(value = "group", required = false) String group) {
        return naslConfigurationComponent.getUnPrivateCustomConfig(group, configKey);
    }
}
