import { Route, Routes } from "react-router";
import "./App.css";
import Layout from "./layout/Layout";
import { HomePage, ReservationPage } from "./pages";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/reservation" element={<ReservationPage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
