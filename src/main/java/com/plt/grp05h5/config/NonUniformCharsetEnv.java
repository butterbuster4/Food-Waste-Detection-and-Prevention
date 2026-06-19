package com.plt.grp05h5.config;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.InitializingBean;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.convert.ConversionService;
import org.springframework.core.env.Environment;
import org.springframework.core.env.PropertySource;
import org.springframework.web.context.ConfigurableWebEnvironment;

import java.util.Optional;

/**
 * @author system
 */
@Configuration
public class NonUniformCharsetEnv implements InitializingBean {

    private final Logger log = LoggerFactory.getLogger(NonUniformCharsetEnv.class);

    @Autowired
    private Environment env;

    private PropertySource propertySource;

    @Autowired
    private ConversionService conversionService;

    public String getProperty(String key) {
        if (propertySource == null) {
            log.info("connector propertySource is null");
            return env.getProperty(key);
        }
        Object propertyValue = propertySource.getProperty(key);
        if (propertyValue == null) {
            log.info("connector propertySource getProperty :{} is null", key);
            return null;
        }
        try {
            return conversionService.convert(propertyValue, String.class);
        } catch (Exception e) {
            log.error("Failed to convert property value for key: {} to String", key, e);
            return null;
        }
    }

    public <T> T getProperty(String key, Class<T> targetType) {
        if (propertySource == null) {
            log.info("connector getPropertyWithType propertySource is null");
            return env.getProperty(key, targetType);
        }
        Object value = propertySource.getProperty(key);
        if (value == null) {
            return null;
        }
        try {
            return conversionService.convert(value, targetType);
        } catch (Exception e) {
            log.error("Failed to convert property value for key: {} to type: {}", key, targetType.getName(), e);
            return null;
        }
    }


    @Override
    public void afterPropertiesSet() throws Exception {
        // 兼容servlet和reactive
        if (env instanceof ConfigurableWebEnvironment) {
            ConfigurableWebEnvironment webEnvironment = (ConfigurableWebEnvironment) env;
            Optional<PropertySource<?>> originTrackedMapPropertySource = webEnvironment.getPropertySources().stream().filter(propertySource -> propertySource.getClass().getName().equals("org.springframework.boot.env.OriginTrackedMapPropertySource")).findFirst();
            originTrackedMapPropertySource.ifPresent(source -> propertySource = source);
        }
    }
}