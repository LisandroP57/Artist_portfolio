import { useEffect, useState } from 'react';
import { NavLink, Outlet, Link, useLocation } from 'react-router-dom';
import { ARTISTA } from '../data.js';

const LINKS = [['/', 'Inicio'], ['/obras', 'Obras'], ['/series', 'Series'], ['/artista', 'Artista'], ['/exposiciones', 'Exposiciones'], ['/contacto', 'Contacto']];

export default function Layout() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  // Al navegar: cerrar menú, volver arriba y activar animaciones de aparición
  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.rv').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  // Bloquear scroll del fondo y cerrar con Escape mientras el menú está abierto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      <header className="nav">
        <Link to="/" className="logo">{ARTISTA.nombre}</Link>
        <button
          className={`burger ${open ? 'open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="menu"
        >
          <span /><span /><span />
        </button>
      </header>

      <div id="menu" className={`menu ${open ? 'open' : ''}`} aria-hidden={!open}>
        <nav>
          {LINKS.map(([to, t], i) => (
            <NavLink key={to} to={to} end={to === '/'} tabIndex={open ? 0 : -1} style={{ transitionDelay: `${i * 60}ms` }}>
              {t}
            </NavLink>
          ))}
        </nav>
        <div className="menu-foot">
          <a href={`mailto:${ARTISTA.email}`} tabIndex={open ? 0 : -1}>{ARTISTA.email}</a>
          <a href={ARTISTA.instagram} target="_blank" rel="noreferrer" tabIndex={open ? 0 : -1}>Instagram</a>
        </div>
      </div>

      <main key={pathname} className="page"><Outlet /></main>

      <footer>
        <span>© {new Date().getFullYear()} {ARTISTA.nombre}</span>
        <a href={ARTISTA.instagram} target="_blank" rel="noreferrer">Instagram</a>
        <a href={`mailto:${ARTISTA.email}`}>{ARTISTA.email}</a>
      </footer>
    </>
  );
}
