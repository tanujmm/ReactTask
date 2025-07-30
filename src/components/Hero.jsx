// const Hero = () => (
//   <section className="text-center py-20 bg-blue-50">
//     <h1 className="text-4xl font-bold mb-4">Welcome to SmartCare Hospital</h1>
//     <p className="text-lg mb-6">
//       Compassionate care, advanced medicine, close to home.
//     </p>
//     <button className="px-6 py-2 bg-blue-600 text-white rounded">
//       Book Appointment
//     </button>
//   </section>
// );

// export default Hero;
import React from "react";
import Appointment from "../pages/Appointment";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container my-5">
      {" "}
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        {" "}
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
          {" "}
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
            Welcome to SmartCare Hospital
          </h1>{" "}
          <p className="lead">
            Compassionate care, advanced medicine, close to home.
          </p>{" "}
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            {" "}
            <NavLink to="/appointment">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
              >
                Book Appointment
              </button>{" "}
            </NavLink>
            <NavLink to={"/call"}>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                CallToAction
              </button>{" "}
            </NavLink>
          </div>{" "}
        </div>{" "}
        <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
          {" "}
          <img
            className="rounded-lg-3"
            src="https://lh3.googleusercontent.com/X1jH68ElF5VsHlTsLSN_vHfMc9vAJZLivcGJg1Yc7LTxNcnOgkZEKcJ_vl0rm26f4U1u9vWbf3kkqF18YgYhWw3v4dXH8M_T0Xgzcw=w2880-e365-pa-nu"
            alt=""
            width="720"
          />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default Hero;
