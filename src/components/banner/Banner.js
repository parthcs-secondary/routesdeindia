import React from "react";
import Typewriter from "typewriter-effect";
import "./Banner.css";
import { useNavigate } from "react-router-dom";


function Banner() {
  const navigate = useNavigate();
  const handleClick = () =>{
      navigate('/america-tour');
  }
  return (
    <div className="bannerContainer">
      <div className="bannerTop">
        <h1 className="bannerHeading" onClick={handleClick}>Explore Every Route</h1>
        <div className="typeWriterContainer">
          <Typewriter
            options={{
              strings: ["Vibe with like minded people", "500+ Travellers", "Curated experiences", "Safety ensured for solo travellers"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>

      <div className="bannerMiddle">
        <form action="" method="get">
          <input type="search" name="Search" id="searchBar" />
          <img src="../../assets/images/search-icon.svg" alt="" />
        </form>
      </div>

      <div className="bannerBottom">
        <div>XYZ+ Happy travellers</div>
        <div>XYZ+ 5Star Reviews</div>
        <div>XYZ+ Itineraries</div>
      </div>
    </div>
  );
}

export default Banner;
