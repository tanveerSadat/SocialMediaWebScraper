import * as React from "react";
import {useTable, useGlobalFilter} from "react-table";
import dataFromFile from "../job_descriptions.json";
import Button from '@mui/material/Button';
import './Table.css'


function Table(){


    const data = React.useMemo(() => dataFromFile, []); //Setup data if getting from api do it here
    //columns
    const columns = React.useMemo(() => [
      {
        Header: "Job Title", //what is displayed
        accessor: "job_title" //what is in json
      },
      {
        Header: "Experience",
        accessor: "experience"
      },
      {
        Header: "Qualifications",
        accessor: "qualifications"
      },
      {
        Header: "Salary",
        accessor: "salary"
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
  
    const {getTableBodyProps, getTableProps , headerGroups, rows, prepareRow, setGlobalFilter} = useTable({columns,data}, useGlobalFilter); //usetable hook returns a bunch of functions

    //create a state
    const [filterInput, setFilterInput] = React.useState("");

    //update filter
    const searchChange = e => {
        const value = e.target.value || undefined;
        setGlobalFilter(value);
        setFilterInput(value);
    };
  
    return(
        <div className="Table">
            <div className="Table-container">
                <input 
                    value={filterInput}
                    onChange={searchChange}
                    placeholder={"Filter Results"}
                />
                <table{...getTableProps()}> 
                    <thead>
                        {/* Loop through header groups and render each group as a table row */}
                        {headerGroups.map((headerGroup)=> ( //headerGroups is an array of all the headers, for each header group return back a table row (tr) only 1 header group
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {/* Loop through header columns and render each one as a table header cell */}
                            {headerGroup.headers.map((column) => (
                            <th {...column.getHeaderProps()}>
                                {/*Get each specific column */}
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

export default Table