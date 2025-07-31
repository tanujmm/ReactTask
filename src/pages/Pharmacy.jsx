import React from "react";

const Pharmacy = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <h1 className="text-danger fw-bold mb-3">Pharmacy & Lab</h1>
          <p className="text-muted">
          Our Pharmacy & Lab at One Place service is designed to offer unmatched convenience and efficiency by bringing together essential healthcare facilities under one roof. This integrated setup allows patients to undergo diagnostic tests and collect prescribed medications without the hassle of visiting multiple locations.With our on-site laboratory, you can get a wide range of diagnostic tests done—from routine blood work and urine analysis to advanced screenings—quickly and accurately. The lab is equipped with modern technology to ensure precise results, and reports are often available the same day or within a few hours, depending on the test.


          </p>
          <p className="text-muted">
          Right beside the lab is our fully stocked in-house pharmacy. Once your consultation or test is complete, you can immediately fill your prescriptions, eliminating the need to search for an external medical store. The pharmacy is managed by trained pharmacists who ensure the correct dosage, provide guidance on medicine usage, and help with any questions regarding your prescription.
          </p>
          <p className="text-muted">
          This seamless experience not only saves you valuable time but also supports better treatment outcomes by ensuring that you start your medication or follow-up testing without delay. Whether it's a routine check-up or ongoing treatment, having both the lab and pharmacy in one place simplifies the process and enhances your overall healthcare experience.
          </p>
        </div>

        <div className="col-md-6">
          <img
            src="https://previews.123rf.com/images/microone/microone1911/microone191100112/134975752-laboratory-concept-scientists-pharmaceutical-tests-vector-illustration-medicine-pharmacy-medical.jpg"
            alt="Expert Doctors Team"
            className="img-fluid rounded shadow h-20 w-200"
          />
        </div>
      </div>
    </div>
  );
};

export default Pharmacy;
