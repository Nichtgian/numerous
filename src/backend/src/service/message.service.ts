import { UserService } from "./user.service";
import { MessageEntity } from "../model/entity/message.entity";
import { BaseService } from "./base.service";
import { Injectable } from "../helper/injection/injectable.decorator";

@Injectable()
export class MessageService extends BaseService<MessageEntity>  {

    private _userService: UserService;

    public constructor(userService: UserService) {
        super(MessageEntity);
        this._userService = userService;
    }

    public async sendMessageAsync(username, receivedId, text): Promise<void> {
        const sender = await this._userService.getSingleByAsync({ username: username });
        const message = new MessageEntity();
        message.senderId = sender.id;
        message.receiverId = receivedId;
        message.text = text;
        message.read = true;
        message.sent = new Date(Date.now());

        await super.getRepository().save(message);
    }

    public async markMessagesAsReadAsync(username): Promise<void> {
        const receiver = await this._userService.getSingleByAsync({ username: username });
        const messages = await this.getByAsync({ receiverId: receiver.id, read: false });

        messages.forEach((message: MessageEntity) => {
            message.read = true;
        });

        await super.getRepository().save(messages);
    }
}
