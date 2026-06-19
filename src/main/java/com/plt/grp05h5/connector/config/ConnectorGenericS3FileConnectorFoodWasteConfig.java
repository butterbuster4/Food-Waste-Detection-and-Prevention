package com.plt.grp05h5.connector.config; 

import org.springframework.context.annotation.Configuration; 
import com.netease.cloud.DefaultS3FileConnector; 
import org.springframework.context.annotation.Bean; 
import com.plt.grp05h5.config.NonUniformCharsetEnv; 
import org.springframework.beans.factory.annotation.Autowired; 

@Configuration
public class ConnectorGenericS3FileConnectorFoodWasteConfig {

    @Autowired
    private NonUniformCharsetEnv env;

    @Bean(name = "connectorGenericS3FileConnectorFoodWaste")
    public DefaultS3FileConnector connectorGenericS3FileConnectorFoodWaste() {
        DefaultS3FileConnector DefaultS3FileConnector = new DefaultS3FileConnector().initDefaultS3FileConnector(this.env.getProperty("connector.food_waste.accessKey"), this.env.getProperty("connector.food_waste.secretKey"), this.env.getProperty("connector.food_waste.bucket"), this.env.getProperty("connector.food_waste.privateBucket", Boolean.class), this.env.getProperty("connector.food_waste.endpoint"), this.env.getProperty("connector.food_waste.pathStyleAccessEnabled", Boolean.class), this.env.getProperty("connector.food_waste.cdnAddress"), this.env.getProperty("connector.food_waste.sinkPath"));
        return DefaultS3FileConnector;
    } 

}
