package com.plt.grp05h5.web.interceptor;

import org.apache.commons.lang3.StringUtils;
import org.apache.commons.lang3.ArrayUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.mybatis.spring.MyBatisSystemException;
import com.plt.grp05h5.web.ApiReturn;
import com.plt.grp05h5.exception.*;
import com.plt.grp05h5.domain.enumeration.ErrorCodeEnum;
import com.netease.codewave.nasl.java.definition.error.BaseError;

import javax.annotation.Resource;
import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import java.util.Optional;
import java.util.Objects;
import java.util.Set;

/**
 * 全局异常处理
 *
 * @author gaowx
 * @date 2021-07-26 22:51
 */
@ControllerAdvice
public class GlobalExceptionHandler {
    private static final Logger LOGGER = LoggerFactory.getLogger(GlobalExceptionHandler.class);
    @Resource
    private MessageSource messageSource;

    /**
     * @param ex
     * @return
     */
    @ExceptionHandler(ConstraintViolationException.class)
    @ResponseBody
    public ResponseEntity<ApiReturn<?>> handleValidationException(ConstraintViolationException ex) {
        Set<ConstraintViolation<?>> errors = ex.getConstraintViolations();
        StringBuilder strBuilder = new StringBuilder();
        for (ConstraintViolation<?> violation : errors) {
            strBuilder.append(violation.getMessage() + "\n");
        }
        BaseError error = ErrorManager.ofSystemIllegalArgumentError(strBuilder.toString());
        LOGGER.error("执行错误，错误标识={}, 异常信息={},详细信息为={} ", error.getErrorType(), error.getErrorMsg(), error, ex);
        return ResponseEntity
                .status(error.httpCode())
                .body(ApiReturn.ofError(error.httpCode(),error, messageSource.getMessage(error.getErrorMsg(), error.getArgs(), error.getErrorMsg(), LocaleContextHolder.getLocale())));
    }

    /**
     * @param ex
     * @return
     */
    @ExceptionHandler(HttpCodeException.class)
    @ResponseBody
    public ResponseEntity<ApiReturn<?>> handleException(HttpCodeException ex) {
        String errorKey = StringUtils.isEmpty(ex.getErrorKey()) ? ErrorCodeEnum.UNKNOWN.code : ex.getErrorKey();
        String message = messageSource.getMessage(errorKey, ex.getArgs(), errorKey, LocaleContextHolder.getLocale());
        BaseError error = ErrorManager.ofException(ex, message);
        LOGGER.error("执行错误，错误标识={}, 异常信息={},详细信息为={} ", error.getErrorType(), error.getErrorMsg(), error, ex);
        return ResponseEntity
                .status(ex.getHttpCode())
                .body(ApiReturn.ofError(ex.getHttpCode(), error, message));
    }


    /**
     * @param ex
     * @return
     */
    @ExceptionHandler(BaseError.class)
    @ResponseBody
    public ResponseEntity<ApiReturn<?>> handleBaseError(BaseError ex) {
        LOGGER.error("执行错误，错误标识={}, 异常信息={} ", ex.getErrorType(), ex.getErrorMsg(), ex);
        String message = messageSource.getMessage(ex.getErrorMsg(), ex.getArgs(), ex.getErrorMsg(), LocaleContextHolder.getLocale());
        ex.setErrorMsg(message);
        return ResponseEntity
                .status(ex.httpCode())
                .body(ApiReturn.ofError(ex.httpCode(), ex, message));
    }

    /**
     * @param ex
     * @return
     */
    @ExceptionHandler(Exception.class)
    @ResponseBody
    public ResponseEntity<ApiReturn<?>> handleException(Exception ex) {
        String message = messageSource.getMessage(ex.getMessage(), null, ex.getMessage(), LocaleContextHolder.getLocale());
        Throwable rawException = Objects.nonNull(ex.getCause())? ex.getCause() : ex;
        if (StringUtils.isEmpty(message) && !ArrayUtils.isEmpty(ex.getStackTrace())) {
            message = "服务内部异常：详情信息：" + ex.getStackTrace()[0].getClassName() + "#" + ex.getStackTrace()[0].getMethodName() + ":" + ex.getStackTrace()[0].getLineNumber();
        }
        BaseError error = ErrorManager.ofException(rawException, message);
        LOGGER.error("执行错误，错误标识={}, 异常信息={}, 详细信息为={} ", error.getErrorType(), error.getErrorMsg(), error, rawException);
        return ResponseEntity
                .status(error.httpCode())
                .body(ApiReturn.ofError(error.httpCode(), error, message));
    }


}
