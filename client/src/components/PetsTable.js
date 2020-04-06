import React, { useState } from "react";
import { Table, Label, Menu, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function PetsTable(props) {
  const [page, setPage] = useState(0);
  const [whichSort, setWhichSort] = useState("id");
  const [sortById, setSortById] = useState(false);
  const [sortByName, setSortByName] = useState(false);

  let pets = props.pets;
  const pages = Math.ceil(pets.length / 10);

  /***
   * quick logic solution to sort, if I spent more time on this app,
   * I want to use useContext to create one single source of truth for the
   * state that would be able to sort pets from higher in context,
   * instead of prop drilling, and using these bool states to determine
   * sort order
   */

  if (whichSort === "id") {
    if (sortById) {
      pets.sort((a, b) => b.id - a.id);
    } else pets.sort((a, b) => a.id - b.id);
  } else {
    if (sortByName) {
      pets.sort((a, b) => a.name.localeCompare(b.name));
    } else pets.sort((a, b) => b.name.localeCompare(a.name));
  }

  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell
            className="sort-header"
            onClick={() => {
              setWhichSort("id");
              setSortById(!sortById);
            }}
          >
            Id
          </Table.HeaderCell>
          <Table.HeaderCell
            className="sort-header"
            onClick={() => {
              setWhichSort("name");
              setSortByName(!sortByName);
            }}
          >
            Name
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {pets.map((pet, key) =>
          key < (page + 1) * 10 && key >= page * 10 ? (
            <Table.Row>
              <Table.Cell>
                <Link to={`/${pet.id}`}>
                  <Label ribbon>{pet.id}</Label>
                </Link>
              </Table.Cell>
              <Table.Cell>
                <Link to={`/${pet.id}`}>{pet.name}</Link>
              </Table.Cell>
            </Table.Row>
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
                  disabled={page >= Math.ceil(pets.length / 10) - 1}
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
