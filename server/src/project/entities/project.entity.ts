import { User } from "src/auth/entities/user.entity";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('project')
export class Project {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column('text', {nullable: true})
    name: string;
    @Column('text', {nullable:true})
    description: string;
    @ManyToOne(() => User, (user) => user.id, {
        eager: true,
        nullable: true,
    })
    createdBy: User
    @ManyToOne(() => User, (user) => user.id, {
        eager: true,
        nullable: true,
    })
    updatedBy: User;
    @CreateDateColumn({name: 'created_at'})
    createdAt: Date;
    @UpdateDateColumn({name: 'updated_at'})
    updatedAt: Date;
    @DeleteDateColumn({name: 'deleted_at'})
    deletedAt: Date
}
