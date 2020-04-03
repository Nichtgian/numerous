import { FriendEntity } from "../model/entity/friend.entity";
import { FriendDTO } from "../model/dto/friend.dto";
import { BaseTest } from "./base.test";
import { Injectable } from "../helper/injection/injectable.decorator";

@Injectable()
export class MapperTest extends BaseTest {

    public runAllTests() {
        this.test_FriendMapper_ToDTO();
    }

    public test_FriendMapper_ToDTO() {

        const friendEntity: FriendEntity = new FriendEntity();
        friendEntity.publicId = "Id";
        const friendDTO: FriendDTO = friendEntity.toDTO();

        super.should(friendDTO.id).be(friendEntity.publicId);
    }
}