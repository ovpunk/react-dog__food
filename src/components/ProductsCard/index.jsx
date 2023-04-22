import { useNavigate } from "react-router-dom";
import styles from "../ProductsCard/product-card.module.css";

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();

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
      <div>
        <button className={styles.basket__button} type="submit">
          В корзину
        </button>
        <button
          onClick={() => navigate(`/products/${product._id}`)}
          className={styles.card__button}
        >
          Подробнее
        </button>
      </div>
    </div>
  );
};
