import { MessageEntity } from "../../model/entity/message.entity";
import { MessageDTO } from "../../model/dto/message.dto";

export class MessageMapper{

    public static toDTO(entity: MessageEntity): MessageDTO {
        if (entity == null)
            return null;

        return new MessageDTO(entity);
    }
}