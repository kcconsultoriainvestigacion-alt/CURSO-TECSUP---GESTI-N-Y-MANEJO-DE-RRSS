import React, { useState } from 'react';
import { UserProgress, SectionType } from '../types';
import { LESSONS_DATA } from '../data/lessonsData';
import { PRACTICE_WASTE_ITEMS, PRACTICE_CASES } from '../data/practiceData';
import { NTP_COLORS } from '../data/ntpColors';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  BookOpen, 
  Target, 
  FileText, 
  ShieldCheck, 
  ArrowRight,
  Sparkles,
  Calendar,
  AlertCircle
} from 'lucide-react';

interface ProgressSectionProps {
  progress: UserProgress;
  onSelectSection: (section: SectionType) => void;
  onResetProgress: () => void;
}

export const ProgressSection: React.FC<ProgressSectionProps> = ({
  progress,
  onSelectSection,
  onResetProgress
}) => {
  const [showConfirmReset, setShowConfirmReset] = useState<boolean>(false);

  // Lesson metrics
  const totalLessons = LESSONS_DATA.length;
  const completedLessonsCount = progress.completedLessons.length;
  const totalQuestionsAnswered = Object.keys(progress.lessonQuizScores).length * 3;
  const totalQuizPointsEarned = Object.values(progress.lessonQuizScores).reduce((acc, curr) => acc + curr, 0);

  // Waste metrics
  const totalWastes = PRACTICE_WASTE_ITEMS.length;
  const classifiedCount = Object.keys(progress.classifiedWastes).length;
  const correctClassifiedCount = Object.values(progress.classifiedWastes).filter((w) => w.isCorrect).length;

  // Case metrics
  const totalCases = PRACTICE_CASES.length;
  const solvedCasesCount = Object.keys(progress.completedCases).length;
  const correctCasesCount = Object.values(progress.completedCases).filter((c) => c.isCorrect).length;

  // Overall Score Calculation (out of 100%)
  const scoreLessons = (completedLessonsCount / totalLessons) * 40;
  const scoreWastes = (classifiedCount / totalWastes) * 30;
  const scoreCases = (solvedCasesCount / totalCases) * 20;
  const scorePlan = progress.hasStartedPlan ? 10 : 0;
  const overallPercentage = Math.min(100, Math.round(scoreLessons + scoreWastes + scoreCases + scorePlan));

  // Competency badges
  const badges = [
    {
      id: 'badge-theory',
      name: 'Fundamentos SSOMA',
      description: 'Completa las 4 lecciones del módulo teórico.',
      unlocked: completedLessonsCount === 4,
      icon: BookOpen,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      id: 'badge-segregation',
      name: 'Especialista en NTP 900.058',
      description: 'Clasifica al menos 8 residuos correctamente en el taller.',
      unlocked: correctClassifiedCount >= 8,
      icon: Target,
      color: 'from-teal-500 to-cyan-600'
    },
    {
      id: 'badge-cases',
      name: 'Supervisor de Respuestas en Campo',
      description: 'Resuelve con éxito los 2 casos de incidentes industriales.',
      unlocked: correctCasesCount === 2,
      icon: ShieldCheck,
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 'badge-plan',
      name: 'Diseñador de Planes de Residuos',
      description: 'Formula y guarda un borrador técnico del plan empresarial.',
      unlocked: progress.hasStartedPlan,
      icon: FileText,
      color: 'from-emerald-600 to-green-700'
    }
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-linear-to-r from-emerald-800 via-teal-800 to-emerald-950 rounded-3xl text-white p-6 md:p-8 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-700/60 border border-emerald-500/50 text-emerald-200 text-xs font-semibold uppercase mb-3">
              <Award className="w-3.5 h-3.5" />
              Tablero de Desempeño
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Mi Progreso Académico y Práctico
            </h1>
            <p className="mt-2 text-emerald-100 text-sm md:text-base leading-relaxed">
              Monitorea el avance de tus competencias como supervisor SSOMA. Todos tus resultados y borradores se conservan automáticamente en tu navegador.
            </p>
          </div>

          {/* Large Overall Progress Dial */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 text-center flex flex-col items-center justify-center shrink-0 min-w-44">
            <div className="text-4xl md:text-5xl font-black text-white tracking-tight">
              {overallPercentage}%
            </div>
            <div className="text-xs font-semibold text-emerald-200 mt-1 uppercase tracking-wider">
              {overallPercentage === 100
                ? '¡Capacitación Completa!'
                : overallPercentage >= 50
                ? 'Nivel Avanzado'
                : 'En Progreso'}
            </div>
            <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden mt-3">
              <div
                className="bg-emerald-400 h-full rounded-full transition-all duration-500"
                style={{ width: `${overallPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1: Lessons */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-slate-500 text-xs font-semibold mb-2">
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-emerald-600" />
                Lecciones Teóricas
              </span>
              <span>40%</span>
            </div>
            <div className="text-2xl font-black text-slate-900">
              {completedLessonsCount} / {totalLessons}
            </div>
            <p className="text-xs text-slate-500 mt-1">
              {totalQuizPointsEarned} de 12 puntos en cuestionarios
            </p>
          </div>
          <button
            onClick={() => onSelectSection('aprender')}
            className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700 hover:text-emerald-800 cursor-pointer"
          >
            <span>Repasar lecciones</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Card 2: Waste Classifier */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-slate-500 text-xs font-semibold mb-2">
              <span className="flex items-center gap-1.5">
                <Target className="w-4 h-4 text-teal-600" />
                Residuos Clasificados
              </span>
              <span>30%</span>
            </div>
            <div className="text-2xl font-black text-slate-900">
              {classifiedCount} / {totalWastes}
            </div>
            <p className="text-xs text-slate-500 mt-1">
              {correctClassifiedCount} clasificaciones correctas
            </p>
          </div>
          <button
            onClick={() => onSelectSection('practicar')}
            className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-teal-700 hover:text-teal-800 cursor-pointer"
          >
            <span>Ir al taller de residuos</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Card 3: Case Studies */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-slate-500 text-xs font-semibold mb-2">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-cyan-600" />
                Casos de Planta
              </span>
              <span>20%</span>
            </div>
            <div className="text-2xl font-black text-slate-900">
              {solvedCasesCount} / {totalCases}
            </div>
            <p className="text-xs text-slate-500 mt-1">
              {correctCasesCount} resueltos con criterio óptimo
            </p>
          </div>
          <button
            onClick={() => onSelectSection('practicar')}
            className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-cyan-700 hover:text-cyan-800 cursor-pointer"
          >
            <span>Ver casos de estudio</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Card 4: Waste Plan */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-slate-500 text-xs font-semibold mb-2">
              <span className="flex items-center gap-1.5">
                <FileText className="w-4 h-4 text-emerald-600" />
                Plan de Residuos
              </span>
              <span>10%</span>
            </div>
            <div className="text-2xl font-black text-slate-900">
              {progress.hasStartedPlan ? 'Iniciado' : 'Pendiente'}
            </div>
            <p className="text-xs text-slate-500 mt-1">
              {progress.planLastSavedAt
                ? `Guardado: ${progress.planLastSavedAt}`
                : 'Aún no guardas un borrador'}
            </p>
          </div>
          <button
            onClick={() => onSelectSection('plan')}
            className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700 hover:text-emerald-800 cursor-pointer"
          >
            <span>Editar mi plan</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Badges / Competency Section */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg md:text-xl font-extrabold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-500" />
              Insignias de Competencia SSOMA
            </h2>
            <p className="text-xs text-slate-500">
              Reconocimientos obtenidos a medida que avanzas en el aprendizaje y la práctica.
            </p>
          </div>
          <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
            {badges.filter((b) => b.unlocked).length} / {badges.length} Desbloqueadas
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.id}
                className={`p-4 rounded-2xl border transition flex flex-col justify-between ${
                  badge.unlocked
                    ? 'bg-linear-to-b from-white to-emerald-50/50 border-emerald-300 shadow-xs'
                    : 'bg-slate-50/80 border-slate-200 opacity-60'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-xs ${
                        badge.unlocked
                          ? `bg-linear-to-br ${badge.color}`
                          : 'bg-slate-300'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    {badge.unlocked ? (
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        Logrado
                      </span>
                    ) : (
                      <span className="text-[10px] text-slate-400">Bloqueado</span>
                    )}
                  </div>
                  <h3 className="font-extrabold text-slate-900 text-sm">{badge.name}</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-snug">{badge.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detailed Lesson Breakdown Table */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-xs space-y-4">
        <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-emerald-600" />
          Detalle del Módulo Teórico (4 Lecciones)
        </h2>
        <div className="overflow-x-auto border border-slate-200 rounded-2xl">
          <table className="w-full text-xs text-left">
            <thead className="bg-slate-100 text-slate-700 font-bold uppercase border-b border-slate-200">
              <tr>
                <th className="p-3">Lección</th>
                <th className="p-3">Estado</th>
                <th className="p-3">Puntaje Obtenido</th>
                <th className="p-3 text-right">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {LESSONS_DATA.map((lesson, idx) => {
                const isCompleted = progress.completedLessons.includes(lesson.id);
                const score = progress.lessonQuizScores[lesson.id];
                return (
                  <tr key={lesson.id} className="hover:bg-slate-50/60">
                    <td className="p-3">
                      <div className="font-bold text-slate-900">0{idx + 1}. {lesson.title}</div>
                      <div className="text-[11px] text-slate-500">{lesson.category}</div>
                    </td>
                    <td className="p-3">
                      {isCompleted ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                          Completada
                        </span>
                      ) : (
                        <span className="text-[11px] text-slate-400">No completada</span>
                      )}
                    </td>
                    <td className="p-3 font-semibold">
                      {score !== undefined ? `${score} / 3 aciertos` : '—'}
                    </td>
                    <td className="p-3 text-right">
                      <button
                        onClick={() => onSelectSection('aprender')}
                        className="text-xs font-bold text-emerald-700 hover:text-emerald-900 cursor-pointer"
                      >
                        {isCompleted ? 'Revisar' : 'Iniciar'}
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detailed 10 Wastes Classification Summary */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-xs space-y-4">
        <h2 className="text-lg font-extrabold text-slate-900 flex items-center gap-2">
          <Target className="w-5 h-5 text-teal-600" />
          Detalle del Clasificador de Residuos (10 Ítems)
        </h2>
        <div className="overflow-x-auto border border-slate-200 rounded-2xl">
          <table className="w-full text-xs text-left">
            <thead className="bg-slate-100 text-slate-700 font-bold uppercase border-b border-slate-200">
              <tr>
                <th className="p-3">#</th>
                <th className="p-3">Residuo Industrial</th>
                <th className="p-3">Categoría Correcta (NTP)</th>
                <th className="p-3">Tu Respuesta</th>
                <th className="p-3 text-center">Resultado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {PRACTICE_WASTE_ITEMS.map((item) => {
                const res = progress.classifiedWastes[item.id];
                const correctCatDef = NTP_COLORS[item.correctCategory];
                const selectedCatDef = res ? NTP_COLORS[res.selectedCategory] : null;

                return (
                  <tr key={item.id} className="hover:bg-slate-50/60">
                    <td className="p-3 font-bold text-slate-500">#{item.id}</td>
                    <td className="p-3 font-medium text-slate-900 max-w-xs">{item.name}</td>
                    <td className="p-3">
                      <span className="font-bold" style={{ color: correctCatDef.accentHex === '#ffffff' ? '#334155' : correctCatDef.accentHex }}>
                        {correctCatDef.name} ({correctCatDef.colorName})
                      </span>
                    </td>
                    <td className="p-3">
                      {selectedCatDef ? (
                        <span>{selectedCatDef.name} ({selectedCatDef.colorName})</span>
                      ) : (
                        <span className="text-slate-400 italic">Sin responder</span>
                      )}
                    </td>
                    <td className="p-3 text-center">
                      {res ? (
                        res.isCorrect ? (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            Correcto
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full">
                            <XCircle className="w-3.5 h-3.5 text-rose-600" />
                            Incorrecto
                          </span>
                        )
                      ) : (
                        <span className="text-slate-400">—</span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Reset Progress Section */}
      <div className="bg-slate-50 rounded-2xl p-4 sm:p-5 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-slate-200 flex items-center justify-center text-slate-600 shrink-0">
            <RotateCcw className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-800">
              ¿Deseas reiniciar tu progreso de actividades?
            </div>
            <div className="text-[11px] text-slate-500">
              Permite a los estudiantes comenzar desde cero para una nueva evaluación o práctica.
            </div>
          </div>
        </div>

        {!showConfirmReset ? (
          <button
            onClick={() => setShowConfirmReset(true)}
            className="px-3.5 py-2 text-xs font-semibold text-rose-700 hover:text-rose-900 border border-rose-200 hover:bg-rose-50 rounded-xl transition cursor-pointer shrink-0"
          >
            Reiniciar progreso
          </button>
        ) : (
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => {
                onResetProgress();
                setShowConfirmReset(false);
              }}
              className="px-3 py-1.5 text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white rounded-lg transition cursor-pointer"
            >
              Sí, confirmar
            </button>
            <button
              onClick={() => setShowConfirmReset(false)}
              className="px-3 py-1.5 text-xs font-semibold bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg transition cursor-pointer"
            >
              Cancelar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
