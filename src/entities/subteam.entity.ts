import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// eslint-disable-next-line import/no-cycle
import { User } from './user.entity';

@Entity()
export default class Subteam {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  owner!: User;

  @Column()
  members!: Array<User>;
}
