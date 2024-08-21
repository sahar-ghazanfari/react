import React, { useContext, useState } from "react";
import Modal from "../features/Modal";
import NewProduct from "./NewProduct";

function NewCategory({ onChange, onSubmit }) {
  const [modal, setModal] = useState(false);

  return (
    <div
    //  className="w-full md:w-1/2"
    >
      <div
        className="text-amber-950 dark:text-secondary cursor-pointer text-xl font-semibold my-3"
        onClick={() => setModal(true)}
      >
        {!modal ? <div>add new category?</div> : ""}
      </div>
      {modal ? <Modal setModal={setModal} /> : ""}
      <NewProduct onSubmit={onSubmit} onChange={onChange} />
    </div>
  );
}

export default NewCategory;
