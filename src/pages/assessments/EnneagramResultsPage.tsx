import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Download, 
  Share2, 
  User, 
  Star, 
  TrendingUp, 
  AlertTriangle,
  Heart,
  Target,
  Compass,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Link, useLocation } from 'react-router-dom';
import { EnneagramScores } from '@/types';
import { 
  getPrimaryEnneagramType, 
  getEnneagramResultInterpretation,
  enneagramTypeInfo 
} from '@/data/enneagram-questions';

export default function EnneagramResultsPage() {
  const location = useLocation();
  const [scores, setScores] = useState<EnneagramScores | null>(null);
  const [interpretation, setInterpretation] = useState<any>(null);

  useEffect(() => {
    // Get scores from URL parameters or session storage
    const urlParams = new URLSearchParams(location.search);
    const sessionScores = sessionStorage.getItem('enneagramScores');

    let urlScores: EnneagramScores | null = null;

    // Try to get scores from URL parameters first
    if (urlParams.toString()) {
      urlScores = {
        1: parseInt(urlParams.get('1') || '0'),
        2: parseInt(urlParams.get('2') || '0'),
        3: parseInt(urlParams.get('3') || '0'),
        4: parseInt(urlParams.get('4') || '0'),
        5: parseInt(urlParams.get('5') || '0'),
        6: parseInt(urlParams.get('6') || '0'),
        7: parseInt(urlParams.get('7') || '0'),
        8: parseInt(urlParams.get('8') || '0'),
        9: parseInt(urlParams.get('9') || '0'),
      };
    } else if (sessionScores) {
      // Fallback to session storage
      urlScores = JSON.parse(sessionScores);
    }

    if (urlScores) {
      setScores(urlScores);
      const result = getEnneagramResultInterpretation(urlScores);
      setInterpretation(result);
    }
  }, [location.search]);

  if (!scores || !interpretation) {
    return (
      <div className="min-h-screen py-12">
        <div className="container max-w-4xl">
          <div className="text-center">
            <p>Loading your Enneagram results...</p>
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
      <div className="container max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/assessments">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Assessments
            </Link>
          </Button>
          
          <div className="text-center">
            <div className="mx-auto mb-4 p-3 rounded-full bg-purple-100 w-fit">
              <User className="h-8 w-8 text-purple-600" />
            </div>
            <h1 className="text-3xl font-bold mb-2">Your Enneagram Results</h1>
            <p className="text-muted-foreground text-lg">
              Discover your personality type and core motivations
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
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
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                      <Heart className="h-4 w-4" />
                      Core Desire
                    </h4>
                    <p className="text-sm text-muted-foreground">{typeInfo.coreDesire}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2 flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4" />
                      Basic Fear
                    </h4>
                    <p className="text-sm text-muted-foreground">{typeInfo.basicFear}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-700 mb-2 flex items-center gap-2">
                      <Target className="h-4 w-4" />
                      Key Motivations
                    </h4>
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

          {/* All Type Scores */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Your Type Scores
              </CardTitle>
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

          {/* Personality Details Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Healthy Traits */}
            <Card>
              <CardHeader>
                <CardTitle className="text-green-700 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  When Healthy
                </CardTitle>
                <p className="text-muted-foreground">Your positive traits and strengths</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {typeInfo.healthyTraits.map((trait: string, index: number) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <ChevronRight className="h-3 w-3 mt-1 text-green-600 flex-shrink-0" />
                      {trait}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Average Traits */}
            <Card>
              <CardHeader>
                <CardTitle className="text-yellow-700 flex items-center gap-2">
                  <Compass className="h-5 w-5" />
                  Average Behavior
                </CardTitle>
                <p className="text-muted-foreground">Common patterns and tendencies</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {typeInfo.averageTraits.map((trait: string, index: number) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <ChevronRight className="h-3 w-3 mt-1 text-yellow-600 flex-shrink-0" />
                      {trait}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Growth & Stress Directions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Integration & Disintegration
              </CardTitle>
              <p className="text-muted-foreground">
                How your type behaves in growth and stress
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3 text-green-700">Growth Direction (Integration)</h4>
                <p className="text-sm bg-green-50 border border-green-200 rounded-lg p-3">
                  {typeInfo.directions.growth}
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-semibold mb-3 text-red-700">Stress Direction (Disintegration)</h4>
                <p className="text-sm bg-red-50 border border-red-200 rounded-lg p-3">
                  {typeInfo.directions.stress}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Wings Analysis */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="h-5 w-5" />
                Your Wings
              </CardTitle>
              <p className="text-muted-foreground">
                The adjacent types that influence your personality
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {/* Show the two adjacent types as potential wings */}
                {[
                  primaryType === 1 ? 9 : primaryType - 1,
                  primaryType === 9 ? 1 : primaryType + 1
                ].map((wingType) => {
                  const wingScore = scores[wingType as keyof EnneagramScores];
                  const wingInfo = enneagramTypeInfo[wingType as keyof typeof enneagramTypeInfo];
                  return (
                    <div key={wingType} className="p-4 border rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline">Type {wingType}</Badge>
                        <span className="font-medium">{wingInfo.name}</span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">
                        Influence: {wingScore} points
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {wingInfo.description}
                      </p>
                    </div>
                  );
                })}
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
            <Button asChild className="gap-2">
              <Link to="/assessments/strengths">
                Next Assessment
                <ExternalLink className="h-4 w-4" />
              </Link>
            </Button>
          </div>

          {/* Next Steps */}
          <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
            <CardHeader>
              <CardTitle className="text-purple-800">Continue Your Journey</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Now that you know your Enneagram type, explore other assessments to build a complete picture of your personality and strengths.
              </p>
              <div className="flex gap-3 flex-wrap">
                <Button variant="outline" size="sm" asChild>
                  <Link to="/assessments/strengths">Strengths Assessment</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/assessments/mbti">MBTI Assessment</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link to="/dashboard">Return to Dashboard</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
