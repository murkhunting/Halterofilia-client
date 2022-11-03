import React from "react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";

import { IoPricetagsOutline } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";
import { CgTimelapse } from "react-icons/cg";
import { AiOutlineSchedule } from "react-icons/ai";

const Curso = () => {
  const router = useRouter();
  const id = router.query.formacion;

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

  const { titulo, precio, oferta, precioferta, inicio, dirigido, objetivo } =
    formacion;

  return (
    <div className="curso">
      <h1>{titulo}</h1>
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
        <h2>{dirigido}</h2>
      </div>
      <div className="objetivo">
        <h2>OBJETIVO DEL CURSO:</h2>
        <h3>{objetivo}</h3>
      </div>
    </div>
  );
};

export default Curso;
