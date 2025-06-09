'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAssessmentStore } from '@/store/assessment';
import { QuestionCard } from '@/components/assessments/QuestionCard';
import { ProgressBar } from '@/components/assessments/ProgressBar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { mbtiQuestions } from '@/data/mbti-questions';
import { calculateMBTIResult } from '@/lib/assessment-utils';
import { ArrowLeft } from 'lucide-react';

export default function MBTITestPage() {
  const router = useRouter();
  const { currentSession, startSession, updateSession, completeSession, isSessionActive } = useAssessmentStore();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Array<{ questionId: number; selectedOption: number; weight?: string; value?: number }>>([]);

  useEffect(() => {
    if (!isSessionActive()) {
      startSession('mbti');
    }
  }, [startSession, isSessionActive]);

  if (!currentSession) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardContent className="text-center py-8">
            <p>Loading assessment...</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const handleAnswer = (optionIndex: number) => {
    const currentQuestion = mbtiQuestions[currentQuestionIndex];
    const selectedOption = currentQuestion.options[optionIndex];
    
    const newAnswer = {
      questionId: currentQuestion.id,
      selectedOption: optionIndex,
      weight: selectedOption.weight,
      value: selectedOption.value,
    };

    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = newAnswer;
    setAnswers(newAnswers);
    updateSession(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < mbtiQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Complete the assessment
      const result = calculateMBTIResult(answers);
      completeSession(result);
      router.push('/assessments/mbti/results');
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const currentQuestion = mbtiQuestions[currentQuestionIndex];
  const isAnswered = answers[currentQuestionIndex] !== undefined;
  const isLastQuestion = currentQuestionIndex === mbtiQuestions.length - 1;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button
            variant="outline"
            onClick={() => router.back()}
            className="mb-4 flex items-center space-x-2"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Assessments</span>
          </Button>

          <div className="space-y-4">
            <div>
              <h1 className="text-3xl font-bold">MBTI Assessment</h1>
              <p className="text-muted-foreground">Question {currentQuestionIndex + 1} of {mbtiQuestions.length}</p>
            </div>
            
            <ProgressBar
              current={currentQuestionIndex + 1}
              total={mbtiQuestions.length}
              className="w-full"
            />
          </div>
        </div>

        <div className="space-y-6">
          <QuestionCard
            key={currentQuestionIndex}
            question={currentQuestion}
            selectedAnswer={answers[currentQuestionIndex]?.selectedOption?.toString()}
            onAnswer={handleAnswer}
            onNext={handleNext}
            onPrevious={handlePrevious}
            canGoNext={isAnswered}
            canGoPrevious={currentQuestionIndex > 0}
            isFirst={currentQuestionIndex === 0}
            isLast={isLastQuestion}
          />
        </div>
      </div>
    </div>
  );
}
