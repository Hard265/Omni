import apiclient from "@/services/apiclient";
import { setProducts } from "../reducers/productReducer";
import { AppThunk } from "../store";

export const fetchProducts = (): AppThunk => async (dispatch: any) => {
  try {
    const { data } = await apiclient.get("/products");
    dispatch(setProducts(data));
  } catch (error) {
    console.error("Error fetching products", error);
  }
};
