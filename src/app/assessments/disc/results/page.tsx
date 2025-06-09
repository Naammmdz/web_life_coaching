'use client';

import { Suspense, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, Share2, BarChart3, Target, MessageCircle, Heart, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { DISCScores } from '@/types';
import { getDISCResultInterpretation, discStyleInfo } from '@/data/disc-questions';

interface DISCInterpretation {
  primaryStyle: keyof DISCScores;
  scores: DISCScores;
  description: string;
  workStyle: string[];
  communication: string[];
  motivators: string[];
  stressors: string[];
  strengths: string[];
}

function DISCResultsContent() {
  const searchParams = useSearchParams();
  const [scores, setScores] = useState<DISCScores | null>(null);
  const [interpretation, setInterpretation] = useState<DISCInterpretation | null>(null);

  useEffect(() => {
    // Get scores from URL parameters
    const urlScores: DISCScores = {
      dominance: parseInt(searchParams.get('dominance') || '0'),
      influence: parseInt(searchParams.get('influence') || '0'),
      steadiness: parseInt(searchParams.get('steadiness') || '0'),
      conscientiousness: parseInt(searchParams.get('conscientiousness') || '0'),
    };

    setScores(urlScores);
    const resultInterpretation = getDISCResultInterpretation(urlScores);
    setInterpretation(resultInterpretation);
  }, [searchParams]);

  const getStyleColor = (style: string) => {
    switch (style) {
      case 'dominance':
        return 'text-red-600 bg-red-50 border-red-200';
      case 'influence':
        return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'steadiness':
        return 'text-green-600 bg-green-50 border-green-200';
      case 'conscientiousness':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const getProgressColor = (style: string) => {
    switch (style) {
      case 'dominance':
        return 'bg-red-500';
      case 'influence':
        return 'bg-yellow-500';
      case 'steadiness':
        return 'bg-green-500';
      case 'conscientiousness':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  if (!scores || !interpretation) {
    return <div className="flex justify-center items-center min-h-screen">Loading results...</div>;
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
          className="space-y-8"
        >
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Your DISC Assessment Results</h1>
            <p className="text-xl text-muted-foreground mb-6">
              Understanding your behavioral style and preferences
            </p>
            <div className="flex gap-4 justify-center">
              <Button variant="outline" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download PDF
              </Button>
              <Button variant="outline" className="flex items-center gap-2">
                <Share2 className="h-4 w-4" />
                Share Results
              </Button>
            </div>
          </div>

          {/* Primary Style */}
          <Card className={`border-2 ${getStyleColor(interpretation.primaryStyle)}`}>
            <CardHeader className="text-center">              <CardTitle className="text-2xl">
                Your Primary Style: {discStyleInfo[interpretation.primaryStyle as keyof typeof discStyleInfo].name}
              </CardTitle>
              <p className="text-lg">{interpretation.description}</p>
            </CardHeader>
          </Card>

          {/* Score Breakdown */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Your DISC Score Breakdown
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {Object.entries(scores).map(([style, score]) => (
                <div key={style} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium capitalize">
                      {discStyleInfo[style as keyof DISCScores].name}
                    </span>
                    <Badge variant="secondary">{score || 0}%</Badge>
                  </div>                  <div className="relative">
                    <Progress value={score || 0} className="h-3" />
                    <div 
                      className={`absolute inset-0 rounded-full ${getProgressColor(style)}`}
                      style={{ width: `${score || 0}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Key Strengths */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Your Key Strengths
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {interpretation.strengths.map((strength: string, index: number) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <span className="text-sm">{strength}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Communication Style */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5" />
                Communication Preferences
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {interpretation.communication.map((tip: string, index: number) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg border">
                    <MessageCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm">{tip}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Work Style & Motivators */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5" />
                  What Motivates You
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {interpretation.motivators.map((motivator: string, index: number) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                      <span className="text-sm">{motivator}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Potential Stressors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {interpretation.stressors.map((stressor: string, index: number) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500" />
                      <span className="text-sm">{stressor}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Ideal Work Environment */}
          <Card>
            <CardHeader>
              <CardTitle>Ideal Work Environment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {interpretation.workStyle.map((element: string, index: number) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                    <span className="text-sm">{element}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card>
            <CardHeader>
              <CardTitle>Next Steps</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <Link href="/assessments/enneagram">
                  <Button variant="outline" className="w-full h-auto p-4 text-left">
                    <div>
                      <div className="font-medium">Enneagram Assessment</div>
                      <div className="text-sm text-muted-foreground">Discover your core motivations</div>
                    </div>
                  </Button>
                </Link>
                <Link href="/assessments/strengths">
                  <Button variant="outline" className="w-full h-auto p-4 text-left">
                    <div>
                      <div className="font-medium">Strengths Assessment</div>
                      <div className="text-sm text-muted-foreground">Identify your unique talents</div>
                    </div>
                  </Button>
                </Link>
                <Link href="/dashboard">
                  <Button className="w-full h-auto p-4 text-left">
                    <div>
                      <div className="font-medium">View Dashboard</div>
                      <div className="text-sm text-white/80">See all your results</div>
                    </div>
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}

export default function DISCResultsPage() {
  return (
    <Suspense fallback={<div className="flex justify-center items-center min-h-screen">Loading...</div>}>
      <DISCResultsContent />
    </Suspense>
  );
}
