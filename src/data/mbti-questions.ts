import { MBTIQuestion } from '@/types';

export const mbtiQuestions: MBTIQuestion[] = [
  // Extraversion vs Introversion (E-I)
  {
    id: 1,
    category: 'EI',
    question: 'At parties, you usually:',
    options: [
      { text: 'Interact with many people, including strangers', weight: 'E', value: 3 },
      { text: 'Interact with a few people you know well', weight: 'I', value: 3 },
      { text: 'Try to stay in one conversation', weight: 'I', value: 2 },
      { text: 'Move around and meet new people', weight: 'E', value: 2 },
    ],
  },
  {
    id: 2,
    category: 'EI',
    question: 'You prefer to work:',
    options: [
      { text: 'In a team with lots of interaction', weight: 'E', value: 3 },
      { text: 'Independently with minimal interruptions', weight: 'I', value: 3 },
      { text: 'In small groups', weight: 'I', value: 2 },
      { text: 'In dynamic, collaborative environments', weight: 'E', value: 2 },
    ],
  },
  {
    id: 3,
    category: 'EI',
    question: 'When making decisions, you:',
    options: [
      { text: 'Like to discuss options with others first', weight: 'E', value: 3 },
      { text: 'Prefer to think through options alone', weight: 'I', value: 3 },
      { text: 'Seek input but decide privately', weight: 'I', value: 2 },
      { text: 'Think out loud with others', weight: 'E', value: 2 },
    ],
  },
  {
    id: 4,
    category: 'EI',
    question: 'After a long day, you feel more energized by:',
    options: [
      { text: 'Going out with friends', weight: 'E', value: 3 },
      { text: 'Staying home and relaxing alone', weight: 'I', value: 3 },
      { text: 'Having quiet time with close friends', weight: 'I', value: 2 },
      { text: 'Engaging in social activities', weight: 'E', value: 2 },
    ],
  },
  {
    id: 5,
    category: 'EI',
    question: 'In social situations, you tend to:',
    options: [
      { text: 'Be the one to start conversations', weight: 'E', value: 3 },
      { text: 'Wait for others to approach you', weight: 'I', value: 3 },
      { text: 'Join conversations when invited', weight: 'I', value: 2 },
      { text: 'Naturally draw people to you', weight: 'E', value: 2 },
    ],
  },

  // Sensing vs Intuition (S-N)
  {
    id: 6,
    category: 'SN',
    question: 'When learning something new, you prefer:',
    options: [
      { text: 'Step-by-step instructions', weight: 'S', value: 3 },
      { text: 'Understanding the big picture first', weight: 'N', value: 3 },
      { text: 'Seeing practical examples', weight: 'S', value: 2 },
      { text: 'Exploring theoretical concepts', weight: 'N', value: 2 },
    ],
  },
  {
    id: 7,
    category: 'SN',
    question: 'You are more interested in:',
    options: [
      { text: 'What is actually happening', weight: 'S', value: 3 },
      { text: 'What could possibly happen', weight: 'N', value: 3 },
      { text: 'Current facts and details', weight: 'S', value: 2 },
      { text: 'Future possibilities and potential', weight: 'N', value: 2 },
    ],
  },
  {
    id: 8,
    category: 'SN',
    question: 'When solving problems, you:',
    options: [
      { text: 'Focus on tried and tested methods', weight: 'S', value: 3 },
      { text: 'Look for new and creative approaches', weight: 'N', value: 3 },
      { text: 'Prefer practical solutions', weight: 'S', value: 2 },
      { text: 'Enjoy brainstorming innovative ideas', weight: 'N', value: 2 },
    ],
  },
  {
    id: 9,
    category: 'SN',
    question: 'You pay more attention to:',
    options: [
      { text: 'The exact details of what someone says', weight: 'S', value: 3 },
      { text: 'The overall meaning and implications', weight: 'N', value: 3 },
      { text: 'Specific facts and information', weight: 'S', value: 2 },
      { text: 'Patterns and connections', weight: 'N', value: 2 },
    ],
  },
  {
    id: 10,
    category: 'SN',
    question: 'You are more drawn to:',
    options: [
      { text: 'Practical applications', weight: 'S', value: 3 },
      { text: 'Theoretical concepts', weight: 'N', value: 3 },
      { text: 'Real-world examples', weight: 'S', value: 2 },
      { text: 'Abstract ideas', weight: 'N', value: 2 },
    ],
  },

  // Thinking vs Feeling (T-F)
  {
    id: 11,
    category: 'TF',
    question: 'When making decisions, you prioritize:',
    options: [
      { text: 'Logical analysis and objective criteria', weight: 'T', value: 3 },
      { text: 'Personal values and impact on people', weight: 'F', value: 3 },
      { text: 'Facts and rational thinking', weight: 'T', value: 2 },
      { text: 'Harmony and individual needs', weight: 'F', value: 2 },
    ],
  },
  {
    id: 12,
    category: 'TF',
    question: 'You are more convinced by:',
    options: [
      { text: 'Logical reasoning', weight: 'T', value: 3 },
      { text: 'Emotional appeals', weight: 'F', value: 3 },
      { text: 'Data and evidence', weight: 'T', value: 2 },
      { text: 'Personal stories and experiences', weight: 'F', value: 2 },
    ],
  },
  {
    id: 13,
    category: 'TF',
    question: 'When giving feedback, you tend to:',
    options: [
      { text: 'Be direct and focus on facts', weight: 'T', value: 3 },
      { text: 'Be diplomatic and consider feelings', weight: 'F', value: 3 },
      { text: 'Emphasize objective improvements', weight: 'T', value: 2 },
      { text: 'Frame it in a supportive way', weight: 'F', value: 2 },
    ],
  },
  {
    id: 14,
    category: 'TF',
    question: 'You value:',
    options: [
      { text: 'Competence and achievement', weight: 'T', value: 3 },
      { text: 'Cooperation and harmony', weight: 'F', value: 3 },
      { text: 'Efficiency and results', weight: 'T', value: 2 },
      { text: 'Understanding and empathy', weight: 'F', value: 2 },
    ],
  },
  {
    id: 15,
    category: 'TF',
    question: 'In conflicts, you:',
    options: [
      { text: 'Focus on finding the truth', weight: 'T', value: 3 },
      { text: 'Focus on maintaining relationships', weight: 'F', value: 3 },
      { text: 'Analyze the situation objectively', weight: 'T', value: 2 },
      { text: 'Consider everyone\'s feelings', weight: 'F', value: 2 },
    ],
  },

  // Judging vs Perceiving (J-P)
  {
    id: 16,
    category: 'JP',
    question: 'You prefer to:',
    options: [
      { text: 'Have a planned schedule', weight: 'J', value: 3 },
      { text: 'Keep your options open', weight: 'P', value: 3 },
      { text: 'Know what to expect', weight: 'J', value: 2 },
      { text: 'Be spontaneous and flexible', weight: 'P', value: 2 },
    ],
  },
  {
    id: 17,
    category: 'JP',
    question: 'When working on projects, you:',
    options: [
      { text: 'Like to finish well before the deadline', weight: 'J', value: 3 },
      { text: 'Work best under pressure near the deadline', weight: 'P', value: 3 },
      { text: 'Prefer steady progress throughout', weight: 'J', value: 2 },
      { text: 'Get energized by last-minute rushes', weight: 'P', value: 2 },
    ],
  },
  {
    id: 18,
    category: 'JP',
    question: 'Your work style is more:',
    options: [
      { text: 'Organized and systematic', weight: 'J', value: 3 },
      { text: 'Flexible and adaptable', weight: 'P', value: 3 },
      { text: 'Structured with clear goals', weight: 'J', value: 2 },
      { text: 'Open to new directions', weight: 'P', value: 2 },
    ],
  },
  {
    id: 19,
    category: 'JP',
    question: 'You feel more comfortable when:',
    options: [
      { text: 'Matters are settled and decided', weight: 'J', value: 3 },
      { text: 'Things are open to change', weight: 'P', value: 3 },
      { text: 'You have a clear plan', weight: 'J', value: 2 },
      { text: 'You can adapt as you go', weight: 'P', value: 2 },
    ],
  },
  {
    id: 20,
    category: 'JP',
    question: 'In your daily life, you:',
    options: [
      { text: 'Like routine and predictability', weight: 'J', value: 3 },
      { text: 'Enjoy variety and spontaneity', weight: 'P', value: 3 },
      { text: 'Prefer planned activities', weight: 'J', value: 2 },
      { text: 'Like to go with the flow', weight: 'P', value: 2 },
    ],
  },
];
