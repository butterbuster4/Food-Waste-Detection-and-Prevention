package com.plt.grp05h5.web;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.plt.grp05h5.util.TraceIdHolder;
import com.netease.codewave.nasl.java.definition.error.BaseError;

import java.util.HashMap;
import java.util.Map;

public class ApiReturn<T> {
    public static final int RESULT_OK = 200;
    public static final int RESULT_ERROR = 500;

    @JsonProperty("RequestId")
    private String requestId;

    @JsonProperty("Code")
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private Integer code = RESULT_OK;

    @JsonProperty("Message")
    private String message = "";

    @JsonProperty("ErrorType")
    @JsonInclude(JsonInclude.Include.NON_NULL)
    private String errorType = null;

    @JsonIgnore
    private String stackTrace = null;

    @JsonProperty("Data")
    private T data;

    public static <T> ApiReturn<T> of(T data) {
        ApiReturn apiReturn = new ApiReturn<>();
        apiReturn.setRequestId(TraceIdHolder.getTraceId());
        apiReturn.setData(data);
        return apiReturn;
    }

    public static <T> ApiReturn<T> of(T data, int code) {
        ApiReturn apiReturn = new ApiReturn<>();
        apiReturn.setRequestId(TraceIdHolder.getTraceId());
        apiReturn.setData(data);
        apiReturn.setCode(code);
        return apiReturn;
    }

    public static <T> ApiReturn<T> of(T data, int code, String message) {
        ApiReturn apiReturn = new ApiReturn<>();
        apiReturn.setRequestId(TraceIdHolder.getTraceId());
        apiReturn.setData(data);
        apiReturn.setCode(code);
        apiReturn.setMessage(message);
        return apiReturn;
    }

    public static <T> ApiReturn<T> of(T data, int code, String message, String stackTrace) {
        ApiReturn apiReturn = new ApiReturn<>();
        apiReturn.setRequestId(TraceIdHolder.getTraceId());
        apiReturn.setData(data);
        apiReturn.setCode(code);
        apiReturn.setMessage(message);
        apiReturn.setStackTrace(stackTrace);
        return apiReturn;
    }

    public static <T> ApiReturn<T> ofSuccess(T data) {
        ApiReturn apiReturn = new ApiReturn<>();
        apiReturn.setRequestId(TraceIdHolder.getTraceId());
        apiReturn.setCode(RESULT_OK);
        apiReturn.setData(data);
        apiReturn.setMessage("success");
        return apiReturn;
    }
    public static <T> ApiReturn<T> ofError(BaseError error) {
        ApiReturn apiReturn = new ApiReturn<>();
        apiReturn.setRequestId(TraceIdHolder.getTraceId());
        apiReturn.setCode(RESULT_OK);
        apiReturn.setData(error);
        apiReturn.setErrorType(error.getErrorType());
        apiReturn.setMessage(error.getErrorMsg());
        return apiReturn;
    }
    public static <T> ApiReturn<T> ofError(BaseError error, String message) {
        ApiReturn apiReturn = new ApiReturn<>();
        apiReturn.setRequestId(TraceIdHolder.getTraceId());
        apiReturn.setCode(RESULT_OK);
        apiReturn.setData(error);
        apiReturn.setErrorType(error.getErrorType());
        apiReturn.setMessage(message);
        return apiReturn;
    }
    public static <T> ApiReturn<T> ofError(Integer errorCode,  BaseError error, String message) {
        ApiReturn apiReturn = new ApiReturn<>();
        apiReturn.setRequestId(TraceIdHolder.getTraceId());
        apiReturn.setCode(errorCode);
        apiReturn.setData(error);
        apiReturn.setErrorType(error.getErrorType());
        apiReturn.setMessage(message);
        return apiReturn;
    }

    public static  Map<String,Object> ofErrorMap(BaseError error) {
        Map<String,Object> map = new HashMap<>();
        map.put("Code", RESULT_OK);
        map.put("Message", error.getErrorMsg());
        map.put("Data", error);
        map.put("ErrorType", error.getErrorType());
        map.put("RequestId", TraceIdHolder.getTraceId());
        return map;
    }


    public String getRequestId() {
        return requestId;
    }

    public void setRequestId(String requestId) {
        this.requestId = requestId;
    }

    public Integer getCode() {
        return code;
    }

    public void setCode(Integer code) {
        this.code = code;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    }

    public String getStackTrace() {
        return stackTrace;
    }

    public void setStackTrace(String stackTrace) {
        this.stackTrace = stackTrace;
    }

    public String getErrorType() {
        return errorType;
    }

    public void setErrorType(String errorType) {
        this.errorType = errorType;
    }
}
