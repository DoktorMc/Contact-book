import { watchFetchContact } from "./sagas";

export default function* rootSaga() {
  yield watchFetchContact();
}