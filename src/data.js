export const ARTISTA = {
  nombre: 'Lis Mars',
  lema: 'Pintura sobre la memoria, la luz y lo que queda.',
  ciudad: 'Buenos Aires, Argentina',
  intro: 'Texto de introducción: quién es el artista, qué busca en su obra y qué va a encontrar el visitante. Dos o tres líneas que inviten a recorrer la sala.',
  bio: [
    'Primer párrafo de la biografía: dónde nació, cómo empezó a pintar y su formación.',
    'Segundo párrafo: su proceso, materiales y temas recurrentes.',
    'Tercer párrafo: exposiciones, premios o colecciones destacadas.',
  ],
  email: 'hola@artista.com',
  instagram: 'https://instagram.com/',
  timeline: [
    ['2010', 'Inicio de estudios de arte'],
    ['2016', 'Primera muestra individual'],
    ['2021', 'Residencia artística'],
    ['2024', 'Muestra colectiva internacional'],
  ],
};

export const TECNICAS = ['Óleo', 'Acrílico', 'Acuarela', 'Técnica mixta', 'Carbón'];
export const ESTILOS = ['Abstracto', 'Figurativo', 'Paisaje', 'Retrato', 'Expresionista'];

export const SERIES = [
  { slug: 'horizonte', titulo: 'Horizonte', anio: 2024, texto: 'Texto curatorial de la serie: concepto, contexto y proceso.' },
  { slug: 'umbrales', titulo: 'Umbrales', anio: 2022, texto: 'Texto curatorial de la serie: concepto, contexto y proceso.' },
  { slug: 'retratos-de-memoria', titulo: 'Retratos de memoria', anio: 2020, texto: 'Texto curatorial de la serie: concepto, contexto y proceso.' },
];

export const EXPOSICIONES = [
  { anio: 2025, titulo: 'Título de la muestra', lugar: 'Galería / Museo, Ciudad', tipo: 'Individual' },
  { anio: 2023, titulo: 'Título de la muestra', lugar: 'Espacio cultural, Ciudad', tipo: 'Colectiva' },
  { anio: 2021, titulo: 'Título de la muestra', lugar: 'Galería, Ciudad', tipo: 'Individual' },
];

// Imagen genérica (SVG generado). Se reemplaza por la foto real en `img`.
export const ph = (w, h, i = 0, t = '') => {
  const hue = (i * 47) % 360;
  const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}' viewBox='0 0 ${w} ${h}'><defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop offset='0' stop-color='hsl(${hue},35%,26%)'/><stop offset='1' stop-color='hsl(${(hue + 50) % 360},45%,48%)'/></linearGradient></defs><rect width='100%' height='100%' fill='url(#g)'/><text x='50%' y='50%' fill='rgba(255,255,255,.7)' font-family='sans-serif' font-size='${w / 16}' text-anchor='middle'>${t || w + '×' + h}</text></svg>`;
  return 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
};

const slugify = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

// [título, año, técnica, estilo, serie, ancho cm, alto cm]
const base = [
  ['Umbral I', 2024, 'Óleo', 'Abstracto', 'horizonte', 120, 90],
  ['Marea baja', 2024, 'Óleo', 'Paisaje', 'horizonte', 150, 100],
  ['La espera', 2023, 'Acrílico', 'Figurativo', 'umbrales', 80, 120],
  ['Casa vacía', 2023, 'Óleo', 'Figurativo', 'umbrales', 100, 100],
  ['Ceniza', 2022, 'Carbón', 'Expresionista', 'umbrales', 70, 100],
  ['Retrato de A.', 2021, 'Óleo', 'Retrato', 'retratos-de-memoria', 60, 80],
  ['Domingo', 2021, 'Acuarela', 'Paisaje', 'retratos-de-memoria', 50, 70],
  ['Voz interior', 2020, 'Técnica mixta', 'Abstracto', 'retratos-de-memoria', 90, 130],
  ['Campo abierto', 2024, 'Acrílico', 'Paisaje', 'horizonte', 140, 80],
  ['Sombra y sal', 2022, 'Técnica mixta', 'Expresionista', 'umbrales', 100, 140],
];

export const OBRAS = base.map(([titulo, anio, tecnica, estilo, serie, w, h], i) => ({
  slug: slugify(titulo), titulo, anio, tecnica, estilo, serie, w, h,
  desc: 'Descripción de la obra: contexto, proceso, materiales y lo que el artista quiere contar.',
  img: ph(900, Math.round((900 * h) / w), i + 1, titulo),
}));
