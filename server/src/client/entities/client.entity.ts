import { User } from "src/auth/entities/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('client')
export class Client {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column('text', {nullable: true})
    name: string;
    @Column('text', {nullable:true})
    DNI_RIF: string;
    @Column('text', {nullable:true})
    email: string
    @Column('text', {nullable:true})
    phone: string
    @ManyToOne(() => User, (user) => user.id)
    createdBy: User
    @ManyToOne(() => User, (user) => user.id)
    updatedBy: User
    @CreateDateColumn({name:'created_at'})
    createdAt: Date
    @UpdateDateColumn({name:'updated_at'})
    updatedAt: Date
    @DeleteDateColumn({name:'deleted_at'})
    deletedAt: Date
}
