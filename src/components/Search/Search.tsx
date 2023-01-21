import React, { FC } from "react";
import "./Search.css";
import FilterSvg from "../../icons/FilterSvg";
import { useDispatch, useSelector } from "react-redux";
import { FilterSelectors, setSearchValue } from "../../redux/reducers/filterReducer";
import classNames from "classnames";

type SearchProps = {
  isDisabled?: boolean;
};

const Search: FC<SearchProps> = ({ isDisabled = false }) => {
  const dispatch = useDispatch();

  const searchValue = useSelector(FilterSelectors.getSearchValue);

  const onSearch = (event: any) => {
    dispatch(setSearchValue(event.target.value));
  };

  return (
    <div className={classNames("search", { ["_disabled"]: isDisabled })}>
      <input
        onChange={onSearch}
        value={searchValue}
        className={classNames("search__input", { ["_disabled"]: isDisabled })}
        placeholder="Search"
        type="text"
      />
      <FilterSvg isDisabled={isDisabled}></FilterSvg>
    </div>
  );
};

export default Search;
