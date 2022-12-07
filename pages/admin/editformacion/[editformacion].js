import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";

import { parseCookies } from "../../../lib/parseCookies";

const Edit = () => {
  const router = useRouter();
  const id = router.query.editformacion;

  const [formacion, setFormacion] = useState({});
  console.log(formacion);
  useEffect(() => {
    const getFormacion = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/formacion/id/${id}`
        );
        setFormacion(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFormacion();
  }, [id]);

  const { titulo, precio, inicio, duracion, horario, dirigido, objetivo } =
    formacion;

  //FORMACION EDITADA
  const [formacionEditada, setFormacionEditada] = useState({});

  const handleChange = (e) => {
    const value = e.target.value;
    setFormacionEditada({ ...formacion, [e.target.name]: value });
  };

  //subir formacion editada
  const updateFormacion = async (formacion) => {
    try {
      const res = await axios.put(
        `http://localhost:3000/api/formacion/id/${id}`,
        formacion
      );
      const data = res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateFormacion(formacionEditada);
    router.push("/admin");
  };

  return (
    <div className="edit">
      <h1>EDITA LA FORMACIÓN:</h1>
      <div className="grupo">
        <h4>TÍTULO:</h4>
        <input
          type="text"
          name="titulo"
          defaultValue={titulo}
          onChange={handleChange}
        />
      </div>
      <div className="grupo">
        <h4>PRECIO:</h4>
        <input
          type="text"
          name="precio"
          defaultValue={precio}
          onChange={handleChange}
        />
      </div>
      <div className="grupo">
        <h4>AGOTADO:</h4>
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
        <h4>FECHA INICIO:</h4>
        <input
          type="text"
          name="inicio"
          defaultValue={inicio}
          onChange={handleChange}
        />
      </div>
      <div className="grupo">
        <h4>DURACIÓN:</h4>
        <input
          type="text"
          name="duracion"
          defaultValue={duracion}
          onChange={handleChange}
        />
      </div>
      <div className="grupo">
        <h4>HORARIO:</h4>
        <input
          type="text"
          name="horario"
          defaultValue={horario}
          onChange={handleChange}
        />
      </div>
      <div className="grupo">
        <h4>DIRIGIDO A:</h4>
        <input
          type="text"
          placeholder="A quien va dirigido la formación..."
          name="dirigido"
          defaultValue={dirigido}
          onChange={handleChange}
        />
      </div>
      <div className="grupo">
        <h4>OBJETIVO:</h4>
        <input
          type="text"
          placeholder="Objetivo y descripción de la formación..."
          name="objetivo"
          defaultValue={objetivo}
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
      <button className="loginbtn" onClick={handleUpdate}>
        GUARDA LOS CAMBIOS
      </button>
    </div>
  );
};

export default Edit;

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
