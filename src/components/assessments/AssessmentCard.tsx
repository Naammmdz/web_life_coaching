'use client';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, HelpCircle, CheckCircle2, Play } from 'lucide-react';
import { Assessment } from '@/types';
import { getDifficultyColor } from '@/lib/assessment-utils';

interface AssessmentCardProps {
  assessment: Assessment;
  onStart: () => void;
}

export function AssessmentCard({ assessment, onStart }: AssessmentCardProps) {
  const difficultyColor = getDifficultyColor(assessment.difficulty);

  return (
    <Card className="assessment-card h-full flex flex-col">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <CardTitle className="text-xl">{assessment.title}</CardTitle>
            <Badge className={`${difficultyColor} text-xs`}>
              {assessment.difficulty}
            </Badge>
          </div>
          {assessment.isCompleted && (
            <CheckCircle2 className="h-6 w-6 text-green-600" />
          )}
        </div>
        <CardDescription className="text-sm leading-relaxed">
          {assessment.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1 pb-4">
        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>{assessment.duration}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <HelpCircle className="h-4 w-4" />
            <span>{assessment.questions} questions</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-4">
        <Button 
          className="w-full" 
          onClick={onStart}
          variant={assessment.isCompleted ? "outline" : "default"}
        >
          <Play className="h-4 w-4 mr-2" />
          {assessment.isCompleted ? 'Retake Assessment' : 'Start Assessment'}
        </Button>
      </CardFooter>
    </Card>
  );
}
