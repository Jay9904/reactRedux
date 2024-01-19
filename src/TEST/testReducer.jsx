const initialState = {
    cart: [],
};
console.log(initialState.cart)

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADDTOCART": return { ...state, cart: [...state.cart, action.payload] };
            break;
        case "REMOVE": return { ...state, cart: [...state.cart.slice(0, action.payload), ...state.cart.slice(action.payload + 1)] };
            break;
        default: return state
    }
}

export default reducer;