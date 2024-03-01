import { Controller } from "./Controller";
import { EntityWithId } from "../entity/EntityWithId";
import { DeleteService } from "../service/DeleteService";

export class DeleteController<E extends EntityWithId<unknown>> implements Controller  {
    constructor(
        public readonly basePath: string,
        private deleteService: DeleteService<E>
    ) {}

    delete(id: E['id']): Promise<void> {
        return this.deleteService.delete(id);
    }
}
