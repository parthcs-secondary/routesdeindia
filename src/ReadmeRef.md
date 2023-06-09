Reference code for Carousel
***
import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import "./Banner.css";
import { useNavigate } from "react-router-dom";
import searchIcon from "../../assets/images/search-icon.svg";
import Quicklinks from "../quicklinks/Quicklinks";
import { SiYourtraveldottv } from "react-icons/si";
import { useEffect } from "react";
// import { useState } from "react";
import img1 from '../../assets/images/nicholas-swanson-d19by2PLaPc-unsplash.jpg';
import img2 from '../../assets/images/banner2.jpg';
import img3 from '../../assets/images/banner3.jpg'

const imageSlide = [
  {
    url: img1,
    title: 'one',
    color: 'white'
  },
  {
    url: img2,
    title: 'two',
    color: 'white'
  },
  {
    url: img3,
    title: 'three',
    color: 'white'
  }
]

function Banner() {
  const[currentImage, setCurrentImage] = useState(1)
  const bgImage = {
    backgroundImage: `url(${imageSlide[0].url})`,
    // backgroundColor: 'rgba(30,0,0,.5)',
    // backgroundBlendMode: 'multiply',
    // color: `${imageSlide[currentImage].color}`,
    color: `black`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: "100%"
}
useEffect(()=>{
  const timer = setTimeout(() => {
    if(currentImage === 2){
      setCurrentImage(0)
    }else{
      setCurrentImage(currentImage+1)
    }
    return () => {
      clearTimeout(timer);
    }
  }, 2000);
},[currentImage])
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/america-tour");
  };
  return (
    // banner container
    <div className="bannerContainer" style={bgImage}>
      <div className="bannerTop">
      {/* <div style={bgImage}>Hello</div> */}
        
        <h1 className="bannerHeading" onClick={handleClick}>
          Explore Every Route
        </h1>
        <div className="typeWriterContainer">
          <Typewriter
            options={{
              strings: [
                "Vibe with like minded people",
                "500+ Travellers",
                "Curated experiences",
                "Safety ensured for solo travellers",
              ],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      {/* <FaBeer/> */}
      <div className="bannerMiddle">
        <form action="" method="get">
          <input type="search" name="Search" id="searchBar" />
          <img src={searchIcon} alt="" />
        </form>
      </div>

      {/* banner bottom div */}
      <div class="bannerBottom">
        <Quicklinks
          quickLinkIcon={<SiYourtraveldottv size="3em" />}
          quickLinkTitle="XYZ+ Happy travellers"
        />
        <Quicklinks
          quickLinkIcon={<SiYourtraveldottv size="3em" />}
          quickLinkTitle="XYZ+ Happy travellers"
        />
        <Quicklinks
          quickLinkIcon={<SiYourtraveldottv size="3em" />}
          quickLinkTitle="XYZ+ Happy travellers"
        />
      </div>
    </div>
  );
}

export default Banner;
***