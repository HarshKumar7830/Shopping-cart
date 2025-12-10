import React, { useState } from "react";
import "./Contact.css"; 

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Invalid email format";
    if (!form.message.trim()) newErrors.message = "Message cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>We would love to hear from you </p>

      {success && <div className="success">🎉 Message sent successfully!</div>}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            placeholder="John Doe"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="example@email.com"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div>
          <label>Message</label>
          <textarea
            name="message"
            rows="4"
            placeholder="Write your message..."
            value={form.message}
            onChange={handleChange}
          />
          {errors.message && <p className="error">{errors.message}</p>}
        </div>

        <button type="submit">Send Message 🚀</button>
      </form>

      <div className="contact-info">
         Phone: +91 7830539711 <br />
         Email: harshkushwah19844@gmail.com <br/>
          <span className="msg"><b>Shopping Cart Made By</b></span> <span><b>HARSH KUMAR</b></span>
      </div>
    </div>
  );
};

export default Contact;
