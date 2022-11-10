import React from "react";
import { useState } from "react";

import Link from "next/link";

const Presencial = () => {
  const [show1, setShow1] = useState(false);
  const onClick1 = () => setShow1(!show1);

  const [show2, setShow2] = useState(false);
  const onClick2 = () => setShow2(!show2);

  const [show3, setShow3] = useState(false);
  const onClick3 = () => setShow3(!show3);

  return (
    <div className="presencial">
      <div className="clases">
        <div className="titulo">
          <h1>CLASES PRESENCIALES</h1>
          <h2>
            EN EL CLUB HALTEROFILIA BARCELONA REALIZAMOS DOS TIPOS DE CLASES
            PRESENCIALES QUE SE ENTRELAZAN Y QUE COMBINADAS SIRVEN PARA MEJORAR
            Y AVANZAR A TRAVÉS DE LOS DOS MOVIMIENTOS DE LA HALTEROFILIA LA
            ARRANCADA Y EL DOS TIEMPOS.
          </h2>
          <h2>
            EL TAMAÑO DE LAS CLASES ESTÁ LIMITADO A UN MÁXIMO DE 8 PERSONAS Y
            ESTÁN SIEMPRE DIRIGIDAS POR DOS DE NUESTROS COACHES PARA EXPLICARTE
            LOS MOVIMIENTOS Y LOS EJERCICIOS, AYUDARTE A PERFECCIONARLOS Y
            CORREGIR LOS ERRORES Y, DE ESTA MANERA, TENER UNA EXPERIENCIA MUCHO
            MÁS PERSONALIZADA.
          </h2>
        </div>
        <div className="botones">
          <div className="conjunto">
            {/* <h2>CLASES DE HALTEROFILIA:</h2> */}
            <Link href="/presenciales/clases/halterofilia">
              <a>
                <img
                  className="boton"
                  src="/images/6halterobtn.png"
                  alt="logo"
                />
              </a>
            </Link>
            {/* <h2>CLASES DE FUERZA:</h2> */}
            <Link href="/presenciales/clases/fuerza">
              <a>
                <img
                  className="boton"
                  src="/images/5fuerzabtn.png"
                  alt="logo"
                />
              </a>
            </Link>
          </div>
          <div className="conjunto"></div>
        </div>
      </div>
      <div className="infoclub">
        <div className="tarifas">
          <h1 onClick={onClick1}>INFORMACION DE LAS TARIFAS ▾</h1>
          <div className={show1 ? "grupotarifas" : "nobox"}>
            <div className="box">
              <h2>TARIFAS MENSUALES</h2>
              <h3>
                PARA PODER EMPEZAR A ENTRENAR EL EN EL CLUB DE HALTEROFILIA DEL
                BARCELONA SE DEBE REALIZAR EL PAGO ÚNICO DE LA MATRÍCULA DE 65€
                (NO REEMBOLSABLE).
              </h3>
              <h3>
                EL PRECIO DE ESTAS TARIFAS ES MENSUAL PERO LAS HORAS SON
                SEMANALES. PUEDES DISTRIBUIR LAS HORAS CONTRATADAS A LO LARGO DE
                LA SEMANA COMO MEJOR TE CONVENGA.
              </h3>
              <div className="tabla">
                <div className="columniz">
                  <h3>1 HORA/SEMANA - 45€/MES </h3>
                  <h3>2 HORAS/SEMANA - 65€/MES</h3>
                  <h3>3 HORAS/SEMANA - 85€/MES</h3>
                  <h3>4 HORAS/SEMANA - 105€/MES</h3>
                  <h3>6 HORAS/SEMANA - 125€/MES</h3>
                </div>
                <div className="columnde"></div>
              </div>
            </div>

            <div className="box">
              <h2>BONOS</h2>
              <h3>
                PARA EL USO EXCLUSIVO DE LOS SOCIOS DEL CLUB HALTEROFILIA
                BARCELONA QUE QUIEREN AMPLIAR LAS HORAS QUE LES CORRESPONEDEN
                POR LA CUOTA MENSUAL QUE TIENEN CONTRATADA.
              </h3>
              <div className="tabla">
                <div className="columniz">
                  <h3>BONO 40€ - 3 HORAS EXTRA</h3>
                  <h3>BONO 60€ - 5 HORAS EXTRA</h3>
                </div>
                <div className="columnde"></div>
              </div>
            </div>
            <div className="box">
              <h2>DROP IN</h2>
              <h3>
                TANTO SI ESTÁS DE PASO POR BARCELONA, COMO SI QUIERES PROBAR UN
                ENTRENO O BUSCAS MEJORAR TUS MOVIMIENTOS OLÍMPICOS, LA MODALIDAD
                -DROP IN- TE PERMITE DISFRUTAR DE 1 ENTRENO DE 2 HORAS CON
                NUESTROS COACHES, SIN LA NECESIDAD DE HACERTE SOCIO.
              </h3>
              <div className="tabla">
                <h3>DROP IN 25€</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="tarifas">
          <h1 onClick={onClick2}>FUNCIONAMIENTO DE LAS CLASES ▾</h1>
          <div className={show2 ? "box" : "nobox"}>
            <h3>
              Las horas contratadas según tarifa no son acumulables a otras
              semanas, en caso de no realizarlas a lo largo de la semana
              correspondiente quedan automáticamente anuladas.
            </h3>
            <h3>
              La reserva de clase se debe realizar con un mínimo de 24h de
              antelación para garantizar el buen servicio de la actividad. Las
              anulaciones o cambios de clase, independientemente del motivo que
              los cause se deben efectuar con un plazo mínimo de 24h, en caso
              contrario la clase se contabilizara como realizada.
            </h3>
            <h3>
              La duración de las clases es de 1h, pudiendo llegar 15 minutos
              antes para el calentamiento previo y 15 minutos a la finalización
              de la misma para realizar los correspondientes estiramientos. En
              caso de que el atleta quiera ampliar la duración de las mismas
              deberá solicitar un cambio de tarifa o contratar bonos adicionales
              de horas.
            </h3>
            <h3>
              Las tarifas detallan horas semanales, pudiendo acumular dos horas
              diarias según la tarifa contratada dentro de la misma semana. El
              caso de la tarifa sin límite incluye 6 horas semanales ( 1
              clase/1hora diaria) pudiendo el socio también repartirlas según su
              disponibilidad.
            </h3>
            <h3>
              La puntualidad es imprescindible para la asistencia a las clases,
              en caso de retraso sin causa justificada, el atleta deberá esperar
              el comienzo de la siguiente clase siempre que sea posible y haya
              aforo en la misma.
            </h3>
            <h3>
              Es obligatorio limpiar la barra utilizada al finalizar la sesión,
              así como respetar todo el material de la sala e instalaciones. El
              entrenador dirigirá en todo momento el entrenamiento, ejercicios y
              cargas. Es muy importante que cualquier duda o molestia se le
              comunique inmediatamente.
            </h3>
          </div>
        </div>
        <div className="tarifas">
          <h1 onClick={onClick3}>NORMATIVA DEL CLUB ▾</h1>
          <div className={show3 ? "box" : "nobox"}>
            <h3>
              LA INSCRIPCIÓN COMO CLIENTE DE CLUB HALTEROFILIA BARCELONA
              OLÍMPICO CUBRIRÁ EL PERIODO DURANTE EL QUE DICHO CLIENTE SATISFAGA
              LA CORRESPONDIENTE CUOTA SEGÚN LO DISPUESTO EN EL PRESENTE
              DOCUMENTO.
            </h3>
            <h3>
              Las bajas o modificaciones deberán comunicarse antes del día 15
              del mes anterior a la baja, así como cualquier cambio de tarifa.
              En caso contrario la baja o modificación no podrá ser efectiva
              hasta el siguiente mes y se cobrara la cuota de manera habitual.
              La no asistencia del titular o del beneficiario a las
              instalaciones del Club con independencia de su duración o de la
              causa que lo origine, en ningún caso dará derecho a la devolución
              de cantidad alguna de dinero.
            </h3>
            <h3>
              El mes de Agosto se cobrara íntegramente ya que los periodos
              vacaciones así como los días festivos están prorrateados a lo
              largo de las cuotas mensuales. En caso de baja durante este
              periodo y deseo por parte del socio de una nueva inscripción
              pasado el citado periodo, se deberá abonar la matricula estipulada
              para estos casos.
            </h3>
            <h3>
              Únicamente en caso de lesión (ocasionada en el devenir de un
              entteno en el club única y exclusívamente), cabe la posibilidad de
              congelar la cuota por un periodo máximo de un mes, en caso de
              tratarse de un periodo superior el socio deberá considerarse la
              baja del Club y realizar una nueva alta tras la recuperación con
              el pago de la correspondiente matricula. Este procedimiento de
              congelación es posible realizarlo únicamente 1 vez anualmente.
            </h3>
            <h3>
              En caso de impago de una cuota los gastos de devolución correrán
              íntegramente a cargo del socio, en caso de no abonar dicho importe
              en los quince días próximos a su comunicación dará lugar a la baja
              inmediata del socio. En el supuesto de estar interesado en
              continuar con los servicios del Club en el futuro deberá abonar
              dicha cuota más los gastos, a la vez que la matrícula y cuota
              estipulada en ese momento.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presencial;
