import { configureStore } from "@reduxjs/toolkit";
import InputReducer from "./InputSlice";

const store = configureStore({
  reducer: {
    input: InputReducer,
  },
});
export default store;
