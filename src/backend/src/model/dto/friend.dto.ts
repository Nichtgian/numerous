import { BaseDTO } from "./base.dto";
import { UserDTO } from "./user.dto";
import { FriendEntity } from "../entity/friend.entity";

export class FriendDTO extends BaseDTO { 
  public userId: string;
  public user: UserDTO;
  public friendId: string;
  public friend: UserDTO;

  public constructor(entity: FriendEntity) {
    super(entity);
    this.userId = entity.user?.publicId;
    this.user = entity.user.toDTO();
    this.friendId = entity.friend?.publicId;
    this.friend = entity.friend.toDTO();
  }
}