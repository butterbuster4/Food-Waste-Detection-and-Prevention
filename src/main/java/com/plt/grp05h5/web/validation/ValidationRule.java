package com.plt.grp05h5.web.validation;

/**
 * @author sys
 */
public @interface ValidationRule {
    String value();
    String targetName();
    String targetFunction() default "";
    String argvs() default "";
    String errorMsg() default "";
}
