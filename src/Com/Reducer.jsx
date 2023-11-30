import { json } from "react-router-dom";

const input = [{
    name: "",
    email: "",
    number: "",
    state: "",
}]

const data = [];


const reducer = (state = input, action) => {
    switch (action.type) {
        case 'handleChange': return { ...state.input, [action.input.target.name]: action.input.target.value };
        case 'handleSubmit': return { ...state, data: action.form };
        default: return state;
    }
}

export default reducer;