import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";

const Edit = () => {
  //GRT FORMACION ORIGINAL
  const router = useRouter();
  const id = router.query.editformacion;
  const [formacion, setFormacion] = useState({});

  useEffect(() => {
    const getFormacion = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/formacion/${id}`
        );
        setFormacion(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFormacion();
  }, [id]);

  const {
    titulo,
    precio,
    precioferta,
    inicio,
    duracion,
    horario,
    dirigido,
    objetivo,
    img,
  } = formacion;

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
        `http://localhost:8800/api/formacion/${id}`,
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
          placeholder="Escribe el título..."
          name="titulo"
          defaultValue={titulo}
          onChange={handleChange}
        />
      </div>
      <div className="grupo">
        <h4>PRECIO:</h4>
        <input
          type="text"
          placeholder="100€..."
          name="precio"
          defaultValue={precio}
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
          defaultValue={precioferta}
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
          placeholder="12/08/2023..."
          name="inicio"
          defaultValue={inicio}
          onChange={handleChange}
        />
      </div>
      <div className="grupo">
        <h4>DURACIÓN:</h4>
        <input
          type="text"
          placeholder="4 meses..."
          name="duracion"
          defaultValue={duracion}
          onChange={handleChange}
        />
      </div>
      <div className="grupo">
        <h4>HORARIO:</h4>
        <input
          type="text"
          placeholder="Sábados de 9:00 a 14:00..."
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
        <h4>IMAGEN DE LA FORMACIÓN:</h4>
        <input
          className="archivo"
          type="file"
          placeholder="Sube una imagen..."
          name="img"
          defaultValue={img}
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
