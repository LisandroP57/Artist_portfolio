import { ARTISTA, ph } from '../data.js';

export default function Artista() {
  return (
    <section className="wrap">
      <h1>El artista</h1>
      <div className="bio">
        <img src={ph(800, 1000, 3, 'Retrato / taller')} alt={ARTISTA.nombre} />
        <div>
          {ARTISTA.bio.map((p, i) => <p key={i} className="rv">{p}</p>)}
          <h2 style={{ marginTop: '2.5rem' }}>Trayectoria</h2>
          <ul className="tl">
            {ARTISTA.timeline.map(([y, t]) => <li key={y}><b>{y}</b><span>{t}</span></li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}
