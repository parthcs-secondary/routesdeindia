import Typewriter from "typewriter-effect";
import "./Banner.css";
import { useNavigate } from "react-router-dom";
import Quicklinks from "../quicklinks/Quicklinks";
import { DiAtom } from "react-icons/di";
import { MdOutlineAutoGraph } from "react-icons/md";
import { GiHorizonRoad } from "react-icons/gi";
import { MdOutlineManageSearch } from "react-icons/md";

function Banner() {
  // custom styling is saved in variable bgImage and applied later to container
  const bgImage = {
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
  };

  // Hook: RouterDom -> useNavigate -> needs to be modified later
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/america-tour");
  };
  return (
    // banner container
    <div className="bannerContainer" style={bgImage}>
      {/* search bar container -> search bar might be re-implemented completely based on client preference */}
      <div className="bannerTop">
        <form action="" method="get">



          <div className="searchBox">

            <input
              className="searchInput"
              type="text"
              name=""
              placeholder="Where would you like to go?"
            />
            <div className="buttonHolder">
            <button type="submit" className="searchButton_two" style={{backgroundColor: '#22383D', width: '4rem', borderRadius: '0.7rem', border: 'none'}}>
              <MdOutlineManageSearch style={{ fontSize: "1.5rem", color: "white"}} />
            </button>
            </div>


            <button className="searchButton" href="#">
              Find a Travel Location
              <MdOutlineManageSearch style={{ fontSize: "1.5rem" }} />
            </button>



          </div>
        </form>
      </div>

      {/* Heading and typewriter-effect container  */}
      <div className="bannerMiddle">
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

      {/* banner bottom div having quick links  */}
      <div className="bannerBottom">
        {/* two props are passed per component here */}
        <Quicklinks
          quickLinkIcon={<MdOutlineAutoGraph size="3em" />}
          quickLinkTitle="500+ Happy travellers"
        />
        <Quicklinks
          quickLinkIcon={<DiAtom size="3em" />}
          quickLinkTitle="1000+ 5 Star Reviews"
        />
        <Quicklinks
          quickLinkIcon={<GiHorizonRoad size="3em" />}
          quickLinkTitle="10+ Itineraries"
        />
      </div>
    </div>
  );
}

export default Banner;
