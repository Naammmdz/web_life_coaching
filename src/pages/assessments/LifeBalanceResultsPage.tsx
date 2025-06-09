import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, RotateCcw, Share2 } from 'lucide-react';
import { LifeBalanceResult } from '@/types';

export default function LifeBalanceResultsPage() {
  const navigate = useNavigate();
  const [results, setResults] = useState<LifeBalanceResult | null>(null);

  useEffect(() => {
    const savedResults = localStorage.getItem('lifeBalanceResults');
    if (savedResults) {
      setResults(JSON.parse(savedResults));
    } else {
      navigate('/assessments/life-balance');
    }
  }, [navigate]);

  const handleRetakeAssessment = () => {
    localStorage.removeItem('lifeBalanceResults');
    navigate('/assessments/life-balance');
  };

  const handleShare = async () => {
    if (navigator.share && results) {
      try {
        await navigator.share({
          title: 'Kết quả Đánh giá Cân bằng Cuộc sống',
          text: `Tôi vừa hoàn thành bài đánh giá cân bằng cuộc sống. Điểm cân bằng tổng thể: ${results.overallBalance}%`,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    }
  };

  if (!results) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Đang tải kết quả...</p>
        </div>
      </div>
    );
  }

  const getScoreColor = (score: number) => {
    if (score >= 70) return 'text-green-600';
    if (score >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreLevel = (score: number) => {
    if (score >= 70) return { level: 'Tốt', color: 'bg-green-100 text-green-800' };
    if (score >= 50) return { level: 'Trung bình', color: 'bg-yellow-100 text-yellow-800' };
    return { level: 'Cần cải thiện', color: 'bg-red-100 text-red-800' };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
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
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={handleShare}
              className="flex items-center gap-2"
            >
              <Share2 className="w-4 h-4" />
              Chia sẻ
            </Button>
            <Button
              variant="outline"
              onClick={handleRetakeAssessment}
              className="flex items-center gap-2"
            >
              <RotateCcw className="w-4 h-4" />
              Làm lại
            </Button>
          </div>
        </div>

        {/* Overall Balance Score */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-3xl font-bold text-gray-800">
              Kết quả Đánh giá Cân bằng Cuộc sống
            </CardTitle>
            <CardDescription className="text-lg">
              Điểm cân bằng tổng thể của bạn
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="mb-6">
              <div className={`text-6xl font-bold mb-2 ${getScoreColor(results.overallBalance)}`}>
                {results.overallBalance}%
              </div>
              <Badge className={getScoreLevel(results.overallBalance).color}>
                {getScoreLevel(results.overallBalance).level}
              </Badge>
            </div>
            <div className="max-w-2xl mx-auto">
              <Progress value={results.overallBalance} className="h-3 mb-4" />
              <p className="text-gray-600 text-lg leading-relaxed">
                {results.interpretation}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Life Areas Breakdown */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Phân tích theo từng lĩnh vực</CardTitle>
            <CardDescription>
              Điểm số chi tiết cho từng khía cạnh trong cuộc sống của bạn
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              {Object.entries(results.scores).map(([area, score]) => {
                const areaNames: Record<string, string> = {
                  work: 'Công việc',
                  health: 'Sức khỏe',
                  relationships: 'Mối quan hệ',
                  personalGrowth: 'Phát triển bản thân',
                  finance: 'Tài chính',
                  recreation: 'Giải trí',
                  spirituality: 'Tinh thần',
                  family: 'Gia đình'
                };

                return (
                  <div key={area} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-700">
                        {areaNames[area]}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className={`font-bold ${getScoreColor(score)}`}>
                          {score}%
                        </span>                        <Badge className={getScoreLevel(score).color}>
                          {getScoreLevel(score).level}
                        </Badge>
                      </div>
                    </div>
                    <Progress value={score} className="h-2" />
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Recommendations */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Gợi ý cải thiện</CardTitle>
            <CardDescription>
              Những hành động cụ thể để tăng cường sự cân bằng trong cuộc sống
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {results.recommendations.map((recommendation, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                  <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{recommendation}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Steps */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Bước tiếp theo</CardTitle>
            <CardDescription>
              Khám phá thêm các công cụ đánh giá khác để hiểu rõ hơn về bản thân
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <Button
                variant="outline"
                onClick={() => navigate('/assessments/eq')}
                className="h-auto p-4 text-left"
              >
                <div>
                  <div className="font-medium mb-1">Đánh giá Trí tuệ Cảm xúc (EQ)</div>
                  <div className="text-sm text-gray-600">
                    Khám phá khả năng quản lý cảm xúc của bạn
                  </div>
                </div>
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate('/assessments/values')}
                className="h-auto p-4 text-left"
              >
                <div>
                  <div className="font-medium mb-1">Đánh giá Giá trị</div>
                  <div className="text-sm text-gray-600">
                    Tìm hiểu những giá trị cốt lõi trong cuộc sống
                  </div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
