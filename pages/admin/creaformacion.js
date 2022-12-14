import React from "react";
import { useState } from "react";
import axios from "axios";
import { parseCookies } from "../../lib/parseCookies";

import { useRouter } from "next/router";

const Crea = () => {
  const [formacion, setFormacion] = useState({});

  const handleImg = (e) => {
    const file = e.target.files[0];

    TransformFileImg(file);
  };
  const TransformFileImg = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setFormacion({ ...formacion, img: reader.result });
      };
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setFormacion({ ...formacion, [e.target.name]: value });
  };
  console.log(formacion);

  //create formacion
  const createFormacion = async (formacion) => {
    try {
      const res = await axios.post(
        "http://localhost:3000/api/formacion",
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
        <h4>LINK DEL PAGO:</h4>
        <input
          type="text"
          placeholder="Copia el link para pagar..."
          name="link"
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
      <button className="loginbtn" onClick={handleCreateFormacion}>
        CREAR FORMACIÓN
      </button>
    </div>
  );
};

export default Crea;

export const getServerSideProps = async ({ req }) => {
  const cookies = parseCookies(req);

  if (cookies.token) {
    const token = cookies.token;
    return {
      props: {
        token: token || null,
      },
    };
  } else {
    return {
      redirect: {
        destination: "/login",
      },
    };
  }
};
