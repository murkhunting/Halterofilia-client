import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

import { IoPricetagsOutline } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { CgTimelapse } from "react-icons/cg";
import { AiOutlineSchedule } from "react-icons/ai";

const Curso = ({ formacion }) => {
  // const router = useRouter();
  // const id = router.query.formacion;

  // const [formacion, setFormacion] = useState({});

  // useEffect(() => {
  //   const getFormacion = async () => {
  //     try {
  //       const res = await axios.get(
  //         `http://localhost:8800/api/formacion/${id}`
  //       );
  //       setFormacion(res.data);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getFormacion();
  // }, [id]);

  const {
    titulo,
    precio,
    oferta,
    precioferta,
    inicio,
    duracion,
    horario,
    dirigido,
    objetivo,
  } = formacion;

  return (
    <div className="curso">
      <h1>{titulo}</h1>
      <div className="detalles">
        <h2>
          <span>
            <MdDateRange />
          </span>
          INICIO: {inicio}
        </h2>
        <h2>
          <span>
            <IoPricetagsOutline />
          </span>
          PRECIO: {precio}
        </h2>
        <h2>
          <span>
            <CgTimelapse />
          </span>
          DURACIÓN: {duracion}
        </h2>
        <h2>
          <span>
            <AiOutlineSchedule />
          </span>
          {horario}
        </h2>
      </div>
      <div className="dirigido">
        <h2>{dirigido}</h2>
      </div>
      <div className="objetivo">
        <h3>OBJETIVO DE LA FORMACIÓN:</h3>
        <h3>{objetivo}</h3>
      </div>
      <div className="enlla">
        <h3>
          SI ESTÁS INTERESADO EN REALIZAR ESTA FORMACIÓN PROFESIONAL CONTACTA
          CON NOSOTROS PARA APUNTARTE.
        </h3>
      </div>
      <Link href="/contacto">
        <a>
          <button className="loginbtn">PONTE EN CONTACTO</button>
        </a>
      </Link>
    </div>
  );
};

export default Curso;

export const getServerSideProps = async ({ params }) => {
  const id = params.fpresencial;
  console.log(id);
  const res = await axios.get(`http://localhost:3000/api/formacion/id/${id}`);
  return {
    props: {
      formacion: res.data,
    },
  };
};
