import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Pets } from "./pages/Pets";
import { PetInfo } from "./pages/PetInfo";
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
      .then((response) => setPets(response.data))
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Pets pets={pets} />} />
          <Route path="/:id" component={PetInfo} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
