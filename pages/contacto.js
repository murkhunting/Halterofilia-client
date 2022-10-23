import React from "react";

// import { VscMail } from "react-icons/vsc";
// import { BsPhone } from "react-icons/bs";
// import { SlSocialInstagram } from "react-icons/sl";
// import { IoChatboxEllipsesOutline, IoLocationOutline } from "react-icons/io5";
import ReactWhatsapp from "react-whatsapp";

const Contacto = () => {
  return (
    <div className="contacto">
      {" "}
      <div className="container">
        <div className="name">
          <h1>SI NECESITAS MÁS INFORMACIÓN</h1>
          <h1>SOBRE EL PROGRAMA ONLINE O LAS FORMACIONES,</h1>
          <h1>O QUIERES APUNTARTE Y TIENES DUDAS,</h1>
          <h1>PONTE EN CONTACTO CON NOSOTROS</h1>
        </div>
      </div>
      <div className="contactinfo">
        <div className="separador">
          <img className="boton" src="/images/8phonebtn.png" alt="logo" />
          <div className="iconos">
            <h5>+34 616 956 279</h5>
          </div>
        </div>
        <div className="separador">
          <img className="boton" src="/images/9instagrambtn.png" alt="logo" />
          <div className="iconos">
            <h5>@halterofiliabarcelona</h5>
          </div>
        </div>
        <div className="separador">
          <img className="boton" src="/images/10mailbtn.png" alt="logo" />
          <div className="iconos">
            <h5>HalterofiliaBarcelona@gmail.com</h5>
          </div>
        </div>
        <ReactWhatsapp className="separador" number="+34 616 956 279">
          <img className="boton" src="/images/11whatsappbtn.png" alt="logo" />
          <div className="iconos">
            <h5>Whatsapp 616 956 279</h5>
          </div>
        </ReactWhatsapp>
        <div className="separador">
          <img className="boton" src="/images/12mapsbtn.png" alt="logo" />
          <div className="iconos">
            <h5>Google Maps</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
