import { configureStore } from "@reduxjs/toolkit";
import lightModeSLice, { Light } from "./lightModeSLice";
import pageSlice, { Page } from "./pageSlice";
import DevJobsSlice, { DevJobInterface } from "./DevJobsSlice";
import moreInfoSlice, { info } from "./moreInfo";
const store = configureStore({
  reducer: {
    lightMode: lightModeSLice,
    page: pageSlice,
    devJob: DevJobsSlice,
    moreInfo: moreInfoSlice,
  },
});

export type RootState = {
  lightMode: Light;
  page: Page;
  devJob: DevJobInterface;
  moreInfo: info;
};

export default store;
