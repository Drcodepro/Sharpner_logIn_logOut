import React from "react";
import classes from "./Login.module.css";

function Input(props) {
  return (
    <div
      className={`${classes.control} ${
        props.checkIsValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.htmlFor}>{props.children}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        onBlur={props.onBlur}
      />
    </div>
  );
}

export default Input;
