import React from "react";

import Link from "next/link";

import "animate.css";

const Online = () => {
  return (
    <div className="online">
      <Link href="/online/personalizado">
        <a>
          <div className="programas animate__animated animate__zoomIn">
            <img
              className="boton"
              src="/images/1PERSONALIZADO.png"
              alt="logo"
            />
            <div className="enlace">
              <h1>PROGRAMA PERSONALIZADO</h1>
              <h2>
                NOS ADAPTAMOS A TI Y A TUS OBJETIVOS CON RESULTADOS
                GARANTIZADOS, 100% PERSONALIZADO
              </h2>
            </div>
          </div>
        </a>
      </Link>
      <Link href="/online/programas">
        <a>
          <div className="programas animate__animated animate__zoomIn">
            <img className="boton" src="/images/2PROGRAMAS.png" alt="logo" />

            <div className="enlace">
              <h1>PROGRAMAS DE ENTRENAMIENTO</h1>
              <h2>
                ADQUIERE EL PROGRAMA DE ENTRENO GUIADO QUE MEJOR SE AJUSTE A TUS
                NECESIDADES
              </h2>
            </div>
          </div>
        </a>
      </Link>
      <Link href="/online/streaming">
        <a>
          <div className="programas animate__animated animate__zoomIn">
            <img className="boton" src="/images/13STREAMING.png" alt="logo" />

            <div className="enlace">
              <h1>CLASES DIRIGIDAS POR ZOOM</h1>
              <h2>
                ENTENA CON NUESTRAS CLASES DIRIGIDAS POR ZOOM SI DISPONES DEL
                MATERIAL NECESARIO
              </h2>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Online;
