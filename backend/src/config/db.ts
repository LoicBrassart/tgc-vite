import { DataSource } from "typeorm";
import { Category } from "../entities/Category";
import { Ad } from "../entities/Ad";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "../../db.sqlite",
  entities: [Ad, Category],
  synchronize: true,
});
