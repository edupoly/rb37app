import { combineReducers,createStore } from "redux";
import counterReducer from "./counterReducer";
import todoReducer from "./todolistReducer";
var reducer = combineReducers({counterR:counterReducer,todosR:todoReducer})
var store = new createStore(reducer)
export default store;