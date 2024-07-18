//create redux store

import { createStore } from "redux";
import counterReducer from "./counterReducer";

const store = createStore(counterReducer);

//export store
export default store;
