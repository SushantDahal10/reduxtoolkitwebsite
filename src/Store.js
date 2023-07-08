import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "./features/cart/Cartslice";
import modalreducer from "./features/modal/modalslice";
export const Store = configureStore({
  reducer: {
    cart: cartreducer,
    modal: modalreducer,
  },
});
