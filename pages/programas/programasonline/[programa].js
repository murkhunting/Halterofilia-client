import React from "react";
import axios from "axios";

import { IoPricetagsOutline } from "react-icons/io5";
import { AiOutlineRise } from "react-icons/ai";

const Programa = ({ programa }) => {
  const { titulo, precio, dirigido, objetivo, descripcion } = programa;

  return (
    <div className="programa">
      <h1>{titulo}</h1>
      <div className="detalles">
        <h2>
          <span>
            <AiOutlineRise />
          </span>
          {objetivo}
        </h2>
        <h2>
          <span>
            <IoPricetagsOutline />
          </span>
          PRECIO: {precio}
        </h2>
      </div>
      <div className="dirigido">
        <h2>{dirigido}</h2>
      </div>
      <div className="objetivo">
        <h2>DESCRIPCIÓN DEL PROGRAMA:</h2>
        <h3>{descripcion}</h3>
      </div>
    </div>
  );
};

export default Programa;

export const getServerSideProps = async ({ params }) => {
  const id = params.programa;
  const res = await axios.get(`http://localhost:3000/api/programa/id/${id}`);
  return {
    props: {
      programa: res.data,
    },
  };
};
