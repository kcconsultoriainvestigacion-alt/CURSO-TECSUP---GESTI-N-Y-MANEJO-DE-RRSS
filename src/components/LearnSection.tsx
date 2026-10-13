import React, { useState } from 'react';
import { LESSONS_DATA } from '../data/lessonsData';
import { UserProgress } from '../types';
import { 
  BookOpen, 
  CheckCircle2, 
  XCircle, 
  Building2, 
  HelpCircle, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles,
  RotateCcw,
  Lightbulb,
  Clock,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';

interface LearnSectionProps {
  progress: UserProgress;
  onUpdateLessonProgress: (lessonId: string, score: number) => void;
  onGoToPractice: () => void;
}

export const LearnSection: React.FC<LearnSectionProps> = ({
  progress,
  onUpdateLessonProgress,
  onGoToPractice
}) => {
  const [activeLessonIndex, setActiveLessonIndex] = useState<number>(0);
  
  // State for the quiz in active lesson: user's selected answers { questionId: optionIndex }
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  // Track if user has submitted or confirmed active question
  const [showExplanation, setShowExplanation] = useState<Record<string, boolean>>({});

  const currentLesson = LESSONS_DATA[activeLessonIndex];
  const isLessonCompleted = progress.completedLessons.includes(currentLesson.id);
  const currentSavedScore = progress.lessonQuizScores[currentLesson.id];

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: optionIndex
    }));
    setShowExplanation((prev) => ({
      ...prev,
      [questionId]: true
    }));

    // Check if all 3 questions answered
    const updatedAnswers = { ...userAnswers, [questionId]: optionIndex };
    const allAnswered = currentLesson.questions.every((q) => updatedAnswers[q.id] !== undefined);
    
    if (allAnswered) {
      let correctCount = 0;
      currentLesson.questions.forEach((q) => {
        if (updatedAnswers[q.id] === q.correctIndex) {
          correctCount++;
        }
      });
      onUpdateLessonProgress(currentLesson.id, correctCount);
    }
  };

  const handleResetQuiz = () => {
    const updatedAnswers = { ...userAnswers };
    const updatedExplanation = { ...showExplanation };
    currentLesson.questions.forEach((q) => {
      delete updatedAnswers[q.id];
      delete updatedExplanation[q.id];
    });
    setUserAnswers(updatedAnswers);
    setShowExplanation(updatedExplanation);
  };

  const handleNextLesson = () => {
    if (activeLessonIndex < LESSONS_DATA.length - 1) {
      setActiveLessonIndex(activeLessonIndex + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePrevLesson = () => {
    if (activeLessonIndex > 0) {
      setActiveLessonIndex(activeLessonIndex - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="bg-linear-to-r from-emerald-800 via-teal-800 to-emerald-900 rounded-3xl text-white p-6 md:p-8 shadow-sm">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-700/60 border border-emerald-500/50 text-emerald-200 text-xs font-semibold uppercase mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            Módulo Teórico SSOMA
          </div>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Gestión y Manejo de Residuos Sólidos en el Perú
          </h1>
          <p className="mt-2 text-emerald-100 text-sm md:text-base leading-relaxed">
            Fundamentos técnicos esenciales para futuros supervisores SSOMA. Domina el marco de responsabilidad empresarial, la segregación por código de colores, el almacenamiento seguro y las oportunidades de valorización.
          </p>
        </div>
      </div>

      {/* Lesson Selector Pills */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {LESSONS_DATA.map((lesson, idx) => {
          const isSelected = idx === activeLessonIndex;
          const isDone = progress.completedLessons.includes(lesson.id);
          const score = progress.lessonQuizScores[lesson.id];

          return (
            <button
              key={lesson.id}
              onClick={() => {
                setActiveLessonIndex(idx);
              }}
              className={`text-left p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-emerald-50 border-emerald-600 shadow-md ring-2 ring-emerald-500/20'
                  : 'bg-white border-slate-200 hover:border-emerald-300 hover:bg-slate-50'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${
                    isSelected ? 'bg-emerald-200 text-emerald-900' : 'bg-slate-100 text-slate-600'
                  }`}>
                    Lección 0{idx + 1}
                  </span>
                  {isDone ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      {score !== undefined ? `${score}/3` : 'Hecho'}
                    </span>
                  ) : (
                    <span className="text-[11px] text-slate-500">Pendiente</span>
                  )}
                </div>
                <h2 className="font-bold text-slate-900 text-sm line-clamp-2">
                  {lesson.title}
                </h2>
              </div>
              <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {lesson.readingTime}
                </span>
                <ChevronRight className={`w-4 h-4 transition ${isSelected ? 'text-emerald-700 translate-x-1' : 'text-slate-500'}`} />
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Lesson Content (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-200 shadow-xs">
            {/* Lesson Title & Subheader */}
            <div className="border-b border-slate-100 pb-5 mb-6">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-2.5 py-1 rounded-md">
                  {currentLesson.category}
                </span>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{currentLesson.readingTime}</span>
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
                {currentLesson.title}
              </h2>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">
                {currentLesson.summary}
              </p>
            </div>

            {/* Explanation Sections */}
            <div className="space-y-6 text-slate-700">
              {currentLesson.content.map((sec, i) => (
                <div key={i} className="space-y-3">
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                    <span className="w-1.5 h-5 bg-teal-600 rounded-full inline-block"></span>
                    {sec.sectionTitle}
                  </h3>
                  {sec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="text-sm leading-relaxed text-slate-700">
                      {p}
                    </p>
                  ))}

                  {sec.keyPoints && sec.keyPoints.length > 0 && (
                    <div className="bg-slate-50 border-l-4 border-emerald-500 rounded-r-xl p-4 my-3 space-y-1.5">
                      <div className="text-xs font-bold uppercase text-emerald-800 tracking-wide flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4" />
                        Puntos Clave SSOMA:
                      </div>
                      <ul className="list-disc list-inside text-xs text-slate-600 space-y-1 pl-1">
                        {sec.keyPoints.map((pt, ptIdx) => (
                          <li key={ptIdx}>{pt}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {sec.regulationNote && (
                    <div className="bg-teal-50/70 border border-teal-200 rounded-xl p-3.5 text-xs text-teal-900 flex items-start gap-2.5">
                      <Lightbulb className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                      <div>{sec.regulationNote}</div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Business Example Box */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <div className="bg-linear-to-br from-emerald-50 via-teal-50 to-white border border-teal-200 rounded-2xl p-5 md:p-6 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-900 mb-2">
                  <Building2 className="w-4 h-4 text-teal-700" />
                  Ejemplo Empresarial Peruano
                </div>
                <h4 className="font-extrabold text-base md:text-lg text-slate-900">
                  {currentLesson.businessExample.companyName}
                </h4>
                <div className="text-xs font-medium text-slate-500 mb-3">
                  {currentLesson.businessExample.rubro}
                </div>

                <div className="space-y-3 text-xs md:text-sm text-slate-700">
                  <div>
                    <span className="font-bold text-slate-900">Situación / Problema: </span>
                    {currentLesson.businessExample.scenario}
                  </div>
                  <div>
                    <span className="font-bold text-emerald-800">Acción Implementada: </span>
                    {currentLesson.businessExample.actionTaken}
                  </div>
                  <div className="bg-white/80 p-3 rounded-xl border border-teal-100 text-teal-950 font-medium">
                    <span className="font-bold text-teal-800">Aprendizaje para el Supervisor SSOMA: </span>
                    {currentLesson.businessExample.ssomaLearning}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="mt-8 flex items-center justify-between gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={handlePrevLesson}
                disabled={activeLessonIndex === 0}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                  activeLessonIndex === 0
                    ? 'opacity-40 cursor-not-allowed bg-slate-100 text-slate-400'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                Lección anterior
              </button>

              {activeLessonIndex < LESSONS_DATA.length - 1 ? (
                <button
                  onClick={handleNextLesson}
                  className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition cursor-pointer"
                >
                  Siguiente Lección
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  onClick={onGoToPractice}
                  className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-teal-600 hover:bg-teal-700 text-white shadow-xs transition cursor-pointer"
                >
                  ¡Ir a Practicar!
                  <Sparkles className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Quiz with 3 Questions (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs sticky top-24">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-teal-600" />
                <h3 className="font-extrabold text-slate-900 text-base">
                  Cuestionario Rápido
                </h3>
              </div>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                3 Preguntas
              </span>
            </div>

            <p className="text-xs text-slate-500 mb-5">
              Pon a prueba tu comprensión de esta lección. Selecciona una respuesta para ver la explicación técnica inmediata.
            </p>

            {/* Questions list */}
            <div className="space-y-6">
              {currentLesson.questions.map((q, qIndex) => {
                const selectedOption = userAnswers[q.id];
                const isAnswered = selectedOption !== undefined;
                const isCorrect = selectedOption === q.correctIndex;
                const showExpl = showExplanation[q.id];

                return (
                  <div key={q.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="flex items-start gap-2">
                      <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {qIndex + 1}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                        {q.question}
                      </h4>
                    </div>

                    {/* Options */}
                    <div className="space-y-1.5 pl-7">
                      {q.options.map((opt, optIdx) => {
                        const isThisSelected = selectedOption === optIdx;
                        let optionStyle = 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100';

                        if (isAnswered) {
                          if (optIdx === q.correctIndex) {
                            optionStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-medium ring-1 ring-emerald-500';
                          } else if (isThisSelected && !isCorrect) {
                            optionStyle = 'bg-rose-50 border-rose-400 text-rose-900';
                          } else {
                            optionStyle = 'bg-slate-100/60 border-slate-200 text-slate-400 opacity-70';
                          }
                        }

                        return (
                          <button
                            key={optIdx}
                            onClick={() => handleSelectOption(q.id, optIdx)}
                            className={`w-full text-left p-2.5 rounded-xl border text-xs transition cursor-pointer flex items-start gap-2 ${optionStyle}`}
                          >
                            <span className="w-4 h-4 rounded-full border flex items-center justify-center text-[10px] shrink-0 mt-0.5">
                              {String.fromCharCode(65 + optIdx)}
                            </span>
                            <span className="flex-1 leading-snug">{opt}</span>
                            {isAnswered && optIdx === q.correctIndex && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                            )}
                            {isAnswered && isThisSelected && !isCorrect && (
                              <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Explained Answer */}
                    {showExpl && (
                      <div className={`mt-2 p-3 rounded-xl text-xs leading-relaxed ${
                        isCorrect
                          ? 'bg-emerald-100/70 border border-emerald-300 text-emerald-900'
                          : 'bg-amber-100/70 border border-amber-300 text-amber-950'
                      }`}>
                        <div className="font-bold flex items-center gap-1.5 mb-1">
                          {isCorrect ? (
                            <>
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                              <span>¡Respuesta Correcta!</span>
                            </>
                          ) : (
                            <>
                              <XCircle className="w-3.5 h-3.5 text-rose-700" />
                              <span>Revisión Técnica:</span>
                            </>
                          )}
                        </div>
                        <p>{q.explanation}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Summary of Quiz */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <button
                onClick={handleResetQuiz}
                className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 transition cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reiniciar preguntas
              </button>

              {isLessonCompleted && (
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Lección Completada</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
