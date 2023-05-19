import { createSlice } from "@reduxjs/toolkit";
import { getInitialData, initialData } from "../initialState";

export const userSlice = createSlice({
  name: "user",
  initialState: getInitialData().user,
  reducers: {
    setUpUser: (_, action) => {
      return action.payload;
    },
    cleanUser: () => {
      return initialData;
    },
  },
});

export const { setUpUser, cleanUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
