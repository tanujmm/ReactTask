import React from "react";

const Emergency = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4 mb-md-0">
          <h1 className="text-primary fw-bold mb-3">24x7 Emergency Services</h1>
          <p className="text-muted">
            Our emergency department operates round the clock, fully equipped to
            manage any life-threatening condition with utmost urgency and
            precision. Whether it’s trauma from accidents, severe allergic
            reactions, strokes, or cardiac arrests, our skilled emergency
            physicians and trained support staff are always on standby to
            deliver critical care without delay.We combine state-of-the-art
            monitoring and resuscitation equipment with streamlined triage
            protocols to reduce wait times and prioritize patients based on the
            severity of their condition. Our commitment to international
            standards in emergency response ensures that you or your loved ones
            receive prompt, safe, and effective medical intervention at any
            hour.
          </p>
          <p className="text-muted">
            Our emergency wing is seamlessly connected with our ICU, radiology,
            surgical, and specialty departments to enable quick diagnostics and
            treatment transitions. With a fleet of GPS-enabled ambulances,
            paramedic staff trained in advanced life support (ALS), and an
            in-house rapid response team, we guarantee faster on-site action and
            smooth coordination from your doorstep to the hospital bed.
          </p>
          <p className="text-muted">
            Whether it's the middle of the night, a holiday, or during a natural
            calamity — we’re always operational, ensuring that expert care is
            just moments away when it matters the most.
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
