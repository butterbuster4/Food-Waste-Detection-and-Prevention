package com.plt.grp05h5.domain; 

import com.fasterxml.jackson.annotation.JsonAutoDetect; 
import java.io.Serializable; 
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility; 
import java.util.Objects; 
import com.netease.lowcode.auth.domain.LCAPUser; 
import javax.validation.constraints.NotNull; 
import com.plt.grp05h5.domain.http.HttpRequest; 
import com.plt.grp05h5.domain.http.HttpResponse; 

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY,getterVisibility = JsonAutoDetect.Visibility.NONE)
public class SessionVariables implements Serializable{

    @NotNull
    public HttpRequest<String> httpRequest = new HttpRequest<>();

    @NotNull
    public HttpResponse<String> httpResponse = new HttpResponse<>();

    @NotNull
    public LCAPUser currentUser = new LCAPUser();

    private <Source, Target> Boolean equals(Source source, Target target) {
        return Objects.equals(source, target);
    } 

}
