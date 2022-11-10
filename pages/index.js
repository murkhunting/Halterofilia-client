import { useState, useEffect } from "react";
import axios from "axios";

import Fichas from "../components/fichas/Fichas";
import Item from "../components/item/Item";

import { MdDoubleArrow } from "react-icons/md";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

import Link from "next/link";

export default function Home() {
  const [items, setItems] = useState([]);
  const [fichas, setFichas] = useState([]);

  useEffect(() => {
    const getRandomProgramas = async () => {
      try {
        const res1 = await axios.get(
          "http://localhost:8800/api/programa/random"
        );
        const res2 = await axios.get(
          "http://localhost:8800/api/formacion/next"
        );
        setItems(res1.data);
        setFichas(res2.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomProgramas();
  }, []);

  return (
    <div className="home">
      {/* PANTALLA PRINCIPAL */}
      <div className="portada">
        <div className="separador"></div>
        <div className="titulo">
          <h1>CLUB</h1>
          <h1>HALTEROFILIA</h1>
          <h1>BARCELONA</h1>
        </div>
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
        <div className="baner">
          <div className="scroll">
            <h2>· THINK DIFFERENT - TRAIN DIFFERENT ·</h2>
          </div>
        </div>
      </div>
      {/* PROGRAMA ONLINE */}
      <div className="programaonline">
        <div className="iz">
          <h1>PREFIERES ENTRENAR DESDE CUALQUIER LUGAR DEL MUNDO?</h1>
          <div className="flecha">
            <h2>
              DESCUBRE NUESTRO PROGRAMA ONLINE 100% PERSONALIZADO Y EMPIEZA A
              ENTRENAR DESDE DONDE QUIERAS Y CUANDO QUIERAS CON RESULTADOS
              GARANTIZADOS
            </h2>
            <div className="ico">
              <MdDoubleArrow />
            </div>
          </div>
        </div>
        <div className="de">
          <div className="wrap">
            <Link href="/online/personalizado">
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
            <Link href="/online/programas">
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
              QUE MEJOR SE AJUSTE A TUS NECESIDADES Y ENTRENA EN CUALQUIER
              SITIO.
            </h2>
          </div>
          <div className="nextformacion">
            <h2>PROGRAMAS DISPONIBLES:</h2>
            <div className="items">
              {items.map((programa) => (
                <Item className="list" key={programa._id} programa={programa} />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* STREAMING */}
      <div className="streaming">
        <h1>CLASES POR ZOOM</h1>
        <div className="cont">
          <div className="de">
            <div className="flecha">
              <div className="hor">
                <h2>
                  SI TIENES QUE ENTRENAR DESDE CASA Y DISPONES DEL MATERIAL
                  NECESARIO DESCUBRE NUESTRAS CLASES DIRIGIDAS A TRAVÉS DE ZOOM
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
              <Link href="/online/streaming">
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
      {/* FORMACIONES */}
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
            <Link href="/presenciales/formaciones">
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
            {fichas.map((formacion) => (
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
          <img className="team" src="/images/team.png" alt="team" />
        </div>
        <div className="de">
          <div className="wrap">
            <h2>
              CONOCE MÁS SOBRE NOSOTROS Y SOBRE LA HISTORIA DEL <br /> CLUB
              HALTEROFILIA BARCELONA
            </h2>
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
              <Link href="/presenciales/clases">
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
                <h2> TÉCNICA, FUERZA Y POTENCIA ·</h2>
                <h2> 2 MOVIMIENTOS OLÍMPICOS ·</h2>
                <h2> 100% HALTEOFILIA ·</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
