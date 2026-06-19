package com.plt.grp05h5.web.controller;

import org.springframework.boot.autoconfigure.web.ServerProperties;
import org.springframework.boot.autoconfigure.web.servlet.error.BasicErrorController;
import org.springframework.boot.web.servlet.error.DefaultErrorAttributes;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import com.plt.grp05h5.exception.*;
import com.plt.grp05h5.web.ApiReturn;
import javax.servlet.http.HttpServletRequest;
import java.util.Map;
import java.util.Objects;
import org.slf4j.Logger;

/**
 * custom error controller for error handle
 */
@Controller
@RequestMapping("${server.error.path:${error.path:/error}}")
public class LCAPErrorController extends BasicErrorController {

    Logger logger = org.slf4j.LoggerFactory.getLogger(LCAPErrorController.class);

    public LCAPErrorController(ServerProperties serverProperties) {
        super(new DefaultErrorAttributes(), serverProperties.getError());
    }
    @Override
    public ResponseEntity<Map<String, Object>> error(HttpServletRequest request) {
        Map<String, Object> body = this.getErrorAttributes(request, this.isIncludeStackTrace(request, MediaType.ALL));
        HttpStatus status = this.getStatus(request);
        if (status == HttpStatus.NOT_FOUND) {
            // return custom error for 404
            Map<String, Object> errorObjMap = ApiReturn.ofErrorMap(ErrorManager.ofSystemResourceNotFoundError(body.get("path") + " " + body.get("message")));
            //path、exception、path、message
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorObjMap);
        } else {
            return super.error(request);
        }
    }
}