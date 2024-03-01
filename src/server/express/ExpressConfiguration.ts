import { Bean, Configuration } from "@clawject/di";
import { ExpressServerManager } from "./ExpressServerManager";

@Configuration
export class ExpressConfiguration {
    expressServerManager = Bean(ExpressServerManager);
}
