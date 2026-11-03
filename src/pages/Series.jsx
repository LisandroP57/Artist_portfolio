import { Link, useParams } from 'react-router-dom';
import { SERIES, OBRAS } from '../data.js';
import ObraCard from '../components/ObraCard.jsx';

export function SeriesLista() {
  return (
    <section className="wrap">
      <h1>Series</h1>
      <div className="grid" style={{ marginTop: '2rem' }}>
        {SERIES.map((s) => (
          <Link key={s.slug} to={`/series/${s.slug}`} className="scard rv">
            <img src={OBRAS.find((o) => o.serie === s.slug).img} alt={s.titulo} />
            <h3>{s.titulo}</h3><span>{s.anio}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function SerieDetalle() {
  const { slug } = useParams();
  const s = SERIES.find((x) => x.slug === slug);
  if (!s) return <section className="wrap"><p>Serie no encontrada. <Link to="/series">Volver</Link></p></section>;
  return (
    <section className="wrap">
      <p className="eyebrow">Serie · {s.anio}</p>
      <h1>{s.titulo}</h1>
      <p className="intro">{s.texto}</p>
      <div className="masonry" style={{ marginTop: '3rem' }}>
        {OBRAS.filter((o) => o.serie === s.slug).map((o) => <ObraCard key={o.slug} o={o} />)}
      </div>
    </section>
  );
}
