import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./user";

@Entity()
export class Friend {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    seen: boolean;

    @Column()
    accepted: boolean;

    @Column()
    userId: number;

    @Column()
    friendId: number;

    @ManyToOne(
      type => User,
      user => user.isFriendOf
    )
    user: User;

    @ManyToOne(
      type => User,
      user => user.hasFriends
    )
    friend: User;
}
