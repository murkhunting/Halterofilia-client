import React from "react";

import Item from "../../components/item/Item";

const Programas = () => {
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
