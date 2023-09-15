import React, { useContext, useEffect } from "react";
import { BigTable } from "../Table/Table";
import { ITable } from "../../types";
import { TableContext } from "../../context/TableContext";

const viewbox: string = "0 0 2240 1340";

export const BigTableList: React.FC = () => {
  const { getTables, tables } = useContext(TableContext);

  useEffect(() => {
    getTables();
  }, []);

  return (
    <div>
      <svg viewBox={viewbox}>
        {tables.map((bigTable: ITable) => (
          <BigTable key={bigTable.id} table={bigTable} />
        ))}
      </svg>
    </div>
  );
};
