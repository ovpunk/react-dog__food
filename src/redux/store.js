import { configureStore } from "@reduxjs/toolkit";
import { getInitialData, REDUX_LC } from "./initialState";
import { filterReducer } from "./slices/filterSlice";
import { userReducer } from "./slices/userSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    filter: filterReducer,
  },
  preloadedState: getInitialData(),
});

store.subscribe(() => {
  localStorage.setItem(REDUX_LC, JSON.stringify(store.getState()));
});
