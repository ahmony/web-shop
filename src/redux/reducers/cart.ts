export interface cartStateInt {
        id: number;
        title: string,
        price: number,
        quantity: number,
}

export interface cartActionInt {
    type: string,
    payload: any
}

const initialState: cartStateInt[] = [];

const cartReducer = (state: cartStateInt[] = initialState, action: cartActionInt) => {
    if(action.type === 'ADD_TO_CART'){
        return [...state, 
            {id: Math.random(), title: action.payload.title,price: action.payload.price,quantity:action.payload.quantity}]
    }
    if(action.type === 'DELETE_FROM_CART'){
    
        return state.filter((product:any) => !(product.title === action.payload.productTitle && product.id === action.payload.productId))
    }
    return state;
}

export default cartReducer;