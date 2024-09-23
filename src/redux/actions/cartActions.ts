import axios from 'axios';
import { cartActions } from '../reducers/cartReducer';
import { AppDispatch, AppThunk } from '../store';
import apiclient from '@/services/apiclient';

export const fetch = (): AppThunk => async (dispatch: any) => {
    dispatch(cartActions.setLoading(true));
    try {
        const { data } = await axios.get('carts/1');
        dispatch(cartActions.setup(data));
    } catch (error) {
        console.log('error fetching cart', error);
    } finally {
        dispatch(cartActions.setLoading(false));
    }
};

export const pushToCart =
    (item: { productId: string; quantity: number }): AppThunk =>
    async (dispatch: any) => {
        try {
            const { data } = await apiclient.post('carts/add', {
                userId: 5,
                products: [item],
            });
            dispatch(cartActions.add(data.products[0]));
        } catch (error) {}
    };
