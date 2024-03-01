import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { EntityWithId } from "../core/entity/EntityWithId";

@Entity()
export class User implements EntityWithId<number> {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    email: string;
}

