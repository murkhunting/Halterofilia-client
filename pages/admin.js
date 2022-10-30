import React from "react";
import { useState } from "react";

import Link from "next/link";

import { FaRegEdit } from "react-icons/fa";
import { FiTrash2 } from "react-icons/fi";

const Admin = () => {
  const [login, setLogin] = useState(false);

  const formaciones = [
    {
      _id: "jsbdosdon",
      titulo: "III CURSO ESPECIALISTA EN LEVANTAMIENTOS OLÍMPICOS",
      precio: "100€",
      oferta: false,
      preciooferta: "",
      inicio: "12/08/2023",
      duracion: "4 Meses",
      horario: "Sábados de 9:00 a 14:00",
      dirigido:
        "Va dirigido a profesionales, atletas, entrenadores personales, entrenadores de crossfit, estudiantes...",
      objetivo:
        "Aprenderás las bases y los fundamentos de la halterofilia. Nos basamos en la ciencia y en los años de experiencia de práctica y enseñanza que nos avalan. Te enseñaremos la correcta ejecución de cada uno de los movimientos de la halterofilia, sus ejercicios auxiliares y su aplicación en el rendimiento deportivo y en la salud. También aprenderás a corregir los fallos técnicos de tus atletas o clientes de una forma eficiente y fundamentada. Una vez hayas aprendido a detectar los fallos más comunes o específicos, te daremos recursos prácticos para que aprendas a corregir estos fallos técnicos. Aprenderás además diferentes metodologías de enseñanza para que puedas aplicar la más adecuada según el perfil de tus atletas o clientes. Una de las características de nuestra metodología es su gran carga práctica y el reducido número de alumnos en el aula. En definitiva, con todos estos recursos y herramientas adquiridos, te convertirán en un mejor profesional !!",
    },
    {
      _id: "osdhosod",
      titulo: "WEIGHTLIFTING COURSE LEVEL I",
      precio: "100€",
      oferta: false,
      preciooferta: "",
      inicio: "12/08/2023",
      duracion: "4 Meses",
      horario: "Sábados de 9:00 a 14:00",
      dirigido:
        "Va dirigido a profesionales, atletas, entrenadores personales, entrenadores de crossfit, estudiantes...",
      objetivo:
        "Aprenderás las bases y los fundamentos de la halterofilia. Nos basamos en la ciencia y en los años de experiencia de práctica y enseñanza que nos avalan. Te enseñaremos la correcta ejecución de cada uno de los movimientos de la halterofilia, sus ejercicios auxiliares y su aplicación en el rendimiento deportivo y en la salud. También aprenderás a corregir los fallos técnicos de tus atletas o clientes de una forma eficiente y fundamentada. Una vez hayas aprendido a detectar los fallos más comunes o específicos, te daremos recursos prácticos para que aprendas a corregir estos fallos técnicos. Aprenderás además diferentes metodologías de enseñanza para que puedas aplicar la más adecuada según el perfil de tus atletas o clientes. Una de las características de nuestra metodología es su gran carga práctica y el reducido número de alumnos en el aula. En definitiva, con todos estos recursos y herramientas adquiridos, te convertirán en un mejor profesional !!",
    },
    {
      _id: "cdczxcd",
      titulo: "SNATCH SEMINAR",
      precio: "100€",
      oferta: false,
      preciooferta: "",
      inicio: "12/08/2023",
      duracion: "4 Meses",
      horario: "Sábados de 9:00 a 14:00",
      dirigido:
        "Va dirigido a profesionales, atletas, entrenadores personales, entrenadores de crossfit, estudiantes...",
      objetivo:
        "Aprenderás las bases y los fundamentos de la halterofilia. Nos basamos en la ciencia y en los años de experiencia de práctica y enseñanza que nos avalan. Te enseñaremos la correcta ejecución de cada uno de los movimientos de la halterofilia, sus ejercicios auxiliares y su aplicación en el rendimiento deportivo y en la salud. También aprenderás a corregir los fallos técnicos de tus atletas o clientes de una forma eficiente y fundamentada. Una vez hayas aprendido a detectar los fallos más comunes o específicos, te daremos recursos prácticos para que aprendas a corregir estos fallos técnicos. Aprenderás además diferentes metodologías de enseñanza para que puedas aplicar la más adecuada según el perfil de tus atletas o clientes. Una de las características de nuestra metodología es su gran carga práctica y el reducido número de alumnos en el aula. En definitiva, con todos estos recursos y herramientas adquiridos, te convertirán en un mejor profesional !!",
    },
    {
      _id: "ewdwdqaav",
      titulo: "II CURSO ESPECIALISTA EN LEVANTAMIENTOS OLÍMPICOS",
      precio: "100€",
      oferta: false,
      preciooferta: "",
      inicio: "12/08/2023",
      duracion: "4 Meses",
      horario: "Sábados de 9:00 a 14:00",
      dirigido:
        "Va dirigido a profesionales, atletas, entrenadores personales, entrenadores de crossfit, estudiantes...",
      objetivo:
        "Aprenderás las bases y los fundamentos de la halterofilia. Nos basamos en la ciencia y en los años de experiencia de práctica y enseñanza que nos avalan. Te enseñaremos la correcta ejecución de cada uno de los movimientos de la halterofilia, sus ejercicios auxiliares y su aplicación en el rendimiento deportivo y en la salud. También aprenderás a corregir los fallos técnicos de tus atletas o clientes de una forma eficiente y fundamentada. Una vez hayas aprendido a detectar los fallos más comunes o específicos, te daremos recursos prácticos para que aprendas a corregir estos fallos técnicos. Aprenderás además diferentes metodologías de enseñanza para que puedas aplicar la más adecuada según el perfil de tus atletas o clientes. Una de las características de nuestra metodología es su gran carga práctica y el reducido número de alumnos en el aula. En definitiva, con todos estos recursos y herramientas adquiridos, te convertirán en un mejor profesional !!",
    },
  ];

  return (
    <div className="admin">
      {login ? (
        <div className="login">
          <form className="container">
            <div className="cover">
              <h2>ADMIN:</h2>
              <input
                type="text"
                placeholder="..."
                name="username"
                // onChange={handleChange}
              />
            </div>
            <div className="cover">
              <h2>PASSWORD:</h2>
              <input
                type="text"
                placeholder="*****"
                name="password"
                // onChange={handleChange}
              />
            </div>
            <button
              className="loginbtn"
              //   onClick={handleLogin}
              //   disabled={isFetching}
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
                          // onClick={() => handleDelete(formacion._id)}
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
                {formaciones.map((formacion) => (
                  <div className="wrap" key={formacion._id}>
                    <h2>{formacion.titulo}</h2>
                    <div className="icons">
                      <Link href={`/admin/editprograma/${formacion._id}`}>
                        <a>
                          <FaRegEdit className="icon" />
                        </a>
                      </Link>
                      <div>
                        <FiTrash2
                          className="icon"
                          // onClick={() => handleDelete(formacion._id)}
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
