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
            La idea es que vengas con tranquilidad. Aquí tienes algunas
            recomendaciones para aprovechar mejor tu cita.
          </p>
        </div>

        <div className="two-columns">
          <div className="text-block">
            <h2>Antes de tu cita</h2>
            <ul className="check-list">
              <li>
                Trae tu documento de identidad y, si aplica, información de tu
                seguro.
              </li>
              <li>
                Anota tus medicamentos actuales (nombre y dosis) o trae la
                receta contigo.
              </li>
              <li>
                Si tienes exámenes recientes, tráelos para revisarlos en
                conjunto.
              </li>
            </ul>
          </div>

          <div className="text-block">
            <h2>Durante la consulta</h2>
            <ul className="check-list">
              <li>
                Siéntete en confianza de comentar tus dudas, preocupaciones y
                síntomas.
              </li>
              <li>
                Puedes pedir que las indicaciones queden por escrito para
                revisarlas luego con calma.
              </li>
              <li>
                La consulta está pensada para que puedas tomar decisiones
                informadas sobre tu salud.
              </li>
            </ul>
          </div>
        </div>

        <div className="timeline">
          <div className="timeline-step">
            <div className="timeline-step-number">1</div>
            <div className="timeline-step-body">
              <h3>Agenda tu cita</h3>
              <p>
                Escribe por WhatsApp o llama al consultorio para elegir el día y
                horario que mejor se adapte a ti.
              </p>
            </div>
          </div>

          <div className="timeline-step">
            <div className="timeline-step-number">2</div>
            <div className="timeline-step-body">
              <h3>Acude a tu consulta</h3>
              <p>
                Llega con unos minutos de anticipación, trae tus documentos y
                todo lo que quieras revisar con la doctora.
              </p>
            </div>
          </div>

          <div className="timeline-step">
            <div className="timeline-step-number">3</div>
            <div className="timeline-step-body">
              <h3>Seguimiento</h3>
              <p>
                Si se solicitan exámenes o controles posteriores, se coordina un
                plan de seguimiento para acompañarte en el proceso.
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
