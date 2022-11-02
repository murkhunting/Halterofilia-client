import React from "react";

import Link from "next/link";

import "animate.css";

const Presenciales = () => {
  return (
    <div className="presenciales">
      <div className="formaciones">
        <Link href="/presenciales/formaciones">
          <a>
            <h1 class="animate__animated animate__fadeInLeft">
              FORMACIONES PRESENCIALES
            </h1>
          </a>
        </Link>
      </div>
      <div className="formaciones">
        <Link href="/presenciales/clases">
          <a>
            <h1 class="animate__animated animate__fadeInLeft">
              CLASES PRESENCIALES
            </h1>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Presenciales;
