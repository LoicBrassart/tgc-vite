import AdCard from "../components/AdCard";
import ads from "../dataMock";
import styles from "../styles/RecentAds.module.css";

export default function RecentAds() {
  return (
    <>
      <h2>Annonces récentes</h2>
      <section className={styles["recent-ads"]}>
        {ads.map((ad) => (
          <AdCard
            key={ad.title}
            id={ad.id}
            img={ad.img}
            slug={ad.slug}
            price={ad.price}
            title={ad.title}
            owner={ad.owner}
            description={ad.description}
            createdAt={ad.createdAt}
          />
        ))}
      </section>
    </>
  );
}
