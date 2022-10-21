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
                  className="programaboton"
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
          <h2>
            · SEMINARIOS Y CURSOS DE MEJORA TÉCNICA DIRIGIDOS A ATLETAS,
            ENTRENADORES Y PROFESIONALES DE LA HALTEROFILIA ·
          </h2>
        </div>

        <div className="container">
          <Fichas />
          <Fichas />
          <Fichas />
        </div>
      </div>
      {/* SECCION 3 NOSOTROS */}
      <div className="sobrenosotros">NOSOTROS</div>
    </div>
  );
}
