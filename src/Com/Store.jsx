import { createStore } from "redux";
import reducer from "./Reducer";

const mystore = createStore(reducer);

export default mystore;