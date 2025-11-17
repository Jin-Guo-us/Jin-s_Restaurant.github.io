// src/components/Cart.jsx
import React from "react";
import { useCart } from "../CartContext.jsx";

function formatMoney(n) {
  return `$${n.toFixed(2)}`;
}

export default function Cart() {
  const { cart, changeQty, removeItem, clearCart, totals } = useCart();
  const hasItems = cart.length > 0;

  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="card-title mb-0">Cart</h5>
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={clearCart}
            disabled={!hasItems}
          >
            Clear
          </button>
        </div>

        {!hasItems && <p className="text-muted mb-3">Your cart is empty.</p>}

        {hasItems && (
          <ul className="list-unstyled mb-3">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <div>
                  <div className="cart-name">{item.name}</div>
                  <div className="cart-price">
                    {formatMoney(item.price)} each
                  </div>
                </div>

                <div className="qty-ctrl">
                  <button onClick={() => changeQty(item.id, -1)}>−</button>
                  <span className="qty">{item.qty}</span>
                  <button onClick={() => changeQty(item.id, +1)}>+</button>
                </div>

                <button
                  className="cart-remove"
                  onClick={() => removeItem(item.id)}
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="border-top pt-2 small">
          <div className="d-flex justify-content-between">
            <span>Subtotal</span>
            <span>{formatMoney(totals.subtotal)}</span>
          </div>
          <div className="d-flex justify-content-between text-muted">
            <span>Tax (8%)</span>
            <span>{formatMoney(totals.tax)}</span>
          </div>
          <div className="d-flex justify-content-between fw-bold mt-1">
            <span>Total</span>
            <span>{formatMoney(totals.total)}</span>
          </div>
        </div>

        <button
          className="btn btn-primary w-100 mt-3"
          disabled={!hasItems}
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
