package com.plt.grp05h5.integration.http;

import com.plt.grp05h5.config.Constants;
import com.plt.grp05h5.config.JacksonConfiguration;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;

import java.io.IOException;
import java.time.LocalDate;
import java.time.ZonedDateTime;
import java.time.LocalTime;

/**
 * http接口工具类
 */
public class HttpApiUtil {

    private static final Logger log = LoggerFactory.getLogger(HttpApiUtil.class);

    //需要替换ObjectMapper, 否则日期处理会有问题
    private static final ObjectMapper objectMapper = new ObjectMapper();

    static {
        objectMapper.getSerializerProvider().setNullKeySerializer(new JsonSerializer() {
            @Override
            public void serialize(Object value, JsonGenerator jsonGenerator, SerializerProvider serializers) throws IOException {
                jsonGenerator.writeFieldName("");
            }
        });

        // 忽略对象中不存在的字段
        objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        JavaTimeModule javaTimeModule = new JavaTimeModule();
        javaTimeModule
                .addSerializer(LocalDate.class, new JacksonConfiguration.LcpLocalDateSerializer())
                .addDeserializer(LocalDate.class, new JacksonConfiguration.LcpLocalDateDeserializer())
                .addSerializer(LocalTime.class, new JacksonConfiguration.LcpLocalTimeSerializer())
                .addDeserializer(LocalTime.class, new JacksonConfiguration.LcpLocalTimeDeserializer())
                .addSerializer(ZonedDateTime.class, new JacksonConfiguration.LcpZonedDateTimeSerializer())
                .addDeserializer(ZonedDateTime.class, new JacksonConfiguration.LcpZonedDateTimeDeserializer())
                .addKeySerializer(LocalTime.class,new JacksonConfiguration.LcpLocalTimeKeySerializer())
                .addKeySerializer(ZonedDateTime.class,new JacksonConfiguration.LcpZonedDateTimeKeySerializer())
                .addKeySerializer(LocalDate.class,new JacksonConfiguration.LcpLocalDateKeySerializer())
                .addKeyDeserializer(LocalTime.class,new JacksonConfiguration.LcpLocalTimeKeyDeserializer())
                .addKeyDeserializer(ZonedDateTime.class,new JacksonConfiguration.LcpZonedDateTimeKeyDeserializer())
                .addKeyDeserializer(LocalDate.class,new JacksonConfiguration.LcpLocalDateKeyDeserializer());
        objectMapper.registerModule(javaTimeModule);
    }

    public static String toJSONString(Object value) {
        if (value == null) {
            return null;
        }
        if (value instanceof String) {
            return (String) value;
        }
        try {
            return objectMapper.writeValueAsString(value);
        } catch (JsonProcessingException e) {
            log.error("toJSONString error:{}, value {}", e, value);
            throw new RuntimeException(e);
        }
    }

    /**
     * 获取超时时间配置，默认30秒。
     * 优先取系统参数配置，若无系统参数配置，则取自定义参数配置
     */
    public static int getTimeout(String systemTimeout, String customTimeout) {
        // 获取系统配置
        if (StringUtils.isNotEmpty(systemTimeout)) {
            return getTimeout(systemTimeout);
        }
        // 未获取到系统参数配置，获取自定义参数配置
        if (StringUtils.isNotEmpty(customTimeout)) {
            return getTimeout(customTimeout);
        }
        // 均未找到，返回默认超时时间
        return Constants.HTTP_TIMEOUT_READ_MILLIS;
    }

    /**
     * 兼容带秒的超时时间，如果解析数字报错，返回默认超时时间，防止用户设置参数错误，导致发布失败
     *
     * @param originTimeout 原始超时时间
     * @return 处理后的超时时间
     */
    private static int getTimeout(String originTimeout) {
        try {
            return Integer.parseInt(originTimeout.toLowerCase().split("s")[0]) * 1000;
        } catch (Exception e) {
            // 解析异常，说明用户配置超时时间非法，使用默认值
            log.error("http_request_timeout配置错误,timeout:{}, e:{}", originTimeout, e);
        }
        return Constants.HTTP_TIMEOUT_READ_MILLIS;
    }
}