import React, { useState } from "react";
import Modal from "../features/Modal";
import NewProduct from "./NewProduct";

function NewCategory({ onChange, onSubmit }) {
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState("");

  return (
    <div className="w-full md:w-1/2">
      <div
        className="text-secondary cursor-pointer text-xl font-semibold my-3 md:mt-8"
        onClick={() => setModal(true)}
      >
        {!modal ? <div>add new category?</div> : ""}
      </div>
      {modal ? (
        <Modal setModal={setModal} title={title} setTitle={setTitle} />
      ) : (
        ""
      )}
      <NewProduct
        onSubmit={onSubmit}
        onChange={onChange}
      />
    </div>
  );
}

export default NewCategory;
