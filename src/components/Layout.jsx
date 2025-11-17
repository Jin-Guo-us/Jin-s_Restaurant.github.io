// src/components/Layout.jsx
import React from "react";
import { NavLink } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <>
      <header className="sticky-top">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container">
            <NavLink className="navbar-brand" to="/">
              SimpleRestaurant
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainNav"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="mainNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/menu">
                    Menu
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contact">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>{children}</main>

      <footer className="bg-dark text-light mt-5">
        <div className="container py-3 d-flex flex-column flex-md-row justify-content-between">
          <div>
            Follow: <a href="#" className="text-warning">Facebook</a> ·{" "}
            <a href="#" className="text-warning">Instagram</a>
          </div>
          <div>Hours: Mon–Thu 11–21, Fri–Sun 11–22</div>
        </div>
      </footer>
    </>
  );
}
