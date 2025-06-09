import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, ArrowRight, ChevronLeft } from 'lucide-react';
import { leadershipQuestions, calculateLeadershipScores } from '@/data/leadership-questions';
import { useLanguageStore } from '@/store/language';

export default function LeadershipPage() {
  const navigate = useNavigate();
  const { t } = useLanguageStore();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ questionId: number; selectedOption: number }[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>('');

  const question = leadershipQuestions[currentQuestion];

  // Load existing answer when question changes
  useEffect(() => {
    const existingAnswer = answers.find(a => a.questionId === question.id);
    setSelectedOption(existingAnswer ? existingAnswer.selectedOption.toString() : '');
  }, [currentQuestion, answers, question.id]);  const handleAnswer = (value: string) => {
    console.log('Selected value:', value);
    setSelectedOption(value);
    const newAnswers = [...answers];
    const existingIndex = newAnswers.findIndex(a => a.questionId === question.id);
    
    if (existingIndex >= 0) {
      newAnswers[existingIndex].selectedOption = parseInt(value);
    } else {
      newAnswers.push({
        questionId: question.id,
        selectedOption: parseInt(value)
      });
    }
    
    setAnswers(newAnswers);
    console.log('Updated answers:', newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < leadershipQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Calculate results and save
      const scores = calculateLeadershipScores(answers);
      localStorage.setItem('leadershipResults', JSON.stringify(scores));
      navigate('/assessments/leadership/results');
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };
  const progress = ((currentQuestion + 1) / leadershipQuestions.length) * 100;
  const isAnswered = selectedOption !== '';

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 py-8">
      <div className="max-w-3xl mx-auto px-4">        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/assessments')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('back')}
          </Button>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800">{t('leadershipTitle')}</h1>
            <p className="text-gray-600">{t('leadershipInstructions')}</p>
          </div>
          <div className="w-24"></div>
        </div>

        {/* Progress */}        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">
              {t('question')} {currentQuestion + 1} / {leadershipQuestions.length}
            </span>
            <span className="text-sm font-medium text-gray-700">
              {Math.round(progress)}%
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader>            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                {currentQuestion + 1}
              </div>
              <div>
                <CardDescription>{t('leadershipTitle')}</CardDescription>
              </div>
            </div>
            <CardTitle className="text-xl leading-relaxed text-gray-800">
              {question.question}
            </CardTitle>
          </CardHeader>          <CardContent>
            <div className="space-y-4">
              {question.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 rounded-lg border hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    id={`option-${index}`}
                    name="leadership-option"
                    value={index.toString()}
                    checked={selectedOption === index.toString()}
                    onChange={(e) => handleAnswer(e.target.value)}
                    className="h-4 w-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                  />
                  <label
                    htmlFor={`option-${index}`}
                    className="flex-1 text-sm leading-relaxed cursor-pointer"
                  >
                    {option.text}
                  </label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            {t('previous')}
          </Button><div className="flex space-x-2">
            {leadershipQuestions.map((_, index) => {
              const hasAnswer = answers.find(a => a.questionId === leadershipQuestions[index].id);
              return (
                <button
                  key={index}
                  onClick={() => setCurrentQuestion(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentQuestion
                      ? 'bg-purple-600'
                      : hasAnswer
                      ? 'bg-purple-300'
                      : 'bg-gray-300'
                  }`}
                />
              );
            })}
          </div>          <Button
            onClick={handleNext}
            disabled={!isAnswered}
            className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700"
          >
            {currentQuestion === leadershipQuestions.length - 1 ? t('viewResults') : t('next')}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Instructions */}
        <Card className="mt-8 bg-purple-50 border-purple-200">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-purple-800 mb-2">Hướng dẫn:</h3>
            <ul className="text-purple-700 text-sm space-y-1">
              <li>• Hãy tưởng tượng mình trong các tình huống lãnh đạo thực tế</li>
              <li>• Chọn đáp án mô tả chính xác nhất cách bạn sẽ hành động</li>
              <li>• Không có phong cách lãnh đạo nào là tốt nhất, mỗi cách đều có ưu điểm riêng</li>
              <li>• Trả lời dựa trên bản năng tự nhiên của bạn, không phải điều bạn nghĩ là "đúng"</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
