import React from "react";
import { useState } from "react";
import axios from "axios";

import { useRouter } from "next/router";

const Crea = () => {
  const [formacion, setFormacion] = useState({});

  const handleChange = (e) => {
    const value = e.target.value;
    setFormacion({ ...formacion, [e.target.name]: value });
  };
  console.log(formacion);

  //create formacion
  const createFormacion = async (formacion) => {
    try {
      const res = await axios.post(
        "http://localhost:8800/api/formacion",
        formacion
      );
      const data = res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const router = useRouter();

  const handleCreateFormacion = (e) => {
    e.preventDefault();
    createFormacion(formacion);
    router.push("/admin");
  };

  return (
    <div className="crea">
      <h1>CREAR UNA NUEVA FORMACIÓN:</h1>
      <div className="grupo">
        <h4>TÍTULO:</h4>
        <input
          type="text"
          placeholder="Escribe el título..."
          name="titulo"
          onChange={handleChange}
        />
      </div>
      <div className="grupo">
        <h4>PRECIO:</h4>
        <input
          type="text"
          placeholder="100€..."
          name="precio"
          onChange={handleChange}
        />
      </div>
      <div className="grupo">
        <h4>OFERTA:</h4>
        <select
          name="oferta"
          id="type"
          defaultValue="false"
          onChange={handleChange}
        >
          <option value="true">Sí</option>
          <option value="false">No</option>
        </select>
      </div>
      <div className="grupo">
        <h4>PRECIO DE LA OFERTA:</h4>
        <input
          type="text"
          placeholder="90€..."
          name="precioferta"
          onChange={handleChange}
        />
      </div>
      <div className="grupo">
        <h4>AGOTADO:</h4>
        <select
          name="agotado"
          id="type"
          defaultValue="false"
          onChange={handleChange}
        >
          <option value="true">Sí</option>
          <option value="false">No</option>
        </select>
      </div>
      <div className="grupo">
        <h4>FECHA INICIO:</h4>
        <input
          type="text"
          placeholder="12/08/2023..."
          name="inicio"
          onChange={handleChange}
        />
      </div>
      <div className="grupo">
        <h4>DURACIÓN:</h4>
        <input
          type="text"
          placeholder="4 meses..."
          name="duracion"
          onChange={handleChange}
        />
      </div>
      <div className="grupo">
        <h4>HORARIO:</h4>
        <input
          type="text"
          placeholder="Sábados de 9:00 a 14:00..."
          name="horario"
          onChange={handleChange}
        />
      </div>

      <div className="grupo">
        <h4>DIRIGIDO A:</h4>
        <input
          type="text"
          placeholder="A quien va dirigido la formación..."
          name="dirigido"
          onChange={handleChange}
        />
      </div>
      <div className="grupo">
        <h4>OBJETIVO:</h4>
        <input
          type="text"
          placeholder="Objetivo y descripción de la formación..."
          name="objetivo"
          onChange={handleChange}
        />
      </div>
      <div className="grupo">
        <h4>IMAGEN DEL PROGRAMA:</h4>
        <input
          className="archivo"
          type="file"
          placeholder="Sube una imagen..."
          name="img"
          onChange={handleChange}
        />
      </div>
      <button className="loginbtn" onClick={handleCreateFormacion}>
        CREAR FORMACIÓN
      </button>
    </div>
  );
};

export default Crea;
