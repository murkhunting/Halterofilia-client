import React from "react";

import Link from "next/link";

const Presencial = () => {
  return (
    <div className="presencial">
      <div className="clases">
        <div className="titulo">
          <h1>CLASES PRESENCIALES</h1>
          <h2>
            EN EL CLUB HALTEROFILIA BARCELONA REALIZAMOS DOS TIPOS DE CLASES
            PRESENCIALES QUE SE ENTRELAZAN Y QUE COMBINADAS SIRVEN PARA MEJORAR
            Y AVANZAR A TRAVÉS DE LOS DOS MOVIMIENTOS DE LA HALTEROFILIA (LA
            ARRANCADA Y EL DOS TIEMPOS). <br />
            EL TAMAÑOS DE LAS CLASES ESTÁ LIMITADO A UN MÁXIMO DE 8 PERSONAS Y
            ESTÁN SIEMPRE DIRIGIDAS POR DOS DE NUESTROS COACHES PARA EXPLICARTE
            LOS MOVIMIENTOS Y LOS EJERCICIOS, AYUDARTE A PERFECCIONARLOS Y
            CORREGIR LOS ERRORES Y, DE ESTA MANERA, TENER UNA EXPERIENCIA MUCHO
            MÁS PERSONALIZADA.
          </h2>
          <h2></h2>
        </div>
        <div className="botones">
          <Link href="/presencial/fuerza">
            <a>
              <img className="boton" src="/images/5fuerzabtn.png" alt="logo" />
            </a>
          </Link>
          <Link href="/presencial/tecnica">
            <a>
              <img
                className="boton"
                src="/images/6halterobotn.png"
                alt="logo"
              />
            </a>
          </Link>
        </div>
      </div>
      <div className="tarifas">
        <h1>INFORMACION DE LAS TARIFAS</h1>
      </div>
      <div className="funcionamiento">
        <h1>FUNCIONAMIENTO DE LAS CLASES</h1>
      </div>
      <div className="normas">
        <h1>NORMATIVA DEL CLUB</h1>
      </div>
    </div>
  );
};

export default Presencial;
