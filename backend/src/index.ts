import "reflect-metadata";
import express from "express";
import * as dotenv from "dotenv";
import { dataSource } from "./config/db";
import { Ad } from "./entities/Ad";
import { Category } from "./entities/Category";

dotenv.config();
const { BACKEND_PORT, BACKEND_DBFILE } = process.env;
if (!BACKEND_DBFILE || !BACKEND_PORT)
  throw new Error("Missing essential env variables!");

const app = express();
app.use(express.json());

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.get("/ads", async (_, res) => {
  try {
    const ads = await Ad.find();
    return res.status(201).json(ads);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

app.get("/ads/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const ads = await Ad.findOneByOrFail({ id });
    return res.status(201).json(ads);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

app.post("/ads", async (req, res) => {
  try {
    const { title, description, owner, price, picture, location, id_category } =
      req.body;

    const category = await Category.findOneByOrFail({ id: id_category });
    const ad = new Ad();
    ad.title = title;
    ad.description = description;
    ad.owner = owner;
    ad.price = price;
    ad.location = location;
    ad.imgUrl = picture;
    ad.category = category;

    await ad.save();
    return res.status(201).json(ad);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

app.delete("/ads/:id", (req, res) => {
  try {
    const id = Number(req.params.id);
    Ad.delete(id);
    return res.status(204).send();
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

app.put("/ads/:id", async (req, res) => {
  try {
    const { title, description, owner, price, picture, location, id_category } =
      req.body;
    const id = Number(req.params.id);

    const category = await Category.findOneByOrFail({ id: id_category });
    const ad = await Ad.findOneByOrFail({ id });
    ad.title = title;
    ad.description = description;
    ad.owner = owner;
    ad.price = price;
    ad.location = location;
    ad.imgUrl = picture;
    ad.category = category;

    await ad.save();
    return res.status(201).json(ad);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

app.patch("/ads/:id", async (req, res) => {
  try {
    const { title, description, owner, price, picture, location, id_category } =
      req.body;
    const id = Number(req.params.id);

    const category = await Category.findOneByOrFail({ id: id_category });
    const ad = await Ad.findOneByOrFail({ id });
    ad.title = title || ad.title;
    ad.description = description || ad.description;
    ad.owner = owner || ad.owner;
    ad.price = price || ad.price;
    ad.location = location || ad.location;
    ad.imgUrl = picture || ad.imgUrl;
    ad.category = category || ad.category;

    await ad.save();
    return res.status(201).json(ad);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

app.get("/categories/:id/ads", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const ads = await Ad.findBy({ category: { id } });
    return res.status(201).json(ads);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

app.get("/categories", async (_, res) => {
  try {
    const categories = await Category.find();
    return res.status(201).json(categories);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

app.post("/categories", async (req, res) => {
  try {
    const { name } = req.body;

    const category = new Category();
    category.name = name;
    console.log(category);

    await category.save();
    return res.status(201).json(category);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

app.listen(BACKEND_PORT, async () => {
  await dataSource.initialize();

  console.log(`Example app listening on port ${BACKEND_PORT}`);
});
