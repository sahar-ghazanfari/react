import React, { useContext, useState } from "react";
import { MyContext } from "../App";

function Sorting() {
  const { Sorts } = useContext(MyContext);
  const [sortVal, setSortVal] = Sorts;

  return (
    <div
      className="md:w-full md:flex md:justify-between "
    >
      <label
        className="hidden md:block text-amber-950 dark:text-Inputs text-lg"
        htmlFor="sorting"
      >
        sort
      </label>
      <select
        value={sortVal}
        onChange={(e) => {
          setSortVal(e.target.value);
        }}
        name="sorting"
        id="sorting"
        className="bg-transparent border border-amber-950 dark:border-Inputs rounded-lg text-amber-950 dark:text-titleH2 text-lg  p-2"
      >
        <option value="all">all</option>
        <option value="latest">latest</option>
        <option value="earliest">earliest</option>
      </select>
    </div>
  );
}

export default Sorting;
