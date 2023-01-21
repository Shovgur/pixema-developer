import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { PathEnum } from "../../enums/enums";
import { loadSelectedFilm, setSelectedFilmId } from "../../redux/reducers/filmReducer";
import { FilmType } from "../../types";
import "./FilmCard.css";

type FilmProps = {
  data: FilmType;
};

const FilmCard: FC<FilmProps> = ({ data }) => {
  const { id, name, poster, is_series } = data;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onTitleClick = () => {
    dispatch(setSelectedFilmId(id));
    navigate(`/film/${id}`);
  };

  return (
    <div className="filmCard">
      <div className="filmCard__image">
        <img src={poster} alt={name} />
      </div>
      <div className="filmCard__info">
        <h3 onClick={onTitleClick} className="filmCard__info__title">
          {name}
        </h3>
        <p className="filmCard__info__type">{is_series ? "series" : "movie"}</p>
      </div>
    </div>
  );
};

export default FilmCard;
