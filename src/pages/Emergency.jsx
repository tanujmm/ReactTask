import React from "react";

const Emergency = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <h1 className="text-primary fw-bold mb-3">24x7 Emergency Services</h1>
          <p className="text-muted">
            Our emergency department is always ready to handle any critical
            medical situation. From trauma care to cardiac emergencies, our
            expert team and advanced equipment ensure immediate attention around
            the clock.
          </p>
          <p className="text-muted">
            We maintain international standards in emergency response, providing
            timely, safe, and compassionate care when every second counts. Our
            facility is supported by a dedicated ambulance fleet and a rapid
            response team for faster action and better outcomes.
          </p>
          <p className="text-muted">
            Day or night, weekday or weekend — we’re always here when you need
            us the most.
          </p>
        </div>

        <div className="col-md-6">
          <img
            src="https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?auto=format&fit=crop&w=800&q=80"
            alt="Emergency Services"
            className="img-fluid rounded shadow"
          />
        </div>
      </div>
    </div>
  );
};

export default Emergency;
