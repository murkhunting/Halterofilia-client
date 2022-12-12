import React from "react";
import axios from "axios";

import dbConnect from "../../lib/mongo";

import Item from "../../components/item/Item";

const Programasonline = ({ programas }) => {
  return (
    <div className="programasonline">
      <div className="titulo">
        <h1>PROGRAMAS DE ENTRENAMIENTO</h1>
        <h2>
          · ENTRENAMIENTOS PREPARADOS PARA QUE CONSIGAS TUS OBJETIVOS DESDE
          CUALQUIER LUGAR DEL MUNDO ·
        </h2>
      </div>
      <div className="wrapper">
        {programas.map((programa) => (
          <Item key={programa._id} programa={programa} />
        ))}
      </div>
    </div>
  );
};

export default Programasonline;

export const getServerSideProps = async () => {
  await dbConnect();
  const res = await axios.get("http://localhost:3000/api/programa");
  return {
    props: {
      programas: res.data,
    },
  };
};
