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
import { bigFiveQuestions } from '@/data/big-five-questions';
import { useAssessmentStore } from '@/store/assessment';
import { AssessmentAnswer, BigFiveScores } from '@/types';

const SCALE_OPTIONS = [
  { value: 1, label: 'Strongly Disagree' },
  { value: 2, label: 'Disagree' },
  { value: 3, label: 'Neutral' },
  { value: 4, label: 'Agree' },
  { value: 5, label: 'Strongly Agree' },
];

export default function BigFiveTestPage() {
  const router = useRouter();
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
    if (!currentAnswer) return;    const newAnswer: AssessmentAnswer = {
      questionId: currentQuestion.id,
      selectedOption: currentAnswer,
      value: currentAnswer,
    };

    const updatedAnswers = [
      ...answers.filter(a => a.questionId !== currentQuestion.id),
      newAnswer,
    ];

    setAnswers(updatedAnswers);
    updateSession(updatedAnswers);

    if (currentQuestionIndex < bigFiveQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      const nextQuestionAnswer = updatedAnswers.find(
        a => a.questionId === bigFiveQuestions[currentQuestionIndex + 1].id
      );
      setCurrentAnswer(nextQuestionAnswer?.selectedOption || 0);
    } else {
      // Calculate results and navigate to results page
      calculateAndSubmitResults(updatedAnswers);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      const prevQuestionAnswer = answers.find(
        a => a.questionId === bigFiveQuestions[currentQuestionIndex - 1].id
      );
      setCurrentAnswer(prevQuestionAnswer?.selectedOption || 0);
    }
  };

  const calculateAndSubmitResults = (finalAnswers: AssessmentAnswer[]) => {
    const scores: BigFiveScores = {
      openness: 0,
      conscientiousness: 0,
      extraversion: 0,
      agreeableness: 0,
      neuroticism: 0,
    };

    const factorCounts: Record<keyof BigFiveScores, number> = {
      openness: 0,
      conscientiousness: 0,
      extraversion: 0,
      agreeableness: 0,
      neuroticism: 0,
    };    finalAnswers.forEach(answer => {
      const question = bigFiveQuestions.find(q => q.id === answer.questionId);
      if (question && answer.value !== undefined) {
        let score = answer.value;
        
        // Reverse scoring for reverse-coded items
        if (question.isReverse) {
          score = 6 - score; // Convert 1->5, 2->4, 3->3, 4->2, 5->1
        }

        scores[question.factor] += score;
        factorCounts[question.factor]++;
      }
    });

    // Convert to percentiles (average the scores and convert to 0-100 scale)
    Object.keys(scores).forEach(factor => {
      const key = factor as keyof BigFiveScores;
      if (factorCounts[key] > 0) {
        const averageScore = scores[key] / factorCounts[key];
        scores[key] = Math.round(((averageScore - 1) / 4) * 100); // Convert 1-5 scale to 0-100
      }
    });

    // Navigate to results with scores
    const searchParams = new URLSearchParams();
    Object.entries(scores).forEach(([key, value]) => {
      searchParams.set(key, value.toString());
    });
    
    router.push(`/assessments/big-five/results?${searchParams.toString()}`);
  };

  // Find existing answer for current question
  useEffect(() => {
    const existingAnswer = answers.find(a => a.questionId === currentQuestion?.id);
    setCurrentAnswer(existingAnswer?.selectedOption || 0);
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
        </Link>        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Big Five Personality Test</h1>
            <p className="text-muted-foreground">
              Question {currentQuestionIndex + 1} of {bigFiveQuestions.length}
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
                {SCALE_OPTIONS.map((option) => (
                  <div key={option.value} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                    <RadioGroupItem 
                      value={option.value.toString()} 
                      id={`option-${option.value}`}
                      className="shrink-0"
                    />
                    <Label 
                      htmlFor={`option-${option.value}`} 
                      className="flex-1 text-sm leading-relaxed cursor-pointer"
                    >
                      {option.label}
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
                    {currentQuestionIndex === bigFiveQuestions.length - 1 ? 'Complete' : 'Next'}
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
