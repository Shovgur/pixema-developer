import React, { FC } from "react";
import "./CustomSelect.css";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { FilterSelectors, setFilterCountry, setFilterGenres } from "../../redux/reducers/filterReducer";

const genres = [
  {
    value: "action",
    label: "Action",
  },
  {
    value: "drama",
    label: "Drama",
  },
  {
    value: "history",
    label: "History",
  },
  {
    value: "thriller",
    label: "Thriller",
  },
  {
    value: "adventure",
    label: "Adventure",
  },
  {
    value: "fantasy",
    label: "Fantasy",
  },
];

const countries = [
  {
    value: "",
    label: "All countries",
  },
  {
    value: "BE",
    label: "Belgium",
  },
  {
    value: "BR",
    label: "Brazil",
  },
  {
    value: "CA",
    label: "Canada",
  },
  {
    value: "DE",
    label: "Germany",
  },
  {
    value: "FR",
    label: "France",
  },
  {
    value: "IN",
    label: "India",
  },
  {
    value: "JP",
    label: "Japan",
  },
];

type CustomSelectProps = {
  isMulti: boolean;
  id?: string;
};

const CustomSelect: FC<CustomSelectProps> = ({ isMulti, id }) => {
  const dispatch = useDispatch();

  const currentCountry = useSelector(FilterSelectors.getFilterCountry);
  const currentGenres = useSelector(FilterSelectors.getFilterGenres);

  const getValue = () => {
    if (isMulti) {
      return currentGenres ? genres.filter((item) => currentGenres.indexOf(item.value) >= 0) : [];
    } else {
      return currentCountry ? countries.find((item) => item.value === currentCountry) : "";
    }
  };

  const onChange = (newValue: any) => {
    dispatch(isMulti ? setFilterGenres(newValue.map((item: any) => item.value)) : setFilterCountry(newValue.value));
  };

  return (
    <Select
      isClearable={isMulti ? false : true}
      id={id}
      classNamePrefix={"customSelect"}
      placeholder={isMulti ? "Select genres" : "Select country"}
      options={isMulti ? genres : countries}
      isMulti={isMulti}
      onChange={onChange}
      value={getValue()}
    ></Select>
  );
};

export default CustomSelect;
