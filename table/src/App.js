import * as React from "react";
import {useTable} from "react-table";
import dataFromFile from "./MOCK_DATA.json";
import Button from '@mui/material/Button';
import './App.css';

function App() {
  //useMemo returns "memorized" data between re-renders
  const data = React.useMemo(() => dataFromFile, []); //Setup data if getting from api do it here
  //columns
  const columns = React.useMemo(() => [
    {
      Header: "ID", //what is displayed
      accessor: "id" //what is in json
    },
    {
      Header: "First Name",
      accessor: "first_name"
    },
    {
      Header: "Last Name",
      accessor: "last_name"
    },
    {
      Header: "Gender",
      accessor: "gender"
    },
    {
      Header: "Link",
      accessor: "links",
      Cell: () => (
        <Button variant="contained" className="myButton" style={{ backgroundColor: "#577399" }} > Click Me </Button>
      ),
    },
  ],
  []); //Setup columns, Return Array

  const {getTableBodyProps, getTableProps , headerGroups, rows, prepareRow} = useTable({columns,data});

  return (
    <div className="App">
      <div className="container">
        <table{...getTableProps()}> 
          <thead>
            {/* Loop through header groups and render each group as a table row */}
            {headerGroups.map((headerGroup)=> ( //loop through header groups
              <tr {...headerGroup.getHeaderGroupProps()}>
                {/* Loop through header columns and render each one as a table header cell */}
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
           {/* Table body section */}
          <tbody {...getTableBodyProps()}>
            {/* Loop through rows and render each row as a table row */}
            {rows.map((row) => {
              prepareRow(row)
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                </tr>
              )
            })}

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
