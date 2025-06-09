// Sample results data for testing assessment results pages

import { 
  LifeBalanceResult, 
  EQResult, 
  LeadershipResult,
  ValuesResult 
} from '@/types';

export const sampleLifeBalanceResult: LifeBalanceResult = {
  userId: 'test-user',
  testType: 'life-balance',
  completedAt: new Date().toISOString(),
  scores: {
    work: 75,
    health: 60,
    relationships: 85,
    personal_growth: 70,
    finance: 55,
    recreation: 45,
    spirituality: 65,
    family: 90
  },
  overallBalance: 68,
  strengths: [
    'Mối quan hệ gia đình rất tốt',
    'Cân bằng tốt trong công việc',
    'Quan tâm đến sự phát triển bản thân'
  ],
  areasForImprovement: [
    'Cần cải thiện thời gian giải trí',
    'Tăng cường quản lý tài chính',
    'Chú ý hơn đến sức khỏe thể chất'
  ],
  recommendations: [
    'Dành ít nhất 1 giờ mỗi ngày cho hoạt động giải trí',
    'Lập kế hoạch tài chính chi tiết',
    'Tham gia các hoạt động thể thao đều đặn'
  ],
  interpretation: 'Bạn có sự cân bằng tương đối tốt trong cuộc sống với điểm mạnh ở mối quan hệ gia đình và công việc. Tuy nhiên, cần chú ý hơn đến việc giải trí và quản lý tài chính để đạt được sự cân bằng hoàn hảo hơn.'
};

export const sampleEQResult: EQResult = {
  userId: 'test-user',
  testType: 'eq',
  completedAt: new Date().toISOString(),
  scores: {
    self_awareness: 78,
    self_regulation: 72,
    motivation: 85,
    empathy: 68,
    social_skills: 75
  },
  overallEQ: 76,
  strengths: [
    'Động lực cao trong công việc',
    'Nhận thức bản thân tốt',
    'Kỹ năng xã hội ổn định'
  ],
  developmentAreas: [
    'Cải thiện khả năng đồng cảm',
    'Tăng cường tự điều chỉnh cảm xúc'
  ],
  actionPlan: [
    'Lắng nghe tích cực hơn trong các cuộc trò chuyện',
    'Thực hành thiền định để kiểm soát cảm xúc',
    'Tham gia các hoạt động nhóm để phát triển kỹ năng xã hội'
  ],
  interpretation: 'Bạn có chỉ số EQ khá tốt với điểm mạnh là động lực và nhận thức bản thân. Cần tập trung phát triển thêm khả năng đồng cảm và kỹ năng điều chỉnh cảm xúc.',
  recommendations: [
    'Thường xuyên tự đánh giá cảm xúc của mình',
    'Học cách đặt mình vào vị trí người khác',
    'Phát triển các kỹ thuật quản lý căng thẳng'
  ]
};

export const sampleLeadershipResult: LeadershipResult = {
  userId: 'test-user',
  testType: 'leadership',
  completedAt: new Date().toISOString(),
  scores: {
    autocratic: 45,
    democratic: 85,
    transformational: 78,
    servant: 72,
    situational: 65,
    charismatic: 58
  },
  primaryStyle: 'democratic',
  secondaryStyle: 'transformational',
  strengths: [
    'Khuyến khích sự tham gia của nhóm',
    'Lắng nghe ý kiến đa chiều',
    'Xây dựng sự đồng thuận'
  ],
  challenges: [
    'Có thể chậm trong ra quyết định',
    'Khó khăn khi cần hành động nhanh',
    'Đôi khi thiếu quyết đoán'
  ],
  developmentTips: [
    'Học cách cân bằng giữa tham vấn và quyết định',
    'Phát triển kỹ năng ra quyết định nhanh khi cần',
    'Tăng cường sự tự tin trong lãnh đạo'
  ],
  interpretation: 'Bạn có phong cách lãnh đạo dân chủ mạnh mẽ với khả năng truyền cảm hứng tốt. Đây là sự kết hợp lý tưởng để xây dựng đội nhóm hiệu quả và bền vững.',
  recommendations: [
    'Tiếp tục phát huy khả năng lắng nghe và tham vấn',
    'Học cách đưa ra quyết định nhanh chóng khi cần thiết',
    'Phát triển tầm nhìn dài hạn cho nhóm'
  ]
};

export const sampleValuesResult: ValuesResult = {
  userId: 'test-user',
  testType: 'values',
  completedAt: new Date().toISOString(),
  scores: {
    family: 95,
    career: 80,
    health: 75,
    relationships: 85,
    personal_growth: 88,
    financial_security: 65,
    creativity: 70,
    adventure: 55,
    spirituality: 60,
    service: 78
  },
  topValues: [
    {
      value: 'family',
      score: 95,
      interpretation: 'Gia đình là ưu tiên hàng đầu trong cuộc sống của bạn'
    },
    {
      value: 'personal_growth',
      score: 88,
      interpretation: 'Bạn rất coi trọng việc phát triển bản thân'
    },
    {
      value: 'relationships',
      score: 85,
      interpretation: 'Mối quan hệ interpersonal quan trọng đối với bạn'
    },
    {
      value: 'career',
      score: 80,
      interpretation: 'Sự nghiệp đóng vai trò quan trọng trong cuộc sống'
    },
    {
      value: 'service',
      score: 78,
      interpretation: 'Bạn có khuynh hướng phục vụ và giúp đỡ người khác'
    }
  ],
  recommendations: [
    'Tiếp tục duy trì sự cân bằng giữa gia đình và sự nghiệp',
    'Tìm kiếm cơ hội phát triển bản thân thông qua học tập',
    'Xây dựng và duy trì các mối quan hệ chất lượng',
    'Tìm cách kết hợp công việc với việc giúp đỡ cộng đồng'
  ]
};
