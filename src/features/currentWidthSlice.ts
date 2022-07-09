// Test ---------------------- Importing the Redux Toolkit ---------------
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Test --------------------- Initial State ----------------------------
type currentWidthState = {
  XS: boolean;
};

const initialState: currentWidthState = {
  XS: false,
};

// Test --------------------- Creating the slice ------------------------
export const currentWidthSlice = createSlice({
  name: "currentWidth",
  initialState,
  reducers: {
    gtXS: (state) => {
      console.log("gtXS");
      state.XS = true;
    },
  },
});

// Test --------------------- Exporting the actions ---------------------
export const { gtXS } = currentWidthSlice.actions;

// Test --------------------- Exporting the Reducers Functions -------
export default currentWidthSlice.reducer;
