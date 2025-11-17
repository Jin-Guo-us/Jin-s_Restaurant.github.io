// src/pages/Menu.jsx
import React from "react";
import Cart from "../components/Cart.jsx";
import { useCart } from "../CartContext.jsx";

const MENU_ITEMS = [
  {
    id: "1",
    name: "Double Smash",
    price: 10.99,
    desc: "crispy edges, melty cheese, toasted bun",
  },
  {
    id: "2",
    name: "Classic Fries",
    price: 3.99,
    desc: "golden, salty, shareable",
  },
  {
    id: "3",
    name: "Chicken Sandwich",
    price: 8.49,
    desc: "juicy fillet, slaw, secret sauce",
  },
  {
    id: "4",
    name: "Vanilla Shake",
    price: 4.49,
    desc: "thick, creamy, classic",
  },
];

export default function Menu() {
  const { addItem } = useCart();

  return (
    <section className="container py-4">
      <h1 className="mb-4">Menu</h1>

      <div className="row">
        <div className="col-lg-8 mb-4">
          <div className="row g-3">
            {MENU_ITEMS.map((item) => (
              <div className="col-md-6" key={item.id}>
                <div
                  className="card h-100 shadow-sm"
                  style={{ cursor: "pointer" }}
                  onClick={() => addItem(item)}
                >
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text flex-grow-1">{item.desc}</p>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <span className="fw-bold">
                        ${item.price.toFixed(2)}
                      </span>
                      <button
                        type="button"
                        className="btn btn-sm btn-warning"
                        onClick={(e) => {
                          e.stopPropagation();
                          addItem(item);
                        }}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-muted mt-2 small">
            Tip: Clicking anywhere on a card also adds that item to your cart.
          </p>
        </div>

        <div className="col-lg-4">
          <Cart />
        </div>
      </div>
    </section>
  );
}
