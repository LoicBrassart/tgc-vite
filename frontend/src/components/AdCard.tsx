import styles from "../styles/AdCard.module.css";

type Props = {
  title: string;
  img: string;
  price: number;
  link: string;
};
export default function AdCard({ title, img, price, link }: Props) {
  return (
    <div className={styles["ad-card-container"]}>
      <a className={styles["ad-card-link"]} href={link}>
        <img className={styles["ad-card-image"]} src={img} />
        <div className={styles["ad-card-text"]}>
          <div className={styles["ad-card-title"]}>{title}</div>
          <div className={styles["ad-card-price"]}>{price} €</div>
        </div>
      </a>
    </div>
  );
}
