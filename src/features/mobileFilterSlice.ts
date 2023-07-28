import { createSlice } from "@reduxjs/toolkit";

export interface MobileFilter {
  filter: boolean;
}

const initialState: MobileFilter = {
  filter: false,
};

const mobileFilterSlice = createSlice({
  name: "mobileFilter",
  initialState,
  reducers: {
    setFilter: (state) => {
      state.filter = !state.filter;
    },
    closeFilter: (state) => {
      state.filter = false;
    },
  },
});

export const { setFilter, closeFilter } = mobileFilterSlice.actions;
export default mobileFilterSlice.reducer;
