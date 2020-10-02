/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { createConnection, Connection, Repository } from 'typeorm';
import Subteam from '../entities/subteam.entity';
import { User } from '../entities/user.entity';

export default class UserController {
  private repository!: Repository<User>;

  constructor() {
    UserController.connect()
      .then((con) => {
        this.repository = con.getRepository(User);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  private static connect(): Promise<Connection> {
    const connection = createConnection();

    return connection;
  }

  async createUser(username: string, email: string, subteam: Subteam, password: string):
  Promise<User> {
    const user = this.repository.create({
      username,
      email,
      subteam,
      password,
    });
    await this.repository.save(user);
    return user;
  }

  async updateUser(id: number, update: Record<string, unknown>): Promise<void> {
    await this.repository.update(id, update);
  }

  async deleteUser(id: number): Promise<boolean> {
    await this.repository.delete(id);
    return true;
  }

  async getUser(id: number): Promise<User | undefined> {
    const user = await this.repository.findOne(id);
    return user;
  }

  async getAllUsers(): Promise<User[]> {
    const users = await this.repository.manager.find(User);
    return users;
  }
}
