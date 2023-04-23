import { TOKEN } from "../constants/token";

export const userInfoFetch = () => {
  return fetch("https://api.react-learning.ru/v2/group-11/users/me", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
  });
};
