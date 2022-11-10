import React from "react";

import Link from "next/link";

import "animate.css";

const Presenciales = () => {
  return (
    <div className="presenciales">
      <Link href="/presenciales/formaciones">
        <a>
          <div className="formaciones animate__animated animate__fadeInLeft">
            <img className="boton" src="/images/4FORMACIONES.png" alt="logo" />
            <div className="enlace">
              <h1>FORMACIONES PRESENCIALES</h1>
              <h2>CURSOS Y SEMINARIOS PARA PROFESIONALES DE ALTO NIVEL</h2>
            </div>
          </div>
        </a>
      </Link>
      <Link href="/presenciales/clases">
        <a>
          <div className="formaciones animate__animated animate__fadeInLeft">
            <img className="boton" src="/images/14CLASES.png" alt="logo" />
            <div className="enlace">
              <h1>CLASES PRESENCIALES</h1>
              <h2>
                DESCUBRE COMO SON Y COMO FUNCIONAN NUESTRAS CLASES PRESENCIALES
              </h2>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Presenciales;
