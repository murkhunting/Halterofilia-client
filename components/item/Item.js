import React from "react";
import { useState } from "react";

import Link from "next/link";

const Item = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={isHovered ? "itemhover" : "item"}>
      <div className="space">
        <h2>ADQUIÉRELO!!</h2>
        <div className="img">
          <img src="/images/fondo.png" alt="cross" />
        </div>
        <h3 className="titulo">PROGRAMA DE MEJORA EN CORSSFIT</h3>
        <h3 className="precio">50€</h3>
      </div>

      <Link href="/online/programas/bedjwbd">
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
