package com.plt.grp05h5.web.controller;

import org.apache.http.HttpHeaders;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * UI controller for web.
 * Used to return static resource data.
 *
 * @author sys
 */
@RestController
public class UiController extends BaseUiController {

    @GetMapping(value = "/", produces = {"text/html"}, consumes = {"*/*"})
    public String uiResource(HttpServletResponse response) {
        String indexHtml = getIndexHtml("", concatPath(lcpProperties.getUiResourceAddress(), JS_FILE_NAME));
        response.setHeader(HttpHeaders.CONTENT_TYPE, "text/html");
        return indexHtml;
    }

    /**
     * default page for not found
     * @param response
     * @return
     */
    @GetMapping(value = "/error", produces = {"text/html"}, consumes = {"*/*"})
    public String error(HttpServletRequest request, HttpServletResponse response) {
        return handleErrorRequest(request, response);
    }
}
