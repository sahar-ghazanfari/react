import React, { useContext } from "react";
import SearchBar from "../ui/SearchBar";
import Sorting from "../ui/Sorting";
import { MyContext } from "../App";

function Filters({ onChange }) {
  const { Values, Data } = useContext(MyContext);
  const [inputVal, setInputVal] = Values;

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
            <label className="text-amber-950 dark:text-Inputs text-lg" htmlFor="category">
              category
            </label>
            <select
              value={Data.option}
              onChange={onChange}
              id="category"
              name="category"
              className="bg-transparent border border-black dark:border-Inputs rounded-xl p-1 dark:text-titleH2 text-black mb-4 text-lg"
            >
              <option value="categories">All</option>
              {inputVal.map((value) => (
                <option key={value.id}>{value.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filters;
