import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// eslint-disable-next-line import/no-cycle
import Subteam from './subteam.entity';

export interface Name {
  first: string;
  last: string;
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  username!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @Column()
  subteam!: Subteam;

  // @todo add back
  // subteam: SubteamSchema,
  // permissions: [PermissionSchema],
}
