import React from "react";

function modal({
  setModal,
  title,
  setTitle,
  inputValue,
  setInputValue,
}) {
  let nextId = 0;

  return (
    <div>
      <h2 className="text-2xl font-bold text-textColor mb-2">
        Add new category
      </h2>
      <form className="bg-modal flex flex-col rounded-lg p-4">
        <label htmlFor="" className="text-titleH2 my-2 text-lg">
          title
        </label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input"
          type="text"
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
              setInputValue([...inputValue, { id: nextId++, name: title }]);
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
