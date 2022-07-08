// Test ---------------------- Importing the Redux Toolkit ---------------
import { configureStore } from "@reduxjs/toolkit";

// Test --------------------- Creating the store ------------------------
const store = configureStore({
  reducer: {},
});

// Test --------------------- Exporting the store ---------------------
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;