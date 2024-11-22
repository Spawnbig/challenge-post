import { DataSource } from "typeorm";
import environment from "./environment";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: environment.DB_HOST,
  port: 5432,
  username: environment.DB_USER,
  password: environment.DB_PASSWORD,
  database: environment.DB_NAME,
  synchronize: true,
  logging: false,
  entities: ["src/models/**/*.ts"],
  migrations: ["src/migration/**/*.ts"],
});
