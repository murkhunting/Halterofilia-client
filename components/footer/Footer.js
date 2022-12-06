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
      <div className="infofooter">
        <div className="ayunta">
          <Link href="https://www.barcelona.cat/ca/">
            <a>
              <img
                className="logoayunta"
                src="/images/ajuntament.png"
                alt="logo"
              />
            </a>
          </Link>
        </div>
        <div className="center">
          <Link href="/contacto">
            <a className="contacta">
              <h5>SI QUIERES SABER MÁS CONTACTA CON NOSOTROS</h5>
            </a>
          </Link>
          <div className="social">
            <Link href="https://www.instagram.com/halterofiliabarcelona/?hl=es">
              <a>
                <h5>
                  <AiFillInstagram />
                </h5>
              </a>
            </Link>
            <Link href="https://www.facebook.com/barcelonahalterofilia">
              <a>
                <h5>
                  <FaFacebook />
                </h5>
              </a>
            </Link>
            <Link href="https://www.youtube.com/channel/UCW1qpR8BAfllKR98i50_gxQ?view_as=subscriber">
              <a>
                <h5>
                  <AiFillYoutube />
                </h5>
              </a>
            </Link>
          </div>
        </div>
        <div className="logopage">
          <Link href="/">
            <a>
              <img className="logo" src="/images/logo.png" alt="logo" />
            </a>
          </Link>
        </div>
      </div>
      <Link href="https://github.com/murkhunting">
        <a>
          <h5 className="diseño">DESIGN & CODE BY @MURKHUNTING</h5>
        </a>
      </Link>
    </div>
  );
};

export default Footer;
