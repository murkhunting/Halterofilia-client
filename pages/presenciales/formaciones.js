import React from "react";

import Fichas from "../../components/fichas/Fichas";

const Formaciones = () => {
  return (
    <div className="formaciones">
      <div className="titulo">
        <h1>FORMACIONES TÉCNICAS</h1>
        <h2>
          · SEMINARIOS Y CURSOS TÉCNICOS PARA ENTRENADORES, PREPARADORES
          FÍSICOS, ATLETAS DE ALTO NIVEL Y PROFESIONALES ·
        </h2>
      </div>
      <div className="wrapper">
        <Fichas />
        <Fichas />
        <Fichas />
        <Fichas />
        <Fichas />
      </div>
    </div>
  );
};

export default Formaciones;
