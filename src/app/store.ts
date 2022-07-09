// Test ---------------------- Importing the Redux Toolkit ---------------
import { configureStore } from "@reduxjs/toolkit";
import currentWidthReducer from "../utilities/currentWidthSlice";
import pageChangeReducer from "../utilities/pageChangeSlice";

// Test --------------------- Creating the store ------------------------
export const store = configureStore({
  reducer: {
    currentWidth: currentWidthReducer,
    pageChange: pageChangeReducer,
  },
});

// Test --------------------- Exporting the store ---------------------
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
