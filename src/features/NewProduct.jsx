import React, { useContext, useState } from "react";
import InputFields from "../ui/InputFields";
import { MyContext } from "../App";

function NewProduct({ onChange, onSubmit }) {
  const { Data, Values } = useContext(MyContext);
  const [inputVal, setInputVal] = Values;

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-semibold md:font-bold text-amber-950 dark:text-textColor mb-2">
        Add new product
      </h2>
      <form
        className="bg-modalLight dark:bg-modal rounded-xl p-4"
        onSubmit={onSubmit}
      >
        <InputFields
          label="title"
          type="text"
          id="title"
          name="title"
          value={Data.title}
          onChange={onChange}
        />
        <InputFields
          label="quantity"
          type="number"
          id="quantity"
          name="quantity"
          value={Data.quantity}
          onChange={onChange}
        />
        <div className="flex flex-col">
          <label
            htmlFor="option"
            className="text-amber-950 dark:text-titleH2 my-2 text-lg"
          >
            category
          </label>
          <select
            value={Data.option}
            onChange={onChange}
            id="option"
            name="option"
            className="bg-transparent p-3 border border-amber-950 dark:border-Inputs rounded-xl text-amber-950 dark:text-titleH2 mb-4 text-lg"
          >
            <option value="categories">select a category</option>
            {inputVal.map((value, index) => (
              <option key={index}>{value.name}</option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="bg-amber-950 dark:bg-btn w-full text-white dark:text-textColor rounded-xl py-2 "
        >
          add new product
        </button>
      </form>
    </div>
  );
}

export default NewProduct;
