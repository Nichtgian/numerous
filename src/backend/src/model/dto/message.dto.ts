import { BaseDTO } from "./base.dto";
import { UserDTO } from "./user.dto";
import { MessageEntity } from "../entity/message.entity";
import { UserMapper } from "../../helper/mapper/user.mapper";

export class MessageDTO extends BaseDTO { 
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
    this.sender = UserMapper.toDTO(entity.sender);
    this.receiverId = entity.sender?.publicId;
    this.sender = UserMapper.toDTO(entity.receiver);
  }
}