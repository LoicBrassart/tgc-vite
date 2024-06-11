import { Router } from "express";
import { Like } from "typeorm";
import { Category } from "../entities/Category";
import { Ad } from "../entities/Ad";

const router = Router();

router.get("/:id/ads", async (req, res) => {
  try {
    const id = Number(req.params.id);
    const ads = await Ad.findBy({ category: { id } });
    return res.status(201).json(ads);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const { needle } = req.query;
    let categories: Category[];
    if (needle) {
      categories = await Category.find({
        where: { name: Like(`%${needle}%`) },
      });
    } else {
      categories = await Category.find();
    }
    return res.json(categories);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const { name } = req.body;

    const category = new Category();
    category.name = name;

    await category.save();
    return res.status(201).json(category);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

export default router;
