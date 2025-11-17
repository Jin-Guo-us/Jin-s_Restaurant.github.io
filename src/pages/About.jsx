// src/pages/About.jsx
import React from "react";

export default function About() {
  return (
    <section className="container py-4">
      <h1 className="mb-3">About Us</h1>
      <div className="row g-3 align-items-start">
        <div className="col-md-6">
          <div className="card p-3">
            <p>
              Simple Restaurant started as a family food truck. Today we still
              cook the same way — hot griddles, fresh buns, and friendly
              smiles. Our mission is to keep things tasty, fast, and affordable.
            </p>
            <p>
              <strong>Special Dish:</strong> The Double Smash — crispy edges,
              melty cheese, toasted bun.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <img
            className="img-fluid rounded shadow-sm"
            src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1200&auto=format&fit=crop"
            alt="Interior"
          />
        </div>
      </div>
    </section>
  );
}
