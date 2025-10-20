/* import React, { useState } from "react";
import "../assets/css/style.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensaje enviado (simulado).");
    // Acá podrías conectar con EmailJS, Formspree o tu backend
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contact <span>Me!</span></h2>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="btn">Send Message</button>
      </form>
    </section>
  );
}
 */