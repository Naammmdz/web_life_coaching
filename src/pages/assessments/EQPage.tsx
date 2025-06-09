import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ArrowLeft, ArrowRight, ChevronLeft } from 'lucide-react';
import { eqQuestions, calculateEQScores } from '@/data/eq-questions';

export default function EQPage() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ questionId: number; selectedOption: number }[]>([]);

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers];
    const existingIndex = newAnswers.findIndex(a => a.questionId === eqQuestions[currentQuestion].id);
    
    if (existingIndex >= 0) {
      newAnswers[existingIndex].selectedOption = parseInt(value);
    } else {
      newAnswers.push({
        questionId: eqQuestions[currentQuestion].id,
        selectedOption: parseInt(value)
      });
    }
    
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < eqQuestions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      // Calculate results and save
      const scores = calculateEQScores(answers);
      localStorage.setItem('eqResults', JSON.stringify(scores));
      navigate('/assessments/eq/results');
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const progress = ((currentQuestion + 1) / eqQuestions.length) * 100;
  const currentAnswer = answers.find(a => a.questionId === eqQuestions[currentQuestion].id);
  const isAnswered = currentAnswer !== undefined;
  const question = eqQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
      <div className="max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/assessments')}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Quay lại
          </Button>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800">Đánh giá Trí tuệ Cảm xúc (EQ)</h1>
            <p className="text-gray-600">Khám phá khả năng quản lý cảm xúc của bạn</p>
          </div>
          <div className="w-24"></div>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">
              Câu hỏi {currentQuestion + 1} / {eqQuestions.length}
            </span>
            <span className="text-sm font-medium text-gray-700">
              {Math.round(progress)}%
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Question Card */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                {currentQuestion + 1}
              </div>
              <div>
                <CardTitle className="text-lg">{question.domain}</CardTitle>
                <CardDescription>Lĩnh vực trí tuệ cảm xúc</CardDescription>
              </div>
            </div>
            <CardTitle className="text-xl leading-relaxed text-gray-800">
              {question.question}
            </CardTitle>
          </CardHeader>
          <CardContent>            <RadioGroup
              value={currentAnswer?.selectedOption.toString() || ''}
              onValueChange={handleAnswer}
              className="space-y-4"
            >
              {question.options.map((option, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                  <RadioGroupItem
                    value={(index + 1).toString()}
                    id={`option-${index}`}
                    className="mt-1"
                  />
                  <Label
                    htmlFor={`option-${index}`}
                    className="flex-1 text-base leading-relaxed cursor-pointer"
                  >
                    {option.text}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Quay lại
          </Button>          <div className="flex space-x-2">
            {eqQuestions.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuestion(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentQuestion
                    ? 'bg-green-600'
                    : answers.find(a => a.questionId === eqQuestions[index].id) !== undefined
                    ? 'bg-green-300'
                    : 'bg-gray-300'
                }`}
              />
            ))}
          </div>

          <Button
            onClick={handleNext}
            disabled={!isAnswered}
            className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
          >
            {currentQuestion === eqQuestions.length - 1 ? 'Xem kết quả' : 'Tiếp theo'}
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Instructions */}
        <Card className="mt-8 bg-green-50 border-green-200">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-green-800 mb-2">Hướng dẫn:</h3>
            <ul className="text-green-700 text-sm space-y-1">
              <li>• Đọc kỹ từng câu hỏi và chọn đáp án phù hợp nhất với bạn</li>
              <li>• Trả lời một cách chân thật để có kết quả chính xác nhất</li>
              <li>• Không có đáp án đúng hay sai, chỉ có sự phù hợp với tính cách của bạn</li>
              <li>• Bạn có thể quay lại các câu hỏi trước đó để thay đổi đáp án</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
