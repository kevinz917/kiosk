import { combineReducers } from "redux";

// Reducers
import { foodReducer } from "./food";
import { cartReducer } from "./cart";
import { NavselectReducer } from "./navselect";

const masterReducer = combineReducers({
  foodReducer,
  cartReducer,
  NavselectReducer,
});

export default masterReducer;
