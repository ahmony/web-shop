import { productsStateInt } from "../reducers/products";

export const updateCart = (cartData: productsStateInt) =>
    {
        return { type: 'UPDATE_CART', payload: cartData }
    };