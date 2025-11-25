const WHATSAPP_LINK =
  'https://wa.me/50763694565?text=Hola%20doctora%20Ivette,%20me%20gustar%C3%ADa%20agendar%20una%20cita.';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <p className="footer-title">Dra. Ivette Rios Diez</p>
          <p className="footer-subtitle">
            Atención primaria, medicina general y medicina preventiva en
            Panamá.
          </p>
        </div>

        <div className="footer-columns">
          <div className="footer-column">
            <h3>Ubicación</h3>
            <p>The Panama Clinic</p>
            <p>Torre A · Consultorio 1108</p>
            <p>Ciudad de Panamá, Panamá</p>
          </div>

          <div className="footer-column">
            <h3>Contacto</h3>
            <p>
              Teléfono / WhatsApp:{' '}
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                +507 6369-4565
              </a>
            </p>
            <p>
              Instagram:{' '}
              <a
                href="https://www.instagram.com/dra.ivetteriosdiez"
                target="_blank"
                rel="noopener noreferrer"
              >
                @dra.ivetteriosdiez
              </a>
            </p>
          </div>

          <div className="footer-column">
            <h3>Horarios (referenciales)</h3>
            <p>Lunes a viernes · Horario diurno</p>
            <p>Confirma tu horario disponible al agendar tu cita.</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-small">
            © {year} Dra. Ivette Rios Diez. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
