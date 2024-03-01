import { Bean, Configuration } from "@clawject/di";
import { DataSource } from "typeorm";
import { DataSourceOptions } from "typeorm/data-source/DataSourceOptions";

@Configuration
export class DatabaseConfiguration {
    // @Bean
    // dataSource(dataSourceOptions: DataSourceOptions): Promise<DataSource> {
    //     const dataSource = new DataSource(dataSourceOptions);
    //     return dataSource.initialize();
    // }
}
