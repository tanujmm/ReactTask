import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import Appointment from "./pages/Appointment";
import Emergency from "./pages/Emergency";
import Experts from "./pages/Experts";
import Patients from "./pages/Patients";
import CallToAction from "./pages/CallToAction";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="appointment" element={<Appointment />} />
      <Route path="/emergency" element={<Emergency />} />
      <Route path="/experts" element={<Experts />} />
      <Route path="/patients" element={<Patients />} />
      <Route path="/call" element={<CallToAction />} />
    </Routes>
  );
};

export default App;
