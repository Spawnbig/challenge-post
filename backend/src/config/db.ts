import { DataSource } from "typeorm";
import environment from "./environment";
import * as path from "path";


export const AppDataSource = new DataSource({
  type: "postgres",
  host: environment.DB_HOST,
  port: 5432,
  username: environment.DB_USER,
  password: environment.DB_PASSWORD,
  database: environment.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [path.join(__dirname, "../models/**/*.{js,ts}")],
  migrations: [path.join(__dirname, "../migration/**/*.{js,ts}")],
});
