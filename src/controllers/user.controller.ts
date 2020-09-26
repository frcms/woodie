import { createConnection, Connection, Repository } from 'typeorm';
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
}
