import { Bean, ClawjectApplication, ClawjectFactory, Import } from "@clawject/di";
import { UserConfiguration } from "./user/UserConfiguration";
import { ExpressConfiguration } from "./server/express/ExpressConfiguration";
import { ServerOptions } from "./core/server/ServerOptions";
import { DataSourceOptions } from "typeorm/data-source/DataSourceOptions";
import { DatabaseConfiguration } from "./db/DatabaseConfiguration";

@ClawjectApplication
export class ApplicationContext {
    constructor(
        private _serverOptions: ServerOptions,
        private _dataSourceOptions: DataSourceOptions,
    ) {}
    @Bean serverOptions = () => this._serverOptions;
    @Bean dataSourceOptions = () => this._dataSourceOptions;

    expressConfiguration = Import(ExpressConfiguration);
    databaseConfiguration = Import(DatabaseConfiguration);

    userConfiguration = Import(UserConfiguration);
}

async function bootstrap() {
    const applicationContext = await ClawjectFactory.createApplicationContext(
        ApplicationContext,
        [
            {port: 3000},
            { type: 'mysql' }
        ]
    );
    console.log("Application context created and initialized");

    const onShutdown = async () => {
        await applicationContext.destroy();
    }

    process.on('SIGTERM', onShutdown);
    process.on('SIGINT', onShutdown);
}

bootstrap();

