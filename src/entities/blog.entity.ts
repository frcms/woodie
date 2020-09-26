import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// eslint-disable-next-line import/no-cycle
import { User } from './user.entity';

@Entity()
export default class Subteam {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  author!: User;

  @Column()
  content!: JSON;

  @Column()
  date!: Date;

  @Column()
  tags!: Array<string>;
}
