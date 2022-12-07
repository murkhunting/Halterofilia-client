import React from "react";

import { parseCookies } from "../lib/parseCookies";

import Link from "next/link";

import "animate.css";

const Clases = ({ initialLang }) => {
  const lang = initialLang;
  console.log(lang);

  return (
    <div className="clases">
      <Link href="/clases/cpresenciales">
        <a>
          <div className="elemento animate__animated animate__zoomIn">
            <div className="enlace">
              {lang === "por" ? (
                <>
                  <h1>CLASES PRESENCIALES</h1>
                  <h2>DESCUBRE COMO SON Y COMO FUNCIONAN NUESTRAS CLASES PRESENCIAL</h2>
                </>
              ) : lang === "eng" ? (
                <>
                  <h1>FORMATIONS</h1>
                  <h2>CURSOS Y SEMINARIOS PARA PROFESIONALES DE ALTO NIVEL</h2>
                </>
              ) : (
                <>
              <h1>CLASES PRESENCIALES</h1>
                <h2>DESCUBRE COMO SON Y COMO FUNCIONAN NUESTRAS CLASES PRESENCIAL</h2>
                </>
              )}
            </div>
            <img className="boton" src="/images/14CLASES.png" alt="logo" />
          </div>
        </a>
      </Link>
      <Link href="/clases/streaming">
        <a>
          <div className="elemento animate__animated animate__zoomIn">
            <div className="enlace">
              <h1>CLASES POR STREAMING</h1>
              <h2>
                DESCUBRE COMO SON Y COMO FUNCIONAN NUESTRAS CLASES PRESENCIALES
              </h2>
            </div>
            <img className="boton" src="/images/13STREAMING.png" alt="logo" />
          </div>
        </a>
      </Link>
    </div>
  );
};

Clases.getInitialProps = ({ req }) => {
  const cookies = parseCookies(req);

  return {
    initialLang: cookies.lang,
  };
};

export default Clases;
