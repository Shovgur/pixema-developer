import React from "react";
import "./FiltersMenu.css";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { ButtonEnum, FilterSortTabsEnum } from "../../enums/enums";
import {
  FilterSelectors,
  setFilterCountry,
  setFilterGenres,
  setFilterMenuStatus,
  setFilterMovieName,
  setFilterRatingFrom,
  setFilterRatingTo,
  setFilterSortTab,
  setFilterYearsFrom,
  setFilterYearsTo,
} from "../../redux/reducers/filterReducer";
import Button from "../Button";
import CustomSelect from "../CustomSelect";
import Input from "../Input";
import SortTabs from "../SortTabs";
import CanelSvg from "../../icons/CancelSvg";

const FiltersMenu = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(FilterSelectors.getFilterMenuStatus);

  const closeFilterMenu = (event: any) => {
    if (event.target.classList.contains("filtersMenu__body") || event.target.id === "showResultsBtn") {
      dispatch(setFilterMenuStatus(false));
      document.body.classList.remove("_lock");
    }
  };

  const clearFilter = () => {
    dispatch(setFilterCountry(""));
    dispatch(setFilterGenres([]));
    dispatch(setFilterSortTab(FilterSortTabsEnum.Movie));
  };

  const onChangeInput = (event: any) => {
    const value = event.target.value;
    switch (event.target.id) {
      case "movieName":
        dispatch(setFilterMovieName(value));
        break;
      case "yearsFrom":
        dispatch(setFilterYearsFrom(value));
        break;
      case "yearsTo":
        dispatch(setFilterYearsTo(value));
        break;
      case "ratingFrom":
        dispatch(setFilterRatingFrom(value));
        break;
      case "ratingTo":
        dispatch(setFilterRatingTo(value));
        break;
      default:
        break;
    }
  };

  return (
    <div onClick={closeFilterMenu} className={classNames("filtersMenu__body", { ["_active"]: isMenuOpen })}>
      <div className="filtersMenu__content">
        <div className="filtersMenu__content__header">
          <span>Filters</span>
          <CanelSvg></CanelSvg>
        </div>
        <div className="sortBy">
          <span>Sort by</span>
          <SortTabs></SortTabs>
        </div>

        <div className="movieName">
          <label htmlFor="movieName">Full or short movie name</label>
          <Input onChange={onChangeInput} id="movieName" placeholder="Your text" autoComplete="off"></Input>
        </div>

        <div className="genre">
          <label htmlFor="genre">Genre</label>
          <CustomSelect id="genre" isMulti={true}></CustomSelect>
        </div>

        <div className="years">
          <label htmlFor="years">Years</label>
          <div className="years__inputs">
            <Input onChange={onChangeInput} id="yearsFrom" placeholder="From" autoComplete="off"></Input>
            <Input onChange={onChangeInput} id="yearsTo" placeholder="To" autoComplete="off"></Input>
          </div>
        </div>

        <div className="rating">
          <label htmlFor="rating">Rating</label>
          <div className="rating__inputs">
            <Input onChange={onChangeInput} id="ratingFrom" placeholder="From" autoComplete="off"></Input>
            <Input onChange={onChangeInput} id={"ratingTo"} placeholder="To" autoComplete="off"></Input>
          </div>
        </div>

        <div className="country">
          <label htmlFor="country">Country</label>
          <CustomSelect id="country" isMulti={false}></CustomSelect>
        </div>

        <div className="filtersMenu__content__footer">
          <Button onClick={clearFilter} text={ButtonEnum.Clear} className={classNames("secondary")}></Button>
          <Button text={ButtonEnum.Show} className={classNames("primary")} id={"showResultsBtn"}></Button>
        </div>
      </div>
    </div>
  );
};

export default FiltersMenu;
