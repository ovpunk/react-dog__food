import { TOKEN } from "../constants/token";

export const ProductsFetch = () => {
  return fetch("https://api.react-learning.ru/products", {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
};
