import React from "react";
import { useState } from "react";

import Link from "next/link";

const Ficha = () => {
  const [isHovered, setIsHovered] = useState(false);
  console.log(isHovered);
  //   const { titulo, type, byn, gif, _id } = project.project;
  return (
    <div className="ficha">
      {isHovered ? (
        <div className="fichaconthover">
          <div className="spacehover">
            <h2>APÚNTATE!!</h2>
            <div className="img">
              <img src="/images/fondo.png" alt="cross" />
            </div>
            <h3 className="titulo">
              III CURSO ESPECIALISTA EN LEVANTAMIENTOS OLÍMPICOS III CURSO
              ESPECIALISTA EN LEVANTAMIENTOS OLÍMPICOS
            </h3>
            <h3 className="precio">350€</h3>
            <h3 className="oferta">OFERTA: 250€</h3>
          </div>

          <Link href="/">
            <a>
              <img
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="fichaboton"
                src="/images/programaboton.png"
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
                III CURSO ESPECIALISTA EN LEVANTAMIENTOS OLÍMPICOS III CURSO
                ESPECIALISTA EN LEVANTAMIENTOS OLÍMPICOS
              </h3>
              <h3 className="precio">350€</h3>
              <h3 className="oferta">OFERTA: 250€</h3>
            </div>

            <Link href="/">
              <a>
                <img
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="fichaboton"
                  src="/images/programaboton.png"
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
