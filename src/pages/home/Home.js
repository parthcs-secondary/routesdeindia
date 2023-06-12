import React from "react";
import Banner from "../../components/banner/Banner";
import Slide from "../../components/slide/Slide";
import ReviewCard from "../../components/reviewCard/ReviewCard";
import TripCard from "../../components/tripCard/TripCard";
import { cards , trips} from "../../assets/data/data";

function Home() {
  
  return (
    <div className="Home">
      {/* <Banner /> */}
      <div className="tours">
        <Slide heading={"Upcoming Trips"} flag={"trip"}>
          {trips.map((card) => (
            <TripCard key={card.id} card={card} />
          ))}
        </Slide>
      </div>

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
