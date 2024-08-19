import React, { useContext } from "react";
import InputFields from "../ui/InputFields";
import { MyContext } from "../App";

function modal({ setModal, title, setTitle }) {
  const { Values } = useContext(MyContext);
  const [inputVal, setInputVal] = Values;
  let nextId = 0;

  return (
    <div>
      <h2 className="text-2xl font-bold text-textColor mb-2">
        Add new category
      </h2>
      <form className="bg-modal flex flex-col rounded-lg p-4">
        <InputFields
          label="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="" className="text-titleH2 my-2 text-lg">
          description
        </label>
        <textarea
          id="description"
          name="description"
          className="input w-full"
          rows="2"
          cols="50"
        ></textarea>
        <div className="mt-5 flex justify-around gap-x-3 ">
          <button
            className="bg-transparent py-1 w-full border border-Inputs rounded-xl text-titleH2"
            onClick={() => setModal(false)}
          >
            cancel
          </button>
          <button
            type="submit"
            className="bg-btn w-full text-textColor rounded-xl"
            onClick={(e) => {
              e.preventDefault();
              setInputVal([...inputVal, { id: nextId++, name: title }]);
            }}
          >
            add category
          </button>
        </div>
      </form>
    </div>
  );
}

export default modal;
