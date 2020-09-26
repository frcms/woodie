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
