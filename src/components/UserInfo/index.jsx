import { useNavigate } from "react-router-dom";
import styles from "./userinfo.module.css";

export const UserInfo = ({ info }) => {
  const navigate = useNavigate();

  const onSubmit = () => {
    localStorage.clear();
    navigate("/signin");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Личный кабинет</h2>
      <img className={styles.img} src={info.avatar} alt="avatar" />
      <div className={styles.text__wrapper}>
        <div className={styles.text}>
          <span>ФИО:</span> {info.name}
        </div>
        <div className={styles.text}>
          <span>Описание: </span>
          {info.about}
        </div>
        <div className={styles.text}>
          <span>Email-адрес: </span>
          {info.email}
        </div>
      </div>
      <button type="submit" onClick={onSubmit} className={styles.button}>
        Выйти
      </button>
    </div>
  );
};
