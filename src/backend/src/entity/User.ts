import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Friendlist } from "./friendlist";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    hash: string;

    @Column()
    salt: string;

    @OneToMany(
      type => Friendlist,
      friendList => friendList.user
    )
    friendsWith: Friendlist[];

    @OneToMany(
      type => Friendlist,
      friendList => friendList.friend
    )
    hasFriends: Friendlist[];
}
