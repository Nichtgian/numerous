import { Request, Response } from "express";
import { FriendService } from "../service/friendService";
import { UserService } from "../service/userService";
import { MessageService } from "../service/messageService";
import { Message } from "../entity/message";

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
            let friends = await FriendService.getFriendsByIncludeRelations({ userId: user.id }, ["user", "friend"]);
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

    static async searchUserAndChat(req: Request, res: Response) {
        const username = req.body.username;
        const withUserId = req.body.withUserId;

        try {
            const user = await UserService.getUserByIncludeRelations({ id: withUserId }, ["sentMessages", "receivedMessages"]);
            const userFilter = await UserService.getUserBy({ username: username });
            const friend = await FriendService.getFriendBy({ userId: userFilter.id, friendId: user.id });

            user.password = "";
            user.salt = "";

            let filteredSentMessages = [];
            let filteredReceivedMessages = [];
            user.sentMessages.forEach(message => {
                if (message.receiverId == userFilter.id) {
                    filteredSentMessages.push(message);
                }
            });
            user.receivedMessages.forEach(message => {
                if (message.senderId == userFilter.id) {
                    filteredReceivedMessages.push(message);
                }
            });

            let messages = filteredSentMessages.concat(filteredReceivedMessages);
            messages.sort((a: Message, b: Message) => {
                return a.sent.getTime() - b.sent.getTime();
            });

            res.send({ user: user, messages: messages, alreadyFriends: friend != undefined });

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
        const { receiverId, text } = req.body;

        try {
            const decodedToken = UserService.verifyToken(token);
            await MessageService.sendMessage(decodedToken.username, receiverId, text);

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