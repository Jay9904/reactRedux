import { createStore } from "redux";
import reducer from "./testReducer";

const testStore = createStore(reducer);

export default testStore;