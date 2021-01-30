import React from "react";
import process from "./ProcessData";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        type="button"
        data-toggle="collapse"
        data-target="#navbar"
        aria-controls="navbar"
        className="navbar-toggler"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-center"
        id="navbar"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              href="#"
              className="nav-link btn"
              id="home"
              onClick={() => process("home")}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link btn" id="world">
              World
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link btn" id="politics">
              Politics
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link btn" id="magazine">
              Magazine
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link btn" id="technology">
              Technology
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link btn" id="science">
              Science
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link btn" id="health">
              Health
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link btn" id="home">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link btn" id="sports">
              Sports
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link btn" id="arts">
              Arts
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
