// app/servicios/page.js
const WHATSAPP_LINK =
  'https://wa.me/50764615494?text=Hola%20doctora%20Ivette,%20me%20gustar%C3%ADa%20agendar%20una%20cita.';

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
            A lo largo de mi práctica médica, he acompañado a cientos de
            pacientes en momentos claves de salud, ofreciendo orientación clara,
            seguimiento continuo y un cuidado centrado en la salud de mis
            pacientes.
          </p>
          <p className="section-description">
            Actualmente ofrezco los siguientes servicios:
          </p>
        </div>

        {/* Bloque visual con más imágenes relacionadas a los servicios */}
        <div className="home-about-media">
          <div className="photo-stack">
            {/* Sube estas imágenes a /public/images/dra-ivette-servicios-1.jpg y 2 */}
            <img
              src="/images/dra-ivette-servicios-1.jpg"
              alt="Dra. Ivette conversando con paciente durante la consulta"
            />
            <img
              src="/images/dra-ivette-servicios-2.jpg"
              alt="Detalle del consultorio de la Dra. Ivette Ríos Diez"
            />
          </div>
        </div>

        <div className="card-grid card-grid-services">
          <article className="card card-service">
            <h2 className="card-title">Atención preventiva de salud</h2>
            <p className="card-body">
              Evaluación general y especifica de salud, orientaciones sobre
              estilos de vida saludables, consejos sobre alimentación y
              ejercicio, todos basados en la evaluación individual de cada
              paciente.
            </p>
          </article>

          <article className="card card-service">
            <h2 className="card-title">
              Manejo y control de Enfermedades crónicas
            </h2>
            <p className="card-body">
              Manejo y control de Hipertensión Arterial, Diabetes Mellitus,
              enfermedad de tiroides y otras condiciones crónicas de salud, con
              seguimiento estructurado y ajustes según cada caso.
            </p>
          </article>

          <article className="card card-service">
            <h2 className="card-title">
              Evaluación y seguimiento de Adultos mayores
            </h2>
            <p className="card-body">
              Valoración integral del adulto mayor, seguimiento funcional y
              acompañamiento en las distintas etapas del envejecimiento.
            </p>
          </article>

          <article className="card card-service">
            <h2 className="card-title">
              Atención y acompañamiento en cuidados paliativos
            </h2>
            <p className="card-body">
              Atención centrada en aliviar síntomas y mejorar la calidad de
              vida del paciente y su familia. Ofrecemos Atención en domicilio.
            </p>
          </article>

          <article className="card card-service">
            <h2 className="card-title">Curación y cuidados de heridas</h2>
            <p className="card-body">
              Manejo de pie diabético, heridas posteriores a una cirugía,
              úlceras y otras lesiones que requieren curaciones periódicas y
              seguimiento cercano.
            </p>
          </article>

          <article className="card card-service">
            <h2 className="card-title">Cambios de sondas Urinarias</h2>
            <p className="card-body">
              Cambios de sondas urinarias con enfoque en la comodidad,
              seguridad y dignidad de cada paciente.
            </p>
          </article>

          <article className="card card-service">
            <h2 className="card-title">Electrocardiogramas</h2>
            <p className="card-body">
              Realización de electrocardiogramas como parte de la evaluación
              cardiovascular y control de patologías cardíacas.
            </p>
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
