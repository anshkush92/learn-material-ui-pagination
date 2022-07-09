// Test ---------------------- Importing the Redux Toolkit ---------------
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Test ---------------------- Type of Initial State -------------------
type pageChangeSliceState = {
  currentPage: number;
};

const initialState: pageChangeSliceState = {
  currentPage: 1,
};
// Test --------------------- Creating the slice ------------------------
export const pageChangeSlice = createSlice({
  name: "pageChange",
  initialState,
  reducers: {
    changePage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
      console.log("Change Page");
    },
  },
});

// Test --------------------- Exporting the actions ---------------------
export const { changePage } = pageChangeSlice.actions;

// Test --------------------- Exporting the Reducers Functions -------
export default pageChangeSlice.reducer;
