import { Entity, Column, ManyToOne } from "typeorm";
import { UserEntity } from "./user.entity";
import { BaseEntity } from "./base.entity";

@Entity({name: "Friend"})
export class FriendEntity extends BaseEntity {
    @Column()
    userId: number;

    @Column()
    friendId: number;

    @ManyToOne(
      type => UserEntity,
      user => user.isFriendOf
    )
    user: UserEntity;

    @ManyToOne(
      type => UserEntity,
      user => user.hasFriends
    )
    friend: UserEntity;
}
