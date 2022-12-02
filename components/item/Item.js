import React from "react";
import { useState } from "react";

import Link from "next/link";

const Item = (programa) => {
  const [isHovered, setIsHovered] = useState(false);

  const { titulo, precio, img, _id } = programa.programa;

  return (
    <div className={isHovered ? "itemhover" : "item"}>
      <div className="space">
        <span className="bum">ADQUIÉRELO!!</span>
        <div className="img">
          <img src={img} alt="cross" />
        </div>
        <h3 className="titulo">{titulo}</h3>
        <h3 className="precio">{precio}</h3>
      </div>

      <Link href={`/programas/programasonline/${_id}`}>
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
  );
};

export default Item;
