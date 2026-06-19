package com.plt.grp05h5.integration.http;

import com.plt.grp05h5.util.JacksonUtils;
import org.apache.commons.lang3.ClassUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.lang.reflect.Field;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.LocalDateTime;
import java.time.ZonedDateTime;
import java.time.OffsetDateTime;
import java.util.*;

/**
 * 将对象中的被 MetadataJson 标记的String类型转为 Object类型
 */
public class DynamicJsonConvert {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger("LCAP_EXTENSION_LOGGER");

    private static final ThreadLocal<Boolean> HANDLED_JSON_FIELD = ThreadLocal.withInitial(() -> false);

    /**
     * 对象中的被 MetadataJson 标注的String类型转为 Object类型
     *
     * @param origin 原始对象
     * @return 转换后的对象, 可能是 null、Map、List<Map>
     */
    public static Object convertJsonField(Object origin) {
        try {
            // 记录处理过的数据
            Map<Object, Object> records = new IdentityHashMap<>();
            Object converted = handleJsonField(origin, records);
            // 判断是否转换过数据，如果转换过，使用转换后的数据
            if (HANDLED_JSON_FIELD.get()) {
                return converted;
            }
            // 如果未转换过，仍然使用数据
            return origin;
        } catch (Throwable error) {
            LCAP_LOGGER.error("convertJsonField error", error);
            // 转换出现异常时，返回原始数据进行兜底
            return origin;
        } finally {
            HANDLED_JSON_FIELD.remove();
        }
    }

    /**
     * 对象中的被 MetadataJson 标注的String类型转为 Object类型
     *
     * @param origin  原始对象
     * @param records 记录已经处理过的对象,避免循环引用
     * @return 转换后的对象, 可能是 null、Map、List<Map>
     */
    private static Object handleJsonField(Object origin, Map<Object, Object> records) {
        // 为空直接返回
        if (origin == null) {
            return null;
        }
        // 已经处理过，不处理，避免循环引用
        if (records.containsKey(origin)) {
            return records.get(origin);
        }
        Class<?> originClazz = origin.getClass();
        // 如果是基础类型、基础类型包装类、 String类型、枚举类型，Class 类型，直接返回
        if (ClassUtils.isPrimitiveOrWrapper(originClazz)
                || String.class.equals(originClazz)
                || originClazz.isEnum()
                || isDateType(originClazz)
                || BigDecimal.class.equals(originClazz)
                || origin instanceof Class) {
            return origin;
        }
        // 数组类型,也直接返回，目前通过低代码平台构造不出数组类型
        if (originClazz.isArray()) {
            return origin;
        }

        // 处理List类型
        if (origin instanceof List) {
            return handleJsonList((List<?>) origin, records);
        }
        // 处理Map类型
        if (origin instanceof Map) {
            return handleJsonMap((Map<?, ?>) origin, records);
        }
        // 余下是对象类型
        Map<Object, Object> result = new HashMap<>();
        records.put(origin, result);
        // 遍历字段
        Class<?> bodyClass = origin.getClass();
        Field[] declaredFields = bodyClass.getDeclaredFields();
        for (Field field : declaredFields) {
            field.setAccessible(true);
            String fieldName = field.getName();
            Object fieldValue = null;
            try {
                fieldValue = field.get(origin);
            } catch (IllegalAccessException e) {
                LCAP_LOGGER.warn("get field value error", e);
            }
            result.put(field.getName(), fieldValue);
            // value 为null，直接返回
            if (fieldValue == null) {
                continue;
            }
            // 该字段本身是 Json String类型
            if (field.isAnnotationPresent(MetadataJson.class)) {
                Object jsonObject = fieldValue;
                // 如果值是 String
                if (fieldValue instanceof String) {
                    // 反序列化为对象类型
                    String fieldValueStr = (String) fieldValue;
                    jsonObject = JacksonUtils.fromJson(fieldValueStr, Object.class);
                    HANDLED_JSON_FIELD.set(true);
                }else if(fieldValue instanceof List){
                    // 说明是 List<JSON> 或者 List<List<...JSON>>
                    jsonObject = convertListJson((List<?>) fieldValue);
                    HANDLED_JSON_FIELD.set(true);
                }

                result.put(fieldName, jsonObject);

            } else {
                result.put(fieldName, handleJsonField(fieldValue, records));
            }
        }
        return result;
    }

    private static Object convertListJson(List<?> fieldValue) {
        // 空 list 不处理
        if (fieldValue == null || fieldValue.size() == 0) {
            return fieldValue;
        }
        // 遍历 list 进行元素数据转换
        List<Object> result = new ArrayList<>();
        Object listValue = fieldValue.get(0);
        if (listValue instanceof String) {
            fieldValue.forEach(item -> {
                // 反序列化为对象类型
                String itemValueStr = (String) item;
                result.add(JacksonUtils.fromJson(itemValueStr, Object.class));
            });
        } else if (listValue instanceof List) {
            fieldValue.forEach(item -> {
                // 反序列化为对象类型
                List<?> itemList = (List<?>) item;
                result.add(convertListJson(itemList));
            });
        }
        return result;
    }


    private static Object handleJsonMap(Map<?, ?> originMap, Map<Object, Object> records) {
        if (originMap == null || originMap.size() == 0) {
            return originMap;
        }
        Object cache = records.get(originMap);
        if (cache != null) {
            return cache;
        }
        Map<Object, Object> result = new HashMap<>();
        for (Map.Entry<?, ?> entry : originMap.entrySet()) {
            result.put(entry.getKey(), handleJsonField(entry.getValue(), records));
        }
        return result;
    }

    private static Object handleJsonList(List<?> originList, Map<Object, Object> records) {
        if (originList == null || originList.size() == 0) {
            return originList;
        }
        Object cache = records.get(originList);
        if (cache != null) {
            return cache;
        }
        // 遍历 list 进行元素数据转换
        List<Object> result = new ArrayList<>();
        originList.forEach(item -> result.add(handleJsonField(item, records)));
        return result;
    }

    public static boolean isDateType(Class<?> clazz) {
        return Date.class.isAssignableFrom(clazz) ||
                Calendar.class.isAssignableFrom(clazz) ||
                clazz == LocalDate.class ||
                clazz == LocalTime.class ||
                clazz == LocalDateTime.class ||
                clazz == ZonedDateTime.class ||
                clazz == OffsetDateTime.class;
    }
}