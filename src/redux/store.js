import { createStore, combineReducers } from "redux";
import * as reducers from "./reducers/allReducer.js";

// Creating a Redux store by combining multiple reducers
const store = createStore(
  combineReducers({
    // Combining individual reducers into a single root reducer
    countReducer: reducers.countReducer, // Reducer for count-related state
    sidebarReducer: reducers.sidebarReducer, // Reducer for sidebar-related state
    authReducer: reducers.authReducer, // Reducer for authentication-related state
    homeReducer: reducers.homeReducer, // Reducer for home-related state
  })
);

export default store;
