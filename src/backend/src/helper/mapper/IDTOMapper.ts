import { BaseDTO } from "../../model/dto/base.dto";
import { BaseEntity } from "../../model/entity/base.entity";

export interface IDTOMapper<TDTO extends BaseDTO, TEntity extends BaseEntity> {
    // entityToDTO: (entity: TEntity) => TDTO;
    toDTO: () => TDTO;
}