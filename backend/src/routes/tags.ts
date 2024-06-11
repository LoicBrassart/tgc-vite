import { Router } from "express";
import { Tag } from "../entities/Tag";

const router = Router();
router.get("/", async (_, res) => {
  try {
    const tags = await Tag.find();
    return res.status(201).json(tags);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const { name } = req.body;

    const tag = new Tag();
    tag.name = name;
    await tag.save();
    return res.status(201).json(tag);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    await Tag.delete(id);
    return res.status(204).send();
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

export default router;
