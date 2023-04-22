import { Link } from "react-router-dom";
import styles from "./header.module.css";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className={styles.wrapper}>
          <Link to="/products">
            <div className={styles.logo}>
              <i className="fas fa-regular fa-bone"></i>
              <h1>DogFood</h1>
            </div>
          </Link>
          <form className={styles.search__form}>
            <input type="text" placeholder="Найти" className={styles.search} />
          </form>
          <ul className={styles.tools}>
            <li>
              <i className="fas fa-light fa-heart"></i>
            </li>
            <li>
              <i className="fas fa-regular fa-bag-shopping"></i>
            </li>
            <li>
              <Link to="/account">Личный кабинет</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
