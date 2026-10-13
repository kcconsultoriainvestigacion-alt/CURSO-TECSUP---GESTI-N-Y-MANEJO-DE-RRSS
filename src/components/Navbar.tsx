import React from 'react';
import { SectionType, UserProgress } from '../types';
import { BookOpen, Target, FileText, Award, ShieldCheck, Leaf } from 'lucide-react';

interface NavbarProps {
  currentSection: SectionType;
  onSelectSection: (section: SectionType) => void;
  progress: UserProgress;
}

export const Navbar: React.FC<NavbarProps> = ({ currentSection, onSelectSection, progress }) => {
  const completedLessonsCount = progress.completedLessons.length;
  const classifiedCount = Object.keys(progress.classifiedWastes).length;
  const casesCount = Object.keys(progress.completedCases).length;
  
  // Overall progress percentage
  // 4 lessons (40%) + 10 waste classifications (30%) + 2 cases (20%) + plan started (10%)
  const totalScore = 
    (completedLessonsCount / 4) * 40 +
    (classifiedCount / 10) * 30 +
    (casesCount / 2) * 20 +
    (progress.hasStartedPlan ? 10 : 0);
  const overallPercentage = Math.min(100, Math.round(totalScore));

  const navItems = [
    {
      id: 'aprender' as SectionType,
      label: '1. APRENDER',
      sublabel: '4 Lecciones SSOMA',
      icon: BookOpen,
      badge: `${completedLessonsCount}/4`,
      badgeColor: completedLessonsCount === 4 ? 'bg-emerald-600 text-white' : 'bg-emerald-100 text-emerald-800'
    },
    {
      id: 'practicar' as SectionType,
      label: '2. PRACTICAR',
      sublabel: 'Clasificador & Casos',
      icon: Target,
      badge: `${classifiedCount}/10`,
      badgeColor: classifiedCount === 10 ? 'bg-teal-600 text-white' : 'bg-teal-100 text-teal-800'
    },
    {
      id: 'plan' as SectionType,
      label: '3. MI PLAN DE RESIDUOS',
      sublabel: 'Formulario & Imprimible',
      icon: FileText,
      badge: progress.hasStartedPlan ? 'Borrador' : 'Pendiente',
      badgeColor: progress.hasStartedPlan ? 'bg-cyan-600 text-white' : 'bg-slate-200 text-slate-750'
    },
    {
      id: 'progreso' as SectionType,
      label: '4. MI PROGRESO',
      sublabel: 'Métricas & Insignias',
      icon: Award,
      badge: `${overallPercentage}%`,
      badgeColor: overallPercentage >= 80 ? 'bg-emerald-600 text-white font-bold' : 'bg-amber-100 text-amber-900 font-semibold'
    }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-emerald-100 shadow-xs">
      {/* Top Bar with Branding */}
      <div className="bg-linear-to-r from-emerald-900 via-teal-900 to-emerald-950 text-white px-4 py-2.5">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-linear-to-br from-emerald-400 to-teal-300 flex items-center justify-center text-emerald-950 shadow-md">
              <Leaf className="w-6 h-6 stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg md:text-xl tracking-tight text-white flex items-center gap-1.5">
                  EcoGestión <span className="text-teal-300">Perú</span>
                </span>
                <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-emerald-800/80 text-emerald-200 border border-emerald-600/50">
                  SSOMA
                </span>
              </div>
              <p className="text-xs text-emerald-100/90 hidden sm:block">
                Formación práctica en gestión y manejo de residuos sólidos empresariales
              </p>
            </div>
          </div>

          {/* Quick Info & Progress Pill */}
          <div className="flex items-center gap-3 text-xs">
            <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-800/60 border border-emerald-700/60 text-emerald-100">
              <ShieldCheck className="w-4 h-4 text-emerald-300" />
              <span>NTP 900.058:2019 & D.L. 1278</span>
            </div>
            <button
              onClick={() => onSelectSection('progreso')}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-teal-500/20 hover:bg-teal-500/30 border border-teal-400/40 text-teal-100 transition cursor-pointer"
              title="Ver mi progreso detallado"
            >
              <span className="font-medium">Progreso General:</span>
              <span className="font-bold text-white bg-teal-600 px-2 py-0.5 rounded text-xs">
                {overallPercentage}%
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Tab Navigation */}
      <nav className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="flex overflow-x-auto no-scrollbar justify-start md:justify-around py-1 gap-1">
          {navItems.map((item) => {
            const isActive = currentSection === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => onSelectSection(item.id)}
                className={`flex items-center gap-2 px-3 sm:px-4 py-2.5 rounded-xl text-left transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-emerald-50 text-emerald-900 border-b-2 border-emerald-600 shadow-xs'
                    : 'text-slate-600 hover:text-emerald-700 hover:bg-slate-50'
                }`}
              >
                <div
                  className={`p-1.5 rounded-lg ${
                    isActive ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold leading-tight flex items-center gap-2">
                    {item.label}
                    <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-semibold ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-500 hidden lg:block leading-tight">
                    {item.sublabel}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </nav>
    </header>
  );
};
