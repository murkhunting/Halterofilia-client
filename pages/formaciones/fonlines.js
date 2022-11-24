import React from "react";
import axios from "axios";

import Online from "../../components/card/Card";

const Fonlines = ({ onlines }) => {
  return (
    <div className="fonlines">
      <div className="titulo">
        <h1>FORMACIONES ONLINE</h1>
        <h2>
          · FORMACIONES Y CURSOS TÉCNICOS ONLINE PARA ENTRENADORES, PREPARADORES
          FÍSICOS, ATLETAS DE ALTO NIVEL Y PROFESIONALES ·
        </h2>
      </div>
      <div className="wrapper">
        {onlines.map((online) => (
          <Online key={online._id} online={online} />
        ))}
      </div>
    </div>
  );
};

export default Fonlines;

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/online");
  return {
    props: {
      onlines: res.data,
    },
  };
};
