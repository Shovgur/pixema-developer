import { createSlice } from "@reduxjs/toolkit";

type FilmState = {
  searchFilms: any;
  films: any;
  selectedFilm: any;
  selectedFilmId: any;
  favoritesFilms: any;
};

const initialState: FilmState = {
  searchFilms: [],
  films: [],
  selectedFilm: null,
  selectedFilmId: null,
  favoritesFilms: [],
};

const filmSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    setMoreFilms: (state: any, action: any) => {
      state.films = [...state.films, ...action.payload];
    },
    setFilms: (state: any, action: any) => {
      state.films = action.payload;
    },
    setSearchFilms: (state: any, action: any) => {
      state.searchFilms = action.payload;
    },
    setSelectedFilm: (state: any, action: any) => {
      state.selectedFilm = action.payload;
    },
    setSelectedFilmId: (state: any, action: any) => {
      state.selectedFilmId = action.payload;
    },
    loadSelectedFilm: (state: any, action: any) => {},
    loadFilms: (state: any, action: any) => {},
    loadSearchFilms: (state: any, action: any) => {},
  },
});

export const {
  setMoreFilms,
  setFilms,
  setSearchFilms,
  setSelectedFilm,
  loadFilms,
  loadSearchFilms,
  loadSelectedFilm,
  setSelectedFilmId,
} = filmSlice.actions;

export default filmSlice.reducer;

export const FilmSelectors = {
  getFilms: (state: any) => state.film.films,
  getSearchFilms: (state: any) => state.film.searchFilms,
  getSelectedFilm: (state: any) => state.film.selectedFilm,
  getSelectedFilmId: (state: any) => state.film.selectedFilmId,
};
