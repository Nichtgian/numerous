import { UserDTO } from "../../model/dto/user.dto";
import { UserEntity } from "../../model/entity/user.entity";
import { IMapper } from "./IMapper";
import { Injectable } from "../injection/injectable.decorator";

@Injectable()
export class UserMapper implements IMapper<UserDTO, UserEntity> {

    public toDTO(entity: UserEntity): UserDTO {
        if (entity == null)
            return null;

        return new UserDTO(entity);
    }
}