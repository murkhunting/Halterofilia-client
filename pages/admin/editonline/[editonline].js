import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";

import { parseCookies } from "../../../lib/parseCookies";

const Editonline = () => {
  const router = useRouter();
  const id = router.query.editonline;
  const [online, setOnline] = useState({});

  useEffect(() => {
    const getOnline = async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/api/online/id/${id}`
        );
        setOnline(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getOnline();
  }, [id]);

  const { idioma, titulo, precio, dirigido, objetivo, descripcion, link } =
    online;

  //ONLINE EDITADO
  const [onlineEditado, setOnlineEditado] = useState({});

  const handleChange = (e) => {
    const value = e.target.value;
    setOnlineEditado({ ...online, [e.target.name]: value });
  };

  //subir online editado
  const updateOnline = async (online) => {
    try {
      const res = await axios.put(
        `http://localhost:3000/api/online/id/${id}`,
        online
      );
      const data = res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateOnline(onlineEditado);
    router.push("/admin");
  };

  return (
    <div className="edit">
      <h1>EDITA LA FORMACIÓN ONLINE:</h1>
      <div className="grupo">
        <h4>IDIOMA:</h4>
        <select
          name="idioma"
          id="type"
          defaultValue={idioma}
          onChange={handleChange}
        >
          <option value="esp">Español</option>
          <option value="eng">Inglés</option>
          <option value="por">Portugués</option>
        </select>
      </div>
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
        <h4>LINK DEL PAGO:</h4>
        <input
          type="text"
          placeholder="Copia el link para pagar..."
          name="link"
          defaultValue={link}
          onChange={handleChange}
        />
      </div>
      <button className="loginbtn" onClick={handleUpdate}>
        GUARDA LOS CAMBIOS
      </button>
    </div>
  );
};

export default Editonline;

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
