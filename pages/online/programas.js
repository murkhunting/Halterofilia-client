import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import Item from "../../components/item/Item";

const Programas = () => {
  const [programas, setProgramas] = useState([]);
  console.log(programas);

  useEffect(() => {
    const getAllPrograms = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/programa/all");
        setProgramas(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllPrograms();
  }, []);

  return (
    <div className="programas">
      <div className="titulo">
        <h1>PROGRAMAS DE ENTRENAMIENTO</h1>
        <h2>
          · ENTRENAMIENTOS PREPARADOS PARA QUE CONSIGAS TUS OBJETIVOS DESDE
          CUALQUIER LUGAR DEL MUNDO ·
        </h2>
      </div>
      <div className="wrapper">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

export default Programas;
