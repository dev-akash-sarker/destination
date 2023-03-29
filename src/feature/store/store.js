import { configureStore } from "@reduxjs/toolkit";
import TourSlice from "../slice/TourSlice";

// const reducers = combineReducers({
//   valueins: TourSlice,
// });

const store = configureStore({
  reducer: {
    valuein: TourSlice,
  },
});

export default store;
