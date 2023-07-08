import { configureStore } from "@reduxjs/toolkit";
import lightModeSLice, { Light } from "./lightModeSLice";
import pageSlice, { Page } from "./pageSlice";
import DevJobsSlice, { DevJobInterface } from "./DevJobsSlice";
const store = configureStore({
  reducer: {
    lightMode: lightModeSLice,
    page: pageSlice,
    devJob: DevJobsSlice,
  },
});

export type RootState = {
  lightMode: Light;
  page: Page;
  devJob: DevJobInterface;
};

export default store;
