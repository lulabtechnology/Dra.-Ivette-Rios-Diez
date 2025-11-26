// app/components/Header.jsx
import Link from 'next/link';

const WHATSAPP_LINK =
  'https://wa.me/50763694565?text=Hola%20doctora%20Ivette,%20me%20gustar%C3%ADa%20agendar%20una%20cita.';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <div className="logo">
          <Link href="/" className="logo-link">
            <span className="logo-mark">
              {/* Logo: sube el archivo en /public/logo-dra-ivette.png */}
              <img
                src="/logo-dra-ivette.png"
                alt="Logo Dra. Ivette Ríos Diez"
              />
            </span>
            <span className="logo-text">
              <span className="logo-name">Dra. Ivette Ríos Diez</span>
              <span className="logo-tagline">
                Atención Primaria, Medicina General y Cuidados Paliativos
              </span>
            </span>
          </Link>
        </div>

        <nav className="nav">
          <Link href="/sobre-mi">Sobre mí</Link>
          <Link href="/servicios">Servicios</Link>
          <Link href="/pacientes">Pacientes</Link>
          <Link href="/tips-salud">Tips de salud</Link>
          <Link href="/contacto">Contacto</Link>
          <a
            href={WHATSAPP_LINK}
            className="nav-whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Agenda tu cita
          </a>
        </nav>
      </div>
    </header>
  );
}
