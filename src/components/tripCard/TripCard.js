import React from "react";
import "./TripCard.css";
import { BsStarFill } from "react-icons/bs";

function TripCard({ card }) {
  return (
    <div className="TripCard">
      <div className="TripCard__image">
        <img className="photo" src={card?.img} alt="" />
      </div>

      <div className="TripCard__info">
        <div className="title">{card.title}</div>
        <div className="rating">
          <span>
            <BsStarFill className="star"/> 4.8
          </span>
        </div>

        <div className="price">
          <div className="price__top">
            <p>Starts at $ 21000.00</p>
          </div>
          <div className="price__bottom"> 17 jun</div>
        </div>
      </div>
    </div>
  );
}
export default TripCard;
