import React from 'react';
import { NTP_COLORS } from '../data/ntpColors';
import { NTPColorCategory, SectionType } from '../types';
import { Leaf, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onSelectSection: (section: SectionType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectSection }) => {
  return (
    <footer className="mt-16 bg-slate-900 text-slate-300 border-t border-slate-800 print:hidden">
      {/* Quick Color Reference Strip */}
      <div className="bg-slate-950 py-3 px-4 border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="font-bold text-slate-300 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            Código de Colores NTP 900.058:2019 (Ámbito No Municipal / Industrial):
          </div>
          <div className="flex flex-wrap items-center gap-2 text-[11px]">
            {(Object.keys(NTP_COLORS) as NTPColorCategory[]).map((k) => {
              const c = NTP_COLORS[k];
              return (
                <div key={k} className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-slate-900 border border-slate-800">
                  <span
                    className="w-2.5 h-2.5 rounded-full border border-slate-600"
                    style={{ backgroundColor: c.accentHex }}
                  ></span>
                  <span className="text-slate-300 font-medium">{c.colorName}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Footer Info */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 text-white font-extrabold text-base mb-2">
            <div className="w-7 h-7 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center">
              <Leaf className="w-4 h-4" />
            </div>
            EcoGestión Perú
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Plataforma interactiva orientada a la formación de futuros supervisores SSOMA en la gestión integral de residuos sólidos en empresas e industrias del Perú.
          </p>
          <div className="mt-3 flex items-center gap-2 text-[11px] text-emerald-400">
            <ShieldCheck className="w-4 h-4" />
            <span>Basado en D.L. 1278 y NTP 900.058:2019</span>
          </div>
        </div>

        <div>
          <div className="font-bold text-white text-xs uppercase tracking-wider mb-2">
            Navegación Rápida
          </div>
          <ul className="space-y-1.5 text-xs text-slate-400">
            <li>
              <button
                onClick={() => onSelectSection('aprender')}
                className="hover:text-emerald-400 transition cursor-pointer"
              >
                1. Aprender (4 Lecciones teóricas y cuestionarios)
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectSection('practicar')}
                className="hover:text-emerald-400 transition cursor-pointer"
              >
                2. Practicar (Clasificador de 10 residuos y 2 casos de planta)
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectSection('plan')}
                className="hover:text-emerald-400 transition cursor-pointer"
              >
                3. Mi Plan de Residuos (Formulario guiado e imprimible)
              </button>
            </li>
            <li>
              <button
                onClick={() => onSelectSection('progreso')}
                className="hover:text-emerald-400 transition cursor-pointer"
              >
                4. Mi Progreso (Métricas y evaluación integral)
              </button>
            </li>
          </ul>
        </div>

        <div>
          <div className="font-bold text-white text-xs uppercase tracking-wider mb-2">
            Aviso Académico
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            Todo el material expuesto tiene fines estrictamente educativos y de simulación. Las empresas citadas son ficticias. Los borradores de planes generados se identifican como <span className="text-amber-300 font-medium">“Borrador educativo pendiente de revisión técnica”</span>.
          </p>
          <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2">
            <span>© {new Date().getFullYear()} EcoGestión Perú — Formación Técnica SSOMA</span>
          </div>
        </div>
      </div>

      {/* Author attribution bar */}
      <div className="bg-slate-950 py-3.5 px-4 border-t border-slate-800/90 text-center">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-2 text-xs">
          <span className="text-slate-400">Plataforma educativa EcoGestión Perú</span>
          <span className="text-emerald-500 font-bold">•</span>
          <span className="text-emerald-300 font-bold tracking-wide flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-teal-400 inline-block"></span>
            Elaborado por Ing. Keissy Siviruero
          </span>
        </div>
      </div>
    </footer>
  );
};
