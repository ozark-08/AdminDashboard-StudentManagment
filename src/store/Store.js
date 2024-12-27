import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "../store/studentSlice";

export const store = configureStore({
  reducer: { student : studentReducer},
});
