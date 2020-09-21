import { combineReducers } from "redux";

// Reducers
import { foodReducer } from "./food";
import { cartReducer } from "./cart";
import { NavselectReducer } from "./navselect";
import { loadingReducer } from "./loading";
import { testReducer } from "./test";

const masterReducer = combineReducers({
  testReducer,
  foodReducer,
  cartReducer,
  NavselectReducer,
  loadingReducer,
});

export default masterReducer;
