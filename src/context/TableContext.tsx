import { Dispatch, SetStateAction, createContext, useState } from "react";
import React from "react";
import { IReservedTable, ITable } from "../types";
import axios from "axios";

interface ITableContext {
  getTables: () => Promise<void>;
  getTableId: (id: string) => void;
  setTableNum: Dispatch<SetStateAction<string>>;
  reserveBigTable: (table: IReservedTable) => Promise<void>;
  tables: ITable[];
  tableNum: string;
}

const URL: string = "http://localhost:3030";

export const TableContext = createContext({} as ITableContext);

export const TableProvider = ({ children }: { children: React.ReactNode }) => {
  const [tables, setTables] = useState<ITable[]>([]);
  const [tableNum, setTableNum] = useState<string>("");

  const getTableId = (id: string) => setTableNum(id);

  const getTables = async () => {
    try {
      const { data } = await axios.get(`${URL}/tables`);
      setTables(data);
    } catch (error) {
      console.log(error);
    }
  };

  const reserveBigTable = async (table: IReservedTable) => {
    try {
      const reservedTable = { ...table };
      await axios.post(`${URL}/reservedTables`, reservedTable);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TableContext.Provider
      value={{
        getTables,
        getTableId,
        setTableNum,
        reserveBigTable,
        tables,
        tableNum,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};
