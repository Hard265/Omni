import { addToCart, removeFromCart, clearCart } from "../reducers/cartReducer";

export const addItemToCart = (item: any) => (dispatch: any) => {
  dispatch(addToCart(item));
};

export const removeItemFromCart = (id: string) => (dispatch: any) => {
  dispatch(removeFromCart({ id }));
};

export const clearShoppingCart = () => (dispatch: any) => {
  dispatch(clearCart());
};
