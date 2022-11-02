import React from "react";

import Link from "next/link";

const Online = () => {
  return (
    <div className="online">
      <div className="programas">
        <Link href="/online/personalizado">
          <a>
            <h1>PROGRAMA PERSONALIZADO</h1>
          </a>
        </Link>
      </div>
      <div className="programas">
        <Link href="/online/programas">
          <a>
            <h1>PROGRAMAS TIPO</h1>
          </a>
        </Link>
      </div>
      <div className="programas">
        <Link href="/online/streaming">
          <a>
            <h1>CLASES POR ZOOM</h1>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Online;
