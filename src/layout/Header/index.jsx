import { NavLink, Link, useLocation } from "react-router-dom";
import { Search } from "../../components/Search";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import heart from "../../icons/heart.svg";
import basket from "../../icons/basket.svg";
import account from "../../icons/account.svg";
import styles from "./header.module.css";

export const Header = () => {
  const windowWidth = useWindowWidth();
  const location = useLocation();

  if (windowWidth < 1000) {
    return (
      <header>
        <div className="container">
          <div className={styles.wrapper}>
            <Link to="/products">
              <div className={styles.logo}>
                <h1>DogFood</h1>
              </div>
            </Link>
            <Search />
            <div className={styles.bar}>
              <i className="fa-solid fa-bars"></i>
            </div>
          </div>
        </div>
      </header>
    );
  }

  if (location.pathname === "/products") {
    return (
      <header>
        <div className="container">
          <div className={styles.wrapper}>
            <Link to="/products">
              <div className={styles.logo}>
                <h1>DogFood</h1>
              </div>
            </Link>
            <Search />
            <ul className={styles.tools}>
              <li>
                {/*<NavLink
                  className={({ isActive }) => (isActive ? styles.active : "")}
                  to="/"
                >
                  Избранное
                </NavLink>*/}
                <NavLink
                  className={({ isActive }) => (isActive ? styles.active : "")}
                  to="/"
                >
                  <img className={styles.icons} src={heart} alt="Избранное" />
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? styles.active : "")}
                  to="/"
                >
                  <img className={styles.icons} src={basket} alt="Корзина" />
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) => (isActive ? styles.active : "")}
                  to="/account"
                >
                  <img
                    className={styles.icons}
                    src={account}
                    alt="Личный кабинет"
                  />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
  return (
    <header>
      <div className="container">
        <div className={styles.wrapper}>
          <Link to="/products">
            <div className={styles.logo}>
              <h1>DogFood</h1>
            </div>
          </Link>
          <ul className={styles.tools}>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to="/"
              >
                <img className={styles.icons} src={heart} alt="Избранное" />
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to="/"
              >
                <img className={styles.icons} src={basket} alt="Корзина" />
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? styles.active : "")}
                to="/account"
              >
                <img
                  className={styles.icons}
                  src={account}
                  alt="Личный кабинет"
                />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
