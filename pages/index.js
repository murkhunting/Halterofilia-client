import { useState, useEffect } from "react";
import axios from "axios";

import Fichas from "../components/fichas/Fichas";
import Item from "../components/item/Item";
import Card from "../components/card/Card";

import { MdDoubleArrow } from "react-icons/md";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

import Link from "next/link";

export default function Home({ programas, formaciones, online }) {
  return (
    <div className="home">
      {/* PANTALLA PRINCIPAL */}
      <div className="portada">
        <div className="separador"></div>
        <div className="titulo">
          <h1>CLUB</h1>
          <h1>HALTEROFILIA</h1>
          <h1>BARCELONA</h1>
          <div className="social">
            <Link href="https://www.instagram.com/halterofiliabarcelona/?hl=es">
              <a>
                <h5>
                  <AiFillInstagram />
                </h5>
              </a>
            </Link>
            <Link href="https://www.facebook.com/barcelonahalterofilia">
              <a>
                <h5>
                  <FaFacebook />
                </h5>
              </a>
            </Link>
            <Link href="https://www.youtube.com/channel/UCW1qpR8BAfllKR98i50_gxQ?view_as=subscriber">
              <a>
                <h5>
                  <AiFillYoutube />
                </h5>
              </a>
            </Link>
          </div>
        </div>
        <div className="baner">
          <div className="scroll">
            <h2>· THINK DIFFERENT - TRAIN DIFFERENT ·</h2>
          </div>
        </div>
      </div>
      {/* FORMACIONES ONLINE */}
      <div className="formacionestecnicas">
        <div className="texto">
          <h1>FORMACIONES ONLINE</h1>
        </div>

        <div className="container">
          <div className="formacionlink">
            <h2>
              SI ERES UN ATLETA PROFESIONAL, UN ENTRENADOR O PREPARADOR FÍSICO O
              QUIERES APRENDER AL ÁXIMO NIVEL, NO TE PIERDAS NUESTRAS
              FORMACIONES ONLINE Y MEJORA DESDE CUALQUIER LUGAR DEL MUNDO.
            </h2>
            <Link href="/formaciones/fonlines">
              <a>
                <img
                  className="boton"
                  src="/images/4FORMACIONES.png"
                  alt="logo"
                />
              </a>
            </Link>
          </div>
          <div className="nextformacion">
            <h2>ÚLTIMA FORMACIÓN AGREGADA:</h2>
            {online.map((online) => (
              <Card className="list" key={online._id} online={online} />
            ))}
          </div>
        </div>
      </div>
      {/* PROGRAMA ONLINE */}
      <div className="programaonline">
        <div className="iz">
          <h1>SIENTES QUE NO AVANZAS CON LOS ENTRENOS QUE REALIZAS?</h1>
          <div className="flecha">
            <h2>
              DESCUBRE NUESTRO PROGRAMA ONLINE 100% PERSONALIZADO, EMPIEZA A VER
              RESULTADOS GARANTIZADOS Y CUMPLE CON TODOS TUS OBJETIVOS.
            </h2>
            <div className="ico">
              <MdDoubleArrow />
            </div>
          </div>
        </div>
        <div className="de">
          <div className="wrap">
            <Link href="/programas/personalizado">
              <a>
                <img
                  className="boton"
                  src="/images/1PERSONALIZADO.png"
                  alt="logo"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
      {/* PROGRAMAS TIPO */}
      <div className="programastipo">
        <div className="texto">
          <h1>PROGRAMAS DE ENTRENAMIENTO</h1>
        </div>

        <div className="container">
          <div className="formacionlink">
            <Link href="/programas/programasonline">
              <a>
                <img
                  className="boton"
                  src="/images/2PROGRAMAS.png"
                  alt="logo"
                />
              </a>
            </Link>
            <div className="ico">
              <MdDoubleArrow />
            </div>
            <h2>
              DESCUBRE NUESTROS PROGRAMAS DE ENTRENAMIENTO GUIADOS Y ADQUIERE EL
              QUE MEJOR SE AJUSTE A TUS NECESIDADES PARA ENTRENAR DESDE
              CUALQUIER SITIO.
            </h2>
          </div>
          <div className="nextformacion">
            <h2>NUEVOS PROGRAMAS:</h2>
            <div className="items">
              {programas.map((programa) => (
                <Item className="list" key={programa._id} programa={programa} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* STREAMING */}
      <div className="streaming">
        <h1>CLASES POR STREAMING</h1>
        <div className="cont">
          <div className="de">
            <div className="flecha">
              <div className="hor">
                <h2>
                  SI QUIERES ENTRENAR DESDE CASA DE FORMA GUIADA Y DISPONES DEL
                  MATERIAL NECESARIO NO TE PIERDAS NUESTRAS CLASES DIRIGIDAS A
                  TRAVÉS DE ZOOM
                </h2>
                {/* <h2> TÉCNICA, FUERZA Y POTENCIA ·</h2>
                <h2> 2 MOVIMIENTOS OLÍMPICOS ·</h2>
                <h2> 100% HALTEOFILIA ·</h2> */}
              </div>
              <div className="ico">
                <MdDoubleArrow />
              </div>
            </div>
          </div>
          <div className="iz">
            <div className="wrap">
              <Link href="/clases/streaming">
                <a>
                  <img
                    className="boton"
                    src="/images/13STREAMING.png"
                    alt="logo"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* FORMACIONES PRESENCIALES */}
      <div className="formacionestecnicas">
        <div className="texto">
          <h1>FORMACIONES PRESENCIALES</h1>
        </div>

        <div className="container">
          <div className="formacionlink">
            <h2>
              SI ERES UN ATLETA PROFESIONAL, UN ENTRENADOR O PREPARADOR FÍSICO O
              QUIERES APRENDER AL ÁXIMO NIVEL NO TE PIERDAS NUESTROS SEMINARIOS
              Y CURSOS DE MEJORA TÉCNICA.
            </h2>
            <Link href="/formaciones/fpresenciales">
              <a>
                <img
                  className="boton"
                  src="/images/4FORMACIONES.png"
                  alt="logo"
                />
              </a>
            </Link>
          </div>
          <div className="nextformacion">
            <h2>PRÓXIMO CURSO DISPONIBLE:</h2>
            {formaciones.map((formacion) => (
              <Fichas
                className="list"
                key={formacion._id}
                formacion={formacion}
              />
            ))}
          </div>
        </div>
      </div>
      {/* NOSOTROS */}
      <div className="sobrenosotros">
        <div className="iz">
          <h1>NUESTRO EQUIPO</h1>
          <img className="team" src="/images/equipo.png" alt="team" />
        </div>
        <div className="de">
          <div className="wrap">
            <h2>CONOCE MÁS SOBRE EL EQUIPO Y EL CLUB HALTEROFILIA BARCELONA</h2>
            <Link href="/nosotros">
              <a>
                <img
                  className="boton"
                  src="/images/3nosotrosbtn.png"
                  alt="logo"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
      {/* CLASES PRESENCIALES */}
      <div className="clasespresenciales">
        <h1>CLASES PRESENCIALES</h1>
        <div className="cont">
          <div className="iz">
            <div className="wrap">
              <Link href="/clases/cpresenciales">
                <a>
                  <img
                    className="boton"
                    src="/images/14CLASES.png"
                    alt="logo"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="de">
            <div className="flecha">
              <div className="ico">
                <MdDoubleArrow />
              </div>
              <div className="hor">
                <h2>
                  DESCUBRE MÁS SOBRE NUESTRAS CLASES PRESENCIALES Y NO DUDES EN
                  APUNTARTE!
                </h2>
                <h2>- TÉCNICA, FUERZA Y CONSTANCIA</h2>
                <h2>- 2 MOVIMIENTOS OLÍMPICOS </h2>
                <h2>- 100% HALTEOFILIA </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const res1 = await axios.get("http://localhost:3000/api/programa/last2");
  const res2 = await axios.get("http://localhost:3000/api/formacion/next");
  const res3 = await axios.get("http://localhost:3000/api/online/ultimo");
  return {
    props: {
      programas: res1.data,
      formaciones: res2.data,
      online: res3.data,
    },
  };
};
