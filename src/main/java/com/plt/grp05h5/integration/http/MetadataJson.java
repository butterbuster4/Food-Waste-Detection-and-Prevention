package com.plt.grp05h5.integration.http;

import java.lang.annotation.*;

/**
 * when field be marked with this annotation, call api will converted to object
 */
@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface MetadataJson {

}
