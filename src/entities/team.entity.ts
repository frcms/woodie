/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// eslint-disable-next-line import/no-cycle
import { User } from './user.entity';
import Role from './role.entity';
import Subteam from './subteam.entity';

@Entity()
export default class Team {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  type!: string; // FRC, FTC, FLL, maybe VEX?

  @Column()
  teamNumber!: string;

  @Column()
  roles!: Array<Role>;

  @Column()
  subteams!: Array<Subteam>;

  @Column()
  location!: string;

  @Column()
  rookieYear!: number;

  @Column()
  sponsors!: Array<string>;

  @Column()
  members!: Array<User>;
}
