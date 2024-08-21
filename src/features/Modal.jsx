import React, { useContext } from "react";
import InputFields from "../ui/InputFields";
import { MyContext } from "../App";

function modal({ setModal }) {
  const { Values, Titles } = useContext(MyContext);
  const [inputVal, setInputVal] = Values;
  const [titleVal, setTitleVal] = Titles;
  let nextId = 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!titleVal) return null;
    setInputVal([...inputVal, { id: nextId++, name: titleVal }]);
  };

  return (
    <div>
      <h2 className="text-xl font-semibold md:text-2xl md:font-bold text-amber-950   dark:text-textColor mb-2">
        Add new category
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-modalLight dark:bg-modal flex flex-col rounded-lg p-4"
      >
        <InputFields
          label="title"
          type="text"
          value={titleVal}
          onChange={(e) => setTitleVal(e.target.value)}
        />
        <label
          htmlFor=""
          className="text-amber-950 dark:text-titleH2 my-2 text-lg"
        >
          description
        </label>
        <textarea
          id="description"
          name="description"
          className="input border-amber-950 w-full"
          rows="2"
          cols="50"
        ></textarea>
        <div className="mt-5 flex justify-around gap-x-3 ">
          <button
            className="bg-transparent py-1 w-full border border-amber-950 dark:border-Inputs rounded-xl text-amber-950 dark:text-titleH2"
            onClick={() => setModal(false)}
          >
            cancel
          </button>
          <button
            type="submit"
            className="bg-amber-950 dark:bg-btn w-full text-white dark:text-textColor rounded-xl"
          >
            add category
          </button>
        </div>
      </form>
    </div>
  );
}

export default modal;
