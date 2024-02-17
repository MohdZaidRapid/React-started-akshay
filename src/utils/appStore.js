import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

// add slices
const appStore = configureStore({
  // contain small reducers
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
