import React from "react";
import "./BannerDiscuss.css";
// import { whatsapplogo } from '../../assets/images/wp-logo.jpg';
// import { linkedinlogo } from '../../assets/images/linkedin-logo.jpg';
// import { messengerlogo } from '../../assets/images/messenger-logo.jpg';
// import { twitterlogo } from '../../assets/images/twitter-logo.jpg';
// import { messagelogo } from '../../assets/images/textmsg-logo.jpg';
// import { instalogo } from '../../assets/images/insta-logo.jpg';


function BannerDiscuss() {
  return (
    <div className="banner_discuss_wrap">
      <div className="BannerDiscuss">
        <div className="left_icons">
          <div className="image_div">
            <img
              src='wp-logo.jpg'
              alt="https://placehold.co/90"
              className="actual_talk_image"
            />
          </div>
          <div className="image_div middle_left_image_div">
            <img
              src="linkedin-logo.jpg"
              alt="https://placehold.co/90"
              className="actual_talk_image"
            />
          </div>
          <div className="image_div">
            <img
              src="textmsg-logo.jpg"
              alt="https://placehold.co/90"
              className="actual_talk_image"
            />
          </div>
        </div>

        <div className="talk_middle_section_holder">
          <div className="talk_tagline">
            <span style={{fontFamily: 'Diphylleia, sans-serif'}} >
            <p style={{ fontFamily: '"PT Sans", sans-serif'}}>Connect With Us</p>
              Let's Discuss Your Next
              <span style={{ color: "rgb(5, 187, 32)"}}> Journey!</span>
            </span>
          </div>

          <div className="talk_buttons_wrapper">
            <button className="chat_with_us talk_button">
              <span>
                <span style={{ color: "rgb(37, 182, 239)" }}>Chat</span> with us
              </span>
            </button>
            <button className="talk_with_us talk_button">
              <span>
                <span style={{ color: "rgb(37, 182, 239)" }}>Talk</span> with us
              </span>
            </button>
          </div>
        </div>

        <div className="right_icons">
          <div className="image_div">
            <img
              src="messenger-logo.jpg"
              alt="https://placehold.co/90"
              className="actual_talk_image"
            />
          </div>
          <div className="image_div middle_right_image_div">
            <img
              src="twitter-logo.jpg"
              alt="https://placehold.co/90"
              className="actual_talk_image"
            />
          </div>
          <div className="image_div">
            <img
              src="insta-logo.jpg"
              alt="https://placehold.co/90"
              className="actual_talk_image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerDiscuss;
