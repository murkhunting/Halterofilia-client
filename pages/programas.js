import React from "react";

import Link from "next/link";

import "animate.css";

const Programas = () => {
  return (
    <div className="programas">
      <Link href="/programas/personalizado">
        <a>
          <div className="elemento animate__animated animate__zoomIn">
            <div className="enlace">
              <h1>PROGRAMA PERSONALIZADO</h1>
              <h2>NOS ADAPTAMOS A TI Y A TUS OBJETIVOS, 100% PERSONALIZADO</h2>
            </div>
            <img
              className="boton"
              src="/images/1PERSONALIZADO.png"
              alt="logo"
            />
          </div>
        </a>
      </Link>
      <Link href="/programas/programasonline">
        <a>
          <div className="elemento animate__animated animate__zoomIn">
            <div className="enlace">
              <h1>PROGRAMAS DE ENTRENAMIENTO</h1>
              <h2>
                ADQUIERE EL PROGRAMA DE ENTRENO GUIADO QUE MEJOR SE AJUSTE A TUS
                NECESIDADES
              </h2>
            </div>
            <img className="boton" src="/images/2PROGRAMAS.png" alt="logo" />
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Programas;
