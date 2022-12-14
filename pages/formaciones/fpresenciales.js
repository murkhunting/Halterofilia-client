import React from "react";
import axios from "axios";

import Fichas from "../../components/fichas/Fichas";
import dbConnect from "../../lib/mongo";

const Fpresenciales = ({ formaciones }) => {
  return (
    <div className="fpresenciales">
      <div className="titulo">
        <h1>FORMACIONES PRESENCIALES</h1>
        <h2>
          · SEMINARIOS Y CURSOS TÉCNICOS PARA ENTRENADORES, PREPARADORES
          FÍSICOS, ATLETAS DE ALTO NIVEL Y PROFESIONALES ·
        </h2>
      </div>
      <div className="wrapper">
        {formaciones.map((formacion) => (
          <Fichas key={formacion._id} formacion={formacion} />
        ))}
      </div>
    </div>
  );
};

export default Fpresenciales;

export const getServerSideProps = async () => {
  await dbConnect();
  const res = await axios.get("http://localhost:3000/api/formacion");
  return {
    props: {
      formaciones: res.data,
    },
  };
};
