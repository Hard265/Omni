import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string[];
  description: string;
  colors: string[];
}

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
