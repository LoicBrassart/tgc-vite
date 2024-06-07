import "reflect-metadata";
import * as dotenv from "dotenv";
import { dataSource } from "../config/db";
import { Ad } from "../entities/Ad";
import { Category } from "../entities/Category";

dotenv.config();
const { BACKEND_PORT, BACKEND_DBFILE } = process.env;
if (!BACKEND_DBFILE || !BACKEND_PORT)
  throw new Error("Missing essential env variables!");

const categoriesData = [
  {
    name: "Vetements",
  },
  {
    name: "Voitures",
  },
  {
    name: "Autres",
  },
];
const adsData = [
  {
    title: "Bike to sell",
    description:
      "My bike is blue, working fine. I'm selling it because I've got a new one",
    owner: "bike.seller@gmail.com",
    price: 100,
    picture:
      "https://images.lecho.be/view?iid=dc:113129565&context=ONLINE&ratio=16/9&width=640&u=1508242455000",
    location: "Paris",
    id_category: 1,
  },
  {
    title: "Car to sell",
    description:
      "My car is blue, working fine. I'm selling it because I've got a new one",
    owner: "car.seller@gmail.com",
    price: 10000,
    picture:
      "https://www.automobile-magazine.fr/asset/cms/34973/config/28294/apres-plusieurs-prototypes-la-bollore-bluecar-a-fini-par-devoiler-sa-version-definitive.jpg",
    location: "Paris",
    id_category: 2,
  },
];

async function seed() {
  try {
    await dataSource.initialize();

    const savedCategories = await Promise.all(
      categoriesData.map(async (categoryData) => {
        const category = new Category();
        category.name = categoryData.name;
        return category.save();
      })
    );
    console.log("Categories enregistrées avec succès:", savedCategories.length);

    const savedAds = await Promise.all(
      adsData.map(async (adData) => {
        const ad = new Ad();
        ad.title = adData.title;
        ad.description = adData.description;
        ad.imgUrl = adData.picture;
        ad.location = adData.location;
        ad.owner = adData.owner;
        ad.price = adData.price;
        ad.category = savedCategories[0];

        return ad.save();
      })
    );
    console.log("Annonces enregistrées avec succès:", savedAds.length);
    console.log("DB initialized");
  } catch (err) {
    console.error("ERROR while seeding the DB");
    console.error(err.message);
  }
}
seed();
