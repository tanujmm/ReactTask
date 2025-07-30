import React, { useState } from "react";
import { toast } from "react-toastify";
const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([
    {
      name: "Rajesh Sharma",
      message:
        "SmartCare saved my life. The staff was amazing and treated me like family.",
    },
  ]);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && message.trim()) {
      const newTestimonial = { name, message };
      setTestimonials([...testimonials, newTestimonial]);
      setName("");
      setMessage("");
      toast.success("Feedback sent Successfully", {
        position: "top-center",
      });
    }
  };

  return (
    <section className="bg-gray-100 py-12">
      <h2 className="text-2xl font-bold text-center mb-6">
        What Our Patients Say
      </h2>

      <div className="flex flex-wrap justify-center gap-6 px-4">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 max-w-sm text-left"
          >
            <p className="italic text-gray-700">“{t.message}”</p>
            <p className="mt-2 font-semibold text-gray-900">– {t.name}</p>
          </div>
        ))}
      </div>

      <div className="max-w-lg mx-auto mt-10 bg-white shadow-md p-6 rounded">
        <h3 className="text-xl font-semibold mb-4">Add Your Feedback</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mb-4 px-4 py-2 border rounded"
            required
          />
          <textarea
            placeholder="Your Testimonial"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full mb-4 px-4 py-2 border rounded"
            rows="3"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Testimonials;
