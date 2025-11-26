// app/sobre-mi/page.js
import Link from 'next/link';

const WHATSAPP_LINK =
  'https://wa.me/50764615494?text=Hola%20doctora%20Ivette,%20me%20gustar%C3%ADa%20agendar%20una%20cita.';

export default function SobreMiPage() {
  return (
    <div className="section section-page">
      {/* Hero principal */}
      <div className="container page-hero-grid">
        <div>
          {/* Se eliminó el texto pequeño "Sobre la doctora" */}
          <h1 className="section-title">Cada paciente es una historia única</h1>
          <p className="section-description">
            Acompañar a mis pacientes en situaciones de vulnerabilidad me ha
            enseñado el valor de la empatía y el trato humano en cada decisión
            médica.
          </p>

          <div className="page-hero-actions">
            <a
              href={WHATSAPP_LINK}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Agenda tu cita
            </a>
            <Link href="/servicios" className="btn btn-outline">
              Ver servicios
            </Link>
          </div>
        </div>

        <div className="page-hero-photo">
          <img
            src="/images/dra-ivette-perfil-vertical.jpg"
            alt="Retrato de la Dra. Ivette Ríos Diez"
          />
        </div>
      </div>

      {/* SOLO Formación y experiencia, en bullets */}
      <div className="container page-content">
        <div className="text-block">
          <h2>Formación y experiencia</h2>
          <ul className="check-list">
            <li>
              Doctor en Medicina y Cirugía – Universidad Latina de Panamá.
            </li>
            <li>
              Cuidados Paliativos – Universidad de Valladolid, España.
            </li>
            <li>
              Geriatría y Trastornos Neurosensoriales – Universidad Católica de
              Valencia.
            </li>
            <li>
              Actualización y desarrollo en Geriatría – Universidad Católica de
              Valencia.
            </li>
            <li>
              Atención Primaria en Salud – Universidad Nacional de Panamá.
            </li>
            <li>
              Economía de la Salud – Universidad Nacional de Panamá.
            </li>
            <li>
              Curso de Ultrasonido Abdominal y músculo esquelético – SemFYC,
              España.
            </li>
            <li>
              Diplomado Latinoamericano del Dolor – Fedelat Aval Latinoamérica.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
