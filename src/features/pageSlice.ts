import { PayloadAction, createSlice } from "@reduxjs/toolkit";

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
    setPage: (state, action: PayloadAction<number>) => {
      state.page = state.page + action.payload;
    },
  },
});

export const { setPage } = pageSlice.actions;
export default pageSlice.reducer;
