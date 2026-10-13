import { UserProgress, WastePlanData } from '../types';
import { EMPTY_WASTE_PLAN } from '../data/planTemplates';

const PROGRESS_STORAGE_KEY = 'ecogestion_peru_progress_v1';
const PLAN_STORAGE_KEY = 'ecogestion_peru_waste_plan_v1';

export const INITIAL_PROGRESS: UserProgress = {
  completedLessons: [],
  lessonQuizScores: {},
  classifiedWastes: {},
  completedCases: {},
  hasStartedPlan: false,
  planLastSavedAt: null
};

export function loadUserProgress(): UserProgress {
  try {
    const raw = localStorage.getItem(PROGRESS_STORAGE_KEY);
    if (!raw) return INITIAL_PROGRESS;
    const parsed = JSON.parse(raw);
    return {
      completedLessons: Array.isArray(parsed.completedLessons) ? parsed.completedLessons : [],
      lessonQuizScores: parsed.lessonQuizScores || {},
      classifiedWastes: parsed.classifiedWastes || {},
      completedCases: parsed.completedCases || {},
      hasStartedPlan: Boolean(parsed.hasStartedPlan),
      planLastSavedAt: parsed.planLastSavedAt || null
    };
  } catch (err) {
    console.error('Error loading progress from localStorage:', err);
    return INITIAL_PROGRESS;
  }
}

export function saveUserProgress(progress: UserProgress): void {
  try {
    localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress));
  } catch (err) {
    console.error('Error saving progress to localStorage:', err);
  }
}

export function clearUserProgress(): void {
  try {
    localStorage.removeItem(PROGRESS_STORAGE_KEY);
  } catch (err) {
    console.error('Error resetting progress:', err);
  }
}

export function loadWastePlanFromStorage(): WastePlanData {
  try {
    const raw = localStorage.getItem(PLAN_STORAGE_KEY);
    if (!raw) return EMPTY_WASTE_PLAN;
    const parsed = JSON.parse(raw);
    return {
      ...EMPTY_WASTE_PLAN,
      ...parsed,
      inventory: Array.isArray(parsed.inventory) ? parsed.inventory : EMPTY_WASTE_PLAN.inventory,
      schedule: Array.isArray(parsed.schedule) ? parsed.schedule : EMPTY_WASTE_PLAN.schedule,
      rolesResponsibilities: Array.isArray(parsed.rolesResponsibilities) ? parsed.rolesResponsibilities : EMPTY_WASTE_PLAN.rolesResponsibilities,
      minimizationStrategies: Array.isArray(parsed.minimizationStrategies) ? parsed.minimizationStrategies : EMPTY_WASTE_PLAN.minimizationStrategies,
      storageSafetyMeasures: Array.isArray(parsed.storageSafetyMeasures) ? parsed.storageSafetyMeasures : EMPTY_WASTE_PLAN.storageSafetyMeasures,
      operatorPpe: Array.isArray(parsed.operatorPpe) ? parsed.operatorPpe : EMPTY_WASTE_PLAN.operatorPpe,
    };
  } catch (err) {
    console.error('Error loading waste plan from localStorage:', err);
    return EMPTY_WASTE_PLAN;
  }
}

export function saveWastePlanToStorage(plan: WastePlanData): void {
  try {
    localStorage.setItem(PLAN_STORAGE_KEY, JSON.stringify(plan));
  } catch (err) {
    console.error('Error saving waste plan to localStorage:', err);
  }
}
