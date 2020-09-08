import { combineReducers } from "redux";

// Reducers
import { foodReducer } from "./food";
import { cartReducer } from "./cart";

const masterReducer = combineReducers({ foodReducer, cartReducer });

export default masterReducer;
