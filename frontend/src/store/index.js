
import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import allReducers from "../reducers";



 


const initialState={}
const composeEnhancers = composeWithDevTools({})
const middleware = [thunk];
const store = createStore(allReducers, initialState, composeEnhancers(applyMiddleware(...middleware)))

export default store