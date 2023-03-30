import { useEffect, useState } from "react";
import { fetchProducts } from "../../api";
import { ProductCard } from "../../components/ProductCard";
//import { CardError } from "../../components/ProductCard/card-error";

export const Main = () => {
  const [data, setData] = useState({ total: 0, products: [] });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchProducts();
      if (res.ok) {
        const responce = await res.json();
        console.log(responce);
        setData(responce);
      } else {
        alert("sas ti oshybsya");
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <main>
        <div className="container">
          {data.products.map((product) => {
            return <ProductCard key={product._id} product={product} />;
          })}
        </div>
      </main>
    </>
  );
};
