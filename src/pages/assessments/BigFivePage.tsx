import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Link, useNavigate } from 'react-router-dom';
import { bigFiveQuestions } from '@/data/big-five-questions';
import { useAssessmentStore } from '@/store/assessment';
import { AssessmentAnswer } from '@/types';
import { useLanguageStore } from '@/store/language';
import { getTranslation } from '@/lib/translationUtils';

const SCALE_OPTIONS = [
  { value: 1, label: 'stronglyDisagree' },
  { value: 2, label: 'disagree' },
  { value: 3, label: 'neutral' },
  { value: 4, label: 'agree' },
  { value: 5, label: 'stronglyAgree' },
];

export default function BigFivePage() {
  const navigate = useNavigate();
  const { currentLanguage } = useLanguageStore();
  const t = (key: string) => getTranslation(currentLanguage, key);
  const { startSession, updateSession, currentSession } = useAssessmentStore();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<AssessmentAnswer[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState<number>(0);

  const currentQuestion = bigFiveQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / bigFiveQuestions.length) * 100;

  useEffect(() => {
    if (!currentSession || currentSession.type !== 'big-five') {
      startSession('big-five');
    }
  }, [currentSession, startSession]);

  useEffect(() => {
    if (currentSession?.answers) {
      setAnswers(currentSession.answers);
    }
  }, [currentSession]);

  const handleAnswerChange = (value: string) => {
    setCurrentAnswer(parseInt(value));
  };
  const handleNext = () => {
    if (currentAnswer === 0) return;

    const newAnswer: AssessmentAnswer = {
      questionId: currentQuestion.id,
      selectedOption: currentAnswer,
      weight: currentQuestion.factor,
      value: currentQuestion.isReverse ? (6 - currentAnswer) : currentAnswer,
    };

    const updatedAnswers = [...answers];
    const existingIndex = updatedAnswers.findIndex(a => a.questionId === currentQuestion.id);
    
    if (existingIndex >= 0) {
      updatedAnswers[existingIndex] = newAnswer;
    } else {
      updatedAnswers.push(newAnswer);
    }

    setAnswers(updatedAnswers);
    updateSession(updatedAnswers);    if (currentQuestionIndex === bigFiveQuestions.length - 1) {
      // Navigate to results page
      navigate('/assessments/big-five/results');
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentAnswer(0);
    }
  };
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      const prevAnswer = answers.find(a => a.questionId === bigFiveQuestions[currentQuestionIndex - 1].id);
      setCurrentAnswer(prevAnswer?.selectedOption || 0);
    }  };

  if (!currentQuestion) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold mb-4">{t('bigFivePersonality')}</h1>
          <div className="flex items-center justify-between mb-4">
            <Button variant="ghost" asChild>
              <Link to="/assessments">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t('backToAssessments')}
              </Link>
            </Button>
            <span className="text-sm text-muted-foreground">
              Question {currentQuestionIndex + 1} of {bigFiveQuestions.length}
            </span>
          </div>
          <Progress value={progress} className="w-full" />
        </motion.div>

        {/* Question Card */}
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="mb-8">            <CardHeader>
              <CardTitle className="text-xl">
                {currentQuestion.question}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={currentAnswer.toString()}
                onValueChange={handleAnswerChange}
                className="space-y-4"
              >
                {SCALE_OPTIONS.map((option) => (
                  <div key={option.value} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={option.value.toString()}
                      id={option.value.toString()}
                    />
                    <Label
                      htmlFor={option.value.toString()}
                      className="flex-1 text-base cursor-pointer"
                    >
                      {t(option.label)}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestionIndex === 0}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            {t('previous')}
          </Button>
          <Button
            onClick={handleNext}
            disabled={currentAnswer === 0}
          >
            {currentQuestionIndex === bigFiveQuestions.length - 1 ? t('finish') : t('next')}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
