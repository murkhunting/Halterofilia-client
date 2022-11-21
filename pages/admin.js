import React from "react";
import { useState, useContext } from "react";
import axios from "axios";

import { login } from "../auth/apiCall";
import { AuthContext } from "../auth/AuthContext";

import Link from "next/link";

import { FaRegEdit } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";

const Admin = ({ formaciones, programas }) => {
  // const [cookie, setCookie] = useCookies(["user"]);

  //LOGGIN

  // const [user, setUser] = useState("");
  // const { isFetching, dispatch } = useContext(AuthContext);
  // //1.coger datos de los inputs
  // const handleChange = (e) => {
  //   const value = e.target.value;
  //   setUser({ ...user, [e.target.name]: value });
  // };

  // //2.funcion que realiza el login
  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   login(user, dispatch);
  // };

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
      {!userExist ? (
        <div className="login">
          <form className="container">
            <div className="cover">
              <h2>ADMIN:</h2>
              <input
                type="text"
                placeholder="..."
                name="username"
                onChange={handleChange}
              />
            </div>
            <div className="cover">
              <h2>PASSWORD:</h2>
              <input
                type="password"
                placeholder="*****"
                name="password"
                onChange={handleChange}
              />
            </div>
            <button
              className="loginbtn"
              onClick={handleLogin}
              disabled={isFetching}
            >
              LOGIN
            </button>
          </form>
        </div>
      ) : (
        <div className="panel">
          {/* LISTA DE formaciones */}
          <div className="lista">
            <div className="list">
              <h1>LISTA DE FORMACIONES:</h1>
              <div className="formaciones">
                {formacionesList.map((formacion) => (
                  <div className="wrap" key={formacion._id}>
                    <h2>{formacion.titulo}</h2>
                    <div className="icons">
                      <Link href={`/admin/editformacion/${formacion._id}`}>
                        <a>
                          <FaRegEdit className="icon" />
                        </a>
                      </Link>
                      <div>
                        <FiTrash2
                          className="icon"
                          onClick={() => deleteFormacion(formacion._id)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Link href="/admin/creaformacion">
              <a className="loginbtn">CREA UNA NUEVA FORMACIÓN</a>
            </Link>
          </div>
          <div className="lista">
            <div className="list">
              <h1>LISTA DE PROGRAMAS:</h1>
              <div className="formaciones">
                {programasList.map((programa) => (
                  <div className="wrap" key={programa._id}>
                    <h2>{programa.titulo}</h2>
                    <div className="icons">
                      <Link href={`/admin/editprograma/${programa._id}`}>
                        <a>
                          <FaRegEdit className="icon" />
                        </a>
                      </Link>
                      <div>
                        <FiTrash2
                          className="icon"
                          onClick={() => deletePrograma(programa._id)}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <Link href="/admin/creaprograma">
              <a className="loginbtn">CREA UNA NUEVO PROGRAMA</a>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;

export const getServerSideProps = async () => {
  const res1 = await axios.get("http://localhost:3000/api/programa");
  const res2 = await axios.get("http://localhost:3000/api/formacion");
  return {
    props: {
      programas: res1.data,
      formaciones: res2.data,
    },
  };
};
