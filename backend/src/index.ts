import express from "express";
import * as dotenv from "dotenv";

dotenv.config();
const port = process.env.BACKEND_PORT;

let ads = [
  {
    id: 1,
    title: "Bike to sell",
    description:
      "My bike is blue, working fine. I'm selling it because I've got a new one",
    owner: "bike.seller@gmail.com",
    price: 100,
    picture:
      "https://images.lecho.be/view?iid=dc:113129565&context=ONLINE&ratio=16/9&width=640&u=1508242455000",
    location: "Paris",
    createdAt: "2023-09-05T10:13:14.755Z",
  },
  {
    id: 2,
    title: "Car to sell",
    description:
      "My car is blue, working fine. I'm selling it because I've got a new one",
    owner: "car.seller@gmail.com",
    price: 10000,
    picture:
      "https://www.automobile-magazine.fr/asset/cms/34973/config/28294/apres-plusieurs-prototypes-la-bollore-bluecar-a-fini-par-devoiler-sa-version-definitive.jpg",
    location: "Paris",
    createdAt: "2023-10-05T10:14:15.922Z",
  },
];

const app = express();
app.use(express.json());

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.get("/ads", (_, res) => {
  res.send(ads);
});

app.get("/ads/:id", (req, res) => {
  res.send(ads.find((elt) => elt.id === Number(req.params.id)));
});

app.post("/ads", (req, res) => {
  const newId =
    1 +
    ads.reduce((acc, ad) => {
      return Math.max(acc, ad.id);
    }, 0);
  ads.push({ ...req.body, id: newId });
  res.send(`Added ad #${newId}`);
});

app.delete("/ads/:id", (req, res) => {
  ads = ads.filter((ad) => ad.id !== Number(req.params.id));
  res.send("The ad was deleted");
});

app.put("/ads/:id", (req, res) => {
  ads = ads.map((ad) => {
    const newId = Number(req.params.id);
    if (ad.id !== newId) {
      return ad;
    } else {
      return { ...req.body, id: newId };
    }
  });
  res.send("The ad was replaced");
});

app.patch("/ads/:id", (req, res) => {
  ads = ads.map((ad) => {
    const newId = Number(req.params.id);
    if (ad.id !== newId) {
      return ad;
    } else {
      return { ...ad, ...req.body, id: newId };
    }
  });
  res.send("The ad was updated");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
