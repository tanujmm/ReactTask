import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-4">
            Need Immediate Medical Help?
          </h2>
          <p className="text-lg mb-6">
            Whether it's a medical emergency or general consultation, our expert
            doctors are available 24/7 to provide the care you need. Don’t wait
            — your health deserves urgent attention.
          </p>

          <Link
            to="/appointment"
            className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded hover:bg-blue-100 transition duration-300"
          >
            Book an Appointment
          </Link>
        </div>

        <div className="bg-white text-blue-800 p-6 rounded-xl shadow-lg text-center">
          <h3 className="text-2xl font-bold mb-2">24/7 Emergency Helpline</h3>
          <p className="text-3xl font-extrabold mb-2">📞 1800-123-4567</p>
          <p className="text-sm text-blue-600">
            Available around the clock for any medical emergencies. Don't
            hesitate to call.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
