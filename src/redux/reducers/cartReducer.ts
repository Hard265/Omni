import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

export interface CartItem {
    id: string;
    title: string;
    price: number;
    total: number;
    quantity: number;
    thumbnail: string;
    discountPercentage: number;
    discountedTotal: number;
}

const initialState: {
    loading: boolean;
    products: CartItem[];
} = {
    loading: false,
    products: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setup(state, action: PayloadAction<typeof initialState>) {
            state.products = action.payload.products;
        },
        setLoading(state, action: PayloadAction<boolean>) {
            state.loading = action.payload;
        },
        add: (state, action: PayloadAction<CartItem>) => {
            const item = _.find(state.products, { id: action.payload.id });
            if (item) {
                item.quantity += action.payload.quantity;
            } else {
                state.products.push(action.payload);
            }
        },
        remove: (state, action: PayloadAction<Pick<CartItem, 'id'>>) => {
            state.products = _.reject(state.products, {
                id: action.payload.id,
            });
        },
        clear: (state) => {
            state.products = [];
        },
    },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
