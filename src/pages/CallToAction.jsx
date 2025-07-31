// import React from "react";
// import { Link } from "react-router-dom";

// const CallToAction = () => {
//   return (
//     <section className="bg-gradient-to-r from-blue-700 via-blue-800 to-blue-900 text-white py-16 px-6">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
//         <div>
//           <h2 className="text-4xl font-bold mb-4">
//             Need Immediate Medical Help?
//           </h2>
//           <p className="text-lg mb-6">
//             Whether it's a medical emergency or general consultation, our expert
//             doctors are available 24/7 to provide the care you need. Don’t wait
//             — your health deserves urgent attention.
//           </p>

//           <Link
//             to="/appointment"
//             className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded hover:bg-blue-100 transition duration-300"
//           >
//             Book an Appointment
//           </Link>
//         </div>

//         <div className="bg-white text-blue-800 p-6 rounded-xl shadow-lg text-center">
//           <h3 className="text-2xl font-bold mb-2">24/7 Emergency Helpline</h3>
//           <p className="text-3xl font-extrabold mb-2">📞 1800-123-4567</p>
//           <p className="text-sm text-blue-600">
//             Available around the clock for any medical emergencies. Don't
//             hesitate to call.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CallToAction;

// import React from "react";
// import { Link } from "react-router-dom";

// const CallToAction = () => {
//   return (
//     <section className="bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 text-white py-16 px-6">
//       <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

//         <div>
//           <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
//             Need Immediate Medical Help?
//           </h2>
//           <p className="text-lg mb-6 text-slate-200">
//             Whether it’s a sudden emergency or regular checkup, our dedicated
//             doctors are here 24/7. Your health and peace of mind come first.
//           </p>

//           <Link
//             to="/appointment"
//             className="inline-block bg-white text-blue-900 font-bold px-6 py-3 rounded-md shadow hover:bg-slate-100 transition duration-300"
//           >
//             Book an Appointment
//           </Link>
//         </div>

//         <div className="bg-white text-blue-900 p-8 rounded-2xl shadow-2xl text-center">
//           <h3 className="text-2xl font-bold mb-3">24/7 Emergency Helpline</h3>
//           <p className="text-4xl font-extrabold mb-2">📞 1800-123-4567</p>
//           <p className="text-sm text-blue-700">
//             Call us any time — our emergency team is ready around the clock.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CallToAction;

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="bg-gradient-to-br from-slate-800 via-blue-900 to-slate-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text Block with fade-in from left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Need Immediate Medical Help?
          </h2>
          <p className="text-lg mb-6 text-slate-200">
            Whether it’s a sudden emergency or regular checkup, our dedicated
            doctors are here 24/7. Your health and peace of mind come first.
          </p>

          <Link
            to="/appointment"
            className="inline-block bg-white text-blue-900 font-bold px-6 py-3 rounded-md shadow hover:bg-slate-100 transition duration-300"
          >
            Book an Appointment
          </Link>
        </motion.div>

        {/* Right Helpline Box with fade-in from right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white text-blue-900 p-8 rounded-2xl shadow-2xl text-center"
        >
          <h3 className="text-2xl font-bold mb-3">24/7 Emergency Helpline</h3>
          <p className="text-4xl font-extrabold mb-2">📞 1800-123-4567</p>
          <p className="text-sm text-blue-700">
            Call us any time — our emergency team is ready around the clock.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
