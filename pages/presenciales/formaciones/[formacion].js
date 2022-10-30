import React from "react";

import { IoPricetagsOutline } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { CgTimelapse } from "react-icons/cg";
import { AiOutlineSchedule } from "react-icons/ai";

const Curso = () => {
  return (
    <div className="curso">
      <h1>III CURSO ESPECIALISTA EN LEVANTAMIENTOS OLÍMPICOS</h1>
      <div className="detalles">
        <h2>
          <span>
            <MdDateRange />
          </span>
          INICIO: 12/02/2023
        </h2>
        <h2>
          <span>
            <IoPricetagsOutline />
          </span>
          PRECIO: 348€
        </h2>
        <h2>
          <span>
            <CgTimelapse />
          </span>
          DURACIÓN: 100 HORAS
        </h2>
        <h2>
          <span>
            <AiOutlineSchedule />
          </span>
          SÁBADOS 9:00-14:00
        </h2>
      </div>
      <div className="dirigido">
        <h2>
          Dirigidos a Entrenadores de CROSSFIT, Entrenadores Powerlifting,
          Entrenadores de equipo y deportes de contacto, Entrenadores
          Personales, Monitores Sala Fitness, Graduados en CAFyD...
        </h2>
      </div>
      <div className="objetivo">
        <h2>OBJETIVO DEL CURSO:</h2>
        <h3>
          Aprenderás las bases y los fundamentos de la halterofilia. Nos basamos
          en la ciencia y en los años de experiencia de práctica y enseñanza que
          nos avalan. Te enseñaremos la correcta ejecución de cada uno de los
          movimientos de la halterofilia, sus ejercicios auxiliares y su
          aplicación en el rendimiento deportivo y en la salud. También
          aprenderás a corregir los fallos técnicos de tus atletas o clientes de
          una forma eficiente y fundamentada. Una vez hayas aprendido a detectar
          los fallos más comunes o específicos, te daremos recursos prácticos
          para que aprendas a corregir estos fallos técnicos. Aprenderás además
          diferentes metodologías de enseñanza para que puedas aplicar la más
          adecuada según el perfil de tus atletas o clientes. Una de las
          características de nuestra metodología es su gran carga práctica y el
          reducido número de alumnos en el aula. En definitiva, con todos estos
          recursos y herramientas adquiridos, te convertirán en un mejor
          profesional!
        </h3>
      </div>
    </div>
  );
};

export default Curso;
