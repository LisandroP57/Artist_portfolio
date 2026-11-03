import { Routes, Route, Link } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Galeria from './pages/Galeria.jsx';
import Obra from './pages/Obra.jsx';
import { SeriesLista, SerieDetalle } from './pages/Series.jsx';
import Artista from './pages/Artista.jsx';
import Exposiciones from './pages/Exposiciones.jsx';
import Contacto from './pages/Contacto.jsx';

const NotFound = () => (
  <section className="wrap"><h1>404</h1><p>Esta sala no existe. <Link to="/obras">Volver a las obras</Link></p></section>
);

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="obras" element={<Galeria />} />
        <Route path="obras/:slug" element={<Obra />} />
        <Route path="series" element={<SeriesLista />} />
        <Route path="series/:slug" element={<SerieDetalle />} />
        <Route path="artista" element={<Artista />} />
        <Route path="exposiciones" element={<Exposiciones />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
