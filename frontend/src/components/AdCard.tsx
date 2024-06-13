import { Ad } from "../dataMock";
import styles from "../styles/AdCard.module.css";

export default function AdCard({ title, img, price, id, slug }: Ad) {
  return (
    <div className={styles["ad-card-container"]}>
      <a className={styles["ad-card-link"]} href={`/ads/${id}/${slug}`}>
        <img className={styles["ad-card-image"]} src={img} />
        <div className={styles["ad-card-text"]}>
          <div className={styles["ad-card-title"]}>{title}</div>
          <div className={styles["ad-card-price"]}>{price} €</div>
        </div>
      </a>
    </div>
  );
}
