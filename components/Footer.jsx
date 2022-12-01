import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 belikopi app All right reserved</p>
      <p className="icons">
        <a href="https://www.instagram.com/belikopibarukamu/" target="_blank">
          <AiFillInstagram />
        </a>

        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;
