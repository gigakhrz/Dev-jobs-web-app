import { configureStore } from "@reduxjs/toolkit";
import lightModeSLice, { Light } from "./lightModeSLice";

const store = configureStore({
  reducer: {
    lightMode: lightModeSLice,
  },
});

export type RootState = {
  lightMode: Light;
};

export default store;
