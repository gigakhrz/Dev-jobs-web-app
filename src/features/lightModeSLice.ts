import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Light {
  dark: boolean;
}

const initialState: Light = {
  dark: false,
};

const lightModeSlice = createSlice({
  name: "lightMode",
  initialState,
  reducers: {
    setDark: (state, action: PayloadAction<boolean>) => {
      state.dark = action.payload;
    },
  },
});

export const { setDark } = lightModeSlice.actions;
export default lightModeSlice.reducer;
