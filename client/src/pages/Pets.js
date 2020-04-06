import React from "react";
import PetsTable from "../components/PetsTable";

export function Pets(props) {
  return (
    <div className="pets-page">
      <h1>Pets</h1>
      <div className="pets-table">
        <PetsTable pets={props.pets} />
      </div>
    </div>
  );
}
