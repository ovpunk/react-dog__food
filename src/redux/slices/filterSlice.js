import { createSlice } from "@reduxjs/toolkit";
import { initialData } from "../initialState";

export const filterSlice = createSlice({
  name: "filter",
  initialState: initialData.filter,
  reducers: {
    changeSearchValue(state, action) {
      state.search = action.payload;
    },
  },
});

export const { changeSearchValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
