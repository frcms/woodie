import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

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

  // @todo add back
  // subteam: SubteamSchema,
  // permissions: [PermissionSchema],
}
