import React from "react";
import { useState } from "react";
import Link from "next/link";

const Card = ({ online }) => {
  const [isHovered, setIsHovered] = useState(false);

  const { titulo, precio, img, _id, idioma } = online;
  return (
    <div className="card">
      {idioma === "por" ? (
        <h1 className="idioma">PORTUGUÊS</h1>
      ) : idioma === "eng" ? (
        <h1 className="idioma">ENGLISH</h1>
      ) : (
        <h1 className="idioma">ESPAÑOL</h1>
      )}

      {isHovered ? (
        <div className="cardconthover">
          <div className="spacehover">
            <span className="bum">ADQUIÉRELO!</span>
            <div className="img">
              <img src={img} alt="cross" />
            </div>
            <h3 className="titulo">{titulo}</h3>
            <h3 className="precio">{precio}</h3>
          </div>

          <Link href={`/formaciones/fonlines/${_id}`}>
            <a>
              <img
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="cardboton"
                src="/images/7masbtn.png"
                alt="logo"
              />
            </a>
          </Link>
        </div>
      ) : (
        <div>
          <div className="cardcont">
            <div className="space">
              <span className="bum">ADQUIÉRELO!</span>
              <div className="img">
                <img src={img} alt="cross" />
              </div>
              <h3 className="titulo">{titulo}</h3>
              <h3 className="precio">{precio}</h3>
            </div>

            <Link href={`/formaciones/fonline/${_id}`}>
              <a>
                <img
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className="cardboton"
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

export default Card;
