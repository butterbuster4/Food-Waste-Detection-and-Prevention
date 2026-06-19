package com.plt.grp05h5.config;

import com.fasterxml.jackson.annotation.JsonTypeName;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.*;
import com.fasterxml.jackson.databind.deser.ContextualDeserializer;
import com.fasterxml.jackson.databind.node.*;
import com.google.common.collect.Lists;
import com.plt.grp05h5.annotation.UnionTypes;
import com.plt.grp05h5.util.JacksonUtils;
import com.netease.codewave.nasl.java.definition.enumeration.BaseEnum;
import com.netease.codewave.nasl.java.definition.error.BaseError;
import org.apache.commons.collections4.CollectionUtils;
import org.apache.commons.collections4.MapUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.xmlbeans.impl.regex.Match;

import java.io.IOException;
import java.lang.reflect.Field;
import java.lang.reflect.Type;
import java.lang.reflect.ParameterizedType;
import java.math.BigDecimal;
import java.time.*;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
import java.util.*;
import java.util.stream.Collectors;

public class UnionTypeParseDeserializer extends JsonDeserializer<Object> implements ContextualDeserializer {
    /**
     * 字段标记的注解
     */
    protected UnionTypes annotation;
    /**
     * 反序列化的字段类型
     */
    protected Class<?> fieldClass;
    /**
     * 反序列化的字段名
     */
    protected String fieldName;

    @Override
    public JsonDeserializer<?> createContextual(DeserializationContext prov, BeanProperty property) throws JsonMappingException {
        this.fieldClass = property.getType().getRawClass();
        this.fieldName = property.getName();
        annotation = property.getAnnotation(UnionTypes.class);
        if (Objects.isNull(annotation)) {
            return prov.findContextualValueDeserializer(property.getType(), property);
        }
        return this;
    }

    @Override
    public Object deserialize(JsonParser p, DeserializationContext ctxt) throws IOException {
        JsonNode node = p.getCodec().readTree(p);
        String types = annotation.value();
        if (StringUtils.isEmpty(types)) {
            return node;
        }
        List<UnionType> unionTypeList = JacksonUtils.fromJson(types, new TypeReference<List<UnionType>>() {
        });
        if (Map.class.isAssignableFrom(fieldClass)) {
            ObjectNode objectNode = (ObjectNode) node;
            if (objectNode == null || objectNode.isEmpty()) {
                return node;
            }
            UnionType unionType = unionTypeList.get(0);
            Iterator<Map.Entry<String, JsonNode>> fields = objectNode.fields();
            LinkedHashMap<Object, Object> result = new LinkedHashMap<>();
            while (fields.hasNext()) {
                Map.Entry<String, JsonNode> entry = fields.next();
                JsonNode keyNode = TextNode.valueOf(entry.getKey());
                JsonNode valueNode = entry.getValue();
                MatchResult<Object> formatKeyNode = UnionTypeMatcher.bestMatch(keyNode, unionType.keyArguments);
                if (formatKeyNode.getResult().getClass().equals(TextNode.class)) {
                    formatKeyNode.setResult(keyNode.asText());
                }
                result.put(formatKeyNode, UnionTypeMatcher.bestMatch(valueNode, unionType.valueArguments).getResult());
            }
            return result;
        } else if (List.class.isAssignableFrom(fieldClass)) {
            ArrayNode arrayNode = (ArrayNode) node;
            List<Object> resultList = new ArrayList<>();
            if (arrayNode == null || arrayNode.isEmpty()) {
                return new ArrayList<>();
            }
            for (int i = 0; i < arrayNode.size(); i++) {
                resultList.add(UnionTypeMatcher.bestMatch(arrayNode.get(i), unionTypeList).getResult());
            }
            return resultList;
        } else if (Object.class.isAssignableFrom(fieldClass)) {
            return UnionTypeMatcher.bestMatch(node, unionTypeList).getResult();
        }
        return node;
    }


    /**
     * 类型映射工具类
     */
    public static class UnionTypeMatcher {

        public static final List<Class<? extends ValueNode>> longPrimitiveTypes = Lists.newArrayList(IntNode.class, ShortNode.class, LongNode.class, BigIntegerNode.class);
        public static final List<Class<? extends ValueNode>> bigDecimalPrimitiveTypes = Lists.newArrayList(DecimalNode.class, FloatNode.class, DoubleNode.class);
        // 相关联的父子类型
        public static final Map<Class<?>, Class<?>[]> relationalTypeMap = new HashMap<>();

        static {
            relationalTypeMap.put(String.class, new Class[]{LocalDate.class, LocalTime.class, ZonedDateTime.class});
            relationalTypeMap.put(BigDecimal.class, new Class[]{Long.class});
        }


        public static MatchResult<Object> bestMatch(JsonNode jsonNode, List<UnionType> unionTypes) {
            if (CollectionUtils.isEmpty(unionTypes)) return new MatchResult<>(jsonNode,true);
            if (jsonNode instanceof ValueNode) {
                List<UnionType> primitiveTypes = filterPrimitiveTypes(unionTypes);
                if (CollectionUtils.isNotEmpty(primitiveTypes)) {
                    return parsePrimitiveObject(jsonNode, primitiveTypes);
                }
            } else if (jsonNode instanceof ObjectNode) {
                List<UnionType> objectTypes = filterObjectTypes(unionTypes);
                if (CollectionUtils.isNotEmpty(objectTypes)) {
                    return parseStructuredObject(jsonNode, objectTypes);
                }
            } else if (jsonNode instanceof ArrayNode) {
                List<UnionType> listTypes = filterArrayTypes(unionTypes);
                if (CollectionUtils.isNotEmpty(listTypes)) {
                    return parseArrayObject(jsonNode, listTypes);
                }
            }
            return new MatchResult<>(jsonNode,true);
        }

        private static MatchResult<Object> parsePrimitiveObject(JsonNode jsonNode, List<UnionType> primitiveTypes) {
            //优先匹配枚举
            if (jsonNode instanceof TextNode) {
                //尝试匹配枚举
                Class<?> tryEnumClass = matchEnumType(jsonNode, primitiveTypes);
                if (tryEnumClass != null) {
                    return new MatchResult<>(parseEnumObject(tryEnumClass, jsonNode.asText()),true);
                }
            }
            Object finalResult = jsonNode;
            boolean strict = true;
            // 匹配基础类型
            Class<?> type = matchPrimitiveType(jsonNode);
            Class<?> finalType = type;
            if (primitiveTypes.stream().noneMatch(t -> t.getTypeClass().equals(finalType))) {
                // 再尝试匹配其父类型（可退化类型），比如Date的对应的String，详见typeMap
                type = getParentType(type);
                strict = false;
            }
            Class<?> finalType1 = type;
            if (primitiveTypes.stream().anyMatch(t -> t.getTypeClass().equals(finalType1))) {
                String value = jsonNode.asText();
                if (type.equals(Long.class)) {
                    finalResult =  Long.valueOf(value);
                } else if (type.equals(BigDecimal.class)) {
                    finalResult =   BigDecimal.valueOf(Double.parseDouble(value));
                } else if (type.equals(Boolean.class)) {
                    finalResult =   Boolean.valueOf(value);
                } else if (type.equals(LocalDate.class)) {
                    finalResult =   tryParseLocalDate(value);
                } else if (type.equals(LocalTime.class)) {
                    finalResult =   tryParseLocalTime(value);
                } else if (type.equals(ZonedDateTime.class)) {
                    finalResult =   tryParseZonedDateTime(value);
                } else if (type.isEnum()) {
                    finalResult =   parseEnumObject(type, value);
                } else {
                    finalResult =   value;
                }
            }
            return new MatchResult<>(finalResult, strict);
        }

        private static MatchResult<Object> parseArrayObject(JsonNode jsonNode, List<UnionType> unionTypes) {
            ArrayNode arrayNode = (ArrayNode) jsonNode;
            Map<UnionType, List<Object>> matchedListMap = new HashMap<>();
            Map<UnionType, Integer> matchedListScore = new HashMap<>();
            for (UnionType type : unionTypes) {
                boolean match = true;
                int score = 100;
                List<Object> list = new ArrayList<>(arrayNode.size());
                for (int i = 0; i < arrayNode.size(); i++) {
                    JsonNode node = arrayNode.get(i);
                    MatchResult<Object> o = bestMatch(node, type.getValueArguments());
                    if (node.equals(o.getResult())) {
                        //未转换成功
                        match = false;
                        break;
                    }else {//匹配成功
                        // 非严格匹配，则减分
                        if(!o.isStrict()){
                            score--;
                        }
                        list.add(o.getResult());
                    }
                }
                if (match) {
                    matchedListMap.put(type, list);
                    matchedListScore.put(type, score);
                }
            }
            if(MapUtils.isNotEmpty(matchedListMap)){
                //查看matchedListScore的谁的分数最高
                UnionType maxUnionType = matchedListScore.entrySet().stream().max(Comparator.comparingInt(Map.Entry::getValue)).map(Map.Entry::getKey).get();
                return new MatchResult<>(matchedListMap.get(maxUnionType), matchedListScore.get(maxUnionType) == 100);

            }
            return new MatchResult<>(jsonNode,true);
        }

        public static MatchResult<Object> parseStructuredObject(JsonNode jsonNode, List<UnionType> structureTypes) {
            if (jsonNode instanceof ObjectNode) {
                Map<String, FieldType> fieldTypes = collectFieldTypesFromJsonNode(jsonNode).getPropertyTypes();
                List<UnionType> mapTypes = new ArrayList<>();
                LinkedHashMap<Class<?>, Map<String, FieldType>> structureFiledNamesMap = new LinkedHashMap<>();
                // 对对象型进行排序
                structureTypes.sort(customComparator);
                for (UnionType type : structureTypes) {
                    if (isMapType(type)) {
                        //map类型的单独处理
                        mapTypes.add(type);
                        continue;
                    }
                    structureFiledNamesMap.put(type.getTypeClass(), collectFieldTypesFromClass(type.getTypeClass()).getPropertyTypes());
                }
                // 遍历对象类型
                LinkedHashMap<Class<?>,Integer> matchedStructureScore = new LinkedHashMap<>();
                for (Map.Entry<Class<?>, Map<String, FieldType>> entry : structureFiledNamesMap.entrySet()) {
                    Map<String, FieldType> classFieldNameList = entry.getValue();
                    MatchScore score = new MatchScore(100);
                    MatchResult<Boolean> matchResult = compareObjectPropertyList(fieldTypes, classFieldNameList,score);
                    if (matchResult.getResult()) {
                        matchedStructureScore.put(entry.getKey(), score.getScore());
                    }
                }
                if (MapUtils.isNotEmpty(matchedStructureScore)) {
                    //按照分数，从高到低排序
                    List<Class<?>> sortedMatchedClassList = matchedStructureScore.entrySet().stream().sorted(Comparator.comparingInt(Map.Entry::getValue)).map(Map.Entry::getKey).collect(Collectors.toList());
                    for (Class<?> maxType : sortedMatchedClassList) {
                        try {
                            // 兼容@JsonTypeName类型不匹配场景
                            return new MatchResult<>(JacksonUtils.fromJson(jsonNode, maxType), true);
                        } catch (Exception e) {
                            //如果转换失败，则继续下一个
                        }
                    }
                }
                //处理Map类型
                if (CollectionUtils.isNotEmpty(mapTypes)) {
                    Map<UnionType,Integer> matchedMapScore = new HashMap<>();
                    for (UnionType mapType : mapTypes) {
                        boolean match = true;
                        int score = 100;
                        for (String keyName : fieldTypes.keySet()) {
                            boolean isKeyMatch = false;
                            if(match){
                                Class<?> keyType = deserializeMapKeyLiteral2Type(keyName);
                                List<UnionType> keyArguments = mapType.getKeyArguments();
                                for (UnionType keyArgument : keyArguments) {
                                  MatchResult<Boolean> twoTypeMatchResult = matchTwoType(keyType, keyArgument.getTypeClass());
                                  if(twoTypeMatchResult.getResult()){
                                      isKeyMatch = true;
                                      if(!twoTypeMatchResult.isStrict()){
                                          score--;
                                      }
                                      break;
                                  }
                                }
                            }
                            if (!isKeyMatch) {
                                match = false;
                            }
                        }
                        if (match) {
                            for (FieldType itemFieldType : fieldTypes.values()) {
                                boolean isValueMatch = false;
                                if(match){
                                    List<UnionType> valueArguments = mapType.getValueArguments();
                                    for (UnionType valueArgument : valueArguments) {
                                        MatchResult<Boolean> twoTypeMatchResult =  matchTwoType(itemFieldType.getType(), valueArgument.getTypeClass());
                                        if(twoTypeMatchResult.getResult()){
                                            isValueMatch = true;
                                            if(!twoTypeMatchResult.isStrict()){
                                                score--;
                                            }
                                            break;
                                        }
                                    }
                                }
                                if (!isValueMatch) {
                                    match = false;
                                }
                            }
                        }
                        if (match) {
                            matchedMapScore.put(mapType, score);
                        }
                    }
                    if (MapUtils.isNotEmpty(matchedMapScore)) {
                        // 查看matchedMapScore的谁的分数最高
                        UnionType mapType = matchedMapScore.entrySet().stream().max(Comparator.comparingInt(Map.Entry::getValue)).map(Map.Entry::getKey).get();
                        Map<Object, Object> map = new LinkedHashMap<>();
                        for (String fieldTypeName : fieldTypes.keySet()) {
                            map.put(bestMatch(deserializeMapKeyLiteral2JsonNode(fieldTypeName, mapType.getKeyArguments()), mapType.getKeyArguments()).getResult(),
                                    bestMatch(jsonNode.get(fieldTypeName), mapType.getValueArguments()).getResult());
                        }
                        return new MatchResult<>(map,true);
                    }
                }
            }
            return new MatchResult<>(jsonNode,true);
        }

        public static Class<?> deserializeMapKeyLiteral2Type(String value) {
            // 判断是否为数字
            if (StringUtils.isNumeric(value)) {
                return Long.class;
            }
            //判断是否含有小数
            if (StringUtils.isNumeric(value.replaceAll("\\.", "")
                    .replaceAll("E", "")
                    .replaceAll("e", ""))
                    && value.contains(".")) {
                return BigDecimal.class;
            }
            //判断是否为Boolean
            if (("true".equalsIgnoreCase(value))) {
                return Boolean.class;
            }
            if (("false".equalsIgnoreCase(value))) {
                return Boolean.class;
            }
            return String.class;
        }

        //尝试将Map的Key的字符串转为对应的类型
        public static JsonNode deserializeMapKeyLiteral2JsonNode(String value, List<UnionType> definitionKeyTypes) {
            JsonNode jsonNode = new TextNode(value);
            // 判断是否为数字
            if (StringUtils.isNumeric(value) && definitionKeyTypes.stream().anyMatch(type -> type.getTypeClass() == Long.class)) {
                return new LongNode(Long.parseLong(value));
            }
            //判断是否含有小数
            if (StringUtils.isNumeric(value.replaceAll("\\.", "")
                    .replaceAll("E", "")
                    .replaceAll("e", "")) && value.contains(".") && definitionKeyTypes.stream().anyMatch(type -> type.getTypeClass() == BigDecimal.class)) {
                return new DoubleNode(Double.parseDouble(value));
            }
            //判断是否为Boolean
            if (("true".equalsIgnoreCase(value) || "false".equalsIgnoreCase(value)) && definitionKeyTypes.stream().anyMatch(type -> type.getTypeClass() == Boolean.class)) {
                if ("true".equalsIgnoreCase(value)) {
                    return BooleanNode.TRUE;
                }
                return BooleanNode.FALSE;
            }
            return jsonNode;
        }


        /**
         * 深度比较两个 Map<String, FieldType> 是否相等。
         *
         * @param map1  第一个要比较的映射
         * @param map2  第二个要比较的映射
         * @param score
         * @return 如果两个映射在结构和内容上都相同，则返回 true；否则返回 false。
         */
        public static MatchResult<Boolean> compareObjectPropertyList(Map<String, FieldType> map1, Map<String, FieldType> map2, MatchScore score) {
            if (map1 == map2) {
                return new MatchResult<>(true, true );
            }
            if (map1 == null || map2 == null || map1.size() != map2.size()) {
                return new MatchResult<>(false, true );
            }
            for (String key : map1.keySet()) {
                if (!map2.containsKey(key)) {
                    return new MatchResult<>(false, true );
                }
                FieldType ft1 = map1.get(key);
                FieldType ft2 = map2.get(key);
                if (isListType(ft2.getType())) {
                    List<Type> parameterizedTypes = ft2.getParameterizedTypes();
                    Type type = parameterizedTypes.get(0);
                    Map<String, FieldType> fieldTypeMap = ft1.getPropertyTypes();
                    //list的每一个ITEM进行类型匹配，如果不成功，则尝试退化类型再匹配
                    for (FieldType itemFieldType : fieldTypeMap.values()) {
                        if(isMapType(itemFieldType.getType()) && isStructuredType((Class<?>) type)){
                            MatchResult<Boolean> matchResult = compareObjectPropertyList(itemFieldType.getPropertyTypes(), collectFieldTypesFromClass((Class<?>) type).getPropertyTypes(), score);
                            if (!matchResult.getResult()) {
                                return new MatchResult<>(false, matchResult.isStrict());
                            }else {
                                if(!matchResult.isStrict()) score.add(-1);
                            }
                        }else {
                            MatchResult<Boolean> matchResult = matchTwoType(itemFieldType.getType(), (Class<?>) type);
                            if (!matchResult.getResult()) {
                                return new MatchResult<>(false, matchResult.isStrict());
                            }else {
                                if(!matchResult.isStrict()) score.add(-1);
                            }
                        }
                    }
                } else if (isMapType(ft2.getType())) {
                    List<Type> parameterizedTypes = ft2.getParameterizedTypes();
                    Type keyType = parameterizedTypes.get(0);
                    Type valueType = parameterizedTypes.get(1);
                    Map<String, FieldType> fieldTypeMap = ft1.getPropertyTypes();
                    //map的keys进行类型匹配，如果不成功，则尝试退化类型再匹配
                    for (String keyName : fieldTypeMap.keySet()) {
                        MatchResult<Boolean> matchResult = matchTwoType(deserializeMapKeyLiteral2Type(keyName), (Class<?>) keyType);
                        if (!matchResult.getResult()) {
                            return new MatchResult<>(false, matchResult.isStrict());
                        }else {
                            if(!matchResult.isStrict())  score.add(-1);
                        }
                    }
                    //map的values进行类型匹配，如果不成功，则尝试退化类型再匹配
                    for (FieldType itemFieldType : fieldTypeMap.values()) {
                        MatchResult<Boolean> matchResult = matchTwoType(itemFieldType.getType(), (Class<?>) valueType);
                        if (!matchResult.getResult()) {
                            return new MatchResult<>(false, matchResult.isStrict());
                        }else {
                            if(!matchResult.isStrict())  score.add(-1);
                        }
                    }
                } else if (isStructuredType(ft2.getType())) {
                    // 递归比较 referenceTypes
                    MatchResult<Boolean> matchResult = compareObjectPropertyList(ft1.getPropertyTypes(), ft2.getPropertyTypes(), score);
                    if (!matchResult.getResult()) {
                        return new MatchResult<>(false, matchResult.isStrict());
                    }else {
                        if(!matchResult.isStrict())  score.add(-1);
                    }
                } else {
                    // 比较 Class<?> type
                    MatchResult<Boolean> matchResult =matchTwoType(ft1.getType(), ft2.getType());
                    if (!matchResult.getResult()) {
                        return new MatchResult<>(false, matchResult.isStrict());
                    }else {
                        if(!matchResult.isStrict())  score.add(-1);
                    }
                }
            }
            return new MatchResult<>(true, true);
        }

        private static FieldType collectFieldTypesFromClass(Class<?> objectClass) {
            FieldType fieldType = new FieldType();
            fieldType.setType(objectClass);
            if (isStructuredType(objectClass)) {
                // 处理对象节点
                Field[] fields = objectClass.getDeclaredFields();
                Map<String, FieldType> fieldTypeMap = new LinkedHashMap<>();
                for (Field field : fields) {
                    String name = field.getName();
                    fieldTypeMap.put(name, convertField2FieldType(field));
                }
                //objectClass，如果是BaseError，需特殊处理
                if (BaseError.class.isAssignableFrom(objectClass)) {
                    fieldTypeMap.put("errorType", FieldType.stringFieldType());
                    fieldTypeMap.put("errorMsg", FieldType.stringFieldType());
                }
                fieldType.setType(objectClass);
                fieldType.setPropertyTypes(fieldTypeMap);
            }
            return fieldType;
        }

        private static FieldType collectFieldTypesFromJsonNode(JsonNode jsonNode) {
            FieldType fieldType = new FieldType();
            if (jsonNode instanceof ObjectNode) {
                // 处理对象节点
                Iterator<String> fieldNames = jsonNode.fieldNames();
                Map<String, FieldType> fieldTypeMap = new LinkedHashMap<>();
                while (fieldNames.hasNext()) {
                    String name = fieldNames.next();
                    JsonNode fieldNode = jsonNode.get(name);
                    if (fieldNode.isNull()) {
                        fieldTypeMap.put(name, FieldType.nullFieldType());
                    } else {
                        fieldTypeMap.put(name, convertJsonNode2FieldType(fieldNode));
                    }
                }
                fieldType.setType(Map.class);
                fieldType.setPropertyTypes(fieldTypeMap);
            } else if (jsonNode instanceof ArrayNode) {
                // 处理数组节点
                ArrayNode arrayNode = (ArrayNode) jsonNode;
                Map<String, FieldType> elementFieldTypes = new LinkedHashMap<>();
                if (!arrayNode.isEmpty()) {
                    for (int i = 0; i < arrayNode.size(); i++) {
                        elementFieldTypes.put(String.valueOf(i), convertJsonNode2FieldType(arrayNode.get(i)));
                    }
                }
                fieldType.setType(List.class);
                fieldType.setPropertyTypes(elementFieldTypes);

            } else {
                // 处理基本类型
                fieldType.setType(matchPrimitiveType(jsonNode));
            }

            return fieldType;

        }

        private static FieldType convertField2FieldType(Field field) {
            FieldType fieldType = new FieldType();
            fieldType.setType(field.getType());
            if (isStructuredType(field.getType())) {
                if (isMapType(field.getType()) && field.getGenericType() instanceof ParameterizedType) {
                    Type keyType = ((ParameterizedType) field.getGenericType()).getActualTypeArguments()[0];
                    Type valueType = ((ParameterizedType) field.getGenericType()).getActualTypeArguments()[1];
                    fieldType.setParameterizedTypes(Lists.newArrayList(keyType, valueType));
                } else {
                    fieldType.setPropertyTypes(collectFieldTypesFromClass(field.getType()).getPropertyTypes());
                }
            } else if (isListType(field.getType())) {
                if (field.getGenericType() instanceof ParameterizedType) {
                    Type parameterType = ((ParameterizedType) field.getGenericType()).getActualTypeArguments()[0];
                    fieldType.setParameterizedTypes(Lists.newArrayList(parameterType));
                }
            }
            return fieldType;
        }

        private static FieldType convertJsonNode2FieldType(JsonNode jsonNode) {
            FieldType fieldType = new FieldType();
            if (jsonNode instanceof ObjectNode) {
                fieldType.setType(Map.class);
                fieldType.setPropertyTypes(collectFieldTypesFromJsonNode(jsonNode).getPropertyTypes());

            } else if (jsonNode instanceof ArrayNode) {
                fieldType.setType(List.class);
                fieldType.setPropertyTypes(collectFieldTypesFromJsonNode(jsonNode).getPropertyTypes());

            } else {
                fieldType.setType(matchPrimitiveType(jsonNode));
            }
            return fieldType;
        }

        /**
         * 获取可退化的父类型
         *
         * @param type
         * @return
         */
        private static Class<?> getParentType(Class<?> type) {
            for (Map.Entry<Class<?>, Class<?>[]> entry : relationalTypeMap.entrySet()) {
                if (Arrays.asList(entry.getValue()).contains(type)) {
                    return entry.getKey();
                }
            }
            return type;
        }


        /**
         * 匹配两个类型
         */
        public static MatchResult<Boolean> matchTwoType(Class<?> type, Class<?> superType) {
            if (superType == null) {
                return new MatchResult<>(false, true);
            }
            // 如果子类型为空，则直接返回true, 考虑前端未赋值场景
            if (type == null) {
                return new MatchResult<>(true, true);
            }
            if (superType == Object.class || type == superType) {
                return new MatchResult<>(true, true);
            }
            // 判断是否是可退化的类型
            return new MatchResult<>(relationalTypeMap.containsKey(superType) && Arrays.asList(relationalTypeMap.get(superType)).contains(type), false);
        }

        public static boolean isMapType(UnionType type) {
            return isMapType(type.getType());
        }

        public static boolean isMapType(String typeName) {
            return "java.util.Map".equals(typeName);
        }

        public static boolean isMapType(Type type) {
            return type.equals(Map.class);
        }

        public static boolean isListType(Class<?> type) {
            return isListType(type.getName());
        }

        public static boolean isListType(String typeName) {
            return "java.util.List".equals(typeName);
        }

        /**
         * 过滤出数组型的TypeList
         *
         * @param unionTypes
         * @return
         */
        public static List<UnionType> filterArrayTypes(List<UnionType> unionTypes) {
            if (CollectionUtils.isEmpty(unionTypes)) return Lists.newArrayList();
            return unionTypes.stream().filter(type -> isListType(type.getTypeClass())).collect(Collectors.toList());
        }

        /**
         * 过滤出对象型的TypeList
         *
         * @param unionTypes
         * @return
         */
        public static List<UnionType> filterObjectTypes(List<UnionType> unionTypes) {
            if (CollectionUtils.isEmpty(unionTypes)) return Lists.newArrayList();
            return unionTypes.stream().filter(type -> isStructuredType(type.getTypeClass())).collect(Collectors.toList());
        }

        /**
         * 过滤出基础类型的TypeList
         *
         * @param unionTypes
         * @return
         */
        public static List<UnionType> filterPrimitiveTypes(List<UnionType> unionTypes) {
            if (CollectionUtils.isEmpty(unionTypes)) return Lists.newArrayList();
            return unionTypes.stream().filter(type -> isPrimitiveType(type.getTypeClass())).collect(Collectors.toList());
        }

        private static boolean isStructuredType(Class<?> clazz) {
            return !isPrimitiveType(clazz) && !clazz.equals(List.class);
        }

        private static boolean isPrimitiveType(Class<?> clazz) {
            return clazz.isPrimitive()
                    || clazz.equals(String.class)
                    || clazz.equals(BigDecimal.class)
                    || clazz.equals(Boolean.class)
                    || clazz.equals(Long.class)
                    || clazz.equals(Integer.class)
                    || clazz.equals(LocalDate.class)
                    || clazz.equals(LocalTime.class)
                    || clazz.equals(ZonedDateTime.class)
                    || clazz.equals(LocalDateTime.class)
                    || clazz.isEnum();
        }

        private static Class<?> matchPrimitiveType(JsonNode jsonNode) {
            String value = jsonNode.asText();
            if (jsonNode instanceof NumericNode) {
                if (longPrimitiveTypes.stream().anyMatch(c -> c.equals(jsonNode.getClass()))) {
                    return Long.class;
                } else if (bigDecimalPrimitiveTypes.stream().anyMatch(c -> c.equals(jsonNode.getClass()))) {
                    return BigDecimal.class;
                }
            } else if (jsonNode instanceof BooleanNode) {
                return Boolean.class;
            } else if (jsonNode instanceof ObjectNode) {
                return Object.class;
            } else if (jsonNode instanceof ArrayNode) {
                return Object.class;
            } else if (jsonNode instanceof TextNode) {
                if (isLocalDate(value)) {
                    return LocalDate.class;
                } else if (isLocalTime(value)) {
                    return LocalTime.class;
                } else if (isZonedDateTime(value)) {
                    return ZonedDateTime.class;
                }
            }
            return String.class;
        }

        public static Class<?> matchEnumType(JsonNode jsonNode, List<UnionType> primitiveTypes) {
            TextNode textNode = (TextNode) jsonNode;
            //枚举类型的处理
            List<UnionType> enumTypes = primitiveTypes.stream().filter(e -> e.getTypeClass().isEnum()).collect(Collectors.toList());
            if (CollectionUtils.isNotEmpty(enumTypes)) {
                for (UnionType type : enumTypes) {
                    for (Object enumConstant : type.getTypeClass().getEnumConstants()) {
                        if (enumConstant instanceof BaseEnum) {
                            if (textNode.asText().equals(((BaseEnum<?, ?>) enumConstant).getCode())) {
                                return type.getTypeClass();
                            }
                        }
                    }
                }
            }
            return null;
        }

        public static Object parseEnumObject(Class<?> enumClass, String value) {
            for (Object enumConstant : enumClass.getEnumConstants()) {
                if (enumConstant instanceof BaseEnum) {
                    BaseEnum<?, ?> baseEnum = (BaseEnum<?, ?>) enumConstant;
                    if (value.equals(baseEnum.getCode())) {
                        return enumConstant;
                    }
                }

            }
            return new TextNode(value);
        }

        public static boolean isZonedDateTime(String str) {
            return tryParseZonedDateTime(str) instanceof ZonedDateTime;
        }

        public static Object tryParseZonedDateTime(String dateTimeStr) {
            try {
                return ZonedDateTime.parse(dateTimeStr, DateTimeFormatter.ISO_ZONED_DATE_TIME);
            } catch (DateTimeParseException e) {
                return dateTimeStr;
            }
        }

        public static Object tryParseLocalDate(String dateStr) {
            try {
                return LocalDate.parse(dateStr, DateTimeFormatter.ISO_DATE);
            } catch (Exception e) {
                return dateStr;
            }
        }

        public static boolean isLocalDate(String str) {
            return tryParseLocalDate(str) instanceof LocalDate;
        }

        public static Object tryParseLocalTime(String str) {
            try {
                DateTimeFormatter isoFormatter = DateTimeFormatter.ISO_LOCAL_TIME;
                return LocalTime.parse(str, isoFormatter);
            } catch (Exception e) {
                return str;
            }
        }

        public static boolean isLocalTime(String str) {
            return tryParseLocalTime(str) instanceof LocalTime;
        }
    }

    public static class MatchScore{
        private int score;

        public MatchScore(int score) {
            this.score = score;
        }

        public void setScore(int score) {
            this.score = score;
        }
        public int getScore() {
            return score;
        }
        public MatchScore add(int score) {
            this.score += score;
            return this;
        }
    }

    public static class MatchResult<T> {
        //匹配结果
        private T result;
        //是否严格匹配
        private boolean strict;

        public MatchResult(T result, boolean strict) {
            this.result = result;
            this.strict = strict;
        }

        public T getResult() {
            return result;
        }

        public void setResult(T result) {
            this.result = result;
        }

        public boolean isStrict() {
            return strict;
        }

        public void setStrict(boolean strict) {
            this.strict = strict;
        }
    }

    // 假设 FieldType 是一个自定义类，用于保存字段的类型信息
    public static class FieldType  {
        private Class<?> type;
        private Map<String, FieldType> propertyTypes;
        private List<Type> parameterizedTypes;

        public static FieldType stringFieldType() {
            FieldType fieldType = new FieldType();
            fieldType.setType(String.class);
            return fieldType;
        }
        public static FieldType nullFieldType() {
            FieldType fieldType = new FieldType();
            fieldType.setType(null);
            return fieldType;
        }

        public Class<?> getType() {
            return type;
        }

        public void setType(Class<?> type) {
            this.type = type;
        }

        public Map<String, FieldType> getPropertyTypes() {
            return propertyTypes;
        }

        public void setPropertyTypes(Map<String, FieldType> propertyTypes) {
            this.propertyTypes = propertyTypes;
        }

        public List<Type> getParameterizedTypes() {
            return parameterizedTypes;
        }

        public void setParameterizedTypes(List<Type> parameterizedTypes) {
            this.parameterizedTypes = parameterizedTypes;
        }
    }

    // 自定义比较器
    public static Comparator<UnionType> customComparator = new Comparator<UnionType>() {
        private final int HAS_JSONTYPENAME = 0;
        private final int ENTITY = 1;
        private final int STRUCTURE = 2;
        private final int ANONYMOUS = 3;
        private final int LIST = 4;
        private final int MAP = 5;
        private final int NULL = 6;

        @Override
        public int compare(UnionType o1, UnionType o2) {
            if (o1 == null && o2 == null) return 0;
            if (o1 == null) return 1; // null 排在最后
            if (o2 == null) return -1; // null 排在最后

            int p1 = getPriority(o1.getTypeClass());
            int p2 = getPriority(o2.getTypeClass());

            if (p1 != p2) {
                return Integer.compare(p1, p2);
            } else {
                // 如果优先级相同，则按类型名称的字典顺序排序
                return o1.getType().compareTo(o2.getType());
            }
        }

        private int getPriority(Class<?> type) {
            if (type == null) return NULL;
            if (type.getAnnotation(JsonTypeName.class) != null) return HAS_JSONTYPENAME;
            if (type.getSimpleName().endsWith("Entity")) return ENTITY;
            if (type.getSimpleName().endsWith("Structure")) return STRUCTURE;
            if (type.getSimpleName().startsWith("AnonymousStructure")) return ANONYMOUS;
            if (UnionTypeMatcher.isListType(type)) return LIST;
            if (UnionTypeMatcher.isMapType(type)) return MAP;
            return 6; // 普通类型排在最后
        }
    };

    /**
     * use for union type
     */
    public static class UnionType {

        private String type;
        // for map type
        private List<UnionType> keyArguments;
        // for map or list type
        private List<UnionType> valueArguments;

        public UnionType() {
        }

        public String getType() {
            return type;
        }

        public Class<?> getTypeClass() {
            try {
                return Class.forName(type);
            } catch (ClassNotFoundException e) {
                return NullNode.class;
            }
        }

        public void setType(String type) {
            this.type = type;
        }

        public List<UnionType> getKeyArguments() {
            return keyArguments;
        }

        public void setKeyArguments(List<UnionType> keyArguments) {
            this.keyArguments = keyArguments;
        }

        public List<UnionType> getValueArguments() {
            return valueArguments;
        }

        public void setValueArguments(List<UnionType> valueArguments) {
            this.valueArguments = valueArguments;
        }

    }

}