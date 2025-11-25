const WHATSAPP_LINK =
  'https://wa.me/50763694565?text=Hola%20doctora%20Ivette,%20me%20gustar%C3%ADa%20agendar%20una%20cita.';

export default function ContactoPage() {
  return (
    <div className="section section-page">
      <div className="container contact-grid">
        <div>
          <div className="section-header section-header-left">
            <p className="section-kicker">Contacto</p>
            <h1 className="section-title">Agenda tu cita</h1>
            <p className="section-description">
              El primer paso es muy sencillo: un mensaje o llamada para
              coordinar el día y horario de tu consulta.
            </p>
          </div>

          <div className="contact-card">
            <h2>Opciones de contacto</h2>
            <ul className="contact-list">
              <li>
                WhatsApp:{' '}
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +507 6369-4565
                </a>
              </li>
              <li>
                Instagram:{' '}
                <a
                  href="https://www.instagram.com/dra.ivetteriosdiez"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @dra.ivetteriosdiez
                </a>
              </li>
              <li>
                Ubicación:{' '}
                <a
                  href="https://maps.app.goo.gl/D7MzCSEzxwtUE68S7"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  The Panama Clinic · Torre A · Consultorio 1108
                </a>
              </li>
            </ul>
          </div>

          <p className="section-note">
            Al escribir por WhatsApp puedes indicar brevemente el motivo de tu
            consulta y tus horarios disponibles.
          </p>
        </div>

        <div className="contact-card contact-card-secondary">
          <h2>Ubicación en la ciudad</h2>
          <p>
            El consultorio se encuentra en The Panama Clinic, un complejo médico
            con múltiples especialidades, estacionamiento y fácil acceso desde
            distintos puntos de la ciudad.
          </p>
          <div className="info-tags">
            <span className="info-tag">The Panama Clinic</span>
            <span className="info-tag">Torre A · Consultorio 1108</span>
            <span className="info-tag">Ciudad de Panamá</span>
          </div>

          <a
            href="https://maps.app.goo.gl/D7MzCSEzxwtUE68S7"
            className="btn btn-outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver en Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}
