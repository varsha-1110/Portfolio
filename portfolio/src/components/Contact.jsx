import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    
    window.location.href = `mailto:2300030500cseelge@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <input 
          name="name" 
          type="text" 
          placeholder="Your Name" 
          required 
          value={form.name}
          onChange={handleChange} 
        />
        <input 
          name="email" 
          type="email" 
          placeholder="Your Email" 
          required 
          value={form.email}
          onChange={handleChange} 
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          required 
          value={form.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}