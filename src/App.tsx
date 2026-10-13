/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { SectionType, UserProgress, NTPColorCategory, WastePlanData } from './types';
import { 
  loadUserProgress, 
  saveUserProgress, 
  clearUserProgress, 
  loadWastePlanFromStorage, 
  saveWastePlanToStorage,
  INITIAL_PROGRESS
} from './utils/storage';
import { Navbar } from './components/Navbar';
import { LearnSection } from './components/LearnSection';
import { PracticeSection } from './components/PracticeSection';
import { WastePlanSection } from './components/WastePlanSection';
import { ProgressSection } from './components/ProgressSection';
import { Footer } from './components/Footer';

export default function App() {
  const [currentSection, setCurrentSection] = useState<SectionType>('aprender');
  const [progress, setProgress] = useState<UserProgress>(() => loadUserProgress());
  const [planData, setPlanData] = useState<WastePlanData>(() => loadWastePlanFromStorage());

  // Save progress changes to localStorage
  useEffect(() => {
    saveUserProgress(progress);
  }, [progress]);

  // Handler for completing / scoring a lesson quiz
  const handleUpdateLessonProgress = (lessonId: string, score: number) => {
    setProgress((prev) => {
      const isAlreadyCompleted = prev.completedLessons.includes(lessonId);
      const updatedCompleted = isAlreadyCompleted 
        ? prev.completedLessons 
        : [...prev.completedLessons, lessonId];

      const updatedScores = {
        ...prev.lessonQuizScores,
        [lessonId]: Math.max(score, prev.lessonQuizScores[lessonId] || 0)
      };

      return {
        ...prev,
        completedLessons: updatedCompleted,
        lessonQuizScores: updatedScores
      };
    });
  };

  // Handler for classifying a waste item in Practice
  const handleClassifyWaste = (itemId: number, selectedCategory: NTPColorCategory, isCorrect: boolean) => {
    setProgress((prev) => ({
      ...prev,
      classifiedWastes: {
        ...prev.classifiedWastes,
        [itemId]: { selectedCategory, isCorrect }
      }
    }));
  };

  // Handler for solving a case study in Practice
  const handleSolveCase = (caseId: string, optionId: string, isCorrect: boolean) => {
    setProgress((prev) => ({
      ...prev,
      completedCases: {
        ...prev.completedCases,
        [caseId]: { selectedOptionId: optionId, isCorrect }
      }
    }));
  };

  // Handler for saving Waste Plan Draft
  const handleSavePlan = (updatedPlan: WastePlanData) => {
    setPlanData(updatedPlan);
    saveWastePlanToStorage(updatedPlan);
    
    setProgress((prev) => ({
      ...prev,
      hasStartedPlan: true,
      planLastSavedAt: new Date().toLocaleTimeString('es-PE', { hour: '2-digit', minute: '2-digit' })
    }));
  };

  // Handler for resetting all educational progress
  const handleResetProgress = () => {
    clearUserProgress();
    setProgress(INITIAL_PROGRESS);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        currentSection={currentSection}
        onSelectSection={(sec) => {
          setCurrentSection(sec);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        progress={progress}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
        {currentSection === 'aprender' && (
          <LearnSection
            progress={progress}
            onUpdateLessonProgress={handleUpdateLessonProgress}
            onGoToPractice={() => {
              setCurrentSection('practicar');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentSection === 'practicar' && (
          <PracticeSection
            progress={progress}
            onClassifyWaste={handleClassifyWaste}
            onSolveCase={handleSolveCase}
            onGoToPlan={() => {
              setCurrentSection('plan');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentSection === 'plan' && (
          <WastePlanSection
            planData={planData}
            onSavePlan={handleSavePlan}
            lastSavedAt={progress.planLastSavedAt}
          />
        )}

        {currentSection === 'progreso' && (
          <ProgressSection
            progress={progress}
            onSelectSection={(sec) => {
              setCurrentSection(sec);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onResetProgress={handleResetProgress}
          />
        )}
      </main>

      {/* Footer */}
      <Footer
        onSelectSection={(sec) => {
          setCurrentSection(sec);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}
