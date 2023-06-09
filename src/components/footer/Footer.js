import React from "react";
import "./Footer.css";
import {
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";

function Footer() {
  return (
    // footer element 
    <footer className="footer">
       {/* // footer container */}
      <div className="footer__container">
        <div className="footer__top">
            <div className="footer__top__item">
              <h2>Weekend getaways</h2>
              <span>Malvan</span>
              <span>Hampi</span>
              <span>Gokarna</span>
              <span>Kasol kheerganga</span>
            </div>
            <div className="footer__top__item">
              <h2>Himachal</h2>
              <span>Himachal Backpacking trip</span>
              <span>
                Himachal special with Dharamshala, Dalhousie, Amritsar
              </span>
              <span>Kasol Kheerganga trek</span>
            </div>
            <div className="footer__top__item">
              <h2>Backpacking trips</h2>
              <span>Spiti valley</span>
              <span>Leh ladakh</span>
              <span>Himachal backpacking trip</span>
              <span>Rajasthan Backpacking trip</span>
              <span>Kasol kheerganga</span>
            </div>
            <div className="footer__top__item">
              <h2>Blogs</h2>
              <span>Beautiful Places to Visit in Spring in India</span>
              <span>Workcations: The New Trend of Travel</span>
              <span>Breathtaking Monasteries of Ladakh</span>
              <span>Soul-Satisfying things to do in Spiti Valley</span>
              <span>Mesmerising Waterfalls of Meghalaya to Visit</span>
            </div>
            <div className="footer__top__item">
              <h2>Quick Links</h2>
              <span>About Us</span>
              <span>Disclaimer</span>
              <span>Terms & Conditions</span>
              <span>Privacy Policy</span>
              <span>Cancellation Policy</span>
            </div>
        </div>
        <hr />
        <div className="footer__bottom">
          <div className="footer__bottom__left">
            <h2>© 2023 RoutesDeIndia. All rights reserved.</h2>
          </div>
          <div className="footer__bottom__right">
            <div className="social">
              <BsFacebook />
              <BsInstagram />
              <BsPinterest />
              <BsLinkedin />
              <BsYoutube />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
