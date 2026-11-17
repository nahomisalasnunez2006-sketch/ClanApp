// Datos de ejemplo (en una app real vendrian de una API o base de datos)

export const usuario = {
  nombre: 'Nahomi',
  subtitulo: '@nahomi · Mexico (UTC-6)',
  color: '#5865F2',
};

export const juegos = [
  { id: 'j1', nombre: 'Minecraft', color: '#3BA55D' },
  { id: 'j2', nombre: 'Valorant', color: '#ED4245' },
  { id: 'j3', nombre: 'Fortnite', color: '#9B59B6' },
  { id: 'j4', nombre: 'Among Us', color: '#E67E22' },
  { id: 'j5', nombre: 'LoL', color: '#1ABC9C' },
];

export const clanes = [
  {
    id: 'c1',
    nombre: 'Los Creepers',
    puesto: 'Lider',
    juego: 'Minecraft',
    color: '#3BA55D',
    miembros: [
      { id: 'm1', nombre: 'Nahomi', subtitulo: 'Mexico · UTC-6', color: '#5865F2', cumplio: true },
      { id: 'm2', nombre: 'Kenji', subtitulo: 'Japon · UTC+9', color: '#F1C40F', cumplio: false },
      { id: 'm3', nombre: 'Lucia', subtitulo: 'Espana · UTC+1', color: '#E91E63', cumplio: true },
      { id: 'm4', nombre: 'Tom', subtitulo: 'EUA · UTC-5', color: '#00BCD4', cumplio: false },
    ],
    tareas: [
      { id: 't1', texto: 'Juntar 64 bloques de hierro', hecha: true },
      { id: 't2', texto: 'Construir la granja de trigo', hecha: false },
      { id: 't3', texto: 'Explorar el Nether', hecha: false },
    ],
  },
  {
    id: 'c2',
    nombre: 'Team Spike',
    puesto: 'Miembro',
    juego: 'Valorant',
    color: '#ED4245',
    miembros: [
      { id: 'm5', nombre: 'Nahomi', subtitulo: 'Mexico · UTC-6', color: '#5865F2', cumplio: false },
      { id: 'm6', nombre: 'Ana', subtitulo: 'Chile · UTC-3', color: '#8BC34A', cumplio: true },
    ],
    tareas: [
      { id: 't4', texto: 'Practicar 30 min en el rango', hecha: false },
      { id: 't5', texto: 'Jugar 3 partidas competitivas', hecha: false },
    ],
  },
];
