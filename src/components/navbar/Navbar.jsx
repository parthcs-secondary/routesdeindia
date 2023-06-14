import React, { useState, useEffect } from "react";
import "./Navbar.css";
import {HiMenuAlt3} from 'react-icons/hi'
function Navbar() {
  const [hamClicked, setHamClicked] = useState(true);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    // Function to handle window resize
    // if window is <= 900 which is mobile view ,
    // flag will be false - list will be not shown
    if (windowSize <= 900) {
      setHamClicked(false);
    } else {
      setHamClicked(true);
    }

    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowSize]);
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <h1 className="CompanyName">
          RoutesDe'<b id="navbar__india">India</b>
        </h1>
        <div className="menu__list__container">
          {hamClicked && (
            <ul className="menu__list">
              <li>
                <a href="">Spiti</a>
              </li>
              <li>
                <a href="">Backpacking Trips</a>
              </li>
              <li>
                <a href="">Weekend Getaways</a>
              </li>
              <li>
                <a href="">Treks</a>
              </li>
            </ul>
          )}
          <div
            className="hamburger toggle__nav"
            onClick={() => setHamClicked(!hamClicked)}
          >
            <HiMenuAlt3 style={{fontSize: '1.1em'}}/>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
