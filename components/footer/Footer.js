import React from "react";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contacta">
        <h5>SI QUIERES SABER MÁS NO DUDES EN CONTACTAR CON NOSOTROS</h5>
      </div>
      <div className="social">
        <h5>
          <AiFillInstagram />
        </h5>
        <h5>
          <FaFacebook />
        </h5>
        <h5>
          <AiFillYoutube />
        </h5>
      </div>
      <div className="diseño">
        <h5>DESIGN & CODE BY @MURKHUNTING</h5>
      </div>
    </div>
  );
};

export default Footer;
