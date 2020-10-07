/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class Subteam {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  owner!: number;

  @Column('simple-array')
  members!: number[];
}
