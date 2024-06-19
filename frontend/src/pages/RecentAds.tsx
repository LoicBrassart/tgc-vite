import { useLoaderData } from "react-router-dom";
import AdCard from "../components/AdCard";
import { Ad } from "../dataMock";
import styles from "../styles/RecentAds.module.css";
import sdk from "../graphql/sdk";

export async function RecentAdsLoader() {
  try {
    const { getAllAds } = await sdk.GetAllAds();
    return getAllAds;
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
