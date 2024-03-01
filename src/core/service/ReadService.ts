import { EntityWithId } from "../entity/EntityWithId";

export interface ReadService<E extends EntityWithId<unknown>> {
    getOne(id: E['id']): Promise<E>;
    getAll(): Promise<E[]>;
}
