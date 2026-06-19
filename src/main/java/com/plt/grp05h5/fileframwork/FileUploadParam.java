package com.plt.grp05h5.fileframwork;

import java.util.Map;

/**
 * 文件上传参数
 */
public class FileUploadParam {
    /**
     * 文件的访问权限
     */
    private String fileAccess;
    /**
     * 是否开启cdn加速
     */
    private Boolean cdnEnabled;
    /**
     * 文件过期时间
     */
    private Double ttl;
    /**
     * 文件的附加存储路径
     */
    private String storagePath;
    /**
     * 是否开启压缩
     */
    private Boolean compressEnabled;
    /**
     * 文件名
     */
    private String fileName;
    /**
     * 文件连接组
     */
    private String fileConnectionGroup;
    /**
     * 应用ID
     */
    private String appId;
    /**
     * 文件路径前缀
     */
    private String filePathPrefix;
    /**
     * 额外参数
     */
    private Map<String, String> payloads;

    public FileUploadParam() {
    }

    public String getFileAccess() {
        return fileAccess;
    }

    public FileUploadParam setFileAccess(String fileAccess) {
        this.fileAccess = fileAccess;
        return this;
    }

    public Boolean getCdnEnabled() {
        return cdnEnabled;
    }

    public FileUploadParam setCdnEnabled(Boolean cdnEnabled) {
        this.cdnEnabled = cdnEnabled;
        return this;
    }

    public Double getTtl() {
        return ttl;
    }

    public FileUploadParam setTtl(Double ttl) {
        this.ttl = ttl;
        return this;
    }

    public String getStoragePath() {
        return storagePath;
    }

    public FileUploadParam setStoragePath(String storagePath) {
        this.storagePath = storagePath;
        return this;
    }

    public Boolean getCompressEnabled() {
        return compressEnabled;
    }

    public FileUploadParam setCompressEnabled(Boolean compressEnabled) {
        this.compressEnabled = compressEnabled;
        return this;
    }

    public String getFileName() {
        return fileName;
    }

    public FileUploadParam setFileName(String fileName) {
        this.fileName = fileName;
        return this;
    }

    public Map<String, String> getPayloads() {
        return payloads;
    }

    public FileUploadParam setPayloads(Map<String, String> payloads) {
        this.payloads = payloads;
        return this;
    }

    public String getFileConnectionGroup() {
        return fileConnectionGroup;
    }

    public FileUploadParam setFileConnectionGroup(String fileConnectionGroup) {
        this.fileConnectionGroup = fileConnectionGroup;
        return this;
    }

    public String getAppId() {
        return appId;
    }

    public FileUploadParam setAppId(String appId) {
        this.appId = appId;
        return this;
    }

    public String getFilePathPrefix() {
        return filePathPrefix;
    }

    public FileUploadParam setFilePathPrefix(String filePathPrefix) {
        this.filePathPrefix = filePathPrefix;
        return this;
    }
}
