'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Trophy, Target, Users, TrendingUp, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { StrengthsScores, StrengthsTheme } from '@/types';
import { getStrengthsDetails } from '@/data/strengths-questions';

const DOMAIN_COLORS = {
  'Executing': 'bg-blue-100 text-blue-800 border-blue-200',
  'Influencing': 'bg-purple-100 text-purple-800 border-purple-200',
  'Relationship Building': 'bg-green-100 text-green-800 border-green-200',
  'Strategic Thinking': 'bg-orange-100 text-orange-800 border-orange-200'
};

const DOMAIN_ICONS = {
  'Executing': Target,
  'Influencing': Zap,
  'Relationship Building': Users,
  'Strategic Thinking': TrendingUp
};

export default function StrengthsResultsPage() {
  const searchParams = useSearchParams();
  const [scores, setScores] = useState<StrengthsScores>({});
  const [topStrengths, setTopStrengths] = useState<string[]>([]);
  const [strengthsDetails, setStrengthsDetails] = useState<StrengthsTheme[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const scoresParam = searchParams.get('scores');
      const strengthsParam = searchParams.get('topStrengths');
      
      if (scoresParam && strengthsParam) {
        const parsedScores = JSON.parse(scoresParam);
        const parsedStrengths = JSON.parse(strengthsParam);
        
        setScores(parsedScores);
        setTopStrengths(parsedStrengths);
        setStrengthsDetails(getStrengthsDetails(parsedStrengths));
      }
    } catch (error) {
      console.error('Error parsing results:', error);
    } finally {
      setLoading(false);
    }
  }, [searchParams]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-amber-600 mx-auto"></div>
          <p className="mt-4 text-muted-foreground">Loading your results...</p>
        </div>
      </div>
    );
  }

  if (topStrengths.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center max-w-md">
          <h2 className="text-xl font-semibold mb-4">No Results Found</h2>
          <p className="text-muted-foreground mb-6">
            We couldn&apos;t find your assessment results. Please take the assessment again.
          </p>
          <Link href="/assessments/strengths">
            <Button>Retake Assessment</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Get domain distribution
  const domainCounts = strengthsDetails.reduce((acc, strength) => {
    acc[strength.category] = (acc[strength.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="min-h-screen py-12">
      <div className="container">
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
          className="max-w-6xl mx-auto space-y-8"
        >
          {/* Header */}
          <div className="text-center">
            <div className="mx-auto mb-4 p-3 rounded-full bg-amber-100 w-fit">
              <Trophy className="h-8 w-8 text-amber-600" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Your CliftonStrengths Results</h1>
            <p className="text-muted-foreground text-lg">
              Discover your top 5 signature strengths and how to leverage them
            </p>
          </div>

          {/* Domain Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Strengths Domain Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4">
                {Object.entries(domainCounts).map(([domain, count]) => {
                  const Icon = DOMAIN_ICONS[domain as keyof typeof DOMAIN_ICONS];
                  return (
                    <div key={domain} className="text-center">
                      <div className="mx-auto mb-2 p-2 rounded-full bg-gray-100 w-fit">
                        <Icon className="h-6 w-6 text-gray-600" />
                      </div>
                      <h3 className="font-semibold text-sm">{domain}</h3>
                      <p className="text-2xl font-bold text-amber-600">{count}</p>
                      <p className="text-xs text-muted-foreground">
                        {count === 1 ? 'strength' : 'strengths'}
                      </p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Top 5 Strengths */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-center">Your Top 5 Signature Strengths</h2>
            
            {strengthsDetails.map((strength, index) => {
              const Icon = DOMAIN_ICONS[strength.category];
              const score = scores[strength.id] || 0;
              const maxScore = 20; // Maximum possible score (4 questions × 5 max rating)
              const percentage = (score / maxScore) * 100;
              
              return (
                <motion.div
                  key={strength.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-2 border-amber-100">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center justify-center w-8 h-8 rounded-full bg-amber-600 text-white font-bold">
                            {index + 1}
                          </div>
                          <div>
                            <CardTitle className="text-xl">{strength.name}</CardTitle>
                            <Badge className={`mt-1 ${DOMAIN_COLORS[strength.category]}`}>
                              <Icon className="h-3 w-3 mr-1" />
                              {strength.category}
                            </Badge>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-amber-600">{score}</div>
                          <div className="text-xs text-muted-foreground">Score</div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <Progress value={percentage} className="h-2" />
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {strength.description}
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold text-green-700 mb-2">Key Strengths</h4>
                          <ul className="space-y-1">
                            {strength.strengths.map((item, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-green-600 mt-1">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-blue-700 mb-2">Action Items</h4>
                          <ul className="space-y-1">
                            {strength.actionItems.slice(0, 3).map((item, i) => (
                              <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                                <span className="text-blue-600 mt-1">•</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Development Insights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Development Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-green-700 mb-3">Leverage Your Strengths</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Focus your energy on developing these top 5 strengths further rather than trying to fix weaknesses</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Seek roles and projects that allow you to use these strengths daily</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">•</span>
                      <span>Partner with others whose strengths complement yours</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-blue-700 mb-3">Team Contributions</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Share your strengths profile with your team to improve collaboration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Volunteer for tasks that align with your top strengths</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-600 mt-1">•</span>
                      <span>Help others identify and develop their unique talents</span>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Steps */}
          <Card className="bg-amber-50 border-amber-200">
            <CardHeader>
              <CardTitle className="text-amber-800">Next Steps</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="mx-auto mb-2 p-2 rounded-full bg-amber-100 w-fit">
                    <Target className="h-5 w-5 text-amber-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Reflect</h3>
                  <p className="text-sm text-muted-foreground">
                    Review your strengths and think about how they show up in your daily work
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="mx-auto mb-2 p-2 rounded-full bg-amber-100 w-fit">
                    <Users className="h-5 w-5 text-amber-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Share</h3>
                  <p className="text-sm text-muted-foreground">
                    Discuss your results with your manager, team, or coach
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="mx-auto mb-2 p-2 rounded-full bg-amber-100 w-fit">
                    <TrendingUp className="h-5 w-5 text-amber-600" />
                  </div>
                  <h3 className="font-semibold mb-2">Apply</h3>
                  <p className="text-sm text-muted-foreground">
                    Look for opportunities to use your strengths in new ways
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Footer Actions */}
          <div className="text-center space-y-4">
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/assessments/strengths">
                <Button variant="outline">Retake Assessment</Button>
              </Link>
              <Link href="/assessments">
                <Button className="bg-amber-600 hover:bg-amber-700">
                  Explore Other Assessments
                </Button>
              </Link>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Save these results and revisit them regularly to track your development journey
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
