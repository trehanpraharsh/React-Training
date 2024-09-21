import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import restSlice from "./restSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    rest: restSlice,
  },
});
