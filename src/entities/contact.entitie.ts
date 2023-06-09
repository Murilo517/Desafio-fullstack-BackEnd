import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entitie";

@Entity("contacts")
class Contact {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  telephone: string;

  @CreateDateColumn({ type: 'date' })
  createdAt: string;

  @ManyToOne(() => User, user => user.contacts, {onDelete: 'CASCADE'})
  user: User;
}

export { Contact };