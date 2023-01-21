import React from "react";
import { useDispatch } from "react-redux";
import { setFilterMenuStatus } from "../redux/reducers/filterReducer";

const FilterSvg = ({ isDisabled }: any) => {
  const dispatch = useDispatch();
  const isFiltersActive = false;

  const onClick = () => {
    dispatch(setFilterMenuStatus(true));
    document.body.classList.add("_lock");
  };

  return (
    <svg
      onClick={onClick}
      className="filter"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 6L19 6M10 12H19M14 18H19" stroke="white" stroke-width="2" stroke-linecap="round" />
      {isFiltersActive && <circle cx="3" cy="19" r="3" fill="#7B61FF" />}
    </svg>
  );
};

export default FilterSvg;
