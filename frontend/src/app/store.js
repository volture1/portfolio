import { configureStore } from "@reduxjs/toolkit";
import categorySliceReducer from "../components/CategorySlice.jsx";

const store = configureStore({
  reducer: {
    categorySlice: categorySliceReducer,
  },
});

export default store;