import { DataSource } from 'typeorm';
import { User } from './src/entities/User.entity';


export default new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root_password',
  database: 'my_database',
  migrations: ['migrations/**'],
  entities: [User],
  subscribers: [],
});
 