import React, { useContext } from "react";
import SearchBar from "../ui/SearchBar";
import Sorting from "../ui/Sorting";
import { FormDataContext } from "../App";

function Filters({ product, setProduct, inputValue, onChange, setSearch }) {
  const formData = useContext(FormDataContext);

  return (
    <div className="flex flex-col mt-8">
      <h2 className="text-Inputs font-bold text-lg border-b border-Inputs mb-2 pb-1">
        filters
      </h2>
      <div className="space-y-5">
        <div className="flex justify-between">
          <SearchBar
            setSearch={setSearch}
            product={product}
            setProduct={setProduct}
          />
        </div>
        <div className="flex justify-between">
          <Sorting product={product} setProduct={setProduct} />
        </div>
        <div className="flex justify-between">
          <label className="text-Inputs text-lg" htmlFor="category">
            category
          </label>
          <select
            value={formData.option}
            onChange={onChange}
            id="category"
            name="category"
            className="bg-transparent border border-Inputs rounded-xl p-1 text-titleH2 mb-4 text-lg"
          >
            <option value="categories">All</option>
            {inputValue.map((value) => (
              <option key={value.id}>{value.name}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Filters;
