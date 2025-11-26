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
              A lo largo de mi práctica
