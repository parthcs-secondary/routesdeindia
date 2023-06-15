import React from "react";
import "./TripCard.css";
import { BsStarFill,BsCurrencyRupee } from "react-icons/bs";
import {MdDateRange} from 'react-icons/md';

function TripCard({ card }) {
  return (
    <div className="TripCard">
      <div className="TripCard__image">
        <img className="photo" src={card?.img} alt="" />
        <div className="time">
          <div className="days">6D/5N</div>
          <div className="date"><span className="calender"><MdDateRange/></span>17 Jun</div>
        </div>
      </div>

      <div className="TripCard__info">
        <div className="title">{card.title}</div>
        <div className="rating">
          <span>
            <BsStarFill className="star"/> 4.8
          </span>
        </div>

        <div className="Tripcard__details">
          <div className="price">
            <span className="price__text">Starts at</span><span className="price__number"><BsCurrencyRupee className="ruppee"/>21,000.00/-</span>
          </div>
          {/* <div className="time"> 17 jun</div> */}
        </div>
      </div>
    </div>
  );
}
export default TripCard;
