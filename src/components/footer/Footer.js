import React from "react";
import "./Footer.css";
import {
  BsFacebook,
  BsInstagram,
  BsPinterest,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";
import { footerData } from "../../assets/data/data";
import FooterItem from "../footerItem/FooterItem";

function Footer() {
  
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          {/* // footer items starts here */}

          {footerData.map((card) => (
            <FooterItem key={card.id} heading={card.heading} list={card.items}/>
          ))}

          {/* footer items ends here */}
        </div>
        <hr />
        <div className="footer__bottom">
          <div className="footer__left">
            <h2>© 2023 RoutesDeIndia. All rights reserved.</h2>
          </div>
          <div className="footer__right">
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
