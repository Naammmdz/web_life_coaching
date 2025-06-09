#!/usr/bin/env node

/**
 * Auto Translation Script for Assessment Pages
 * This script will automatically add Vietnamese translation support to all assessment pages
 */

const fs = require('fs');
const path = require('path');

const assessmentPages = [
  'BigFivePage.tsx',
  'DiscPage.tsx', 
  'StrengthsPage.tsx',
  'ValuesPage.tsx',
  'LifeBalancePage.tsx',
  'EQPage.tsx'
];

const baseDir = 'D:/FullstackAI/web_life_coaching/src/pages/assessments/';

// Common text replacements for Vietnamese translation
const translations = {
  // Import additions
  'import { useAssessmentStore } from \'@/store/assessment\';': 
    'import { useAssessmentStore } from \'@/store/assessment\';\nimport { useLanguageStore } from \'@/store/language\';',
  
  // Function declarations
  'const navigate = useNavigate();': 
    'const navigate = useNavigate();\n  const { t } = useLanguageStore();',
  
  // Common text replacements
  'Back to Assessments': '{t(\'back\')}',
  'Question ': '{t(\'question\')} ',
  ' of ': ' {t(\'of\')} ',
  'Previous': '{t(\'previous\')}',
  'Next': '{t(\'next\')}',
  'Complete Assessment': '{t(\'viewResults\')}',
  'Finish': '{t(\'viewResults\')}',
  'View Results': '{t(\'viewResults\')}',
  '% Complete': '% {t(\'completed\')}',
  'Loading assessment...': '{t(\'loading\')}',
  
  // Assessment specific titles
  'Big Five Personality Test': '{t(\'bigFiveTitle\')}',
  'DISC Profile Assessment': '{t(\'discTitle\')}',
  'Strengths Assessment': '{t(\'strengthsTitle\')}',
  'Values Assessment': '{t(\'valuesTitle\')}',
  'Life Balance Assessment': '{t(\'lifeBalanceTitle\')}',
  'Emotional Intelligence Assessment': '{t(\'eqTitle\')}',
  'EQ Assessment': '{t(\'eqTitle\')}',
};

function addTranslationToFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Add language store import if not present
    if (content.includes('useAssessmentStore') && !content.includes('useLanguageStore')) {
      content = content.replace(
        'import { useAssessmentStore } from \'@/store/assessment\';',
        'import { useAssessmentStore } from \'@/store/assessment\';\nimport { useLanguageStore } from \'@/store/language\';'
      );
      modified = true;
    }
    
    // Add language hook if not present
    if (content.includes('const navigate = useNavigate();') && !content.includes('const { t } = useLanguageStore();')) {
      content = content.replace(
        'const navigate = useNavigate();',
        'const navigate = useNavigate();\n  const { t } = useLanguageStore();'
      );
      modified = true;
    }
    
    // Apply text translations
    Object.entries(translations).forEach(([english, vietnamese]) => {
      if (content.includes(english) && !content.includes(vietnamese)) {
        content = content.replace(new RegExp(english, 'g'), vietnamese);
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Updated ${path.basename(filePath)}`);
    } else {
      console.log(`⚪ No changes needed for ${path.basename(filePath)}`);
    }
    
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
  }
}

// Process all assessment pages
console.log('🚀 Starting auto-translation for assessment pages...\n');

assessmentPages.forEach(page => {
  const fullPath = path.join(baseDir, page);
  if (fs.existsSync(fullPath)) {
    addTranslationToFile(fullPath);
  } else {
    console.log(`⚠️  File not found: ${page}`);
  }
});

console.log('\n✅ Auto-translation completed!');
console.log('📝 Please review the changes and test the assessments in both languages.');
