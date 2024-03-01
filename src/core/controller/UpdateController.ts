import { Controller } from "./Controller";
import { EntityWithId } from "../entity/EntityWithId";
import { UpdateService } from "../service/UpdateService";

export class UpdateController<E extends EntityWithId<unknown>, U = E> implements Controller {
    constructor(
        public readonly basePath: string,
        private updateService: UpdateService<E, U>
    ) {}

    update(id: E['id'], update: U): Promise<E> {
        return this.updateService.update(id, update);
    }
}
