import { BaseDTO } from "./base.dto";
import { UserEntity } from "../entity/user.entity";
import { FriendDTO } from "./friend.dto";
import { MessageDTO } from "./message.dto";

export class UserDTO extends BaseDTO { 
  public username: string;

  public isFriendOf: FriendDTO[];
  public hasFriends: FriendDTO[];
  public sentMessages: MessageDTO[];
  public receivedMessages: MessageDTO[];

  public constructor(entity: UserEntity) {
    super(entity);
    this.username = entity.username;
    this.isFriendOf = entity.isFriendOf.map(x => x.toDTO());
    this.hasFriends = entity.hasFriends.map(x => x.toDTO());
    this.sentMessages = entity.sentMessages.map(x => x.toDTO());
    this.receivedMessages = entity.receivedMessages.map(x => x.toDTO());
  }
}