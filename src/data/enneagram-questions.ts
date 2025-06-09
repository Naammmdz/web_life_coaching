import { EnneagramQuestion, EnneagramScores, EnneagramType } from '@/types';

export const enneagramQuestions: EnneagramQuestion[] = [
  {
    id: 1,
    question: 'When facing a difficult situation, I usually:',
    options: [
      { text: 'Try to improve or fix what\'s wrong', type: 1 },
      { text: 'Look for ways to help others involved', type: 2 },
      { text: 'Focus on what needs to be accomplished', type: 3 },
      { text: 'Express my feelings and seek authenticity', type: 4 },
      { text: 'Gather information and analyze the situation', type: 5 },
      { text: 'Seek guidance and support from trusted sources', type: 6 },
      { text: 'Look for positive possibilities and options', type: 7 },
      { text: 'Take charge and assert my position', type: 8 },
      { text: 'Try to maintain harmony and avoid conflict', type: 9 },
    ],
  },
  {
    id: 2,
    question: 'My biggest fear is:',
    options: [
      { text: 'Being corrupt, defective, or wrong', type: 1 },
      { text: 'Being unloved or unwanted', type: 2 },
      { text: 'Being worthless without value apart from achievements', type: 3 },
      { text: 'Having no identity or personal significance', type: 4 },
      { text: 'Being useless, helpless, or incapable', type: 5 },
      { text: 'Being without support or guidance', type: 6 },
      { text: 'Being trapped in pain or deprivation', type: 7 },
      { text: 'Being controlled or vulnerable to others', type: 8 },
      { text: 'Loss of connection and fragmentation', type: 9 },
    ],
  },
  {
    id: 3,
    question: 'People would describe me as someone who:',
    options: [
      { text: 'Has high standards and pays attention to details', type: 1 },
      { text: 'Is caring, helpful, and puts others first', type: 2 },
      { text: 'Is ambitious, efficient, and image-conscious', type: 3 },
      { text: 'Is unique, emotional, and introspective', type: 4 },
      { text: 'Is intellectual, private, and independent', type: 5 },
      { text: 'Is loyal, responsible, and security-oriented', type: 6 },
      { text: 'Is enthusiastic, versatile, and spontaneous', type: 7 },
      { text: 'Is powerful, decisive, and self-confident', type: 8 },
      { text: 'Is peaceful, supportive, and harmonious', type: 9 },
    ],
  },
  {
    id: 4,
    question: 'When I\'m stressed, I tend to:',
    options: [
      { text: 'Become more critical and angry', type: 1 },
      { text: 'Become aggressive and demanding', type: 2 },
      { text: 'Become apathetic and withdrawn', type: 3 },
      { text: 'Become clingy and dependent', type: 4 },
      { text: 'Become hyperactive and scattered', type: 5 },
      { text: 'Become reactive and suspicious', type: 6 },
      { text: 'Become perfectionistic and critical', type: 7 },
      { text: 'Become secretive and fearful', type: 8 },
      { text: 'Become anxious and worried', type: 9 },
    ],
  },
  {
    id: 5,
    question: 'My core motivation is:',
    options: [
      { text: 'To be good, right, and perfect', type: 1 },
      { text: 'To feel loved and needed', type: 2 },
      { text: 'To feel valuable and worthwhile', type: 3 },
      { text: 'To find myself and my significance', type: 4 },
      { text: 'To be capable and competent', type: 5 },
      { text: 'To have security and support', type: 6 },
      { text: 'To maintain happiness and avoid pain', type: 7 },
      { text: 'To be self-reliant and in control', type: 8 },
      { text: 'To maintain inner and outer peace', type: 9 },
    ],
  },
  {
    id: 6,
    question: 'In relationships, I:',
    options: [
      { text: 'Try to help my partner become their best self', type: 1 },
      { text: 'Focus on meeting my partner\'s needs', type: 2 },
      { text: 'Want to be seen as successful and admirable', type: 3 },
      { text: 'Seek deep, authentic connection', type: 4 },
      { text: 'Need plenty of space and privacy', type: 5 },
      { text: 'Value loyalty and commitment above all', type: 6 },
      { text: 'Keep things light and avoid too much intensity', type: 7 },
      { text: 'Want to protect and provide for my partner', type: 8 },
      { text: 'Avoid conflict and maintain harmony', type: 9 },
    ],
  },
  {
    id: 7,
    question: 'When making decisions, I:',
    options: [
      { text: 'Consider what\'s morally right and proper', type: 1 },
      { text: 'Think about how it will affect others', type: 2 },
      { text: 'Focus on what will lead to success', type: 3 },
      { text: 'Go with what feels authentic to me', type: 4 },
      { text: 'Analyze all the data and implications', type: 5 },
      { text: 'Seek advice from trusted authorities', type: 6 },
      { text: 'Choose what seems most enjoyable', type: 7 },
      { text: 'Trust my gut instincts', type: 8 },
      { text: 'Avoid making difficult choices when possible', type: 9 },
    ],
  },
  {
    id: 8,
    question: 'My biggest strength is:',
    options: [
      { text: 'My integrity and attention to quality', type: 1 },
      { text: 'My ability to understand and help others', type: 2 },
      { text: 'My drive to achieve and get results', type: 3 },
      { text: 'My creativity and emotional depth', type: 4 },
      { text: 'My analytical thinking and expertise', type: 5 },
      { text: 'My loyalty and dependability', type: 6 },
      { text: 'My optimism and ability to see possibilities', type: 7 },
      { text: 'My leadership and protective nature', type: 8 },
      { text: 'My ability to bring people together', type: 9 },
    ],
  },
  {
    id: 9,
    question: 'When I was a child, I:',
    options: [
      { text: 'Felt responsible for being good and doing the right thing', type: 1 },
      { text: 'Focused on taking care of others\' needs', type: 2 },
      { text: 'Worked hard to gain approval and recognition', type: 3 },
      { text: 'Felt different or misunderstood', type: 4 },
      { text: 'Preferred to observe and understand the world', type: 5 },
      { text: 'Looked to adults for guidance and security', type: 6 },
      { text: 'Wanted to have fun and avoid difficult emotions', type: 7 },
      { text: 'Had to be strong and protect myself or others', type: 8 },
      { text: 'Wanted everyone to get along and be happy', type: 9 },
    ],
  },
  {
    id: 10,
    question: 'At work, I\'m known for:',
    options: [
      { text: 'My high standards and quality work', type: 1 },
      { text: 'Being helpful and supportive to colleagues', type: 2 },
      { text: 'Getting things done efficiently', type: 3 },
      { text: 'Bringing creativity and uniqueness to projects', type: 4 },
      { text: 'My expertise and thorough analysis', type: 5 },
      { text: 'Being reliable and following procedures', type: 6 },
      { text: 'Generating ideas and maintaining team morale', type: 7 },
      { text: 'Taking charge and making tough decisions', type: 8 },
      { text: 'Creating a peaceful, collaborative environment', type: 9 },
    ],
  },
  {
    id: 11,
    question: 'My greatest challenge is:',
    options: [
      { text: 'Being too critical of myself and others', type: 1 },
      { text: 'Neglecting my own needs', type: 2 },
      { text: 'Losing touch with my authentic self', type: 3 },
      { text: 'Getting stuck in negative emotions', type: 4 },
      { text: 'Isolating myself from others', type: 5 },
      { text: 'Worrying too much about security', type: 6 },
      { text: 'Avoiding difficult or painful experiences', type: 7 },
      { text: 'Being too controlling or aggressive', type: 8 },
      { text: 'Procrastinating and avoiding conflict', type: 9 },
    ],
  },
  {
    id: 12,
    question: 'When I\'m healthy and growing, I:',
    options: [
      { text: 'Become more accepting and wise', type: 1 },
      { text: 'Become more self-caring and emotionally honest', type: 2 },
      { text: 'Become more authentic and committed to others', type: 3 },
      { text: 'Become more objective and principled', type: 4 },
      { text: 'Become more confident and decisive', type: 5 },
      { text: 'Become more relaxed and optimistic', type: 6 },
      { text: 'Become more focused and persistent', type: 7 },
      { text: 'Become more caring and protective of others', type: 8 },
      { text: 'Become more dynamic and self-developing', type: 9 },
    ],
  },
  {
    id: 13,
    question: 'My ideal vacation would be:',
    options: [
      { text: 'A well-planned trip to a culturally enriching destination', type: 1 },
      { text: 'Traveling with loved ones and making memories together', type: 2 },
      { text: 'An adventure that I can share on social media', type: 3 },
      { text: 'A unique, off-the-beaten-path experience', type: 4 },
      { text: 'A quiet retreat where I can learn something new', type: 5 },
      { text: 'A familiar place where I feel safe and comfortable', type: 6 },
      { text: 'An exciting trip with lots of activities and options', type: 7 },
      { text: 'An adventure where I can challenge myself', type: 8 },
      { text: 'A peaceful, relaxing getaway with minimal planning', type: 9 },
    ],
  },
  {
    id: 14,
    question: 'When giving feedback to others, I:',
    options: [
      { text: 'Focus on how they can improve and do better', type: 1 },
      { text: 'Try to be supportive and encouraging', type: 2 },
      { text: 'Emphasize results and performance', type: 3 },
      { text: 'Share my personal perspective and feelings', type: 4 },
      { text: 'Provide objective analysis and data', type: 5 },
      { text: 'Am cautious and seek consensus first', type: 6 },
      { text: 'Try to keep it positive and light', type: 7 },
      { text: 'Am direct and honest, even if it\'s tough', type: 8 },
      { text: 'Avoid giving criticism when possible', type: 9 },
    ],
  },
  {
    id: 15,
    question: 'My leadership style is:',
    options: [
      { text: 'Lead by example with high standards', type: 1 },
      { text: 'Lead by serving and supporting others', type: 2 },
      { text: 'Lead by inspiring others toward goals', type: 3 },
      { text: 'Lead with vision and authenticity', type: 4 },
      { text: 'Lead with expertise and strategic thinking', type: 5 },
      { text: 'Lead by building consensus and loyalty', type: 6 },
      { text: 'Lead with enthusiasm and innovation', type: 7 },
      { text: 'Lead with strength and decisive action', type: 8 },
      { text: 'Lead by creating harmony and inclusion', type: 9 },
    ],
  },
];

// Enneagram Type Information
export const enneagramTypeInfo = {
  1: {
    name: 'The Perfectionist',
    description: 'Principled, purposeful, self-controlled, and perfectionistic. Ones are motivated by a desire to be good and right, and to improve everything.',
    coreDesire: 'To be good, right, perfect, and to improve everything',
    basicFear: 'Being corrupt, defective, or wrong',
    keyMotivations: [
      'To be right and perfect',
      'To improve everything',
      'To be beyond criticism',
      'To be consistent with their ideals'
    ],
    healthyTraits: [
      'Principled and ethical',
      'Reliable and responsible',
      'Idealistic and purposeful',
      'Self-disciplined and hard-working'
    ],
    averageTraits: [
      'Orderly and systematic',
      'Critical and perfectionistic', 
      'Judgmental of self and others',
      'Impatient with mistakes'
    ],
    unhealthyTraits: [
      'Obsessive and critical',
      'Angry and impatient',
      'Inflexible and dogmatic',
      'Punitive toward self and others'
    ],
    directions: {
      growth: 'Move toward the healthy qualities of Type Seven (spontaneous, joyful)',
      stress: 'Move toward the unhealthy qualities of Type Four (moody, irrational)'
    }
  },
  2: {
    name: 'The Helper',
    description: 'Caring, interpersonal, demonstrative, generous, and people-pleasing. Twos are motivated by a desire to feel loved and needed.',
    coreDesire: 'To feel loved and needed',
    basicFear: 'Being unloved or unwanted',
    keyMotivations: [
      'To feel loved and appreciated',
      'To express feelings for others',
      'To be needed and appreciated',
      'To get others to respond to them'
    ],
    healthyTraits: [
      'Empathetic and caring',
      'Generous and giving',
      'Warm and affectionate',
      'Encouraging and supportive'
    ],
    averageTraits: [
      'People-pleasing and possessive',
      'Intrusive and meddling',
      'Self-important and manipulative',
      'Victim-playing when needs aren\'t met'
    ],
    unhealthyTraits: [
      'Manipulative and coercive',
      'Entitled and demanding',
      'Chronic complainer',
      'Psychosomatic problems'
    ],
    directions: {
      growth: 'Move toward the healthy qualities of Type Four (self-aware, emotionally honest)',
      stress: 'Move toward the unhealthy qualities of Type Eight (aggressive, demanding)'
    }
  },
  3: {
    name: 'The Achiever',
    description: 'Success-oriented, pragmatic, adaptive, driven, and image-conscious. Threes are motivated by a desire to feel valuable and worthwhile.',
    coreDesire: 'To feel valuable and worthwhile',
    basicFear: 'Being worthless without value apart from achievements',
    keyMotivations: [
      'To be affirmed and accepted',
      'To distinguish themselves from others',
      'To have attention and admiration',
      'To be impressive and be seen as successful'
    ],
    healthyTraits: [
      'Self-assured and energetic',
      'Ambitious and competent',
      'Diplomatic and poised',
      'Inspiring and motivating'
    ],
    averageTraits: [
      'Image-conscious and competitive',
      'Workaholic tendencies',
      'Impatient and driven',
      'Status-conscious and materialistic'
    ],
    unhealthyTraits: [
      'Deceptive and opportunistic',
      'Malicious and vindictive',
      'Relentlessly aggressive',
      'Psychopathic behavior'
    ],
    directions: {
      growth: 'Move toward the healthy qualities of Type Six (committed, loyal)',
      stress: 'Move toward the unhealthy qualities of Type Nine (apathetic, listless)'
    }
  },
  4: {
    name: 'The Individualist',
    description: 'Sensitive, introspective, expressive, dramatic, self-absorbed, and temperamental. Fours are motivated by a desire to find themselves and their significance.',
    coreDesire: 'To find themselves and their significance',
    basicFear: 'Having no identity or personal significance',
    keyMotivations: [
      'To express themselves and their individuality',
      'To create and surround themselves with beauty',
      'To maintain certain moods and feelings',
      'To withdraw to protect their self-image'
    ],
    healthyTraits: [
      'Self-aware and introspective',
      'Creative and inspiring',
      'Emotionally honest and authentic',
      'Personal and individualistic'
    ],
    averageTraits: [
      'Romantic and artistic',
      'Moody and self-conscious',
      'Withdrawn and temperamental',
      'Self-pitying and envious'
    ],
    unhealthyTraits: [
      'Self-destructive and depressive',
      'Emotionally volatile',
      'Alienated and despairing',
      'Self-punishing and suicidal'
    ],
    directions: {
      growth: 'Move toward the healthy qualities of Type One (principled, action-oriented)',
      stress: 'Move toward the unhealthy qualities of Type Two (clingy, dependent)'
    }
  },
  5: {
    name: 'The Investigator',
    description: 'Intense, cerebral, perceptive, innovative, secretive, and isolated. Fives are motivated by a desire to be capable and competent.',
    coreDesire: 'To be capable and competent',
    basicFear: 'Being useless, helpless, or incapable',
    keyMotivations: [
      'To possess knowledge and understand their environment',
      'To have everything figured out as a defense',
      'To resist intrusion and emotional demands',
      'To maintain their energy and independence'
    ],
    healthyTraits: [
      'Perceptive and insightful',
      'Curious and innovative',
      'Independent and decisive',
      'Pioneering and inventive'
    ],
    averageTraits: [
      'Studious and scholarly',
      'Specialized and private',
      'Detached and withdrawn',
      'High-strung and intense'
    ],
    unhealthyTraits: [
      'Eccentric and nihilistic',
      'Extremely isolated',
      'Obsessive and compulsive',
      'Paranoid and delusional'
    ],
    directions: {
      growth: 'Move toward the healthy qualities of Type Eight (confident, decisive)',
      stress: 'Move toward the unhealthy qualities of Type Seven (scattered, impulsive)'
    }
  },
  6: {
    name: 'The Loyalist',
    description: 'Engaging, responsible, anxious, and suspicious. Sixes are motivated by a desire to have security and support.',
    coreDesire: 'To have security and support',
    basicFear: 'Being without support or guidance',
    keyMotivations: [
      'To have security and support',
      'To test the attitudes of others toward them',
      'To fight against anxiety and insecurity',
      'To maintain beliefs and traditions'
    ],
    healthyTraits: [
      'Engaging and committed',
      'Responsible and reliable',
      'Trustworthy and loyal',
      'Dedicated and stable'
    ],
    averageTraits: [
      'Dutiful and obedient',
      'Cautious and indecisive',
      'Anxious and pessimistic',
      'Defensive and reactive'
    ],
    unhealthyTraits: [
      'Panicky and dependent',
      'Paranoid and controlling',
      'Self-disparaging and masochistic',
      'Overreactive and aggressive'
    ],
    directions: {
      growth: 'Move toward the healthy qualities of Type Nine (relaxed, optimistic)',
      stress: 'Move toward the unhealthy qualities of Type Three (competitive, arrogant)'
    }
  },
  7: {
    name: 'The Enthusiast',
    description: 'Spontaneous, versatile, distractible, and scattered. Sevens are motivated by a desire to maintain happiness and avoid pain.',
    coreDesire: 'To maintain happiness and avoid pain',
    basicFear: 'Being trapped in pain or deprivation',
    keyMotivations: [
      'To maintain their freedom and happiness',
      'To avoid missing out on worthwhile experiences',
      'To keep themselves excited and occupied',
      'To avoid anxiety and emotional pain'
    ],
    healthyTraits: [
      'Enthusiastic and grateful',
      'Spontaneous and joyful',
      'Versatile and accomplished',
      'Focused and fascinated'
    ],
    averageTraits: [
      'Acquisitive and consuming',
      'Scattered and undisciplined',
      'Self-centered and demanding',
      'Restless and impatient'
    ],
    unhealthyTraits: [
      'Impulsive and infantile',
      'Manic and compulsive',
      'Erratic and depressive',
      'Panic-stricken and overwhelmed'
    ],
    directions: {
      growth: 'Move toward the healthy qualities of Type Five (focused, profound)',
      stress: 'Move toward the unhealthy qualities of Type One (perfectionistic, critical)'
    }
  },
  8: {
    name: 'The Challenger',
    description: 'Self-confident, decisive, willful, and confrontational. Eights are motivated by a desire to be self-reliant and in control.',
    coreDesire: 'To be self-reliant and in control',
    basicFear: 'Being controlled or vulnerable to others',
    keyMotivations: [
      'To be independent and resist weakness',
      'To be important and to control their environment',
      'To stay in charge of their situation',
      'To prevail against opposition'
    ],
    healthyTraits: [
      'Self-confident and strong',
      'Assertive and resourceful',
      'Straight-talking and decisive',
      'Heroic and magnanimous'
    ],
    averageTraits: [
      'Willful and confrontational',
      'Dominating and intimidating',
      'Egocentric and ruthless',
      'Dictatorial and destructive'
    ],
    unhealthyTraits: [
      'Tyrannical and violent',
      'Reckless and vengeful',
      'Megalomaniacal',
      'Sociopathic and destructive'
    ],
    directions: {
      growth: 'Move toward the healthy qualities of Type Two (caring, helpful)',
      stress: 'Move toward the unhealthy qualities of Type Five (secretive, isolated)'
    }
  },
  9: {
    name: 'The Peacemaker',
    description: 'Receptive, reassuring, agreeable, and complacent. Nines are motivated by a desire to maintain inner and outer peace.',
    coreDesire: 'To maintain inner and outer peace',
    basicFear: 'Loss of connection and fragmentation',
    keyMotivations: [
      'To create harmony in their environment',
      'To avoid conflicts and tension',
      'To preserve things as they are',
      'To resist whatever would upset or disturb them'
    ],
    healthyTraits: [
      'Receptive and steady',
      'Reassuring and agreeable',
      'Imaginative and creative',
      'Supportive and harmonious'
    ],
    averageTraits: [
      'Complacent and resigned',
      'Apathetic and passive',
      'Disengaged and stubborn',
      'Ineffectual and procrastinating'
    ],
    unhealthyTraits: [
      'Neglectful and dangerous',
      'Dissociated and depersonalized',
      'Catatonic and abandoned',
      'Multiple personality disorders'
    ],
    directions: {
      growth: 'Move toward the healthy qualities of Type Three (focused, dynamic)',
      stress: 'Move toward the unhealthy qualities of Type Six (anxious, reactive)'
    }
  }
};

// Function to calculate Enneagram scores
export function calculateEnneagramScores(answers: { questionId: number; selectedOption: number }[]): EnneagramScores {
  const scores: EnneagramScores = {
    1: 0, 2: 0, 3: 0, 4: 0, 5: 0,
    6: 0, 7: 0, 8: 0, 9: 0
  };

  answers.forEach(answer => {
    const question = enneagramQuestions.find(q => q.id === answer.questionId);
    if (question && question.options[answer.selectedOption]) {
      const type = question.options[answer.selectedOption].type;
      scores[type] += 1;
    }
  });

  return scores;
}

// Function to determine primary Enneagram type
export function getPrimaryEnneagramType(scores: EnneagramScores): EnneagramType {
  const sortedTypes = Object.entries(scores).sort(([,a], [,b]) => b - a);
  return parseInt(sortedTypes[0][0]) as EnneagramType;
}

// Function to get Enneagram result interpretation
export function getEnneagramResultInterpretation(scores: EnneagramScores) {
  const primaryType = getPrimaryEnneagramType(scores);
  const typeInfo = enneagramTypeInfo[primaryType];

  // Get top 3 types for wing analysis
  const sortedTypes = Object.entries(scores)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 3);

  return {
    primaryType,
    scores,
    typeName: typeInfo.name,
    description: typeInfo.description,
    coreDesire: typeInfo.coreDesire,
    basicFear: typeInfo.basicFear,
    keyMotivations: typeInfo.keyMotivations,
    healthyTraits: typeInfo.healthyTraits,
    averageTraits: typeInfo.averageTraits,
    unhealthyTraits: typeInfo.unhealthyTraits,
    directions: typeInfo.directions,
    topTypes: sortedTypes.map(([type, score]) => ({
      type: parseInt(type),
      name: enneagramTypeInfo[parseInt(type) as EnneagramType].name,
      score
    }))
  };
}
