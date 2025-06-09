// Assessment Types
export interface Assessment {
  id: string;
  title: string;
  description: string;
  duration: string;
  questions: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  type: 'mbti' | 'big-five' | 'disc' | 'enneagram' | 'strengths' | 'values' | 'life-balance' | 'eq' | 'leadership';
  isCompleted: boolean;
  completedAt?: string;
}

// MBTI Types
export interface MBTIQuestion {
  id: number;
  category: 'EI' | 'SN' | 'TF' | 'JP';
  question: string;
  options: MBTIOption[];
}

export interface MBTIOption {
  text: string;
  weight: 'E' | 'I' | 'S' | 'N' | 'T' | 'F' | 'J' | 'P';
  value: number;
}

export interface MBTIScores {
  E: number;
  I: number;
  S: number;
  N: number;
  T: number;
  F: number;
  J: number;
  P: number;
}

export interface MBTIResult {
  userId: string;
  testType: 'mbti';
  completedAt: string;
  scores: MBTIScores;
  type: string;
  description: string;
  strengths: string[];
  weaknesses: string[];
  careerSuggestions: string[];
  relationshipInsights: string[];
  growthRecommendations: string[];
}

// Big Five Types
export interface BigFiveScores {
  openness: number;
  conscientiousness: number;
  extraversion: number;
  agreeableness: number;
  neuroticism: number;
}

export interface BigFiveQuestion {
  id: number;
  factor: keyof BigFiveScores;
  question: string;
  isReverse: boolean;
}

export interface BigFiveResult {
  userId: string;
  testType: 'big-five';
  completedAt: string;
  scores: BigFiveScores;
  interpretation: {
    [K in keyof BigFiveScores]: {
      score: number;
      level: 'Low' | 'Average' | 'High';
      description: string;
    };
  };
}

// DISC Types
export interface DISCScores {
  dominance: number;
  influence: number;
  steadiness: number;
  conscientiousness: number;
}

export interface DISCQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    factor: keyof DISCScores;
  }[];
}

export interface DISCResult {
  userId: string;
  testType: 'disc';
  completedAt: string;
  scores: DISCScores;
  primaryStyle: keyof DISCScores;
  description: string;
  workStyle: string[];
  communication: string[];
  motivators: string[];
  stressors: string[];
}

// Enneagram Types
export type EnneagramType = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export interface EnneagramScores {
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
  6: number;
  7: number;
  8: number;
  9: number;
}

export interface EnneagramQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    type: EnneagramType;
  }[];
}

export interface EnneagramResult {
  userId: string;
  testType: 'enneagram';
  completedAt: string;
  scores: EnneagramScores;
  primaryType: EnneagramType;
  wing?: EnneagramType;
  description: string;
  coreMotivation: string;  coreFear: string;
  strengths: string[];
  challenges: string[];
}

// Strengths Types
export interface StrengthsTheme {
  id: string;
  name: string;
  category: 'Executing' | 'Influencing' | 'Relationship Building' | 'Strategic Thinking';
  description: string;
  actionItems: string[];
  strengths: string[];
  challenges: string[];
}

export interface StrengthsScores {
  [key: string]: number; // Theme name to score mapping
}

export interface StrengthsQuestion {
  id: number;
  statement: string;
  themes: string[]; // Array of theme names this question relates to
}

export interface StrengthsResult {
  userId: string;
  testType: 'strengths';
  completedAt: string;
  scores: StrengthsScores;
  topStrengths: string[]; // Top 5 strength theme names
  strengthsDetails: StrengthsTheme[];
  developmentSuggestions: string[];
  teamContributions: string[];
}

// Values Assessment Types
export interface ValuesQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    value: string;
    score: number;
  }[];
}

export interface ValuesScores {
  family: number;
  career: number;
  health: number;
  relationships: number;
  personal_growth: number;
  financial_security: number;
  creativity: number;
  adventure: number;
  spirituality: number;
  service: number;
}

export interface ValuesResult {
  userId: string;
  testType: 'values';
  completedAt: string;
  scores: ValuesScores;
  topValues: Array<{
    value: keyof ValuesScores;
    score: number;
    interpretation: string;
  }>;
  recommendations: string[];
}

// Life Balance Assessment Types
export interface LifeBalanceQuestion {
  id: number;
  question: string;
  area: string;
  options: {
    text: string;
    score: number;
  }[];
}

export interface LifeBalanceScores {
  work: number;
  health: number;
  relationships: number;
  personal_growth: number;
  finance: number;
  recreation: number;
  spirituality: number;
  family: number;
}

export interface LifeBalanceResult {
  userId: string;
  testType: 'life-balance';
  completedAt: string;
  scores: LifeBalanceScores;
  overallBalance: number;
  strengths: string[];
  areasForImprovement: string[];
  recommendations: string[];
  interpretation: string;
}

// Emotional Intelligence (EQ) Assessment Types
export interface EQQuestion {
  id: number;
  question: string;
  domain: string;
  options: {
    text: string;
    score: number;
  }[];
}

export interface EQScores {
  self_awareness: number;
  self_regulation: number;
  motivation: number;
  empathy: number;
  social_skills: number;
}

export interface EQResult {
  userId: string;
  testType: 'eq';
  completedAt: string;
  scores: EQScores;
  overallEQ: number;
  strengths: string[];
  developmentAreas: string[];
  actionPlan: string[];
  interpretation: string;
  recommendations: string[];
}

// Leadership Style Assessment Types
export interface LeadershipQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    style: string;
    score: number;
  }[];
}

export interface LeadershipScores {
  autocratic: number;
  democratic: number;
  transformational: number;
  servant: number;
  situational: number;
  charismatic: number;
}

export interface LeadershipResult {
  userId: string;
  testType: 'leadership';
  completedAt: string;
  scores: LeadershipScores;
  primaryStyle: keyof LeadershipScores;
  secondaryStyle: keyof LeadershipScores;
  strengths: string[];
  challenges: string[];
  developmentTips: string[];
  interpretation: string;
  recommendations: string[];
}

// User Types
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'client' | 'coach';
  createdAt: string;
  completedAssessments: Assessment[];
}

// Coach Types
export interface Coach {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  specializations: string[];
  experience: number;
  rating: number;
  clients: Client[];
  upcomingSessions: Session[];
}

export interface Client {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  lastAssessment?: string;
  personalityType?: string;
  nextSession?: string;
  coachId: string;
}

export interface Session {
  id: string;
  clientId: string;
  coachId: string;
  scheduledAt: string;
  duration: number;
  type: 'initial' | 'followup' | 'assessment-review';
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
}

// Progress Types
export interface Progress {
  current: number;
  total: number;
  percentage: number;
}

// Chart Types
export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string[];
    borderColor?: string[];
    borderWidth?: number;
  }[];
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Form Types
export interface QuestionAnswer {
  questionId: number;
  answer: string | number;
  weight?: string;
  value?: number;
}

export interface AssessmentAnswer {
  questionId: number;
  selectedOption: number;
  weight?: string;
  value?: number;
}

export interface AssessmentResult {
  type: string;
  scores: Record<string, number>;
  description: string;
  strengths: string[];
  growthAreas: string[];
}

export interface AssessmentSession {
  id: string;
  type: string;
  answers: AssessmentAnswer[];
  startedAt: string;
  isCompleted: boolean;
  completedAt?: string;  result?: AssessmentResult;
}
