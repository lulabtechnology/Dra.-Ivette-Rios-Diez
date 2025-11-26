import Link from 'next/link';

const WHATSAPP_LINK =
  'https://wa.me/50764615494?text=Hola%20doctora%20Ivette,%20me%20gustar%C3%ADa%20agendar%20una%20cita.';

export default function Home() {
  return (
    <>
      {/* HERO PRINCIPAL */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-left">
            <p className="hero-badge">
              Atención Primaria, Medicina General y Cuidados Paliativos
            </p>
            <h1 className="hero-title">
              Tu doctora de confianza en The Panama Clinic
            </h1>
            <p className="hero-subtitle">
              Atención Medica preventiva, Medicina General, Cuidados
              Paliativos y manejo del dolor en un espacio tranquilo y humano.
            </p>

            <div className="hero-highlights">
              <span className="highlight-pill">Atención médica preventiva</span>
              <span className="highlight-pill">Medicina general</span>
              <span className="highlight-pill">Cuidados paliativos</span>
            </div>

            <div className="hero-cta">
              <a
                href={WHATSAPP_LINK}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Agenda tu cita por WhatsApp
              </a>
              <Link href="/sobre-mi" className="btn btn-outline">
                Conoce a la doctora
              </Link>
            </div>

            <p className="hero-note">
              Pacific Center (Panama Clinic) · Torre A · Piso 11 · Consultorio
              1108 · Ciudad de Panamá
            </p>
          </div>

          <div className="hero-right">
            <div className="hero-doctor-card">
              <div className="hero-doctor-image-wrapper">
                {/* Foto principal vertical */}
                <img
                  src="/images/dra-ivette-hero.jpg"
                  alt="Dra. Ivette Ríos Diez en su consultorio"
                  className="hero-doctor-image"
                />
              </div>
              <div className="hero-doctor-caption">
                <p className="doctor-name">Dra. Ivette Ríos Diez</p>
                <p className="doctor-specialty">
                  Atención Primaria · Medicina General · Cuidados Paliativos
                </p>
                <p className="doctor-small-text">
                  Trato cercano, empatía y acompañamiento continuo para ti y tu
                  familia.
                </p>
              </div>
            </div>

            <div className="hero-info-card">
              <p className="hero-info-title">Motivos de consulta frecuentes</p>
              <ul className="hero-info-list">
                <li>Chequeos preventivos y control anual de salud.</li>
                <li>Control de hipertensión, diabetes y colesterol.</li>
                <li>
                  Acompañamiento del adulto mayor y cuidados paliativos en
                  familia.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS DESTACADOS */}
      <section className="section home-services">
        <div className="container">
          <div className="section-header">
            <p className="section-kicker">Servicios</p>
            <h2 className="section-title">
              Atención integral en un solo consultorio
            </h2>
            <p className="section-description">
              A lo largo de mi práctica médica, he acompañado a cientos de
              pacientes en momentos claves de salud, ofreciendo orientación
              clara, seguimiento continuo y un cuidado centrado en la salud de
              mis pacientes.
            </p>
          </div>

          <div className="card-grid">
            <article className="card">
              <h3 className="card-title">Atención preventiva de salud</h3>
              <p className="card-body">
                Evaluación general y especifica de salud, orientaciones sobre
                estilos de vida saludables, consejos sobre alimentación y
                ejercicio, todos basados en la evaluación individual de cada
                paciente.
              </p>
            </article>

            <article className="card">
              <h3 className="card-title">
                Manejo y control de enfermedades crónicas
              </h3>
              <p className="card-body">
                Hipertensión Arterial, Diabetes Mellitus, enfermedad de
                tiroides y otras condiciones crónicas de salud con seguimiento
                cercano.
              </p>
            </article>

            <article className="card">
              <h3 className="card-title">
                Evaluación y seguimiento de adultos mayores
              </h3>
              <p className="card-body">
                Valoración integral del adulto mayor, acompañando su proceso de
                envejecimiento y priorizando calidad de vida.
              </p>
            </article>

            <article className="card">
              <h3 className="card-title">
                Atención y acompañamiento en cuidados paliativos
              </h3>
              <p className="card-body">
                Atención centrada en aliviar el sufrimiento físico y emocional,
                respetando los deseos y valores del paciente. Ofrecemos Atención
                en domicilio.
              </p>
            </article>

            <article className="card">
              <h3 className="card-title">Curación y cuidados de heridas</h3>
              <p className="card-body">
                Cuidados para pie diabético, heridas posteriores a cirugía,
                úlceras y otras lesiones que requieren seguimiento médico.
              </p>
            </article>

            <article className="card">
              <h3 className="card-title">Cambios de sondas urinarias</h3>
              <p className="card-body">
                Atención cuidadosa y respetuosa para cambios de sondas
                urinarias, con enfoque en comodidad y seguridad del paciente.
              </p>
            </article>

            <article className="card">
              <h3 className="card-title">Electrocardiogramas</h3>
              <p className="card-body">
                Realización e interpretación de electrocardiogramas como parte
                de la evaluación cardiovascular.
              </p>
            </article>
          </div>

          <div className="section-footer-link">
            <Link href="/servicios" className="link-arrow">
              Ver todos los servicios →
            </Link>
          </div>
        </div>
      </section>

      {/* SOBRE LA DOCTORA */}
      <section className="section home-about">
        <div className="container home-about-grid">
          <div>
            <p className="section-kicker">Sobre la doctora</p>
            <h2 className="section-title">Cada paciente es una historia única</h2>
            <p className="section-description">
              Acompañar a mis pacientes en situaciones de vulnerabilidad me ha
              enseñado el valor de la empatía y el trato humano en cada
              consulta.
            </p>

            <ul className="pill-list">
              <li>Tranquilidad.</li>
              <li>Claridad (con un lenguaje claro, sin tecnicismo).</li>
              <li>
                Acompañamiento en cada etapa de la atención, siempre respetando
                los deseos, valores y dignidad de cada persona.
              </li>
            </ul>

            <p className="section-description">
              Mi mayor compromiso es que tú y tu familia se sientan escuchados,
              comprendidos y acompañados, no solo como pacientes, sino como
              seres humanos.
            </p>

            <Link href="/sobre-mi" className="link-arrow">
              Más sobre mi formación y experiencia →
            </Link>
          </div>

          <div className="home-about-media">
            <div className="photo-stack">
              <img
                src="/images/dra-ivette-consulta-1.jpg"
                alt="Dra. Ivette durante una consulta con paciente"
              />
              <img
                src="/images/dra-ivette-consulta-2.jpg"
                alt="Dra. Ivette tomando notas médicas en el consultorio"
              />
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO DEL CONSULTORIO */}
      <section className="section home-video">
        <div className="container home-video-grid">
          <div>
            <p className="section-kicker">Conoce el consultorio</p>
            <h2 className="section-title">
              Un espacio tranquilo para hablar de tu salud
            </h2>
            <p className="section-description">
              Aquí puedes mostrar un video corto de presentación, el
              consultorio o un mensaje de bienvenida para tus pacientes.
            </p>
          </div>

          <div className="video-card">
            <video
              className="video-player"
              controls
              poster="/images/dra-ivette-video-poster.jpg"
            >
              <source src="/videos/dra-ivette-intro.mp4" type="video/mp4" />
              Tu navegador no soporta la reproducción de video.
            </video>
            <p className="video-note">
              Sube tu video a{' '}
              <code>/public/videos/dra-ivette-intro.mp4</code> y una imagen de
              portada en <code>/public/images/dra-ivette-video-poster.jpg</code>
              .
            </p>
          </div>
        </div>
      </section>

      {/* UBICACIÓN */}
      <section className="section home-location">
        <div className="container location-grid">
          <div>
            <p className="section-kicker">Ubicación</p>
            <h2 className="section-title">
              Fácil acceso en Pacific Center (Panama Clinic)
            </h2>
            <p className="section-description">
              Pacific Center es un complejo médico y comercial que cuenta con
              hospital, laboratorio, radiología, centro de rehabilitación y
              fisioterapia, consultorios médicos, farmacia, además de
              almacenes, hotel y food court. Todo en una sola ubicación.
            </p>

            <div className="info-tags">
              <span className="info-tag">Pacific Center (Panama Clinic)</span>
              <span className="info-tag">Torre A · Piso 11</span>
              <span className="info-tag">Consultorio 1108</span>
            </div>

            <div className="location-links">
              <a
                href="https://maps.app.goo.gl/D7MzCSEzxwtUE68S7"
                className="btn btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver en Google Maps
              </a>
              <a href={WHATSAPP_LINK} className="link-arrow">
                Agendar cita por WhatsApp →
              </a>
            </div>
          </div>

          <div className="location-card">
            <p className="location-card-title">Cómo llegar</p>
            <ul className="location-card-list">
              <li>Ubicado en Calle Ramón H Jurado.</li>
              <li>
                Amplios estacionamientos y fácil acceso desde distintos puntos
                de la ciudad.
              </li>
              <li>Incluye acceso directo al corredor norte.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* RESUMEN FINAL: SERVICIOS, SEGUROS, PAGOS */}
      <section className="section home-summary">
        <div className="container home-summary-grid">
          <div className="summary-block">
            <h2 className="summary-title">Atención médica integral</h2>
            <p className="summary-text">
              Atención Medica preventiva, Medicina General, Cuidados Paliativos
              y manejo del dolor.
            </p>
          </div>

          <div className="summary-block">
            <h2 className="summary-title">Seguros y métodos de pago</h2>
            <p className="summary-text">
              Aceptamos seguros : BUPA, WWM (World Wide Medial), PALIG, VIVIR,
              ASSA).
            </p>
            <p className="summary-text">
              Métodos de pago: Tarjetas de crédito, clave, transferencias
              bancarias, kuara, yappi.
            </p>
          </div>

          <div className="summary-block">
            <h2 className="summary-title">Horarios y contacto</h2>
            <p className="summary-text">Horario de lunes a sábado.</p>
            <p className="summary-text">
              Teléfono: +507 3102475 · WhatsApp:+507 64615495.
            </p>
            <p className="summary-text">Piso 11-Consultorio 1108.</p>
          </div>
        </div>
      </section>
    </>
  );
}
