import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table, Label, Menu, Icon, Popup, Tab } from "semantic-ui-react";
import { PetsTable } from "./components/PetsTable";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

function App() {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/pets", {
        headers: {
          headers: { "Access-Control-Allow-Origin": "*" },
        },
      })
      .then((response) => setPets(response.data));
  }, []);

  const pages = Math.ceil(pets.length / 10);
  return (
    <div className="App">
      <div className="pets-table">
        <PetsTable pets={pets} />
      </div>
    </div>
  );
}

export default App;
