import { UserDTO } from "../../model/dto/user.dto";
import { UserEntity } from "../../model/entity/user.entity";

// Todo-go: Try implementing extension method
export class UserMapper{

    public static toDTO(entity: UserEntity): UserDTO {
        if (entity == null)
            return null;

        return new UserDTO(entity);
    }

    // public static toEntity(dto: UserDTO): UserEntity {
    //     if (dto == null)
    //         return null;

    //     return new UserEntity();
    // }
}