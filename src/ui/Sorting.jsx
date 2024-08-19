import React, { useContext } from "react";
import { MyContext } from "../App";

function Sorting() {
  const { products } = useContext(MyContext);
  const [productVal, setProductVal] = products;

  const handleSorting = () => {
    if (value == "earlest") {
      productVal
        ?.map((time) => {
          return { ...time, date: productVal.createdAt };
        })
        .sort((a, b) => a.date - b.date);
    } else {
      productVal
        ?.map((time) => {
          return { ...time, date: productVal.createdAt };
        })
        .sort((a, b) => b.date - a.date);
    }
  };

  return (
    <div className="md:w-full md:flex md:justify-between ">
      <label className="hidden md:block text-Inputs text-lg" htmlFor="sorting">
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
