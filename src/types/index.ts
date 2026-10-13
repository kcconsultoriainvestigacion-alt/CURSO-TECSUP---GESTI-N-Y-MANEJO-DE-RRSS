export type SectionType = 'aprender' | 'practicar' | 'plan' | 'progreso';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Lesson {
  id: string;
  title: string;
  category: string;
  readingTime: string;
  summary: string;
  content: {
    sectionTitle: string;
    paragraphs: string[];
    keyPoints?: string[];
    regulationNote?: string;
  }[];
  businessExample: {
    companyName: string;
    rubro: string;
    scenario: string;
    actionTaken: string;
    ssomaLearning: string;
  };
  questions: QuizQuestion[];
}

export type NTPColorCategory = 
  | 'papel_carton'
  | 'plastico'
  | 'metales'
  | 'organicos'
  | 'vidrio'
  | 'peligrosos'
  | 'no_aprovechables';

export interface NTPColorDefinition {
  id: NTPColorCategory;
  name: string;
  colorName: string;
  badgeBg: string;
  badgeText: string;
  borderColor: string;
  accentHex: string;
  description: string;
}

export interface WasteItemPractice {
  id: number;
  name: string;
  materialComposition: string;
  contaminationStatus: string;
  generationArea: string;
  correctCategory: NTPColorCategory;
  options: NTPColorCategory[];
  explanation: string;
  criticalFactor: string;
}

export interface CaseStudyOption {
  id: string;
  text: string;
  isCorrect: boolean;
  feedback: string;
  ssomaImpact: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  location: string;
  fictionalCompany: string;
  description: string;
  problem: string;
  evidence: string[];
  options: CaseStudyOption[];
  learningSummary: string;
}

export interface WasteInventoryRow {
  id: string;
  wasteName: string;
  wasteType: 'Peligroso' | 'No peligroso aprovechable' | 'No aprovechable';
  colorCategory: NTPColorCategory;
  estimatedQuantity: string;
  unit: 'kg/mes' | 'ton/mes' | 'cilindros/mes' | 'm3/mes' | 'unidades/mes';
  originProcess: string;
  disposalMethod: string;
}

export interface ScheduleItem {
  id: string;
  activity: string;
  frequency: string;
  responsible: string;
  targetQuarter: string;
}

export interface WastePlanData {
  companyName: string;
  ruc: string;
  locationCity: string;
  department: string;
  industrySector: string;
  facilityArea: string;
  ssomaOfficer: string;
  
  operationalDescription: string;
  keyProcesses: string;
  
  inventory: WasteInventoryRow[];
  
  minimizationStrategies: string[];
  minimizationCustomNote: string;
  
  storageLocationType: string;
  storageSafetyMeasures: string[];
  hazardousStorageCondition: string;
  operatorPpe: string[];
  
  contractedEors: string;
  eorsRegistrationPlaceholder: string;
  
  rolesResponsibilities: {
    role: string;
    nameOrTitle: string;
    responsibility: string;
  }[];
  
  schedule: ScheduleItem[];
  
  lastUpdated: string;
}

export interface UserProgress {
  completedLessons: string[]; // lesson ids
  lessonQuizScores: Record<string, number>; // lessonId -> score (0 to 3)
  classifiedWastes: Record<number, { selectedCategory: NTPColorCategory; isCorrect: boolean }>;
  completedCases: Record<string, { selectedOptionId: string; isCorrect: boolean }>;
  hasStartedPlan: boolean;
  planLastSavedAt: string | null;
}
