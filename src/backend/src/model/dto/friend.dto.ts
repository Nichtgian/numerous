import { BaseDTO } from "./base.dto";
import { UserDTO } from "./user.dto";
import { UserMapper } from "../../helper/mapper/user.mapper";
import { FriendEntity } from "../entity/friend.entity";

export class FriendDTO extends BaseDTO { 
  public userId: string;
  public user: UserDTO;
  public friendId: string;
  public friend: UserDTO;

  public constructor(entity: FriendEntity) {
    super(entity);
    this.userId = entity.user?.publicId;
    this.user = UserMapper.toDTO(entity.user);
    this.friendId = entity.friend?.publicId;
    this.friend = UserMapper.toDTO(entity.friend);
  }
}