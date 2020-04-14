import { Entity, Column, ManyToOne } from "typeorm";
import { UserEntity } from "./user.entity";
import { BaseEntity } from "./base.entity";
import { IDTOMapper } from "../../helper/mapper/IDTOMapper";
import { MessageDTO } from "../dto/message.dto";

@Entity({name: "Message"})
export class MessageEntity extends BaseEntity implements IDTOMapper<MessageDTO, MessageEntity> {
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

    public toDTO(): MessageDTO {
        return MessageEntity.entityToDTO(this);
    }

    public static entityToDTO(entity: MessageEntity): MessageDTO {
        if (entity == null)
            return null;

        return new MessageDTO(entity);
    }
}
