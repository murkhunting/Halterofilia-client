import React from "react";

import { parseCookies } from "../lib/parseCookies";

import Link from "next/link";

import "animate.css";

const Presenciales = ({ initialLang }) => {
  const lang = initialLang;
  console.log(lang);

  return (
    <div className="presenciales">
      <Link href="/presenciales/formaciones">
        <a>
          <div className="formaciones animate__animated animate__zoomIn">
            <img className="boton" src="/images/4FORMACIONES.png" alt="logo" />
            <div className="enlace">
              {lang === "esp" ? (
                <>
                  <h1>FORMACIONES PRESENCIALES</h1>
                  <h2>CURSOS Y SEMINARIOS PARA PROFESIONALES DE ALTO NIVEL</h2>
                </>
              ) : lang === "eng" ? (
                <>
                  <h1>FORMATIONS</h1>
                  <h2>CURSOS Y SEMINARIOS PARA PROFESIONALES DE ALTO NIVEL</h2>
                </>
              ) : (
                <>
                  <h1>FORMASAO</h1>
                  <h2>CURSOS Y SEMINARIOS PARA PROFESIONALES DE ALTO NIVEL</h2>
                </>
              )}
            </div>
          </div>
        </a>
      </Link>
      <Link href="/presenciales/clases">
        <a>
          <div className="formaciones animate__animated animate__zoomIn">
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

Presenciales.getInitialProps = ({ req }) => {
  const cookies = parseCookies(req);

  return {
    initialLang: cookies.lang,
  };
};

export default Presenciales;
