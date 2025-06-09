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
    setAnswers(newAnswers);    // Update session with new answers
    updateSession(newAnswers.map(answer => ({
      questionId: answer.questionId,
      selectedOption: answer.selectedOption,
      weight: answer.weight,
      value: answer.value,
    })));
  };

  const handleNext = () => {
    if (currentQuestionIndex < mbtiQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate final result
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
  const currentAnswer = answers[currentQuestionIndex];
  const isAnswered = currentAnswer !== undefined;

  return (
    <div className="container mx-auto px-4 py-8 max-w-3xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <Button
          variant="ghost"
          onClick={() => router.push('/assessments')}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Assessments
        </Button>
        
        <div className="text-center">
          <h1 className="text-2xl font-bold">MBTI Assessment</h1>
          <p className="text-muted-foreground">Question {currentQuestionIndex + 1} of {mbtiQuestions.length}</p>
        </div>
        
        <div className="w-24" /> {/* Spacer */}
      </div>

      {/* Progress */}
      <ProgressBar current={currentQuestionIndex + 1} total={mbtiQuestions.length} />      {/* Question */}
      <div className="my-8">
        <QuestionCard
          question={currentQuestion}
          selectedAnswer={currentAnswer?.selectedOption?.toString()}
          onAnswer={handleAnswer}
          onNext={handleNext}
          onPrevious={handlePrevious}
                    canGoNext={isAnswered}
          canGoPrevious={currentQuestionIndex > 0}
          isFirst={currentQuestionIndex === 0}
          isLast={currentQuestionIndex === mbtiQuestions.length - 1}
        />
      </div>
    </div>
  );
}