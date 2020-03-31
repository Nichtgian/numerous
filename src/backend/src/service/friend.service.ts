import { UserService } from "./user.service";
import { FriendEntity } from "../model/entity/friend.entity";
import { BaseService } from "./base.service";
import { Connection } from "typeorm";
import { Injectable } from "../helper/injection/injectable.decorator";

@Injectable()
export class FriendService extends BaseService<FriendEntity> {

    private _userService: UserService;

    public constructor(connection: Connection, userService: UserService) {
        super(connection, FriendEntity);
        this._userService = userService;
    }

    public async addFriendAsync(username, friendId): Promise<void> {
        const user = await this._userService.getSingleByAsync({ username: username });
        const friend = new FriendEntity();
        friend.userId = user.id;
        friend.friendId = friendId;

        await super.getRepository().save(friend);
    }

    public async removeFriendAsync(username, friendId): Promise<void> {
        const user = await this._userService.getSingleByAsync({ username: username });
        const friend = await this.getSingleByAsync({ userId: user.id, friendId: friendId });

        await super.getRepository().remove(friend);
    }
}
