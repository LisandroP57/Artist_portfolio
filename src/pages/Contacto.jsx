import { ARTISTA } from '../data.js';

export default function Contacto() {
  return (
    <section className="wrap">
      <h1>Contacto</h1>
      <p className="intro">Para consultas sobre la obra, muestras o prensa.</p>
      <p style={{ marginTop: '2rem' }}>
        <a className="btn" href={`mailto:${ARTISTA.email}`}>{ARTISTA.email}</a>{' '}
        <a className="btn" href={ARTISTA.instagram} target="_blank" rel="noreferrer">Instagram</a>
      </p>
    </section>
  );
}
