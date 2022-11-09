import React from "react";
import { useState } from "react";
import axios from "axios";

import { useRouter } from "next/router";

const Creaprograma = () => {
  const [programa, setPrograma] = useState({});

  const handleImg = (e) => {
    const file = e.target.files[0];

    TransformFileImg(file);
  };
  const TransformFileImg = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPrograma({ ...programa, img: reader.result });
      };
    }
  };

  const handlePdf = (e) => {
    const file = e.target.files[0];

    TransformFilePdf(file);
  };
  const TransformFilePdf = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setPrograma({ ...programa, pdf: reader.result });
      };
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setPrograma({ ...programa, [e.target.name]: value });
  };

  //create programa
  const createPrograma = async (programa) => {
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

  const router = useRouter();

  const handleCreatePrograma = (e) => {
    e.preventDefault();
    createPrograma(programa);
    router.push("/admin");
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
            onChange={handleImg}
          />
        </div>
        <div className="grupo">
          <h4>PDF DEL PROGRAMA:</h4>
          <input
            className="archivo"
            type="file"
            placeholder="Sube el pdf..."
            name="pdf"
            onChange={handlePdf}
          />
        </div>
        <button className="loginbtn" onClick={handleCreatePrograma}>
          CREAR PROGRAMA
        </button>
      </div>
    </div>
  );
};

export default Creaprograma;
