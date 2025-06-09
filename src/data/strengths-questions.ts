import { StrengthsQuestion, StrengthsScores, StrengthsTheme } from '@/types';

// The 34 CliftonStrengths themes organized by domain
export const strengthsThemes: StrengthsTheme[] = [
  // EXECUTING DOMAIN
  {
    id: 'achiever',
    name: 'Achiever',
    category: 'Executing',
    description: 'People exceptionally talented in the Achiever theme work hard and possess a great deal of stamina. They take immense satisfaction in being busy and productive.',
    actionItems: [
      'Set specific, measurable goals with clear deadlines',
      'Track your progress daily to maintain momentum',
      'Create accountability systems with others',
      'Celebrate small wins along the way to big achievements'
    ],
    strengths: [
      'Natural drive and stamina',
      'High productivity and work ethic',
      'Satisfaction from completing tasks',
      'Ability to motivate others through example'
    ],
    challenges: [
      'May struggle with rest and balance',
      'Can become impatient with slower-paced people',
      'Tendency to take on too much work'
    ]
  },
  {
    id: 'arranger',
    name: 'Arranger',
    category: 'Executing',
    description: 'People exceptionally talented in the Arranger theme can organize, but they also have a flexibility that complements this ability. They like to determine how all of the pieces and resources can be arranged for maximum productivity.',
    actionItems: [
      'Take charge of organizing team projects and resources',
      'Look for ways to improve efficiency in current systems',
      'Practice flexibility when plans need to change',
      'Help others see how their roles fit into the bigger picture'
    ],
    strengths: [
      'Natural organizational abilities',
      'Flexibility in resource management',
      'Sees how pieces fit together',
      'Maximizes team productivity'
    ],
    challenges: [
      'May rearrange things too frequently',
      'Can be overwhelming to others with constant changes',
      'Might struggle with rigid structures'
    ]
  },
  {
    id: 'belief',
    name: 'Belief',
    category: 'Executing',
    description: 'People exceptionally talented in the Belief theme have certain core values that are unchanging. Out of these values emerges a defined purpose for their lives.',
    actionItems: [
      'Clearly articulate your core values to yourself and others',
      'Seek roles and projects that align with your values',
      'Use your conviction to inspire and motivate others',
      'Stand firm on important principles while remaining open to different methods'
    ],
    strengths: [
      'Strong moral compass and values',
      'Unwavering commitment to purpose',
      'Inspiring to others through conviction',
      'Consistent and reliable character'
    ],
    challenges: [
      'May be inflexible when values are challenged',
      'Can be judgmental of others with different values',
      'Might struggle in morally ambiguous situations'
    ]
  },
  {
    id: 'consistency',
    name: 'Consistency',
    category: 'Executing',
    description: 'People exceptionally talented in the Consistency theme are keenly aware of the need to treat people the same. They try to treat everyone with equality by setting up clear rules and adhering to them.',
    actionItems: [
      'Establish clear policies and procedures for your team',
      'Ensure equal treatment and opportunities for all',
      'Document processes to maintain consistency',
      'Advocate for fair practices in your organization'
    ],
    strengths: [
      'Strong sense of fairness and equality',
      'Creates stable, predictable environments',
      'Builds trust through consistent behavior',
      'Natural mediator in conflicts'
    ],
    challenges: [
      'May struggle with necessary exceptions to rules',
      'Can be inflexible in unique situations',
      'Might miss opportunities for innovation'
    ]
  },
  {
    id: 'deliberative',
    name: 'Deliberative',
    category: 'Executing',
    description: 'People exceptionally talented in the Deliberative theme are best described by the serious care they take in making decisions or choices. They anticipate obstacles.',
    actionItems: [
      'Take time to thoroughly analyze decisions before acting',
      'Identify potential risks and develop contingency plans',
      'Share your careful analysis with more impulsive team members',
      'Trust your instincts when something feels wrong'
    ],
    strengths: [
      'Excellent decision-making abilities',
      'Natural risk assessment skills',
      'Prevents costly mistakes through careful planning',
      'Brings stability and caution to teams'
    ],
    challenges: [
      'May be seen as slow or overly cautious',
      'Can miss opportunities due to over-analysis',
      'Might struggle with time-sensitive decisions'
    ]
  },
  {
    id: 'discipline',
    name: 'Discipline',
    category: 'Executing',
    description: 'People exceptionally talented in the Discipline theme enjoy routine and structure. Their world is best described by the order they create.',
    actionItems: [
      'Create structured routines and stick to them',
      'Organize your workspace and schedule for maximum efficiency',
      'Help others develop better organizational systems',
      'Use your planning skills to break large projects into manageable steps'
    ],
    strengths: [
      'Excellent organizational and planning skills',
      'Creates order from chaos',
      'Highly productive through structure',
      'Reliable and dependable'
    ],
    challenges: [
      'May struggle with unexpected changes',
      'Can be rigid in approach to work',
      'Might resist spontaneous activities'
    ]
  },
  {
    id: 'focus',
    name: 'Focus',
    category: 'Executing',
    description: 'People exceptionally talented in the Focus theme can take a direction, follow through, and make the corrections necessary to stay on track. They prioritize, then act.',
    actionItems: [
      'Set clear priorities and eliminate distractions',
      'Create specific, actionable goals with deadlines',
      'Say no to activities that don\'t align with your objectives',
      'Help your team stay focused on key priorities'
    ],
    strengths: [
      'Exceptional ability to prioritize',
      'Maintains direction despite distractions',
      'Gets things done efficiently',
      'Helps others stay on track'
    ],
    challenges: [
      'May seem tunnel-visioned to others',
      'Can miss important side opportunities',
      'Might struggle with multitasking'
    ]
  },
  {
    id: 'responsibility',
    name: 'Responsibility',
    category: 'Executing',
    description: 'People exceptionally talented in the Responsibility theme take psychological ownership of what they say they will do. They are committed to stable values such as honesty and loyalty.',
    actionItems: [
      'Only make commitments you can keep',
      'Follow through on all promises, large and small',
      'Take ownership of mistakes and learn from them',
      'Volunteer for important responsibilities that match your values'
    ],
    strengths: [
      'Highly reliable and trustworthy',
      'Takes ownership of commitments',
      'Strong moral and ethical foundation',
      'Others depend on your follow-through'
    ],
    challenges: [
      'May take on too much responsibility',
      'Can be overly hard on yourself when things go wrong',
      'Might struggle to delegate effectively'
    ]
  },
  {
    id: 'restorative',
    name: 'Restorative',
    category: 'Executing',
    description: 'People exceptionally talented in the Restorative theme are adept at dealing with problems. They are good at figuring out what is wrong and resolving it.',
    actionItems: [
      'Seek out problems that others find overwhelming',
      'Develop systematic approaches to problem-solving',
      'Share your diagnostic skills with your team',
      'Focus on continuous improvement in all areas'
    ],
    strengths: [
      'Natural problem-solving abilities',
      'Thrives on fixing what\'s broken',
      'Analytical and systematic approach',
      'Brings healing and restoration to situations'
    ],
    challenges: [
      'May focus too much on problems vs. possibilities',
      'Can be impatient with prevention vs. fixing',
      'Might overlook what\'s working well'
    ]
  },

  // INFLUENCING DOMAIN
  {
    id: 'activator',
    name: 'Activator',
    category: 'Influencing',
    description: 'People exceptionally talented in the Activator theme can make things happen by turning thoughts into action. They want to do things now, rather than simply talk about them.',
    actionItems: [
      'Take initiative on projects that need to get started',
      'Push for action when teams get stuck in analysis',
      'Set aggressive but achievable timelines',
      'Partner with people who can help refine your ideas'
    ],
    strengths: [
      'Natural ability to initiate action',
      'Catalyzes others into motion',
      'Impatient with inaction',
      'Turns ideas into reality quickly'
    ],
    challenges: [
      'May act before fully thinking things through',
      'Can be impatient with planning and analysis',
      'Might push others too hard for quick action'
    ]
  },
  {
    id: 'command',
    name: 'Command',
    category: 'Influencing',
    description: 'People exceptionally talented in the Command theme have presence. They can take control of a situation and make decisions.',
    actionItems: [
      'Take charge in crisis situations',
      'Make tough decisions that others avoid',
      'Speak up for what you believe is right',
      'Use your presence to calm and direct others in chaos'
    ],
    strengths: [
      'Natural leadership presence',
      'Comfortable making tough decisions',
      'Takes control in difficult situations',
      'Direct and honest communication'
    ],
    challenges: [
      'May come across as bossy or controlling',
      'Can intimidate others unintentionally',
      'Might not always consider others\' feelings'
    ]
  },
  {
    id: 'communication',
    name: 'Communication',
    category: 'Influencing',
    description: 'People exceptionally talented in the Communication theme generally find it easy to put their thoughts into words. They are good conversationalists and presenters.',
    actionItems: [
      'Volunteer to present ideas and findings to groups',
      'Help translate complex concepts into simple language',
      'Use storytelling to make your points memorable',
      'Practice active listening to improve your conversations'
    ],
    strengths: [
      'Excellent verbal and written communication',
      'Natural storytelling abilities',
      'Engaging and persuasive speaker',
      'Makes complex ideas understandable'
    ],
    challenges: [
      'May talk too much in meetings',
      'Can lose audience with too much detail',
      'Might struggle with brief, concise communication'
    ]
  },
  {
    id: 'competition',
    name: 'Competition',
    category: 'Influencing',
    description: 'People exceptionally talented in the Competition theme measure their progress against the performance of others. They strive to win first place and revel in contests.',
    actionItems: [
      'Set measurable goals and track your performance against others',
      'Seek out competitive environments and challenges',
      'Use competition to motivate yourself and your team',
      'Celebrate victories while learning from losses'
    ],
    strengths: [
      'Natural drive to excel and win',
      'Motivated by comparison with others',
      'Brings energy and intensity to teams',
      'Pushes performance to higher levels'
    ],
    challenges: [
      'May see everything as a competition',
      'Can be poor sport when losing',
      'Might create unnecessary rivalry'
    ]
  },
  {
    id: 'maximizer',
    name: 'Maximizer',
    category: 'Influencing',
    description: 'People exceptionally talented in the Maximizer theme focus on strengths as a way to stimulate personal and group excellence. They seek to transform something strong into something superb.',
    actionItems: [
      'Identify and develop your top strengths',
      'Help others discover and leverage their talents',
      'Focus on excellence rather than fixing weaknesses',
      'Seek roles that allow you to use your best abilities'
    ],
    strengths: [
      'Natural talent for developing excellence',
      'Sees potential in yourself and others',
      'Focuses on strengths rather than weaknesses',
      'Helps others achieve their best performance'
    ],
    challenges: [
      'May neglect important weaknesses',
      'Can be impatient with average performance',
      'Might not appreciate incremental improvements'
    ]
  },
  {
    id: 'self-assurance',
    name: 'Self-Assurance',
    category: 'Influencing',
    description: 'People exceptionally talented in the Self-Assurance theme feel confident in their ability to take risks and manage their own lives. They have an inner compass that gives them certainty in their decisions.',
    actionItems: [
      'Trust your instincts when making important decisions',
      'Take on challenging assignments that others avoid',
      'Share your confidence to help calm anxious team members',
      'Take calculated risks that others might fear'
    ],
    strengths: [
      'Strong inner confidence and conviction',
      'Comfortable taking risks',
      'Independent and self-reliant',
      'Inspires confidence in others'
    ],
    challenges: [
      'May appear arrogant or overconfident',
      'Can be resistant to feedback',
      'Might not seek help when needed'
    ]
  },
  {
    id: 'significance',
    name: 'Significance',
    category: 'Influencing',
    description: 'People exceptionally talented in the Significance theme want to make a big impact. They are independent and prioritize projects based on how much influence they will have on their organization or people around them.',
    actionItems: [
      'Seek high-visibility projects and roles',
      'Focus on work that creates lasting impact',
      'Build a reputation for excellence in your field',
      'Find ways to make your contributions known and recognized'
    ],
    strengths: [
      'Driven to make a meaningful impact',
      'Natural desire for recognition and influence',
      'Independent and ambitious',
      'Motivates others through example'
    ],
    challenges: [
      'May seek attention inappropriately',
      'Can be frustrated by lack of recognition',
      'Might neglect small but important tasks'
    ]
  },
  {
    id: 'woo',
    name: 'Woo',
    category: 'Influencing',
    description: 'People exceptionally talented in the Woo theme love the challenge of meeting new people and winning them over. They derive satisfaction from breaking the ice and making a connection with someone.',
    actionItems: [
      'Take initiative in meeting new people and building networks',
      'Use your natural charm to build relationships for your team',
      'Volunteer for roles that involve meeting customers or stakeholders',
      'Help shy team members connect with others'
    ],
    strengths: [
      'Natural ability to connect with strangers',
      'Excellent networking and relationship building',
      'Creates positive first impressions',
      'Helps others feel comfortable and welcome'
    ],
    challenges: [
      'May struggle to deepen relationships beyond initial connection',
      'Can be seen as superficial',
      'Might neglect existing relationships for new ones'
    ]
  },

  // RELATIONSHIP BUILDING DOMAIN
  {
    id: 'adaptability',
    name: 'Adaptability',
    category: 'Relationship Building',
    description: 'People exceptionally talented in the Adaptability theme prefer to go with the flow. They tend to be "now" people who take things as they come and discover the future one day at a time.',
    actionItems: [
      'Embrace change and help others adjust to new circumstances',
      'Stay flexible with plans and timelines',
      'Use your calm presence to help others navigate uncertainty',
      'Focus on what you can control in the present moment'
    ],
    strengths: [
      'Flexible and responsive to change',
      'Calm under pressure',
      'Lives in the present moment',
      'Helps others adjust to new situations'
    ],
    challenges: [
      'May lack long-term planning skills',
      'Can appear directionless to others',
      'Might struggle with rigid deadlines'
    ]
  },
  {
    id: 'connectedness',
    name: 'Connectedness',
    category: 'Relationship Building',
    description: 'People exceptionally talented in the Connectedness theme have faith in the links among all things. They believe there are few coincidences and that almost every event has meaning.',
    actionItems: [
      'Help your team see how their work contributes to the bigger picture',
      'Look for patterns and connections others might miss',
      'Build bridges between different groups or departments',
      'Use your perspective to bring calm during chaotic times'
    ],
    strengths: [
      'Sees connections and patterns others miss',
      'Brings perspective and meaning to situations',
      'Natural bridge builder between people',
      'Considers the impact of decisions on everyone'
    ],
    challenges: [
      'May seem too philosophical for practical situations',
      'Can be overwhelmed by others\' problems',
      'Might struggle with direct confrontation'
    ]
  },
  {
    id: 'developer',
    name: 'Developer',
    category: 'Relationship Building',
    description: 'People exceptionally talented in the Developer theme recognize and cultivate the potential in others. They spot the signs of each small improvement and derive satisfaction from evidence of progress.',
    actionItems: [
      'Invest time in mentoring and coaching others',
      'Look for opportunities to help team members grow',
      'Celebrate small improvements and progress',
      'Create development plans for people you manage'
    ],
    strengths: [
      'Natural ability to see potential in others',
      'Patient and encouraging mentor',
      'Celebrates growth and progress',
      'Creates environments where people thrive'
    ],
    challenges: [
      'May invest too much time in poor performers',
      'Can be frustrated when others don\'t want to grow',
      'Might neglect your own development'
    ]
  },
  {
    id: 'empathy',
    name: 'Empathy',
    category: 'Relationship Building',
    description: 'People exceptionally talented in the Empathy theme can sense other people\'s emotions by imagining themselves in others\' lives or situations.',
    actionItems: [
      'Use your emotional awareness to help resolve conflicts',
      'Anticipate how others will react to changes or decisions',
      'Create safe spaces for people to express their feelings',
      'Help leaders understand the emotional impact of their decisions'
    ],
    strengths: [
      'Deeply understands others\' emotions',
      'Natural counselor and supporter',
      'Creates emotional safety for others',
      'Excellent at reading people and situations'
    ],
    challenges: [
      'May become overwhelmed by others\' emotions',
      'Can struggle to remain objective',
      'Might avoid necessary difficult conversations'
    ]
  },
  {
    id: 'harmony',
    name: 'Harmony',
    category: 'Relationship Building',
    description: 'People exceptionally talented in the Harmony theme look for consensus. They don\'t enjoy conflict; rather, they seek areas of agreement.',
    actionItems: [
      'Help mediate conflicts by finding common ground',
      'Focus on shared goals and values in team discussions',
      'Create peaceful environments where people can collaborate',
      'Look for win-win solutions in difficult situations'
    ],
    strengths: [
      'Natural peacemaker and mediator',
      'Finds common ground between opposing views',
      'Creates collaborative environments',
      'Reduces conflict and tension'
    ],
    challenges: [
      'May avoid necessary conflicts',
      'Can be indecisive when forced to choose sides',
      'Might suppress own opinions to keep peace'
    ]
  },
  {
    id: 'includer',
    name: 'Includer',
    category: 'Relationship Building',
    description: 'People exceptionally talented in the Includer theme accept others. They show awareness of those who feel left out and make an effort to include them.',
    actionItems: [
      'Make sure everyone is included in team activities and decisions',
      'Reach out to new team members and help them feel welcome',
      'Advocate for diverse perspectives in group discussions',
      'Notice when someone is being left out and take action'
    ],
    strengths: [
      'Natural inclusivity and acceptance',
      'Notices and helps outsiders',
      'Creates welcoming environments',
      'Values diversity and different perspectives'
    ],
    challenges: [
      'May include people inappropriately',
      'Can be seen as naive about people\'s motives',
      'Might struggle with necessary exclusions'
    ]
  },
  {
    id: 'individualization',
    name: 'Individualization',
    category: 'Relationship Building',
    description: 'People exceptionally talented in the Individualization theme are intrigued by the unique qualities of each person. They have a gift for figuring out how different people can work together productively.',
    actionItems: [
      'Study each team member\'s unique strengths and work style',
      'Customize your approach based on individual preferences',
      'Help match people to roles that fit their talents',
      'Create diverse teams that complement each other'
    ],
    strengths: [
      'Sees and appreciates individual uniqueness',
      'Excellent at matching people to roles',
      'Customizes approach for each person',
      'Builds effective, diverse teams'
    ],
    challenges: [
      'May be seen as playing favorites',
      'Can struggle with standardized approaches',
      'Might overcomplicate simple situations'
    ]
  },
  {
    id: 'positivity',
    name: 'Positivity',
    category: 'Relationship Building',
    description: 'People exceptionally talented in the Positivity theme have contagious enthusiasm. They are upbeat and can get others excited about what they are going to do.',
    actionItems: [
      'Share your enthusiasm to energize your team',
      'Look for and celebrate positive developments',
      'Help others see opportunities in challenges',
      'Create fun and engaging work environments'
    ],
    strengths: [
      'Contagious enthusiasm and energy',
      'Naturally optimistic outlook',
      'Motivates and inspires others',
      'Creates positive work environments'
    ],
    challenges: [
      'May seem unrealistic or naive',
      'Can struggle with serious or negative situations',
      'Might not acknowledge real problems'
    ]
  },
  {
    id: 'relator',
    name: 'Relator',
    category: 'Relationship Building',
    description: 'People exceptionally talented in the Relator theme enjoy close relationships with others. They find deep satisfaction in working hard with friends to achieve a goal.',
    actionItems: [
      'Invest deeply in a few key relationships',
      'Work closely with trusted colleagues on important projects',
      'Share personal stories to deepen connections',
      'Create opportunities for meaningful one-on-one interactions'
    ],
    strengths: [
      'Builds deep, authentic relationships',
      'Highly loyal and trustworthy friend',
      'Creates strong team bonds',
      'Brings out the best in close colleagues'
    ],
    challenges: [
      'May struggle with large group interactions',
      'Can be slow to trust new people',
      'Might favor close friends over others'
    ]
  },

  // STRATEGIC THINKING DOMAIN
  {
    id: 'analytical',
    name: 'Analytical',
    category: 'Strategic Thinking',
    description: 'People exceptionally talented in the Analytical theme search for reasons and causes. They have the ability to think about all of the factors that might affect a situation.',
    actionItems: [
      'Ask probing questions to understand root causes',
      'Use data and logic to support your recommendations',
      'Help your team think through complex problems systematically',
      'Challenge assumptions and look for evidence'
    ],
    strengths: [
      'Excellent logical reasoning abilities',
      'Natural skepticism that prevents errors',
      'Thorough analysis of situations',
      'Objective and fact-based decision making'
    ],
    challenges: [
      'May over-analyze simple decisions',
      'Can be seen as too critical or negative',
      'Might struggle with ambiguous situations'
    ]
  },
  {
    id: 'context',
    name: 'Context',
    category: 'Strategic Thinking',
    description: 'People exceptionally talented in the Context theme enjoy thinking about the past. They understand the present by researching its history.',
    actionItems: [
      'Study the history behind current situations and decisions',
      'Help others learn from past experiences and mistakes',
      'Provide historical perspective on current challenges',
      'Document lessons learned for future reference'
    ],
    strengths: [
      'Deep understanding of historical patterns',
      'Learns from past experiences',
      'Provides valuable perspective',
      'Helps others avoid repeating mistakes'
    ],
    challenges: [
      'May be overly influenced by past experiences',
      'Can be resistant to change',
      'Might miss new opportunities due to historical focus'
    ]
  },
  {
    id: 'futuristic',
    name: 'Futuristic',
    category: 'Strategic Thinking',
    description: 'People exceptionally talented in the Futuristic theme are inspired by the future and what could be. They energize others with their visions of the future.',
    actionItems: [
      'Paint compelling visions of what\'s possible',
      'Help your team see beyond current limitations',
      'Anticipate future trends and opportunities',
      'Use your vision to inspire and motivate others'
    ],
    strengths: [
      'Natural visionary and forward-thinker',
      'Inspires others with future possibilities',
      'Anticipates trends and changes',
      'Motivates action toward long-term goals'
    ],
    challenges: [
      'May neglect present realities',
      'Can be seen as unrealistic or impractical',
      'Might become impatient with current constraints'
    ]
  },
  {
    id: 'ideation',
    name: 'Ideation',
    category: 'Strategic Thinking',
    description: 'People exceptionally talented in the Ideation theme are fascinated by ideas. They are able to find connections between seemingly disparate phenomena.',
    actionItems: [
      'Generate creative solutions to complex problems',
      'Make connections between different concepts and ideas',
      'Brainstorm regularly and capture your ideas',
      'Help your team think outside the box'
    ],
    strengths: [
      'Natural creativity and innovation',
      'Sees connections others miss',
      'Generates many ideas and options',
      'Thinks outside conventional boundaries'
    ],
    challenges: [
      'May have too many ideas without follow-through',
      'Can be seen as scattered or unfocused',
      'Might struggle with implementation details'
    ]
  },
  {
    id: 'input',
    name: 'Input',
    category: 'Strategic Thinking',
    description: 'People exceptionally talented in the Input theme have a craving to know more. Often they like to archive and collect information.',
    actionItems: [
      'Become the go-to resource for information in your field',
      'Collect and organize useful resources for your team',
      'Stay current with trends and developments',
      'Share relevant information and insights with others'
    ],
    strengths: [
      'Natural collector of information and resources',
      'Excellent research and learning abilities',
      'Broad knowledge across many topics',
      'Valuable resource for others'
    ],
    challenges: [
      'May collect information without using it',
      'Can become overwhelmed by too much data',
      'Might struggle to determine what\'s most important'
    ]
  },
  {
    id: 'intellection',
    name: 'Intellection',
    category: 'Strategic Thinking',
    description: 'People exceptionally talented in the Intellection theme are characterized by their intellectual activity. They are introspective and appreciate intellectual discussions.',
    actionItems: [
      'Schedule regular time for thinking and reflection',
      'Engage in intellectual discussions with thoughtful colleagues',
      'Write or journal to process your thoughts',
      'Share your insights and philosophical perspectives'
    ],
    strengths: [
      'Deep thinking and reflection abilities',
      'Enjoys intellectual challenges',
      'Provides thoughtful analysis',
      'Comfortable with complexity and ambiguity'
    ],
    challenges: [
      'May overthink simple situations',
      'Can be seen as too theoretical',
      'Might struggle with quick decisions'
    ]
  },
  {
    id: 'learner',
    name: 'Learner',
    category: 'Strategic Thinking',
    description: 'People exceptionally talented in the Learner theme have a great desire to learn and want to continuously improve. The process of learning, rather than the outcome, is especially exciting for them.',
    actionItems: [
      'Continuously seek new learning opportunities',
      'Take on challenging assignments that stretch your abilities',
      'Share what you learn with others',
      'Create learning goals alongside performance goals'
    ],
    strengths: [
      'Natural desire for continuous improvement',
      'Adapts quickly to new situations',
      'Excited by learning process',
      'Brings fresh perspectives and knowledge'
    ],
    challenges: [
      'May become distracted by new learning opportunities',
      'Can struggle to apply learning practically',
      'Might not value expertise as much as learning'
    ]
  },
  {
    id: 'strategic',
    name: 'Strategic',
    category: 'Strategic Thinking',
    description: 'People exceptionally talented in the Strategic theme create alternative ways to proceed. Faced with any given scenario, they can quickly spot the relevant patterns and issues.',
    actionItems: [
      'Look for multiple pathways to achieve goals',
      'Anticipate obstacles and develop contingency plans',
      'Help your team see patterns and connections',
      'Question conventional approaches and suggest alternatives'
    ],
    strengths: [
      'Natural strategic planning abilities',
      'Sees patterns and connections quickly',
      'Develops alternative approaches',
      'Anticipates obstacles and opportunities'
    ],
    challenges: [
      'May overcomplicate simple situations',
      'Can be impatient with detailed implementation',
      'Might change direction too frequently'
    ]
  }
];

// 20 carefully crafted questions that assess multiple strengths themes
export const strengthsQuestions: StrengthsQuestion[] = [
  {
    id: 1,
    statement: 'I am most satisfied when I can see measurable progress toward my goals every day.',
    themes: ['achiever', 'focus', 'discipline']
  },
  {
    id: 2,
    statement: 'I enjoy taking charge of situations and making decisions that others avoid.',
    themes: ['command', 'activator', 'self-assurance']
  },
  {
    id: 3,
    statement: 'I naturally notice when someone is feeling left out and make an effort to include them.',
    themes: ['includer', 'empathy', 'developer']
  },
  {
    id: 4,
    statement: 'I love brainstorming and coming up with creative solutions to complex problems.',
    themes: ['ideation', 'strategic', 'futuristic']
  },
  {
    id: 5,
    statement: 'I prefer to have detailed plans and structured routines that I can follow consistently.',
    themes: ['discipline', 'consistency', 'deliberative']
  },
  {
    id: 6,
    statement: 'I am energized by meeting new people and making positive first impressions.',
    themes: ['woo', 'communication', 'positivity']
  },
  {
    id: 7,
    statement: 'I feel deeply satisfied when I help others recognize and develop their potential.',
    themes: ['developer', 'maximizer', 'individualization']
  },
  {
    id: 8,
    statement: 'I am constantly seeking new information and love learning about different topics.',
    themes: ['input', 'learner', 'intellection']
  },
  {
    id: 9,
    statement: 'I can sense how others are feeling and often know what they need before they ask.',
    themes: ['empathy', 'relator', 'connectedness']
  },
  {
    id: 10,
    statement: 'I thrive in competitive environments and am motivated by comparing my performance to others.',
    themes: ['competition', 'achiever', 'significance']
  },
  {
    id: 11,
    statement: 'I prefer to go with the flow and adapt to changes as they come rather than stick to rigid plans.',
    themes: ['adaptability', 'harmony', 'connectedness']
  },
  {
    id: 12,
    statement: 'I take time to carefully analyze decisions and consider potential risks before acting.',
    themes: ['deliberative', 'analytical', 'context']
  },
  {
    id: 13,
    statement: 'I am drawn to projects that will have a significant impact and gain recognition.',
    themes: ['significance', 'activator', 'futuristic']
  },
  {
    id: 14,
    statement: 'I enjoy organizing resources and finding the most efficient way to arrange things.',
    themes: ['arranger', 'strategic', 'discipline']
  },
  {
    id: 15,
    statement: 'I am motivated by a strong sense of values and purpose in everything I do.',
    themes: ['belief', 'connectedness', 'responsibility']
  },
  {
    id: 16,
    statement: 'I focus intensely on my priorities and eliminate distractions that don\'t align with my goals.',
    themes: ['focus', 'discipline', 'achiever']
  },
  {
    id: 17,
    statement: 'I enjoy deep, meaningful conversations and prefer quality over quantity in relationships.',
    themes: ['relator', 'empathy', 'individualization']
  },
  {
    id: 18,
    statement: 'I am energized by inspiring others with positive possibilities and future visions.',
    themes: ['positivity', 'futuristic', 'woo']
  },
  {
    id: 19,
    statement: 'I excel at finding what\'s wrong and developing systematic solutions to fix problems.',
    themes: ['restorative', 'analytical', 'strategic']
  },
  {
    id: 20,
    statement: 'I believe strongly in treating everyone fairly and equally according to established rules.',
    themes: ['consistency', 'belief', 'harmony']
  }
];

// Function to calculate scores based on responses
export function calculateStrengthsScores(answers: { questionId: number; rating: number }[]): StrengthsScores {
  const scores: StrengthsScores = {};
  
  // Initialize all theme scores to 0
  strengthsThemes.forEach(theme => {
    scores[theme.id] = 0;
  });
  
  // Calculate scores based on answers
  answers.forEach(answer => {
    const question = strengthsQuestions.find(q => q.id === answer.questionId);
    if (question) {
      question.themes.forEach(themeId => {
        scores[themeId] = (scores[themeId] || 0) + answer.rating;
      });
    }
  });
  
  return scores;
}

// Function to get top 5 strengths
export function getTopStrengths(scores: StrengthsScores, count: number = 5): string[] {
  return Object.entries(scores)
    .sort(([,a], [,b]) => b - a)
    .slice(0, count)
    .map(([themeId]) => themeId);
}

// Function to get detailed information about specific strengths
export function getStrengthsDetails(strengthIds: string[]): StrengthsTheme[] {
  return strengthIds.map(id => strengthsThemes.find(theme => theme.id === id)!).filter(Boolean);
}
