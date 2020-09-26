import { combineReducers } from "redux";

// Reducers
import { foodReducer } from "./food";
import { cartReducer } from "./cart";
import { NavselectReducer } from "./navselect";
import { loadingReducer } from "./loading";
import { testReducer } from "./test";
import {
  recordReducer,
  tagReducer,
  filterInputReducer,
  priceRangeReducer,
} from "./record";

const masterReducer = combineReducers({
  testReducer,
  foodReducer,
  cartReducer,
  NavselectReducer,
  loadingReducer,
  recordReducer,
  tagReducer,
  filterInputReducer,
  priceRangeReducer,
});

export default masterReducer;
