import React, { useContext, useState } from "react";
import SearchBar from "../ui/SearchBar";
import Sorting from "../ui/Sorting";
import { MyContext } from "../App";

function Filters() {
  const { Values, categories } = useContext(MyContext);
  const [inputVal, setInputVal] = Values;
  const [categoryVal, setCategoryVal] = categories;

  return (
    <div className="hidden md:block">
      <div>
        <h2 className="text-gray-700  dark:text-Inputs font-bold text-lg border-b border-gray-700 dark:border-Inputs mb-2 pb-1">
          filters
        </h2>
        <div className="space-y-5">
          <div className="flex justify-between">
            <SearchBar />
          </div>
          <div className="flex justify-between">
            <Sorting />
          </div>
          <div className="flex justify-between">
            <label
              className="text-amber-950 dark:text-Inputs text-lg"
              htmlFor="category"
            >
              category
            </label>
            <select
              value={categoryVal}
              onChange={(e) => setCategoryVal(e.target.value)}
              id="category"
              name="category"
              className="w-24 h-10 bg-transparent border border-black dark:border-Inputs rounded-lg p-1 dark:text-titleH2 text-black mb-4 text-lg"
            >
              <option value="all">all</option>
              {inputVal.map((value, index) => (
                <option value={value.name} key={index}>{value.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filters;
