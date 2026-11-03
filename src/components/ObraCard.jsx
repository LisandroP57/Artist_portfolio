import { Link } from 'react-router-dom';

export default function ObraCard({ o }) {
  return (
    <Link to={`/obras/${o.slug}`} className="card rv">
      <img src={o.img} alt={o.titulo} loading="lazy" />
      <div className="cap"><b>{o.titulo}</b><span>{o.tecnica} · {o.anio}</span></div>
    </Link>
  );
}