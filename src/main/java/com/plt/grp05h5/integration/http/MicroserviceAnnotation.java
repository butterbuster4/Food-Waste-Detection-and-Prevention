package com.plt.grp05h5.integration.http;

import java.lang.annotation.*;

@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface MicroserviceAnnotation {

    /**
     * 注册中心类型，预留字段，暂时使用不到
     */
    String[] types() default {};

    /**
     * 协议，默认是Http，连接器可以根据此协议进行不同类型上报
     */
    String[] protocols() default {};

    /**
     * 连接名称，根据此连接去配置文件中拿注册中心配置，目前连接名是唯一的
     */
    String[] collectionNames() default {};
}