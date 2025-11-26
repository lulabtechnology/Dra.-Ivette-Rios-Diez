// app/components/Footer.jsx
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <p className="footer-title">Dra. Ivette Ríos Diez</p>
          <p className="footer-subtitle">
            Atención Primaria, Medicina General y Cuidados Paliativos en Panamá.
          </p>
        </div>

        <div className="footer-columns">
          <div className="footer-column">
            <h3>Ubicación</h3>
            <p>Pacific Center (The Panama Clinic)</p>
            <p>Torre A · Piso 11 · Consultorio 1108</p>
            <p>Calle Ramón H. Jurado · Ciudad de Panamá</p>
          </div>

          <div className="footer-column">
            <h3>Contacto</h3>
            <p>
              Teléfono:{' '}
              <a href="tel:+5073102475">
                +507 3102475
              </a>
            </p>
            <p>
              WhatsApp:{' '}
              <a
                href="https://wa.me/50764615494?text=Hola%20doctora%20Ivette,%20me%20gustar%C3%ADa%20agendar%20una%20cita."
                target="_blank"
                rel="noopener noreferrer"
              >
                +507 64615494
              </a>{' '}
              ·{' '}
              <a
                href="https://wa.me/50763694565?text=Hola%20doctora%20Ivette,%20me%20gustar%C3%ADa%20agendar%20una%20cita."
                target="_blank"
                rel="noopener noreferrer"
              >
                +507 63694565
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
            <p>
              Correo electrónico:{' '}
              <a href="mailto:Dra.Ivetterios23@gmail.com">
                Dra.Ivetterios23@gmail.com
              </a>
            </p>
          </div>

          <div className="footer-column">
            <h3>Información adicional</h3>
            <p>Horario de lunes a sábado.</p>
            <p>
              Aceptamos seguros : BUPA, WWM (World Wide Medial), PALIG, VIVIR,
              ASSA).
            </p>
            <p>
              Métodos de pago: Tarjetas de crédito, clave, transferencias
              bancarias, kuara, yappi.
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-small">
            © {year} Dra. Ivette Ríos Diez. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
