import AdCard from "./AdCard";

export default function RecentAds() {
  return (
    <main className="main-content">
      <h2>Annonces récentes</h2>
      <section className="recent-ads">
        <AdCard
          img="/images/table.webp"
          link="/ads/table"
          price={120}
          title="Table"
        />
        <AdCard
          img="/images/dame-jeanne.webp"
          link="/ads/dame-jeanne"
          price={75}
          title="Dame-jeanne"
        />
        <AdCard
          img="/images/vide-poche.webp"
          link="/ads/vide-poche"
          price={4}
          title="Vide-poche"
        />
        <AdCard
          img="/images/vaisselier.webp"
          link="/ads/vaisselier"
          price={900}
          title="Vaisselier"
        />
        <AdCard
          img="/images/bougie.webp"
          link="/ads/bougie"
          price={8}
          title="Bougie"
        />
        <AdCard
          img="/images/porte-magazine.webp"
          link="/ads/porte-magazine"
          price={45}
          title="Porte-magazine"
        />
      </section>
    </main>
  );
}
