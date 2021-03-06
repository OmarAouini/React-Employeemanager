import React from "react";
import { GearFill, TrashFill } from "react-bootstrap-icons";
import Table from "react-bootstrap/Table";

//generic reusable table component with edit and delete buttons
const TableComp = (props) => {

  function getKeys() {
    return Object.keys(props.data[0])
  }

  function getHeaders() {
    let keys = getKeys()
    return keys.map((key, index) => {
      return <th key={key}>{key.toUpperCase()}</th>
    })
  }

  function getRowsData() {
    let items = props.data
    let keys = getKeys()
    return items.map((row, index) => {
      return <tr key={index}>
          <RenderRow key={index} data={row} keys={keys}/>
          <td>
            <GearFill color="primary"/>
          </td>
          <td>
            <TrashFill color="danger"/>
          </td>
        </tr>
    })
  }

  return (
    <div className="tableContainer" id="tableContainer">
    <Table striped bordered hover size="sm" className="tableComp" id="tableComp">
      <thead>
        <tr>{getHeaders()}<td>Edit</td><td>Delete</td></tr>
      </thead>
      <tbody>{getRowsData()}</tbody>
    </Table>
    </div>
  );
};

const RenderRow = (props) => {
  return props.keys.map((key, index) =>{
    return <td key={props.data.key} >{props.data[key]}</td>
  })
}

export default TableComp
