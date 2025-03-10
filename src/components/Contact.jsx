import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_8j3m4qc", "template_lo1498b", form.current, "DuClVwzLddDqFv0bt")
      .then(() => {
        setMessage("Message sent successfully!");
        form.current.reset();
      })
      .catch(() => setMessage("Failed to send message. Try again."));
  };

  return (
    <section id="contact" className="w-full mt-10 min-h-screen flex items-center justify-center bg-gray-900 text-white px-10">
      <div className="max-w-3xl w-full text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold mb-8"
        >
          Contact Me
        </motion.h2>

        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-4"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-blue-500 h-32"
          />
          <button
            type="submit"
            className="w-full p-3 bg-blue-600 hover:bg-blue-700 rounded transition"
          >
            Send Message
          </button>
          {message && <p className="text-green-400 mt-2">{message}</p>}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
