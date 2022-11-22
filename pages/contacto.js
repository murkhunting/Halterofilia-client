import React from "react";
import Link from "next/link";

import { VscMail } from "react-icons/vsc";
import { BsPhone } from "react-icons/bs";
import { SlSocialInstagram } from "react-icons/sl";
import { FaTelegramPlane } from "react-icons/fa";
import { IoChatboxEllipsesOutline, IoLocationOutline } from "react-icons/io5";
import ReactWhatsapp from "react-whatsapp";

const Contacto = () => {
  return (
    <div className="contacto">
      <div className="name">
        <h1>CONTACTA CON NOSOTROS</h1>
      </div>
      <div className="masinfo">
        <h2>NECESITAS MÁS INFORMACIÓN?</h2>
        <h2>QUIERES APUNTARTE A NUESTRO CLUB?</h2>
        <h2>NO DUDES EN PONERTE EN CONTACTO!</h2>
      </div>

      <div className="contactinfo">
        <div className="separador">
          <img className="boton" src="/images/8phonebtn.png" alt="logo" />
          <div className="iconos">
            <h5>
              <span>
                <BsPhone />
              </span>
              +34 616 956 279
            </h5>
          </div>
        </div>
        <ReactWhatsapp className="separador" number="+34 616 956 279">
          <img className="boton" src="/images/11whatsappbtn.png" alt="logo" />
          <div className="iconos">
            <h5>
              <span>
                <IoChatboxEllipsesOutline />
              </span>
              Whatsapp Chat
            </h5>
          </div>
        </ReactWhatsapp>
        <Link href="https://t.me/halterofiliabarcelona">
          <a>
            <div className="separador">
              <img className="boton" src="/images/12mapsbtn.png" alt="logo" />
              <div className="iconos">
                <h5>
                  <span>
                    <FaTelegramPlane />
                  </span>
                  GRUPO DE TELEGRAM
                </h5>
              </div>
            </div>
          </a>
        </Link>
        <Link href="https://www.instagram.com/halterofiliabarcelona/?hl=es">
          <a>
            <div className="separador">
              <img
                className="boton"
                src="/images/9instagrambtn.png"
                alt="logo"
              />
              <div className="iconos">
                <h5>
                  <span>
                    <SlSocialInstagram />
                  </span>
                  @halterofiliabarcelona
                </h5>
              </div>
            </div>
          </a>
        </Link>
        <div className="separador">
          <img className="boton" src="/images/10mailbtn.png" alt="logo" />
          <div className="iconos">
            <h5>
              <span>
                <VscMail />
              </span>
              Envía un correo
            </h5>
          </div>
        </div>
        <Link href="https://www.google.es/maps/place/Av.+del+Estadio,+14,+08038+Barcelona/@41.3648015,2.1470196,18z/data=!3m1!4b1!4m5!3m4!1s0x12a4a275b5dc39d1:0x1774402e3219a715!8m2!3d41.3648015!4d2.1470196?hl=es&authuser=0">
          <a>
            <div className="separador">
              <img className="boton" src="/images/12mapsbtn.png" alt="logo" />
              <div className="iconos">
                <h5>
                  <span>
                    <IoLocationOutline />
                  </span>
                  VEN A VISITARNOS
                </h5>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Contacto;
