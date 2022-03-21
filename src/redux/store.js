import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import bookReducer from "./books/bookReducer";
//here creating stores

const store = createStore(bookReducer, applyMiddleware(logger))

//export defat to store
export default store