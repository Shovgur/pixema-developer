import { all } from "redux-saga/effects";
import authWatcher from "./authSaga";
import filmWatcher from "./filmSaga";

export default function* rootSaga() {
  yield all([authWatcher(), filmWatcher()]);
}
