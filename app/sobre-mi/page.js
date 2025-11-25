import Link from 'next/link';

const WHATSAPP_LINK =
  'https://wa.me/50763694565?text=Hola%20doctora%20Ivette,%20me%20gustar%C3%ADa%20agendar%20una%20cita.';

export default function SobreMiPage() {
  return (
    <div className="section section-page">
      <div className="container page-hero-grid">
        <div>
          <p className="section-kicker">Sobre la doctora</p>
          <h1 className="section-title">
            Cuidar la salud es acompañar historias de vida
          </h1>
          <p className="section-description">
            La atención primaria es el primer punto de encuentro con el sistema
            de salud. Por eso, la consulta está pensada para escuchar con calma,
            entender el contexto y construir un plan de cuidado realista y
            humano.
          </p>

          <ul className="pill-list">
            <li>Atención centrada en la persona, no solo en el diagnóstico.</li>
            <li>Lenguaje claro, sin tecnicismos innecesarios.</li>
            <li>Decisiones compartidas con el paciente y su familia.</li>
          </ul>

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
            alt="Retrato de la Dra. Ivette Rios Diez"
          />
        </div>
      </div>

      <div className="container page-content two-columns">
        <div className="text-block">
          <h2>Formación y experiencia</h2>
          <p>
            La Dra. Ivette Rios Diez cuenta con sólida formación en medicina
            general y experiencia en atención primaria de adultos y adultos
            mayores en Panamá. Su práctica se enfoca en el seguimiento cercano
            y la prevención de complicaciones.
          </p>
          <p>
            A lo largo de su trayectoria ha acompañado a pacientes en distintas
            etapas de la vida, desde los primeros chequeos hasta procesos
            complejos que requieren coordinación con otros especialistas.
          </p>
        </div>

        <div className="text-block">
          <h2>Enfoque de atención</h2>
          <ul className="check-list">
            <li>
              <strong>Escucha activa:</strong> tiempo suficiente para entender
              tus síntomas, preocupaciones y expectativas.
            </li>
            <li>
              <strong>Prevención primero:</strong> identificar factores de
              riesgo antes de que se conviertan en problemas mayores.
            </li>
            <li>
              <strong>Acompañamiento:</strong> seguimiento estructurado y
              explicación clara de cada paso.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
