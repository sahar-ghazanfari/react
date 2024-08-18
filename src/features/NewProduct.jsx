import React, { useContext } from "react";
import { FormDataContext } from "../App";

function NewProduct({ inputValue, onChange, onSubmit }) {
  const formData = useContext(FormDataContext);

  return (
    <>
      <h2 className="text-2xl font-bold text-textColor mb-2">
        Add new product
      </h2>
      <form
        className="bg-modal flex flex-col rounded-xl p-4"
        onSubmit={onSubmit}
      >
        <label htmlFor="name" className="text-titleH2 my-2 text-lg">
          title
        </label>
        <input
          className="input"
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={onChange}
        />
        <label htmlFor="quantity" className="text-titleH2 my-2 text-lg">
          quantity
        </label>
        <input
          value={formData.quantity}
          onChange={onChange}
          type="number"
          id="quantity"
          name="quantity"
          className="input"
        />
        <label htmlFor="option" className="text-titleH2 my-2 text-lg">
          category
        </label>
        <select
          value={formData.option}
          onChange={onChange}
          id="option"
          name="option"
          className="bg-transparent border border-Inputs rounded-xl p-1 text-titleH2 mb-4 text-lg"
        >
          <option value="categories">select a category</option>
          {inputValue.map((value) => (
            <option key={value.id}>{value.name}</option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-btn w-full text-textColor rounded-xl py-2 "
        >
          add new product
        </button>
      </form>
    </>
  );
}

export default NewProduct;
