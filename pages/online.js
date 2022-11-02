import React from "react";

import Link from "next/link";

import "animate.css";

const Online = () => {
  return (
    <div className="online">
      <div className="programas">
        <Link href="/online/personalizado">
          <a>
            <h1 class="animate__animated animate__fadeInLeft">
              PROGRAMA PERSONALIZADO
            </h1>
          </a>
        </Link>
      </div>
      <div className="programas">
        <Link href="/online/programas">
          <a>
            <h1 class="animate__animated animate__fadeInLeft">
              PROGRAMAS TIPO
            </h1>
          </a>
        </Link>
      </div>
      <div className="programas">
        <Link href="/online/streaming">
          <a>
            <h1 class="animate__animated animate__fadeInLeft">
              CLASES POR ZOOM
            </h1>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Online;
