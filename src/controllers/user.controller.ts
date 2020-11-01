/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { createConnection, Connection, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import User from '../entities/user.entity';

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

  async createUser(username: string, email: string, password: string): Promise<User> {
    const user = this.repository.create({
      username,
      email,
      password,
    });

    await this.repository.save(user);

    return user;
  }

  async checkUser(username: string, password: string): Promise<boolean> {
    const user = await this.repository.findOne({
      username,
    });

    if (!user) return false;

    const correct = await bcrypt.compare(password, user.password);

    return correct;
  }

  async updateUser(id: number, update: Record<string, unknown>): Promise<void> {
    await this.repository.update(id, update);
  }

  async deleteUser(id: number): Promise<void> {
    await this.repository.delete(id);
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
