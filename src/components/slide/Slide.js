import React from "react";
// import { GrPrevious, GrNext } from "react-icons/gr";
import "./Slide.css";

const Slide = ({ heading, children }) => {
  return (
      <div className="slide">
        <div className="slide__container">
          <div className="slide__title">
            <div className="heading">{heading}</div>
          </div>
          <div className="slide__cards">{children}</div>
        </div>
      </div>

  );
};

export default Slide;
