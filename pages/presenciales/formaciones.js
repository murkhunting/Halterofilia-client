import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import Fichas from "../../components/fichas/Fichas";

const Formaciones = () => {
  const [formaciones, setFormaciones] = useState([]);

  useEffect(() => {
    const getAllFormaciones = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/formacion/all");
        setFormaciones(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllFormaciones();
  }, []);

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
        {formaciones.map((formacion) => (
          <Fichas key={formacion._id} formacion={formacion} />
        ))}
      </div>
    </div>
  );
};

export default Formaciones;
