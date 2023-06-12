import React, { useState, useEffect } from "react";
import "./FooterItem.css";
import { IoIosArrowDropdown } from "react-icons/io";
import { IconContext } from "react-icons";

function FooterItem({ heading, list }) {

  // flag to decide to show list or not
  const [flag , setFlag] = useState(true);

  
  function handleClick() {
    if (windowSize <= 426) {
      setFlag(!flag);
    }
  }
  
  // state to find window size to 
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  

  useEffect(() => {
    // Function to handle window resize
    // if window is <= 426 which is mobile view , 
    // flag will be false - list will be not shown
    if (windowSize <= 426) {
      setFlag(false);
    }else {
      setFlag(true);
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

  // console.log(list);
  return (
    <IconContext.Provider value={{ className: "button", size: "1.5em" }}>
      <div className="footer__item ">
        <div className="footer__item__top " onClick={handleClick}>
          <h2 className="button__one">{heading} </h2>
          {windowSize <= 426 && 
          <IoIosArrowDropdown />
          }
        </div>
        {flag && (
        <div className="footer__item__bottom ">
          {list.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
        )}
      </div>
    </IconContext.Provider>
  );
}

export default FooterItem;
