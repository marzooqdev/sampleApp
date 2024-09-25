import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Business } from "./Business.entity";
import { Accounting } from "./Accounting.entity";
import { Healthcare } from "./Healthcare.entity";

@Entity("client")
export class Client {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  age: number;

  @Column()
  status: string;

  @OneToMany(() => Business, (business) => business.client)
  businesses: Business[];  // This field represents the one-to-many relationship

  @OneToMany(() => Accounting, (accounting) => accounting.client)
  accounting: Accounting[];

  @OneToMany(() => Healthcare, (healthcare) => healthcare.client)
  healthcare: Healthcare[];
}
