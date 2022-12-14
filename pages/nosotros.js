import React from "react";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

AiFillLinkedin;
const Nosotros = () => {
  return (
    <div className="nosotros">
      <div className="titulo">
        <h1>CLUB HALTEROFILIA BARCELONA</h1>
      </div>
      <div className="fundador">
        <h1>LOS FUNDADORES:</h1>
        <div className="grup">
          <img className="man" src="/images/ronald.png" alt="man" />
          <div className="sideIz">
            <h2>
              RONALD PAZ
              <span>
                <AiFillInstagram />
              </span>
              <span>
                <AiFillLinkedin />
              </span>
            </h2>
            <h3>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </h3>
          </div>
        </div>
        <div className="grup">
          <img className="man" src="/images/cris.png" alt="man" />
          <div className="sideIz">
            <h2>
              CRIS
              <span>
                <AiFillInstagram />
              </span>
              <span>
                <AiFillLinkedin />
              </span>
            </h2>
            <h3>
              He trabajado durante 5 años en distintos centros aprendiendo
              nuevas metodologías de trabajo y formándome como entrenador. Mis
              conocimientos vienen de la lectura y sobre todo la formación.
            </h3>
          </div>
        </div>
      </div>
      <div className="fundador">
        <h1>NUESTROS COACHES:</h1>
        <div className="grup">
          <img className="man" src="/images/hernan.png" alt="man" />
          <div className="sideIz">
            <h2>
              HERNAN GARCÍA
              <span>
                <AiFillInstagram />
              </span>
              <span>
                <AiFillLinkedin />
              </span>
            </h2>
            <h3>
              ex levantador internacional integrante del equipo nacional y
              becado en el Centro de Alto Rendimiento durante 8 años. <br />
              Formado en entrenamiento personal y con 20 años de experiencia en
              el mundo de la halterofilia.
            </h3>
          </div>
        </div>
        <div className="grup">
          <img className="man" src="/images/coach2.png" alt="man" />
          <div className="sideIz">
            <h2>
              JORDI GARCÍA
              <span>
                <AiFillInstagram />
              </span>
              <span>
                <AiFillLinkedin />
              </span>
            </h2>
            <h3>
              {/* Mi trayectoria en el mundo del acondicionamiento físico empieza 11
              años atrás practicando disciplinas como calistenia y
              powerbuilding. absorviendo lo mejor de cada sistema de
              entrenamiento para ir puliendo mis conocimientos y habilidades a
              la hora de entrenarme a mi y a mis clientes. */}
              He trabajado durante 5 años en distintos centros aprendiendo
              nuevas metodologías de trabajo y formándome como entrenador. Mis
              conocimientos vienen de la lectura y sobre todo la formación.
              {/* <br />
              <br /> - CFGS acondicionamiento físico (CAR Sant Cugat) <br />-
              Máster en fisioterapia (Grupo ESNECA) <br />- Máster en
              rehabilitación y prevención de lesiones (Grupo ESNECA) <br />-
              Curso Formativo Entrenamientos EPOC (ANEF) <br />- Curso Formativo
              Entrenamientos Periodo de embarazo (ANEF) */}
            </h3>
          </div>
        </div>
        {/* <div className="grup">
          <img className="man" src="/images/coach1.png" alt="man" />
          <div className="sideDe">
            <h2>JORDI GARCÍA</h2>
            <h3>
              Mi trayectoria en el mundo del acondicionamiento físico empieza 11
              años atrás practicando disciplinas como calistenia y
              powerbuilding. absorviendo lo mejor de cada sistema de
              entrenamiento para ir puliendo mis conocimientos y habilidades a
              la hora de entrenarme a mi y a mis clientes. He trabajado durante
              5 años en distintos centros aprendiendo nuevas metodologías de
              trabajo y formándome como entrenador. Mis conocimientos vienen de
              la lectura y sobre todo la formación.
              <br />
              <br /> - CFGS acondicionamiento físico (CAR Sant Cugat) <br />-
              Máster en fisioterapia (Grupo ESNECA) <br />- Máster en
              rehabilitación y prevención de lesiones (Grupo ESNECA) <br />-
              Curso Formativo Entrenamientos EPOC (ANEF) <br />- Curso Formativo
              Entrenamientos Periodo de embarazo (ANEF)
            </h3>
          </div>
        </div> */}
      </div>
      <div className="club">
        <h1>EL CLUB:</h1>
        <h3>
          Club Halterofilia Barcelona pone a tu disposición un espacio único de
          150 m2 específicamente diseñado para la práctica de la Halterofilia.
          Doce puestos de levantamiento totalmente equipados con tarimas de
          madera, discos y barras olimpicas, racks, tacos de madera … para que
          entrenes como los profesionales y con total seguridad. Tambien
          disponemos de una amplia zona de vestuarios con taquillas y duchas.
        </h3>
        <div className="galeria"></div>
      </div>
    </div>
  );
};

export default Nosotros;
