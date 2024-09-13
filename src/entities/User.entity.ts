import { Entity, Column, PrimaryGeneratedColumn, AfterInsert, BeforeInsert } from 'typeorm';
import { UserRole } from '../enums/user.enum';
import { Logger } from '@nestjs/common';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.USER,
  })
  role: UserRole;
}
