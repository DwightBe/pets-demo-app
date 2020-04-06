import React, { useEffect, useState } from "react";
import { Card } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function PetInfo(props) {
  let { id } = useParams();
  const [pet, setPet] = useState([
    { id: null, name: "", weight: null, age: null },
  ]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/pets/${id}}`, {
        headers: {
          headers: { "Access-Control-Allow-Origin": "*" },
        },
      })
      .then((response) => setPet(response.data))
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div className="details-page">
      <span>Here are the details of your pet.</span>
      <Card className="card">
        <Card.Header>
          <h1>{pet[0].name}</h1>
        </Card.Header>
        <Card.Content>
          <h3>Id</h3>
          <div>{pet[0].id}</div>
          <h3>Weight</h3>
          <div>{pet[0].weight}</div>
          <h3>Age</h3>
          <div>{pet[0].age}</div>
        </Card.Content>
      </Card>
    </div>
  );
}
