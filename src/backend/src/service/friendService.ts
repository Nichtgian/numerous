import { getManager} from "typeorm";
import { UserService } from "./userService";
import { Friend } from "../entity/friend";

export class FriendService {

    static async getAllFriends(): Promise<Friend[]> {
        return this.getFriendsBy({});
    }

    static async getFriendsBy(filter): Promise<Friend[]> {
        const repository = getManager().getRepository(Friend);
        return await repository.find({ where: filter, relations: ["user", "friend"] });
    }

    static async getFriendBy(filter): Promise<Friend> {
        const repository = getManager().getRepository(Friend);
        return await repository.findOne(filter);
    }

    static async addFriend(username, friendId) {
        const repository = getManager().getRepository(Friend);
        const user = await UserService.getUserBy({ username: username });

        const friend = new Friend();
        friend.userId = user.id;
        friend.friendId = friendId;
        friend.accepted = false;
        friend.seen = false;

        await repository.manager.save(friend);
    }

    static async removeFriend(username, friendId) {
        const repository = getManager().getRepository(Friend);
        const user = await UserService.getUserBy({ username: username });
        const friend = await this.getFriendBy({ userId: user.id, friendId: friendId });

        await repository.remove(friend);
    }
}
