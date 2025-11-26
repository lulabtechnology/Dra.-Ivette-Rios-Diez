// app/tips-salud/page.js
const WHATSAPP_LINK =
  'https://wa.me/50763694565?text=Hola%20doctora%20Ivette,%20me%20gustar%C3%ADa%20recibir%20orientaci%C3%B3n%20sobre%20mi%20salud.';

export default function TipsSaludPage() {
  return (
    <div className="section section-page">
      <div className="container">
        <div className="section-header">
          <p className="section-kicker">Tips de salud</p>
          <h1 className="section-title">
            Recomendaciones sencillas para cuidar tu salud día a día
          </h1>
          <p className="section-description">
            Estos tips no reemplazan una consulta médica, pero pueden ayudarte
            a cuidar mejor tu salud y la de tu familia, especialmente si vives
            con enfermedades crónicas o acompañas a un adulto mayor.
          </p>
        </div>

        <div className="card-grid card-grid-services">
          <article className="card">
            <h2 className="card-title">1. Conoce tus controles básicos</h2>
            <p className="card-body">
              Lleva un registro sencillo de tu presión arterial, niveles de
              azúcar y colesterol (si ya te los has medido). Esto permite
              detectar cambios a tiempo y conversar con tu médico con datos más
              claros.
            </p>
          </article>

          <article className="card">
            <h2 className="card-title">2. Medicación, siempre con orden</h2>
            <p className="card-body">
              Anota el nombre de tus medicamentos, la dosis y el horario. Evita
              tomar o suspender medicinas por tu cuenta. Ante cualquier duda,
              pregunta siempre en consulta antes de hacer cambios.
            </p>
          </article>

          <article className="card">
            <h2 className="card-title">3. Movimiento adaptado a tu realidad</h2>
            <p className="card-body">
              No todos los cuerpos necesitan el mismo tipo de ejercicio. Caminar
              unos minutos al día, subir escaleras o hacer ejercicios suaves en
              casa puede marcar una diferencia positiva si se hace de manera
              constante y segura.
            </p>
          </article>

          <article className="card">
            <h2 className="card-title">4. Acompañando al adulto mayor</h2>
            <p className="card-body">
              Escuchar, respetar sus tiempos y ayudar a mantener rutinas
              sencillas (medicación, alimentación, descanso) es clave. No se
              trata solo de supervisar, sino de acompañar con paciencia y
              dignidad.
            </p>
          </article>

          <article className="card">
            <h2 className="card-title">5. Hablar de síntomas sin miedo</h2>
            <p className="card-body">
              Hablar a tiempo de dolores, cambios en el apetito, en el sueño o
              en el ánimo ayuda a que podamos intervenir de manera temprana. No
              hay síntomas “tontos” cuando se trata de tu salud.
            </p>
          </article>

          <article className="card">
            <h2 className="card-title">
              6. Cuidados paliativos: también es calidad de vida
            </h2>
            <p className="card-body">
              Los cuidados paliativos no significan renunciar, sino priorizar el
              alivio del dolor, el confort y el acompañamiento del paciente y su
              familia. Hablar sobre esto a tiempo permite tomar decisiones más
              tranquilas y humanas.
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
            Consultar dudas por WhatsApp
          </a>
          <p className="section-note">
            Si alguno de estos puntos te genera dudas o sientes que te
            identificas con alguna situación, podemos revisarlo con calma en
            consulta y adaptar las recomendaciones a tu caso particular.
          </p>
        </div>
      </div>
    </div>
  );
}
