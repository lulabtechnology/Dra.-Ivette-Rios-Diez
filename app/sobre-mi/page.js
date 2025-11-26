import Link from 'next/link';

const WHATSAPP_LINK =
  'https://wa.me/50763694565?text=Hola%20doctora%20Ivette,%20me%20gustar%C3%ADa%20agendar%20una%20cita.';

export default function SobreMiPage() {
  return (
    <div className="section section-page">
      <div className="container page-hero-grid">
        <div>
          <p className="section-kicker">Sobre la doctora</p>
          <h1 className="section-title">Cada paciente es una historia única</h1>
          <p className="section-description">
            Acompañar a mis pacientes en situaciones de vulnerabilidad me ha
            enseñado el valor de la empatía y el trato humano en cada decisión
            médica.
          </p>

          <ul className="pill-list">
            <li>Tranquilidad.</li>
            <li>Claridad (con un lenguaje claro, sin tecnicismo).</li>
            <li>
              Acompañamiento en cada etapa de la atención siempre respetando los
              deseos, valores y dignidad de cada persona.
            </li>
          </ul>

          <p className="section-description">
            Mi mayor compromiso es que tú y tu familia se sientan escuchados,
            comprendidos y acompañados, no solo como pacientes, sino como seres
            humanos.
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

      <div className="container page-content two-columns">
        <div className="text-block">
          <h2>Formación y experiencia</h2>
          <p>
            Me gradué de Doctor en Medicina y Cirugía en la Universidad Latina
            de Panamá, posteriormente realicé estudios y entrenamientos en:
          </p>
          <ul className="check-list">
            <li>
              Cuidados Paliativos en la Universidad de Valladolid en España.
            </li>
            <li>
              Geriatría y Trastornos Neurosensoriales en la Universidad
              Católica de Valencia.
            </li>
            <li>
              Actualización y desarrollo en Geriatría en la Universidad
              Católica de Valencia.
            </li>
            <li>
              Atención Primaria en Salud en la Universidad Nacional de Panamá.
            </li>
            <li>
              Economía de la Salud en la Universidad Nacional de Panamá.
            </li>
            <li>
              Curso de Ultrasonido Abdominal y musculo esquelético en SemFYC
              España.
            </li>
            <li>
              Diplomado Latinoamericano del Dolor en Fedelat Aval Latinoamérica.
            </li>
          </ul>
        </div>

        <div className="text-block">
          <h2>Mi forma de acompañarte</h2>
          <p>
            Mi misión es brindar un cuidado médico que combine la medicina
            basada en evidencia con un trato cercano y humano. Cada consulta es
            una oportunidad para escucharte, entender tu contexto y tomar
            decisiones compartidas.
          </p>
          <p>
            Busco que cada indicación sea clara y aplicable a tu vida diaria, y
            que siempre tengas un espacio seguro para expresar dudas,
            temores y expectativas sobre tu salud.
          </p>
          <p>
            Mi mayor compromiso es acompañarte a ti y a tu familia con
            tranquilidad, claridad y respeto en cada etapa de la atención.
          </p>
        </div>
      </div>
    </div>
  );
}
