import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import DevJob from "../../type";

export interface allDevJobInterface {
  allJobs: DevJob[];
}

const initialState: allDevJobInterface = {
  allJobs: [],
};

const allDevJobsSlice = createSlice({
  name: "allDevJob",
  initialState,
  reducers: {
    setAllJobs: (state, action: PayloadAction<DevJob[]>) => {
      state.allJobs = action.payload;
    },
  },
});

export const { setAllJobs } = allDevJobsSlice.actions;
export default allDevJobsSlice.reducer;
