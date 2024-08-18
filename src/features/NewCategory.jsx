import React, { useState } from "react";
import Modal from "../features/Modal";
import NewProduct from "./NewProduct";

function NewCategory({
  setInputValue,
  inputValue,
  onChange,
  onSubmit,
}) {
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState("");

  return (
    <div className="w-1/2">
      <div
        className="text-secondary cursor-pointer text-xl font-semibold mt-8"
        onClick={() => setModal(true)}
      >
        {!modal ? <div>add new category?</div> : ""}
      </div>
      {modal ? (
        <Modal
          setModal={setModal}
          title={title}
          setTitle={setTitle}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      ) : (
        ""
      )}
      <NewProduct
        onSubmit={onSubmit}
        onChange={onChange}
        inputValue={inputValue}
      />
    </div>
  );
}

export default NewCategory;
