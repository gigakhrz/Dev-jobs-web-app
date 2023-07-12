// when user click any job to take id and render job information

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface info {
  jobId: number;
}

const initialState: info = {
  jobId: 0,
};

const moreInfoSlice = createSlice({
  name: "moreInfo",
  initialState,
  reducers: {
    setInfo: (state, action: PayloadAction<number>) => {
      state.jobId = action.payload;
    },
  },
});

export const { setInfo } = moreInfoSlice.actions;

export default moreInfoSlice.reducer;
