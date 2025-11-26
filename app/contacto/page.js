const WHATSAPP_LINK_MAIN =
  'https://wa.me/50763694565?text=Hola%20doctora%20Ivette,%20me%20gustar%C3%ADa%20agendar%20una%20cita.';
const WHATSAPP_LINK_SEC =
  'https://wa.me/50764615495?text=Hola%20doctora%20Ivette,%20me%20gustar%C3%ADa%20agendar%20una%20cita.';

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
              coordinar el día y la hora de tu consulta.
            </p>
          </div>

          <div className="contact-card">
            <h2>Opciones de contacto</h2>
            <ul className="contact-list">
              <li>
                WhatsApp:{' '}
                <a
                  href={WHATSAPP_LINK_MAIN}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +507 63694565
                </a>{' '}
                ó{' '}
                <a
                  href={WHATSAPP_LINK_SEC}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +507 64615495
                </a>
              </li>
              <li>
                Llamadas:{' '}
                <a href="tel:+50763694565">+507 63694565</a> ó{' '}
                <a href="tel:+5073102475">3102475</a>
              </li>
              <li>
                Instagram:{' '}
                <a
                  href="https://www.instagram.com/dra.ivetteriosdiez"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @Dra.Ivetteriosdiez
                </a>
              </li>
              <li>
                Correo electrónico:{' '}
                <a href="mailto:Dra.Ivetterios23@gmail.com">
                  Dra.Ivetterios23@gmail.com
                </a>
              </li>
              <li>
                Ubicación:{' '}
                Pacific Center (Panama Clinic), Torre A, Piso 11, Consultorio
                1108
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
            Calle Ramón H Jurado, Pacific Center es un complejo médico y
            comercial que cuenta con hospital, laboratorio, radiología, centro
            de rehabilitación y fisioterapia, consultorios médicos, farmacia y
            adicional almacenes, hotel y food court.
          </p>
          <p className="section-note">
            Esto te permite tener acceso a todo en una sola ubicación. Cuenta
            con amplios estacionamientos y fácil acceso desde distintos puntos
            de la ciudad, incluyendo acceso directo al corredor norte (ver en
            Google Maps).
          </p>
          <div className="info-tags">
            <span className="info-tag">Pacific Center (Panama Clinic)</span>
            <span className="info-tag">Torre A · Piso 11</span>
            <span className="info-tag">Consultorio 1108</span>
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
