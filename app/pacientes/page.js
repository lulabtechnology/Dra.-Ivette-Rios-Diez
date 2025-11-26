const WHATSAPP_LINK =
  'https://wa.me/50763694565?text=Hola%20doctora%20Ivette,%20me%20gustar%C3%ADa%20agendar%20una%20cita.';

export default function PacientesPage() {
  return (
    <div className="section section-page">
      <div className="container">
        <div className="section-header">
          <p className="section-kicker">Información para pacientes</p>
          <h1 className="section-title">
            Todo lo que necesitas saber antes de tu consulta
          </h1>
          <p className="section-description">
            Mi enfoque de atención combina la medicina basada en evidencia con
            un trato humano y cercano, priorizando el bienestar, comodidad y
            calidad de vida de cada paciente. Lo que más deseo es crear un
            ambiente que te brinde tranquilidad y confianza al momento de tu
            atención.
          </p>
        </div>

        <div className="two-columns">
          <div className="text-block">
            <h2>Antes de tu cita</h2>
            <ul className="check-list">
              <li>
                No olvides tus documentos de identidad, y si cuentas con seguro
                privado el carnet digital o físico del mismo (actualmente
                aceptamos los siguientes seguros BUPA, World Wide Medical y
                PALIG).
              </li>
              <li>
                Anota todos los medicamentos actuales que estés tomando, así
                como en qué horario los tomas.
              </li>
              <li>
                Si tienes exámenes recientes, radiografías u otro estudio
                especializado, tráelos ya sea en imagen en tu celular para que
                podamos en conjunto estudiar los mismos.
              </li>
            </ul>
          </div>

          <div className="text-block">
            <h2>Recomendaciones para aprovechar tu consulta</h2>
            <p>
              Siéntete en confianza de comentar tus dudas, preocupaciones y
              síntomas. Puedes pedir que las indicaciones queden por escrito
              para revisarlas luego con calma junto a tu familia.
            </p>
            <p>
              El objetivo es que salgas de la consulta con un plan claro,
              posible de aplicar en tu día a día y con la tranquilidad de saber
              que tendrás seguimiento cuando lo necesites.
            </p>
          </div>
        </div>

        <div className="timeline">
          <div className="timeline-step">
            <div className="timeline-step-number">1</div>
            <div className="timeline-step-body">
              <h3>Agendar cita</h3>
              <p>
                Escribe al whatsapp o llama al consultorio para elegir el día y
                la hora que mejor se adapte a ti.
              </p>
            </div>
          </div>

          <div className="timeline-step">
            <div className="timeline-step-number">2</div>
            <div className="timeline-step-body">
              <h3>Acude a tu consulta</h3>
              <p>
                El edificio Pacific Center (Panama Clinic) cuenta con amplia
                área de estacionamientos si lo ameritas. Nuestro consultorio se
                encuentra ubicado en la Torre A, en el piso 11 y es el
                consultorio 1108.
              </p>
            </div>
          </div>

          <div className="timeline-step">
            <div className="timeline-step-number">3</div>
            <div className="timeline-step-body">
              <h3>Seguimiento</h3>
              <p>
                Siempre me encargo personalmente de comunicarme contigo y dar
                seguimiento a todo lo que hemos evaluado en la consulta.
                Asimismo, siempre estamos en la disposición de aclarar cualquier
                duda que se pudiese mantener sobre la atención recibida, con una
                comunicación continua.
              </p>
            </div>
          </div>
        </div>

        <div className="section-cta-center">
          <a
            href={WHATSAPP_LINK}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Escribir por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
