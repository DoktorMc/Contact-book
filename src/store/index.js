import { createStore, applyMiddleware} from "redux";
import rootReducers from "./reducers";
// import filerReducer from "./reducers/todosFilter";
import { logger } from "redux-logger/src";
import thunk from "redux-thunk";

// convert object to string and store in localStorage
function saveToLocalStorage(state) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("persistantState", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

// load string from localStarage and convert into an Object
// invalid output must be undefined
function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("persistantState");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

const store = createStore(
  rootReducers,
  loadFromLocalStorage(),
  applyMiddleware(thunk, logger),
);

store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;