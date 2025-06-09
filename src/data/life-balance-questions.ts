// Life Balance Assessment - Đánh giá cân bằng cuộc sống
export interface LifeBalanceQuestion {
  id: number;
  question: string;
  area: string;
  options: {
    text: string;
    score: number;
  }[];
}

export interface LifeBalanceScores {
  work: number;
  health: number;
  relationships: number;
  personal_growth: number;
  finance: number;
  recreation: number;
  spirituality: number;
  family: number;
}

export const lifeBalanceQuestions: LifeBalanceQuestion[] = [
  // Work Area
  {
    id: 1,
    area: 'work',
    question: 'Bạn cảm thấy hài lòng với công việc hiện tại như thế nào?',
    options: [
      { text: 'Rất hài lòng - Công việc đem lại nhiều ý nghĩa', score: 5 },
      { text: 'Khá hài lòng - Có một số thách thức thú vị', score: 4 },
      { text: 'Bình thường - Làm để có thu nhập', score: 3 },
      { text: 'Không hài lòng - Có nhiều áp lực', score: 2 },
      { text: 'Rất không hài lòng - Muốn thay đổi', score: 1 },
    ],
  },
  {
    id: 2,
    area: 'work',
    question: 'Bạn có thể quản lý thời gian làm việc hiệu quả không?',
    options: [
      { text: 'Rất tốt - Luôn hoàn thành đúng hạn', score: 5 },
      { text: 'Tốt - Thỉnh thoảng bị trễ deadline', score: 4 },
      { text: 'Bình thường - Làm việc theo giờ', score: 3 },
      { text: 'Kém - Thường xuyên làm thêm giờ', score: 2 },
      { text: 'Rất kém - Luôn quá tải công việc', score: 1 },
    ],
  },
  {
    id: 3,
    area: 'work',
    question: 'Mối quan hệ với đồng nghiệp của bạn như thế nào?',
    options: [
      { text: 'Rất tốt - Có nhiều bạn thân trong công ty', score: 5 },
      { text: 'Tốt - Hòa đồng với mọi người', score: 4 },
      { text: 'Bình thường - Chỉ nói chuyện công việc', score: 3 },
      { text: 'Căng thẳng - Có xung đột nhỏ', score: 2 },
      { text: 'Rất căng thẳng - Thường xuyên có vấn đề', score: 1 },
    ],
  },

  // Health Area
  {
    id: 4,
    area: 'health',
    question: 'Bạn đánh giá sức khỏe thể chất của mình như thế nào?',
    options: [
      { text: 'Rất tốt - Luôn tràn đầy năng lượng', score: 5 },
      { text: 'Tốt - Hiếm khi bị ốm', score: 4 },
      { text: 'Bình thường - Sức khỏe ổn định', score: 3 },
      { text: 'Kém - Thường xuyên mệt mỏi', score: 2 },
      { text: 'Rất kém - Có nhiều vấn đề sức khỏe', score: 1 },
    ],
  },
  {
    id: 5,
    area: 'health',
    question: 'Bạn có thường xuyên tập thể dục không?',
    options: [
      { text: 'Rất thường xuyên - Hầu như mỗi ngày', score: 5 },
      { text: 'Thường xuyên - 3-4 lần/tuần', score: 4 },
      { text: 'Thỉnh thoảng - 1-2 lần/tuần', score: 3 },
      { text: 'Hiếm khi - Chỉ cuối tuần', score: 2 },
      { text: 'Không bao giờ - Không có thời gian', score: 1 },
    ],
  },
  {
    id: 6,
    area: 'health',
    question: 'Chế độ ăn uống của bạn như thế nào?',
    options: [
      { text: 'Rất tốt - Luôn ăn đủ chất và đúng giờ', score: 5 },
      { text: 'Tốt - Chú ý đến dinh dưỡng', score: 4 },
      { text: 'Bình thường - Ăn đủ no', score: 3 },
      { text: 'Kém - Thường ăn nhanh hoặc bỏ bữa', score: 2 },
      { text: 'Rất kém - Ăn uống thiếu khoa học', score: 1 },
    ],
  },

  // Relationships Area
  {
    id: 7,
    area: 'relationships',
    question: 'Mối quan hệ với bạn bè của bạn như thế nào?',
    options: [
      { text: 'Rất tốt - Có nhiều bạn thân sâu sắc', score: 5 },
      { text: 'Tốt - Có một số bạn gần gũi', score: 4 },
      { text: 'Bình thường - Có vài người bạn', score: 3 },
      { text: 'Kém - Ít liên lạc với bạn bè', score: 2 },
      { text: 'Rất kém - Cảm thấy cô đơn', score: 1 },
    ],
  },
  {
    id: 8,
    area: 'relationships',
    question: 'Bạn có dành đủ thời gian cho người thân không?',
    options: [
      { text: 'Có - Luôn ưu tiên gia đình', score: 5 },
      { text: 'Đủ - Cố gắng cân bằng', score: 4 },
      { text: 'Vừa phải - Thỉnh thoảng gặp mặt', score: 3 },
      { text: 'Ít - Bận rộn quá nhiều', score: 2 },
      { text: 'Không - Hiếm khi có thời gian', score: 1 },
    ],
  },
  {
    id: 9,
    area: 'relationships',
    question: 'Bạn có dễ dàng chia sẻ cảm xúc với người khác không?',
    options: [
      { text: 'Rất dễ - Luôn cởi mở', score: 5 },
      { text: 'Dễ - Với những người thân thiết', score: 4 },
      { text: 'Bình thường - Khi cần thiết', score: 3 },
      { text: 'Khó - Thường giữ trong lòng', score: 2 },
      { text: 'Rất khó - Không thích chia sẻ', score: 1 },
    ],
  },

  // Personal Growth Area
  {
    id: 10,
    area: 'personal_growth',
    question: 'Bạn có thường xuyên học hỏi điều mới không?',
    options: [
      { text: 'Rất thường xuyên - Luôn tìm kiếm kiến thức mới', score: 5 },
      { text: 'Thường xuyên - Đọc sách, khóa học', score: 4 },
      { text: 'Thỉnh thoảng - Khi có hứng thú', score: 3 },
      { text: 'Hiếm khi - Quá bận để học', score: 2 },
      { text: 'Không bao giờ - Không có nhu cầu', score: 1 },
    ],
  },
  {
    id: 11,
    area: 'personal_growth',
    question: 'Bạn có mục tiêu rõ ràng cho tương lai không?',
    options: [
      { text: 'Có - Kế hoạch chi tiết và thực hiện', score: 5 },
      { text: 'Có - Mục tiêu tổng quát', score: 4 },
      { text: 'Mơ hồ - Một số ý tưởng', score: 3 },
      { text: 'Không rõ - Sống theo hoàn cảnh', score: 2 },
      { text: 'Không có - Không nghĩ về tương lai', score: 1 },
    ],
  },
  {
    id: 12,
    area: 'personal_growth',
    question: 'Bạn có tự tin về khả năng của mình không?',
    options: [
      { text: 'Rất tự tin - Biết điểm mạnh của mình', score: 5 },
      { text: 'Tự tin - Hầu hết thời gian', score: 4 },
      { text: 'Bình thường - Tùy tình huống', score: 3 },
      { text: 'Thiếu tự tin - Thường nghi ngờ bản thân', score: 2 },
      { text: 'Rất thiếu tự tin - Luôn lo lắng về năng lực', score: 1 },
    ],
  },

  // Finance Area
  {
    id: 13,
    area: 'finance',
    question: 'Tình hình tài chính của bạn như thế nào?',
    options: [
      { text: 'Rất tốt - Có tiết kiệm và đầu tư', score: 5 },
      { text: 'Tốt - Đủ sống và có dư', score: 4 },
      { text: 'Ổn định - Vừa đủ chi tiêu', score: 3 },
      { text: 'Khó khăn - Thỉnh thoảng thiếu hụt', score: 2 },
      { text: 'Rất khó khăn - Thường xuyên nợ nần', score: 1 },
    ],
  },
  {
    id: 14,
    area: 'finance',
    question: 'Bạn có kế hoạch tài chính dài hạn không?',
    options: [
      { text: 'Có - Kế hoạch chi tiết cho 5-10 năm', score: 5 },
      { text: 'Có - Một số mục tiêu tài chính', score: 4 },
      { text: 'Mơ hồ - Chỉ nghĩ ngắn hạn', score: 3 },
      { text: 'Không - Sống theo tháng', score: 2 },
      { text: 'Không - Không quan tâm đến tương lai', score: 1 },
    ],
  },

  // Recreation Area
  {
    id: 15,
    area: 'recreation',
    question: 'Bạn có đủ thời gian để giải trí không?',
    options: [
      { text: 'Rất đủ - Luôn có thời gian cho sở thích', score: 5 },
      { text: 'Đủ - Cuối tuần thường rảnh', score: 4 },
      { text: 'Vừa phải - Thỉnh thoảng giải trí', score: 3 },
      { text: 'Ít - Hiếm khi có thời gian rảnh', score: 2 },
      { text: 'Không - Luôn bận rộn', score: 1 },
    ],
  },
  {
    id: 16,
    area: 'recreation',
    question: 'Các hoạt động giải trí của bạn có đa dạng không?',
    options: [
      { text: 'Rất đa dạng - Nhiều sở thích khác nhau', score: 5 },
      { text: 'Đa dạng - Một số hoạt động yêu thích', score: 4 },
      { text: 'Bình thường - Vài hoạt động quen thuộc', score: 3 },
      { text: 'Ít - Chỉ vài hoạt động đơn giản', score: 2 },
      { text: 'Không - Chỉ xem TV hoặc ngủ', score: 1 },
    ],
  },

  // Spirituality Area
  {
    id: 17,
    area: 'spirituality',
    question: 'Bạn có cảm thấy cuộc sống mình có ý nghĩa không?',
    options: [
      { text: 'Rất có ý nghĩa - Biết rõ mục đích sống', score: 5 },
      { text: 'Có ý nghĩa - Hầu hết thời gian', score: 4 },
      { text: 'Bình thường - Thỉnh thoảng tự hỏi', score: 3 },
      { text: 'Thiếu ý nghĩa - Thường cảm thấy trống rỗng', score: 2 },
      { text: 'Không có ý nghĩa - Sống qua ngày', score: 1 },
    ],
  },
  {
    id: 18,
    area: 'spirituality',
    question: 'Bạn có dành thời gian cho việc tĩnh tâm, thiền định không?',
    options: [
      { text: 'Thường xuyên - Là thói quen hàng ngày', score: 5 },
      { text: 'Thỉnh thoảng - Khi cần thư giãn', score: 4 },
      { text: 'Hiếm khi - Chỉ khi căng thẳng', score: 3 },
      { text: 'Rất hiếm - Không có thói quen', score: 2 },
      { text: 'Không bao giờ - Không tin vào điều đó', score: 1 },
    ],
  },

  // Family Area
  {
    id: 19,
    area: 'family',
    question: 'Mối quan hệ gia đình của bạn như thế nào?',
    options: [
      { text: 'Rất tốt - Gia đình hòa thuận, yêu thương', score: 5 },
      { text: 'Tốt - Ít xung đột, hỗ trợ nhau', score: 4 },
      { text: 'Bình thường - Quan hệ ổn định', score: 3 },
      { text: 'Căng thẳng - Thỉnh thoảng có vấn đề', score: 2 },
      { text: 'Rất căng thẳng - Thường xuyên xung đột', score: 1 },
    ],
  },
  {
    id: 20,
    area: 'family',
    question: 'Bạn có cảm thấy được gia đình hỗ trợ không?',
    options: [
      { text: 'Rất được hỗ trợ - Luôn có người thân bên cạnh', score: 5 },
      { text: 'Được hỗ trợ - Khi cần có thể nhờ cậy', score: 4 },
      { text: 'Bình thường - Tự giải quyết vấn đề', score: 3 },
      { text: 'Ít được hỗ trợ - Gia đình bận rộn', score: 2 },
      { text: 'Không được hỗ trợ - Cảm thấy cô đơn', score: 1 },
    ],
  },
];

// Function to calculate life balance scores
export function calculateLifeBalanceScores(answers: { questionId: number; selectedOption: number }[]): LifeBalanceScores {
  const scores: LifeBalanceScores = {
    work: 0,
    health: 0,
    relationships: 0,
    personal_growth: 0,
    finance: 0,
    recreation: 0,
    spirituality: 0,
    family: 0,
  };

  answers.forEach(answer => {
    const question = lifeBalanceQuestions.find(q => q.id === answer.questionId);
    if (question) {
      const option = question.options[answer.selectedOption];
      if (option) {
        scores[question.area as keyof LifeBalanceScores] += option.score;
      }
    }
  });

  // Normalize scores (each area has different number of questions)
  const questionCounts = {
    work: 3,
    health: 3,
    relationships: 3,
    personal_growth: 3,
    finance: 2,
    recreation: 2,
    spirituality: 2,
    family: 2,
  };

  Object.keys(scores).forEach(area => {
    const areaKey = area as keyof LifeBalanceScores;
    scores[areaKey] = (scores[areaKey] / questionCounts[areaKey]) * 20; // Scale to 100
  });

  return scores;
}

// Life balance interpretation
export const lifeBalanceInterpretation = {
  work: {
    high: 'Bạn có một công việc tuyệt vời và cảm thấy hoàn thành trong sự nghiệp.',
    medium: 'Công việc của bạn ổn định nhưng có thể cần một số cải thiện.',
    low: 'Bạn cần tìm cách cải thiện tình hình công việc hoặc thay đổi nghề nghiệp.',
  },
  health: {
    high: 'Sức khỏe của bạn rất tốt - hãy duy trì lối sống này.',
    medium: 'Sức khỏe của bạn ổn nhưng có thể cải thiện thêm.',
    low: 'Bạn cần chú ý hơn đến sức khỏe và thay đổi lối sống.',
  },
  relationships: {
    high: 'Bạn có mối quan hệ xã hội phong phú và ý nghĩa.',
    medium: 'Mối quan hệ của bạn ổn định nhưng có thể phát triển thêm.',
    low: 'Bạn cần đầu tư thời gian để xây dựng mối quan hệ tốt hơn.',
  },
  personal_growth: {
    high: 'Bạn đang phát triển bản thân rất tích cực.',
    medium: 'Bạn có quan tâm đến phát triển bản thân nhưng có thể làm nhiều hơn.',
    low: 'Bạn cần dành thời gian để học hỏi và phát triển bản thân.',
  },
  finance: {
    high: 'Tình hình tài chính của bạn rất tốt và có kế hoạch rõ ràng.',
    medium: 'Tài chính của bạn ổn định nhưng cần kế hoạch dài hạn.',
    low: 'Bạn cần cải thiện quản lý tài chính và lập kế hoạch.',
  },
  recreation: {
    high: 'Bạn biết cách cân bằng giữa làm việc và giải trí.',
    medium: 'Bạn có thời gian giải trí nhưng có thể đa dạng hóa thêm.',
    low: 'Bạn cần dành nhiều thời gian hơn cho việc giải trí và thư giãn.',
  },
  spirituality: {
    high: 'Bạn có cuộc sống tâm linh phong phú và ý nghĩa.',
    medium: 'Bạn có quan tâm đến ý nghĩa cuộc sống nhưng có thể khám phá thêm.',
    low: 'Bạn cần tìm hiểu về ý nghĩa cuộc sống và các giá trị tinh thần.',
  },
  family: {
    high: 'Mối quan hệ gia đình của bạn rất tốt và hỗ trợ.',
    medium: 'Gia đình bạn ổn định nhưng có thể cải thiện giao tiếp.',
    low: 'Bạn cần đầu tư thời gian và nỗ lực để cải thiện mối quan hệ gia đình.',
  },
};
