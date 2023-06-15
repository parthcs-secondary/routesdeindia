import React from "react";
import Banner from "../../components/banner/Banner";
import Slide from "../../components/slide/Slide";
import ReviewCard from "../../components/reviewCard/ReviewCard";
import './Home.css'
import TripCard from "../../components/tripCard/TripCard";
import { cards, trips } from "../../assets/data/data";
import Banner01 from "../../components/banner01/Banner01";
function Home() {
  return (
    <div className="Home">
      <Banner />
      <Banner01 />
      
      {/* upcoming trips  */}

      <div className="tours">
        <Slide heading={"Upcoming Trips"}>
          {trips.map((card) => (
            <div className="trip__card">
              <TripCard key={card.id} card={card} />
            </div>
          ))}
        </Slide>
      </div>

      {/* Review slider  */}
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
