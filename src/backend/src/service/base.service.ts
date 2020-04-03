import { Repository, getConnection } from "typeorm";
import { BaseEntity } from "../model/entity/base.entity";

export abstract class BaseService<Entity extends BaseEntity> {

    private readonly _repository: Repository<Entity>;

    protected constructor(Entity) {
        this._repository = getConnection().getRepository(Entity);
    }  

    public getRepository(): Repository<Entity> {
        return this._repository;
    }

    public async getAllAsync(): Promise<Entity[]> {
        return this.getByAsync();
    }

    public async getAllIncludeRelationsAsync(relations: []): Promise<Entity[]> {
        return this.getByIncludeRelationsAsync(relations);
    }

    public async getByAsync(filter: {} = {}): Promise<Entity[]> {
        return await this._repository.find(filter);
    }

    public async getByIncludeRelationsAsync(relations: string[], filter: {} = {}): Promise<Entity[]> {
        return await this._repository.find({ where: filter, relations: relations });
    }

    public async getSingleByAsync(filter: {} = {}): Promise<Entity> {
        return await this._repository.findOne(filter);
    }

    async getSingleByIncludeRelationsAsync(relations: string[], filter: {} = {}): Promise<Entity> {
        return await this._repository.findOne({ where: filter, relations: relations });
    }

    public async upsertAsync(entity: Entity): Promise<Entity> {
        const existingEntity = this.getSingleByAsync({ publicId: entity.publicId });
        if (existingEntity == null)

        return await this._repository.manager.save(entity);
    }
}
