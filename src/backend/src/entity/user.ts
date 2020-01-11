import { Entity, PrimaryGeneratedColumn, Column, OneToMany, Index } from "typeorm";
import { Friend } from "./friend";
import { Message } from "./message";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Index({ unique: true })
    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    salt: string;

    // Friend
    @OneToMany(
        type => Friend,
        friend => friend.user
    )
    isFriendOf: Friend[];

    @OneToMany(
        type => Friend,
        friend => friend.friend
    )
    hasFriends: Friend[];

    // Message
    @OneToMany(
        type => Message,
        message => message.sender
    )
    sentMessages: Message[];

    @OneToMany(
        type => Message,
        message => message.receiver
    )
    receivedMessages: Message[];
}