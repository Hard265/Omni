import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartReducer";
import productReducer from "./reducers/productReducer";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2795870919.
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
