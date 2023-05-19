
export const productsFetch = (token, search) => {
  return fetch(
    `https://api.react-learning.ru/products/search?query=${search}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
