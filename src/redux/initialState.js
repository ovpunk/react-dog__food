export const REDUX_LC = "redux_superStore";

export const initialData = {
  user: {},
  filter: {
    search: "",
  },
};

export const getInitialData = () => {
  const data = localStorage.getItem(REDUX_LC);
  return data ? JSON.parse(data) : initialData;
};
