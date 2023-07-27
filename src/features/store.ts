import { configureStore } from "@reduxjs/toolkit";
import lightModeSLice, { Light } from "./lightModeSLice";
import pageSlice, { Page } from "./pageSlice";
import DevJobsSlice, { DevJobInterface } from "./DevJobsSlice";
import moreInfoSlice, { info } from "./moreInfo";
import mobileFilterSlice, { MobileFilter } from "./mobileFilterSlice";
import allJobSlice, { allDevJobInterface } from "./allJobSlice";
const store = configureStore({
  reducer: {
    lightMode: lightModeSLice,
    page: pageSlice,
    devJob: DevJobsSlice,
    moreInfo: moreInfoSlice,
    setFilter: mobileFilterSlice,
    allDevjob: allJobSlice,
  },
});

export type RootState = {
  lightMode: Light;
  page: Page;
  devJob: DevJobInterface;
  moreInfo: info;
  setFilter: MobileFilter;
  allDevjob: allDevJobInterface;
};

export default store;
