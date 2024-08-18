import React, { useContext } from "react";
import { SearchContext } from "../App";

function SearchBar({ setSearch }) {
  const search = useContext(SearchContext);
  return (
    <div className="flex w-full justify-between ">
      <label className="text-Inputs text-lg" htmlFor="">
        search
      </label>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        type="search"
        className="input outline-none"
      />
    </div>
  );
}

export default SearchBar;
