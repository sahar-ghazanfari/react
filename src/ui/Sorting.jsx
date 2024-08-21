import React from "react";

function Sorting() {
  return (
    <div className="md:w-full md:flex md:justify-between ">
      <label
        className="hidden md:block text-amber-950 dark:text-Inputs text-lg"
        htmlFor="sorting"
      >
        sort
      </label>
      <select
        name="sorting"
        id="sorting"
        className="bg-transparent border border-amber-950 dark:border-Inputs rounded-lg text-amber-950 dark:text-titleH2 text-lg  p-2"
      >
        <option value="all">All</option>
        <option value="earliest">earliest</option>
        <option value="latest">latest</option>
      </select>
    </div>
  );
}

export default Sorting;
