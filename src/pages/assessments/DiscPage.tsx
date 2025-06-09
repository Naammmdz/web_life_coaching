import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Link, useNavigate } from 'react-router-dom';
import { discQuestions } from '@/data/disc-questions';
import { useAssessmentStore } from '@/store/assessment';
import { useLanguageStore } from '@/store/language';
import { translateDISCQuestions } from '@/lib/assessment-translations';
import { AssessmentAnswer } from '@/types';

export default function DiscPage() {
  const navigate = useNavigate();
  const { startSession, updateSession, currentSession } = useAssessmentStore();
  const { t, currentLanguage } = useLanguageStore();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<AssessmentAnswer[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState<number>(-1);

  // Translate questions based on current language
  const translatedQuestions = translateDISCQuestions(discQuestions, currentLanguage);
  const currentQuestion = translatedQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / translatedQuestions.length) * 100;

  useEffect(() => {
    if (!currentSession || currentSession.type !== 'disc') {
      startSession('disc');
    }
  }, [currentSession, startSession]);

  useEffect(() => {
    if (currentSession?.answers) {
      setAnswers(currentSession.answers);
      const existingAnswer = currentSession.answers.find(
        a => a.questionId === currentQuestion?.id
      );
      setCurrentAnswer(existingAnswer?.selectedOption ?? -1);
    }
  }, [currentSession, currentQuestion?.id]);

  const handleAnswerChange = (value: string) => {
    setCurrentAnswer(parseInt(value));
  };

  const handleNext = () => {
    if (currentAnswer === -1) return;

    const selectedOption = currentQuestion.options[currentAnswer];
    const newAnswer: AssessmentAnswer = {
      questionId: currentQuestion.id,
      selectedOption: currentAnswer,
      weight: selectedOption.factor,
      value: 1,
    };

    const updatedAnswers = [...answers];
    const existingIndex = updatedAnswers.findIndex(a => a.questionId === currentQuestion.id);
    
    if (existingIndex >= 0) {
      updatedAnswers[existingIndex] = newAnswer;
    } else {
      updatedAnswers.push(newAnswer);
    }

    setAnswers(updatedAnswers);
    updateSession(updatedAnswers);

    if (currentQuestionIndex === translatedQuestions.length - 1) {
      navigate('/assessments/disc/results');
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentAnswer(-1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      const prevAnswer = answers.find(a => a.questionId === translatedQuestions[currentQuestionIndex - 1].id);
      setCurrentAnswer(prevAnswer?.selectedOption ?? -1);
    }
  };

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
          <div className="flex items-center justify-between mb-4">
            <Button variant="ghost" asChild>
              <Link to="/assessments">
                <ArrowLeft className="h-4 w-4 mr-2" />
                {t('back')}
              </Link>
            </Button>
            <span className="text-sm text-muted-foreground">
              {t('question')} {currentQuestionIndex + 1} {t('of')} {translatedQuestions.length}
            </span>
          </div>
          <h1 className="text-3xl font-bold mb-4">{t('discTitle')}</h1>
          <p className="text-gray-600 mb-4">{t('discInstructions')}</p>
          <Progress value={progress} className="w-full" />
        </motion.div>

        {/* Question Card */}
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl">
                {currentQuestion.question}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={currentAnswer >= 0 ? currentAnswer.toString() : ""}
                onValueChange={handleAnswerChange}
                className="space-y-4"
              >
                {currentQuestion.options.map((option: any, index: number) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <RadioGroupItem
                      value={index.toString()}
                      id={`option-${index}`}
                    />
                    <Label
                      htmlFor={`option-${index}`}
                      className="flex-1 text-base cursor-pointer"
                    >
                      {option.text}
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
            disabled={currentAnswer === -1}
          >
            {currentQuestionIndex === translatedQuestions.length - 1 ? t('viewResults') : t('next')}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
