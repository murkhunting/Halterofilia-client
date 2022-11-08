import React from "react";
import { useState, useEffect, useContext } from "react";
import axios from "axios";

import { login } from "../auth/apiCall";
import { AuthContext } from "../auth/AuthContext";

import Link from "next/link";

import { FaRegEdit } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";

import {
  loginFailure,
  loginStart,
  loginSuccess,
  initialState,
} from "../auth/AuthActions";
// import { useCookies } from "react-cookie";
// import { parseCookies } from "../helpers/index";

const Admin = () => {
  const loged = true;

  // const [cookie, setCookie] = useCookies(["user"]);

  //LOGGIN

  const [user, setUser] = useState("");
  const { isFetching, dispatch } = useContext(AuthContext);
  //1.coger datos de los inputs
  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  //2.funcion que realiza el login
  const handleLogin = (e) => {
    e.preventDefault();
    login(user, dispatch);
  };

  //LLAMADAS A LA BASE DE DATOS
  const [programas, setProgramas] = useState([]);
  const [formaciones, setFormaciones] = useState([]);

  useEffect(() => {
    const getAllPrograms = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/programa/all");
        setProgramas(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllPrograms();
  }, []);

  useEffect(() => {
    const getAllFormaciones = async () => {
      try {
        const res = await axios.get("http://localhost:8800/api/formacion/all");
        setFormaciones(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getAllFormaciones();
  }, []);

  //delete programa
  const deletePrograma = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/api/programa/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeletePrograma = (id) => {
    deletePrograma(id);
    window.location.reload(false);
  };

  //delete formacion
  const deleteFormacion = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/api/formacion/${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteFormacion = (id) => {
    deleteFormacion(id);
    window.location.reload(false);
  };

  //COMPROBAR SI HAY USER EN EL LOCAL STORAGE
  const userExist = useContext(AuthContext).user;

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
                {formaciones.map((formacion) => (
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
                          onClick={() => handleDeleteFormacion(formacion._id)}
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
                {programas.map((programa) => (
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
                          onClick={() => handleDeletePrograma(programa._id)}
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
