import Link from 'next/link';

const WHATSAPP_LINK =
  'https://wa.me/50763694565?text=Hola%20doctora%20Ivette,%20me%20gustar%C3%ADa%20agendar%20una%20cita.';

export default function Home() {
  return (
    <>
      {/* HERO PRINCIPAL */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-left">
            <p className="hero-badge">
              Atención primaria con calidez humana
            </p>
            <h1 className="hero-title">
              Tu doctora de confianza en The Panama Clinic
            </h1>
            <p className="hero-subtitle">
              La consulta médica donde se escucha con calma, se explican las
              cosas con claridad y se construye un plan de cuidado a tu
              medida.
            </p>

            <div className="hero-highlights">
              <span className="highlight-pill">Medicina general</span>
              <span className="highlight-pill">Medicina preventiva</span>
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
              The Panama Clinic · Torre A · Consultorio 1108 · Ciudad de Panamá
            </p>
          </div>

          <div className="hero-right">
            <div className="hero-doctor-card">
              <div className="hero-doctor-image-wrapper">
                {/* Foto principal vertical */}
                <img
                  src="/images/dra-ivette-hero.jpg"
                  alt="Dra. Ivette Rios Diez en su consultorio"
                  className="hero-doctor-image"
                />
              </div>
              <div className="hero-doctor-caption">
                <p className="doctor-name">Dra. Ivette Rios Diez</p>
                <p className="doctor-specialty">
                  Medicina General · Atención Primaria
                </p>
                <p className="doctor-small-text">
                  Cercanía, escucha activa y acompañamiento continuo para ti y
                  tu familia.
                </p>
              </div>
            </div>

            <div className="hero-info-card">
              <p className="hero-info-title">Motivos de consulta frecuentes</p>
              <ul className="hero-info-list">
                <li>Chequeos preventivos y control anual de salud.</li>
                <li>Control de hipertensión, diabetes y colesterol.</li>
                <li>Acompañamiento del adulto mayor y cuidados paliativos.</li>
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
              Desde el primer chequeo preventivo hasta el acompañamiento en
              procesos crónicos, la atención se adapta a la etapa de vida y
              necesidades de cada persona.
            </p>
          </div>

          <div className="card-grid">
            <article className="card">
              <h3 className="card-title">Medicina general</h3>
              <p className="card-body">
                Evaluación completa, diagnóstico temprano y seguimiento
                continuo.
              </p>
              <ul className="card-list">
                <li>Consultas de adultos y adultos mayores.</li>
                <li>Control de enfermedades crónicas.</li>
                <li>Indicaciones claras y por escrito.</li>
              </ul>
            </article>

            <article className="card">
              <h3 className="card-title">Medicina preventiva</h3>
              <p className="card-body">
                El objetivo es anticiparse: cuidar antes de que aparezcan las
                complicaciones.
              </p>
              <ul className="card-list">
                <li>Chequeos periódicos según tu edad y antecedentes.</li>
                <li>Revisión de laboratorios y estilos de vida.</li>
                <li>Planes de control personalizados.</li>
              </ul>
            </article>

            <article className="card">
              <h3 className="card-title">Cuidados paliativos</h3>
              <p className="card-body">
                Acompañamiento respetuoso y humano para el paciente y su
                familia.
              </p>
              <ul className="card-list">
                <li>Control de síntomas y del dolor.</li>
                <li>Apoyo en la toma de decisiones médicas.</li>
                <li>Coordinación con otros especialistas.</li>
              </ul>
            </article>

            <article className="card">
              <h3 className="card-title">Coordinación de cuidado</h3>
              <p className="card-body">
                La atención primaria como punto de partida para tu ruta de
                salud.
              </p>
              <ul className="card-list">
                <li>Referencia a especialistas cuando se requiere.</li>
                <li>Revisión integral de tratamientos.</li>
                <li>Seguimiento de resultados y ajustes.</li>
              </ul>
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
            <h2 className="section-title">
              Una consulta donde puedes hablar con tranquilidad
            </h2>
            <p className="section-description">
              Más que revisar signos vitales, la consulta está pensada para
              escuchar tu historia, entender tu contexto y tomar decisiones
              juntos, paso a paso.
            </p>

            <ul className="pill-list">
              <li>Escucha y explicación clara de cada indicación.</li>
              <li>Enfoque integral: mente, cuerpo y entorno familiar.</li>
              <li>Seguimiento cercano en procesos crónicos.</li>
            </ul>

            <Link href="/sobre-mi" className="link-arrow">
              Más sobre la trayectoria de la doctora →
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
              Aquí puedes mostrar un video corto de presentación, el consultorio
              o un mensaje de bienvenida para tus pacientes.
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
              Fácil acceso en The Panama Clinic
            </h2>
            <p className="section-description">
              El consultorio se encuentra en uno de los centros médicos más
              completos de la ciudad, con estacionamientos y servicios
              complementarios cercanos.
            </p>

            <div className="info-tags">
              <span className="info-tag">The Panama Clinic · Torre A</span>
              <span className="info-tag">Consultorio 1108</span>
              <span className="info-tag">Ciudad de Panamá</span>
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
            <p className="location-card-title">¿Cómo llegar?</p>
            <ul className="location-card-list">
              <li>Edificio moderno y de fácil acceso.</li>
              <li>Estacionamientos dentro del complejo.</li>
              <li>Cerca de comercios, servicios y vías principales.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
