import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./Client.entity";

@Entity("accounting")
export class Accounting {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  clientId: number; // Foreign key

  @Column('decimal')
  amount: number;

  @Column()
  transactionDate: Date;

  @ManyToOne(() => Client, (client) => client.accounting) // Relation to Client
  @JoinColumn({ name: 'clientId' })
  client: Client;
}
