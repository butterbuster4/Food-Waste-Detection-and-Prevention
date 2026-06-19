package com.plt.grp05h5.exception;

import com.netease.codewave.nasl.java.definition.error.*;
import com.netease.codewave.nasl.java.definition.error.Error;
import org.springframework.dao.DuplicateKeyException;
import org.springframework.http.HttpStatus;
import org.springframework.web.client.RestClientResponseException;
import java.util.Objects;

public class ErrorManager {
    public static BaseError ofException(Exception ex) {
        String message = ex.getMessage();
        return ofException(ex, message);
    }

    public static BaseError convertException(Throwable ex, String message) {
        if(Objects.isNull(ex)) {
            return null;
        }
        if (ex instanceof BaseError) {
            BaseError baseError = (BaseError) ex;
            baseError.setErrorMsg(message);
            return baseError;
        }
        BaseError error = null;
        if (ex instanceof NullPointerException) {
            error = new SystemNullPointerError(message);
        } else if (ex instanceof RestClientResponseException) {
            error = ofInterfaceError((RestClientResponseException) ex);
        } else if (ex instanceof NumberFormatException) {
            error = new SystemClassCastError(message);
        } else if (ex instanceof IllegalArgumentException) {
            error = new SystemIllegalArgumentError(message);
        } else if (ex instanceof HttpCodeException) {
            error = ofHttpCodeException((HttpCodeException) ex, message);
        } else if (ex instanceof DuplicateKeyException) {
            error = new DatabaseDuplicateKeyError(message);
        } else if (ex instanceof ArithmeticException) {
            error = new SystemArithmeticError(message);
        } else if (ex instanceof IndexOutOfBoundsException) {
            error = new SystemArrayIndexOutOfBoundsError(message);
        } else if (ex instanceof ClassCastException) {
            error = new SystemClassCastError(message);
        }
        return error;
    }
    public static BaseError ofException(Throwable ex, String message) {
        BaseError error = convertException(ex, message);
        if(Objects.isNull(error)){
            error = new SystemInternalError(message);
        }
        return error;
    }
    public static BaseError ofError(String errorType,String message) {
        return new Error(errorType,message);
    }
    public static BaseError ofError(String message) {
        return new Error(message);
    }
    public static BaseError ofDatabaseConstraintViolationError(String message){
        return new DatabaseConstraintViolationError(message);
    }
    public static BaseError ofDatabaseDuplicateKeyError(String message){
        return new DatabaseDuplicateKeyError(message);
    }
    public static BaseError ofSystemIllegalArgumentError(String message){
        return new SystemIllegalArgumentError(message);
    }
    public static BaseError ofSystemInternalError(String message){
        return new SystemInternalError(message);
    }
    public static BaseError ofSystemResourceNotFoundError(String message){
        return new SystemResourceNotFoundError(message);
    }
    public static BaseError ofAuthUnAuthorizedError(String message) {
        return new AuthUnAuthorizedError(message);
    }
    public static BaseError ofAuthPermissionDeniedError(String message) {
        return new AuthPermissionDeniedError(message);
    }
    public static BaseError ofIoError(String message) {
        return new IoError(message);
    }
    public static BaseError ofInterfaceError(String message) {
        return new InterfaceError(message);
    }
    public static BaseError ofInterfaceError(String errorMsg, Integer statusCode, String responseBody) {
        return InterfaceError.of(errorMsg, Long.valueOf(statusCode), responseBody);
    }
    public static BaseError ofInterfaceError(RestClientResponseException e) {
        return InterfaceError.of(e.getMessage(), (long) e.getRawStatusCode(), e.getResponseBodyAsString());
    }
    private static BaseError ofHttpCodeException(HttpCodeException ex, String message) {
        int httpCode = ex.getHttpCode();
        BaseError error;
        if (httpCode == HttpStatus.BAD_REQUEST.value()) {
            error = new SystemIllegalArgumentError(message);
        } else if (httpCode == HttpStatus.NOT_FOUND.value()) {
            error = new SystemResourceNotFoundError(message);
        } else {
            error = new SystemInternalError(message);
        }
        return error;
    }

}
