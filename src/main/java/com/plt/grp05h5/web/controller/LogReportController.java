package com.plt.grp05h5.web.controller;

import com.plt.grp05h5.config.Constants;
import com.plt.grp05h5.web.ApiReturn;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.slf4j.Marker;
import org.slf4j.MarkerFactory;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class LogReportController {

    private final Logger log = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);

    @PostMapping("api/system/logReport")
    public ApiReturn logReport(@RequestBody logReportParamsDTO logReportParamsDTO) {
        if (logReportParamsDTO == null
                || logReportParamsDTO.getTime() == null || logReportParamsDTO.getTime().length() <= 0) {
            return ApiReturn.of(false);
        }
        String logicName = logReportParamsDTO.getLogicName() == null ? "" : logReportParamsDTO.getLogicName();
        String path = logReportParamsDTO.getPath() == null ? "" : logReportParamsDTO.getPath();
        String time = logReportParamsDTO.getTime();
        String markerString = time + "^" + path + "^" + logicName;

        Marker marker = MarkerFactory.getMarker(markerString);
        String message = logReportParamsDTO.getMessage();
        if (message != null && message.length() > 500) {
            message = message.substring(0, 500) + "... ...";
        }
        if ("error".equalsIgnoreCase(logReportParamsDTO.getLevel())) {
            log.error(marker, message);
        } else if ("warn".equalsIgnoreCase(logReportParamsDTO.getLevel())) {
            log.warn(marker, message);
        } else if ("info".equalsIgnoreCase(logReportParamsDTO.getLevel())) {
            log.info(marker, message);
        } else if ("debug".equalsIgnoreCase(logReportParamsDTO.getLevel())) {
            log.debug(marker, message);
        }
        return ApiReturn.of(true);
    }


    static class logReportParamsDTO {

        private String message;
        private String level;
        private String path;
        private String logicName;
        private String time;

        public String getMessage() {
            return message;
        }

        public void setMessage(String message) {
            this.message = message;
        }

        public String getLevel() {
            return level;
        }

        public void setLevel(String level) {
            this.level = level;
        }

        public String getPath() {
            return path;
        }

        public void setPath(String path) {
            this.path = path;
        }

        public String getLogicName() {
            return logicName;
        }

        public void setLogicName(String logicName) {
            this.logicName = logicName;
        }

        public String getTime() {
            return time;
        }

        public void setTime(String time) {
            this.time = time;
        }
    }
}
