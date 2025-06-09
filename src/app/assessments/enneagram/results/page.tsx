'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Download, Share2, User, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { EnneagramScores } from '@/types';
import { 
  getPrimaryEnneagramType, 
  getEnneagramResultInterpretation,
  enneagramTypeInfo 
} from '@/data/enneagram-questions';

export default function EnneagramResultsPage() {
  const searchParams = useSearchParams();
  const [scores, setScores] = useState<EnneagramScores | null>(null);
  const [interpretation, setInterpretation] = useState<any>(null);

  useEffect(() => {
    // Get scores from URL parameters
    const urlScores: EnneagramScores = {
      1: parseInt(searchParams.get('1') || '0'),
      2: parseInt(searchParams.get('2') || '0'),
      3: parseInt(searchParams.get('3') || '0'),
      4: parseInt(searchParams.get('4') || '0'),
      5: parseInt(searchParams.get('5') || '0'),
      6: parseInt(searchParams.get('6') || '0'),
      7: parseInt(searchParams.get('7') || '0'),
      8: parseInt(searchParams.get('8') || '0'),
      9: parseInt(searchParams.get('9') || '0'),
    };

    setScores(urlScores);
    const result = getEnneagramResultInterpretation(urlScores);
    setInterpretation(result);
  }, [searchParams]);

  if (!scores || !interpretation) {
    return (
      <div className="min-h-screen py-12">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <p>Loading your results...</p>
          </div>
        </div>
      </div>
    );
  }

  const primaryType = getPrimaryEnneagramType(scores);
  const typeInfo = enneagramTypeInfo[primaryType];
  const maxScore = Math.max(...Object.values(scores));

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
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* Header */}
          <div className="text-center">
            <div className="mx-auto mb-4 p-3 rounded-full bg-purple-100 w-fit">
              <User className="h-8 w-8 text-purple-600" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Your Enneagram Results</h1>
            <p className="text-muted-foreground text-lg">
              Your comprehensive personality profile based on the Enneagram system
            </p>
          </div>

          {/* Primary Type Card */}
          <Card className="border-purple-200 bg-gradient-to-br from-purple-50 to-white">
            <CardHeader className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  Type {primaryType}
                </Badge>
                <Badge variant="outline" className="px-3 py-1">
                  Primary Type
                </Badge>
              </div>
              <CardTitle className="text-2xl">{typeInfo.name}</CardTitle>
              <p className="text-muted-foreground text-lg">{typeInfo.description}</p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">Core Desire</h4>
                    <p className="text-sm text-muted-foreground">{typeInfo.coreDesire}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2">Basic Fear</h4>
                    <p className="text-sm text-muted-foreground">{typeInfo.basicFear}</p>
                  </div>
                </div>
                <div className="space-y-4">                  <div>
                    <h4 className="font-semibold text-blue-700 mb-2">Key Motivations</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {typeInfo.keyMotivations.slice(0, 3).map((motivation: string, index: number) => (
                        <li key={index} className="flex items-start gap-2">
                          <ChevronRight className="h-3 w-3 mt-1 text-purple-600 flex-shrink-0" />
                          {motivation}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Scores */}
          <Card>
            <CardHeader>
              <CardTitle>Your Type Scores</CardTitle>
              <p className="text-muted-foreground">
                How strongly you align with each of the nine Enneagram types
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {(Object.entries(scores) as [string, number][])
                  .sort(([,a], [,b]) => b - a)
                  .map(([type, score]) => {
                    const typeNum = parseInt(type);
                    const percentage = maxScore > 0 ? (score / maxScore) * 100 : 0;
                    const info = enneagramTypeInfo[typeNum as keyof typeof enneagramTypeInfo];
                    return (
                      <div key={type} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <Badge variant={typeNum === primaryType ? "default" : "outline"}>
                              Type {type}
                            </Badge>
                            <span className="font-medium">{info.name}</span>
                          </div>
                          <span className="text-sm font-medium">{score} points</span>
                        </div>
                        <Progress value={percentage} className="h-2" />
                      </div>
                    );
                  })}
              </div>
            </CardContent>
          </Card>

          {/* Personality Details */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Healthy Traits */}
            <Card>
              <CardHeader>
                <CardTitle className="text-green-700">When Healthy</CardTitle>
                <p className="text-muted-foreground">Your positive traits and strengths</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {typeInfo.healthyTraits.map((trait, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <ChevronRight className="h-3 w-3 mt-1 text-green-600 flex-shrink-0" />
                      {trait}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Stress Behaviors */}
            <Card>
              <CardHeader>
                <CardTitle className="text-red-700">Under Stress</CardTitle>
                <p className="text-muted-foreground">Behaviors when feeling pressured</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {typeInfo.unhealthyTraits.map((trait, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <ChevronRight className="h-3 w-3 mt-1 text-red-600 flex-shrink-0" />
                      {trait}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Growth Insights */}
          <Card>
            <CardHeader>
              <CardTitle>Path of Growth</CardTitle>
              <p className="text-muted-foreground">
                Directions for personal development and self-awareness
              </p>
            </CardHeader>            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Growth Direction (Integration)</h4>
                <p className="text-sm bg-green-50 border border-green-200 rounded-lg p-3">
                  {typeInfo.directions.growth}
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-semibold mb-3">Stress Direction (Disintegration)</h4>
                <p className="text-sm bg-red-50 border border-red-200 rounded-lg p-3">
                  {typeInfo.directions.stress}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Wings Information */}
          <Card>
            <CardHeader>
              <CardTitle>Your Wings</CardTitle>
              <p className="text-muted-foreground">
                The adjacent types that influence your personality
              </p>
            </CardHeader>
            <CardContent>              <div className="grid md:grid-cols-2 gap-4">
                {interpretation.wings.map((wing: any) => (
                  <div key={wing.type} className="p-4 border rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">Type {wing.type}</Badge>
                      <span className="font-medium">{enneagramTypeInfo[wing.type as keyof typeof enneagramTypeInfo].name}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      Influence: {wing.score} points
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {enneagramTypeInfo[wing.type as keyof typeof enneagramTypeInfo].description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex gap-4 justify-center pt-6">
            <Button variant="outline" className="gap-2">
              <Download className="h-4 w-4" />
              Download Report
            </Button>
            <Button variant="outline" className="gap-2">
              <Share2 className="h-4 w-4" />
              Share Results
            </Button>
            <Link href="/assessments">
              <Button className="bg-purple-600 hover:bg-purple-700">
                Take Another Assessment
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
