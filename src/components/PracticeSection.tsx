import React, { useState } from 'react';
import { PRACTICE_WASTE_ITEMS, PRACTICE_CASES } from '../data/practiceData';
import { NTP_COLORS } from '../data/ntpColors';
import { NTPColorCategory, UserProgress } from '../types';
import { 
  Target, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  HelpCircle, 
  RotateCcw, 
  Briefcase, 
  ArrowRight, 
  Sparkles,
  Info,
  Layers,
  ChevronRight,
  ShieldCheck,
  FileCheck
} from 'lucide-react';

interface PracticeSectionProps {
  progress: UserProgress;
  onClassifyWaste: (itemId: number, selectedCategory: NTPColorCategory, isCorrect: boolean) => void;
  onSolveCase: (caseId: string, optionId: string, isCorrect: boolean) => void;
  onGoToPlan: () => void;
}

export const PracticeSection: React.FC<PracticeSectionProps> = ({
  progress,
  onClassifyWaste,
  onSolveCase,
  onGoToPlan
}) => {
  const [subTab, setSubTab] = useState<'clasificador' | 'casos'>('clasificador');
  const [activeWasteIndex, setActiveWasteIndex] = useState<number>(0);
  const [activeCaseIndex, setActiveCaseIndex] = useState<number>(0);

  // Waste classifier state
  const currentItem = PRACTICE_WASTE_ITEMS[activeWasteIndex];
  const userResultForCurrent = progress.classifiedWastes[currentItem.id];

  // Cases state
  const currentCase = PRACTICE_CASES[activeCaseIndex];
  const userResultForCase = progress.completedCases[currentCase.id];

  // Summary counts
  const totalWastes = PRACTICE_WASTE_ITEMS.length;
  const classifiedCount = Object.keys(progress.classifiedWastes).length;
  const correctClassifiedCount = Object.values(progress.classifiedWastes).filter(
    (item) => item.isCorrect
  ).length;

  const totalCases = PRACTICE_CASES.length;
  const solvedCasesCount = Object.keys(progress.completedCases).length;
  const correctCasesCount = Object.values(progress.completedCases).filter(
    (item) => item.isCorrect
  ).length;

  const handleSelectCategory = (category: NTPColorCategory) => {
    const isCorrect = category === currentItem.correctCategory;
    onClassifyWaste(currentItem.id, category, isCorrect);
  };

  const handleSelectCaseOption = (optionId: string) => {
    const selected = currentCase.options.find((opt) => opt.id === optionId);
    if (!selected) return;
    onSolveCase(currentCase.id, optionId, selected.isCorrect);
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-linear-to-r from-teal-800 via-emerald-800 to-teal-900 rounded-3xl text-white p-6 md:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-700/60 border border-teal-500/50 text-teal-200 text-xs font-semibold uppercase mb-3">
              <Target className="w-3.5 h-3.5" />
              Entrenamiento Práctico
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Taller de Segregación y Casos de Supervisión SSOMA
            </h1>
            <p className="mt-2 text-teal-100 text-sm md:text-base leading-relaxed">
              Pon en práctica tus criterios de clasificación con 10 residuos industriales y resuelve 2 escenarios reales de planta donde la seguridad y el cumplimiento ambiental están en juego.
            </p>
          </div>

          {/* Quick Stats Pill */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 flex items-center gap-4 shrink-0">
            <div>
              <div className="text-xs text-teal-200">Residuos Clasificados</div>
              <div className="text-2xl font-black text-white">
                {classifiedCount} / {totalWastes}
              </div>
              <div className="text-[11px] text-teal-300">
                {correctClassifiedCount} correctos
              </div>
            </div>
            <div className="h-10 w-px bg-white/20"></div>
            <div>
              <div className="text-xs text-teal-200">Casos Resueltos</div>
              <div className="text-2xl font-black text-white">
                {solvedCasesCount} / {totalCases}
              </div>
              <div className="text-[11px] text-teal-300">
                {correctCasesCount} con éxito
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-tabs Selector */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-2 rounded-2xl border border-slate-200 shadow-xs">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSubTab('clasificador')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
              subTab === 'clasificador'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-emerald-700 hover:bg-slate-100'
            }`}
          >
            <Layers className="w-4 h-4" />
            1. Clasificador de 10 Residuos
            <span className={`text-[10px] px-2 py-0.5 rounded-full ${
              subTab === 'clasificador' ? 'bg-emerald-800 text-white' : 'bg-slate-200 text-slate-700'
            }`}>
              {correctClassifiedCount}/{totalWastes}
            </span>
          </button>

          <button
            onClick={() => setSubTab('casos')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
              subTab === 'casos'
                ? 'bg-teal-700 text-white shadow-xs'
                : 'text-slate-600 hover:text-teal-700 hover:bg-slate-100'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            2. Casos Ficticios de Planta (2 Casos)
            <span className={`text-[10px] px-2 py-0.5 rounded-full ${
              subTab === 'casos' ? 'bg-teal-900 text-white' : 'bg-slate-200 text-slate-700'
            }`}>
              {solvedCasesCount}/{totalCases}
            </span>
          </button>
        </div>

        <button
          onClick={onGoToPlan}
          className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-xl transition border border-emerald-200 cursor-pointer"
        >
          <span>Ir al Plan de Residuos</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* SUBTAB 1: CLASIFICADOR DE 10 RESIDUOS */}
      {subTab === 'clasificador' && (
        <div className="space-y-6">
          {/* Numbers Carousel */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {PRACTICE_WASTE_ITEMS.map((item, idx) => {
              const res = progress.classifiedWastes[item.id];
              const isCurrent = idx === activeWasteIndex;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveWasteIndex(idx)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap cursor-pointer border ${
                    isCurrent
                      ? 'bg-emerald-700 text-white border-emerald-800 shadow-md ring-2 ring-emerald-500/20'
                      : res
                      ? res.isCorrect
                        ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                        : 'bg-rose-50 text-rose-800 border-rose-300'
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <span>Residuo #{idx + 1}</span>
                  {res && (
                    res.isCorrect ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    ) : (
                      <XCircle className="w-3.5 h-3.5 text-rose-500" />
                    )
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Waste Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Waste Description & Industrial Context */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-xs space-y-6">
              <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-4">
                <span className="text-xs font-extrabold uppercase tracking-wider text-teal-800 bg-teal-50 px-3 py-1 rounded-md">
                  Ítem {activeWasteIndex + 1} de {totalWastes}
                </span>
                <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  NTP 900.058:2019
                </span>
              </div>

              <div>
                <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 leading-snug">
                  {currentItem.name}
                </h2>
                <div className="mt-1 text-xs text-emerald-700 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Área de origen: {currentItem.generationArea}
                </div>
              </div>

              {/* Technical Composition & Contamination Status */}
              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-xs font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                    <Info className="w-4 h-4 text-teal-600" />
                    Composición y Material Físico:
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600">
                    {currentItem.materialComposition}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200">
                  <div className="text-xs font-bold text-amber-950 mb-1 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                    Estado de Contaminación / Condición Actual:
                  </div>
                  <p className="text-xs sm:text-sm text-amber-900 font-medium">
                    {currentItem.contaminationStatus}
                  </p>
                </div>

                <div className="text-xs text-slate-500 italic flex items-start gap-1.5 bg-slate-100/70 p-3 rounded-xl">
                  <span className="font-semibold text-slate-700">Factor Crítico:</span> {currentItem.criticalFactor}
                </div>
              </div>

              {/* Navigation within items */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <button
                  onClick={() => setActiveWasteIndex((prev) => Math.max(0, prev - 1))}
                  disabled={activeWasteIndex === 0}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition cursor-pointer ${
                    activeWasteIndex === 0
                      ? 'opacity-40 cursor-not-allowed border-slate-200 text-slate-400'
                      : 'border-slate-300 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  ← Anterior
                </button>
                <button
                  onClick={() => setActiveWasteIndex((prev) => Math.min(totalWastes - 1, prev + 1))}
                  disabled={activeWasteIndex === totalWastes - 1}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-lg border transition cursor-pointer ${
                    activeWasteIndex === totalWastes - 1
                      ? 'opacity-40 cursor-not-allowed border-slate-200 text-slate-400'
                      : 'border-emerald-600 text-emerald-700 hover:bg-emerald-50'
                  }`}
                >
                  Siguiente →
                </button>
              </div>
            </div>

            {/* Right: Color Buttons & Instant Explanation */}
            <div className="lg:col-span-5 bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-xs space-y-6">
              <div>
                <h3 className="font-extrabold text-base text-slate-900">
                  ¿A qué contenedor corresponde este residuo?
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Selecciona la categoría según el código oficial de colores de la NTP 900.058:2019:
                </p>
              </div>

              {/* Color category buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {(Object.keys(NTP_COLORS) as NTPColorCategory[]).map((catKey) => {
                  const catDef = NTP_COLORS[catKey];
                  const isSelected = userResultForCurrent?.selectedCategory === catKey;
                  const isCorrectTarget = currentItem.correctCategory === catKey;
                  
                  let buttonStyle = 'border-slate-200 bg-white text-slate-700 hover:border-slate-400 hover:bg-slate-50';

                  if (userResultForCurrent) {
                    if (isCorrectTarget) {
                      buttonStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-500 font-bold';
                    } else if (isSelected && !userResultForCurrent.isCorrect) {
                      buttonStyle = 'border-rose-400 bg-rose-50 text-rose-900 ring-2 ring-rose-400';
                    } else {
                      buttonStyle = 'border-slate-200 bg-slate-50 text-slate-400 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={catKey}
                      onClick={() => handleSelectCategory(catKey)}
                      className={`p-3 rounded-2xl border text-left transition flex items-center gap-3 cursor-pointer ${buttonStyle}`}
                    >
                      <span
                        className="w-4 h-4 rounded-full border border-slate-400 shadow-xs shrink-0"
                        style={{ backgroundColor: catDef.accentHex }}
                      ></span>
                      <div className="min-w-0 flex-1">
                        <div className="text-xs font-bold truncate">{catDef.name}</div>
                        <div className="text-[10px] text-slate-500 truncate">Color {catDef.colorName}</div>
                      </div>
                      {userResultForCurrent && isCorrectTarget && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      )}
                      {userResultForCurrent && isSelected && !userResultForCurrent.isCorrect && (
                        <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Result & Technical Explanation Box */}
              {userResultForCurrent && (
                <div
                  className={`p-5 rounded-2xl border animate-fadeIn space-y-2 ${
                    userResultForCurrent.isCorrect
                      ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                      : 'bg-rose-50 border-rose-300 text-rose-950'
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold text-sm">
                    {userResultForCurrent.isCorrect ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        <span>¡Clasificación Correcta!</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-5 h-5 text-rose-600" />
                        <span>Respuesta Incorrecta</span>
                      </>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed">
                    {currentItem.explanation}
                  </p>
                  
                  {/* Next waste item quick prompt */}
                  {activeWasteIndex < totalWastes - 1 && (
                    <div className="pt-2">
                      <button
                        onClick={() => setActiveWasteIndex(activeWasteIndex + 1)}
                        className="w-full flex items-center justify-center gap-1.5 px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold transition cursor-pointer"
                      >
                        Pasar al siguiente residuo (#{activeWasteIndex + 2})
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* SUBTAB 2: CASOS FICTICIOS DE SUPERVISIÓN SSOMA */}
      {subTab === 'casos' && (
        <div className="space-y-6">
          {/* Case Navigation Tabs */}
          <div className="flex gap-3">
            {PRACTICE_CASES.map((cs, idx) => {
              const res = progress.completedCases[cs.id];
              const isCurrent = idx === activeCaseIndex;
              return (
                <button
                  key={cs.id}
                  onClick={() => setActiveCaseIndex(idx)}
                  className={`flex-1 p-4 rounded-2xl border text-left transition cursor-pointer flex items-center justify-between ${
                    isCurrent
                      ? 'bg-teal-50 border-teal-600 ring-2 ring-teal-500/20 shadow-md'
                      : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal-800 bg-teal-100/70 px-2 py-0.5 rounded-md">
                      Escenario 0{idx + 1}
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm mt-1">{cs.title}</h3>
                  </div>
                  {res && (
                    <span className="shrink-0 ml-2">
                      {res.isCorrect ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      ) : (
                        <AlertTriangle className="w-5 h-5 text-amber-500" />
                      )}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Case Details */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                <span className="text-xs font-bold text-teal-700 uppercase bg-teal-50 px-2.5 py-1 rounded-md">
                  {currentCase.fictionalCompany}
                </span>
                <span className="text-xs text-slate-500 font-medium">
                  {currentCase.location}
                </span>
              </div>
              <h2 className="text-xl md:text-2xl font-extrabold text-slate-900">
                {currentCase.title}
              </h2>
            </div>

            {/* Context & Problem */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-2">
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-teal-600" />
                  Contexto Operativo
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {currentCase.description}
                </p>
              </div>

              <div className="bg-amber-50/70 p-5 rounded-2xl border border-amber-200 space-y-2">
                <h4 className="font-bold text-xs uppercase tracking-wider text-amber-950 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  Dilema / Problema Detectado
                </h4>
                <p className="text-xs sm:text-sm text-amber-900 leading-relaxed font-medium">
                  {currentCase.problem}
                </p>
              </div>
            </div>

            {/* Evidence Checklist */}
            <div className="bg-teal-50/60 p-4 rounded-2xl border border-teal-100 space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-teal-900 flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 text-teal-700" />
                Hallazgos Clave de la Inspección SSOMA:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-teal-950">
                {currentCase.evidence.map((ev, i) => (
                  <div key={i} className="flex items-start gap-1.5 bg-white/80 p-2 rounded-lg border border-teal-100">
                    <span className="text-emerald-700 font-bold">•</span>
                    <span>{ev}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Options Selection */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <h3 className="font-extrabold text-base text-slate-900 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-emerald-600" />
                ¿Qué decisión técnica y legal debe tomar el supervisor SSOMA?
              </h3>

              <div className="space-y-3">
                {currentCase.options.map((option) => {
                  const isSelected = userResultForCase?.selectedOptionId === option.id;
                  const hasAnswered = userResultForCase !== undefined;

                  let cardStyle = 'bg-white border-slate-200 hover:border-emerald-300 hover:bg-slate-50';

                  if (hasAnswered) {
                    if (option.isCorrect) {
                      cardStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-1 ring-emerald-500';
                    } else if (isSelected && !option.isCorrect) {
                      cardStyle = 'bg-rose-50 border-rose-400 text-rose-900';
                    } else {
                      cardStyle = 'bg-slate-50 border-slate-200 opacity-60';
                    }
                  }

                  return (
                    <div
                      key={option.id}
                      onClick={() => handleSelectCaseOption(option.id)}
                      className={`p-4 rounded-2xl border transition cursor-pointer ${cardStyle}`}
                    >
                      <div className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full border border-slate-300 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          {option.id.toUpperCase().replace('OPT-', '')}
                        </span>
                        <div className="flex-1 text-xs sm:text-sm font-medium leading-relaxed">
                          {option.text}
                        </div>
                        {hasAnswered && option.isCorrect && (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                        )}
                        {hasAnswered && isSelected && !option.isCorrect && (
                          <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                        )}
                      </div>

                      {/* Immediate feedback if this option was selected or correct */}
                      {hasAnswered && (isSelected || option.isCorrect) && (
                        <div className="mt-3 pt-3 border-t border-slate-200/60 text-xs space-y-1.5 pl-9">
                          <p className="text-slate-800">
                            <span className="font-bold">Retroalimentación: </span>{option.feedback}
                          </p>
                          <div className="text-[11px] text-slate-600 italic">
                            <span className="font-semibold text-slate-800">Impacto SSOMA: </span>{option.ssomaImpact}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Learning summary */}
            {userResultForCase && (
              <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200 text-xs sm:text-sm text-teal-950">
                <div className="font-bold text-teal-900 flex items-center gap-1.5 mb-1">
                  <Sparkles className="w-4 h-4 text-teal-600" />
                  Conclusión Técnica de Supervisión SSOMA:
                </div>
                <p>{currentCase.learningSummary}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
