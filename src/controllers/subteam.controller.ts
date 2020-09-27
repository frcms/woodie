/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
import { createConnection, Connection, Repository } from 'typeorm';
import Subteam from '../entities/subteam.entity';

export default class SubteamController {
  private repository!: Repository<Subteam>;

  constructor() {
    SubteamController.connect()
      .then((con) => {
        this.repository = con.getRepository(Subteam);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }

  private static connect(): Promise<Connection> {
    const connection = createConnection();

    return connection;
  }
}
