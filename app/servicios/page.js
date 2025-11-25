import Link from 'next/link';

const WHATSAPP_LINK =
  'https://wa.me/50763694565?text=Hola%20doctora%20Ivette,%20me%20gustar%C3%ADa%20agendar%20una%20cita.';

export default function ServiciosPage() {
  return (
    <div className="section section-page">
      <div className="container">
        <div className="section-header">
          <p className="section-kicker">Servicios</p>
          <h1 className="section-title">
            Servicios médicos en atención primaria
          </h1>
          <p className="section-description">
            Una consulta pensada para resolver dudas, organizar tu cuidado y
            ayudarte a tomar decisiones informadas sobre tu salud.
          </p>
        </div>

        <div className="card-grid card-grid-services">
          <article className="card card-service">
            <h2 className="card-title">Consulta de medicina general</h2>
            <p className="card-body">
              Evaluación integral de tu estado de salud, revisión de síntomas y
              construcción de un plan de manejo.
            </p>
            <ul className="card-list">
              <li>Consulta de adultos y adultos mayores.</li>
              <li>Control de presión arterial, glicemia y colesterol.</li>
              <li>Revisión de tratamientos y ajustes necesarios.</li>
            </ul>
          </article>

          <article className="card card-service">
            <h2 className="card-title">Medicina preventiva</h2>
            <p className="card-body">
              Enfoque en prevención y detección temprana para evitar
              complicaciones futuras.
            </p>
            <ul className="card-list">
              <li>Chequeos periódicos según rango de edad.</li>
              <li>Revisión de laboratorios y estilos de vida.</li>
              <li>
                Consejos prácticos sobre alimentación, ejercicio y hábitos
                saludables.
              </li>
            </ul>
          </article>

          <article className="card card-service">
            <h2 className="card-title">Manejo de enfermedades crónicas</h2>
            <p className="card-body">
              Acompañamiento continuo para vivir mejor con diagnósticos
              crónicos.
            </p>
            <ul className="card-list">
              <li>Hipertensión arterial.</li>
              <li>Diabetes mellitus.</li>
              <li>Otras condiciones crónicas frecuentes.</li>
            </ul>
          </article>

          <article className="card card-service">
            <h2 className="card-title">Cuidados paliativos</h2>
            <p className="card-body">
              Cuidados centrados en la calidad de vida del paciente y su
              familia.
            </p>
            <ul className="card-list">
              <li>Control de síntomas y del dolor.</li>
              <li>Acompañamiento en decisiones difíciles.</li>
              <li>Trabajo conjunto con otros especialistas.</li>
            </ul>
          </article>

          <article className="card card-service">
            <h2 className="card-title">Coordinación con especialistas</h2>
            <p className="card-body">
              La atención primaria como eje que organiza tu ruta en el sistema
              de salud.
            </p>
            <ul className="card-list">
              <li>Referencia a especialidades cuando es necesario.</li>
              <li>
                Revisión de diagnósticos y tratamientos indicados por otros
                médicos.
              </li>
              <li>Seguimiento de exámenes y resultados.</li>
            </ul>
          </article>
        </div>

        <div className="section-cta-center">
          <a
            href={WHATSAPP_LINK}
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agenda tu cita por WhatsApp
          </a>
          <p className="section-note">
            Si tienes dudas sobre algún servicio, puedes escribir directamente a
            WhatsApp para recibir orientación.
          </p>
        </div>
      </div>
    </div>
  );
}
