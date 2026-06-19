package com.plt.grp05h5.domain.structure; 

import com.fasterxml.jackson.annotation.JsonAutoDetect; 
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility; 
import com.plt.grp05h5.annotation.UnionTypes; 
import com.plt.grp05h5.config.UnionTypeParseDeserializer; 
import com.fasterxml.jackson.databind.annotation.JsonDeserialize; 

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY,getterVisibility = JsonAutoDetect.Visibility.NONE)
public class LCAPErrorResponseStructure {

    @UnionTypes("[{\"type\":\"com.plt.grp05h5.domain.ui.Error\"},{\"type\":\"com.netease.codewave.nasl.java.definition.error.DatabaseDuplicateKeyError\"},{\"type\":\"com.netease.codewave.nasl.java.definition.error.DatabaseConstraintViolationError\"},{\"type\":\"com.netease.codewave.nasl.java.definition.error.InterfaceError\"},{\"type\":\"com.netease.codewave.nasl.java.definition.error.AuthPermissionDeniedError\"},{\"type\":\"com.netease.codewave.nasl.java.definition.error.AuthUnAuthorizedError\"},{\"type\":\"com.netease.codewave.nasl.java.definition.error.IoError\"},{\"type\":\"com.netease.codewave.nasl.java.definition.error.ProcessError\"},{\"type\":\"com.netease.codewave.nasl.java.definition.error.SystemArithmeticError\"},{\"type\":\"com.netease.codewave.nasl.java.definition.error.SystemArrayIndexOutOfBoundsError\"},{\"type\":\"com.netease.codewave.nasl.java.definition.error.SystemClassCastError\"},{\"type\":\"com.netease.codewave.nasl.java.definition.error.SystemIllegalArgumentError\"},{\"type\":\"com.netease.codewave.nasl.java.definition.error.SystemInternalError\"},{\"type\":\"com.netease.codewave.nasl.java.definition.error.SystemNullPointerError\"},{\"type\":\"com.netease.codewave.nasl.java.definition.error.SystemResourceNotFoundError\"}]")
    @JsonDeserialize(using = UnionTypeParseDeserializer.class)
    public Object Data;

    public String ErrorType;

    public String Message;

    public Long Code;

    public Object getData() {
        return Data;
    } 

    public void setData(Object Data) {
        this.Data = Data; 
    } 

    public String getErrorType() {
        return ErrorType;
    } 

    public void setErrorType(String ErrorType) {
        this.ErrorType = ErrorType; 
    } 

    public String getMessage() {
        return Message;
    } 

    public void setMessage(String Message) {
        this.Message = Message; 
    } 

    public Long getCode() {
        return Code;
    } 

    public void setCode(Long Code) {
        this.Code = Code; 
    } 

}
