import { getManager } from "typeorm";
import { UserService } from "./userService";
import { Message } from "../entity/message";

export class MessageService {
    static async getAllMessages(): Promise<Message[]> {
        return this.getMessagesBy({});
    }

    static async getMessagesBy(filter): Promise<Message[]> {
        const repository = getManager().getRepository(Message);
        return await repository.find(filter);
    }

    static async sendMessage(username, receivedId, text) {
        const repository = getManager().getRepository(Message);
        const sender = await UserService.getUserBy({ username: username });

        const message = new Message();
        message.senderId = sender.id;
        message.receiverId = receivedId;
        message.text = text;
        message.read = false;
        message.sent = new Date(Date.now());

        await repository.manager.save(message);
    }

    static async markMessageAsRead(username) {
        const repository = getManager().getRepository(Message);
        const receiver = await UserService.getUserBy({ username: username });
        const messages = await this.getMessagesBy({ receiverId: receiver.id, read: false });

        messages.forEach((message: Message) => {
            message.read = true;
        });

        await repository.manager.save(messages);
    }
}
