import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column('text')
  name: string;
  @Column('text', { select: false })
  DNI: string;
  @Column('text', { unique: true })
  email: string;
  @Column('text', { select: false })
  password: string;
  @Column('text', { name: 'confirm_password', select: false })
  confirmPassword: string;
  @Column('text', {
    nullable: true,
    name: 'token_reset_password',
    select: false,
  })
  tokenResetPassoword: string;
  @Column('text', { nullable: true })
  avatar: string;
  @Column('bool', { default: false })
  active: boolean;
  @Column('text', { array: true, default: ['user', 'free'] })
  roles: string[];
  @Column('text', { nullable: true, select: false })
  token: string;
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
  @BeforeInsert()
  checkFieldsBeforeInsert() {
    this.email = this.email.toLowerCase().trim();
  }
  @BeforeUpdate()
  checkFieldsBeforeUpdate() {
    this.checkFieldsBeforeInsert();
  }
}
