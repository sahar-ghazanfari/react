import React from "react";

function Sorting({ product }) {
  const handleSorting = () => {
    if (value == "earlest") {
      product
        ?.map((time) => {
          return { ...time, date: product.createdAt };
        })
        .sort((a, b) => a.date - b.date);
    } else {
      product
        ?.map((time) => {
          return { ...time, date: product.createdAt };
        })
        .sort((a, b) => b.date - a.date);
    }
  };

  return (
    <div className="w-full flex justify-between ">
      <label className="text-Inputs text-lg" htmlFor="sorting">
        sort
      </label>
      <select
        name="sorting"
        id="sorting"
        className="bg-transparent border border-Inputs rounded-lg text-titleH2 text-lg  p-2"
      >
        <option value="all">All</option>
        <option value="earlest" onChange={handleSorting}>
          earlest
        </option>
        <option value="latest" onChange={handleSorting}>
          latest
        </option>
      </select>
    </div>
  );
}

export default Sorting;
