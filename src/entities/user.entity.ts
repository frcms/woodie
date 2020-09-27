/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
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
