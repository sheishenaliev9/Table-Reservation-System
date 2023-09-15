import MapImg from "../../assets/Karaoke-shema.jpeg";
import { BigTableList } from "../../components/TableList/TableList";
import { useContext, useState } from "react";
import { IReservedTable } from "../../types";
import { TableContext } from "../../context/TableContext";
import { useForm } from "react-hook-form";
import styles from "./ReservationPage.module.css";

const NEW_TABLE: IReservedTable = {
  id: 0,
  name: "",
  phone: "",
  numOfPeople: "",
  date: "",
  time: "",
  table: "",
  isReserved: false,
};

export const ReservationPage = () => {
  const [inputs, setInputs] = useState<IReservedTable>(NEW_TABLE);
  // const [ isTableReseved, setIsTableReseved ] = useState<boolean>(NEW_TABLE.isReserved);

  const { register, handleSubmit, formState } = useForm();

  const { tableNum, setTableNum, reserveBigTable } = useContext(TableContext);

  const submitHandle = () => {
    reserveBigTable({ ...inputs, table: tableNum });

    setInputs(NEW_TABLE);
    setTableNum("");
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.map__wrapper}>
        <BigTableList />
        <img src={MapImg} alt="" />
      </div>

      <div className={styles.reservation__block}>
        <h2>to choose a table, click the desired table in the picture above</h2>
        <h3>Welcome your visit</h3>
        <form onSubmit={handleSubmit(submitHandle)}>
          <div className={styles.form__inputs}>
            <input
              {...(register("name"), { required: true })}
              style={formState.errors?.name ? { border: "1px solid red" } : {}}
              value={inputs.name}
              onChange={(e) => setInputs({ ...inputs, name: e.target.value })}
              type="text"
              placeholder="Your name"
            />
            <input
              value={inputs.phone}
              onChange={(e) => setInputs({ ...inputs, phone: e.target.value })}
              {...(register("phone"),
              {
                required: true,
                pattern: {
                  value: /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                  message: "Please enter a valid phone number",
                },
              })}
              style={formState.errors?.phone && { border: "1px solid red" }}
              type="number"
              placeholder="Your phone"
            />
            <input
              {...register("numOfPeople", { required: true, min: 1, max: 8 })}
              style={
                formState.errors?.numOfPeople && { border: "1px solid red" }
              }
              value={inputs.numOfPeople}
              onChange={(e) =>
                setInputs({ ...inputs, numOfPeople: e.target.value })
              }
              type="number"
              placeholder="Number of people"
            />
            <input
              value={inputs.date}
              onChange={(e) => setInputs({ ...inputs, date: e.target.value })}
              type="text"
              placeholder="date"
            />
            <input
              value={tableNum}
              onChange={() => setInputs({ ...inputs, table: tableNum })}
              type="number"
              placeholder="Table"
              disabled
            />
            <input
              value={inputs.time}
              onChange={(e) => setInputs({ ...inputs, time: e.target.value })}
              type="text"
              placeholder="Time"
            />
          </div>
          <div>
            <button type="submit">Book Reservation</button>
          </div>
        </form>
      </div>
    </div>
  );
};
