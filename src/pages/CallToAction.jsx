// import React from "react";
// import { Link } from "react-router-dom";

// const CallToAction = () => {
//   return (
//     <section className="bg-blue-600 text-white py-16 px-6 text-center">
//       <div className="max-w-3xl mx-auto">
//         <h2 className="text-4xl font-bold mb-4">
//           Need Immediate Medical Help?
//         </h2>
//         <p className="text-lg mb-6">
//           Our experts are ready to assist you. Whether it's an emergency or a
//           routine checkup, we're here for you — fast, reliable, and
//           compassionate care just a call or click away.
//         </p>

//         <div className="bg-white text-blue-600 p-4 rounded mb-6 shadow-md inline-block">
//           <p className="font-semibold text-lg">24/7 Emergency Helpline</p>
//           <p className="text-xl font-bold">📞 1800-123-4567</p>
//           <p className="text-sm text-blue-500 mt-1">
//             Call us anytime. Your health is our priority.
//           </p>
//         </div>

//         <Link
//           to="/appointment"
//           className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-blue-100 transition"
//         >
//           Book an Appointment
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default CallToAction;

import React from "react";
import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
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

        {/* Right content (helpline info) */}
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
