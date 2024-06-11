import "reflect-metadata";
import express from "express";
import * as dotenv from "dotenv";
import { dataSource } from "./config/db";
import adRouter from "./routes/ads";
import categoryRouter from "./routes/categories";
import tagRouter from "./routes/tags";

dotenv.config();
const { BACKEND_PORT, BACKEND_DBFILE } = process.env;
if (!BACKEND_DBFILE || !BACKEND_PORT)
  throw new Error("Missing essential env variables!");

const app = express();
app.use(express.json());

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.use("/ads", adRouter);
app.use("/categories", categoryRouter);
app.use("/tags", tagRouter);

app.listen(BACKEND_PORT, async () => {
  await dataSource.initialize();

  console.log(`Example app listening on port ${BACKEND_PORT}`);
});
