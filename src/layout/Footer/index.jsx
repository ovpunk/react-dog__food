import styles from "../Footer/footer.module.css";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.logo__wrapper}>
            <div className={styles.logo}>
              <i className="fas fa-regular fa-bone"></i>
              <p>DogFood</p>
            </div>
            <p className={styles.logo__desc}> ©«Интернет-магазин DogFood.ru»</p>
          </div>
          <ul className={styles.nav}>
            <li>Каталог</li>
            <li>Акции</li>
            <li>Новости</li>
            <li>Отзывы</li>
          </ul>
          <ul className={styles.nav}>
            <li>Оплата и доставка</li>
            <li>Часто спрашивают</li>
            <li>Обратная связь</li>
            <li>Контакты</li>
          </ul>
          <div className={styles.contacts}>
            <p>Мы на связи</p>
            <a href="tel:89990000000">8 (999) 00-00-00</a>
            <a href="mailto:dogfood.ru@gmail.com">dogfood.ru@gmail.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
