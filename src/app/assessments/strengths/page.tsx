'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle, Trophy, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { strengthsQuestions, calculateStrengthsScores, getTopStrengths } from '@/data/strengths-questions';
import { useAssessmentStore } from '@/store/assessment';

type AssessmentAnswer = {
  questionId: number;
  rating: number;
};

export default function StrengthsTestPage() {
  const router = useRouter();
  const { startSession, clearSession } = useAssessmentStore();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<AssessmentAnswer[]>([]);
  const [showIntro, setShowIntro] = useState(true);
  const [selectedRating, setSelectedRating] = useState<string>('');

  useEffect(() => {
    clearSession();
    startSession('strengths');
  }, [clearSession, startSession]);

  const handleRatingSelect = (rating: string) => {
    setSelectedRating(rating);
    
    const answer: AssessmentAnswer = {
      questionId: strengthsQuestions[currentQuestion].id,
      rating: parseInt(rating),
    };

    // Update or add the answer
    setAnswers(prev => [
      ...prev.filter(a => a.questionId !== strengthsQuestions[currentQuestion].id),
      answer
    ]);
  };

  const handleNext = () => {
    if (currentQuestion < strengthsQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedRating('');
    } else {
      // Calculate results and navigate to results page
      const scores = calculateStrengthsScores(answers);
      const topStrengths = getTopStrengths(scores, 5);
      
      // Pass results through URL parameters
      const resultsParams = new URLSearchParams({
        scores: JSON.stringify(scores),
        topStrengths: JSON.stringify(topStrengths)
      });
      
      router.push(`/assessments/strengths/results?${resultsParams.toString()}`);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      // Load previous answer if it exists
      const previousAnswer = answers.find(a => a.questionId === strengthsQuestions[currentQuestion - 1].id);
      setSelectedRating(previousAnswer ? previousAnswer.rating.toString() : '');
    }
  };

  const handleStartAssessment = () => {
    setShowIntro(false);
  };

  const progress = ((currentQuestion + 1) / strengthsQuestions.length) * 100;

  // Load existing answer for current question
  useEffect(() => {
    const existingAnswer = answers.find(a => a.questionId === strengthsQuestions[currentQuestion]?.id);
    setSelectedRating(existingAnswer ? existingAnswer.rating.toString() : '');
  }, [currentQuestion, answers]);

  if (showIntro) {
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
            className="max-w-3xl mx-auto"
          >
            <Card className="border-2 border-amber-200">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-3 rounded-full bg-amber-100 w-fit">
                  <Trophy className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="text-3xl mb-2">CliftonStrengths Assessment</CardTitle>
                <p className="text-muted-foreground text-lg">
                  Discover your top 5 signature strengths and learn how to leverage them for success
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Target className="h-5 w-5 text-amber-600" />
                      <div>
                        <h3 className="font-semibold">What You'll Discover</h3>
                        <p className="text-sm text-muted-foreground">Your top 5 talent themes from 34 possible strengths</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-amber-600" />
                      <div>
                        <h3 className="font-semibold">Personalized Insights</h3>
                        <p className="text-sm text-muted-foreground">Detailed descriptions and action items for each strength</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-muted/30 rounded-lg p-4">
                    <h3 className="font-semibold mb-3">Assessment Details</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li>• {strengthsQuestions.length} strategic questions</li>
                      <li>• 10-15 minutes to complete</li>
                      <li>• Rate statements from 1-5 scale</li>
                      <li>• Based on CliftonStrengths framework</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">Instructions</h4>
                  <p className="text-blue-800 text-sm">
                    For each statement, rate how well it describes you on a scale of 1-5, where:
                    <br />
                    <strong>1 = Strongly Disagree</strong> | <strong>3 = Neutral</strong> | <strong>5 = Strongly Agree</strong>
                  </p>
                </div>

                <div className="text-center pt-4">
                  <Button onClick={handleStartAssessment} size="lg" className="bg-amber-600 hover:bg-amber-700">
                    Start Assessment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  const currentQ = strengthsQuestions[currentQuestion];
  const isAnswered = selectedRating !== '';

  return (
    <div className="min-h-screen py-12">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-2xl font-bold text-gray-900">CliftonStrengths Assessment</h1>
              <div className="text-sm text-muted-foreground">
                Question {currentQuestion + 1} of {strengthsQuestions.length}
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Progress</span>
                <span>{Math.round(progress)}% Complete</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          </div>

          {/* Question Card */}
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="border-2 border-gray-200">
              <CardContent className="p-8">
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-xl font-semibold mb-4 leading-relaxed">
                      {currentQ.statement}
                    </h2>
                    <p className="text-muted-foreground">
                      How well does this statement describe you?
                    </p>
                  </div>

                  <RadioGroup
                    value={selectedRating}
                    onValueChange={handleRatingSelect}
                    className="space-y-3"
                  >
                    <div className="grid grid-cols-5 gap-4">
                      {[
                        { value: '1', label: 'Strongly\nDisagree', color: 'border-red-200 hover:border-red-300' },
                        { value: '2', label: 'Disagree', color: 'border-orange-200 hover:border-orange-300' },
                        { value: '3', label: 'Neutral', color: 'border-gray-200 hover:border-gray-300' },
                        { value: '4', label: 'Agree', color: 'border-green-200 hover:border-green-300' },
                        { value: '5', label: 'Strongly\nAgree', color: 'border-emerald-200 hover:border-emerald-300' }
                      ].map((option) => (
                        <div key={option.value} className="flex flex-col items-center">
                          <div className={`relative p-6 rounded-lg border-2 transition-all cursor-pointer ${
                            selectedRating === option.value 
                              ? 'border-amber-400 bg-amber-50' 
                              : option.color
                          }`}>
                            <RadioGroupItem
                              value={option.value}
                              id={option.value}
                              className="absolute top-2 left-2"
                            />
                            <Label
                              htmlFor={option.value}
                              className="cursor-pointer text-center text-sm font-medium whitespace-pre-line"
                            >
                              {option.label}
                            </Label>
                          </div>
                          <div className="mt-2 text-lg font-bold text-muted-foreground">
                            {option.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Previous
            </Button>

            <Button
              onClick={handleNext}
              disabled={!isAnswered}
              className="bg-amber-600 hover:bg-amber-700"
            >
              {currentQuestion === strengthsQuestions.length - 1 ? 'Complete' : 'Next'}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
