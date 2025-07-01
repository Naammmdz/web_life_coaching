export const translations = {
  en: {
    // Header
    home: "Home",
    assessments: "Assessments",
    about: "About",
    contact: "Contact",
    login: "Login",
    startFreeAssessment: "Start Free Assessment",
    
    // Hero Section
    discoverPotential: "🎯 Discover Your True Potential",
    unlockYour: "Unlock Your",
    potential: "Potential",
    heroDescription: "Take scientifically-backed personality assessments and work with expert coaches to discover your strengths, overcome challenges, and achieve your life goals.",
    startYourAssessment: "Start Your Assessment",
    learnMore: "Learn More",
    
    // Stats
    completedAssessments: "10,000+",
    completedAssessmentsLabel: "Completed Assessments",
    successRate: "98%",
    successRateLabel: "Success Rate",
    expertCoaches: "500+",
    expertCoachesLabel: "Expert Coaches",
    countries: "50+",
    countriesLabel: "Countries",
    
    // Features
    scienceBasedAssessments: "Science-Based Assessments",
    scienceBasedDescription: "MBTI, Big Five, DISC, and Enneagram tests backed by psychological research.",
    personalizedCoaching: "Personalized Coaching",
    personalizedDescription: "One-on-one sessions tailored to your unique personality and goals.",
    expertCoachesTitle: "Expert Coaches",
    expertCoachesDescription: "Certified life coaches with years of experience in personal development.",
    
    // Common Assessment Terms
    mbtiAssessment: "MBTI Assessment",
    mbtiDescription: "Discover your personality type with the Myers-Briggs Type Indicator",
    bigFivePersonality: "Big Five Personality",
    bigFiveDescription: "Comprehensive analysis of the five major personality dimensions",
    discProfile: "DISC Profile",
    discDescription: "Understand your behavioral style and workplace preferences",
    enneagram: "Enneagram",
    enneagramDescription: "Explore your core motivations and growth opportunities",
    
    // Common
    minutes: "minutes",
    duration: "Duration",
    keyInsights: "Key Insights",
    takeAssessment: "Take Assessment",
    
    // Features Section
    whyChooseUs: "Why Choose LifeCoach Pro?",
    featuresDescription: "We combine cutting-edge psychology with personalized coaching to help you unlock your full potential.",
    
    // Assessments Section
    ourAssessments: "Our Assessments",
    assessmentsDescription: "Choose from our scientifically-validated personality assessments"
  },
  vi: {
    // Header
    home: "Trang chủ",
    assessments: "Đánh giá",
    about: "Giới thiệu",
    contact: "Liên hệ",
    login: "Đăng nhập",
    startFreeAssessment: "Bắt đầu đánh giá miễn phí",
    
    // Hero Section
    discoverPotential: "🎯 Khám phá tiềm năng thực sự của bạn",
    unlockYour: "Mở khóa",
    potential: "Tiềm năng",
    heroDescription: "Thực hiện các bài đánh giá tính cách dựa trên khoa học và làm việc với các chuyên gia huấn luyện để khám phá điểm mạnh, vượt qua thách thức và đạt được mục tiêu cuộc sống.",
    startYourAssessment: "Bắt đầu đánh giá",
    learnMore: "Tìm hiểu thêm",
    
    // Stats
    completedAssessments: "10,000+",
    completedAssessmentsLabel: "Bài đánh giá hoàn thành",
    successRate: "98%",
    successRateLabel: "Tỷ lệ thành công",
    expertCoaches: "500+",
    expertCoachesLabel: "Chuyên gia huấn luyện",
    countries: "50+",
    countriesLabel: "Quốc gia",
    
    // Features
    scienceBasedAssessments: "Đánh giá dựa trên khoa học",
    scienceBasedDescription: "Các bài kiểm tra MBTI, Big Five, DISC và Enneagram được hỗ trợ bởi nghiên cứu tâm lý học.",
    personalizedCoaching: "Huấn luyện cá nhân hóa",
    personalizedDescription: "Các buổi một-đối-một được thiết kế riêng cho tính cách và mục tiêu độc đáo của bạn.",
    expertCoachesTitle: "Chuyên gia huấn luyện",
    expertCoachesDescription: "Các huấn luyện viên cuộc sống được chứng nhận với nhiều năm kinh nghiệm trong phát triển cá nhân.",
    
    // Common Assessment Terms
    mbtiAssessment: "Đánh giá MBTI",
    mbtiDescription: "Khám phá loại tính cách của bạn với Chỉ số Kiểu Tính cách Myers-Briggs",
    bigFivePersonality: "Tính cách Big Five",
    bigFiveDescription: "Phân tích toàn diện năm chiều tính cách chính",
    discProfile: "Hồ sơ DISC",
    discDescription: "Hiểu phong cách hành vi và sở thích nơi làm việc của bạn",
    enneagram: "Enneagram",
    enneagramDescription: "Khám phá động lực cốt lõi và cơ hội phát triển của bạn",
    
    // Common
    minutes: "phút",
    duration: "Thời gian",
    keyInsights: "Thông tin chính",
    takeAssessment: "Thực hiện đánh giá",
    
    // Features Section
    whyChooseUs: "Tại sao chọn LifeCoach Pro?",
    featuresDescription: "Chúng tôi kết hợp tâm lý học tiên tiến với huấn luyện cá nhân hóa để giúp bạn mở khóa toàn bộ tiềm năng.",
    
    // Assessments Section
    ourAssessments: "Các bài đánh giá của chúng tôi",
    assessmentsDescription: "Chọn từ các bài đánh giá tính cách được xác thực khoa học"
  }
};

export type Language = keyof typeof translations;

export const getTranslation = (lang: Language, key: string): string => {
  const keys = key.split('.');
  let value: any = translations[lang];

  for (const k of keys) {
    value = value?.[k];
    if (value === undefined) {
      return key; // Key not found, return the key itself
    }
  }

  return value || key;
};
