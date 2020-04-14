import { BaseDTO } from "../../model/dto/base.dto";
import { BaseEntity } from "../../model/entity/base.entity";

export interface IEntityMapper<TDTO extends BaseDTO, TEntity extends BaseEntity> {
    // dtoToEntity: (dto: TDTO) => TEntity;
    toEntity: () => TEntity;
}