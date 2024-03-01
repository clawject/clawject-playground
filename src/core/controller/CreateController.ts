import { Controller } from "./Controller";
import { EntityWithId } from "../entity/EntityWithId";
import { CreateService } from "../service/CreateService";

export class CreateController<E extends EntityWithId<unknown>, C> implements Controller  {
    constructor(
        public readonly basePath: string,
        private createService: CreateService<E, C>
    ) {}

    create(data: C): Promise<E> {
        return this.createService.create(data);
    }
}
