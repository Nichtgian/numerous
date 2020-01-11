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