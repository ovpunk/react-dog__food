import { useEffect, useState } from "react";
import { fetchProducts } from "../../api";
import { ProductCard } from "../ProductCard";

export const ProductCardList = () => {
  const [data, setData] = useState({ total: 0, products: [] });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchProducts();
      if (res.ok) {
        const responce = await res.json();
        console.log(responce);
        setData(responce);
      } // обработать ошибку
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {data.products.map((product) => {
        return <ProductCard key={product._id} product={product} />;
      })}
    </div>
  );
};
