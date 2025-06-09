import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { lifeBalanceQuestions, calculateLifeBalanceScores } from '@/data/life-balance-questions';
import { useNavigate } from 'react-router-dom';

const LifeBalancePage: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ questionId: number; selectedOption: number }[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const navigate = useNavigate();

  const handleNext = () => {
    if (selectedOption === '') return;

    const newAnswers = [
      ...answers,
      {
        questionId: lifeBalanceQuestions[currentQuestion].id,
        selectedOption: parseInt(selectedOption),
      },
    ];
    setAnswers(newAnswers);
    setSelectedOption('');

    if (currentQuestion < lifeBalanceQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const scores = calculateLifeBalanceScores(newAnswers);
      localStorage.setItem('lifeBalanceResults', JSON.stringify({
        scores,
        completedAt: new Date().toISOString(),
      }));
      navigate('/assessments/life-balance/results');
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      const previousAnswer = answers[currentQuestion - 1];
      if (previousAnswer) {
        setSelectedOption(previousAnswer.selectedOption.toString());
      }
      setAnswers(answers.slice(0, -1));
    }
  };

  const progress = ((currentQuestion + 1) / lifeBalanceQuestions.length) * 100;
  const question = lifeBalanceQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Đánh Giá Cân Bằng Cuộc Sống
          </h1>
          <p className="text-gray-600">
            Khám phá mức độ cân bằng trong các lĩnh vực quan trọng của cuộc sống
          </p>
        </div>

        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-gray-700">
                Câu hỏi {currentQuestion + 1} / {lifeBalanceQuestions.length}
              </span>
              <span className="text-sm text-gray-500">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="mb-6" />

            <div className="mb-8">
              <div className="mb-4">
                <span className="text-sm font-medium text-emerald-600 bg-emerald-100 px-2 py-1 rounded">
                  {question.area === 'work' && 'Công việc'}
                  {question.area === 'health' && 'Sức khỏe'}
                  {question.area === 'relationships' && 'Mối quan hệ'}
                  {question.area === 'personal_growth' && 'Phát triển cá nhân'}
                  {question.area === 'finance' && 'Tài chính'}
                  {question.area === 'recreation' && 'Giải trí'}
                  {question.area === 'spirituality' && 'Tâm linh'}
                  {question.area === 'family' && 'Gia đình'}
                </span>
              </div>
              
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                {question.question}
              </h2>

              <RadioGroup
                value={selectedOption}
                onValueChange={setSelectedOption}
                className="space-y-4"
              >
                {question.options.map((option, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-gray-50"
                  >
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                    <Label
                      htmlFor={`option-${index}`}
                      className="flex-1 cursor-pointer text-gray-700"
                    >
                      {option.text}
                    </Label>
                    <span className="text-sm text-emerald-600 font-medium">
                      {option.score}/5
                    </span>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
              >
                Quay lại
              </Button>
              <Button
                onClick={handleNext}
                disabled={selectedOption === ''}
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                {currentQuestion === lifeBalanceQuestions.length - 1 ? 'Hoàn thành' : 'Tiếp theo'}
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-sm text-gray-500">
            Thời gian ước tính: 18 phút • {lifeBalanceQuestions.length} câu hỏi
          </p>
        </div>
      </div>
    </div>
  );
};

export default LifeBalancePage;
