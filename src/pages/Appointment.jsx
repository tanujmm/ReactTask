import React from "react";
import { useRef } from "react";
import { toast } from "react-toastify";
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
    // formData = {};
  };

  return (
    <div className="container h-5/5">
      <h1 className="text-2xl font-bold text-center mb-6 mt-3">
        Fill Your Details For The Appointment
      </h1>
      <div className="align-items-center bg-blue-50 p-8 m-2">
        <form class="row g-3 margin-auto" onSubmit={formSubmit}>
          <div class="col-md-6">
            <label for="inputEmail4" class="form-label">
              Full Name
            </label>
            <input
              type="text"
              class="form-control"
              id="inputEmail4"
              ref={name}
              required
            />
          </div>
          <div class="col-md-6">
            <label for="inputPassword4" class="form-label">
              Email
            </label>
            <input
              type="email"
              class="form-control"
              id="inputPassword4"
              ref={email}
              required
            />
          </div>
          <div class="col-12">
            <label for="inputAddress" class="form-label">
              Address
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
              ref={address}
              required
            />
          </div>
          <div class="col-12">
            <label for="inputAddress2" class="form-label">
              Address 2
            </label>
            <input
              type="text"
              class="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
              ref={address2}
              required
            />
          </div>
          <div class="col-md-6">
            <label for="inputCity" class="form-label">
              Contact Number
            </label>
            <input
              type="number"
              class="form-control"
              id="inputCity"
              placeholder="Enter your Contact No."
              ref={contact}
              required
            />
          </div>
          <div class="col-md-4">
            <label for="inputState" class="form-label">
              Appointment Date
            </label>
            <input
              type="date"
              class="form-control"
              id="inputCity"
              ref={date}
              required
            />
          </div>
          <div class="col-md-2">
            <label for="inputZip" class="form-label">
              Gender
            </label>
            <select id="inputGender" class="form-select" ref={gender} required>
              <option selected>Choose...</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <div class="col-12">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="gridCheck"
                required
              />
              <label class="form-check-label" for="gridCheck">
                All Details Legit
              </label>
            </div>
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-dark">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
