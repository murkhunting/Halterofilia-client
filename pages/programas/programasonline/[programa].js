import React from "react";
import axios from "axios";
import Link from "next/link";

import dbConnect from "../../../lib/mongo";

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
        <h3>DESCRIPCIÓN DEL PROGRAMA:</h3>
        <h3>{descripcion}</h3>
      </div>
      <div className="enlla">
        <h3>
          SI CREES QUE ESTE PROGRAMA SE ADAPTA AL PLAN DE ENTRENO QUE BUSCAS Y
          ESTÁS INTERESADO EN ADQUIRIRLO CLICA EN EL SIGUIENTO BOTÓN PARA
          PROCEDER A LA PLATAFORMA DE PAGO.
          <br />
          UNA VEZ LO HAYAS REALIZADO EL PAGO RECIBIRÁS UN MAIL CON TU PROGRAMA
          AL CORREO QUE HAYAS APORTADO.
        </h3>
      </div>
      <Link href="/contacto">
        <a>
          <button className="loginbtn">PROCEDER AL PAGO</button>
        </a>
      </Link>
    </div>
  );
};

export default Programa;

export const getServerSideProps = async ({ params }) => {
  await dbConnect();
  const id = params.programa;
  const res = await axios.get(`http://localhost:3000/api/programa/id/${id}`);
  return {
    props: {
      programa: res.data,
    },
  };
};
