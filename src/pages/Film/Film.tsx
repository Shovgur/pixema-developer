import React, { useEffect } from "react";
import "./Film.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  FilmSelectors,
  loadSelectedFilm,
} from "../../redux/reducers/filmReducer";
import Button from "../../components/Button";

const Film = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(loadSelectedFilm({ id }));
  }, []);

  const selectedFilm = useSelector(FilmSelectors.getSelectedFilm);

  const genres = selectedFilm?.genres.map((genre: any) => genre.display_name);

  console.log(selectedFilm);
  console.log(genres);

  return (
    <main className="selectedFilm">
      <div className="selectedFilm__container">
        <div className="selectedFilm__card">
          <div className="selectedFilm__card__image">
            <img src={selectedFilm?.poster} alt="" />
          </div>
          <button className="flim__icon-card"><img className="icon_elipse" src="../../icons/IconFavorites.tsx" alt="" />
          <img className="icon_elipse" src="../../icons/IconElipse.tsx" alt="" /></button>
        </div>
        <div className="selectedFilm__info">
          <div className="selectedFilm__info__genres">
            {genres?.map((genre: string, index: number) =>
              index === genres.length - 1 ? (
                <div className="selectedFilm__info__genre">{genre}</div>
              ) : (
                <>
                  <div className="selectedFilm__info__genre">{genre}</div>
                  <div className="selectedFilm__info__genre">&bull;</div>
                </>
              )
            )}
          </div>
          <div className="selectedFilm__info__name">{selectedFilm?.name}</div>
          <div className="selectedFilm__info__labels">
            <div className="selectedFilm__info__labels__rating">
              {selectedFilm?.rating}
            </div>
            <div className="selectedFilm__info__labels__runtime">{`${selectedFilm?.runtime} min`}</div>
          </div>
          <div className="selectedFilm__info__description">
            {selectedFilm?.description}
          </div>
          <div className="selectedFilm__info__detailed">
            <div className="selectedFilm__info__detailed__year"><span className="year">Year</span>2011</div>
            <div className="selectedFilm__info__detailed__released"><span className="year">Released</span>15 Jul 2011</div>
            <div className="selectedFilm__info__detailed__boxOffice"><span className="year">BoxOffice</span>$381,409,310</div>
            <div className="selectedFilm__info__detailed__production"><span className="year">Production</span>United Kingdom, United States</div>
            <div className="selectedFilm__info__detailed__actors"><span className="year">Actors</span>Heyday Films, Moving Picture Company, Warner Bros.</div>
            <div className="selectedFilm__info__detailed__director"><span className="year">Director</span>Daniel Radcliffe, Emma Watson, Rupert Grint</div>
            <div className="selectedFilm__info__detailed__writers"><span className="year">Writers</span>David Yates</div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Film;
