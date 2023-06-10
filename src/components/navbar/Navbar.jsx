import React, { useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo2.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaHiking } from "react-icons/fa";
import { GiMountainClimbing, GiMountains } from "react-icons/gi";
import { TbBeach } from "react-icons/tb";

function Navbar() {
  // Hook: React -> useState for changing color of navigation based on scrolling -> will be modified based on client changes
  const [colorChange, setColorchange] = useState(false);

  // function: called at window scroll event -> calls setColorchange function to change state
  const changeNavbarColor = () => {
    if (window.scrollY >= 100) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
    console.log("ddds");
  };

  // Hook: React -> useEffect -> used to call the event and remove the event
  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);

    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, []);

  return (
    // navholder(Fixed) holds both navs inside
    <div
      className="navHolder"
    >
      {/* navContainer holds logo and major menu -> to be changed based on client  */}
      <nav className="navContainer" style={{ backgroundColor: colorChange ? "rgba(221,255,255,1)" : "#33545B" }} >
        <div className="logo">
          <div className="logoPadDiv">

          <Link to="/">
            <img src={logo} alt="logo" id="logoImage" />
          </Link>
          </div>
        </div>
        <div className="navMenu">
          {/* list items might get changed and shuffled later  */}
          <ul className="menuList">
            <li className="menuList-list-item">
              <a href="#a">
                <div>{<GiMountains />}</div>
                <div>Spiti</div>
              </a>
            </li>
            <li className="menuList-list-item">
              <a href="#a">
                <div>{<FaHiking />}</div>
                <div>Backpacking Trips</div>
              </a>
            </li>
            <li className="menuList-list-item">
              <a href="#a">
                <div>{<TbBeach />}</div>
                <div>Weekend Getaways</div>
              </a>
            </li>
            <li className="menuList-list-item">
              <a href="#a">
                <div>{<GiMountainClimbing />}</div>
                <div>Treks </div>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* navContainerBottom holds the minor menu items -> can be changed in future  */}
      <nav
        className="navContainerBottom"
        style={{ display: colorChange ? "flex" : "none", backgroundColor: colorChange ? "rgba(221,255,255,1)" : "#33545B" }}
      >
        <ul className="menuList">
          <li className="menuList-list-item">
            <a href="#a">Spiritual Trips</a>
          </li>
          <li className="menuList-list-item">
            <a href="#a">Himachal</a>
          </li>
          <li className="menuList-list-item">
            <a href="#a">Spiti</a>
          </li>
          <li className="menuList-list-item">
            <a href="#a">Customised</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
