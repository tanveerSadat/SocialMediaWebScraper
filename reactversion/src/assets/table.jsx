import * as React from "react";
import {useTable, useGlobalFilter} from "react-table";
import dataFromFile from "./job_descriptions.json";
import Button from '@mui/material/Button';
import './table.css'
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router


function Table(){
    const navigate = useNavigate(); // Create a navigate function

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
        Header: "",
        accessor: "links",
        Cell: () => (
          <Button variant="contained" className="myButton" style={{ backgroundColor: "#577399" }} > News </Button>
        ),
      },
    ],
    []); //Setup columns, Return Array
  
    const {getTableBodyProps, getTableProps , headerGroups, rows, prepareRow, setGlobalFilter} = useTable({columns,data}, useGlobalFilter); //usetable hook returns a bunch of functions

    //create a state
    const [filterInput, setFilterInput] = React.useState("");
    const tbodyProps = getTableBodyProps();

    //update filter
    const searchChange = e => {
        const value = e.target.value || undefined;
        setGlobalFilter(value);
        setFilterInput(value);
    };
  
  // ... (previous code)

    const handleButtonClick = async (jobTitle, links) => {
      try {
        // Send a POST request to your backend with jobTitle
        const response = await fetch('http://127.0.0.1:8000/scraped/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ job_title: jobTitle })
        });
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const data = await response.json();
        const receivedLinks = data.links.split(' ');
        console.log(receivedLinks);
    
        // Navigate to the NewPage with the received links
        navigate("/display-jobs", { state: { links: receivedLinks, jobTitle: jobTitle } });
      } catch (error) {
        console.error(error);
      }
    };

  return (
    <div className="Table">
      <div className="Table-container">
        <input 
          value={filterInput}
          onChange={searchChange}
          placeholder={"Filter Results"}
        />
        <div className="Table-wrapper">
          <table {...getTableProps()}>
            <thead>
              {/* Loop through header groups and render each group as a table row */}
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {/* Loop through header columns and render each one as a table header cell */}
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>
                      {/* Get each specific column */}
                      {column.render("Header")}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            {/* Table body section */}
            <tbody {...tbodyProps}>
              {/* Loop through rows and render each row as a table row */}
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                       <td {...cell.getCellProps()}>
                       {cell.column.id === "links" ? (
                         <Button
                           variant="contained"
                           className="myButton"
                           style={{ backgroundColor: "#577399" }}
                           onClick={() => handleButtonClick(row.original.job_title, row.original.links)}
                         >
                           News
                         </Button>
                       ) : (
                         cell.render("Cell")
                       )}
                     </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

}

export default Table