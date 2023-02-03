import  takeEvery  from 'redux-saga';
import { put, call } from "redux-saga/effects";
import { ACTION_ADD_CONTACTS, ACTION_DELETE_CONTACTS, ACTION_SET_CONTACTS, fetchContacts } from '../actions/contactsActions';


export function* watchFetchContact() {
 yield takeEvery(ACTION_SET_CONTACTS, workerContactsSaga);
}

function* workerContactsSaga() {
  console.log("wather saga");
  yield 
  // yield put(requestDogSuccess(data));
}
