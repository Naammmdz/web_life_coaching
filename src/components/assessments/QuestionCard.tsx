'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { MBTIQuestion } from '@/types';
import { useState } from 'react';

interface QuestionCardProps {
  question: MBTIQuestion;
  selectedAnswer?: string;
  onAnswer: (optionIndex: number) => void;
  onNext: () => void;
  onPrevious: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
  isFirst?: boolean;
  isLast?: boolean;
}

export function QuestionCard({
  question,
  selectedAnswer,
  onAnswer,
  onNext,
  onPrevious,
  canGoNext,
  canGoPrevious,
  isFirst = false,
  isLast = false
}: QuestionCardProps) {
  const [currentAnswer, setCurrentAnswer] = useState<string>(selectedAnswer || '');

  const handleAnswerChange = (value: string) => {
    setCurrentAnswer(value);
    onAnswer(parseInt(value));
  };

  return (
    <Card className="question-card w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-lg leading-relaxed">
          {question.question}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <RadioGroup 
          value={currentAnswer} 
          onValueChange={handleAnswerChange}
          className="space-y-4"
        >
          {question.options.map((option, index) => (
            <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
              <RadioGroupItem 
                value={index.toString()} 
                id={`option-${index}`}
                className="shrink-0"
              />
              <Label 
                htmlFor={`option-${index}`} 
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
            onClick={onPrevious}
            disabled={!canGoPrevious || isFirst}
            className="flex items-center space-x-2"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Previous</span>
          </Button>

          <Button
            onClick={onNext}
            disabled={!canGoNext || !currentAnswer}
            className="flex items-center space-x-2"
          >
            <span>{isLast ? 'Complete' : 'Next'}</span>
            {!isLast && <ChevronRight className="h-4 w-4" />}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
