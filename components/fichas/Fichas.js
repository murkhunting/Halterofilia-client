import React from "react";
import { useState } from "react";

import Link from "next/link";

const Ficha = (formacion) => {
  const [isHovered, setIsHovered] = useState(false);

  const { titulo, precio, agotado, inicio, img, _id } = formacion.formacion;

  return (
    <div className="ficha">
      <h1 className={agotado ? "agotado" : "noagotado"}>AGOTADO</h1>
      {isHovered ? (
        <div className="fichaconthover">
          <div className="spacehover">
            <span className="bum">APÚNTATE!!</span>
            <div className="img">
              <img src={img} alt="cross" />
            </div>
            <h3 className="titulo">{titulo}</h3>
            <h3 className="titulo">{inicio}</h3>
            <h3 className="precio">{precio}</h3>
          </div>
          <Link href={`/formaciones/fpresenciales/${_id}`}>
            <a>
              <img
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="fichaboton"
                src="/images/7masbtn.png"
                alt="logo"
              />
            </a>
          </Link>
        </div>
      ) : (
        <div>
          <div className="fichacont">
            <div className="space">
              <span className="bum">APÚNTATE!!</span>
              <div className="img">
                <img src={img} alt="cross" />
              </div>
              <h3 className="titulo">{titulo}</h3>
              <h3 className="titulo">{inicio}</h3>
              <h3 className="precio">{precio}</h3>
            </div>
            <Link href={`/presenciales/formaciones/${_id}`}>
              <a>
                <img
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="fichaboton"
                  src="/images/7masbtn.png"
                  alt="logo"
                />
              </a>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ficha;
