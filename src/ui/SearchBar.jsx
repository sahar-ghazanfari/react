import React, { useContext } from "react";
import { MyContext } from "../App";

function SearchBar() {
  const { searching } = useContext(MyContext);
  const [searchVal, setSearchVal] = searching;

  return (
    <div className="flex md:w-full justify-between">
      <label
        className="hidden md:block text-amber-950 dark:text-Inputs text-lg"
        htmlFor=""
      >
        search
      </label>
      <input
        placeholder="search..."
        value={searchVal}
        onChange={(e) => setSearchVal(e.target.value)}
        type="search"
        className="input w-full md:w-fit outline-none placeholder:dark:text-Inputs placeholder:text-amber-950 placeholder:dark:md:text-transparent placeholder:md:text-transparent"
      />
    </div>
  );
}

export default SearchBar;
