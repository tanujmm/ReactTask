import React, { useRef } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Appointment = () => {
  const name = useRef("");
  const email = useRef("");
  const address = useRef("");
  const address2 = useRef("");
  const contact = useRef("");
  const date = useRef("");
  const gender = useRef("");

  const formSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: name.current.value,
      email: email.current.value,
      address: address.current.value,
      address2: address2.current.value,
      contact: contact.current.value,
      date: date.current.value,
      gender: gender.current.value,
    };
    console.log(formData);

    name.current.value = "";
    email.current.value = "";
    address.current.value = "";
    address2.current.value = "";
    contact.current.value = "";
    date.current.value = "";
    gender.current.value = "Choose...";

    toast.success("Application Submitted Successfully", {
      position: "top-center",
    });
  };

  return (
    <div className="container h-5/5">
      <motion.h1
        className="text-2xl font-bold text-center mb-6 mt-3"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Fill Your Details For The Appointment
      </motion.h1>

      <motion.div
        className="align-items-center bg-blue-50 p-8 m-2"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <form className="row g-3 margin-auto" onSubmit={formSubmit}>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">
              Full Name
            </label>
            <input
              type="text"
              className="form-control"
              id="inputEmail4"
              ref={name}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputPassword4"
              ref={email}
              required
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              ref={address}
              required
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress2" className="form-label">
              Address 2
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
              ref={address2}
              required
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputCity" className="form-label">
              Contact Number
            </label>
            <input
              type="number"
              className="form-control"
              id="inputCity"
              placeholder="Enter your Contact No."
              ref={contact}
              required
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="inputState" className="form-label">
              Appointment Date
            </label>
            <input
              type="date"
              className="form-control"
              id="inputDate"
              ref={date}
              required
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="inputZip" className="form-label">
              Gender
            </label>
            <select
              id="inputGender"
              className="form-select"
              ref={gender}
              required
            >
              <option defaultValue>Choose...</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
                required
              />
              <label className="form-check-label" htmlFor="gridCheck">
                All Details Legit
              </label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-dark">
              Submit
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default Appointment;
