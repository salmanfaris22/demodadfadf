// Table.tsx
import React, { useState } from "react";
import TableRow from "./TableRow";
import Pagination from "./Pagination";
import classes from "./Table.module.scss";
import { Partner } from "./type";
// types.ts

interface TableProps {
  data: Partner[];
  rowsPerPage: number;
}
const columnHeaders = [
    { title: "Name", key: "name" },
    { title: "Description", key: "description" },
    { title: "Date", key: "date" },
    { title: "Email", key: "email" },
    { title: "Plan", key: "plan" },
    { title: "Total Conversations", key: "totalConversations" },
    { title: "Action", key: "action" }
  ];

const Table: React.FC<TableProps> = ({ data, rowsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = data.slice(indexOfFirstRow, indexOfLastRow);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className={classes.tableContainer}>
      <table className={classes.table}>
        <thead>
        <tr>
            {columnHeaders.map((header) => (
              <th key={header.key}>
                <div className={classes.tableName}>
                  {header.title}
                  <img
                    className={classes.arrow}
                    src="/assets/images/table/arrow.png"
                    alt="arrow"
                  />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentRows.map((row, index) => (
            <TableRow key={index} tableID={index} partner={row} />
          ))}
        </tbody>
      </table>
      <Pagination
        totalRows={data.length}
        rowsPerPage={rowsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Table;
