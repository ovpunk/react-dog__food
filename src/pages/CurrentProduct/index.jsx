import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { TOKEN } from "../../constants/constants";
import styles from "./currentproduct.module.css";

export const CurrentProduct = () => {
  const { idOfProduct } = useParams();

  const {
    data: oneProduct,
    isError,
    error,
    isLoading,
    isSuccess,
  } = useQuery({
    queryKey: ["getCurrentProduct", idOfProduct],
    queryFn: async () => {
      const res = await fetch(
        `https://api.react-learning.ru/products/${idOfProduct}`,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      );
      const responce = res.json();
      if (res.ok) {
        return responce;
      }
    },
  });

  // для скрола после хедера
  //useEffect(() => {
  //  if (isSuccess) {
  //    const $header = document.querySelector("header");
  //    const headerHeight = $header ? $header.offsetHeight : 0;
  //    window.scrollTo({
  //      top: headerHeight,
  //    });
  //  }
  //}, [isSuccess]);

  useEffect(() => {
    if (isSuccess) {
      window.scrollTo({
        top: 0,
      });
    }
  }, [isSuccess]);

  if (isError) {
    return <p>Произошла ошибка: {error}</p>;
  }
  if (isLoading) {
    return <p>Загрузка...</p>;
  }

  return (
    <div className={styles.container}>
      <Link to={-1} className={styles.cross}>
        <i className="fas fa-regular fa-xmark"></i>
      </Link>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{oneProduct.name}</h1>
        <img
          className={styles.img}
          src={oneProduct.pictures}
          alt={oneProduct.picures}
        />
        <p className={styles.description}>
          <span>О товаре: </span> {oneProduct.description}
        </p>
        <p className={styles.wigth}>
          <span>Вес/Кол-во: </span> {oneProduct.wight}
        </p>
        <p className={styles.price}>
          <span>Цена:</span> {oneProduct.price}₽
        </p>
        <button className={styles.button}>Купить</button>
      </div>
    </div>
  );
};
