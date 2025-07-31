import React from "react";

const Health = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <h1 className="text-danger fw-bold mb-3">Our Health Packages</h1>
          <p className="text-muted">
            Our Health Packages are designed to promote preventive healthcare by
            offering complete, personalized diagnostic solutions at affordable
            prices. These packages are ideal for individuals and families who
            want to stay on top of their health and catch potential issues
            before they become serious concerns. Each package includes a
            carefully selected set of tests based on medical needs, age, gender,
            and lifestyle factors, ensuring you get relevant and meaningful
            health insights.
          </p>
          <p className="text-muted">
            We offer a wide variety of packages including: Heart Health
            Packages: These include ECGs, cholesterol profiles, lipid panels,
            and cardiac stress tests to assess the health of your heart and
            detect early signs of cardiovascular conditions. Women’s Health
            Packages: Specially tailored for different age groups, these
            packages include screenings such as pap smears, mammograms, hormonal
            analysis, thyroid tests, bone density checks, and reproductive
            health assessments to address female-specific health concerns.
            Senior Care Packages: Designed for individuals above 60, these
            packages focus on managing age-related conditions with regular
            monitoring of blood pressure, blood sugar, kidney and liver
            function, vitamin levels, and bone health.
          </p>
          <p className="text-muted">
            Each health package includes consultations with expert physicians
            who help interpret the results and guide you with preventive or
            corrective steps.
          </p>
        </div>

        <div className="col-md-6">
          <img
            src="https://static.vecteezy.com/system/resources/previews/020/487/373/non_2x/clipboard-with-stethoscope-medical-check-form-report-health-checkup-concept-metaphor-illustration-flat-design-eps10-simple-and-modern-style-vector.jpg"
            alt="Expert Doctors Team"
            className="img-fluid rounded shadow h-20 w-200"
          />
        </div>
      </div>
    </div>
  );
};

export default Health;
