import React, { useState } from "react";

const Counter = (props) => {
  const { value } = props;

  const formatCount = () => {
    return value === 0 ? "empty" : value;
  };

  const getBageClasses = () => {
    let classes = "badge m-2 ";
    classes += value === 0 ? "bg-warning" : "bg-primary";
    return classes;
  };
  // const handleIncrement = (props) => {
  //   console.log("handleIncrement");
  //   props.onIncrement(props.value + 1);
  //   // setValue((prevState) => prevState + 1);
  // };
  // const handleDecrement = (props) => {
  //   console.log("handleDecrement");
  //   props.onDecrement(props.value - 1);
  //   // setValue((prevState) => prevState - 1);
  // };

  return (
    <div>
      <span>{props.name}</span>
      <span className={getBageClasses()}>{formatCount()}</span>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => props.onIncrement(props.id)}
      >
        +
      </button>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => props.onDecrement(props.id)}
      >
        -
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => props.onDelete(props.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Counter;
