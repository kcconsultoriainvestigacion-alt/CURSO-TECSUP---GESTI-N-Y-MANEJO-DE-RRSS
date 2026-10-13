import { NTPColorCategory, NTPColorDefinition } from '../types';

export const NTP_COLORS: Record<NTPColorCategory, NTPColorDefinition> = {
  papel_carton: {
    id: 'papel_carton',
    name: 'Papel y Cartón',
    colorName: 'Azul',
    badgeBg: 'bg-blue-600',
    badgeText: 'text-white',
    borderColor: 'border-blue-500',
    accentHex: '#2563eb',
    description: 'Hojas bond, periódicos, revistas, folletos, cajas de cartón y empaques limpios y secos (sin grasa ni humedad).'
  },
  plastico: {
    id: 'plastico',
    name: 'Plásticos',
    colorName: 'Blanco',
    badgeBg: 'bg-white',
    badgeText: 'text-slate-800',
    borderColor: 'border-slate-300',
    accentHex: '#e2e8f0',
    description: 'Botellas de bebidas (PET), envases de detergente/champú enjuagados, tapas, stretch film y bolsas plásticas limpias.'
  },
  metales: {
    id: 'metales',
    name: 'Metales',
    colorName: 'Amarillo',
    badgeBg: 'bg-amber-400',
    badgeText: 'text-amber-950',
    borderColor: 'border-amber-400',
    accentHex: '#fbbf24',
    description: 'Latas de hojalata, latas de aluminio, perfiles, chatarra metálica, clavos, alambres y retazos de acero limpios.'
  },
  organicos: {
    id: 'organicos',
    name: 'Orgánicos',
    colorName: 'Marrón',
    badgeBg: 'bg-amber-800',
    badgeText: 'text-white',
    borderColor: 'border-amber-700',
    accentHex: '#92400e',
    description: 'Restos de frutas, verduras, cáscaras, restos de comida no contaminada, poda de jardines y restos vegetales.'
  },
  vidrio: {
    id: 'vidrio',
    name: 'Vidrio',
    colorName: 'Plomo / Gris',
    badgeBg: 'bg-slate-500',
    badgeText: 'text-white',
    borderColor: 'border-slate-400',
    accentHex: '#64748b',
    description: 'Botellas de bebidas, frascos de conservas y vajilla de vidrio vacíos y limpios (enteros o rotos no contaminados).'
  },
  peligrosos: {
    id: 'peligrosos',
    name: 'Peligrosos',
    colorName: 'Rojo',
    badgeBg: 'bg-rose-600',
    badgeText: 'text-white',
    borderColor: 'border-rose-500',
    accentHex: '#e11d48',
    description: 'Trapos y waypes impregnados con aceite/solventes, pilas, luminarias fluorescentes, envases de químicos, tóners y biosanitarios.'
  },
  no_aprovechables: {
    id: 'no_aprovechables',
    name: 'No Aprovechables',
    colorName: 'Negro',
    badgeBg: 'bg-neutral-800',
    badgeText: 'text-white',
    borderColor: 'border-neutral-700',
    accentHex: '#262626',
    description: 'Papel higiénico, toallas de papel usadas, colillas, empaques multicapa de snacks/galletas, cerámicos y residuos de barrido.'
  }
};
