/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class Post {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column() // Users ID
  author!: number;

  @Column()
  markdown!: string;

  @Column()
  source!: string;

  @Column()
  date!: string; // This is an ISO timestamp

  @Column('simple-array')
  tags!: string[];
}
