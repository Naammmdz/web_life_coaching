import { DISCQuestion, DISCScores } from '@/types';

export const discQuestions: DISCQuestion[] = [
  {
    id: 1,
    question: 'When making decisions, I tend to:',
    options: [
      { text: 'Make decisions quickly and decisively', factor: 'dominance' },
      { text: 'Consider how it affects others first', factor: 'influence' },
      { text: 'Take time to think it through carefully', factor: 'steadiness' },
      { text: 'Analyze all the facts and details', factor: 'conscientiousness' },
    ],
  },
  {
    id: 2,
    question: 'In a team meeting, I usually:',
    options: [
      { text: 'Take charge and direct the discussion', factor: 'dominance' },
      { text: 'Encourage participation and keep energy high', factor: 'influence' },
      { text: 'Listen carefully and support team harmony', factor: 'steadiness' },
      { text: 'Focus on the agenda and accuracy of information', factor: 'conscientiousness' },
    ],
  },
  {
    id: 3,
    question: 'When facing a challenge, I prefer to:',
    options: [
      { text: 'Attack it head-on with determination', factor: 'dominance' },
      { text: 'Rally support from others to solve it together', factor: 'influence' },
      { text: 'Use proven methods and take a steady approach', factor: 'steadiness' },
      { text: 'Research thoroughly before taking action', factor: 'conscientiousness' },
    ],
  },
  {
    id: 4,
    question: 'My ideal work environment is:',
    options: [
      { text: 'Fast-paced with opportunities to lead', factor: 'dominance' },
      { text: 'Collaborative and socially interactive', factor: 'influence' },
      { text: 'Stable with clear expectations', factor: 'steadiness' },
      { text: 'Organized with attention to quality', factor: 'conscientiousness' },
    ],
  },
  {
    id: 5,
    question: 'When communicating with others, I:',
    options: [
      { text: 'Get straight to the point', factor: 'dominance' },
      { text: 'Use enthusiasm and personal stories', factor: 'influence' },
      { text: 'Speak thoughtfully and listen well', factor: 'steadiness' },
      { text: 'Provide detailed and accurate information', factor: 'conscientiousness' },
    ],
  },
  {
    id: 6,
    question: 'Under pressure, I tend to:',
    options: [
      { text: 'Become more assertive and demanding', factor: 'dominance' },
      { text: 'Try to lighten the mood and motivate others', factor: 'influence' },
      { text: 'Remain calm and seek stability', factor: 'steadiness' },
      { text: 'Focus more on details and avoid mistakes', factor: 'conscientiousness' },
    ],
  },
  {
    id: 7,
    question: 'I am motivated by:',
    options: [
      { text: 'Winning and achieving results', factor: 'dominance' },
      { text: 'Recognition and social approval', factor: 'influence' },
      { text: 'Security and appreciation', factor: 'steadiness' },
      { text: 'Accuracy and quality standards', factor: 'conscientiousness' },
    ],
  },
  {
    id: 8,
    question: 'When learning something new, I prefer to:',
    options: [
      { text: 'Jump in and learn by doing', factor: 'dominance' },
      { text: 'Learn with others in a group setting', factor: 'influence' },
      { text: 'Learn step-by-step at my own pace', factor: 'steadiness' },
      { text: 'Study all materials thoroughly first', factor: 'conscientiousness' },
    ],
  },
  {
    id: 9,
    question: 'My greatest strength is:',
    options: [
      { text: 'Getting results quickly', factor: 'dominance' },
      { text: 'Inspiring and motivating others', factor: 'influence' },
      { text: 'Being reliable and supportive', factor: 'steadiness' },
      { text: 'Being thorough and accurate', factor: 'conscientiousness' },
    ],
  },
  {
    id: 10,
    question: 'When working on projects, I:',
    options: [
      { text: 'Focus on the bottom line and deadlines', factor: 'dominance' },
      { text: 'Enjoy brainstorming and creative collaboration', factor: 'influence' },
      { text: 'Prefer consistent progress and stability', factor: 'steadiness' },
      { text: 'Ensure high quality and follow procedures', factor: 'conscientiousness' },
    ],
  },
  {
    id: 11,
    question: 'People would describe me as:',
    options: [
      { text: 'Direct and results-oriented', factor: 'dominance' },
      { text: 'Enthusiastic and people-focused', factor: 'influence' },
      { text: 'Patient and supportive', factor: 'steadiness' },
      { text: 'Careful and detail-oriented', factor: 'conscientiousness' },
    ],
  },
  {
    id: 12,
    question: 'When delegating tasks, I:',
    options: [
      { text: 'Give clear expectations and expect results', factor: 'dominance' },
      { text: 'Inspire and encourage the team', factor: 'influence' },
      { text: 'Provide ongoing support and guidance', factor: 'steadiness' },
      { text: 'Give detailed instructions and checkpoints', factor: 'conscientiousness' },
    ],
  },
  {
    id: 13,
    question: 'My approach to change is:',
    options: [
      { text: 'Embrace it as an opportunity', factor: 'dominance' },
      { text: 'Look for the positive possibilities', factor: 'influence' },
      { text: 'Prefer gradual, well-planned transitions', factor: 'steadiness' },
      { text: 'Analyze risks and prepare thoroughly', factor: 'conscientiousness' },
    ],
  },
  {
    id: 14,
    question: 'In conflict situations, I:',
    options: [
      { text: 'Address issues directly and firmly', factor: 'dominance' },
      { text: 'Try to find common ground and maintain relationships', factor: 'influence' },
      { text: 'Avoid confrontation and seek compromise', factor: 'steadiness' },
      { text: 'Focus on facts and logical solutions', factor: 'conscientiousness' },
    ],
  },
  {
    id: 15,
    question: 'My time management style is:',
    options: [
      { text: 'Focus on priorities and urgent tasks', factor: 'dominance' },
      { text: 'Flexible, adapting to opportunities', factor: 'influence' },
      { text: 'Steady and consistent with routines', factor: 'steadiness' },
      { text: 'Planned and organized with schedules', factor: 'conscientiousness' },
    ],
  },
  {
    id: 16,
    question: 'When making presentations, I:',
    options: [
      { text: 'Keep it brief and focus on key points', factor: 'dominance' },
      { text: 'Make it engaging and interactive', factor: 'influence' },
      { text: 'Prepare thoroughly and speak clearly', factor: 'steadiness' },
      { text: 'Include comprehensive data and details', factor: 'conscientiousness' },
    ],
  },
  {
    id: 17,
    question: 'I perform best when:',
    options: [
      { text: 'Given autonomy and challenging goals', factor: 'dominance' },
      { text: 'Working with enthusiastic team members', factor: 'influence' },
      { text: 'In a stable, supportive environment', factor: 'steadiness' },
      { text: 'Standards and expectations are clear', factor: 'conscientiousness' },
    ],
  },
  {
    id: 18,
    question: 'My decision-making process involves:',
    options: [
      { text: 'Quick analysis and decisive action', factor: 'dominance' },
      { text: 'Seeking input from others', factor: 'influence' },
      { text: 'Careful consideration of all factors', factor: 'steadiness' },
      { text: 'Thorough research and analysis', factor: 'conscientiousness' },
    ],
  },
  {
    id: 19,
    question: 'When receiving feedback, I prefer it to be:',
    options: [
      { text: 'Direct and focused on results', factor: 'dominance' },
      { text: 'Positive and encouraging', factor: 'influence' },
      { text: 'Gentle and supportive', factor: 'steadiness' },
      { text: 'Specific and fact-based', factor: 'conscientiousness' },
    ],
  },
  {
    id: 20,
    question: 'My leadership style is:',
    options: [
      { text: 'Take charge and drive results', factor: 'dominance' },
      { text: 'Inspire and motivate through vision', factor: 'influence' },
      { text: 'Lead by example and support others', factor: 'steadiness' },
      { text: 'Provide structure and maintain standards', factor: 'conscientiousness' },
    ],
  },
  {
    id: 21,
    question: 'When working with deadlines, I:',
    options: [
      { text: 'Thrive under pressure and push for completion', factor: 'dominance' },
      { text: 'Rally the team to meet the challenge', factor: 'influence' },
      { text: 'Work steadily and plan ahead', factor: 'steadiness' },
      { text: 'Create detailed timelines and track progress', factor: 'conscientiousness' },
    ],
  },
  {
    id: 22,
    question: 'In social situations, I tend to:',
    options: [
      { text: 'Take control of conversations', factor: 'dominance' },
      { text: 'Be the life of the party', factor: 'influence' },
      { text: 'Listen more than I speak', factor: 'steadiness' },
      { text: 'Engage in meaningful, focused discussions', factor: 'conscientiousness' },
    ],
  },
  {
    id: 23,
    question: 'My greatest fear in work situations is:',
    options: [
      { text: 'Losing control or being micromanaged', factor: 'dominance' },
      { text: 'Being ignored or rejected by others', factor: 'influence' },
      { text: 'Sudden changes or instability', factor: 'steadiness' },
      { text: 'Making mistakes or being criticized', factor: 'conscientiousness' },
    ],
  },
  {
    id: 24,
    question: 'When solving problems, I:',
    options: [
      { text: 'Find the fastest solution and implement it', factor: 'dominance' },
      { text: 'Brainstorm with others for creative solutions', factor: 'influence' },
      { text: 'Use tried-and-true methods', factor: 'steadiness' },
      { text: 'Analyze the problem systematically', factor: 'conscientiousness' },
    ],
  },
  {
    id: 25,
    question: 'I am energized by:',
    options: [
      { text: 'Competition and challenges', factor: 'dominance' },
      { text: 'Social interaction and variety', factor: 'influence' },
      { text: 'Peaceful, harmonious environments', factor: 'steadiness' },
      { text: 'Organized, structured activities', factor: 'conscientiousness' },
    ],
  },
  {
    id: 26,
    question: 'When giving instructions, I:',
    options: [
      { text: 'State what needs to be done clearly', factor: 'dominance' },
      { text: 'Explain the vision and inspire action', factor: 'influence' },
      { text: 'Provide support and encouragement', factor: 'steadiness' },
      { text: 'Give detailed, step-by-step guidance', factor: 'conscientiousness' },
    ],
  },
  {
    id: 27,
    question: 'My approach to risk is:',
    options: [
      { text: 'Take calculated risks for big rewards', factor: 'dominance' },
      { text: 'Take risks if others support the idea', factor: 'influence' },
      { text: 'Prefer low-risk, stable approaches', factor: 'steadiness' },
      { text: 'Minimize risks through careful planning', factor: 'conscientiousness' },
    ],
  },
  {
    id: 28,
    question: 'At the end of a successful project, I feel most satisfied when:',
    options: [
      { text: 'We achieved outstanding results', factor: 'dominance' },
      { text: 'The team worked well together', factor: 'influence' },
      { text: 'Everyone contributed and felt valued', factor: 'steadiness' },
      { text: 'Everything was done correctly and completely', factor: 'conscientiousness' },
    ],
  },
];

// DISC Style Information
export const discStyleInfo = {
  dominance: {
    name: 'Dominance (D)',
    description: 'Direct, results-oriented, firm, strong-willed, and forceful. D-styles are motivated by winning, competition, and success.',
    strengths: [
      'Gets immediate results',
      'Causes action to happen',
      'Accepts challenges',
      'Makes quick decisions',
      'Questions the status quo',
      'Takes charge',
      'Manages trouble spots',
      'Solves problems'
    ],
    workStyle: [
      'Results-oriented environment',
      'Authority and independence',
      'Variety and challenge',
      'Efficient use of time',
      'Focus on the big picture'
    ],
    communication: [
      'Be brief and direct',
      'Focus on results and goals',
      'Avoid small talk',
      'Present facts logically',
      'Give them choices'
    ],
    motivators: [
      'Winning and competition',
      'Control and authority',
      'Challenge and variety',
      'Recognition of accomplishments',
      'Freedom from routine'
    ],
    stressors: [
      'Lack of control',
      'Routine and repetition',
      'Slow pace',
      'Indecision',
      'Too much detail'
    ]
  },
  influence: {
    name: 'Influence (I)',
    description: 'Outgoing, enthusiastic, optimistic, high-spirited, and lively. I-styles are motivated by social recognition, group activities, and relationships.',
    strengths: [
      'Generates enthusiasm',
      'Entertains people',
      'Charms people into action',
      'Views people and situations optimistically',
      'Participates in teams',
      'Verbalizes articulately',
      'Promotes ideas and people',
      'Creates a motivational environment'
    ],
    workStyle: [
      'People-oriented environment',
      'Freedom from routine and details',
      'Opportunity to influence others',
      'Recognition and approval',
      'Time for interaction'
    ],
    communication: [
      'Be enthusiastic and positive',
      'Use testimonials and stories',
      'Allow time for socializing',
      'Focus on people and relationships',
      'Provide public recognition'
    ],
    motivators: [
      'Social recognition',
      'Public approval',
      'People interaction',
      'Freedom of speech',
      'Variety and fun'
    ],
    stressors: [
      'Social rejection',
      'Working alone',
      'Too much detail',
      'Negative feedback',
      'Routine tasks'
    ]
  },
  steadiness: {
    name: 'Steadiness (S)',
    description: 'Even-tempered, accommodating, patient, humble, and tactful. S-styles are motivated by cooperation, opportunities to help others, and stable environments.',
    strengths: [
      'Shows loyalty',
      'Works well with others',
      'Completes tasks',
      'Keeps emotions under control',
      'Adapts to change gradually',
      'Listens empathetically',
      'Demonstrates patience',
      'Creates stability'
    ],
    workStyle: [
      'Stable, predictable environment',
      'Time to adjust to change',
      'Appreciation and recognition',
      'Cooperation and teamwork',
      'Clear expectations'
    ],
    communication: [
      'Be patient and supportive',
      'Provide security and stability',
      'Use personal approach',
      'Give time to process',
      'Show appreciation'
    ],
    motivators: [
      'Security and stability',
      'Appreciation from others',
      'Cooperation and teamwork',
      'Helping others',
      'Consistent environment'
    ],
    stressors: [
      'Sudden changes',
      'Confrontation',
      'Pressure for quick decisions',
      'Lack of appreciation',
      'Uncertainty'
    ]
  },
  conscientiousness: {
    name: 'Conscientiousness (C)',
    description: 'Analytical, reserved, precise, private, and systematic. C-styles are motivated by opportunities to gain knowledge, showing their expertise, and quality work.',
    strengths: [
      'Adheres to standards',
      'Concentrates on key details',
      'Thinks analytically',
      'Approaches problems systematically',
      'Checks for accuracy',
      'Maintains high standards',
      'Diplomatically questions',
      'Researches all sides'
    ],
    workStyle: [
      'Quality-focused environment',
      'Clear standards and expectations',
      'Time for thorough work',
      'Limited people contact',
      'Specialized expertise'
    ],
    communication: [
      'Be prepared with facts',
      'Use logical approach',
      'Provide detailed information',
      'Respect their expertise',
      'Allow processing time'
    ],
    motivators: [
      'Quality and accuracy',
      'Expertise and competence',
      'Clear expectations',
      'Logical processes',
      'Time to think'
    ],
    stressors: [
      'Criticism of their work',
      'Pressure for quick decisions',
      'Unclear expectations',
      'Public speaking',
      'Aggressive people'
    ]
  }
};

// Function to calculate DISC scores
export function calculateDISCScores(answers: { questionId: number; selectedOption: number }[]): DISCScores {
  const scores: DISCScores = {
    dominance: 0,
    influence: 0,
    steadiness: 0,
    conscientiousness: 0,
  };

  answers.forEach(answer => {
    const question = discQuestions.find(q => q.id === answer.questionId);
    if (question && question.options[answer.selectedOption]) {
      const factor = question.options[answer.selectedOption].factor;
      scores[factor] += 1;
    }
  });

  // Convert to percentages
  const total = answers.length;
  if (total > 0) {
    scores.dominance = Math.round((scores.dominance / total) * 100);
    scores.influence = Math.round((scores.influence / total) * 100);
    scores.steadiness = Math.round((scores.steadiness / total) * 100);
    scores.conscientiousness = Math.round((scores.conscientiousness / total) * 100);
  }

  return scores;
}

// Function to determine primary DISC style
export function getPrimaryDISCStyle(scores: DISCScores): keyof DISCScores {
  const sortedStyles = Object.entries(scores).sort(([,a], [,b]) => b - a);
  return sortedStyles[0][0] as keyof DISCScores;
}

// Function to get DISC result interpretation
export function getDISCResultInterpretation(scores: DISCScores) {
  const primaryStyle = getPrimaryDISCStyle(scores);
  const styleInfo = discStyleInfo[primaryStyle];

  return {
    primaryStyle,
    scores,
    description: styleInfo.description,
    workStyle: styleInfo.workStyle,
    communication: styleInfo.communication,
    motivators: styleInfo.motivators,
    stressors: styleInfo.stressors,
    strengths: styleInfo.strengths
  };
}
