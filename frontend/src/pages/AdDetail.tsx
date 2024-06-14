import { useLoaderData } from "react-router-dom";
import { FormEvent, useState } from "react";
import { DateTime } from "luxon";
import ads, { Ad } from "../dataMock";
import styles from "../styles/AdDetail.module.css";

export function AdDetailLoader(rawId: string | undefined) {
  const id = Number(rawId);
  if (!id || isNaN(id)) throw new Error("Invalid id parameter");

  const ad = ads.find((ad) => ad.id === id) as Ad; //Mock for now
  if (!ad) throw new Error("Ad not found");

  return ad;
}

export default function AdDetail() {
  const [editable, setEditable] = useState<boolean>(false);
  const ad = useLoaderData() as Ad;

  const hSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    setEditable(true);
  };
  const hReset = () => {
    setEditable(false);
  };
  const hChange = () => {};
  const hDelete = () => {};

  return (
    <>
      <h2 className={styles["ad-details-title"]}>{ad.title}</h2>
      <form
        onSubmit={hSubmit}
        onReset={hReset}
        className={styles["ad-details"]}
      >
        {editable ? (
          <input
            type="text"
            name="imgUrl"
            placeholder="URL de l'image"
            value={ad.img}
            onChange={hChange}
            disabled={!editable}
          />
        ) : (
          <div className={styles["ad-details-image-container"]}>
            <img
              className={styles["ad-details-image"]}
              src={ad.img}
              alt={ad.title}
            />
          </div>
        )}
        <div className={styles["ad-details-info"]}>
          <div>
            <input
              type="text"
              name="price"
              placeholder="Price"
              value={ad.price}
              onChange={hChange}
              disabled={!editable}
              className={styles["ad-details-price"]}
            />
            €
          </div>
          <textarea
            name="description"
            placeholder="Description"
            value={ad.description}
            onChange={hChange}
            disabled={!editable}
            className={styles["ad-details-description"]}
          />
          <hr className={styles["separator"]} />
          <div className={styles["ad-details-owner"]}>
            Annoncée publiée par{" "}
            <b>
              <input
                type="text"
                name="owner"
                placeholder="Owner"
                value={ad.owner}
                onChange={hChange}
                disabled={!editable}
              />
            </b>
            ,{" "}
            {DateTime.fromMillis(ad.createdAt * 1000)
              .setLocale("fr-fr")
              .toRelative()}
            .
          </div>
          <a
            href={`mailto:${ad.owner}`}
            className={`${styles["button"]} ${styles["button-primary"]} ${styles["link-button"]}`}
          >
            <svg
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              className="styled__BaseIcon-sc-1jsm4qr-0 llmHhT"
              stroke="currentcolor"
              strokeWidth={2.5}
              fill="none"
            >
              <path d="M25 4H7a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h18a5 5 0 0 0 5-5V9a5 5 0 0 0-5-5ZM7 6h18a3 3 0 0 1 2.4 1.22s0 0-.08 0L18 15.79a3 3 0 0 1-4.06 0L4.68 7.26H4.6A3 3 0 0 1 7 6Zm18 20H7a3 3 0 0 1-3-3V9.36l8.62 7.9a5 5 0 0 0 6.76 0L28 9.36V23a3 3 0 0 1-3 3Z"></path>
            </svg>
            Envoyer un email
          </a>
        </div>
        <fieldset className="actions">
          {editable ? (
            <>
              <button type="submit">Valider</button>
              <button type="reset">Annuler</button>
            </>
          ) : (
            <>
              <button type="submit">Éditer</button>
              <button className={styles.button} onClick={hDelete}>
                Supprimer
              </button>
            </>
          )}
        </fieldset>
      </form>
    </>
  );
}
