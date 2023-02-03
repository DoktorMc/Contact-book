import { createStore, applyMiddleware} from "redux";
import rootReducers from "./reducers";
import { logger } from "redux-logger/src";
import createSagaMiddleware from "@redux-saga/core";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

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
  composeWithDevTools(
    applyMiddleware(sagaMiddleware, logger)
    // other store enhancers if any
  )
);

store.subscribe(() => saveToLocalStorage(store.getState()));

sagaMiddleware.run(rootSaga);

export default store;