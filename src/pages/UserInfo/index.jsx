import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./userinfo.module.css";
import { cleanUser } from "../../redux/slices/userSlice.js";
import { useAuth } from "../../hooks/useAuth";

export const UserInfo = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useAuth();

  const onSubmit = () => {
    dispatch(cleanUser());
    return navigate("/signin");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Личный кабинет</h2>
      <img className={styles.img} src={user.avatar} alt="avatar" />
      <div className={styles.text__wrapper}>
        <div className={styles.text}>
          <span>ФИО:</span> {user.name}
        </div>
        <div className={styles.text}>
          <span>Описание: </span>
          {user.about}
        </div>
        <div className={styles.text}>
          <span>Email-адрес: </span>
          {user.email}
        </div>
      </div>
      <button type="submit" onClick={onSubmit} className={styles.button}>
        Выйти
      </button>
    </div>
  );
};
