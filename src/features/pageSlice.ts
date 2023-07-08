import { createSlice } from "@reduxjs/toolkit";

export interface Page {
  page: number;
}

const initialState: Page = {
  page: 1,
};

const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    setPage: (state) => {
      state.page = state.page + 1;
    },
  },
});

export const { setPage } = pageSlice.actions;
export default pageSlice.reducer;
