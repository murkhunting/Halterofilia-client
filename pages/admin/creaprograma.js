import React from "react";
import { useState } from "react";
import axios from "axios";

import Link from "next/link";

const Creaprograma = () => {
  const [programa, setPrograma] = useState({});

  const handleChange = (e) => {
    const value = e.target.value;
    setPrograma({ ...programa, [e.target.name]: value });
  };
  console.log(programa);

  //create programa
  const createPrograma = async (programa) => {
    console.log(programa);
    try {
      const res = await axios.post(
        "http://localhost:8800/api/programa",
        programa
      );
      const data = res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleCreate = (e) => {
    e.preventDefault();
    createPrograma(programa);
  };

  return (
    <div>
      <div className="crea">
        <h1>CREA UN NUEVO PROGRAMA:</h1>
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
          <h4>MOTIVACIÓN:</h4>
          <input
            type="text"
            placeholder="Frase de motivación..."
            name="objetivo"
            onChange={handleChange}
          />
        </div>
        <div className="grupo">
          <h4>DIRIGIDO A:</h4>
          <input
            type="text"
            placeholder="A quien va dirigido el programa..."
            name="dirigido"
            onChange={handleChange}
          />
        </div>
        <div className="grupo">
          <h4>DESCRIPCIÓN:</h4>
          <input
            type="text"
            placeholder="Descripción de el programa..."
            name="descripcion"
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
        <div className="grupo">
          <h4>PDF DEL PROGRAMA:</h4>
          <input
            className="archivo"
            type="file"
            placeholder="Sube el pdf..."
            name="pdf"
            onChange={handleChange}
          />
        </div>
        <Link href="/admin">
          <a>
            <button className="loginbtn" onClick={handleCreate}>
              CREAR PROGRAMA
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Creaprograma;
