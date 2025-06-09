import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { valuesQuestions, calculateValuesScores } from '@/data/values-questions';
import { useNavigate } from 'react-router-dom';
import { useLanguageStore } from '@/store/language';

const ValuesPage: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ questionId: number; selectedOption: number }[]>([]);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const navigate = useNavigate();
  const { t } = useLanguageStore();

  const handleNext = () => {
    if (selectedOption === '') return;

    const newAnswers = [
      ...answers,
      {
        questionId: valuesQuestions[currentQuestion].id,
        selectedOption: parseInt(selectedOption),
      },
    ];
    setAnswers(newAnswers);
    setSelectedOption('');

    if (currentQuestion < valuesQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate results and navigate to results page
      const scores = calculateValuesScores(newAnswers);
      localStorage.setItem('valuesResults', JSON.stringify({
        scores,
        completedAt: new Date().toISOString(),
      }));
      navigate('/assessments/values/results');
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

  const progress = ((currentQuestion + 1) / valuesQuestions.length) * 100;
  const question = valuesQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Đánh Giá Giá Trị Cá Nhân
          </h1>
          <p className="text-gray-600">
            Khám phá những giá trị cốt lõi định hướng cuộc sống của bạn
          </p>
        </div>

        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-medium text-gray-700">
                Câu hỏi {currentQuestion + 1} / {valuesQuestions.length}
              </span>
              <span className="text-sm text-gray-500">{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} className="mb-6" />

            <div className="mb-8">
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
                className="bg-blue-600 hover:bg-blue-700"
              >
                {currentQuestion === valuesQuestions.length - 1 ? 'Hoàn thành' : 'Tiếp theo'}
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-sm text-gray-500">
            Thời gian ước tính: 15 phút • {valuesQuestions.length} câu hỏi
          </p>
        </div>
      </div>
    </div>
  );
};

export default ValuesPage;
