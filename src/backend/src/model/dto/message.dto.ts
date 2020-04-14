import { BaseDTO } from "./base.dto";
import { UserDTO } from "./user.dto";
import { MessageEntity } from "../entity/message.entity";
import { IEntityMapper } from "../../helper/mapper/IEntityMapper";

export class MessageDTO extends BaseDTO implements IEntityMapper<MessageDTO, MessageEntity> {
  public text: string;
  public sent: Date;
  public read: boolean;

  public senderId: string;
  public sender: UserDTO;
  public receiverId: string;
  public receiver: UserDTO;

  public constructor(entity: MessageEntity) {
    super(entity);
    this.text = entity.text;
    this.sent = entity.sent;
    this.read = entity.read;
    this.senderId = entity.sender?.publicId;
    this.sender = entity.sender?.toDTO();
    this.receiverId = entity.sender?.publicId;
    this.sender = entity.receiver?.toDTO();
  }

  public toEntity(): MessageEntity {
    return MessageDTO.dtoToEntity(this);
  }

  public static dtoToEntity(dto: MessageDTO): MessageEntity {
    throw "NotImplementedException";
  }
}