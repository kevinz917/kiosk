import { combineReducers } from "redux";

// Reducers
import { foodReducer } from "./food";
import { cartReducer } from "./cart";
import { NavselectReducer } from "./navselect";
import { loadingReducer } from "./loading";

const masterReducer = combineReducers({
  foodReducer,
  cartReducer,
  NavselectReducer,
  loadingReducer,
});

export default masterReducer;
