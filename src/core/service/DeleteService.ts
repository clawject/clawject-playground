import { EntityWithId } from "../entity/EntityWithId";

export interface DeleteService<E extends EntityWithId<unknown>> {
    delete(id: E['id']): Promise<void>;
}
