import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Trophy, Target, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Link, useNavigate } from 'react-router-dom';
import { strengthsQuestions, calculateStrengthsScores, getTopStrengths } from '@/data/strengths-questions';
import { useAssessmentStore } from '@/store/assessment';
import { AssessmentAnswer } from '@/types';

export default function StrengthsPage() {
  const navigate = useNavigate();
  const { startSession, updateSession, currentSession } = useAssessmentStore();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<AssessmentAnswer[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState<number>(-1);
  const [showIntro, setShowIntro] = useState(true);

  const currentQuestion = strengthsQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / strengthsQuestions.length) * 100;

  useEffect(() => {
    if (!currentSession || currentSession.type !== 'strengths') {
      startSession('strengths');
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
      value: currentAnswer + 1, // Convert 0-4 to 1-5 scale
    };

    const updatedAnswers = [
      ...answers.filter(a => a.questionId !== currentQuestion.id),
      newAnswer
    ];

    setAnswers(updatedAnswers);
    updateSession(updatedAnswers);

    if (currentQuestionIndex < strengthsQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setCurrentAnswer(-1);
    } else {
      // Calculate results and navigate to results page
      const ratingsInput = updatedAnswers.map(answer => ({
        questionId: answer.questionId,
        rating: answer.value! // Use the 1-5 scale value
      }));

      const scores = calculateStrengthsScores(ratingsInput);
      const topStrengths = getTopStrengths(scores, 5);

      // Navigate to results with scores as URL parameters
      const searchParams = new URLSearchParams({
        scores: JSON.stringify(scores),
        topStrengths: JSON.stringify(topStrengths)
      });
      
      navigate(`/assessments/strengths/results?${searchParams.toString()}`);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleStartAssessment = () => {
    setShowIntro(false);
  };

  if (showIntro) {
    return (
      <div className="min-h-screen py-12">
        <div className="container max-w-4xl">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/assessments">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Assessments
            </Link>
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="mx-auto mb-4 p-3 rounded-full bg-amber-100 w-fit">
              <Trophy className="h-8 w-8 text-amber-600" />
            </div>
            <h1 className="text-3xl font-bold mb-2">CliftonStrengths Assessment</h1>
            <p className="text-muted-foreground text-lg">
              Discover your top 5 signature strengths and unlock your potential
            </p>
          </motion.div>

          <Card className="border-2 border-amber-200">
            <CardHeader>
              <CardTitle className="text-center">What You'll Discover</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-amber-600" />
                    <div>
                      <h3 className="font-semibold">Your Top 5 Strengths</h3>
                      <p className="text-sm text-muted-foreground">
                        Identify your signature strengths from 34 themes
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5 text-amber-600" />
                    <div>
                      <h3 className="font-semibold">Development Insights</h3>
                      <p className="text-sm text-muted-foreground">
                        Personalized action items for each strength
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-muted/30 rounded-lg p-4">
                  <h3 className="font-semibold mb-3">Assessment Details</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• {strengthsQuestions.length} strategic statements</li>
                    <li>• 10-15 minutes to complete</li>
                    <li>• Rate on 1-5 agreement scale</li>
                    <li>• Based on CliftonStrengths framework</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-900 mb-2">Instructions</h4>
                <p className="text-blue-800 text-sm">
                  For each statement, rate how well it describes you on a scale of 1-5:<br />
                  <strong>1 = Strongly Disagree</strong> | <strong>3 = Neutral</strong> | <strong>5 = Strongly Agree</strong>
                </p>
              </div>

              <div className="text-center">
                <Button 
                  onClick={handleStartAssessment}
                  className="bg-amber-600 hover:bg-amber-700"
                  size="lg"
                >
                  Start Assessment
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

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
        >
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/assessments">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Assessments
            </Link>
          </Button>
          
          <div className="mx-auto mb-4 p-3 rounded-full bg-amber-100 w-fit">
            <Trophy className="h-8 w-8 text-amber-600" />
          </div>
          <h1 className="text-2xl font-bold mb-2">CliftonStrengths Assessment</h1>
          <p className="text-muted-foreground">
            Question {currentQuestionIndex + 1} of {strengthsQuestions.length}
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Progress</span>
            <span>{Math.round(progress)}% Complete</span>
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
                <div className="p-2 rounded-full bg-amber-100">
                  <Star className="h-5 w-5 text-amber-600" />
                </div>
                <span className="text-sm font-medium text-amber-600">
                  Question {currentQuestionIndex + 1}
                </span>
              </div>
              <CardTitle className="text-xl leading-relaxed">
                {currentQuestion.statement}
              </CardTitle>
              <p className="text-muted-foreground">
                How well does this statement describe you?
              </p>
            </CardHeader>
            
            <CardContent>
              <RadioGroup 
                value={currentAnswer.toString()} 
                onValueChange={handleAnswerChange}
                className="space-y-3"
              >
                <div className="grid grid-cols-5 gap-3">
                  {[
                    { value: '0', label: 'Strongly\nDisagree', color: 'border-red-200 hover:border-red-300' },
                    { value: '1', label: 'Disagree', color: 'border-orange-200 hover:border-orange-300' },
                    { value: '2', label: 'Neutral', color: 'border-gray-200 hover:border-gray-300' },
                    { value: '3', label: 'Agree', color: 'border-green-200 hover:border-green-300' },
                    { value: '4', label: 'Strongly\nAgree', color: 'border-emerald-200 hover:border-emerald-300' }
                  ].map((option) => (
                    <div key={option.value} className="flex flex-col items-center">
                      <motion.div 
                        className={`relative p-4 rounded-lg border-2 transition-all cursor-pointer text-center ${
                          currentAnswer === parseInt(option.value)
                            ? 'border-amber-400 bg-amber-50' 
                            : option.color
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <RadioGroupItem
                          value={option.value}
                          id={option.value}
                          className="absolute top-2 left-2"
                        />
                        <Label
                          htmlFor={option.value}
                          className="cursor-pointer text-sm font-medium whitespace-pre-line"
                        >
                          {option.label}
                        </Label>
                        <div className="mt-2 text-lg font-bold text-muted-foreground">
                          {parseInt(option.value) + 1}
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </div>
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
            Previous
          </Button>
          
          <Button
            onClick={handleNext}
            disabled={currentAnswer === -1}
            className="bg-amber-600 hover:bg-amber-700"
          >
            {currentQuestionIndex === strengthsQuestions.length - 1 ? 'Complete Assessment' : 'Next'}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
