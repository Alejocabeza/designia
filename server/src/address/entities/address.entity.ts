import { User } from 'src/auth/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('address')
export class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column('text')
  name: string;
  @Column('text')
  municipality: string;
  @Column('text')
  country: string;
  @Column('text')
  city: string;
  @Column('text', { name: 'main_address' })
  mainAddress: string;
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
  @ManyToOne(() => User, (user) => user.id, { eager: true })
  createdBy: User;
  @ManyToOne(() => User, (user) => user.id, { eager: true })
  updatedBy: User;
}
