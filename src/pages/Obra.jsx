import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { OBRAS, SERIES } from '../data.js';

export default function Obra() {
  const { slug } = useParams();
  const [zoom, setZoom] = useState(false);
  const i = OBRAS.findIndex((o) => o.slug === slug);
  if (i < 0) return <section className="wrap"><p>Obra no encontrada. <Link to="/obras">Volver</Link></p></section>;

  const o = OBRAS[i];
  const prev = OBRAS[(i - 1 + OBRAS.length) % OBRAS.length];
  const next = OBRAS[(i + 1) % OBRAS.length];
  const serie = SERIES.find((s) => s.slug === o.serie);
  const s = 1.2; // px por cm en la "vista en sala"

  return (
    <section className="wrap">
      <div className="obra">
        <img src={o.img} alt={o.titulo} className="main" onClick={() => setZoom(true)} />
        <div>
          <h1 style={{ fontSize: 'clamp(2.2rem,5vw,4rem)' }}>{o.titulo}</h1>
          <dl>
            <dt>Año</dt><dd>{o.anio}</dd>
            <dt>Técnica</dt><dd><Link to={`/obras?tecnica=${encodeURIComponent(o.tecnica)}`}>{o.tecnica}</Link></dd>
            <dt>Estilo</dt><dd><Link to={`/obras?estilo=${encodeURIComponent(o.estilo)}`}>{o.estilo}</Link></dd>
            <dt>Medidas</dt><dd>{o.w} × {o.h} cm</dd>
            {serie && <><dt>Serie</dt><dd><Link to={`/series/${serie.slug}`}>{serie.titulo}</Link></dd></>}
          </dl>
          <p>{o.desc}</p>
          <p className="hint">Click en la imagen para ampliar</p>
        </div>
      </div>

      <h2 style={{ marginTop: '4rem' }}>En escala real</h2>
      <p className="hint">Obra junto a una persona de 1,70 m.</p>
      <div className="wall" style={{ height: 300 * s }}>
        <img src={o.img} alt="" style={{ width: o.w * s, height: o.h * s, marginBottom: 100 * s }} />
        <svg className="person" viewBox="0 0 40 170" style={{ height: 170 * s }}>
          <circle cx="20" cy="12" r="11" /><path d="M6 28h28l4 70h-8l-2 72H12l-2-72H2z" />
        </svg>
      </div>

      <div className="pn">
        <Link to={`/obras/${prev.slug}`}>← {prev.titulo}</Link>
        <Link to={`/obras/${next.slug}`}>{next.titulo} →</Link>
      </div>

      {zoom && <div className="lb" onClick={() => setZoom(false)}><img src={o.img} alt={o.titulo} /></div>}
    </section>
  );
}
