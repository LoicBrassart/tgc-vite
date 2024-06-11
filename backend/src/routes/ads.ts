import { Router } from "express";
import { Equal, In } from "typeorm";
import { Category } from "../entities/Category";
import { Ad } from "../entities/Ad";
import { Tag } from "../entities/Tag";

const router = Router();

router.get("/", async (req, res) => {
  try {
    let ads: Ad[];

    if (req.query.category) {
      const category = Number(req.query.category);
      ads = await Ad.find({
        where: { category: Equal(category) },
      });
    } else {
      ads = await Ad.find();
    }
    return res.status(201).json(ads);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const ads = await Ad.findOneByOrFail({ id });
    return res.status(201).json(ads);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const {
      title,
      description,
      owner,
      price,
      picture,
      location,
      id_category,
      id_tags,
    } = req.body;

    const category = await Category.findOneByOrFail({ id: id_category });
    const tags = await Tag.find({ where: { id: In(id_tags) } });
    const ad = new Ad();
    ad.title = title;
    ad.description = description;
    ad.owner = owner;
    ad.price = price;
    ad.location = location;
    ad.imgUrl = picture;
    ad.category = category;
    ad.tags = tags;

    await ad.save();
    return res.status(201).json(ad);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.delete("/:id", (req, res) => {
  try {
    const id = Number(req.params.id);
    Ad.delete(id);
    return res.status(204).send();
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const {
      title,
      description,
      owner,
      price,
      picture,
      location,
      id_category,
      id_tags,
    } = req.body;
    const id = Number(req.params.id);

    const category = await Category.findOneByOrFail({ id: id_category });
    const tags = await Tag.find({ where: { id: In(id_tags) } });
    const ad = await Ad.findOneByOrFail({ id });
    ad.title = title;
    ad.description = description;
    ad.owner = owner;
    ad.price = price;
    ad.location = location;
    ad.imgUrl = picture;
    ad.category = category;
    ad.tags = tags;

    await ad.save();
    return res.status(201).json(ad);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const {
      title,
      description,
      owner,
      price,
      picture,
      location,
      id_category,
      id_tags,
    } = req.body;
    const id = Number(req.params.id);

    const category = await Category.findOneByOrFail({ id: id_category });
    const tags = await Tag.find({ where: { id: In(id_tags) } });
    const ad = await Ad.findOneByOrFail({ id });
    ad.title = title || ad.title;
    ad.description = description || ad.description;
    ad.owner = owner || ad.owner;
    ad.price = price || ad.price;
    ad.location = location || ad.location;
    ad.imgUrl = picture || ad.imgUrl;
    ad.category = category || ad.category;
    ad.tags = tags;

    await ad.save();
    return res.status(201).json(ad);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

export default router;
