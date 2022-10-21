import React from "react";
import Link from "next/link";

import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="baner">
        <div className="scroll">
          <h2>· THINK DIFFERENT - TRAIN DIFFERENT ·</h2>
        </div>
      </div>

      <Link href="/contacto">
        <a className="contacta">
          <h5>SI QUIERES SABER MÁS NO DUDES EN CONTACTAR CON NOSOTROS</h5>
        </a>
      </Link>
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

      <h5 className="diseño">DESIGN & CODE BY @MURKHUNTING</h5>
    </div>
  );
};

export default Footer;
