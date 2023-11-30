const initialState = {
    cart: [],
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "addtocart": return {
            ...state, cart: [...state.cart, action.payload],
        };
        case "removeFromcart": return {
            ...state, cart: state.cart.filter(item => item.id !== action.payload),
        }
        default: return state;
    }

}

export default reducer;