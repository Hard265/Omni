import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CartItem {
  id: string;
  title: string;
  price: number;
  total: number;
  quantity: number;
  thumbnail: string;
  discountPercentage: number;
  discountedTotal: number;
}

interface CartState {
  items: CartItem[];
  discountedTotal: number;
  totalProducts: number;
  totalQuantity: number;
  total: number;
}

const initialState: CartState = {
  items: [],
  discountedTotal: 0,
  totalProducts: 0,
  totalQuantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action:PayloadAction<CartItem>) => {
        const item = state.items.find(i=> i.id === action.payload.id)
        if(item){
            item.quantity += action.payload.quantity
        }else{
            state.items.push(action.payload)
        }
    },
    removeFromCart: (state, action: PayloadAction<Pick<CartItem, "id">>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {addToCart,removeFromCart,clearCart } = cartSlice.actions;
export default cartSlice.reducer;