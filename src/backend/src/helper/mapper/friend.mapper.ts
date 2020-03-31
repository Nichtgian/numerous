import { FriendEntity } from "../../model/entity/friend.entity";
import { FriendDTO } from "../../model/dto/friend.dto";

export class FriendMapper{

    public static toDTO(entity: FriendEntity): FriendDTO {
        if (entity == null)
            return null;

        return new FriendDTO(entity);
    }
}