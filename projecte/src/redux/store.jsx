import { combineReducers } from "redux";
import { createStore } from "redux";
import { dataCategoryReducer } from "./reducer/categoryReducer";
import { dataGameReducer } from "./reducer/gameReducer";
import { dataClientReducer } from "./reducer/clientReducer";
import {dateBasketReducer} from "./reducer/basketReducer"
import { dataShoppingReducer } from "./reducer/shoppingReducer";
const reduce=combineReducers({ dataShoppingReducer,  dateBasketReducer, dataCategoryReducer,dataGameReducer,dataClientReducer})
debugger



export const mystore=createStore(reduce)
window.store=mystore