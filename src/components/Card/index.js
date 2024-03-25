import styles from "./Card.module.scss";
import React from "react";

function Card({ onPlus, onFavorite, imageUrl, price, title }) {
  const [isAdded, setIsAdded] = React.useState(false);

  const heandleClickPlus = () => {
    onPlus({ imageUrl, price, title });
    setIsAdded(!isAdded);
  };

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img src="/img/heart-unlike.svg" alt="unlike" onClick={onFavorite} />
      </div>
      <img width={133} height={112} src={imageUrl} alt="sneakers" />
      <h5>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div className="d-flex flex-column">
          <span>Цена:</span>
          <b>{price} руб.</b>
        </div>
        <img
          className={styles.plus}
          onClick={heandleClickPlus}
          src={isAdded ? "/img/buttonPlusOk.svg" : "/img/buttonPlus.svg"}
          alt="plus"
        />
      </div>
    </div>
  );
}

export { Card };
