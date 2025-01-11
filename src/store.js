import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/theme/themeSlice";
import cartReducer from "./features/cart/cartSlice";
import userReducer from "./features/user/userSlice";
// ...
export const store = configureStore({
  reducer: {
    themeState: themeReducer,
    cartState: cartReducer,
    userState: userReducer,
  },
});
