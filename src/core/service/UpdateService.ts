import { EntityWithId } from "../entity/EntityWithId";

export interface UpdateService<E extends EntityWithId<unknown>, U = E> {
    update(id: E['id'], update: U): Promise<E>;
}
