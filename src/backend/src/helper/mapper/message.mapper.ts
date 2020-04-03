import { MessageEntity } from "../../model/entity/message.entity";
import { MessageDTO } from "../../model/dto/message.dto";
import { IMapper } from "./IMapper";
import { Injectable } from "../injection/injectable.decorator";

@Injectable()
export class MessageMapper implements IMapper<MessageDTO, MessageEntity> {

    public toDTO(entity: MessageEntity): MessageDTO {
        if (entity == null)
            return null;

        return new MessageDTO(entity);
    }
}