import styles from "../ProductCard/product-card.module.css";

export const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.card__img}
        src={product.pictures}
        alt={product._id}
      />
      <div className={styles.card__price}>{product.price} ₽</div>
      <div className={styles.card__wight}>{product.wight}</div>
      <div className={styles.card__description}>{product.description}</div>
      <button className={styles.card__button} type="submit">
        В корзину
      </button>
    </div>
  );
};
