import React from "react";
import "./Banner01.css";
function Banner01() {
  return (

    // main banner 
    <div className="Banner01">

    {/* banner title  */}
      <div className="banner01_title"><span>Find your Perfect  <span id="Escape_word"> Escape</span></span>
      </div>

      {/* banner stats  */}
      <div className="banner01_stats">
        <div className="stat stat01">
          <p>25000+</p>
          <p>Travel Destinations</p>
        </div>
        <div className="stat stat01">
          <p>25000+</p>
          <p>Travel Destinations</p>
        </div>
        <div className="stat stat01">
          <p>25000+</p>
          <p>Travel Destinations</p>
        </div>
        <div className="stat stat01">
          <p>25000+</p>
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
  );
}

export default Banner01;
