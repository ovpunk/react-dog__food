import { TOKEN } from "../utils/token";

export const createProduct = () => {
  return fetch(`https://api.react-learning.ru/products`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
};