import React from "react";

const Crea = () => {
  return (
    <div className="crea">
      <h1>CREAR UNA NUEVA FORMACIÓN:</h1>
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
        <h4>OFERTA:</h4>
        <select name="oferta" id="type">
          <option value="true">Sí</option>
          <option value="false">No</option>
        </select>
      </div>
      <div className="grupo">
        <h4>PRECIO DE LA OFERTA:</h4>
        <input
          type="text"
          placeholder="90€..."
          name="preciooferta"
          // onChange={handleChange}
        />
      </div>
      <div className="grupo">
        <h4>FECHA INICIO:</h4>
        <input
          type="text"
          placeholder="12/08/2023..."
          name="fecha"
          // onChange={handleChange}
        />
      </div>
      <div className="grupo">
        <h4>DURACIÓN:</h4>
        <input
          type="text"
          placeholder="4 meses..."
          name="uracion"
          // onChange={handleChange}
        />
      </div>
      <div className="grupo">
        <h4>HORARIO:</h4>
        <input
          type="text"
          placeholder="Sábados de 9:00 a 14:00..."
          name="horario"
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
        <h4>OBJETIVO:</h4>
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
        CREAR FORMACIÓN
      </button>
    </div>
  );
};

export default Crea;
