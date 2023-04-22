import { TOKEN } from "../utils/token";

export const currentProductFetch = (id) => {
  return fetch(`https://api.react-learning.ru/products/${id}`, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
    },
  });
};
