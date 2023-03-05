import { configureStore } from "@reduxjs/toolkit";
import InputReducer from "./InputSlice";
// import listReducer from "./ListSlice";

const store = configureStore({
  reducer: {
    input: InputReducer,
    // list: listReducer,
  },
});
export default store;
