import React from "react";

const Theatre = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <h1 className="text-danger fw-bold mb-3">Modern Operation Theatre</h1>
          <p className="text-muted">
            Our modern operation theatre is a state-of-the-art medical facility
            equipped with advanced technology and infrastructure to ensure the
            highest standards of safety, precision, and care during surgical
            procedures. The theatre is designed to maintain a completely sterile
            environment, minimizing the risk of infections and promoting optimal
            outcomes for patients. Every aspect of the operating room, from its
            air filtration system to the materials used in construction, is
            focused on cleanliness and contamination control.
          </p>
          <p className="text-muted">
            Inside the operation theatre, you will find cutting-edge surgical
            equipment that supports a wide range of procedures, from routine to
            highly complex surgeries. The room is also equipped with
            high-definition imaging systems, integrated monitoring devices, and
            real-time communication tools that allow surgeons to make
            well-informed decisions during operations.
          </p>
          <p className="text-muted">
            Specialized lighting, temperature regulation, and ergonomic design
            further enhance the comfort and efficiency of the surgical team.
          </p>
        </div>

        <div className="col-md-6">
          <img
            src="https://thumbs.dreamstime.com/b/cartoon-vector-illustration-interior-surgery-operation-room-separated-layers-d-graphic-77082236.jpg"
            alt="Expert Doctors Team"
            className="img-fluid rounded shadow h-20 w-200"
          />
        </div>
      </div>
    </div>
  );
};

export default Theatre;
