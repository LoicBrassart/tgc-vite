import AdCard from "./AdCard";
import styles from "../styles/RecentAds.module.css";

export default function RecentAds() {
  const ads = [
    {
      img: "/images/table.webp",
      link: "/ads/table",
      price: 120,
      title: "Table",
    },
    {
      img: "/images/dame-jeanne.webp",
      link: "/ads/dame-jeanne",
      price: 75,
      title: "Dame-jeanne",
    },
    {
      img: "/images/vide-poche.webp",
      link: "/ads/vide-poche",
      price: 4,
      title: "Vide-poche",
    },
    {
      img: "/images/vaisselier.webp",
      link: "/ads/vaisselier",
      price: 900,
      title: "Vaisselier",
    },
    {
      img: "/images/bougie.webp",
      link: "/ads/bougie",
      price: 8,
      title: "Bougie",
    },
    {
      img: "/images/porte-magazine.webp",
      link: "/ads/porte-magazine",
      price: 45,
      title: "Porte-magazine",
    },
  ];
  return (
    <>
      <h2>Annonces récentes</h2>
      <section className={styles["recent-ads"]}>
        {ads.map((ad) => (
          <AdCard
            key={ad.title}
            img={ad.img}
            link={ad.link}
            price={ad.price}
            title={ad.title}
          />
        ))}
      </section>
    </>
  );
}
