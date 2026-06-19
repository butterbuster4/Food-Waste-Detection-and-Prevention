package com.plt.grp05h5.fileframwork;

import com.plt.grp05h5.config.Constants;
import com.plt.grp05h5.config.LcpProperties;
import com.netease.cloud.codewave.file.connector.CodeWaveFileConstants;
import com.netease.cloud.codewave.file.connector.FileConnectionManager;
import com.netease.cloud.codewave.file.connector.utils.CodeWaveFileUrl;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.InputStream;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.util.HashMap;
import java.util.Map;

import static com.plt.grp05h5.config.Constants.UPLOAD_ACCESS_PRIVATE;
import static com.plt.grp05h5.config.Constants.UPLOAD_ACCESS_PRIVATE_SUFFIX;

/**
 * 文件框架
 */
@Component
public class FileFrameworkComponent {
    @Autowired
    private LcpProperties lcpProperties;
    /**
     * form-data中的payloads的key前缀
     */
    private final static String PAYLOAD_KEY_PREFIX = "payloads_";

    /**
     * 上传文件
     * @param inputStream
     * @param fileUploadParam
     * @throws Exception
     */
    public CodeWaveFileUrl upload(InputStream inputStream, FileUploadParam fileUploadParam) throws Exception {
        CodeWaveFileUrl fileUrl = new CodeWaveFileUrl(fileUploadParam.getFileName());
        if (fileUploadParam.getCdnEnabled()) {
            //需要拼接cdn标识
            fileUrl.addQueryString(CodeWaveFileConstants.CDN_TAG, "1");
        }
        if (!Constants.UPLOAD_ACCESS_NONE_EXPIRATION.equals(fileUploadParam.getTtl()) && fileUploadParam.getTtl() > 0) {
            //需要拼接超时时间
            fileUrl.addQueryString(CodeWaveFileConstants.EXPIRE_TIME, String.valueOf(ZonedDateTime.now().withZoneSameInstant(ZoneId.of("UTC"))
                    .plusMinutes((long) (fileUploadParam.getTtl() * 24 * 60)).toInstant().toEpochMilli()));
        }
        //这里的权限控制可能文件连接器也需要
        fileUploadParam.getPayloads().put(CodeWaveFileConstants.FILE_ACCESS, fileUploadParam.getFileAccess());
        if (UPLOAD_ACCESS_PRIVATE.equalsIgnoreCase(fileUploadParam.getFileAccess())) {
            //这里是需要登录访问
            fileUrl.addQueryString(CodeWaveFileConstants.FILE_ACCESS, UPLOAD_ACCESS_PRIVATE_SUFFIX);
        }
        fileUrl.addQueryString(CodeWaveFileConstants.FILE_UPDATE_TIME, String.valueOf(System.currentTimeMillis()));
        fileUrl.addQueryString(CodeWaveFileConstants.APP_ID, fileUploadParam.getAppId());
        fileUrl.addQueryString(CodeWaveFileConstants.FILE_CONNECTION, fileUploadParam.getFileConnectionGroup());
        //先记录下之前的文件路径
        String originalFileUrl = fileUrl.toUrl();
        //路径前缀需要拼接, 这个可能会变更, 后置拼接
        if (StringUtils.isNotBlank(fileUploadParam.getFilePathPrefix())) {
            fileUrl.addQueryString(CodeWaveFileConstants.FILE_PATH_PREFIX, this.formatPrefixPath(fileUploadParam.getFilePathPrefix()));
        }
        //透传fileStoragePath
        fileUploadParam.getPayloads().put(CodeWaveFileConstants.FILE_STORAGE_PATH, fileUploadParam.getStoragePath());
        CodeWaveFileUrl finalUrl = FileConnectionManager.getFileConnector(fileUploadParam.getFileConnectionGroup())
                .upload(inputStream, fileUrl, fileUploadParam.getPayloads());
        if (!finalUrl.toUrl().startsWith(originalFileUrl)) {
            throw new RuntimeException("文件连接器返回的文件地址不合法");
        }
        return finalUrl;
    }

    private String formatPrefixPath(String filePrefix) {
        filePrefix = filePrefix.replace(File.separator,"/");
        boolean startWithTag = filePrefix.startsWith("/");
        if (startWithTag) {
            /**
             * 需要把/截取
             */
            filePrefix = filePrefix.substring(1);
        }
        return filePrefix;
    }

    /**
     * 文件下载
     * @param fileStorageCode
     * @param fileUrl
     */
    public void download(String fileStorageCode, String fileUrl, Map<String, String> payloads) {
        FileConnectionManager.getFileConnector(fileStorageCode).download(new CodeWaveFileUrl(fileUrl), null);
    }

    /**
     * 构建下payloads
     * @param request
     * @return
     */
    public Map<String, String> buildPayloadsFromRequest(HttpServletRequest request) {
        Map<String, String[]> paramMap = request.getParameterMap();
        if (null == paramMap || paramMap.isEmpty()) {
            return new HashMap<>();
        }
        Map<String, String> payloads = new HashMap<>();
        paramMap.forEach((key, value) -> {
            if (key.startsWith(PAYLOAD_KEY_PREFIX)) {
                payloads.put(key.substring(PAYLOAD_KEY_PREFIX.length()), value[0]);
            }
        });
        return payloads;
    }
}
