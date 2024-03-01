import { Bean, Configuration, External, Internal } from "@clawject/di";
import { User } from "./User";
import { UserService } from "./UserService";
import { ReadController } from "../core/controller/ReadController";
import { DeleteController } from "../core/controller/DeleteController";

@Configuration
export class UserConfiguration {
    @Bean @Internal basePath = '/user';
    userService = Bean(UserService);

    readController = Bean(ReadController<User>);
}
