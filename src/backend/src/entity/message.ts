import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./user";

@Entity()
export class Message {
    @PrimaryGeneratedColumn()
    id: number;

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
      type => User,
      user => user.sentMessages
    )
    sender: User;

    @ManyToOne(
      type => User,
      user => user.receivedMessages
    )
    receiver: User;
}
