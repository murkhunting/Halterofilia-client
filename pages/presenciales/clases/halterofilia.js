import React from "react";

import { BsClockHistory } from "react-icons/bs";
import { FiUsers, FiBarChart2 } from "react-icons/fi";

const Halterofilia = () => {
  return (
    <div className="halterofilia">
      <h1>CLASES DE HALTEROFILIA</h1>
      <div className="detalles">
        <h2>
          <span>
            <FiUsers />
          </span>
          CLASES REDUCIDAS DE 6-8 ATLETAS
        </h2>
        <h2>
          <span>
            <BsClockHistory />
          </span>
          60 MINUTOS
        </h2>
        <h2>
          <span>
            <FiBarChart2 />
          </span>
          TODOS LOS NIVELES DE DIFICULTAD
        </h2>
      </div>
      <div className="horarios">
        <h2>HORARIO DE LAS CLASES:</h2>
        <div className="horas">
          <div className="hora">
            <h2>LUNES</h2>
            <h2>17:00 - 22:00</h2>
          </div>
          <div className="hora">
            <h2>MARTES</h2>
            <h2>17:00 - 22:00</h2>
          </div>
          <div className="hora">
            <h2>MIÉRCOLES</h2>
            <h2>17:00 - 22:00</h2>
          </div>
          <div className="hora">
            <h2>JUEVES</h2>
            <h2>17:00 - 22:00</h2>
          </div>
          <div className="hora">
            <h2>VIERNES</h2>
            <h2>17:00 - 22:00</h2>
          </div>
        </div>
      </div>
      <div className="descripcion">
        <h2>
          Con nosotros tendrás a tu alcance la practica de la halterofilia desde
          el nivel inicial al más avanzado, de una manera segura y progresarás
          según tus capacidades y necesidades. Y lo harás acompañado en todo
          momento por los mejores profesionales, en el entorno más apropiado y
          dentro de las mejores instalaciones de Barcelona para la práctica de
          este deporte. Con nosotros encontrarás la seguridad, la fuerza y la
          disciplina únicas para alcanzar tus objetivos.
        </h2>
        <h2>
          Además para obtener éxito en la halterofilia, los atletas necesitais
          ser fuertes y explosivos! Algo que solo conseguirás con un trabajo
          técnico de base donde prime la calidad del movimiento ante la cantidad
          de los kilos levantados o movimientos fallidos. Porque un atleta
          necesita tener una tasa de éxito óptima en sus levantamientos, y es
          por ello que nos enfocamos en el desarrollo de la técnica adecuada
          para ti. Y no podemos obviar que también necesitarás una flexibilidad
          óptima, porque sin la suficiente flexibilidad se retrasa el
          aprendizaje y la mejora del rendimiento, se frena el proceso en su
          conjunto de manera considerable.
        </h2>
        <h2>
          Con nosotros trabajarás la flexibilidad y la movilidad de forma muy
          específica para optimizar tu aprendizaje y optimizar tus
          levantamientos y mejorarlos .
        </h2>
        <h2>
          Si no eres fuerte te pondremos fuerte, si la movilidad es un problema,
          nos ocupremos de ella también. Y si falla la técnica, puliremos tu
          técnica .
        </h2>
      </div>
      <div className="fotos"></div>
    </div>
  );
};

export default Halterofilia;
