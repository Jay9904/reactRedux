const initialState = {
    data: [],
};


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'addData': return { ...state, data: [...state.data, action.payload] };
        case 'deleteData': return { ...state, data: [...state.data.slice(0, action.payload), ...state.data.slice(action.payload + 1)] };
        default: return state;
    }
}

export default reducer;