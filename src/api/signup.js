export const signUpFetch = (values) => {
  return (
    fetch("https://api.react-learning.ru/signup"),
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }
  );
};
