import React from "react";

const Patients = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <h1 className="text-success fw-bold mb-3">International Patients</h1>
          <p className="text-muted">
            At SmartCare, we are proud to serve patients from across the globe
            by offering a seamless and compassionate healthcare experience
            tailored specifically for international visitors. Understanding the
            unique challenges that come with seeking medical care abroad, we
            provide end-to-end support to ensure a stress-free journey.
          </p>
          <p className="text-muted">
            From assisting with medical visa applications to arranging travel
            and accommodation, our dedicated international patient team is here
            to guide you every step of the way. We offer multilingual support to
            eliminate language barriers and ensure clear communication
            throughout your treatment. Our experienced doctors collaborate
            closely with patients to design personalized treatment plans that
            meet both medical and cultural needs.
          </p>
          <p className="text-muted">
            With remote consultation options available before and after your
            visit, you can stay connected with our specialists from anywhere in
            the world. At SmartCare, we are committed to making your experience
            as smooth, safe, and successful as possible — because your health
            deserves global care.
          </p>
        </div>

        <div className="col-md-6">
          <img
            src="https://previews.123rf.com/images/aukid/aukid2302/aukid230202249/199189232-world-health-day-the-key-to-global-wellness-cartoon-doctor-treating-patient.jpg"
            alt="Expert Doctors Team"
            className="img-fluid rounded shadow h-20 w-200"
          />
        </div>
      </div>
    </div>
  );
};

export default Patients;
