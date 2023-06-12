import React from "react";
import "./TripCard.css";
import { MdOutlineLocationOn } from "react-icons/md";
import { BsClock } from "react-icons/bs";

function TripCard( {card} ) {
  // console.log(trip);
  return (
    <div className="TripCard">
      <img src={card?.img} alt="" />
      <div className="info">
          <div className="time">
           <BsClock/>
           <span>5N-6D</span>
           </div>
          <div className="place">
          <MdOutlineLocationOn/>
           <span>Leh</span>
           </div>
      </div>
      <h3 className="title">{card.title}</h3>
      <div className="price">
        <p>Starts at  <span>$21,999/-</span></p>
      </div>
    </div>
  );
}
export default TripCard;
