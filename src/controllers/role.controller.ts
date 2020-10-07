/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { createConnection, Connection, Repository } from 'typeorm';
import Role from '../entities/role.entity';
import { User } from '../entities/user.entity';

export default class RoleController {
  private repository!: Repository<Role>;

  constructor() {
    RoleController.connect()
      .then((con) => {
        this.repository = con.getRepository(Role);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  private static connect(): Promise<Connection> {
    const connection = createConnection();

    return connection;
  }

  async createRole(name: string, permissions: Record<string, unknown>): Promise<Role> {
    const role = this.repository.create({
      name,
      permissions,
    });

    await this.repository.save(role);

    return role;
  }
}
