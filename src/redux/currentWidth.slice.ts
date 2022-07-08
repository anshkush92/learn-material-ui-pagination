// Test ---------------------- Importing the Redux Toolkit ---------------
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

// Test --------------------- Structure of the initial STate --------------
type currentWidthState = {
  greaterThanSM: boolean;
  greaterThanXS: boolean;
  greaterThanMD: boolean;
};

const initialState: currentWidthState = {
  greaterThanXS: false,
  greaterThanSM: false,
  greaterThanMD: false,
} as currentWidthState;

// Test --------------------- Creating the slice ------------------------
// greaterThan <xs, sm, md, lg, xl> -------- Greater than <xs, sm, md, lg, xl> but smaller than <sm, md, lg, xl>
const currentWidthSlice = createSlice({
  name: "currentWidth",
  initialState: initialState,
  reducers: {
    // Greater than XS but smaller than SM
    gtXS: (state: currentWidthState, action: PayloadAction<boolean>) => {},
    // Greater than SM but smaller than MD
    gtSM: (state: currentWidthState, action: PayloadAction<boolean>) => {},
    // Greater than MD
    gtMD: (state: currentWidthState, action: PayloadAction<boolean>) => {},
  },
});

// Test --------------------- Exporting the actions ---------------------
export const { gtXS, gtSM, gtMD } = currentWidthSlice.actions;
export const selectCurrentWidth = (state: RootState) => state.currentWidth;

// Test --------------------- Exporting the Reducers Functions -------
export default currentWidthSlice.reducer;
