import "reflect-metadata";
import { dataSource } from "./config/db";
import { Ad } from "./entities/Ad";
import { Category } from "./entities/Category";
import { Tag } from "./entities/Tag";
import { User } from "./entities/User";

const usersData = [
  {
    mail: "loic@spamland.com",
    hashedPassword: "n/a",
    roles: "ADMIN, USER",
  },
  {
    mail: "toto@spamland.com",
    hashedPassword: "n/a",
    roles: "USER",
  },
];
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
const tagsData = [
  {
    name: "Blue",
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
    createdAt: 1718618203,
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
    createdAt: 1534898206,
  },
];

async function seed() {
  try {
    await dataSource.initialize();

    const savedUsers = await Promise.all(
      usersData.map(async (userData) => {
        const user = new User();
        user.mail = userData.mail;
        user.roles = userData.roles;
        user.hashedPassword = userData.hashedPassword;
        return user.save();
      })
    );
    console.log("Utilisateurs enregistrés avec succès:", savedUsers.length);

    const savedCategories = await Promise.all(
      categoriesData.map(async (categoryData) => {
        const category = new Category();
        category.name = categoryData.name;
        return category.save();
      })
    );
    console.log("Categories enregistrées avec succès:", savedCategories.length);

    const savedTags = await Promise.all(
      tagsData.map(async (tagData) => {
        const tag = new Tag();
        tag.name = tagData.name;
        return tag.save();
      })
    );
    console.log("Tags enregistrés avec succès:", savedTags.length);

    const savedAds = await Promise.all(
      adsData.map(async (adData) => {
        const ad = new Ad();
        ad.title = adData.title;
        ad.description = adData.description;
        ad.img = adData.picture;
        ad.location = adData.location;
        ad.owner = savedUsers[0];
        ad.price = adData.price;
        ad.createdAt = new Date(adData.createdAt);
        ad.category = savedCategories[0];
        ad.tags = [savedTags[0]];

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
