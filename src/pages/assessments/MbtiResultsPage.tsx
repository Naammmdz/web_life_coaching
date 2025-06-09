import { useEffect, useState } from 'react';
import { ArrowLeft, Trophy, Target, Lightbulb, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Link, useNavigate } from 'react-router-dom';
import { useAssessmentStore } from '@/store/assessment';
import { MBTIScores } from '@/types';

// MBTI type descriptions
const mbtiTypes = {
  'INTJ': {
    name: 'The Architect',
    description: 'Imaginative and strategic thinkers, with a plan for everything.',
    strengths: ['Strategic thinking', 'Independence', 'Determination', 'Hard-working'],
    weaknesses: ['Overly critical', 'Judgmental', 'Loathe highly structured environments'],
    careers: ['Engineer', 'Scientist', 'Computer Programmer', 'Researcher', 'Lawyer']
  },
  'INTP': {
    name: 'The Thinker',
    description: 'Innovative inventors with an unquenchable thirst for knowledge.',
    strengths: ['Logical', 'Original', 'Creative', 'Independent'],
    weaknesses: ['Insensitive', 'Absent-minded', 'Condescending', 'Loathe rules'],
    careers: ['Scientist', 'Mathematician', 'Computer Programmer', 'Economist', 'Forensic Analyst']
  },
  'ENTJ': {
    name: 'The Commander',
    description: 'Bold, imaginative and strong-willed leaders.',
    strengths: ['Efficient', 'Energetic', 'Self-confident', 'Strong-willed'],
    weaknesses: ['Stubborn', 'Impatient', 'Arrogant', 'Cold'],
    careers: ['CEO', 'Business Administrator', 'Organization Founder', 'Politician', 'Lawyer']
  },
  'ENTP': {
    name: 'The Debater',
    description: 'Smart and curious thinkers who cannot resist an intellectual challenge.',
    strengths: ['Knowledgeable', 'Quick thinker', 'Original', 'Excellent brainstormer'],
    weaknesses: ['Argumentative', 'Insensitive', 'Intolerant', 'Can find it difficult to focus'],
    careers: ['Lawyer', 'Psychologist', 'Scientist', 'Management Consultant', 'Politician']
  },
  'INFJ': {
    name: 'The Advocate',
    description: 'Quiet and mystical, yet very inspiring and tireless idealists.',
    strengths: ['Creative', 'Insightful', 'Inspiring', 'Decisive'],
    weaknesses: ['Sensitive', 'Extremely private', 'Perfectionist', 'Always need to have a cause'],
    careers: ['Counselor', 'Writer', 'Scientist', 'Librarian', 'Teacher']
  },
  'INFP': {
    name: 'The Mediator',
    description: 'Poetic, kind and altruistic people, always eager to help a good cause.',
    strengths: ['Idealistic', 'Loyal', 'Adaptable', 'Compassionate'],
    weaknesses: ['Too idealistic', 'Too altruistic', 'Impractical', 'Dislike dealing with data'],
    careers: ['Writer', 'Artist', 'Counselor', 'Teacher', 'Psychologist']
  },
  'ENFJ': {
    name: 'The Protagonist',
    description: 'Charismatic and inspiring leaders, able to mesmerize their listeners.',
    strengths: ['Tolerant', 'Reliable', 'Charismatic', 'Altruistic'],
    weaknesses: ['Overly idealistic', 'Too selfless', 'Too sensitive', 'Fluctuating self-esteem'],
    careers: ['Teacher', 'Counselor', 'Politician', 'Coach', 'Writer']
  },
  'ENFP': {
    name: 'The Campaigner',
    description: 'Enthusiastic, creative and sociable free spirits.',
    strengths: ['Enthusiastic', 'Creative', 'Sociable', 'Energetic'],
    weaknesses: ['Poor practical skills', 'Find it difficult to focus', 'Overthink things', 'Get stressed easily'],
    careers: ['Journalist', 'Actor', 'TV Anchor', 'Fitness Trainer', 'Social Worker']
  },
  'ISTJ': {
    name: 'The Logistician',
    description: 'Practical and fact-minded, reliable and responsible.',
    strengths: ['Honest', 'Direct', 'Strong-willed', 'Dutiful'],
    weaknesses: ['Stubborn', 'Insensitive', 'Always by the book', 'Judgmental'],
    careers: ['Accountant', 'Engineer', 'Dentist', 'Stock Broker', 'Business Executive']
  },
  'ISFJ': {
    name: 'The Protector',
    description: 'Warm-hearted and dedicated, always ready to protect their loved ones.',
    strengths: ['Supportive', 'Reliable', 'Patient', 'Imaginative'],
    weaknesses: ['Humble', 'Shy', 'Take things too personally', 'Repress their feelings'],
    careers: ['Administrator', 'Manager', 'Accountant', 'Physician', 'Architect']
  },
  'ESTJ': {
    name: 'The Executive',
    description: 'Excellent administrators, unsurpassed at managing things or people.',
    strengths: ['Dedicated', 'Strong-willed', 'Direct', 'Honest'],
    weaknesses: ['Inflexible', 'Uncomfortable with unconventional situations', 'Judgmental', 'Too focused on social status'],
    careers: ['Sales Manager', 'Business Administrator', 'Judge', 'Coach', 'Financial Officer']
  },
  'ESFJ': {
    name: 'The Consul',
    description: 'Extraordinarily caring, social and popular people, always eager to help.',
    strengths: ['Strong practical skills', 'Strong sense of duty', 'Very loyal', 'Sensitive'],
    weaknesses: ['Worried about their social status', 'Inflexible', 'Reluctant to improvise', 'Vulnerable to criticism'],
    careers: ['Administrator', 'Child Care Worker', 'Nurse', 'Social Worker', 'Counselor']
  },
  'ISTP': {
    name: 'The Virtuoso',
    description: 'Bold and practical experimenters, masters of all kinds of tools.',
    strengths: ['Tolerant', 'Efficient', 'Make good use of resources', 'Great in a crisis'],
    weaknesses: ['Stubborn', 'Insensitive', 'Private', 'Easily bored'],
    careers: ['Mechanic', 'Engineer', 'Graphic Designer', 'Pilot', 'Photographer']
  },
  'ISFP': {
    name: 'The Adventurer',
    description: 'Flexible and charming artists, always ready to explore new possibilities.',
    strengths: ['Charming', 'Sensitive to others', 'Imaginative', 'Passionate'],
    weaknesses: ['Fiercely independent', 'Unpredictable', 'Easily stressed', 'Overly competitive'],
    careers: ['Artist', 'Musician', 'Photographer', 'Counselor', 'Teacher']
  },
  'ESTP': {
    name: 'The Entrepreneur',
    description: 'Smart, energetic and perceptive people, truly enjoy living on the edge.',
    strengths: ['Tolerant', 'Energetic', 'Very perceptive', 'Excellent people skills'],
    weaknesses: ['Sensitive', 'Conflict-averse', 'Easily bored', 'Poor long-term planners'],
    careers: ['Sales Representative', 'Marketing Specialist', 'Police Officer', 'Paramedic', 'Entrepreneur']
  },
  'ESFP': {
    name: 'The Entertainer',
    description: 'Spontaneous, energetic and enthusiastic people - life is never boring.',
    strengths: ['Bold', 'Original', 'Aesthetics and showcase', 'Practical'],
    weaknesses: ['Sensitive', 'Conflict-averse', 'Easily bored', 'Poor long-term planners'],
    careers: ['Artist', 'Entertainer', 'Counselor', 'Social Worker', 'Photographer']
  }
};

export default function MbtiResultsPage() {
  const navigate = useNavigate();
  const { currentSession } = useAssessmentStore();
  const [mbtiResult, setMbtiResult] = useState<string>('');
  const [scores, setScores] = useState<MBTIScores>({
    E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0
  });

  useEffect(() => {
    if (!currentSession || currentSession.type !== 'mbti' || !currentSession.answers) {
      navigate('/assessments/mbti');
      return;
    }

    // Calculate MBTI scores
    const answers = currentSession.answers;
    const calculatedScores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

    answers.forEach(answer => {
      if (answer.weight && answer.value) {
        calculatedScores[answer.weight as keyof MBTIScores] += answer.value;
      }
    });

    setScores(calculatedScores);

    // Determine MBTI type
    const type = 
      (calculatedScores.E > calculatedScores.I ? 'E' : 'I') +
      (calculatedScores.S > calculatedScores.N ? 'S' : 'N') +
      (calculatedScores.T > calculatedScores.F ? 'T' : 'F') +
      (calculatedScores.J > calculatedScores.P ? 'J' : 'P');

    setMbtiResult(type);
  }, [currentSession, navigate]);

  if (!mbtiResult || !mbtiTypes[mbtiResult as keyof typeof mbtiTypes]) {
    return <div>Loading...</div>;
  }

  const typeInfo = mbtiTypes[mbtiResult as keyof typeof mbtiTypes];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Trophy className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Your MBTI Results
          </h1>
          <p className="text-gray-600">
            Discover your personality type and what it means
          </p>
        </div>

        {/* Main Result */}
        <Card className="mb-6">
          <CardHeader className="text-center">
            <div className="text-6xl font-bold text-purple-600 mb-2">{mbtiResult}</div>
            <CardTitle className="text-2xl">{typeInfo.name}</CardTitle>
            <p className="text-gray-600 text-lg">{typeInfo.description}</p>
          </CardHeader>
        </Card>

        {/* Dimension Scores */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-600" />
              Personality Dimensions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Extraversion vs Introversion</span>
                  <Badge variant={scores.E > scores.I ? "default" : "secondary"}>
                    {scores.E > scores.I ? 'E' : 'I'}
                  </Badge>
                </div>
                <Progress value={(Math.max(scores.E, scores.I) / (scores.E + scores.I)) * 100} className="h-2" />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>E: {scores.E}</span>
                  <span>I: {scores.I}</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Sensing vs Intuition</span>
                  <Badge variant={scores.S > scores.N ? "default" : "secondary"}>
                    {scores.S > scores.N ? 'S' : 'N'}
                  </Badge>
                </div>
                <Progress value={(Math.max(scores.S, scores.N) / (scores.S + scores.N)) * 100} className="h-2" />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>S: {scores.S}</span>
                  <span>N: {scores.N}</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Thinking vs Feeling</span>
                  <Badge variant={scores.T > scores.F ? "default" : "secondary"}>
                    {scores.T > scores.F ? 'T' : 'F'}
                  </Badge>
                </div>
                <Progress value={(Math.max(scores.T, scores.F) / (scores.T + scores.F)) * 100} className="h-2" />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>T: {scores.T}</span>
                  <span>F: {scores.F}</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Judging vs Perceiving</span>
                  <Badge variant={scores.J > scores.P ? "default" : "secondary"}>
                    {scores.J > scores.P ? 'J' : 'P'}
                  </Badge>
                </div>
                <Progress value={(Math.max(scores.J, scores.P) / (scores.J + scores.P)) * 100} className="h-2" />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>J: {scores.J}</span>
                  <span>P: {scores.P}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Strengths & Weaknesses */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700">
                <Lightbulb className="w-5 h-5" />
                Strengths
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {typeInfo.strengths.map((strength, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    {strength}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-orange-700">
                <Target className="w-5 h-5" />
                Areas for Growth
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {typeInfo.weaknesses.map((weakness, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    {weakness}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Career Suggestions */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-blue-600" />
              Career Suggestions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {typeInfo.careers.map((career, index) => (
                <Badge key={index} variant="outline" className="text-sm">
                  {career}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" asChild>
            <Link to="/assessments">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Assessments
            </Link>
          </Button>
          <Button asChild>
            <Link to="/assessments/mbti">
              Take Assessment Again
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
