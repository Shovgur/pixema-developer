import React, { FC } from "react";
import "./ShowMore.css";

type ShowMoreProps = {
  onClick: () => void;
};

const ShowMore: FC<ShowMoreProps> = ({ onClick }) => {
  return (
    <button className="showMoreBtn" onClick={onClick}>
      Show more
    </button>
  );
};

export default ShowMore;
