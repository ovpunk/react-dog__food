import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { productsFetch } from "../../api/products";
import { ProductCard } from "../../components/ProductsCard/index";

import { useAuth } from "../../hooks/useAuth";
import styles from "./products.module.css";
import sad from "../../icons/sad.svg";


export const Products = () => {
  const { token } = useAuth();
  const search = useSelector((state) => state.filter.search);
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["getProducts", search],
    queryFn: async () => {
      const res = await productsFetch(token, search);
      const responce = await res.json();
      return responce;
    },
  });

  if (isError) {
    return <div>Произошла ошибка: {error}</div>;
  }

  if (isLoading) {
    return <p>Загрузка...</p>;
  }

  if (data.length === 0)
    return (
      <div className={styles.notfound}>
        <h2 className={styles.notfound__text}>Ничего не найдено...</h2>
        <img className={styles.notfound__icon} src={sad} alt=":(" />
      </div>
    );

  return (
    <div className="container">
      <div className={styles.containerProducts}>
        {data.map((product) => {
          return <ProductCard key={product._id} product={product} />;
        })}
      </div>
    </div>
  );
};
