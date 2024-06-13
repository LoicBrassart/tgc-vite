export type Ad = {
  id: number;
  img: string;
  slug: string;
  price: number;
  title: string;
  owner: string;
  description: string;
  createdAt: number;
};

const ads: Ad[] = [
  {
    id: 1,
    img: "/images/table.webp",
    slug: "table",
    price: 120,
    title: "Table",
    description: "",
    owner: "Wildo",
    createdAt: 1718270431,
  },
  {
    id: 2,
    img: "/images/dame-jeanne.webp",
    slug: "dame-jeanne",
    price: 75,
    title: "Dame-jeanne",
    description: "",
    owner: "Wildo",
    createdAt: 1718270431,
  },
  {
    id: 3,
    img: "/images/vide-poche.webp",
    slug: "vide-poche",
    price: 4,
    title: "Vide-poche",
    description: "",
    owner: "Wildo",
    createdAt: 1718270431,
  },
  {
    id: 4,
    img: "/images/vaisselier.webp",
    slug: "vaisselier",
    price: 900,
    title: "Vaisselier",
    description: "",
    owner: "Wildo",
    createdAt: 1718270431,
  },
  {
    id: 5,
    img: "/images/bougie.webp",
    slug: "bougie",
    price: 8,
    title: "Bougie",
    description: "",
    owner: "Wildo",
    createdAt: 1718270431,
  },
  {
    id: 6,
    img: "/images/porte-magazine.webp",
    slug: "porte-magazine",
    price: 45,
    title: "Porte-magazine",
    description: "",
    owner: "Wildo",
    createdAt: 1718270431,
  },
];
export default ads;
