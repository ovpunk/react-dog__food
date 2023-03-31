import styles from "../ProductCard/product-card.module.css";

export const CardError = () => {
  return (
    <div className={styles.error__wrapper}>
      <p className={styles.error__text}>Произошла ошибка!</p>
      <i className="fa-light fa-face-pensive"></i>
    </div>
  );
};
