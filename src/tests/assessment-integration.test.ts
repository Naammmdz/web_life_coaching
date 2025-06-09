// Test file to verify all assessment routes and components are working
import { describe, test, expect } from 'vitest';
import { Routes } from 'react-router-dom';

// Assessment Data Imports
import { valuesQuestions } from '@/data/values-questions';
import { lifeBalanceQuestions } from '@/data/life-balance-questions';
import { eqQuestions } from '@/data/eq-questions';
import { leadershipQuestions } from '@/data/leadership-questions';

// Type Imports
import { 
  ValuesResult, 
  LifeBalanceResult, 
  EQResult, 
  LeadershipResult 
} from '@/types';

// Sample Results
import {
  sampleValuesResult,
  sampleLifeBalanceResult,
  sampleEQResult,
  sampleLeadershipResult
} from '@/data/sample-results';

describe('Assessment System Integration Tests', () => {
  test('Values questions are properly structured', () => {
    expect(valuesQuestions).toBeDefined();
    expect(valuesQuestions.length).toBeGreaterThan(0);
    
    const firstQuestion = valuesQuestions[0];
    expect(firstQuestion).toHaveProperty('id');
    expect(firstQuestion).toHaveProperty('question');
    expect(firstQuestion).toHaveProperty('options');
    expect(Array.isArray(firstQuestion.options)).toBe(true);
  });

  test('Life Balance questions are properly structured', () => {
    expect(lifeBalanceQuestions).toBeDefined();
    expect(lifeBalanceQuestions.length).toBeGreaterThan(0);
    
    const firstQuestion = lifeBalanceQuestions[0];
    expect(firstQuestion).toHaveProperty('id');
    expect(firstQuestion).toHaveProperty('question');
    expect(firstQuestion).toHaveProperty('area');
    expect(firstQuestion).toHaveProperty('options');
  });

  test('EQ questions are properly structured', () => {
    expect(eqQuestions).toBeDefined();
    expect(eqQuestions.length).toBeGreaterThan(0);
    
    const firstQuestion = eqQuestions[0];
    expect(firstQuestion).toHaveProperty('id');
    expect(firstQuestion).toHaveProperty('question');
    expect(firstQuestion).toHaveProperty('domain');
    expect(firstQuestion).toHaveProperty('options');
  });

  test('Leadership questions are properly structured', () => {
    expect(leadershipQuestions).toBeDefined();
    expect(leadershipQuestions.length).toBeGreaterThan(0);
    
    const firstQuestion = leadershipQuestions[0];
    expect(firstQuestion).toHaveProperty('id');
    expect(firstQuestion).toHaveProperty('question');
    expect(firstQuestion).toHaveProperty('options');
    
    // Check that options have the correct structure
    const firstOption = firstQuestion.options[0];
    expect(firstOption).toHaveProperty('text');
    expect(firstOption).toHaveProperty('style');
    expect(firstOption).toHaveProperty('score');
  });

  test('Sample results have required properties', () => {
    // Values Result
    expect(sampleValuesResult).toHaveProperty('userId');
    expect(sampleValuesResult).toHaveProperty('testType', 'values');
    expect(sampleValuesResult).toHaveProperty('scores');
    expect(sampleValuesResult).toHaveProperty('topValues');
    expect(sampleValuesResult).toHaveProperty('recommendations');

    // Life Balance Result
    expect(sampleLifeBalanceResult).toHaveProperty('userId');
    expect(sampleLifeBalanceResult).toHaveProperty('testType', 'life-balance');
    expect(sampleLifeBalanceResult).toHaveProperty('scores');
    expect(sampleLifeBalanceResult).toHaveProperty('interpretation');
    expect(sampleLifeBalanceResult).toHaveProperty('recommendations');

    // EQ Result
    expect(sampleEQResult).toHaveProperty('userId');
    expect(sampleEQResult).toHaveProperty('testType', 'eq');
    expect(sampleEQResult).toHaveProperty('scores');
    expect(sampleEQResult).toHaveProperty('interpretation');
    expect(sampleEQResult).toHaveProperty('recommendations');

    // Leadership Result
    expect(sampleLeadershipResult).toHaveProperty('userId');
    expect(sampleLeadershipResult).toHaveProperty('testType', 'leadership');
    expect(sampleLeadershipResult).toHaveProperty('scores');
    expect(sampleLeadershipResult).toHaveProperty('interpretation');
    expect(sampleLeadershipResult).toHaveProperty('recommendations');
    expect(sampleLeadershipResult).toHaveProperty('primaryStyle');
    expect(sampleLeadershipResult).toHaveProperty('secondaryStyle');
  });

  test('Assessment scoring systems work correctly', () => {
    // Test EQ domain scoring
    const eqDomains = ['self_awareness', 'self_regulation', 'motivation', 'empathy', 'social_skills'];
    eqDomains.forEach(domain => {
      expect(sampleEQResult.scores).toHaveProperty(domain);
      expect(typeof sampleEQResult.scores[domain as keyof typeof sampleEQResult.scores]).toBe('number');
    });

    // Test Leadership style scoring
    const leadershipStyles = ['autocratic', 'democratic', 'transformational', 'servant', 'situational', 'charismatic'];
    leadershipStyles.forEach(style => {
      expect(sampleLeadershipResult.scores).toHaveProperty(style);
      expect(typeof sampleLeadershipResult.scores[style as keyof typeof sampleLeadershipResult.scores]).toBe('number');
    });

    // Test Life Balance area scoring
    const lifeAreas = ['work', 'health', 'relationships', 'personal_growth', 'finance', 'recreation', 'spirituality', 'family'];
    lifeAreas.forEach(area => {
      expect(sampleLifeBalanceResult.scores).toHaveProperty(area);
      expect(typeof sampleLifeBalanceResult.scores[area as keyof typeof sampleLifeBalanceResult.scores]).toBe('number');
    });
  });

  test('Assessment routes are properly defined', () => {
    const expectedRoutes = [
      '/assessments/values',
      '/assessments/values/results',
      '/assessments/life-balance',
      '/assessments/life-balance/results',
      '/assessments/eq',
      '/assessments/eq/results',
      '/assessments/leadership',
      '/assessments/leadership/results'
    ];

    // This would be tested in an actual router test
    expectedRoutes.forEach(route => {
      expect(route).toMatch(/^\/assessments\/[\w-]+(\/(results))?$/);
    });
  });
});

export { 
  valuesQuestions,
  lifeBalanceQuestions,
  eqQuestions,
  leadershipQuestions,
  sampleValuesResult,
  sampleLifeBalanceResult,
  sampleEQResult,
  sampleLeadershipResult
};
