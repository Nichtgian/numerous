import { Entity, Column, OneToMany, Index } from "typeorm";
import { FriendEntity } from "./friend.entity";
import { MessageEntity } from "./message.entity";
import { BaseEntity } from "./base.entity";

@Entity({name: "User"})
export class UserEntity extends BaseEntity {
    @Index({ unique: true })
    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    salt: string;

    // Friend
    @OneToMany(
        type => FriendEntity,
        friend => friend.user
    )
    isFriendOf: FriendEntity[];

    @OneToMany(
        type => FriendEntity,
        friend => friend.friend
    )
    hasFriends: FriendEntity[];

    // Message
    @OneToMany(
        type => MessageEntity,
        message => message.sender
    )
    sentMessages: MessageEntity[];

    @OneToMany(
        type => MessageEntity,
        message => message.receiver
    )
    receivedMessages: MessageEntity[];
}