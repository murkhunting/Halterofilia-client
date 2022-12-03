import React from "react";
import Link from "next/link";

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
        <h3>
          Programa de Halterofilia 100% personalizado. Se basa en tus
          necesidades, habilidades y objetivos competitivos. Proceso de
          evaluación intenso para detectar tus barreras de rendimiento más
          importantes.
          <br />
          durante el proceso se realizarán charlas regulares, ajustes de
          programa y análisis de técnicas a través de foto y video.
        </h3>

        <h3>
          SI ESTÁS INTERESADO RELLENA EL SIGUIENTE FORMULARIO Y ENVÍANOS TU
          INFORMACIÓN PERSONAL PARA REALIZAR EL PROGRAMA A TU MEDIDA Y NOS
          PONDREMOS EN CONTACTO CONTIGO.
        </h3>
        <h3>
          o SI PREFIERES HACER UNA CONSULTA PREVIA TÁMBIEN PUEDES
          <Link href="/contacto">
            <a> PONERTE EN CONTACTO CON NOSOTROS </a>
          </Link>
          Y RESOLVEREMOS TODAS TUS DUDAS.
        </h3>
      </div>
      <div className="formulario">
        <div className="grupo">
          <h4>NOMBRE Y APELLIDOS:</h4>
          <input
            type="text"
            placeholder="Jon Doe..."
            name="nombre"
            // onChange={handleChange}
          />
        </div>
        <div className="grupo">
          <h4>correo:</h4>
          <input
            type="text"
            placeholder="Escribe tu correo..."
            name="peso"
            // onChange={handleChange}
          />
        </div>
        <div className="grupo">
          <h4>PESO:</h4>
          <input
            type="text"
            placeholder="85Kg..."
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
          <h4>ACTIVIDAD:</h4>
          <input
            type="text"
            placeholder="Descripción de el programa..."
            name="descripcion"
            // onChange={handleChange}
          />
        </div>
        <button className="loginbtn">ENVIA TU INFORMACIÓN</button>
      </div>
    </div>
  );
};

export default Personalizado;
