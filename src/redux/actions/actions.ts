import { productsStateInt } from "../reducers/products";

export const addToCart = (cartData: productsStateInt) =>
    {
        return { type: 'ADD_TO_CART', payload: cartData }
    };

export const deleteFromCart = (productTitle : string, productId: number) => 
{
    return {type: 'DELETE_FROM_CART', payload:{productTitle,productId}}
};