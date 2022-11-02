import React from "react";
import { useState } from "react";

import Link from "next/link";

const Ficha = () => {
  const [isHovered, setIsHovered] = useState(false);
  console.log(isHovered);
  //   const { titulo, type, byn, gif, _id } = project.project;

  const agotado = true;
  const oferta = true;

  return (
    <div className="ficha">
      <h1 className={agotado ? "agotado" : "noagotado"}>AGOTADO</h1>
      {isHovered ? (
        <div className="fichaconthover">
          <div className="spacehover">
            <h2>APÚNTATE!!</h2>
            <div className="img">
              <img src="/images/fondo.png" alt="cross" />
            </div>
            <h3 className="titulo">
              III CURSO ESPECIALISTA EN LEVANTAMIENTOS OLÍMPICOS
            </h3>
            <h3 className="titulo">17/12/2022</h3>
            <h3 className={oferta ? "noprecio" : "precio"}>350€</h3>
            <h3 className={oferta ? "oferta" : "noferta"}>OFERTA: 250€</h3>
          </div>

          <Link href="/presenciales/formaciones/bedjwbd">
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
              <h2>APÚNTATE!!</h2>
              <div className="img">
                <img src="/images/fondo.png" alt="cross" />
              </div>
              <h3 className="titulo">
                III CURSO ESPECIALISTA EN LEVANTAMIENTOS OLÍMPICOS
              </h3>
              <h3 className="titulo">17/12/2022</h3>
              <h3 className={oferta ? "noprecio" : "precio"}>350€</h3>
              <h3 className={oferta ? "oferta" : "noferta"}>OFERTA: 250€</h3>
            </div>

            <Link href="/presenciales/formaciones/bedjwbd">
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
