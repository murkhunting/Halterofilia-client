import React from "react";
import { useState } from "react";

import Link from "next/link";

const Presencial = () => {
  const [show1, setShow1] = useState(false);
  const onClick1 = () => setShow1(!show1);

  const [show2, setShow2] = useState(false);
  const onClick2 = () => setShow2(!show2);

  const [show3, setShow3] = useState(false);
  const onClick3 = () => setShow3(!show3);

  return (
    <div className="presencial">
      <div className="clases">
        <div className="titulo">
          <h1>CLASES PRESENCIALES</h1>
          <h2>
            EN EL CLUB HALTEROFILIA BARCELONA REALIZAMOS DOS TIPOS DE CLASES
            PRESENCIALES QUE SE ENTRELAZAN Y QUE COMBINADAS SIRVEN PARA MEJORAR
            Y AVANZAR A TRAVÉS DE LOS DOS MOVIMIENTOS DE LA HALTEROFILIA: LA
            ARRANCADA Y EL DOS TIEMPOS.
          </h2>
          <h2>
            EL TAMAÑO DE LAS CLASES ESTÁ LIMITADO A UN MÁXIMO DE 8 PERSONAS Y
            ESTÁN SIEMPRE DIRIGIDAS POR DOS DE NUESTROS COACHES PARA EXPLICARTE
            LOS MOVIMIENTOS, AYUDARTE A PERFECCIONARLOS, CORREGIR LOS ERRORES Y,
            DE ESTA MANERA, TENER UNA EXPERIENCIA MUCHO MÁS PERSONALIZADA.
          </h2>
        </div>
        <div className="botones">
          <div className="conjunto">
            {/* <h2>CLASES DE HALTEROFILIA:</h2> */}
            <Link href="/presenciales/clases/halterofilia">
              <a>
                <img
                  className="boton"
                  src="/images/6halterobtn.png"
                  alt="logo"
                />
              </a>
            </Link>
            {/* <h2>CLASES DE FUERZA:</h2> */}
            <Link href="/presenciales/clases/fuerza">
              <a>
                <img
                  className="boton"
                  src="/images/5fuerzabtn.png"
                  alt="logo"
                />
              </a>
            </Link>
          </div>
          <div className="conjunto"></div>
        </div>
      </div>
    </div>
  );
};

export default Presencial;
