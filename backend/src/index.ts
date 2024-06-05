import express from "express";
import * as dotenv from "dotenv";
import sqlite from "sqlite3";

dotenv.config();
const { BACKEND_PORT, BACKEND_DBFILE } = process.env;
if (!BACKEND_DBFILE || !BACKEND_PORT)
  throw new Error("Missing essential env variables!");

const db = new sqlite.Database(BACKEND_DBFILE);

const app = express();
app.use(express.json());

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.get("/ads", async (_, res) => {
  const sql = "SELECT * FROM ads";
  db.all(sql, (err, rows) => {
    if (err) return res.status(500).send(err.message);
    return res.send(rows);
  });
});

app.get("/ads/:id", (req, res) => {
  const sql = "SELECT * FROM ads WHERE id=?";
  const id = Number(req.params.id);
  db.get(sql, [id], (err, rows) => {
    if (err) return res.status(500).send(err.message);
    return res.send(rows);
  });
});

app.post("/ads", (req, res) => {
  const sql =
    "INSERT INTO ads(title, description, owner, price, picture, location) VALUES(?,?,?,?,?,?)";
  const { title, description, owner, price, picture, location } = req.body;
  db.run(sql, [title, description, owner, price, picture, location], (err) => {
    if (err) return res.status(500).send(err.message);
    return res.status(201).send();
  });
});

app.delete("/ads/:id", (req, res) => {
  const sql = "DELETE FROM ads WHERE id=?";
  const id = Number(req.params.id);
  db.run(sql, [id], (err) => {
    if (err) return res.status(500).send(err.message);
    return res.status(204).send();
  });
});

app.put("/ads/:id", (req, res) => {
  const sql = `
  UPDATE ads SET 
    title=?,
    description=?,
    owner=?,
    price=?,
    picture=?,
    location=?
  WHERE id=?`;
  const id = Number(req.params.id);
  const { title, description, owner, price, picture, location } = req.body;
  db.run(
    sql,
    [title, description, owner, price, picture, location, id],

    (err) => {
      if (err) return res.status(500).send(err.message);
      return res.status(204).send();
    }
  );
});

app.patch("/ads/:id", (req, res) => {
  console.log("---------?");
  const sql = `
  UPDATE ads SET 
    title=COALESCE(?,title), 
    description=COALESCE(?,description), 
    owner=COALESCE(?,owner), 
    price=COALESCE(?,price), 
    picture=COALESCE(?,picture), 
    location=COALESCE(?,location) 
  WHERE id=?`;
  const id = Number(req.params.id);
  const { title, description, owner, price, picture, location } = req.body;
  db.run(
    sql,
    [title, description, owner, price, picture, location, id],
    (err) => {
      console.log("---------IN");
      console.log(err);

      if (err) return res.status(500).send(err.message);
      return res.status(204).send();
    }
  );
});

app.listen(BACKEND_PORT, () => {
  console.log(`Example app listening on port ${BACKEND_PORT}`);
});
