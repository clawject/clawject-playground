import { Controller } from "./Controller";
import { EntityWithId } from "../entity/EntityWithId";
import { ReadService } from "../service/ReadService";

export class ReadController<E extends EntityWithId<unknown>> implements Controller {
    constructor(
        public readonly basePath: string,
        private readService: ReadService<E>
    ) {}

    getById(id: E['id']): Promise<E> {
        return this.readService.getOne(id);
    }

    getAll(): Promise<E[]> {
        return this.readService.getAll();
    }
}
