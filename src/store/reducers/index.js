import contactsReducer from "./contactsReducer";
import activityReducer from './activityReducer';
import searchReducer from "./searchReducer";
import { combineReducers } from "redux";

// The key of this object will be the name of the store
const rootReducers = combineReducers({ contacts: contactsReducer, activity: activityReducer, search: searchReducer });

export default rootReducers;