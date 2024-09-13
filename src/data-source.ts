import { DataSource } from "typeorm";
import { User } from "./entities/User.entity";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "root_password",
    database: "my_database",
    synchronize: true,
    logging: true,
    entities: [__dirname + '/**/*.entity{.ts,.js}'], // Define the path to your entities
    migrations: [__dirname + '/migrations/*{.ts,.js}'], 
    subscribers: [],
})