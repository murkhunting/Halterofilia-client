import React from "react";
import { useState } from "react";
import axios from "axios";

import { useRouter } from "next/router";
import { parseCookies } from "../../lib/parseCookies";

const Creaonline = () => {
  const [online, setOnline] = useState({});
  console.log(online);

  const handleImg = (e) => {
    const file = e.target.files[0];

    TransformFileImg(file);
  };
  const TransformFileImg = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setOnline({ ...online, img: reader.result });
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
        setOnline({ ...online, pdf: reader.result });
      };
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setOnline({ ...online, [e.target.name]: value });
  };

  //create formación online
  const createOnline = async (online) => {
    try {
      const res = await axios.post("http://localhost:3000/api/online", online);
      const data = res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const router = useRouter();

  const handleCreateOnline = (e) => {
    e.preventDefault();
    createOnline(online);
    router.push("/admin");
  };

  return (
    <div>
      <div className="crea">
        <h1>CREA UNA NUEVA FORMACIÓN ONLINE:</h1>
        <div className="grupo">
          <h4>IDIOMA:</h4>
          <select
            name="idioma"
            id="type"
            defaultValue="esp"
            onChange={handleChange}
          >
            <option value="esp">Español</option>
            <option value="ing">Inglés</option>
            <option value="por">Portugués</option>
          </select>
        </div>
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
          <h4>IMAGEN DE LA FORMACIÓN:</h4>
          <input
            className="archivo"
            type="file"
            placeholder="Sube una imagen..."
            name="img"
            onChange={handleImg}
          />
        </div>
        <div className="grupo">
          <h4>PDF DE LA FORMACIÓN:</h4>
          <input
            className="archivo"
            type="file"
            placeholder="Sube el pdf..."
            name="pdf"
            onChange={handlePdf}
          />
        </div>
        <button className="loginbtn" onClick={handleCreateOnline}>
          CREAR FORMACIÓN ONLINE
        </button>
      </div>
    </div>
  );
};

export default Creaonline;

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
