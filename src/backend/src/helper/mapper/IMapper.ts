import { BaseDTO } from "../../model/dto/base.dto";
import { BaseEntity } from "../../model/entity/base.entity";

export interface IMapper<TDTO extends BaseDTO, TEntity extends BaseEntity> {
    toDTO: (TEntity) => TDTO;
}