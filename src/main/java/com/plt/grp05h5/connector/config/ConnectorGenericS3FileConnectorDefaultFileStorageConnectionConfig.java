package com.plt.grp05h5.connector.config; 

import org.springframework.context.annotation.Configuration; 
import com.netease.cloud.DefaultS3FileConnector; 
import com.netease.cloud.codewave.file.connector.FileConnectionManager; 
import org.springframework.context.annotation.Bean; 
import com.plt.grp05h5.config.NonUniformCharsetEnv; 
import org.springframework.beans.factory.annotation.Autowired; 

@Configuration
public class ConnectorGenericS3FileConnectorDefaultFileStorageConnectionConfig {

    @Autowired
    private NonUniformCharsetEnv env;

    @Bean(name = "connectorGenericS3FileConnectorDefaultFileStorageConnection")
    public DefaultS3FileConnector connectorGenericS3FileConnectorDefaultFileStorageConnection() {
        DefaultS3FileConnector DefaultS3FileConnector = new DefaultS3FileConnector().initDefaultS3FileConnector(this.env.getProperty("connector.default_fileStorage_connection.accessKey"), this.env.getProperty("connector.default_fileStorage_connection.secretKey"), this.env.getProperty("connector.default_fileStorage_connection.bucket"), this.env.getProperty("connector.default_fileStorage_connection.privateBucket", Boolean.class), this.env.getProperty("connector.default_fileStorage_connection.endpoint"), this.env.getProperty("connector.default_fileStorage_connection.pathStyleAccessEnabled", Boolean.class), this.env.getProperty("connector.default_fileStorage_connection.cdnAddress"), this.env.getProperty("connector.default_fileStorage_connection.sinkPath"));
        DefaultS3FileConnector.registerFileStorageCode("lcap_default_connection");
        FileConnectionManager.registerConnection(DefaultS3FileConnector);
        return DefaultS3FileConnector;
    } 

}
