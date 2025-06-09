'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Download, 
  Share2, 
  ArrowLeft, 
  Briefcase, 
  Target,
  TrendingUp,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAssessmentStore } from '@/store/assessment';
import { mbtiTypes } from '@/data/assessments';
import { formatDate } from '@/lib/assessment-utils';

export default function MBTIResultsPage() {
  const router = useRouter();
  const { currentSession, getCompletedSessions } = useAssessmentStore();
  const [mounted, setMounted] = useState(false);
  const [resultSession, setResultSession] = useState<any>(null);

  useEffect(() => {
    setMounted(true);
    
    // Check current session first
    if (currentSession?.isCompleted && currentSession?.result) {
      setResultSession(currentSession);
    } else {
      // Check completed sessions for MBTI results
      const completedSessions = getCompletedSessions();
      const mbtiSession = completedSessions.find(session => 
        session.type === 'mbti' && session.result
      );
      
      if (mbtiSession) {
        setResultSession(mbtiSession);
      } else {
        router.push('/assessments/mbti');
      }
    }
  }, [currentSession, getCompletedSessions, router]);

  if (!mounted || !resultSession?.result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Brain className="h-12 w-12 text-primary mx-auto mb-4 animate-pulse" />
          <p className="text-muted-foreground">Loading results...</p>
        </div>
      </div>
    );
  }

  const mbtiType = mbtiTypes.find(type => type.type === resultSession.result.type);

  if (!mbtiType) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-muted-foreground">Results not found</p>
          <Button onClick={() => router.push('/assessments')} className="mt-4">
            Back to Assessments
          </Button>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `My MBTI Result: ${mbtiType.type}`,
        text: `I just discovered I'm a ${mbtiType.name} (${mbtiType.type}) personality type!`,
        url: window.location.href,
      });
    }
  };

  const handleDownload = () => {
    const report = `
MBTI Assessment Results
======================

Personality Type: ${mbtiType.type} - ${mbtiType.name}
Date: ${formatDate(resultSession.completedAt!)}

Description:
${mbtiType.description}

Strengths:
${mbtiType.strengths?.map(strength => `• ${strength}`).join('\n') || 'N/A'}

Growth Areas:
${mbtiType.weaknesses?.map(area => `• ${area}`).join('\n') || 'N/A'}

Career Suggestions:
${mbtiType.careers?.map(career => `• ${career}`).join('\n') || 'N/A'}
    `;

    const blob = new Blob([report], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `MBTI-Results-${mbtiType.type}-${new Date().toISOString().split('T')[0]}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <Button
            variant="ghost"
            onClick={() => router.push('/assessments')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Assessments
          </Button>
          
          <div className="text-center">
            <h1 className="text-3xl font-bold">Your MBTI Results</h1>
            <p className="text-muted-foreground">Completed on {formatDate(resultSession.completedAt!)}</p>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={handleShare}>
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm" onClick={handleDownload}>
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
          </div>
        </motion.div>

        {/* Main Result Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Card className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
            <CardHeader className="relative">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-4xl font-bold mb-2">
                    {mbtiType.type}
                  </CardTitle>
                  <CardDescription className="text-xl text-foreground">
                    {mbtiType.name}
                  </CardDescription>
                </div>
                <Brain className="h-16 w-16 text-primary" />
              </div>
            </CardHeader>
            <CardContent className="relative">
              <p className="text-lg leading-relaxed mb-6">
                {mbtiType.description}
              </p>
              
              {/* Dimension Scores */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">                {Object.entries(resultSession.result?.scores || {}).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <Badge variant="secondary" className="mb-2">
                      {key}
                    </Badge>
                    <div className="text-2xl font-bold">{Number(value)}%</div>
                    <div className="text-sm text-muted-foreground">
                      Score
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Details Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Strengths */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Strengths
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {mbtiType.strengths?.map((strength, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm">{strength}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Growth Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Growth Areas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {mbtiType.weaknesses?.map((area, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm">{area}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Career Suggestions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5" />
                  Career Suggestions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {mbtiType.careers?.map((career, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm">{career}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Next Steps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>What's Next?</CardTitle>
              <CardDescription>
                Take your personality insights to the next level
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid sm:grid-cols-2 gap-4">
                <Button 
                  variant="outline" 
                  className="h-auto p-4 text-left justify-start"
                  onClick={() => router.push('/assessments')}
                >
                  <div>
                    <div className="font-medium">Try Another Assessment</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Explore other personality dimensions
                    </div>
                  </div>
                </Button>
                <Button 
                  variant="outline" 
                  className="h-auto p-4 text-left justify-start"
                  onClick={() => router.push('/assessments/mbti')}
                >
                  <div>
                    <div className="font-medium">Retake This Test</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      See how your results may have changed
                    </div>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}