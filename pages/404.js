import React from "react";

import Link from "next/link";

import { BiError } from "react-icons/bi";

const Error = () => {
  return (
    <div className="error">
      <h2>ERROR 404 - PÁGINA NO ENCONTRADA</h2>
      <div className="limbo">
        <span>
          <BiError />
        </span>
        <h1>
          ESTAS EN EL LIMBO DEL EJERCICIO FÍSICO. <br />
          AQUÍ NO ENCONTRARAS HALTEROFILIA
        </h1>
        <span>
          <BiError />
        </span>
      </div>
      <Link href="/">
        <a>
          <h1>VUELVE A CLUB HALTEROFILIA BARCELONA</h1>
        </a>
      </Link>
    </div>
  );
};

export default Error;
