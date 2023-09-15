import React from "react";
import { useContext } from "react";
import { IBigTableProps } from "../../types";
import { TableContext } from "../../context/TableContext";



export const BigTable: React.FC<IBigTableProps> = ({ table }) => {
  const { getTableId } = useContext(TableContext);


  return (
        <path
          className="table"
            onClick={() => getTableId(table.id)}
          d={table.d}
        />
  );
};
