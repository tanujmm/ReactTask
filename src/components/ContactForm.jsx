import { useState } from "react";

import { toast } from "react-toastify";

const ContactForm = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [msg, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(msg);

    setName("");
    setEmail("");
    setMsg("");
    toast.success("Message sent Successfully", {
      position: "top-center",
    });
  };

  return (
    <section className="p-8 bg-blue-50">
      <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>
      <form className="max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 border rounded"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        />
        <textarea
          placeholder="Message"
          className="w-full p-2 border rounded"
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
