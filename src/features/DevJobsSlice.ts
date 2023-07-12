import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import DevJob from "../../type";

interface Filters {
  title: string;
  location: string;
  fullTime: boolean;
}

export interface DevJobInterface {
  jobs: DevJob[];
  filters: Filters;
}

const initialState: DevJobInterface = {
  jobs: [],
  filters: {
    title: "",
    location: "",
    fullTime: false,
  },
};

const DevJobsSlice = createSlice({
  name: "devJob",
  initialState,
  reducers: {
    setJobs: (state, action: PayloadAction<DevJob[]>) => {
      state.jobs = action.payload;
    },
    setFilters: (state, action: PayloadAction<Partial<Filters>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
  },
});

export const { setJobs, setFilters } = DevJobsSlice.actions;
export default DevJobsSlice.reducer;
