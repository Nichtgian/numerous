import { BaseDTO } from "./base.dto";
import { UserEntity } from "../entity/user.entity";
import { FriendDTO } from "./friend.dto";
import { MessageDTO } from "./message.dto";
import { FriendMapper } from "../../helper/mapper/friend.mapper";
import { MessageMapper } from "../../helper/mapper/message.mapper";

export class UserDTO extends BaseDTO { 
  public username: string;

  public isFriendOf: FriendDTO[];
  public hasFriends: FriendDTO[];
  public sentMessages: MessageDTO[];
  public receivedMessages: MessageDTO[];

  public constructor(entity: UserEntity) {
    super(entity);
    this.username = entity.username;
    this.isFriendOf = entity.isFriendOf.map(x => FriendMapper.toDTO(x));
    this.hasFriends = entity.hasFriends.map(x => FriendMapper.toDTO(x));
    this.sentMessages = entity.sentMessages.map(x => MessageMapper.toDTO(x));
    this.receivedMessages = entity.receivedMessages.map(x => MessageMapper.toDTO(x));
  }
}