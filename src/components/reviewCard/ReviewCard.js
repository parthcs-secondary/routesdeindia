import React from "react";
import "./ReviewCard.css";
import { BsStarFill } from "react-icons/bs";


function ReviewCard({ card }) {
  const stars = [];
  for (let i = 0; i < card.star; i++) {
    stars.push(i);
  }
  
  return (
    <div className="ReviewCard">
      <div className="ReviewCard__rating">
        <div>

        {stars.map((star,index) => (
          <BsStarFill key={index}/>
        ))}
        </div>
      </div>
      <div className="ReviewCard__quote">
        <h3>{card.quote}</h3>
      </div>
      <div className="ReviewCard__info">
        <img src={card?.pp}  alt="" />
        <div className="texts">
          <span>{card.username}</span>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
