import React from "react";
import Table from "react-bootstrap/Table";

//generic reusable table component
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
        </tr>
    })
  }

  return (
    <div>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>{getHeaders()}</tr>
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
