import React from "react";
import "./Website.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Website = () => {
  return (
    <>
      <div className="main">
        <nav className="navbar navbar-expand-lg navbar-dark navbar-transparent">
          <div className="container">
            <a href="/" className="navbar-brand text-black">
              TechQuest
            </a>
            <button
              className="navbar-toggler text-black"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a href="/" className="nav-link text-black">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link text-black">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link text-black">
                    Team
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/" className="nav-link text-black">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <header className="website-header">
          <div className="overlay"></div>
          <div className="container text-center">
            <h1>Innovative Designs</h1>
            <p>expanding areas in a sophisticated and elegant way.</p>
            <button className="btn btn-light button">Explore More</button>
            <div className="social-icons">
              <FaFacebook className="icon" />
              <FaTwitter className="icon" />
              <FaInstagram className="icon" />
            </div>
          </div>
        </header>
      </div>
    </>
  );
};

export default Website;
