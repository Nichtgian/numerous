import { PrimaryGeneratedColumn, Column, Index } from "typeorm";

export abstract class BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Index({ unique: true })
    @Column()
    publicId: string;
}
