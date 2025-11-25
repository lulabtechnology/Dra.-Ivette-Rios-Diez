import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: 'Dra. Ivette Rios Diez | Atención Primaria en Panamá',
  description:
    'Atención primaria, medicina general y medicina preventiva con calidez humana en The Panama Clinic, Panamá.'
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <div className="site-wrapper">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
