import React, { useContext } from "react";
import SearchBar from "../ui/SearchBar";
import Sorting from "../ui/Sorting";
import { MyContext } from "../App";

function MobileFilter({ onChange }) {
  const { Values, Data } = useContext(MyContext);
  const [inputVal, setInputVal] = Values;
  return (
    <div className="block md:hidden mt-4">
      <div className="flex items-center justify-around">
        <SearchBar />
        <Sorting />
        <select
          value={Data.option}
          onChange={onChange}
          id="category"
          name="category"
          className="p-2 bg-transparent border border-black dark:border-Inputs rounded-xl text-black dark:text-titleH2 text-lg"
        >
          <option value="categories">All</option>
          {inputVal.map((value, index) => (
            <option key={index}>{value.name}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default MobileFilter;
