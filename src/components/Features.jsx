const features = [
  {
    title: "24x7 Emergency",
    desc: "Always ready for critical care with fully-equipped emergency rooms, rapid response teams, and immediate medical attention around the clock.",
    ref: "/emergency",
  },
  {
    title: "Expert Doctors",
    desc: "Our team comprises highly qualified specialists with years of experience, committed to delivering accurate diagnoses and effective treatments.",
    ref: "/experts",
  },
  {
    title: "International Patients",
    desc: "We offer dedicated support for international patients including medical visa assistance, multi-language support, and world-class treatment plans tailored to global needs.",
    ref: "/patients",
  },
  {
    title: "Modern Operation Theatre",
    desc: "We have ultra-modern, sterile operating rooms designed to support complex surgeries with minimal risk and faster recovery.",
  },
  {
    title: "Health Packages",
    desc: "Choose from a wide range of affordable wellness check-ups, including heart health, women’s health, senior care, and full-body scans.",
  },
  {
    title: "Pharmacy & Lab at One Place",
    desc: "Save time with on-site pharmacy and lab services, ensuring that all your diagnostic and medication needs are met in one visit.",
  },
];

const Features = () => (
  <div className="container px-4 py-5" id="hanging-icons">
    <h2 className="pb-2 border-bottom">Features</h2>

    <div className="row g-5 py-5 row-cols-1 row-cols-lg-3">
      {features.map((f, i) => (
        <div className="col d-flex align-items-start" key={i}>
          <div className="icon-square text-body-emphasis bg-body-secondary d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
            {/* <svg className="bi" width="1em" height="1em" aria-hidden="true">
              <use xlinkHref="#emergency"></use>
            </svg> */}
            <i
              className="bi bi-hospital"
              style={{ fontSize: "2rem", color: "#0d6efd" }}
            ></i>
          </div>
          <div>
            <h3 className="fs-2 text-body-emphasis">{f.title}</h3>
            <p>{f.desc}</p>
            <a href={f.ref} className="btn btn-secondary">
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Features;
