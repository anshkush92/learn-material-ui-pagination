// Test ---------------------- Importing the Redux Toolkit ---------------
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Test --------------------- Initial State ----------------------------
type currentWidthState = {
  XS: boolean;
  SM: boolean;
  MD: boolean;
};

const initialState = {} as currentWidthState;

// Test --------------------- Creating the slice ------------------------
export const currentWidthSlice = createSlice({
  name: "currentWidth",
  initialState,
  reducers: {
    // Greater than XS but smaller than SM ----> Covers < SM
    gtXS: (state, action: PayloadAction<boolean>) => {
      console.log("gtXS");
      state.XS = true;
      state.SM = false;
      state.MD = false;
    },

    // Greater than SM but smaller than MD ----> Covers >= SM && < MD
    gtSM: (state, action: PayloadAction<boolean>) => {
      console.log("gtSM");
      state.XS = false;
      state.SM = true;
      state.MD = false;
    },

    // Greater than MD -----> Covers >= MD
    gtMD: (state, action: PayloadAction<boolean>) => {
      console.log("gtMD");
      state.XS = false;
      state.SM = false;
      state.MD = true;
    },
  },
});

// Test --------------------- Exporting the actions ---------------------
export const { gtXS, gtSM, gtMD } = currentWidthSlice.actions;

// Test --------------------- Exporting the Reducers Functions -------
export default currentWidthSlice.reducer;
