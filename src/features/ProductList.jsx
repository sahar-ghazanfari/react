import React, { useContext } from "react";
import { SearchContext } from "../App";

function ProductList({ product, handleDelete }) {
  const search = useContext(SearchContext);

  return (
    <div>
      <h2 className="text-textColor font-bold text-xl border-b">
        Product List
      </h2>
      {product
        .filter((val) => {
          if (search === "") {
            return val;
          } else if (val.title.toLowerCase().includes(search.toLowerCase())) {
            return val;
          }
        })
        .map((val, key) => {
          return (
            <div key={key}>
              <div className="flex justify-between mt-4">
                <span className="text-lg text-Inputs">{val.option}</span>
                <div className="space-x-3 ">
                  <span className="text-lg text-Inputs">{val.createdAt}</span>
                  <span className="border border-Inputs text-Inputs py-1 px-3 rounded-full">
                    {val.title}
                  </span>
                  <span className="ring ring-quantityNumber text-quantityNumber bg-btn rounded-full px-3 py-1">
                    {val.quantity}
                  </span>
                  <button
                    className="border border-delete rounded-full py-1 px-2 text-delete"
                    onClick={() => handleDelete(val)}
                  >
                    delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default ProductList;
