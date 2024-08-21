import React, { useContext } from "react";
import { MyContext } from "../App";

function ProductList({ onDelete }) {
  const { searching, products } = useContext(MyContext);
  const [productVal, setProductVal] = products;
  const [searchVal, setSearchVal] = searching;

  const productsLists = productVal.length;
  if (!productsLists)
    return (
      <div>
        <h2 className="text-amber-950 dark:text-textColor font-bold text-xl border-b border-b-amber-950 dark:border-b-gray-500 dar">
          Product List
        </h2>
        <div className="flex justify-center mt-10 dark:text-Inputs text-amber-950">
          <span>❌NO PRODUCT FOUND❌</span>
        </div>
      </div>
    );

  return (
    <div>
      <h2 className="text-amber-950 dark:text-textColor font-bold text-xl border-b border-b-amber-950 dark:border-b-gray-500 dar">
        Product List
      </h2>
      {productVal
        .filter((val) => {
          if (searchVal === "") {
            return val;
          } else if (
            val.title.toLowerCase().includes(searchVal.toLowerCase())
          ) {
            return val;
          }
        })
        .map((val, index) => {
          return (
            <div key={index}>
              <div className="flex justify-between mt-4">
                <span className="text-lg text-amber-950 dark:text-Inputs">
                  {val.option}
                </span>
                <div className="space-x-3 ">
                  <span className="text-lg text-amber-950 dark:text-Inputs">
                    {val.createdAt}
                  </span>
                  <span className="border border-amber-950 dark:border-Inputs text-amber-950 dark:text-Inputs py-1 px-3 rounded-full">
                    {val.title}
                  </span>
                  <span className="dark:ring dark:ring-quantityNumber text-green dark:text-quantityNumber bg-modalLight dark:bg-btn rounded-full px-3 py-1">
                    {val.quantity}
                  </span>
                  <button
                    className="border border-delete rounded-full py-1 px-2 text-delete"
                    onClick={() => onDelete(val)}
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
