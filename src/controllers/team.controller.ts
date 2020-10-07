/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { createConnection, Connection, Repository } from 'typeorm';
import Role from '../entities/role.entity';
import Subteam from '../entities/subteam.entity';
import Team from '../entities/team.entity';
import { User } from '../entities/user.entity';

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
    type: string,
    teamNumber: string,
    admin: User,
    adminRole: Role,
    subteam: Subteam,
  ): Promise<Team> {
    const members:User[] = [admin];
    const roles:Role[] = [adminRole];
    const subteams:Subteam[] = [subteam];
    const team = this.repository.create({
      name,
      type,
      teamNumber,
      members,
      roles,
      subteams,
    });

    await this.repository.save(team);

    return team;
  }
}
