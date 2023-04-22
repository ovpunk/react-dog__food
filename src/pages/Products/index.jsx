import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsFetch } from "../../api/products";
import { ProductCard } from "../../components/ProductsCard/index";
import { TOKEN } from "../../utils/token";

export const Products = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem(TOKEN);
    if (!token) navigate("/signin");
  }, [navigate]);

  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["getProducts"],
    queryFn: async () => {
      const res = await ProductsFetch();
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
      {data.products.map((product) => {
        return <ProductCard key={product._id} product={product} data={data} />;
      })}
      {error && <p>{error}</p>}
    </div>
  );
};
