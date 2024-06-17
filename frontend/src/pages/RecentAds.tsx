import { useLoaderData } from "react-router-dom";
import AdCard from "../components/AdCard";
import { Ad } from "../dataMock";
import styles from "../styles/RecentAds.module.css";

export async function RecentAdsLoader() {
  try {
    const response = await fetch(`http://localhost:3000/ads`);
    const ads: Ad[] = await response.json();
    return ads;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
export default function RecentAds() {
  const ads = useLoaderData() as Ad[];

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
