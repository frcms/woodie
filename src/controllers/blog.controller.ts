import { createConnection, Connection, Repository } from 'typeorm';
import Blog from '../entities/blog.entity';

export default class BlogController {
  private repository!: Repository<Blog>;

  constructor() {
    BlogController.connect()
      .then((con) => {
        this.repository = con.getRepository(Blog);
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
