type Props = {
  title: string;
  img: string;
  price: number;
  link: string;
};
export default function AdCard({ title, img, price, link }: Props) {
  return (
    <div className="ad-card-container">
      <a className="ad-card-link" href={link}>
        <img className="ad-card-image" src={img} />
        <div className="ad-card-text">
          <div className="ad-card-title">{title}</div>
          <div className="ad-card-price">{price} €</div>
        </div>
      </a>
    </div>
  );
}
