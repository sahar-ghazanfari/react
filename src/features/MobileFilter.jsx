import React, { useContext } from "react";
import SearchBar from "../ui/SearchBar";
import Sorting from "../ui/Sorting";
import { MyContext } from "../App";

function MobileFilter() {
 const { Values, categories } = useContext(MyContext);
 const [inputVal, setInputVal] = Values;
 const [categoryVal, setCategoryVal] = categories;

  return (
    <div className="block md:hidden mt-4">
      <div className="flex items-center justify-around">
        <SearchBar />
        <Sorting />
        <select
          value={categoryVal}
          onChange={(e) => setCategoryVal(e.target.value)}
          id="category"
          name="category"
          className="w-24 h-10 bg-transparent border border-black dark:border-Inputs rounded-lg p-1 dark:text-titleH2 text-black mb-4 text-lg"
        >
          <option value="all">all</option>
          {inputVal.map((value, index) => (
            <option value={value.name} key={index}>
              {value.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default MobileFilter;
