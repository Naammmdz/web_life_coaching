import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, RotateCcw, Share2, Brain, Heart, Target, Users, Lightbulb } from 'lucide-react';
import { EQResult } from '@/types';

export default function EQResultsPage() {
  const navigate = useNavigate();
  const [results, setResults] = useState<EQResult | null>(null);

  useEffect(() => {
    const savedResults = localStorage.getItem('eqResults');
    if (savedResults) {
      setResults(JSON.parse(savedResults));
    } else {
      navigate('/assessments/eq');
    }
  }, [navigate]);

  const handleRetakeAssessment = () => {
    localStorage.removeItem('eqResults');
    navigate('/assessments/eq');
  };

  const handleShare = async () => {
    if (navigator.share && results) {
      try {
        await navigator.share({
          title: 'Kết quả Đánh giá Trí tuệ Cảm xúc (EQ)',
          text: `Tôi vừa hoàn thành bài đánh giá EQ. Điểm EQ tổng thể: ${results.overallEQ}%`,
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
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-green-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Đang tải kết quả...</p>
        </div>
      </div>
    );
  }

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-blue-600';
    if (score >= 40) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreLevel = (score: number) => {
    if (score >= 80) return { level: 'Xuất sắc', color: 'bg-green-100 text-green-800' };
    if (score >= 60) return { level: 'Tốt', color: 'bg-blue-100 text-blue-800' };
    if (score >= 40) return { level: 'Trung bình', color: 'bg-yellow-100 text-yellow-800' };
    return { level: 'Cần phát triển', color: 'bg-red-100 text-red-800' };
  };

  const domainIcons: Record<string, any> = {
    selfAwareness: Brain,
    selfRegulation: Heart,
    motivation: Target,
    empathy: Users,
    socialSkills: Lightbulb
  };

  const domainNames: Record<string, string> = {
    selfAwareness: 'Tự nhận thức',
    selfRegulation: 'Tự điều chỉnh',
    motivation: 'Động lực',
    empathy: 'Đồng cảm',
    socialSkills: 'Kỹ năng xã hội'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-8">
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

        {/* Overall EQ Score */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-3xl font-bold text-gray-800">
              Kết quả Đánh giá Trí tuệ Cảm xúc (EQ)
            </CardTitle>
            <CardDescription className="text-lg">
              Điểm EQ tổng thể của bạn
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="mb-6">
              <div className={`text-6xl font-bold mb-2 ${getScoreColor(results.overallEQ)}`}>
                {results.overallEQ}%
              </div>
              <Badge className={getScoreLevel(results.overallEQ).color}>
                {getScoreLevel(results.overallEQ).level}
              </Badge>
            </div>
            <div className="max-w-2xl mx-auto">
              <Progress value={results.overallEQ} className="h-3 mb-4" />
              <p className="text-gray-600 text-lg leading-relaxed">
                {results.interpretation}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* EQ Domains Breakdown */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Phân tích theo lĩnh vực EQ</CardTitle>
            <CardDescription>
              Điểm số chi tiết cho từng khía cạnh của trí tuệ cảm xúc
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              {Object.entries(results.scores).map(([domain, score]) => {
                const IconComponent = domainIcons[domain];
                return (
                  <div key={domain} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-700">
                          {domainNames[domain]}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className={`font-bold ${getScoreColor(score)}`}>
                            {score}%
                          </span>                          <Badge className={getScoreLevel(score).color}>
                            {getScoreLevel(score).level}
                          </Badge>
                        </div>
                      </div>
                      <Progress value={score} className="h-2" />
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Recommendations */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Gợi ý phát triển EQ</CardTitle>
            <CardDescription>
              Những hành động cụ thể để nâng cao trí tuệ cảm xúc của bạn
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {results.recommendations.map((recommendation, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-green-50 rounded-lg">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-medium mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{recommendation}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* EQ Strengths & Development Areas */}
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-green-700">Điểm mạnh EQ</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {Object.entries(results.scores)
                  .filter(([, score]) => score >= 70)
                  .map(([domain, score]) => (
                    <div key={domain} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="font-medium text-green-800">
                        {domainNames[domain]}
                      </span>
                      <span className="font-bold text-green-600">{score}%</span>
                    </div>
                  ))}
                {Object.entries(results.scores).filter(([, score]) => score >= 70).length === 0 && (
                  <p className="text-gray-600 italic">
                    Tiếp tục phát triển để xây dựng điểm mạnh EQ
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-orange-700">Cần phát triển</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {Object.entries(results.scores)
                  .filter(([, score]) => score < 60)
                  .map(([domain, score]) => (
                    <div key={domain} className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                      <span className="font-medium text-orange-800">
                        {domainNames[domain]}
                      </span>
                      <span className="font-bold text-orange-600">{score}%</span>
                    </div>
                  ))}
                {Object.entries(results.scores).filter(([, score]) => score < 60).length === 0 && (
                  <p className="text-gray-600 italic">
                    Tất cả lĩnh vực EQ đều ở mức tốt
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

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
                onClick={() => navigate('/assessments/leadership')}
                className="h-auto p-4 text-left"
              >
                <div>
                  <div className="font-medium mb-1">Đánh giá Phong cách Lãnh đạo</div>
                  <div className="text-sm text-gray-600">
                    Khám phá phong cách lãnh đạo tự nhiên của bạn
                  </div>
                </div>
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate('/assessments/life-balance')}
                className="h-auto p-4 text-left"
              >
                <div>
                  <div className="font-medium mb-1">Đánh giá Cân bằng Cuộc sống</div>
                  <div className="text-sm text-gray-600">
                    Kiểm tra sự cân bằng trong các lĩnh vực cuộc sống
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
