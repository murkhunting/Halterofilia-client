import React from "react";

import { BsClockHistory } from "react-icons/bs";
import { FiUsers, FiBarChart2 } from "react-icons/fi";

const Fuerza = () => {
  return (
    <div className="fuerza">
      <h1>CLASES DE FUERZA Y ACONDICIONAMIENTO FÍSICO</h1>
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
            <h2>19:00 - 21:00</h2>
          </div>
          <div className="hora">
            <h2>MIÉRCOLES</h2>
            <h2>19:00 - 21:00</h2>
          </div>
          <div className="hora">
            <h2>VIERNES</h2>
            <h2>19:00 - 21:00</h2>
          </div>
        </div>
      </div>
      <div className="descripcion">
        <h2>
          La cualidad principal en la Halterofilia es la Fuerza, que es la
          capacidad de producir fuerza cuando los músculos se contraen y se
          estiran. La Fuerza es una base importante para dominar la técnica con
          pesos pesados por qué los grupos musculares deben trabajar juntos para
          coordinar un movimiento exitoso.
        </h2>
        <h2>
          Cuando un grupo muscular es débil, esto dará como resultados una
          desviación técnica o un fallo, pero el fortalecimiento de esta área
          permitirá que el músculo contribuya con una cantidad de fuerza
          adecuada para garantizar que todo el sistema esté coordinado.
        </h2>
        <h2>
          En conclusión la halterofilia utiliza varios métodos de entrenamiento
          de la fuerza para maximizar y optimizar la fuerza y la potencia de un
          atleta. Durante las sesiones de nuestro programa de fuerza trabajamos
          para conseguir un tren superior e inferior más fuerte, potente y
          estable. En nuestras clases realizamos ejercicios con peso corporal y
          peso libre, para mejorar la propiocepción y patrón de movimiento, con
          el objetivo de optimizar cada uno de tus levantamientos.
        </h2>
        <h2>
          Reserva plaza para nuestras sesiones y que la fuerza que desarrolles
          en ellas, sea la base para potenciar al máximo tus levantamientos
          olímpicos.
        </h2>
      </div>
      <div className="fotos"></div>
    </div>
  );
};

export default Fuerza;
