'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { discQuestions, calculateDISCScores, getDISCResultInterpretation } from '@/data/disc-questions';
import { useAssessmentStore } from '@/store/assessment';
import { AssessmentAnswer, DISCScores } from '@/types';

export default function DiscTestPage() {
  const router = useRouter();
  const { startSession, updateSession, currentSession } = useAssessmentStore();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<AssessmentAnswer[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState<number>(0);

  const currentQuestion = discQuestions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / discQuestions.length) * 100;

  useEffect(() => {
    if (!currentSession || currentSession.type !== 'disc') {
      startSession('disc');
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
    if (!currentAnswer) return;

    const newAnswer: AssessmentAnswer = {
      questionId: currentQuestion.id,
      selectedOption: currentAnswer - 1, // Convert 1-4 to 0-3 for array indexing
      value: currentAnswer,
    };

    const updatedAnswers = [
      ...answers.filter(a => a.questionId !== currentQuestion.id),
      newAnswer,
    ];

    setAnswers(updatedAnswers);
    updateSession(updatedAnswers);

    if (currentQuestionIndex < discQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      const nextQuestionAnswer = updatedAnswers.find(
        a => a.questionId === discQuestions[currentQuestionIndex + 1].id
      );
      setCurrentAnswer(nextQuestionAnswer?.selectedOption ? nextQuestionAnswer.selectedOption + 1 : 0);
    } else {
      // Calculate results and navigate to results page
      calculateAndSubmitResults(updatedAnswers);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      const prevQuestionAnswer = answers.find(
        a => a.questionId === discQuestions[currentQuestionIndex - 1].id
      );
      setCurrentAnswer(prevQuestionAnswer?.selectedOption ? prevQuestionAnswer.selectedOption + 1 : 0);
    }
  };

  const calculateAndSubmitResults = (finalAnswers: AssessmentAnswer[]) => {
    // Convert answers to the format expected by calculateDISCScores
    const scoresInput = finalAnswers.map(answer => ({
      questionId: answer.questionId,
      selectedOption: answer.selectedOption!
    }));

    const scores = calculateDISCScores(scoresInput);

    // Navigate to results with scores
    const searchParams = new URLSearchParams();
    Object.entries(scores).forEach(([key, value]) => {
      searchParams.set(key, value.toString());
    });
    
    router.push(`/assessments/disc/results?${searchParams.toString()}`);
  };

  // Find existing answer for current question
  useEffect(() => {
    const existingAnswer = answers.find(a => a.questionId === currentQuestion?.id);
    setCurrentAnswer(existingAnswer?.selectedOption ? existingAnswer.selectedOption + 1 : 0);
  }, [currentQuestion, answers]);

  if (!currentQuestion) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container max-w-4xl">
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
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">DISC Assessment</h1>
            <p className="text-muted-foreground">
              Question {currentQuestionIndex + 1} of {discQuestions.length}
            </p>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <Progress value={progress} className="w-full h-2" />
            <p className="text-center text-sm text-muted-foreground mt-2">
              {Math.round(progress)}% Complete
            </p>
          </div>

          {/* Question Card */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-xl leading-relaxed">
                {currentQuestion.question}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <RadioGroup 
                value={currentAnswer.toString()} 
                onValueChange={handleAnswerChange}
                className="space-y-4"
              >
                {currentQuestion.options.map((option, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <RadioGroupItem 
                      value={(index + 1).toString()} 
                      id={`option-${index + 1}`}
                      className="shrink-0"
                    />
                    <Label 
                      htmlFor={`option-${index + 1}`} 
                      className="flex-1 text-sm leading-relaxed cursor-pointer"
                    >
                      {option.text}
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              <div className="flex justify-between pt-4">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentQuestionIndex === 0}
                  className="flex items-center space-x-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Previous</span>
                </Button>

                <Button
                  onClick={handleNext}
                  disabled={!currentAnswer}
                  className="flex items-center space-x-2"
                >
                  <span>
                    {currentQuestionIndex === discQuestions.length - 1 ? 'Complete' : 'Next'}
                  </span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
