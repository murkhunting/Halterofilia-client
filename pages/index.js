// import Layout from "../layouts/Layout";

// import logo from "../public/images/logo.png";
import Fichas from "../components/fichas/Fichas";
import { MdDoubleArrow } from "react-icons/md";

import Link from "next/link";

export default function Home() {
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
        <div className="baner">
          <div className="scroll">
            <h2>· THINK DIFFERENT - TRAIN DIFFERENT ·</h2>
          </div>
        </div>
      </div>
      {/* SECCION 1 PROGRAMA ONLINE */}
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
            <Link href="/online">
              <a>
                <img
                  className="boton"
                  src="/images/programaboton.png"
                  alt="logo"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
      {/* SECCION 2 FORMACIONES */}
      <div className="formacionestecnicas">
        <div className="texto">
          <h1>FORMACIONES TÉCNICAS</h1>
        </div>

        <div className="container">
          <div className="formacionlink">
            <h2>
              SI ERES UN ATLETA PROFESIONAL, UN ENTRENADOR O PREPARADOR FÍSICO O
              QUIERES APRENDER AL ÁXIMO NIVEL NO TE PIERDAS NUESTROS SEMINARIOS
              Y CURSOS DE MEJORA TÉCNICA.
            </h2>
            <Link href="/formaciones">
              <a>
                <img
                  className="boton"
                  src="/images/programaboton.png"
                  alt="logo"
                />
              </a>
            </Link>
          </div>
          <div className="nextformacion">
            <h2>PRÓXIMO CURSO DISPONIBLE:</h2>
            <Fichas />
          </div>
        </div>
      </div>
      {/* SECCION 3 NOSOTROS */}
      <div className="sobrenosotros">NOSOTROS</div>
      {/* SECCION 4 CLASES PRESENCIALES */}
      <div className="clasespresenciales">
        <h1>CLASES PRESENCIALES</h1>
        <div className="cont">
          <div className="iz">
            <div className="wrap">
              <Link href="/online">
                <a>
                  <img
                    className="boton"
                    src="/images/programaboton.png"
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
