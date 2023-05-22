import styles from "./footer.module.css";

export const Footer = () => {
  const footerList = ["Каталог", "Акции", "Новости", "Отзывы"];
  const footerList2 = [
    "Оплата и доставка",
    "Часто спрашивают",
    "Обратная связь",
    "Контакты",
  ];

  const UnorderedList = (currentList) => {
    return (
      <ul className={styles.nav}>
        {currentList.list.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    );
  };

  return (
    <footer>
      <div className="container">
        <ul className={styles.wrapper}>
          <li className={styles.list}>
            <div className={styles.logo__wrapper}>
              <div className={styles.logo}>
                <i className="fas fa-regular fa-bone"></i>
                <p>DogFood</p>
              </div>
              <p className={styles.logo__desc}>
                {" "}
                ©«Интернет-магазин DogFood.ru»
              </p>
            </div>
          </li>
          <li className={styles.list}>
            <UnorderedList list={footerList} />
          </li>
          <li className={styles.list}>
            <UnorderedList list={footerList2} />
          </li>
          <li className={styles.list}>
            <div className={styles.contacts}>
              <p>Мы на связи</p>
              <a href="tel:89990000000">8 (999) 00-00-00</a>
              <a href="mailto:dogfood.ru@gmail.com">dogfood.ru@gmail.com</a>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
};
