import { applyMiddleware  } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import reducerAddBooks from "./reducers/addBookReducer";
import fetchBooksReducer from "./reducers/fetchBookReducer";
import { combineReducers } from "redux";
const rootreducer = combineReducers({
    library: reducerAddBooks,
    search:fetchBooksReducer
})

const store = configureStore(
  {reducer:rootreducer},
  composeWithDevTools(applyMiddleware(logger, thunk))
);

export default store