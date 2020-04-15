import { FriendEntity } from "../model/entity/friend.entity";
import { BaseTest, Testee } from "./base.test";
import { Injectable } from "../helper/injection/injectable.decorator";

@Injectable()
export class MapperTest extends BaseTest {

    public runAllTests() {
        this.test_FriendMapper_ToDTO();
    }

    public test_FriendMapper_ToDTO() {
        const friendEntity: FriendEntity = new FriendEntity();
        friendEntity.publicId = "Id";

        const testee = new Testee(friendEntity.toDTO());
        testee.property("id").should().be(friendEntity.publicId);
    }
}