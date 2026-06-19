package com.plt.grp05h5.connector.config; 

import org.springframework.context.annotation.Configuration; 
import com.netease.cloud.DefaultS3FileConnector; 
import com.netease.cloud.codewave.file.connector.FileConnectionManager; 
import org.springframework.context.annotation.Bean; 
import com.plt.grp05h5.config.NonUniformCharsetEnv; 
import org.springframework.beans.factory.annotation.Autowired; 

@Configuration
public class ConnectorGenericS3FileConnectorFoodWasteH5Config {

    @Autowired
    private NonUniformCharsetEnv env;

    @Bean(name = "connectorGenericS3FileConnectorFoodWasteH5")
    public DefaultS3FileConnector connectorGenericS3FileConnectorFoodWasteH5() {
        DefaultS3FileConnector DefaultS3FileConnector = new DefaultS3FileConnector().initDefaultS3FileConnector(this.env.getProperty("connector.food_waste_h5.accessKey"), this.env.getProperty("connector.food_waste_h5.secretKey"), this.env.getProperty("connector.food_waste_h5.bucket"), this.env.getProperty("connector.food_waste_h5.privateBucket", Boolean.class), this.env.getProperty("connector.food_waste_h5.endpoint"), this.env.getProperty("connector.food_waste_h5.pathStyleAccessEnabled", Boolean.class), this.env.getProperty("connector.food_waste_h5.cdnAddress"), this.env.getProperty("connector.food_waste_h5.sinkPath"));
        DefaultS3FileConnector.registerFileStorageCode("lcap_file_group_0");
        FileConnectionManager.registerDefaultConnection(DefaultS3FileConnector);
        return DefaultS3FileConnector;
    } 

}
