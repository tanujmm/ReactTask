import React from "react";

const Experts = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <h1 className="text-danger fw-bold mb-3">Expert Doctors</h1>
          <p className="text-muted">
            Our team comprises highly qualified specialists with years of
            clinical experience across various medical disciplines. From
            cardiology and orthopedics to neurology and pediatrics, each doctor
            is dedicated to providing compassionate, evidence-based care
            tailored to individual needs.
          </p>
          <p className="text-muted">
            Our experts stay updated with the latest medical advancements and
            utilize state-of-the-art diagnostic tools to ensure precise
            evaluations. Whether it’s a routine check-up or a complex surgical
            procedure, you can trust our doctors to deliver personalized care
            with the highest standards of professionalism and ethics.
          </p>
          <p className="text-muted">
            Day or night, weekday or weekend — we’re always here when you need
            us the most.
          </p>
        </div>

        <div className="col-md-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsbzjCbdFlYKQg4O1EXx41DLxFZ8ngYBUsAw&s"
            alt="Expert Doctors Team"
            className="img-fluid rounded shadow h-20 w-200"
          />
        </div>
      </div>
    </div>
  );
};

export default Experts;
