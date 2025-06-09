import { MBTIScores, AssessmentAnswer, AssessmentResult } from '@/types';
import { mbtiTypes } from '@/data/assessments';

export function calculateMBTIScores(answers: AssessmentAnswer[]): MBTIScores {
  const scores: MBTIScores = {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0,
  };

  answers.forEach(answer => {
    if (answer.weight && answer.value) {
      const weight = answer.weight as keyof MBTIScores;
      scores[weight] += answer.value;
    }
  });

  // Normalize scores to percentages
  const totalEI = scores.E + scores.I;
  const totalSN = scores.S + scores.N;
  const totalTF = scores.T + scores.F;
  const totalJP = scores.J + scores.P;

  return {
    E: totalEI > 0 ? Math.round((scores.E / totalEI) * 100) : 50,
    I: totalEI > 0 ? Math.round((scores.I / totalEI) * 100) : 50,
    S: totalSN > 0 ? Math.round((scores.S / totalSN) * 100) : 50,
    N: totalSN > 0 ? Math.round((scores.N / totalSN) * 100) : 50,
    T: totalTF > 0 ? Math.round((scores.T / totalTF) * 100) : 50,
    F: totalTF > 0 ? Math.round((scores.F / totalTF) * 100) : 50,
    J: totalJP > 0 ? Math.round((scores.J / totalJP) * 100) : 50,
    P: totalJP > 0 ? Math.round((scores.P / totalJP) * 100) : 50,
  };
}

export function determineMBTIType(scores: MBTIScores): string {
  const type = [
    scores.E > scores.I ? 'E' : 'I',
    scores.S > scores.N ? 'S' : 'N',
    scores.T > scores.F ? 'T' : 'F',
    scores.J > scores.P ? 'J' : 'P',
  ].join('');

  return type;
}

export function getMBTITypeInfo(type: string) {
  return mbtiTypes.find(t => t.type === type) || {
    type: 'Unknown',
    name: 'Unknown Type',
    description: 'Type information not available',
    strengths: [],
    weaknesses: [],
    careers: [],
  };
}

export function calculateMBTIResult(answers: AssessmentAnswer[]): AssessmentResult {
  const scores = calculateMBTIScores(answers);
  const personalityType = determineMBTIType(scores);
  const typeInfo = getMBTITypeInfo(personalityType);

  return {
    type: personalityType,
    scores: scores as unknown as Record<string, number>,
    description: typeInfo.description,
    strengths: typeInfo.strengths,
    growthAreas: typeInfo.weaknesses,
  };
}

export function calculateProgress(current: number, total: number): number {
  return Math.round((current / total) * 100);
}

export function formatDuration(minutes: number): string {
  if (minutes < 60) {
    return `${minutes} minutes`;
  }
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return remainingMinutes > 0 ? `${hours}h ${remainingMinutes}m` : `${hours}h`;
}

export function getDifficultyColor(difficulty: 'Easy' | 'Medium' | 'Hard'): string {
  switch (difficulty) {
    case 'Easy':
      return 'text-green-600 bg-green-100';
    case 'Medium':
      return 'text-yellow-600 bg-yellow-100';
    case 'Hard':
      return 'text-red-600 bg-red-100';
    default:
      return 'text-gray-600 bg-gray-100';
  }
}

export function generateUserId(): string {
  return `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

export function saveToLocalStorage(key: string, data: any): void {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Failed to save to localStorage:', error);
  }
}

export function loadFromLocalStorage<T>(key: string): T | null {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Failed to load from localStorage:', error);
    return null;
  }
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export function generateReportId(): string {
  return `report_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}
