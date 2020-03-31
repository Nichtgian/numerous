import { Entity, Column, ManyToOne } from "typeorm";
import { UserEntity } from "./user.entity";
import { BaseEntity } from "./base.entity";

@Entity({name: "Message"})
export class MessageEntity extends BaseEntity {
    @Column()
    text: string;

    @Column()
    sent: Date;

    @Column()
    read: boolean;

    @Column()
    senderId: number;

    @Column()
    receiverId: number;

    @ManyToOne(
      type => UserEntity,
      user => user.sentMessages
    )
    sender: UserEntity;

    @ManyToOne(
      type => UserEntity,
      user => user.receivedMessages
    )
    receiver: UserEntity;
}
