import React from "react";

import { IoPricetagsOutline } from "react-icons/io5";
import { BsClockHistory } from "react-icons/bs";

const Streaming = () => {
  return (
    <div className="streaming">
      <h1>CLASES DIRIGIDAS POR ZOOM</h1>
      <div className="detalles">
        <h2>
          <span>
            <IoPricetagsOutline />
          </span>
          PRECIO: 15€ POR SESIÓN
        </h2>
        <h2>
          <span>
            <BsClockHistory />
          </span>
          DURACIÓN: 60 MINUTOS
        </h2>
      </div>
      <div className="descripcion">
        <h2>
          SI TE INTERESAN NUESTRAS CLASES DE HALTEROFILIA Y FUERZA DIRIGIDAS POR
          NUESTROS COACHES VIA ZOOM, COMPRUEBA QUE TIENES EL MATERIAL NECESARIO
          PARA REALIZAR LOS EJERCICIOS DESDE DÓNDE TE VAYAS A CONECTAR Y PONTE
          EN CONTACTO CON NOSOTROS PARA APUNTARTE Y VER LA DISPONIBILIDAD Y LOS
          HORARIOS!
        </h2>
      </div>
      <div className="material">
        <h2>MATERIAL NECESARIO:</h2>
        <h3>- MANCUERNAS</h3>
        <h3>- BARRA</h3>
        <h3>- PESOS EN DISCOS</h3>
        <h3>- MANCUERNAS</h3>
        <h3>- MANCUERNAS</h3>
      </div>
      <button className="loginbtn">PONTE EN CONTACTO</button>
    </div>
  );
};

export default Streaming;
