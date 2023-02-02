import { createStore, applyMiddleware} from "redux";
import rootReducers from "./reducers";
// import filerReducer from "./reducers/todosFilter";
import { logger } from "redux-logger/src";
import thunk from "redux-thunk";

export const store = createStore(rootReducers, applyMiddleware(thunk, logger));

export default store;