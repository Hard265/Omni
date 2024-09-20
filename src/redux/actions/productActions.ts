import apiclient from '@/services/apiclient';
import { setProducts } from '../reducers/productReducer';
import { AppThunk } from '../store';
import axios from 'axios';

export const fetchProducts = (): AppThunk => async (dispatch: any) => {
  try {
    const { data } = await axios.get(
      'https://dummyjson.com/products?limit=10',
      { headers: { 'Content-Type': 'application/json' } },
    );
    dispatch(setProducts(data.products));
  } catch (error) {
    console.error('Error fetching products', error);
  }
};
