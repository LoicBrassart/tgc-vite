import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
import { Category } from "../entities/Category";
import { Ad } from "../entities/Ad";
import { Tag } from "../entities/Tag";
import { User } from "../entities/User";

dotenv.config();
const { PGPORT, POSTGRES_HOST, POSTGRES_USER, POSTGRES_DB, POSTGRES_PASSWORD } =
  process.env;

export const dataSource = new DataSource({
  type: "postgres",
  host: POSTGRES_HOST,
  port: Number(PGPORT),
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  entities: [Ad, Category, Tag, User],
  synchronize: true,
});
