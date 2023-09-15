export interface ITable {
    id: string;
    d: string
    isReserved: boolean;
}

export interface IBigTableProps {
    table: ITable;
}

export interface IReservedTable {
    id: number;
    name: string;
    phone: string;
    numOfPeople: string;
    date: string;
    time: string;
    table: string;
    isReserved: boolean;
}
