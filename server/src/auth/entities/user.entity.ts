import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({ example: '123e4567-e89b-12d3-a456-426614174000' })
  id: string;
  @Column('text')
  @ApiProperty({ example: 'Alejo Cabeza' })
  name: string;
  @Column('text', { select: false })
  @ApiProperty({ example: '12345678' })
  DNI: string;
  @Column('text', { unique: true })
  @ApiProperty({ example: 'YRz5K@example.com' })
  email: string;
  @Column('text', { select: false })
  password: string;
  @Column('text', { name: 'confirm_password', select: false })
  confirmPassword: string;
  @Column('text', { nullable: true })
  @ApiProperty({
    example:
      'https://www.gravatar.com/avatar/123e4567-e89b-12d3-a456-426614174000',
  })
  avatar: string;
  @Column('bool', { default: false })
  @ApiProperty({ example: true })
  active: boolean;
  @Column('text', { array: true, default: ['user', 'free'], select: false })
  @ApiProperty({ example: ['user', 'free'] })
  roles: string[];
  @Column('text', { nullable: true, select: false })
  token: string;
  @Column('text', { nullable: true, select: false })
  tokenResetPassword: string;
  @CreateDateColumn({ name: 'created_at' })
  @ApiProperty({ example: '2020-01-01T00:00:00.000Z' })
  createdAt: Date;
  @UpdateDateColumn({ name: 'updated_at' })
  @ApiProperty({ example: '2020-01-01T00:00:00.000Z' })
  updatedAt: Date;
  @DeleteDateColumn({ name: 'deleted_at' })
  @ApiProperty({ example: '2020-01-01T00:00:00.000Z' })
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
