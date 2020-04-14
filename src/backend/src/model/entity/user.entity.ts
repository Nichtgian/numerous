import { Entity, Column, OneToMany, Index } from "typeorm";
import { FriendEntity } from "./friend.entity";
import { MessageEntity } from "./message.entity";
import { BaseEntity } from "./base.entity";
import { IDTOMapper } from "../../helper/mapper/IDTOMapper";
import { UserDTO } from "../dto/user.dto";

@Entity({name: "User"})
export class UserEntity extends BaseEntity implements IDTOMapper<UserDTO, UserEntity> {
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

    public toDTO(): UserDTO {
        return UserEntity.entityToDTO(this);
    }

    public static entityToDTO(entity: UserEntity): UserDTO {
        if (entity == null)
            return null;

        return new UserDTO(entity);
    }
}