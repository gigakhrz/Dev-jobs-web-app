import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import DevJob from "../../type";

interface Filters {
  title: string;
  location: string;
  fullTime: boolean;
}

export interface DevJobInterface {
  jobs: DevJob[];
}

const initialState: DevJobInterface = {
  jobs: [],
};

const DevJobsSlice = createSlice({
  name: "devJob",
  initialState,
  reducers: {
    setJobs: (state, action: PayloadAction<DevJob[]>) => {
      state.jobs = action.payload;
    },
  },
});

export const { setJobs } = DevJobsSlice.actions;
export default DevJobsSlice.reducer;
