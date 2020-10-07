/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { createConnection, Connection, Repository } from 'typeorm';
import Team from '../entities/team.entity';

export default class TeamController {
  private repository!: Repository<Team>;

  constructor() {
    TeamController.connect()
      .then((con) => {
        this.repository = con.getRepository(Team);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  private static connect(): Promise<Connection> {
    const connection = createConnection();

    return connection;
  }

  async createTeam(
    name: string,
    type: 'FRC' | 'FTC' | 'FLL',
    admin: number,
  ): Promise<Team> {
    const team = this.repository.create({
      name,
      admin,
      type,
      subteams: [],
      members: [admin],
    });

    await this.repository.save(team);

    return team;
  }
}
