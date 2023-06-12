import React from "react";
import Banner from "../../components/banner/Banner";
import Slide from "../../components/slide/Slide";
import ReviewCard from "../../components/reviewCard/ReviewCard";
import { cards } from "../../assets/data/data";

function Home() {
  return (
    <div className="Home">
      <Banner />
      <div className="Reviews">
        <Slide heading={"See what others say about us."} flag={"card"}>
          {cards.map((card) => (
            <ReviewCard key={card.id} card={card} />
          ))}
        </Slide>
      </div>
    </div>
  );
}

export default Home;
