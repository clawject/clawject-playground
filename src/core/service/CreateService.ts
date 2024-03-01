import { EntityWithId } from "../entity/EntityWithId";

export interface CreateService<E extends EntityWithId<unknown>, C> {
    create(data: C): Promise<E>;
}
