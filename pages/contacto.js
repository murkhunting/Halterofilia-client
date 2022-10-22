import React from "react";

import { VscMail } from "react-icons/vsc";
import { BsPhone } from "react-icons/bs";
import { SlSocialInstagram } from "react-icons/sl";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import ReactWhatsapp from "react-whatsapp";

const Contacto = () => {
  return (
    <div className="contacto">
      {" "}
      <div className="container">
        <div className="name">
          <h1>SI NECESITAS MÁS INFORMACIÓN</h1>
          <h1>O QUIERES APUNTARTE Y TIENES DUDAS</h1>
          <h1>PONTE EN CONTACTO CON NOSOTROS</h1>
        </div>
      </div>
      <div className="contactinfo">
        <div className="separador">
          <VscMail className="iconos" />
          <h5>HalterofiliaBarcelona@gmail.com</h5>
        </div>
        <div className="separador">
          <BsPhone className="iconos" />
          <h5>+34 616 956 279</h5>
        </div>
        <div className="separador">
          <SlSocialInstagram className="iconos" />
          <h5>@halterofiliabarcelona</h5>
        </div>
        <ReactWhatsapp className="separador" number="+34 616 956 279">
          <IoChatboxEllipsesOutline className="iconos" />
          <h5>whatsapp chat</h5>
        </ReactWhatsapp>
      </div>
    </div>
  );
};

export default Contacto;
