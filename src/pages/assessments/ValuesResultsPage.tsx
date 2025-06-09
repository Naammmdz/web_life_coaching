import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { valuesInterpretation } from '@/data/values-questions';
import { useNavigate } from 'react-router-dom';
import { Trophy, Target, Lightbulb, ArrowRight } from 'lucide-react';

const ValuesResultsPage: React.FC = () => {
  const navigate = useNavigate();
  const results = JSON.parse(localStorage.getItem('valuesResults') || '{}');
  
  if (!results.scores) {
    navigate('/assessments/values');
    return null;
  }

  const { scores } = results;
  
  // Get top 5 values
  const sortedValues = Object.entries(scores)
    .sort(([,a], [,b]) => (b as number) - (a as number))
    .slice(0, 5);

  const getValueName = (key: string) => {
    const names: { [key: string]: string } = {
      family: 'Gia Đình',
      career: 'Sự Nghiệp', 
      health: 'Sức Khỏe',
      relationships: 'Mối Quan Hệ',
      personal_growth: 'Phát Triển Cá Nhân',
      financial_security: 'An Toàn Tài Chính',
      creativity: 'Sáng Tạo',
      adventure: 'Phiêu Lưu',
      spirituality: 'Tâm Linh',
      service: 'Phục Vụ Cộng Đồng'
    };
    return names[key] || key;
  };

  const getInterpretation = (key: string, score: number) => {
    const level = score >= 15 ? 'high' : score >= 10 ? 'medium' : 'low';
    return valuesInterpretation[key as keyof typeof valuesInterpretation][level];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Trophy className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Kết Quả Đánh Giá Giá Trị Cá Nhân
          </h1>
          <p className="text-gray-600">
            Khám phá những giá trị cốt lõi định hướng cuộc sống của bạn
          </p>
        </div>

        {/* Top Values */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-600" />
              5 Giá Trị Hàng Đầu
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {sortedValues.map(([key, score], index) => (
                <div key={key} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-900">
                      #{index + 1} {getValueName(key)}
                    </span>                    <span className="text-sm text-gray-500">
                      {score as number}/20 điểm
                    </span>
                  </div>
                  <Progress value={(score as number / 20) * 100} className="h-2" />
                  <p className="text-sm text-gray-600">
                    {getInterpretation(key, score as number)}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Detailed Analysis */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-yellow-600" />
              Phân Tích Chi Tiết
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {Object.entries(scores).map(([key, score]) => (
                <div key={key} className="p-4 border rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold text-gray-900">
                      {getValueName(key)}
                    </h3>                    <span className="text-sm font-medium text-blue-600">
                      {score as number}/20
                    </span>
                  </div>
                  <Progress value={(score as number / 20) * 100} className="h-2 mb-2" />
                  <p className="text-xs text-gray-600">
                    {getInterpretation(key, score as number)}
                  </p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recommendations */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Gợi Ý Phát Triển</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-green-700 mb-2">Giá trị mạnh:</h3>
                <ul className="list-disc pl-5 space-y-1">                  {sortedValues.slice(0, 3).map(([key]) => (
                    <li key={key} className="text-sm text-gray-700">
                      Tiếp tục phát triển và duy trì <strong>{getValueName(key)}</strong> - 
                      đây là nguồn động lực chính của bạn
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-orange-700 mb-2">Có thể cải thiện:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {Object.entries(scores)
                    .filter(([,score]) => (score as number) < 10)
                    .slice(0, 3)
                    .map(([key]) => (
                    <li key={key} className="text-sm text-gray-700">
                      Xem xét đầu tư thời gian vào <strong>{getValueName(key)}</strong> 
                      để có cuộc sống cân bằng hơn
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={() => navigate('/assessments')}
            variant="outline"
            className="flex items-center gap-2"
          >
            Làm bài khác
          </Button>
          <Button
            onClick={() => navigate('/assessments/life-balance')}
            className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2"
          >
            Đánh giá cân bằng cuộc sống
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ValuesResultsPage;
