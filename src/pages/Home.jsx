// src/pages/Home.jsx
import React, { useState } from "react";

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format&fit=crop",
    alt: "Burger",
  },
  {
    src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=1200&auto=format&fit=crop",
    alt: "Fries",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
    alt: "Shake",
  },
  {
    src: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?q=80&w=1200&auto=format&fit=crop",
    alt: "Salad",
  },
  {
    src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
    alt: "Pizza",
  },
];

export default function Home() {
  const [index, setIndex] = useState(0);

  const go = (dir) => {
    setIndex((prev) => {
      const len = IMAGES.length;
      return (prev + dir + len) % len;
    });
  };

  return (
    <>
      <section className="hero">
        <div className="hero-overlay">
          <div className="container">
            <h1 className="display-4 fw-bold">Fast Food, Made Simple</h1>
            <p className="lead">
              Fresh burgers, crispy fries, and cold shakes — right in your
              neighborhood.
            </p>
            <a className="btn btn-warning btn-lg" href="/menu">
              See Menu
            </a>
          </div>
        </div>
      </section>

      <section className="container py-4">
        <h2 className="h3 mb-3">Gallery</h2>
        <div className="slider">
          <div
            className="slider-track"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {IMAGES.map((img, i) => (
              <div className="slider-slide" key={i}>
                <img src={img.src} alt={img.alt} />
              </div>
            ))}
          </div>
          <button
            className="slider-btn prev"
            type="button"
            onClick={() => go(-1)}
          >
            {"<"}
          </button>
          <button
            className="slider-btn next"
            type="button"
            onClick={() => go(1)}
          >
            {">"}
          </button>
        </div>
      </section>
    </>
  );
}
