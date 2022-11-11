import React from "react";

import { IoPricetagsOutline } from "react-icons/io5";
import { FiUserCheck } from "react-icons/fi";
import { FiBarChart2 } from "react-icons/fi";

const Personalizado = () => {
  return (
    <div className="personalizado">
      <h1>PROGRAMA PERSONALIZADO</h1>
      <div className="detalles">
        <h2>
          <span>
            <FiBarChart2 />
          </span>
          ADAPTAMOS EL NIVEL PARA TI
        </h2>
        <h2>
          <span>
            <IoPricetagsOutline />
          </span>
          PRECIO: 85€
        </h2>
        <h2>
          <span>
            <FiUserCheck />
          </span>
          100% PERSONALIZADO
        </h2>
      </div>
      <div className="descripcion">
        <h2>
          SI ESTÁS INTERESADO RELLENA EL SIGUIENTE FORMULARIOL Y ENVÍANOS TU
          INFORMACIÓN PERSONAL PARA REALIZAR EL PROGRAMA A TU MEDIDA Y NOS
          PONDREMOS EN CONTACTO CONTIGO
        </h2>
      </div>
      <div className="formulario">
        <div className="grupo">
          <h4>NOMBRE Y APELLIDOS:</h4>
          <input
            type="text"
            placeholder="Escribe el título..."
            name="nombre"
            // onChange={handleChange}
          />
        </div>
        <div className="grupo">
          <h4>PESO:</h4>
          <input
            type="text"
            placeholder="100€..."
            name="peso"
            // onChange={handleChange}
          />
        </div>
        <div className="grupo">
          <h4>ALTURA:</h4>
          <input
            type="text"
            placeholder="Frase de motivación..."
            name="altura"
            // onChange={handleChange}
          />
        </div>
        <div className="grupo">
          <h4>objetivo:</h4>
          <input
            type="text"
            placeholder="A quien va dirigido el programa..."
            name="objetivo"
            // onChange={handleChange}
          />
        </div>
        <div className="grupo">
          <h4>DESCRIPCIÓN:</h4>
          <input
            type="text"
            placeholder="Descripción de el programa..."
            name="descripcion"
            // onChange={handleChange}
          />
        </div>
        <button
          className="loginbtn"
          //  onClick={handleCreatePrograma}
        >
          ENVIA TU INFORMACIÓN
        </button>
      </div>
    </div>
  );
};

export default Personalizado;
