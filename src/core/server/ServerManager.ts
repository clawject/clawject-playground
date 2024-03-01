import { ServerOptions } from "./ServerOptions";
import { CreateController } from "../controller/CreateController";
import { ReadController } from "../controller/ReadController";
import { UpdateController } from "../controller/UpdateController";
import { DeleteController } from "../controller/DeleteController";
import { Controller } from "../controller/Controller";

export abstract class ServerManager {
    constructor(
        protected serverOptions: ServerOptions,
        protected allControllers: Controller[],
        protected createControllers: CreateController<any, any>[],
        protected readControllers: ReadController<any>[],
        protected updateControllers: UpdateController<any>[],
        protected deleteControllers: DeleteController<any>[],
    ) {}

    abstract start(): Promise<void>;
    abstract stop(): Promise<void>;
}
