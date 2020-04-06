import React from "react";

export function Details(props) {
  return (
    <div className="Details">
      <h3>Id</h3>
      <div>{props.id}</div>
      <h3>Name</h3>
      <div>{props.name}</div>
      <h3>Weight</h3>
      <div>{props.weight}</div>
      <h3>Age</h3>
      <div>{props.age}</div>
    </div>
  );
}
