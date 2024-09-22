import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  description: string;
  category: string;
  rating: number;
  stock: number;
  tags: string[];
  minimumOrderQuantity: number;
  thumbnail: string;
  reviews: {
    comment: string;
    date: string;
    reviewerEmail: string;
    rating: number;
    reviewerName: string;
  }[];
}

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
