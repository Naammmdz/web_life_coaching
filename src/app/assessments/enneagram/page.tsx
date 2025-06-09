'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAssessmentStore } from '@/store/assessment';
import { enneagramQuestions, calculateEnneagramScores } from '@/data/enneagram-questions';
import { AssessmentAnswer, EnneagramType } from '@/types';

type Assessment = 'intro' | 'questions';

export default function EnneagramTestPage() {
  const router = useRouter();
  const { startSession, updateSession, currentSession } = useAssessmentStore();
  
  const [currentStep, setCurrentStep] = useState<Assessment>('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<AssessmentAnswer[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  useEffect(() => {
    if (!currentSession || currentSession.type !== 'enneagram') {
      startSession('enneagram');
    }
  }, [currentSession, startSession]);

  useEffect(() => {
    if (currentSession?.answers) {
      setAnswers(currentSession.answers);
    }
  }, [currentSession]);

  const handleAnswer = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNext = () => {
    if (selectedOption === null) return;

    const newAnswer: AssessmentAnswer = {
      questionId: enneagramQuestions[currentQuestion].id,
      selectedOption: selectedOption,
      value: selectedOption,
    };

    const newAnswers = [
      ...answers.filter(a => a.questionId !== enneagramQuestions[currentQuestion].id),
      newAnswer
    ];
    
    setAnswers(newAnswers);
    updateSession(newAnswers);
    setSelectedOption(null);

    if (currentQuestion < enneagramQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate results and navigate to results page
      calculateAndSubmitResults(newAnswers);
    }
  };

  const calculateAndSubmitResults = (finalAnswers: AssessmentAnswer[]) => {
    // Convert answers to the format expected by calculateEnneagramScores
    const scoresInput = finalAnswers.map(answer => ({
      questionId: answer.questionId,
      selectedOption: answer.selectedOption!
    }));

    const scores = calculateEnneagramScores(scoresInput);

    // Navigate to results with scores
    const searchParams = new URLSearchParams();
    Object.entries(scores).forEach(([key, value]) => {
      searchParams.set(key, value.toString());
    });
    
    router.push(`/assessments/enneagram/results?${searchParams.toString()}`);
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      // Restore previous answer if it exists
      const previousAnswer = answers.find(a => a.questionId === enneagramQuestions[currentQuestion - 1].id);
      setSelectedOption(previousAnswer?.selectedOption ?? null);
    }
  };

  const handleStartAssessment = () => {
    setCurrentStep('questions');
  };

  const progress = ((currentQuestion + 1) / enneagramQuestions.length) * 100;

  // Find existing answer for current question
  useEffect(() => {
    const existingAnswer = answers.find(a => a.questionId === enneagramQuestions[currentQuestion]?.id);
    if (existingAnswer) {
      setSelectedOption(existingAnswer.selectedOption);
    } else {
      setSelectedOption(null);
    }
  }, [currentQuestion, answers]);

  if (currentStep === 'intro') {
    return (
      <div className="min-h-screen py-12">
        <div className="container">
          <Link href="/assessments">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Assessments
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <Card>
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 rounded-full bg-purple-100 w-fit">
                  <User className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-3xl mb-2">Enneagram Assessment</CardTitle>
                <p className="text-muted-foreground text-lg">
                  Discover your core motivations and personality type
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="bg-muted/30 rounded-lg p-6">
                  <h3 className="font-semibold text-lg mb-3">What you&apos;ll discover:</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      Your primary Enneagram type (1-9)
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      Core motivations and fears
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      Growth and stress patterns
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-green-600" />
                      Practical development insights
                    </li>
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-background rounded-lg border">
                    <div className="text-2xl font-bold text-purple-600 mb-1">
                      {enneagramQuestions.length}
                    </div>
                    <div className="text-sm text-muted-foreground">Questions</div>
                  </div>
                  <div className="p-4 bg-background rounded-lg border">
                    <div className="text-2xl font-bold text-purple-600 mb-1">15-20</div>
                    <div className="text-sm text-muted-foreground">Minutes</div>
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-sm text-amber-800">
                    <strong>Tip:</strong> Answer honestly based on your natural tendencies, 
                    not how you think you should behave or how others expect you to act.
                  </p>
                </div>

                <Button 
                  onClick={handleStartAssessment} 
                  className="w-full bg-purple-600 hover:bg-purple-700"
                  size="lg"
                >
                  Start Assessment
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  // Questions step
  const currentQ = enneagramQuestions[currentQuestion];

  return (
    <div className="min-h-screen py-12">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Link href="/assessments">
              <Button variant="ghost">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Assessments
              </Button>
            </Link>
            <Badge variant="secondary">
              Question {currentQuestion + 1} of {enneagramQuestions.length}
            </Badge>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>Progress</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">
                    {currentQ.question}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {currentQ.options.map((option: { text: string; type: EnneagramType; }, index: number) => (
                    <motion.button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      className={`w-full p-4 text-left rounded-lg border transition-all ${
                        selectedOption === index
                          ? 'border-purple-300 bg-purple-50 shadow-sm'
                          : 'border-border hover:border-purple-200 hover:bg-muted/50'
                      }`}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full border-2 ${
                          selectedOption === index
                            ? 'border-purple-600 bg-purple-600'
                            : 'border-gray-300'
                        }`}>
                          {selectedOption === index && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="w-full h-full rounded-full bg-white"
                              style={{ margin: '1px' }}
                            />
                          )}
                        </div>
                        <span className="flex-1">{option.text}</span>
                      </div>
                    </motion.button>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>
            
            <Button
              onClick={handleNext}
              disabled={selectedOption === null}
              className="bg-purple-600 hover:bg-purple-700"
            >
              {currentQuestion === enneagramQuestions.length - 1 ? 'Complete' : 'Next'}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>          </div>
        </div>
      </div>
    </div>
  );
}
