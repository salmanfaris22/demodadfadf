// TableRow.tsx
import React from "react";
import { Partner } from "./type";

import classes from "./Table.module.scss";
interface TableRowProps {
    tableID:number;
  partner: Partner;
}

const TableRow: React.FC<TableRowProps> = ({ tableID,partner }) => {
  return (
    <tr
    style={tableID % 2 === 1 ? { background: "#F9F9FC" } : {}}
    >
      <td
      className={classes.name}
      >
      <img 
        className={classes.icon}
      src={partner.imageUrl}  alt={partner.name} />
      {partner.name}
     
      </td>
      <td>{partner.description}</td>
      <td>{partner.date}</td>
      <td>{partner.email}</td>
      <td>{partner.plan}</td>
      <td>{partner.totalConversation}</td>
      <td>
       <div className={classes.tablebtn}>
       <div className={classes.details}>View Details</div>
      <img 
      className={classes.deleteicon}
      src="/assets/images/table/delete.png" alt="delete" />
       </div>
      </td>
    </tr>
  );
};

export default TableRow;
