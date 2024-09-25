import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./Client.entity";

@Entity("business")
export class Business {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  companyName: string;

  @Column()
  role: string;

  @Column()
  startedAt: Date;

  @ManyToOne(() => Client, (client) => client.businesses) // Relation to Client
  @JoinColumn({ name: 'clientId' })
  client: Client;
}
