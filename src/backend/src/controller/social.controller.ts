import { Request, Response } from "express";
import { FriendService } from "../service/friend.service";
import { UserService } from "../service/user.service";
import { MessageService } from "../service/message.service";
import { MessageEntity } from "../model/entity/message.entity";
import { ISocialController } from "./ISocial.controller";
import { HttpStatusCode } from "../helper/enum/httpStatusCode.enum";
import { Controller } from "../helper/routing/controller.decorator";
import { Route } from "../helper/routing/route.decorator";
import { HttpMethod } from "../helper/enum/httpMethod.enum";
import { Injectable } from "../helper/injection/injectable.decorator";

@Injectable()
@Controller("/social")
export class SocialController implements ISocialController {

    private _userService: UserService;
    private _friendService: FriendService;
    private _messageService: MessageService;

    public constructor(userService: UserService, friendService: FriendService, messageService: MessageService) {
        this._userService = userService;
        this._friendService = friendService;
        this._messageService = messageService;
    }

    @Route(HttpMethod.Get, "/addFriendAsync/:id")
    public async addFriendAsync(req: Request, res: Response): Promise<Response> {
        const token = req.headers.authorization;
        const friendId = req.params.id;

        try {
            const decodedToken = UserService.verifyToken(token);
            await this._friendService.addFriendAsync(decodedToken.username, friendId);
            res.send();
        } catch {
            return res.status(HttpStatusCode.Error).send();
        }
    }

    @Route(HttpMethod.Get, "/getFriendsAsync")
    public async getFriendsAsync(req: Request, res: Response): Promise<Response> {
        const token = req.headers.authorization;

        try {
            const decodedToken = UserService.verifyToken(token);
            const user = await this._userService.getSingleByAsync({ username: decodedToken.username });
            const friends = await this._friendService.getByIncludeRelationsAsync(["user", "friend"], { userId: user.id });
            res.send(friends.map(friend => friend.toDTO()));
        } catch {
            return res.status(HttpStatusCode.Error).send();
        }
    }

    @Route(HttpMethod.Get, "/searchUserAsync/:id")
    public async searchUserAsync(req: Request, res: Response): Promise<Response> {
        const username = req.params.id;

        try {
            const user = await this._userService.getSingleByAsync({ username: username });
            res.send(user.toDTO());
        } catch {
            return res.status(HttpStatusCode.Error).send();
        }
    }

    @Route(HttpMethod.Post, "/searchUserAndChatAsync")
    public async searchUserAndChatAsync(req: Request, res: Response): Promise<Response> {
        const username = req.body.username;
        const withUserId = req.body.withUserId;

        try {
            const user = (await this._userService.getSingleByIncludeRelationsAsync(["sentMessages", "receivedMessages"], { id: withUserId })).toDTO();
            const userFilter = (await this._userService.getSingleByAsync({ username: username })).toDTO();
            const friend = (await this._friendService.getSingleByAsync({ userId: userFilter.id, friendId: user.id })).toDTO();

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
            messages.sort((a: MessageEntity, b: MessageEntity) => {
                return a.sent.getTime() - b.sent.getTime();
            });

            res.send({ user: user, messages: messages, alreadyFriends: friend != undefined });

        } catch {
            return res.status(HttpStatusCode.Error).send();
        }
    }

    @Route(HttpMethod.Get, "/removeFriendAsync/:id")
    public async removeFriendAsync(req: Request, res: Response): Promise<Response> {
        const token = req.headers.authorization;
        const friendId = req.params.id;

        try {
            const decodedToken = UserService.verifyToken(token);
            await this._friendService.removeFriendAsync(decodedToken.username, friendId);
            res.send();
        } catch {
            return res.status(HttpStatusCode.Error).send();
        }
    }

    @Route(HttpMethod.Post, "/sendMessageAsync")
    public async sendMessageAsync(req: Request, res: Response): Promise<Response> {
        const token = req.headers.authorization;
        const { receiverId, text } = req.body;

        try {
            const decodedToken = UserService.verifyToken(token);
            await this._messageService.sendMessageAsync(decodedToken.username, receiverId, text);
            res.send();
        } catch {
            return res.status(HttpStatusCode.Error).send();
        }
    }

    @Route(HttpMethod.Post, "/markMessagesAsReadAsync")
    public async markMessagesAsReadAsync(req: Request, res: Response): Promise<Response> {
        const token = req.headers.authorization;

        try {
            const decodedToken = UserService.verifyToken(token);
            await this._messageService.markMessagesAsReadAsync(decodedToken.username);
            res.send();
        } catch {
            return res.status(HttpStatusCode.Error).send();
        }
    }
}