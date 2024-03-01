import { ReadService } from "../core/service/ReadService";
import { User } from "./User";
import { DeleteService } from "../core/service/DeleteService";

export class UserService implements ReadService<User>, DeleteService<User> {
    delete(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    getOne(id: number): Promise<User> {
        throw new Error("Method not implemented.");
    }

    async getAll(): Promise<User[]> {
        throw new Error("Method not implemented.");
    }
}
