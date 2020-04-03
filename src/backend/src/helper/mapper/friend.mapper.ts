import { FriendEntity } from "../../model/entity/friend.entity";
import { FriendDTO } from "../../model/dto/friend.dto";
import { IMapper } from "./IMapper";
import { Injectable } from "../injection/injectable.decorator";

@Injectable()
export class FriendMapper implements IMapper<FriendDTO, FriendEntity> {

    public toDTO(entity: FriendEntity): FriendDTO {
        if (entity == null)
            return null;

        return new FriendDTO(entity);
    }
}