import { DataSource } from "typeorm";
import { Order } from "./entities/Order";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5433,
  username: "postgres",
  password: "10021711",
  database: "postgres",
  synchronize: true,
  logging: false,
  entities: [Order],
});
