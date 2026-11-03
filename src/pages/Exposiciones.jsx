import { EXPOSICIONES } from '../data.js';

export default function Exposiciones() {
  return (
    <section className="wrap">
      <h1>Exposiciones</h1>
      <ul className="tl" style={{ marginTop: '2rem' }}>
        {EXPOSICIONES.map((e, i) => (
          <li key={i} className="rv"><b>{e.anio}</b><span>{e.titulo}<br /><small>{e.tipo} · {e.lugar}</small></span></li>
        ))}
      </ul>
    </section>
  );
}
