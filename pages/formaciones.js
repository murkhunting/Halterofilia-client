import React from "react";

import Link from "next/link";

import "animate.css";

const Formaciones = () => {
  return (
    <div className="formaciones">
      <Link href="/formaciones/fonline">
        <a>
          <div className="elemento animate__animated animate__zoomIn">
            <div className="enlace">
              <h1>FORMACIONES ONLINE</h1>
              <h2>NOS ADAPTAMOS A TI Y A TUS OBJETIVOS, 100% PERSONALIZADO</h2>
            </div>
            <img className="boton" src="/images/15ONLINE.png" alt="logo" />
          </div>
        </a>
      </Link>
      <Link href="/formaciones/fpresenciales">
        <a>
          <div className="elemento animate__animated animate__zoomIn">
            <div className="enlace">
              <h1>FORMACIONES PRESENCIALES</h1>
              <h2>
                SEMINARIOS Y CURSOS PRESENCIALES DE MEJORA TÉCNICA PARA
                PROFESIONALES Y ATLETAS DE ALTO NIVEL
              </h2>
            </div>
            <img className="boton" src="/images/4FORMACIONES.png" alt="logo" />
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Formaciones;
