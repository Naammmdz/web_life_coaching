// Emotional Intelligence Assessment - Đánh giá trí tuệ cảm xúc
export interface EQQuestion {
  id: number;
  question: string;
  domain: string;
  options: {
    text: string;
    score: number;
  }[];
}

export interface EQScores {
  self_awareness: number;
  self_regulation: number;
  motivation: number;
  empathy: number;
  social_skills: number;
}

export const eqQuestions: EQQuestion[] = [
  // Self-Awareness (Nhận thức bản thân)
  {
    id: 1,
    domain: 'self_awareness',
    question: 'Bạn có thể nhận biết cảm xúc của mình khi chúng xuất hiện không?',
    options: [
      { text: 'Luôn luôn - Tôi rất nhạy cảm với cảm xúc của mình', score: 5 },
      { text: 'Thường xuyên - Hầu hết thời gian tôi biết mình đang cảm thấy gì', score: 4 },
      { text: 'Thỉnh thoảng - Đôi khi tôi không chắc chắn', score: 3 },
      { text: 'Hiếm khi - Tôi thường không để ý đến cảm xúc', score: 2 },
      { text: 'Không bao giờ - Tôi không hiểu cảm xúc của mình', score: 1 },
    ],
  },
  {
    id: 2,
    domain: 'self_awareness',
    question: 'Bạn có biết điểm mạnh và điểm yếu của mình không?',
    options: [
      { text: 'Rất rõ ràng - Tôi hiểu rõ về khả năng của mình', score: 5 },
      { text: 'Khá rõ - Tôi biết hầu hết điểm mạnh/yếu của mình', score: 4 },
      { text: 'Một phần - Tôi biết một số nhưng chưa đầy đủ', score: 3 },
      { text: 'Mơ hồ - Tôi không chắc về khả năng của mình', score: 2 },
      { text: 'Không biết - Tôi chưa bao giờ nghĩ về điều này', score: 1 },
    ],
  },
  {
    id: 3,
    domain: 'self_awareness',
    question: 'Khi ai đó phê bình bạn, bạn phản ứng như thế nào?',
    options: [
      { text: 'Lắng nghe và suy ngẫm một cách khách quan', score: 5 },
      { text: 'Cảm thấy không thoải mái nhưng cố gắng học hỏi', score: 4 },
      { text: 'Phản ứng trộn lẫn - tùy tình huống', score: 3 },
      { text: 'Thường cảm thấy tổn thương hoặc tức giận', score: 2 },
      { text: 'Rất khó chấp nhận bất kỳ lời phê bình nào', score: 1 },
    ],
  },

  // Self-Regulation (Tự điều chỉnh)
  {
    id: 4,
    domain: 'self_regulation',
    question: 'Khi bạn tức giận, bạn kiểm soát cảm xúc như thế nào?',
    options: [
      { text: 'Rất tốt - Tôi có thể bình tĩnh và suy nghĩ rõ ràng', score: 5 },
      { text: 'Tốt - Tôi cần một chút thời gian nhưng có thể kiểm soát', score: 4 },
      { text: 'Bình thường - Đôi khi kiểm soát được, đôi khi không', score: 3 },
      { text: 'Khó - Tôi thường bộc phát khi tức giận', score: 2 },
      { text: 'Rất khó - Tôi không thể kiểm soát khi tức giận', score: 1 },
    ],
  },
  {
    id: 5,
    domain: 'self_regulation',
    question: 'Bạn có thể thích nghi với thay đổi một cách dễ dàng không?',
    options: [
      { text: 'Rất dễ - Tôi thích thử thách và thay đổi', score: 5 },
      { text: 'Dễ - Tôi có thể thích nghi sau một thời gian', score: 4 },
      { text: 'Bình thường - Tùy thuộc vào loại thay đổi', score: 3 },
      { text: 'Khó - Tôi cần nhiều thời gian để thích nghi', score: 2 },
      { text: 'Rất khó - Tôi không thích thay đổi', score: 1 },
    ],
  },
  {
    id: 6,
    domain: 'self_regulation',
    question: 'Khi gặp áp lực, bạn xử lý như thế nào?',
    options: [
      { text: 'Rất tốt - Tôi làm việc hiệu quả hơn dưới áp lực', score: 5 },
      { text: 'Tốt - Tôi có thể duy trì hiệu suất', score: 4 },
      { text: 'Bình thường - Đôi khi tốt, đôi khi không', score: 3 },
      { text: 'Khó khăn - Áp lực làm tôi hoảng loạn', score: 2 },
      { text: 'Rất khó - Tôi không thể làm việc dưới áp lực', score: 1 },
    ],
  },

  // Motivation (Động lực)
  {
    id: 7,
    domain: 'motivation',
    question: 'Bạn có đủ động lực để theo đuổi mục tiêu dài hạn không?',
    options: [
      { text: 'Rất có - Tôi kiên trì đến cùng với mọi mục tiêu', score: 5 },
      { text: 'Có - Tôi thường hoàn thành những gì đã bắt đầu', score: 4 },
      { text: 'Thỉnh thoảng - Tùy thuộc vào mức độ quan trọng', score: 3 },
      { text: 'Ít - Tôi dễ bỏ cuộc khi gặp khó khăn', score: 2 },
      { text: 'Không - Tôi hiếm khi hoàn thành mục tiêu dài hạn', score: 1 },
    ],
  },
  {
    id: 8,
    domain: 'motivation',
    question: 'Bạn có tìm kiếm cơ hội để cải thiện và phát triển không?',
    options: [
      { text: 'Luôn luôn - Tôi không ngừng học hỏi và phát triển', score: 5 },
      { text: 'Thường xuyên - Tôi tích cực tìm kiếm cơ hội mới', score: 4 },
      { text: 'Thỉnh thoảng - Khi có cơ hội thuận lợi', score: 3 },
      { text: 'Hiếm khi - Tôi hài lòng với hiện tại', score: 2 },
      { text: 'Không bao giờ - Tôi không quan tâm đến phát triển', score: 1 },
    ],
  },
  {
    id: 9,
    domain: 'motivation',
    question: 'Khi thất bại, bạn phản ứng như thế nào?',
    options: [
      { text: 'Học hỏi và thử lại với quyết tâm cao hơn', score: 5 },
      { text: 'Phân tích nguyên nhân và điều chỉnh', score: 4 },
      { text: 'Buồn bã một thời gian rồi tiếp tục', score: 3 },
      { text: 'Mất động lực và cần thời gian phục hồi', score: 2 },
      { text: 'Bỏ cuộc và tránh thử lại', score: 1 },
    ],
  },

  // Empathy (Đồng cảm)
  {
    id: 10,
    domain: 'empathy',
    question: 'Bạn có thể cảm nhận được cảm xúc của người khác không?',
    options: [
      { text: 'Rất nhạy cảm - Tôi dễ dàng hiểu cảm xúc người khác', score: 5 },
      { text: 'Nhạy cảm - Tôi thường biết người khác đang cảm thấy gì', score: 4 },
      { text: 'Bình thường - Đôi khi tôi hiểu, đôi khi không', score: 3 },
      { text: 'Không nhạy cảm - Tôi khó hiểu cảm xúc người khác', score: 2 },
      { text: 'Rất không nhạy cảm - Tôi không quan tâm đến cảm xúc người khác', score: 1 },
    ],
  },
  {
    id: 11,
    domain: 'empathy',
    question: 'Khi ai đó chia sẻ vấn đề với bạn, bạn thường làm gì?',
    options: [
      { text: 'Lắng nghe tích cực và cố gắng hiểu cảm xúc của họ', score: 5 },
      { text: 'Lắng nghe và đưa ra lời khuyên phù hợp', score: 4 },
      { text: 'Cố gắng giúp đỡ theo cách mình biết', score: 3 },
      { text: 'Lắng nghe nhưng không biết phải làm gì', score: 2 },
      { text: 'Cảm thấy không thoải mái và muốn tránh', score: 1 },
    ],
  },
  {
    id: 12,
    domain: 'empathy',
    question: 'Bạn có chú ý đến ngôn ngữ cơ thể của người khác không?',
    options: [
      { text: 'Rất chú ý - Tôi đọc được nhiều tín hiệu phi ngôn ngữ', score: 5 },
      { text: 'Chú ý - Tôi thường để ý đến cử chỉ, nét mặt', score: 4 },
      { text: 'Thỉnh thoảng - Khi tín hiệu rõ ràng', score: 3 },
      { text: 'Ít chú ý - Tôi chủ yếu nghe lời nói', score: 2 },
      { text: 'Không chú ý - Tôi không để ý đến điều này', score: 1 },
    ],
  },

  // Social Skills (Kỹ năng xã hội)
  {
    id: 13,
    domain: 'social_skills',
    question: 'Bạn có dễ dàng giao tiếp với người lạ không?',
    options: [
      { text: 'Rất dễ - Tôi thoải mái với bất kỳ ai', score: 5 },
      { text: 'Dễ - Tôi có thể bắt chuyện với hầu hết mọi người', score: 4 },
      { text: 'Bình thường - Tùy thuộc vào tình huống', score: 3 },
      { text: 'Khó - Tôi cần thời gian để "làm quen"', score: 2 },
      { text: 'Rất khó - Tôi ngại giao tiếp với người lạ', score: 1 },
    ],
  },
  {
    id: 14,
    domain: 'social_skills',
    question: 'Khi có xung đột, bạn xử lý như thế nào?',
    options: [
      { text: 'Tìm cách giải quyết win-win cho tất cả', score: 5 },
      { text: 'Đối thoại mở để hiểu quan điểm của nhau', score: 4 },
      { text: 'Cố gắng tránh và hy vọng tự giải quyết', score: 3 },
      { text: 'Cảm thấy căng thẳng và không biết làm gì', score: 2 },
      { text: 'Tránh hoàn toàn hoặc phản ứng tiêu cực', score: 1 },
    ],
  },
  {
    id: 15,
    domain: 'social_skills',
    question: 'Bạn có thể thuyết phục người khác không?',
    options: [
      { text: 'Rất tốt - Tôi có thể ảnh hưởng tích cực đến người khác', score: 5 },
      { text: 'Tốt - Tôi thường thuyết phục được khi cần', score: 4 },
      { text: 'Bình thường - Đôi khi được, đôi khi không', score: 3 },
      { text: 'Khó - Tôi không giỏi thuyết phục', score: 2 },
      { text: 'Rất khó - Tôi không biết cách ảnh hưởng đến người khác', score: 1 },
    ],
  },
  {
    id: 16,
    domain: 'social_skills',
    question: 'Bạn có dễ dàng xây dựng mối quan hệ tốt không?',
    options: [
      { text: 'Rất dễ - Tôi nhanh chóng tạo được mối quan hệ tốt', score: 5 },
      { text: 'Dễ - Tôi có nhiều mối quan hệ tích cực', score: 4 },
      { text: 'Bình thường - Tôi có một số bạn bè', score: 3 },
      { text: 'Khó - Tôi có ít mối quan hệ sâu sắc', score: 2 },
      { text: 'Rất khó - Tôi gặp khó khăn trong việc duy trì quan hệ', score: 1 },
    ],
  },
  {
    id: 17,
    domain: 'social_skills',
    question: 'Trong nhóm, bạn thường đóng vai trò gì?',
    options: [
      { text: 'Lãnh đạo hoặc người điều phối', score: 5 },
      { text: 'Người đưa ra ý tưởng và động viên', score: 4 },
      { text: 'Thành viên tích cực tham gia', score: 3 },
      { text: 'Người thực hiện theo chỉ dẫn', score: 2 },
      { text: 'Người ít tham gia hoặc tránh trách nhiệm', score: 1 },
    ],
  },

  // Additional questions for comprehensive assessment
  {
    id: 18,
    domain: 'self_awareness',
    question: 'Bạn có thường xuyên tự phản ánh về hành động của mình không?',
    options: [
      { text: 'Rất thường xuyên - Tôi luôn đánh giá lại bản thân', score: 5 },
      { text: 'Thường xuyên - Tôi suy ngẫm về ngày hôm đó', score: 4 },
      { text: 'Thỉnh thoảng - Khi có sự kiện quan trọng', score: 3 },
      { text: 'Hiếm khi - Tôi không có thói quen này', score: 2 },
      { text: 'Không bao giờ - Tôi sống theo bản năng', score: 1 },
    ],
  },
  {
    id: 19,
    domain: 'self_regulation',
    question: 'Bạn có thể kiềm chế không nói ra điều gì đó khi tức giận không?',
    options: [
      { text: 'Luôn luôn - Tôi không bao giờ nói trong lúc tức giận', score: 5 },
      { text: 'Thường xuyên - Tôi hiếm khi hối hận vì lời nói', score: 4 },
      { text: 'Thỉnh thoảng - Đôi khi tôi nói những điều không nên', score: 3 },
      { text: 'Hiếm khi - Tôi thường nói những gì mình nghĩ', score: 2 },
      { text: 'Không bao giờ - Tôi luôn nói ra khi tức giận', score: 1 },
    ],
  },
  {
    id: 20,
    domain: 'motivation',
    question: 'Bạn có thể duy trì động lực ngay cả khi không có phần thưởng ngay lập tức không?',
    options: [
      { text: 'Hoàn toàn - Tôi tự tạo động lực từ bên trong', score: 5 },
      { text: 'Thường xuyên - Tôi hiểu giá trị của việc chờ đợi', score: 4 },
      { text: 'Thỉnh thoảng - Tùy thuộc vào tầm quan trọng', score: 3 },
      { text: 'Hiếm khi - Tôi cần thấy kết quả ngay', score: 2 },
      { text: 'Không bao giờ - Tôi cần động lực bên ngoài', score: 1 },
    ],
  },
];

// Function to calculate EQ scores
export function calculateEQScores(answers: { questionId: number; selectedOption: number }[]): EQScores {
  const scores: EQScores = {
    self_awareness: 0,
    self_regulation: 0,
    motivation: 0,
    empathy: 0,
    social_skills: 0,
  };

  answers.forEach(answer => {
    const question = eqQuestions.find(q => q.id === answer.questionId);
    if (question) {
      const option = question.options[answer.selectedOption];
      if (option) {
        scores[question.domain as keyof EQScores] += option.score;
      }
    }
  });

  // Normalize scores based on number of questions per domain
  const questionCounts = {
    self_awareness: 4,
    self_regulation: 4,
    motivation: 4,
    empathy: 3,
    social_skills: 5,
  };

  Object.keys(scores).forEach(domain => {
    const domainKey = domain as keyof EQScores;
    scores[domainKey] = (scores[domainKey] / questionCounts[domainKey]) * 20; // Scale to 100
  });

  return scores;
}

// EQ interpretation
export const eqInterpretation = {
  self_awareness: {
    high: 'Bạn có khả năng nhận thức bản thân rất tốt. Bạn hiểu rõ cảm xúc, điểm mạnh và điểm yếu của mình.',
    medium: 'Bạn có nhận thức bản thân khá tốt nhưng vẫn có thể phát triển thêm khả năng này.',
    low: 'Bạn cần cải thiện khả năng nhận thức bản thân để hiểu rõ hơn về cảm xúc và bản thân mình.',
  },
  self_regulation: {
    high: 'Bạn có khả năng tự điều chỉnh cảm xúc rất tốt, có thể kiểm soát phản ứng trong mọi tình huống.',
    medium: 'Bạn khá tốt trong việc điều chỉnh cảm xúc nhưng đôi khi vẫn bị cảm xúc chi phối.',
    low: 'Bạn cần học cách kiểm soát cảm xúc tốt hơn để không bị chúng ảnh hưởng đến quyết định.',
  },
  motivation: {
    high: 'Bạn có động lực nội tại mạnh mẽ, kiên trì theo đuổi mục tiêu và không ngại thử thách.',
    medium: 'Bạn có động lực tốt nhưng đôi khi cần nguồn động viên từ bên ngoài.',
    low: 'Bạn cần tìm cách tăng cường động lực bên trong để đạt được các mục tiêu quan trọng.',
  },
  empathy: {
    high: 'Bạn có khả năng đồng cảm xuất sắc, hiểu được cảm xúc và quan điểm của người khác.',
    medium: 'Bạn khá nhạy cảm với cảm xúc người khác nhưng có thể phát triển thêm khả năng này.',
    low: 'Bạn cần chú ý hơn đến cảm xúc và quan điểm của người khác để cải thiện mối quan hệ.',
  },
  social_skills: {
    high: 'Bạn có kỹ năng xã hội rất tốt, dễ dàng giao tiếp và xây dựng mối quan hệ tích cực.',
    medium: 'Bạn có kỹ năng xã hội ổn nhưng có thể cải thiện để giao tiếp hiệu quả hơn.',
    low: 'Bạn cần phát triển kỹ năng giao tiếp và xây dựng mối quan hệ để thành công hơn trong cuộc sống.',
  },
};
