import React from "react";

function InputFields({ label, type, name, value ,onChange}) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-amber-950 dark:text-titleH2 my-2 text-lg">
        {label}
      </label>
      <input
        className="input"
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default InputFields;

