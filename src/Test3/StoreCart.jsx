import reducer from "./Reducer";

const { createStore } = require("redux");

const storeCart = createStore(reducer);

export default storeCart;