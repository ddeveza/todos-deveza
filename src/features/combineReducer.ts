import { combineReducers } from "@reduxjs/toolkit";
import todosReducer from "./todosSlice";

const reducers = {
  todos: todosReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
