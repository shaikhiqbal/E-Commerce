import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import authentication from "./authentication";

const store = configureStore({
  reducer: {
    cart: cartSlice
  }
});
export default store;
