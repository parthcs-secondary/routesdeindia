import React from "react";
import "../jsx_styles/Nav.css";

function Nav() {
  return (
    <nav className="navContainer">
      <div className="logo">
        <img src="logo2.png" alt="" id="logoImage" />
      </div>
      <div className="navMenu">
        <ul className="menuList">
          <li className="menuList-list-item">
            <a href="">Group Tours</a>
          </li>
          <li className="menuList-list-item">
            <a href="">Backpacking trips</a>
          </li>
          <li className="menuList-list-item">
            <a href="">Upcoming trips</a>
          </li>
          <li className="menuList-list-item">
            <a href="">Weekend getaways</a>
          </li>
          <li className="menuList-list-item">
            <a href="">Treks</a>
          </li>
          <li className="menuList-list-item">
            <a href="">Customised</a>
          </li>
          <li className="menuList-list-item">
            <a href="">Himachal</a>
          </li>
          <li className="menuList-list-item">
            <a href="">Spiti</a>
          </li>
          <li className="menuList-list-item">
            <a href="">Spiritual Tours</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
