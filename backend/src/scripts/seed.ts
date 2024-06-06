import * as dotenv from "dotenv";
import sqlite from "sqlite3";

dotenv.config();
const { BACKEND_PORT, BACKEND_DBFILE } = process.env;
if (!BACKEND_DBFILE || !BACKEND_PORT)
  throw new Error("Missing essential env variables!");

const db = new sqlite.Database(BACKEND_DBFILE);

const sql = `
DROP TABLE IF EXISTS ads ;
DROP TABLE IF EXISTS categories ;

CREATE TABLE categories(
  id INTEGER PRIMARY KEY AUTOINCREMENT, 
  name VARCHAR(16)
);
CREATE TABLE ads(
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    title VARCHAR(32) NOT NULL,
    description TEXT NOT NULL,
    owner VARCHAR(32) NOT NULL,
    price FLOAT NOT NULL,
    picture VARCHAR(256),
    location VARCHAR(64) NOT NULL,
    id_category INTEGER NOT NULL,
    FOREIGN KEY (id_category) REFERENCES categories(id)

);

INSERT INTO categories(name) VALUES(
  "Vetements"
),(
  "Voitures"
),(
  "Autres"
);
INSERT INTO ads(
    title, 
    description, 
    owner, 
    price, 
    picture, 
    location,
    id_category
) VALUES (
    "Bike to sell",
    "My bike is blue, working fine. I'm selling it because I've got a new one",
    "bike.seller@gmail.com",
    100,
    "https://images.lecho.be/view?iid=dc:113129565&context=ONLINE&ratio=16/9&width=640&u=1508242455000",
    "Paris",
    3
),(
    "Car to sell",
    "My car is blue, working fine. I'm selling it because I've got a new one",
    "car.seller@gmail.com",
    10000,
    "https://www.automobile-magazine.fr/asset/cms/34973/config/28294/apres-plusieurs-prototypes-la-bollore-bluecar-a-fini-par-devoiler-sa-version-definitive.jpg",
    "Paris",
    2
)

`;
db.exec(sql, (err) => {
  if (err) return console.error(err.message);
  return console.log("DB initialized");
});
db.close();
