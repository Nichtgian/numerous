import { IMapper } from "./IMapper";
import { FriendMapper } from "./friend.mapper";
import { MessageMapper } from "./message.mapper";
import { UserMapper } from "./user.mapper";
import { Injector} from "../injection/injector";

import { FriendDTO } from "../../model/dto/friend.dto";
import { UserDTO } from "../../model/dto/user.dto";
import { MessageDTO } from "../../model/dto/message.dto";
import { FriendEntity } from "../../model/entity/friend.entity";
import { UserEntity } from "../../model/entity/user.entity";
import { MessageEntity } from "../../model/entity/message.entity";

const friendMapper: FriendMapper = Injector.resolve(FriendMapper);
const messageMapper: MessageMapper = Injector.resolve(MessageMapper);
const userMapper: UserMapper = Injector.resolve(UserMapper);

declare module "../../model/entity/friend.entity" {
    interface FriendEntity {
        toDTO(): FriendDTO;
    }
}

declare module "../../model/entity/user.entity" {
    interface UserEntity {
        toDTO(): UserDTO;
    }
}

declare module "../../model/entity/message.entity" {
    interface MessageEntity {
        toDTO(): MessageDTO;
    }
}

export function registerExtensionMethods() {
    FriendEntity.prototype.toDTO = function() {
        return friendMapper.toDTO(this);
    };

    UserEntity.prototype.toDTO = function() {
        return userMapper.toDTO(this);
    };

    MessageEntity.prototype.toDTO = function() {
        return messageMapper.toDTO(this);
    };
}