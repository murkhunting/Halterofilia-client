import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";

const Editprograma = () => {
  //GET PROGRAMA ORIGINAL
  const router = useRouter();
  const id = router.query.editprograma;
  const [programa, setPrograma] = useState({});

  useEffect(() => {
    const getPrograma = async () => {
      try {
        const res = await axios.get(`http://localhost:8800/api/programa/${id}`);
        setPrograma(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getPrograma();
  }, [id]);

  const { titulo, precio, dirigido, objetivo, descripcion, img, pdf } =
    programa;

  //PROGRAMA EDITADO
  const [programaEditado, setProgramaEditado] = useState({});

  const handleChange = (e) => {
    const value = e.target.value;
    setProgramaEditado({ ...programa, [e.target.name]: value });
  };

  //subir programa editado
  const updatePrograma = async (programa) => {
    try {
      const res = await axios.put(
        `http://localhost:8800/api/programa/${id}`,
        programa
      );
      const data = res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updatePrograma(programaEditado);
    router.push("/admin");
  };

  return (
    <div className="edit">
      <h1>EDITA EL PROGRAMA:</h1>
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
          placeholder="100€..."
          name="precio"
          defaultValue={precio}
          onChange={handleChange}
        />
      </div>
      <div className="grupo">
        <h4>MOTIVACIÓN:</h4>
        <input
          type="text"
          placeholder="Frase de motivación..."
          name="objetivo"
          defaultValue={objetivo}
          onChange={handleChange}
        />
      </div>
      <div className="grupo">
        <h4>DIRIGIDO A:</h4>
        <input
          type="text"
          placeholder="A quien va dirigido el programa..."
          name="dirigido"
          defaultValue={dirigido}
          onChange={handleChange}
        />
      </div>
      <div className="grupo">
        <h4>DESCRIPCIÓN:</h4>
        <input
          type="text"
          placeholder="Descripción de el programa..."
          name="descripcion"
          defaultValue={descripcion}
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
          defaultValue={img}
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
          defaultValue={pdf}
          onChange={handleChange}
        />
      </div>
      <button className="loginbtn" onClick={handleUpdate}>
        GUARDA LOS CAMBIOS
      </button>
    </div>
  );
};

export default Editprograma;
