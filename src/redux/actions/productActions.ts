import apiclient from '@/services/apiclient';
import { setProducts } from '../reducers/productReducer';
import { AppThunk } from '../store';
import axios from 'axios';

export const fetchProducts = (): AppThunk => async (dispatch: any) => {
    try {
        const { data } = await apiclient.get('products?limit=20');
        dispatch(setProducts(data.products));
    } catch (error) {
        console.error('Error fetching products', error);
    }
};
