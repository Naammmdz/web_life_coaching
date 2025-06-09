// Assessment System Verification Script
// This file validates that all assessment components are properly integrated

import React from 'react';

// Define generic types for our verification system
interface BaseQuestion {
  id: number | string;
  question: string;
  options: any[];
}

interface AssessmentComponent {
  page: React.ComponentType;
  results: React.ComponentType;
  questions: BaseQuestion[];
  questionCount: number;
  route: string;
  resultsRoute: string;
}

interface QuestionValidation {
  questionCount: number;
  issues: string[];
  isValid: boolean;
}

interface AssessmentValidation {
  valid: boolean;
  questionCount: number;
  hasPage: boolean;
  hasResults: boolean;
  hasQuestions: boolean;
  route: string;
  resultsRoute: string;
}

interface SystemVerification {
  totalAssessments: number;
  totalQuestions: number;
  assessments: Record<string, AssessmentValidation>;
  allValid: boolean;
}

interface RouteValidation {
  totalRoutes: number;
  routes: string[];
  uniqueRoutes: boolean;
}

// Import all assessment pages to verify they exist and compile
import ValuesPage from '@/pages/assessments/ValuesPage';
import ValuesResultsPage from '@/pages/assessments/ValuesResultsPage';
import LifeBalancePage from '@/pages/assessments/LifeBalancePage';
import LifeBalanceResultsPage from '@/pages/assessments/LifeBalanceResultsPage';
import EQPage from '@/pages/assessments/EQPage';
import EQResultsPage from '@/pages/assessments/EQResultsPage';
import LeadershipPage from '@/pages/assessments/LeadershipPage';
import LeadershipResultsPage from '@/pages/assessments/LeadershipResultsPage';

// Import all assessment data to verify structure
import { valuesQuestions } from '@/data/values-questions';
import { lifeBalanceQuestions } from '@/data/life-balance-questions';
import { eqQuestions } from '@/data/eq-questions';
import { leadershipQuestions } from '@/data/leadership-questions';

// Assessment component registry
export const assessmentComponents: Record<string, AssessmentComponent> = {
  values: {
    page: ValuesPage,
    results: ValuesResultsPage,
    questions: valuesQuestions,
    questionCount: valuesQuestions.length,
    route: '/assessments/values',
    resultsRoute: '/assessments/values/results'
  },
  lifeBalance: {
    page: LifeBalancePage,
    results: LifeBalanceResultsPage,
    questions: lifeBalanceQuestions,
    questionCount: lifeBalanceQuestions.length,
    route: '/assessments/life-balance',
    resultsRoute: '/assessments/life-balance/results'
  },
  eq: {
    page: EQPage,
    results: EQResultsPage,
    questions: eqQuestions,
    questionCount: eqQuestions.length,
    route: '/assessments/eq',
    resultsRoute: '/assessments/eq/results'
  },
  leadership: {
    page: LeadershipPage,
    results: LeadershipResultsPage,
    questions: leadershipQuestions,
    questionCount: leadershipQuestions.length,
    route: '/assessments/leadership',
    resultsRoute: '/assessments/leadership/results'
  }
};

// Verification functions
export const verifyAssessmentSystem = (): SystemVerification => {
  const results: SystemVerification = {
    totalAssessments: Object.keys(assessmentComponents).length,
    totalQuestions: Object.values(assessmentComponents).reduce((sum, assessment) => sum + assessment.questionCount, 0),
    assessments: {},
    allValid: true
  };

  Object.entries(assessmentComponents).forEach(([key, assessment]) => {
    const isValid = 
      !!assessment.page && 
      !!assessment.results && 
      !!assessment.questions && 
      assessment.questions.length > 0 &&
      !!assessment.route &&
      !!assessment.resultsRoute;

    results.assessments[key] = {
      valid: isValid,
      questionCount: assessment.questionCount,
      hasPage: !!assessment.page,
      hasResults: !!assessment.results,
      hasQuestions: assessment.questions.length > 0,
      route: assessment.route,
      resultsRoute: assessment.resultsRoute
    };

    if (!isValid) {
      results.allValid = false;
    }
  });

  return results;
};

// Question validation
export const validateQuestions = (): Record<string, QuestionValidation> => {
  const validation: Record<string, QuestionValidation> = {};

  Object.entries(assessmentComponents).forEach(([key, assessment]) => {
    const questions = assessment.questions;
    const issues: string[] = [];

    // Check each question has required properties
    questions.forEach((question: any, index: number) => {
      if (!question.id) issues.push(`Question ${index + 1}: Missing id`);
      if (!question.question) issues.push(`Question ${index + 1}: Missing question text`);
      if (!question.options || question.options.length === 0) {
        issues.push(`Question ${index + 1}: Missing or empty options`);
      }

      // Check options structure
      if (question.options) {
        question.options.forEach((option: any, optionIndex: number) => {
          if (!option.text) issues.push(`Question ${index + 1}, Option ${optionIndex + 1}: Missing text`);
          // Different assessments have different scoring mechanisms
          const hasScore = option.score !== undefined || option.value !== undefined;
          if (!hasScore) {
            issues.push(`Question ${index + 1}, Option ${optionIndex + 1}: Missing score or value`);
          }
        });
      }
    });

    validation[key] = {
      questionCount: questions.length,
      issues: issues,
      isValid: issues.length === 0
    };
  });

  return validation;
};

// Route validation
export const validateRoutes = (): RouteValidation => {
  const routes: string[] = [];
  
  Object.values(assessmentComponents).forEach(assessment => {
    routes.push(assessment.route);
    routes.push(assessment.resultsRoute);
  });

  return {
    totalRoutes: routes.length,
    routes: routes,
    uniqueRoutes: [...new Set(routes)].length === routes.length
  };
};

// Main verification function
export const runSystemVerification = () => {
  console.log('🔍 Running Assessment System Verification...\n');

  const systemVerification = verifyAssessmentSystem();
  const questionValidation = validateQuestions();
  const routeValidation = validateRoutes();

  console.log('📊 System Overview:');
  console.log(`  Total Assessments: ${systemVerification.totalAssessments}`);
  console.log(`  Total Questions: ${systemVerification.totalQuestions}`);
  console.log(`  Total Routes: ${routeValidation.totalRoutes}`);
  console.log(`  System Valid: ${systemVerification.allValid ? '✅' : '❌'}\n`);

  console.log('📋 Assessment Details:');
  Object.entries(systemVerification.assessments).forEach(([key, assessment]) => {
    console.log(`  ${key}:`);
    console.log(`    Questions: ${assessment.questionCount}`);
    console.log(`    Valid: ${assessment.valid ? '✅' : '❌'}`);
    console.log(`    Route: ${assessment.route}`);
    console.log(`    Results Route: ${assessment.resultsRoute}`);
  });
  console.log('\n🔍 Question Validation:');
  Object.entries(questionValidation).forEach(([key, validation]) => {
    console.log(`  ${key}: ${validation.isValid ? '✅' : '❌'} (${validation.questionCount} questions)`);
    if (validation.issues.length > 0) {
      validation.issues.forEach((issue: string) => console.log(`    ⚠️ ${issue}`));
    }
  });

  console.log('\n🛣️ Route Validation:');
  console.log(`  Unique Routes: ${routeValidation.uniqueRoutes ? '✅' : '❌'}`);
  console.log(`  Routes: ${routeValidation.routes.join(', ')}`);

  return {
    system: systemVerification,
    questions: questionValidation,
    routes: routeValidation,
    overall: systemVerification.allValid && 
             Object.values(questionValidation).every((v: QuestionValidation) => v.isValid) && 
             routeValidation.uniqueRoutes
  };
};

// Export for external use
export default {
  assessmentComponents,
  verifyAssessmentSystem,
  validateQuestions,
  validateRoutes,
  runSystemVerification
};
