package com.plt.grp05h5.config;

import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonSerializer;
import com.fasterxml.jackson.databind.SerializerProvider;
import com.fasterxml.jackson.datatype.jdk8.Jdk8Module;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.fasterxml.jackson.databind.module.SimpleModule;
import com.fasterxml.jackson.databind.KeyDeserializer;
import com.plt.grp05h5.util.JacksonUtils;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.converter.json.Jackson2ObjectMapperBuilder;

import java.io.IOException;
import java.sql.Timestamp;
import java.time.*;
import java.time.format.DateTimeFormatter;

@Configuration
public class JacksonConfiguration {

    /**
     * Support for Java date and time API.
     *
     * @return the corresponding Jackson module.
     */
    @Bean
    public JavaTimeModule javaTimeModule() {
        return new JavaTimeModule();
    }

    @Bean
    public Jdk8Module jdk8TimeModule() {
        return new Jdk8Module();
    }

    public static class LcpLocalTimeSerializer extends JsonSerializer<LocalTime> {
        @Override
        public void serialize(LocalTime localTime, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
            jsonGenerator.writeString(localTime.format(DateTimeFormatter.ofPattern("HH:mm:ss")));
        }
    }


    public static class LcpLocalTimeKeySerializer extends JsonSerializer<LocalTime> {
        @Override
        public void serialize(LocalTime localTime, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
            jsonGenerator.writeFieldName(localTime.format(DateTimeFormatter.ofPattern("HH:mm:ss")));
        }
    }

    public static class LcpLocalTimeDeserializer extends JsonDeserializer<LocalTime> {
        @Override
        public LocalTime deserialize(JsonParser jsonParser, DeserializationContext deserializationContext) throws IOException, JsonProcessingException {
            String value = jsonParser.getText();
            return LocalTime.parse(value, DateTimeFormatter.ISO_LOCAL_TIME);
        }
    }

    public static class LcpLocalTimeKeyDeserializer extends KeyDeserializer {
        @Override
        public Object deserializeKey(String key, DeserializationContext ctxt) throws IOException {
            return LocalTime.parse(key, DateTimeFormatter.ISO_LOCAL_TIME);
        }

    }

    public static class LcpZonedDateTimeSerializer extends JsonSerializer<ZonedDateTime> {

        @Override
        public void serialize(ZonedDateTime arg0, JsonGenerator arg1, SerializerProvider arg2) throws IOException {
            arg1.writeString(arg0
                    .withZoneSameInstant(ZoneId.of(DateTimeFormatConfiguration.DEFAULT_TIMEZONE))
                    .format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")));
        }
    }

    public static class LcpZonedDateTimeKeySerializer extends JsonSerializer<ZonedDateTime> {
        private ZoneId zoneId;
        public LcpZonedDateTimeKeySerializer() {
            zoneId = ZoneId.of(DateTimeFormatConfiguration.DEFAULT_TIMEZONE);
        }
        public LcpZonedDateTimeKeySerializer(ZoneId zoneId) {
            this.zoneId = zoneId;
        }
        @Override
        public void serialize(ZonedDateTime arg0, JsonGenerator arg1, SerializerProvider arg2) throws IOException {
            arg1.writeFieldName(arg0
                    .withZoneSameInstant(zoneId)
                    .format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")));

        }
    }

    public static class LcpZonedDateTimeDeserializer extends JsonDeserializer<ZonedDateTime> {

        @Override
        public ZonedDateTime deserialize(JsonParser jsonParser, DeserializationContext deserializationContext)
                throws IOException, JsonProcessingException {
            String value = jsonParser.getText();
            //兼容时间戳类型的txt
            try {
                //1560924503.445000000
                Timestamp timestamp = Timestamp.from(Instant.ofEpochMilli((long) (Double.parseDouble(jsonParser.getText()) * 1000)));
                return ZonedDateTime.ofInstant(timestamp.toInstant(), ZoneId.of(DateTimeFormatConfiguration.DEFAULT_TIMEZONE));
            } catch (NumberFormatException e) {
                //2019-06-19T06:08:23.445Z
                return ZonedDateTime
                        .parse(value, DateTimeFormatter.ISO_DATE_TIME)
                        .withZoneSameInstant(ZoneId.of(DateTimeFormatConfiguration.DEFAULT_TIMEZONE));
            }
        }
    }

    public static class LcpZonedDateTimeKeyDeserializer extends KeyDeserializer {
        private ZoneId zoneId;
        public LcpZonedDateTimeKeyDeserializer() {
            zoneId = ZoneId.of(DateTimeFormatConfiguration.DEFAULT_TIMEZONE);
        }
        public LcpZonedDateTimeKeyDeserializer(ZoneId zoneId) {
            this.zoneId = zoneId;
        }
        @Override
        public Object deserializeKey(String key, DeserializationContext ctxt) throws IOException {
            //兼容时间戳类型的txt
            try {
                //1560924503.445000000
                Timestamp timestamp = Timestamp.from(Instant.ofEpochMilli((long) (Double.parseDouble(key) * 1000)));
                return ZonedDateTime.ofInstant(timestamp.toInstant(), zoneId);
            } catch (NumberFormatException e) {
                //2019-06-19T06:08:23.445Z
                return ZonedDateTime
                        .parse(key, DateTimeFormatter.ISO_DATE_TIME)
                        .withZoneSameInstant(zoneId);
            }
        }
    }

    public static class LcpLocalDateSerializer extends JsonSerializer<LocalDate> {

        @Override
        public void serialize(LocalDate localDate, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
            jsonGenerator.writeString(localDate.format(DateTimeFormatter.ISO_DATE));
        }
    }

    public static class LcpLocalDateKeySerializer extends JsonSerializer<LocalDate> {

        @Override
        public void serialize(LocalDate localDate, JsonGenerator jsonGenerator, SerializerProvider serializerProvider) throws IOException {
            jsonGenerator.writeFieldName(localDate.format(DateTimeFormatter.ISO_DATE));
        }
    }

    public static class LcpLocalDateDeserializer extends JsonDeserializer<LocalDate> {

        @Override
        public LocalDate deserialize(JsonParser jsonParser, DeserializationContext deserializationContext)
                throws IOException, JsonProcessingException {
            String value = jsonParser.getText();
            return LocalDate.parse(value, DateTimeFormatter.ISO_DATE);
        }
    }

    public static class LcpLocalDateKeyDeserializer extends KeyDeserializer {

        @Override
        public Object deserializeKey(String key, DeserializationContext ctxt) throws IOException {
            return LocalDate.parse(key, DateTimeFormatter.ISO_DATE);
        }
    }

    @Bean
    public Jackson2ObjectMapperBuilder jackson2ObjectMapperBuilder() {
        Jackson2ObjectMapperBuilder builder = Jackson2ObjectMapperBuilder
                .json()
                .indentOutput(false)
                .failOnEmptyBeans(false)
                .failOnUnknownProperties(false)
                .serializerByType(LocalTime.class,new LcpLocalTimeSerializer())
                .serializerByType(ZonedDateTime.class,new LcpZonedDateTimeSerializer())
                .serializerByType(LocalDate.class,new LcpLocalDateSerializer())
                .deserializerByType(LocalTime.class, new LcpLocalTimeDeserializer())
                .deserializerByType(ZonedDateTime.class,new LcpZonedDateTimeDeserializer())
                .deserializerByType(LocalDate.class,new LcpLocalDateDeserializer());
        SimpleModule simpleModule = new SimpleModule();
        simpleModule.addKeySerializer(LocalTime.class, new LcpLocalTimeKeySerializer());
        simpleModule.addKeySerializer(ZonedDateTime.class, new LcpZonedDateTimeKeySerializer());
        simpleModule.addKeySerializer(LocalDate.class, new LcpLocalDateKeySerializer());
        simpleModule.addKeyDeserializer(LocalTime.class, new LcpLocalTimeKeyDeserializer());
        simpleModule.addKeyDeserializer(ZonedDateTime.class, new LcpZonedDateTimeKeyDeserializer());
        simpleModule.addKeyDeserializer(LocalDate.class, new LcpLocalDateKeyDeserializer());
        builder.modules(simpleModule);
        JacksonUtils.setMapper(builder.build());
        return builder;
    }
}
