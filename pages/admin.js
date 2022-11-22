import React from "react";
import { useState, useRouter } from "react";
import axios from "axios";
import Cookie from "js-cookie";

import { parseCookies } from "../lib/parseCookies";

import Link from "next/link";

import { FaRegEdit } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";

const Admin = ({ formaciones, programas, token }) => {
  console.log(token);
  const [programasList, setProgramasList] = useState(programas);
  const [formacionesList, setFormacionesList] = useState(formaciones);
  //delete programa
  const deletePrograma = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/programa/id/${id}`);
      setProgramasList(programasList.filter((programa) => programa._id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  //delete formacion
  const deleteFormacion = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/api/formacion/id/${id}`);
      setFormacionesList(
        formacionesList.filter((formacion) => formacion._id !== id)
      );
    } catch (err) {
      console.log(err);
    }
  };

  //COMPROBAR SI HAY USER EN EL LOCAL STORAGE
  // const userExist = useContext(AuthContext).user;
  const userExist = true;

  return (
    <div className="admin">
      <div className="objetos">
        <h1>FORMACIONES ONLINE</h1>
        <div className="enumera">
          {formacionesList.map((formacion) => (
            <div className="linea" key={formacion._id}>
              <h2>{formacion.titulo}</h2>
              <div className="iconitos">
                <Link href={`/admin/editformacion/${formacion._id}`}>
                  <a>
                    <FaRegEdit className="tamaño" />
                  </a>
                </Link>
                <div>
                  <FiTrash2
                    className="tamaño"
                    onClick={() => deleteFormacion(formacion._id)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link href="/admin/creaformacion">
          <a className="btn">CREA UNA NUEVA FORMACIÓN</a>
        </Link>
      </div>
      <div className="objetos">
        <h1>FORMACIONES PRESENCIALES</h1>
        <div className="enumera">
          {formacionesList.map((formacion) => (
            <div className="linea" key={formacion._id}>
              <h2>{formacion.titulo}</h2>
              <div className="iconitos">
                <Link href={`/admin/editformacion/${formacion._id}`}>
                  <a>
                    <FaRegEdit className="tamaño" />
                  </a>
                </Link>
                <div>
                  <FiTrash2
                    className="tamaño"
                    onClick={() => deleteFormacion(formacion._id)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link href="/admin/creaformacion">
          <a className="btn">CREA UNA NUEVA FORMACIÓN</a>
        </Link>
      </div>
      <div className="objetos">
        <h1>PROGRAMAS</h1>
        <div className="enumera">
          {programasList.map((programa) => (
            <div className="linea" key={programa._id}>
              <h2>{programa.titulo}</h2>
              <div className="iconitos">
                <Link href={`/admin/editprograma/${programa._id}`}>
                  <a>
                    <FaRegEdit className="tamaño" />
                  </a>
                </Link>
                <div>
                  <FiTrash2
                    className="tamaño"
                    onClick={() => deletePrograma(programa._id)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <Link href="/admin/creaprograma">
          <a className="btn">CREA UN NUEVO PROGRAMA</a>
        </Link>
      </div>
    </div>
  );
};

export default Admin;

export const getServerSideProps = async ({ req }) => {
  const cookies = parseCookies(req);
  const res1 = await axios.get("http://localhost:3000/api/programa");
  const res2 = await axios.get("http://localhost:3000/api/formacion");
  if (cookies.token) {
    const token = cookies.token;
    return {
      props: {
        token: token || null,
        programas: res1.data,
        formaciones: res2.data,
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
