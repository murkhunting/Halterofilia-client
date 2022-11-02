import React from "react";

const Editprograma = () => {
  return (
    <div className="edit">
      <h1>EDITA EL PROGRAMA:</h1>
      <div className="grupo">
        <h4>TÍTULO:</h4>
        <input
          type="text"
          placeholder="Escribe el título..."
          name="titulo"
          // onChange={handleChange}
        />
      </div>
      <div className="grupo">
        <h4>PRECIO:</h4>
        <input
          type="text"
          placeholder="100€..."
          name="precio"
          // onChange={handleChange}
        />
      </div>
      <div className="grupo">
        <h4>DIRIGIDO A:</h4>
        <input
          type="text"
          placeholder="A quien va dirigido la formación..."
          name="dirigido"
          // onChange={handleChange}
        />
      </div>
      <div className="grupo">
        <h4>DESCRIPCIÓN:</h4>
        <input
          type="text"
          placeholder="Objetivo y descripción de la formación..."
          name="objetivo"
          // onChange={handleChange}
        />
      </div>
      <button
        className="loginbtn"
        //   onClick={handleLogin}
        //   disabled={isFetching}
      >
        GUARDA LOS CAMBIOS
      </button>
    </div>
  );
};

export default Editprograma;
