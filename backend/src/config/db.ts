import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
import { Category } from "../entities/Category";
import { Ad } from "../entities/Ad";
import { Tag } from "../entities/Tag";

dotenv.config();

const { BACKEND_DBFILE } = process.env;

export const dataSource = new DataSource({
  type: "sqlite",
  database: `${BACKEND_DBFILE}`,
  entities: [Ad, Category, Tag],
  synchronize: true,
});
