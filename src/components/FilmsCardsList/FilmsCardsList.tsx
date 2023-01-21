import React, { FC } from "react";
import "./FilmsCardsList.css";
import { FilmType } from "../../types";
import FilmCard from "../FilmCard";

type FilmsCardsListProps = {
  filmsList: any;
};

const FilmsCardsList: FC<FilmsCardsListProps> = ({ filmsList }) => {
  return (
    <div className="films__list">
      {filmsList.map((film: FilmType) => (
        <FilmCard key={film.id} data={film}></FilmCard>
      ))}
    </div>
  );
};

export default FilmsCardsList;
