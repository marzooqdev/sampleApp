import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Client } from "./Client.entity";

@Entity("healthcare")
export class Healthcare {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  patientId: number; // Foreign key

  @Column()
  treatment: string;

  @Column()
  treatmentDate: Date;

  @ManyToOne(() => Client, (client) => client.healthcare) // Relation to Client
  @JoinColumn({ name: 'patientId' })
  client: Client;
}
