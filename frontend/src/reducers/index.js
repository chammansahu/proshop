import { combineReducers } from "redux";

import { productListReducer, productDetailsReducer } from "./productReducer";


const allReducers = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer
});
export default allReducers