import { useSearchParams } from 'react-router-dom';
import { OBRAS, TECNICAS, ESTILOS } from '../data.js';
import ObraCard from '../components/ObraCard.jsx';

// Los filtros viven en la URL (?tecnica=Óleo&estilo=Paisaje) → se pueden compartir y linkear
export default function Galeria() {
  const [sp, setSp] = useSearchParams();
  const f = { tecnica: sp.get('tecnica'), estilo: sp.get('estilo') };
  const toggle = (k, v) => {
    const n = new URLSearchParams(sp);
    f[k] === v ? n.delete(k) : n.set(k, v);
    setSp(n);
  };
  const chips = (k, items) => (
    <div className="chips"><small>{k}</small>
      {items.map((i) => <button key={i} className={f[k] === i ? 'on' : ''} onClick={() => toggle(k, i)}>{i}</button>)}
    </div>
  );
  const list = OBRAS.filter((o) => (!f.tecnica || o.tecnica === f.tecnica) && (!f.estilo || o.estilo === f.estilo));

  return (
    <section className="wrap">
      <h1>Obras</h1>
      {chips('tecnica', TECNICAS)}
      {chips('estilo', ESTILOS)}
      <p className="count">{list.length} {list.length === 1 ? 'obra' : 'obras'}</p>
      <div className="masonry">{list.map((o) => <ObraCard key={o.slug} o={o} />)}</div>
    </section>
  );
}
