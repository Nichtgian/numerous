import { Request, Response } from "express";
import { FriendService } from "../service/friendService";
import { UserService } from "../service/userService";
import { MessageService } from "../service/messageService";

export class SocialController {

    static async addFriend(req: Request, res: Response) {
        const token = req.headers.authorization;
        const friendId = req.params.id;

        try {
            const decodedToken = UserService.verifyToken(token);
            await FriendService.addFriend(decodedToken.username, friendId);

            res.send();
        } catch {
            return res.status(500).end();
        }
    }

    static async getFriends(req: Request, res: Response) {
        const token = req.headers.authorization;

        try {
            const decodedToken = UserService.verifyToken(token);
            const user = await UserService.getUserBy({ username: decodedToken.username });
            let friends = await FriendService.getFriendsBy({ userId: user.id, accepted: true });
            friends.forEach((friend) => {
                friend.friend.password = "";
                friend.friend.salt = "";
                friend.user.password = "";
                friend.user.salt = "";
            });

            res.send(friends);
        } catch {
            return res.status(500).end();
        }
    }

    static async searchUser(req: Request, res: Response) {
        const username = req.params.id;

        try {
            const user = await UserService.getUserBy({ username: username});
            user.password = "";
            user.salt = "";

            res.send(user);
        } catch {
            return res.status(500).end();
        }
    }

    static async removeFriend(req: Request, res: Response) {
        const token = req.headers.authorization;
        const friendId = req.params.id;

        try {
            const decodedToken = UserService.verifyToken(token);
            await FriendService.removeFriend(decodedToken.username, friendId);

            res.send();
        } catch {
            return res.status(500).end();
        }
    }

    static async sendMessage(req: Request, res: Response) {
        const token = req.headers.authorization;
        const { friendId, text } = req.body;

        try {
            const decodedToken = UserService.verifyToken(token);
            await MessageService.sendMessage(decodedToken.username, friendId, text);

            res.send();
        } catch {
            return res.status(500).end();
        }
    }

    static async markMessagesAsRead(req: Request, res: Response) {
        const token = req.headers.authorization;

        try {
            const decodedToken = UserService.verifyToken(token);
            await MessageService.markMessageAsRead(decodedToken.username);

            res.send();
        } catch {
            return res.status(500).end();
        }
    }
}