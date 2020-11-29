import initialAxios from "./../helpers/axios";
import { productConstants } from "./constants";

export const getAllProducts = () => async (dispatch) => {
  try {
    dispatch({ type: productConstants.GET_ALL_PRODUCT_REQUEST });

    const res = await initialAxios.get("products");

    dispatch({
      type: productConstants.GET_ALL_PRODUCT_SUCCESS,
      payload: { products: res.data },
    });
  } catch (error) {
    dispatch({
      type: productConstants.GET_ALL_PRODUCT_FAILURE,
      payload: {
        error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      },
    });
  }
};
