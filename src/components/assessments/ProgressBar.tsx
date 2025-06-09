'use client';

import { Progress } from '@/components/ui/progress';

interface ProgressBarProps {
  current: number;
  total: number;
  percentage?: number;
  showNumbers?: boolean;
  className?: string;
}

export function ProgressBar({ 
  current, 
  total, 
  percentage, 
  showNumbers = true, 
  className = "" 
}: ProgressBarProps) {
  const calculatedPercentage = percentage ?? Math.round((current / total) * 100);

  return (
    <div className={`space-y-2 ${className}`}>
      {showNumbers && (
        <div className="flex justify-between items-center text-sm">
          <span className="text-muted-foreground">
            Question {current} of {total}
          </span>
          <span className="text-muted-foreground">
            {calculatedPercentage}%
          </span>
        </div>
      )}
      <Progress value={calculatedPercentage} className="w-full" />
      {!showNumbers && (
        <div className="text-center text-sm text-muted-foreground">
          {calculatedPercentage}% complete
        </div>
      )}
    </div>
  );
}
