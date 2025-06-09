import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, RotateCcw, Share2, Crown, Users, Zap, Heart, Settings, Star } from 'lucide-react';
import { LeadershipResult } from '@/types';

export default function LeadershipResultsPage() {
  const navigate = useNavigate();
  const [results, setResults] = useState<LeadershipResult | null>(null);

  useEffect(() => {
    const savedResults = localStorage.getItem('leadershipResults');
    if (savedResults) {
      setResults(JSON.parse(savedResults));
    } else {
      navigate('/assessments/leadership');
    }
  }, [navigate]);

  const handleRetakeAssessment = () => {
    localStorage.removeItem('leadershipResults');
    navigate('/assessments/leadership');
  };

  const handleShare = async () => {
    if (navigator.share && results) {
      try {
        await navigator.share({
          title: 'Kết quả Đánh giá Phong cách Lãnh đạo',
          text: `Tôi vừa hoàn thành bài đánh giá phong cách lãnh đạo. Phong cách chính: ${results.primaryStyle}`,
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
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Đang tải kết quả...</p>
        </div>
      </div>
    );
  }

  const getScoreColor = (score: number) => {
    if (score >= 70) return 'text-purple-600';
    if (score >= 50) return 'text-blue-600';
    if (score >= 30) return 'text-yellow-600';
    return 'text-gray-600';
  };

  const getScoreLevel = (score: number) => {
    if (score >= 70) return { level: 'Rất mạnh', color: 'bg-purple-100 text-purple-800' };
    if (score >= 50) return { level: 'Mạnh', color: 'bg-blue-100 text-blue-800' };
    if (score >= 30) return { level: 'Trung bình', color: 'bg-yellow-100 text-yellow-800' };
    return { level: 'Yếu', color: 'bg-gray-100 text-gray-800' };
  };

  const styleIcons: Record<string, any> = {
    autocratic: Crown,
    democratic: Users,
    transformational: Zap,
    servant: Heart,
    situational: Settings,
    charismatic: Star
  };

  const styleNames: Record<string, string> = {
    autocratic: 'Độc đoán',
    democratic: 'Dân chủ',
    transformational: 'Biến đổi',
    servant: 'Phục vụ',
    situational: 'Tình huống',
    charismatic: 'Lãnh tụ'
  };

  const styleDescriptions: Record<string, string> = {
    autocratic: 'Ra quyết định một cách quyết đoán và kiểm soát chặt chẽ',
    democratic: 'Khuyến khích tham gia và đưa ra quyết định tập thể',
    transformational: 'Truyền cảm hứng và thúc đẩy thay đổi tích cực',
    servant: 'Tập trung vào việc phục vụ và phát triển nhóm',
    situational: 'Linh hoạt thay đổi phong cách theo hoàn cảnh',
    charismatic: 'Sử dụng sức hút cá nhân để dẫn dắt nhóm'
  };
  // Find primary and secondary styles
  const sortedStyles = Object.entries(results.scores)
    .sort(([,a], [,b]) => b - a);
  
  const primaryStyleKey = sortedStyles[0][0] as keyof typeof results.scores;
  const secondaryStyleKey = sortedStyles[1][0] as keyof typeof results.scores;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 py-8">
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

        {/* Primary Leadership Style */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-3xl font-bold text-gray-800">
              Phong cách Lãnh đạo của bạn
            </CardTitle>
            <CardDescription className="text-lg">
              Phong cách lãnh đạo chính
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">            <div className="mb-6">
              <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {styleIcons[primaryStyleKey] && 
                  React.createElement(styleIcons[primaryStyleKey], { 
                    className: "w-12 h-12 text-purple-600" 
                  })
                }
              </div>
              <div className="text-4xl font-bold mb-2 text-purple-600">
                {styleNames[primaryStyleKey]}
              </div>
              <Badge className="bg-purple-100 text-purple-800 mb-4">
                {results.scores[primaryStyleKey]}% xu hướng
              </Badge>
            </div>
            <div className="max-w-2xl mx-auto">
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                {styleDescriptions[primaryStyleKey]}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                {results.interpretation}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Leadership Styles Breakdown */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold">Phân tích các phong cách lãnh đạo</CardTitle>
            <CardDescription>
              Mức độ xu hướng của bạn với từng phong cách lãnh đạo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6">
              {sortedStyles.map(([style, score]) => {
                const IconComponent = styleIcons[style];
                const isPrimary = style === primaryStyleKey;
                const isSecondary = style === secondaryStyleKey;
                
                return (
                  <div key={style} className={`flex items-center gap-4 p-4 rounded-lg ${
                    isPrimary ? 'bg-purple-50 border-2 border-purple-200' : 
                    isSecondary ? 'bg-blue-50 border-2 border-blue-200' : 'bg-gray-50'
                  }`}>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      isPrimary ? 'bg-purple-100' : isSecondary ? 'bg-blue-100' : 'bg-gray-100'
                    }`}>
                      <IconComponent className={`w-6 h-6 ${
                        isPrimary ? 'text-purple-600' : isSecondary ? 'text-blue-600' : 'text-gray-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-700 flex items-center gap-2">
                          {styleNames[style]}
                          {isPrimary && <Badge className="bg-purple-100 text-purple-800 text-xs">Chính</Badge>}
                          {isSecondary && <Badge className="bg-blue-100 text-blue-800 text-xs">Phụ</Badge>}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className={`font-bold ${getScoreColor(score)}`}>
                            {score}%
                          </span>                          <Badge className={getScoreLevel(score).color}>
                            {getScoreLevel(score).level}
                          </Badge>
                        </div>
                      </div>
                      <Progress value={score} className="h-2 mb-2" />
                      <p className="text-sm text-gray-600">{styleDescriptions[style]}</p>
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
            <CardTitle className="text-xl font-semibold">Gợi ý phát triển lãnh đạo</CardTitle>
            <CardDescription>
              Những hành động cụ thể để nâng cao kỹ năng lãnh đạo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {results.recommendations.map((recommendation, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-purple-50 rounded-lg">
                  <div className="w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-medium mt-0.5">
                    {index + 1}
                  </div>
                  <p className="text-gray-700 leading-relaxed">{recommendation}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Leadership Strengths & Development Areas */}
        <div className="grid gap-6 md:grid-cols-2 mb-8">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-purple-700">Điểm mạnh lãnh đạo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {Object.entries(results.scores)
                  .filter(([, score]) => score >= 50)
                  .map(([style, score]) => (
                    <div key={style} className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                      <span className="font-medium text-purple-800">
                        {styleNames[style]}
                      </span>
                      <span className="font-bold text-purple-600">{score}%</span>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-orange-700">Cơ hội phát triển</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {Object.entries(results.scores)
                  .filter(([, score]) => score < 40)
                  .map(([style, score]) => (
                    <div key={style} className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                      <span className="font-medium text-orange-800">
                        {styleNames[style]}
                      </span>
                      <span className="font-bold text-orange-600">{score}%</span>
                    </div>
                  ))}
                {Object.entries(results.scores).filter(([, score]) => score < 40).length === 0 && (
                  <p className="text-gray-600 italic">
                    Bạn có sự cân bằng tốt giữa các phong cách lãnh đạo
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
                onClick={() => navigate('/assessments/eq')}
                className="h-auto p-4 text-left"
              >
                <div>
                  <div className="font-medium mb-1">Đánh giá Trí tuệ Cảm xúc (EQ)</div>
                  <div className="text-sm text-gray-600">
                    Hiểu rõ hơn về khả năng quản lý cảm xúc
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
                    Khám phá những giá trị cốt lõi trong lãnh đạo
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
