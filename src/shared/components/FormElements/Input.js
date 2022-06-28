import React from "react";

import "./Input.css";

const Input = (props) => {
  const changeHandler = (event) => {};

  return (
    <div className={`form-control`}>
      <label htmlFor={props.id}>{props.label}</label>
      {props.element === "input" ? (
        <input
          id={props.id}
          type={props.type}
          placeholder={props.placeholder}
          onChange={changeHandler}
        />
      ) : (
        <textarea
          id={props.id}
          rows={props.rows || 3}
          onChange={changeHandler}
        />
      )}
    </div>
  );
};

export default Input;
