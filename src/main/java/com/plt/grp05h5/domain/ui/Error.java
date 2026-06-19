package com.plt.grp05h5.domain.ui;

import com.netease.codewave.nasl.java.definition.error.BaseError;
import com.netease.codewave.nasl.java.definition.common.ExposeHttpStatus;
import com.netease.codewave.nasl.java.definition.common.HttpStatus;

@ExposeHttpStatus(HttpStatus.INTERNAL_SERVER_ERROR)
public class Error extends BaseError{
    public String errorType;
    public String errorMsg;

    public Error() {
    }

    public Error(String errorType, String errorMsg) {
        this.errorMsg = errorMsg;
        this.errorType = errorType;
    }

    public String getErrorType() {
        return this.errorType;
    }

    public void setErrorType(String errorType) {
        this.errorType = errorType;
    }

    public String getErrorMsg() {
        return this.errorMsg;
    }

    public void setErrorMsg(String errorMsg) {
        this.errorMsg = errorMsg;
    }
}
