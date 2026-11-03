import { Link } from 'react-router-dom';
import { ARTISTA, OBRAS, SERIES } from '../data.js';

export default function Home() {
  // Reflector que sigue al mouse sobre la portada (efecto "sala a oscuras")
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--x', e.clientX - r.left + 'px');
    e.currentTarget.style.setProperty('--y', e.clientY - r.top + 'px');
  };
  return (
    <>
      <section className="hero" onMouseMove={move}>
        <div className="hin">
          <p className="eyebrow">{ARTISTA.ciudad}</p>
          <h1>{ARTISTA.nombre}</h1>
          <p className="lema">{ARTISTA.lema}</p>
          <Link className="btn" to="/obras">Entrar a la sala →</Link>
        </div>
      </section>

      <section className="wrap rv"><p className="intro">{ARTISTA.intro}</p></section>

      <h2 className="wrap rv" style={{ paddingBottom: 0 }}>Obras destacadas</h2>
      <section className="rail">
        {OBRAS.slice(0, 8).map((o) => (
          <Link key={o.slug} to={`/obras/${o.slug}`}>
            <img src={o.img} alt={o.titulo} />
            <p>{o.titulo}</p>
          </Link>
        ))}
      </section>

      <section className="wrap rv">
        <h2>Series</h2>
        <div className="grid">
          {SERIES.map((s) => {
            const cover = OBRAS.find((o) => o.serie === s.slug);
            return (
              <Link key={s.slug} to={`/series/${s.slug}`} className="scard">
                <img src={cover.img} alt={s.titulo} />
                <h3>{s.titulo}</h3><span>{s.anio}</span>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
