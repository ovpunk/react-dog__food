import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { useDebounce } from "../../hooks/useDebounce";
import { changeSearchValue } from "../../redux/slices/filterSlice";
import styles from "./search.module.css";

export const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchValue, setSearchValue] = useState(() => {
    const firstSearch = searchParams.get("search");

    return firstSearch ? firstSearch : "";
  });

  const dispatch = useDispatch();

  const debounceValue = useDebounce(searchValue, 500);

  useEffect(() => {
    dispatch(changeSearchValue(debounceValue));
  }, [debounceValue, dispatch]);

  const handleChange = (event) => {
    setSearchValue(event.target.value);
    if (!event.target.value) {
      return setSearchParams("");
    }
    const params = {};
    searchParams.forEach((value, key) => (params[key] = value));
    setSearchParams({
      ...params,
      search: event.target.value,
    });
  };

  return (
    <input
      placeholder="Найти"
      className={styles.search}
      onChange={(event) => handleChange(event)}
      value={searchValue}
    />
  );
};
