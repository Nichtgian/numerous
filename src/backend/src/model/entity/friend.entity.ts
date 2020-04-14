import { Entity, Column, ManyToOne } from "typeorm";
import { UserEntity } from "./user.entity";
import { BaseEntity } from "./base.entity";
import { FriendDTO } from "../dto/friend.dto";
import { IDTOMapper } from "../../helper/mapper/IDTOMapper";

@Entity({name: "Friend"})
export class FriendEntity extends BaseEntity implements IDTOMapper<FriendDTO, FriendEntity> {
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

    public toDTO(): FriendDTO {
        return FriendEntity.entityToDTO(this);
    }

    public static entityToDTO(entity: FriendEntity): FriendDTO {
        if (entity == null)
            return null;

        return new FriendDTO(entity);
    }
}
