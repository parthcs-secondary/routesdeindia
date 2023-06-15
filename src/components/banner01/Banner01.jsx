import React from "react";
import "./Banner01.css";
function Banner01() {
  return (
    // wrapped with a purpose(handle browser zoom in and out pixelling). do not remove
    <div className="banner_wrap">

    {/* // main banner  */}
    <div className="Banner01">

  
    {/* banner title  */}
      <div className="banner01_title"><span>Find your Perfect  <span id="Escape_word"> Escape</span></span>
      </div>

      {/* banner stats  */}
      <div className="banner01_stats">
        <div className="stat stat01">
          <p>3000+</p>
          <p>Happy Travellers</p>
        </div>
        <div className="stat stat01">
          <p>500+</p>
          <p>5 Star Reviews</p>
        </div>
        <div className="stat stat01">
          <p>300+</p>
          <p>Itineraries</p>
        </div>
        <div className="stat stat01">
          <p>50+</p>
          <p>Travel Destinations</p>
        </div>
      </div>

      {/* banner images  */}
      <div className="banner01_images">
        <img
        style={{maxHeight: '355px'}}
          src="location-1.jpg"
          className="actual_image"
          alt=""
        />
        <img
        style={{maxHeight: '355px'}}
          src="location-2.jpg"
          className="actual_image"
          alt=""
        />
        <img
        style={{maxHeight: '355px'}}
          src="location-3.jpg"
          className="actual_image"
          alt=""
        />
      </div>
    </div>
    </div>
  );
}

export default Banner01;
