import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Target, 
  Users, 
  ArrowRight, 
  Heart, 
  Scale, 
  Lightbulb, 
  Crown,
  Compass 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguageStore } from '@/store/language';

export default function AssessmentsPage() {
  const { t } = useLanguageStore();
  const assessments = [
    {
      id: 'mbti',
      name: t('mbtiAssessment'),
      description: t('mbtiDescription'),
      duration: '10-15 ' + t('minutes'),
      icon: Brain,
      color: 'from-blue-500 to-indigo-600',
      path: '/assessments/mbti'
    },
    {
      id: 'big-five',
      name: t('bigFivePersonality'),
      description: t('bigFiveDescription'),
      duration: '15-20 ' + t('minutes'),
      icon: Target,
      color: 'from-green-500 to-emerald-600',
      path: '/assessments/big-five'
    },
    {
      id: 'disc',
      name: t('discProfile'),
      description: t('discDescription'),
      duration: '10-15 ' + t('minutes'),
      icon: Users,
      color: 'from-purple-500 to-violet-600',
      path: '/assessments/disc'
    },    {
      id: 'enneagram',
      name: t('enneagram'),
      description: t('enneagramDescription'),
      duration: '15-20 ' + t('minutes'),
      icon: Compass,
      color: 'from-orange-500 to-red-600',
      path: '/assessments/enneagram'
    },
    {
      id: 'strengths',
      name: 'Strengths Assessment',
      description: 'Discover your natural talents and strengths',
      duration: '20-25 ' + t('minutes'),
      icon: Target,
      color: 'from-pink-500 to-rose-600',
      path: '/assessments/strengths'
    },    {
      id: 'values',
      name: 'Values Assessment',
      description: 'Khám phá những giá trị cốt lõi quan trọng nhất trong cuộc sống của bạn',
      duration: '15-20 ' + t('minutes'),
      icon: Heart,
      color: 'from-cyan-500 to-blue-600',
      path: '/assessments/values'
    },
    {
      id: 'life-balance',
      name: 'Life Balance Assessment',
      description: 'Đánh giá sự cân bằng trong các lĩnh vực cuộc sống',
      duration: '10-15 ' + t('minutes'),
      icon: Scale,
      color: 'from-teal-500 to-green-600',
      path: '/assessments/life-balance'
    },
    {
      id: 'eq',
      name: 'Emotional Intelligence (EQ)',
      description: 'Đo lường và phát triển trí tuệ cảm xúc của bạn',
      duration: '15-20 ' + t('minutes'),
      icon: Lightbulb,
      color: 'from-amber-500 to-orange-600',
      path: '/assessments/eq'
    },
    {
      id: 'leadership',
      name: 'Leadership Style Assessment',
      description: 'Khám phá phong cách lãnh đạo và kỹ năng quản lý của bạn',
      duration: '15-20 ' + t('minutes'),
      icon: Crown,
      color: 'from-violet-500 to-purple-600',
      path: '/assessments/leadership'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold mb-4">
            {t('scientificPersonalityAssessments')}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('discoverYour')} personality with our comprehensive, science-based assessments. 
            Each assessment provides deep insights into your behavior, preferences, and potential.
          </p>
        </motion.div>        {/* Assessment Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {assessments.map((assessment, index) => (
            <motion.div
              key={assessment.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <CardHeader className="pb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${assessment.color} flex items-center justify-center mb-4`}>
                    <assessment.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors leading-tight">
                      {assessment.name}
                    </CardTitle>
                    <Badge variant="outline" className="text-xs">{assessment.duration}</Badge>
                  </div>
                  <CardDescription className="text-sm line-clamp-3">
                    {assessment.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button asChild className="w-full group-hover:shadow-md transition-shadow" size="sm">
                    <Link to={assessment.path}>
                      {t('takeAssessment')} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 bg-muted/50 rounded-lg p-8"
        >
          <h2 className="text-2xl font-bold mb-4">Tại sao nên thực hiện các bài đánh giá của chúng tôi?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-2">Dựa trên khoa học</h3>
              <p className="text-muted-foreground">Tất cả các bài đánh giá đều dựa trên nghiên cứu tâm lý học đã được xác thực và phương pháp luận đã được chứng minh.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Kết quả cá nhân hóa</h3>
              <p className="text-muted-foreground">Nhận những hiểu biết chi tiết được điều chỉnh theo hồ sơ tính cách độc đáo và các mô hình hành vi của bạn.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Thông tin thực tế</h3>
              <p className="text-muted-foreground">Nhận các khuyến nghị thực tế để phát triển cá nhân, phát triển nghề nghiệp và xây dựng mối quan hệ.</p>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="font-semibold text-blue-800 mb-2">💡 Gợi ý sử dụng</h3>
            <ul className="text-sm text-blue-700 space-y-1">
              <li>• Hoàn thành các bài đánh giá trong môi trường yên tĩnh để có kết quả chính xác nhất</li>
              <li>• Trả lời một cách trung thực dựa trên cảm nhận thực tế, không phải những gì bạn nghĩ nên có</li>
              <li>• Có thể thực hiện lại sau 6 tháng để theo dõi sự phát triển của bản thân</li>
              <li>• Kết hợp kết quả từ nhiều bài đánh giá để có cái nhìn toàn diện về tính cách</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
