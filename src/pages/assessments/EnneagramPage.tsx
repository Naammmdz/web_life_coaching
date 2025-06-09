import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, User, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Link, useNavigate } from 'react-router-dom';
import { enneagramQuestions, calculateEnneagramScores } from '@/data/enneagram-questions';
import { useAssessmentStore } from '@/store/assessment';
import { useLanguageStore } from '@/store/language';
import { translateEnneagramQuestions } from '@/lib/assessment-translations';
import { AssessmentAnswer } from '@/types';

export default function EnneagramPage() {
  const navigate = useNavigate();
  const { startSession, updateSession, currentSession } = useAssessmentStore();
  const { t, currentLanguage } = useLanguageStore();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<AssessmentAnswer[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState<number>(-1);

  // Translate questions based on current language
  const questions = translateEnneagramQuestions(enneagramQuestions, currentLanguage);
  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  useEffect(() => {
    if (!currentSession || currentSession.type !== 'enneagram') {
      startSession('enneagram');
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

    const newAnswer: AssessmentAnswer = {
      questionId: currentQuestion.id,
      selectedOption: currentAnswer,
      value: currentAnswer,
    };

    const updatedAnswers = [
      ...answers.filter(a => a.questionId !== currentQuestion.id),
      newAnswer
    ];

    setAnswers(updatedAnswers);
    updateSession(updatedAnswers);

    if (currentQuestionIndex < enneagramQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentAnswer(-1);
    } else {
      // Calculate results and navigate to results page
      const scoresInput = updatedAnswers.map(answer => ({
        questionId: answer.questionId,
        selectedOption: answer.selectedOption!
      }));

      const scores = calculateEnneagramScores(scoresInput);

      // Navigate to results with scores as URL parameters
      const searchParams = new URLSearchParams();
      Object.entries(scores).forEach(([key, value]) => {
        searchParams.set(key, value.toString());
      });
      
      navigate(`/assessments/enneagram/results?${searchParams.toString()}`);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  if (!currentQuestion) {
    return (
      <div className="min-h-screen py-12">
        <div className="container max-w-4xl">
          <div className="text-center">
            <p>Loading assessment...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >          <Button variant="ghost" asChild className="mb-4">
            <Link to="/assessments">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t('back')}
            </Link>
          </Button>
          
          <div className="mx-auto mb-4 p-3 rounded-full bg-purple-100 w-fit">
            <User className="h-8 w-8 text-purple-600" />
          </div>
          <h1 className="text-3xl font-bold mb-2">{t('enneagramTitle')}</h1>
          <p className="text-muted-foreground text-lg">
            {t('enneagramInstructions')}
          </p>
        </motion.div>        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>{t('question')} {currentQuestionIndex + 1} {t('of')} {questions.length}</span>
            <span>{Math.round(progress)}% {t('completed')}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <motion.div
          key={currentQuestionIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-full bg-purple-100">
                  <Star className="h-5 w-5 text-purple-600" />
                </div>                <span className="text-sm font-medium text-purple-600">
                  {t('question')} {currentQuestionIndex + 1}
                </span>
              </div>
              <CardTitle className="text-xl leading-relaxed">
                {currentQuestion.question}
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <RadioGroup 
                value={currentAnswer.toString()} 
                onValueChange={handleAnswerChange}
                className="space-y-3"
              >
                {currentQuestion.options.map((option: { text: string }, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-start space-x-3 p-4 rounded-lg border transition-colors ${
                      currentAnswer === index 
                        ? 'border-purple-300 bg-purple-50' 
                        : 'border-border hover:border-purple-200 hover:bg-muted/50'
                    }`}
                  >
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                    <Label 
                      htmlFor={`option-${index}`} 
                      className="text-sm leading-relaxed cursor-pointer flex-1"
                    >
                      {option.text}
                    </Label>
                  </motion.div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-between">          <Button
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
            className="bg-purple-600 hover:bg-purple-700"
          >
            {currentQuestionIndex === questions.length - 1 ? t('viewResults') : t('next')}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
