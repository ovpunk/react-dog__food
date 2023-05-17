import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { productsFetch } from "../../api/products";
import { ProductCard } from "../../components/ProductsCard/index";
import { useAuth } from "../../hooks/useAuth";
import styles from "./products.module.css";

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
