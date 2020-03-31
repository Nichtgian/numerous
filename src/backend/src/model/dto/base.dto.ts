import { BaseEntity } from "../entity/base.entity";

export abstract class BaseDTO {
    public id: string;

    public constructor(entity: BaseEntity) {
        this.id = entity.publicId;
    }
} 