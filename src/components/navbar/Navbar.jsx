import React from "react";
import "./Navbar.css"
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <h1 className="CompanyName">RoutesDe'India</h1>
        <div className="menu__list__container">
          <ul className="menu__list">
            <li>
              <a href="">SPITI</a>
            </li>
            <li>
              <a href="">BACKPACKING TRIPS</a>
            </li>
            <li>
              <a href="">WEEKEND GETAWAYS</a>
            </li>
            <li>
              <a href="">TREKS</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
