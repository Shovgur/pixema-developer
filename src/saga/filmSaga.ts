import { all, takeLatest, put, call } from "redux-saga/effects";
import { PathEnum } from "../enums/enums";
import {
  loadSelectedFilm,
  loadFilms,
  loadSearchFilms,
  setSelectedFilm,
  setFilms,
  setMoreFilms,
  setSearchFilms,
} from "../redux/reducers/filmReducer";
import { getSelectedFilmApi, getFilmsApi, searchApi } from "./api";

function* getSearchFilmsSaga(action: any) {
  const access_token = localStorage.getItem("access_token");
  const { query } = action.payload;
  const { data, status } = yield call(searchApi, access_token, query);
  if (status === 200) {
    yield put(setSearchFilms(data.results));
  }
}

function* getFilmsSaga(action: any) {
  const access_token = localStorage.getItem("access_token");
  const { isLoadMoreFilms, page, type, genre, country, order } = action.payload;
  const { data, status } = yield call(getFilmsApi, access_token, page, type, genre, country, order);
  if (status === 200) {
    yield put(isLoadMoreFilms ? setMoreFilms(data.pagination.data) : setFilms(data.pagination.data));
  }
}

function* getSelectedFilmSaga(action: any) {
  const access_token = localStorage.getItem("access_token");
  const { id } = action.payload;
  const { data, status } = yield call(getSelectedFilmApi, access_token, id);
  if (status === 200) {
    yield put(setSelectedFilm(data.title));
  } else if (status === 404) {
    window.location.replace(PathEnum.Home);
  }
}

export default function* filmWatcher() {
  yield all([
    takeLatest(loadSelectedFilm, getSelectedFilmSaga),
    takeLatest(loadFilms, getFilmsSaga),
    takeLatest(loadSearchFilms, getSearchFilmsSaga),
  ]);
}
