'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Download, 
  Share2, 
  ArrowLeft, 
  Briefcase, 
  Target,
  TrendingUp,
  User,
  Heart,
  Lightbulb,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { getBigFiveResultInterpretation } from '@/data/big-five-questions';
import { BigFiveScores } from '@/types';
import Link from 'next/link';

const factorInfo = {
  openness: {
    name: 'Openness to Experience',
    icon: Lightbulb,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
  conscientiousness: {
    name: 'Conscientiousness',
    icon: Target,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  extraversion: {
    name: 'Extraversion',
    icon: User,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
  },
  agreeableness: {
    name: 'Agreeableness',
    icon: Heart,
    color: 'text-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
  },
  neuroticism: {
    name: 'Neuroticism',
    icon: Brain,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
  },
};

export default function BigFiveResultsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [scores, setScores] = useState<BigFiveScores | null>(null);
  const [interpretation, setInterpretation] = useState<any>(null);

  useEffect(() => {
    // Get scores from URL parameters
    const scoresFromUrl = {
      openness: parseInt(searchParams.get('openness') || '0'),
      conscientiousness: parseInt(searchParams.get('conscientiousness') || '0'),
      extraversion: parseInt(searchParams.get('extraversion') || '0'),
      agreeableness: parseInt(searchParams.get('agreeableness') || '0'),
      neuroticism: parseInt(searchParams.get('neuroticism') || '0'),
    };

    if (Object.values(scoresFromUrl).some(score => score > 0)) {
      setScores(scoresFromUrl);
      setInterpretation(getBigFiveResultInterpretation(scoresFromUrl));
    } else {
      // Redirect to assessment if no scores found
      router.push('/assessments/big-five');
    }
  }, [searchParams, router]);

  const handleRetakeAssessment = () => {
    router.push('/assessments/big-five');
  };

  const handleDownloadResults = () => {
    // Create a simple text report
    if (!scores || !interpretation) return;

    const reportContent = `
Big Five Personality Assessment Results
=====================================

Generated on: ${new Date().toLocaleDateString()}

Your Personality Profile:
-----------------------

${Object.entries(interpretation).map(([factor, data]: [string, any]) => {
  const factorName = factorInfo[factor as keyof typeof factorInfo].name;
  return `
${factorName}: ${data.score}% (${data.level})
${data.description}
`;
}).join('\n')}

About the Big Five Model:
------------------------
The Big Five personality traits, also known as the five-factor model (FFM), is a widely accepted model in psychology that measures personality along five broad dimensions. This assessment provides insights into your behavioral patterns, preferences, and tendencies.

Remember: Personality is complex and multifaceted. These results represent tendencies and preferences, not fixed limitations.
    `;

    const blob = new Blob([reportContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'big-five-personality-results.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleShareResults = () => {
    if (!scores) return;

    const shareText = `I just completed the Big Five Personality Assessment! My results: Openness ${scores.openness}%, Conscientiousness ${scores.conscientiousness}%, Extraversion ${scores.extraversion}%, Agreeableness ${scores.agreeableness}%, Neuroticism ${scores.neuroticism}%. Take the test yourself!`;
    
    if (navigator.share) {
      navigator.share({
        title: 'My Big Five Personality Results',
        text: shareText,
        url: window.location.origin + '/assessments/big-five',
      });
    } else {
      navigator.clipboard.writeText(shareText + ' ' + window.location.origin + '/assessments/big-five');
      alert('Results copied to clipboard!');
    }
  };

  if (!scores || !interpretation) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p>Loading your results...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/assessments">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Assessments
            </Button>
          </Link>
          
          <div className="flex gap-2">
            <Button variant="outline" onClick={handleDownloadResults}>
              <Download className="h-4 w-4 mr-2" />
              Download
            </Button>
            <Button variant="outline" onClick={handleShareResults}>
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Results Header */}
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
              <Brain className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Your Big Five Personality Profile</h1>
            <p className="text-muted-foreground">
              Discover your unique personality traits across the five major dimensions
            </p>
          </div>

          {/* Personality Factors */}
          <div className="grid gap-6">
            {Object.entries(interpretation).map(([factor, data]: [string, any]) => {
              const info = factorInfo[factor as keyof typeof factorInfo];
              const IconComponent = info.icon;
              
              return (
                <motion.div
                  key={factor}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <Card className={`${info.borderColor} border-l-4`}>
                    <CardHeader className="pb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${info.bgColor}`}>
                            <IconComponent className={`h-5 w-5 ${info.color}`} />
                          </div>
                          <div>
                            <CardTitle className="text-lg">{info.name}</CardTitle>
                            <CardDescription>
                              <Badge variant={data.level === 'High' ? 'default' : data.level === 'Low' ? 'secondary' : 'outline'}>
                                {data.level}
                              </Badge>
                            </CardDescription>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold">{data.score}%</div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Progress value={data.score} className="mb-3" />
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {data.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Action Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Personal Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Use these insights to identify areas for personal development and growth.
                </p>
                <Button variant="outline" className="w-full">
                  Explore Growth Tips
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Briefcase className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Career Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Discover career paths that align with your personality profile.
                </p>
                <Button variant="outline" className="w-full">
                  View Career Matches
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Brain className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Take Another Test</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Explore other personality assessments to gain more insights.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={handleRetakeAssessment}
                >
                  Retake Assessment
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* About Section */}
          <Card>
            <CardHeader>
              <CardTitle>About the Big Five Model</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                The Big Five personality traits, also known as the five-factor model (FFM), is one of the most widely accepted and scientifically validated models in psychology. It measures personality along five broad dimensions that capture the most important ways people differ from one another.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">Research-Based</h4>
                  <p className="text-muted-foreground">Based on decades of psychological research and validated across cultures.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Practical Applications</h4>
                  <p className="text-muted-foreground">Used in career counseling, relationship guidance, and personal development.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
