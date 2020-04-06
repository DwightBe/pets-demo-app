import React, { useState } from "react";
import { Table, Label, Menu, Icon, Popup } from "semantic-ui-react";
import { Details } from "./Details";

export function PetsTable(props) {
  const [page, setPage] = useState(0);
  const pages = Math.ceil(props.pets.length / 10);
  console.log(props.pets);
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Id</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {props.pets.map((pet, key) =>
          key < (page + 1) * 10 && key >= page * 10 ? (
            <Popup
              className={"popup"}
              content={
                <Details
                  id={pet.id}
                  name={pet.name}
                  weight={pet.weight}
                  age={pet.age}
                />
              }
              on="click"
              trigger={
                <Table.Row>
                  <Table.Cell>
                    <Label ribbon>{pet.id}</Label>
                  </Table.Cell>
                  <Table.Cell>{pet.name}</Table.Cell>
                </Table.Row>
              }
            />
          ) : (
            ""
          )
        )}
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan="2">
            <Menu floated="right" pagination>
              <Menu.Item as="a" icon>
                <Icon
                  name="chevron left"
                  disabled={page === 0}
                  onClick={() => setPage(page - 1)}
                />
              </Menu.Item>
              {[...Array(pages)].map((e, i) => (
                <Menu.Item key={i} onClick={() => setPage(i)}>
                  {i + 1}
                </Menu.Item>
              ))}
              <Menu.Item icon>
                <Icon
                  name="chevron right"
                  disabled={page >= Math.ceil(props.pets.length / 10) - 1}
                  onClick={() => setPage(page + 1)}
                />
              </Menu.Item>
            </Menu>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
}
