// src/pages/Contact.jsx
import React from "react";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks!");
    e.target.reset();
  };

  return (
    <section className="container py-4">
      <h1 className="mb-3">Contact</h1>
      <div className="row g-3">
        <div className="col-md-6">
          <div className="card p-3 h-100">
            <h3>Find Us</h3>
            <p>123 Maple Street, Your City, NY 10001</p>
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Times%20Square%2C%20New%20York&output=embed"
              width="100%"
              height="260"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card p-3 h-100">
            <h3>Send a Message</h3>
            <form onSubmit={handleSubmit} className="mt-2">
              <input
                className="form-control mb-2"
                placeholder="Name"
                required
              />
              <input
                type="email"
                className="form-control mb-2"
                placeholder="Email"
                required
              />
              <textarea
                className="form-control mb-2"
                placeholder="Message"
                required
                rows={4}
              />
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
