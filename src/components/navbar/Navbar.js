import React from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo2.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navContainer">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" id="logoImage" />
        </Link>
      </div>
      <div className="navMenu">
        <ul className="menuList">
          <li className="menuList-list-item">
            <a href="#a">Group Trips</a>
          </li>
          <li className="menuList-list-item">
            <a href="#a">Backpacking trips</a>
          </li>
          <li className="menuList-list-item">
            <a href="#a">Upcoming trips</a>
          </li>
          <li className="menuList-list-item">
            <a href="#a">Weekend getaways</a>
          </li>
          <li className="menuList-list-item">
            <a href="#a">Treks</a>
          </li>
          <li className="menuList-list-item">
            <a href="#a">Customised</a>
          </li>
          <li className="menuList-list-item">
            <a href="#a">Himachal</a>
          </li>
          <li className="menuList-list-item">
            <a href="#a">Spiti</a>
          </li>
          <li className="menuList-list-item">
            <a href="#a">Spiritual Trips</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
