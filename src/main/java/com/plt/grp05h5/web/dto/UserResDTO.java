package com.plt.grp05h5.web.dto;

/**
* auto generate UserListResDTO
*
* @author sys
*/
public class UserResDTO {
    private String userName;

    private String env;

    private String source;

    private String displayName;

    private String userId;

    @Override
    public String toString() {
        return "UserData{" +
                "userName='" + userName + '\'' +
                ", env='" + env + '\'' +
                ", source='" + source + '\'' +
                ", userId='" + userId + '\'' +
                '}';
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEnv() {
        return env;
    }

    public void setEnv(String env) {
        this.env = env;
    }

    public String getSource() {
        return source;
    }

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    public String getDisplayName() {
        return displayName;
    }
    public void setSource(String source) {
        this.source = source;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }
}
