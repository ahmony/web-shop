export interface cartStateInt {
        title: string,
        price: number,
        quantity: number,
}

export interface cartActionInt {
    type: string,
    payload:  {
        id: number,
        title: string,
        price: number,
        description: string,
        quantity: number,
        img: string
    }
}

const initialState: cartStateInt[] = [];

const cartReducer = (state: cartStateInt[] = initialState, action: cartActionInt) => {
    if(action.type === 'UPDATE_CART'){
        return [...state, 
            {title: action.payload.title,price: action.payload.price,quantity:action.payload.quantity}]
    }
    return state;
}

export default cartReducer;