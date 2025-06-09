
// Values Assessment - Đánh giá giá trị cá nhân
export interface ValuesQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    value: string;
    score: number;
  }[];
}

export interface ValuesScores {
  family: number;
  career: number;
  health: number;
  relationships: number;
  personal_growth: number;
  financial_security: number;
  creativity: number;
  adventure: number;
  spirituality: number;
  service: number;
}

export const valuesQuestions: ValuesQuestion[] = [
  {
    id: 1,
    question: 'Điều gì quan trọng nhất với bạn trong cuộc sống?',
    options: [
      { text: 'Có thời gian chất lượng với gia đình', value: 'family', score: 5 },
      { text: 'Thành công trong sự nghiệp', value: 'career', score: 5 },
      { text: 'Sức khỏe tốt và năng lượng', value: 'health', score: 5 },
      { text: 'Mối quan hệ sâu sắc với bạn bè', value: 'relationships', score: 5 },
    ],
  },
  {
    id: 2,
    question: 'Khi có thời gian rảnh, bạn thích làm gì nhất?',
    options: [
      { text: 'Tham gia hoạt động phiêu lưu mới', value: 'adventure', score: 4 },
      { text: 'Sáng tạo nghệ thuật hoặc viết lách', value: 'creativity', score: 4 },
      { text: 'Học hỏi kỹ năng mới', value: 'personal_growth', score: 4 },
      { text: 'Thiền định hoặc tĩnh tâm', value: 'spirituality', score: 4 },
    ],
  },
  {
    id: 3,
    question: 'Thành công với bạn có nghĩa là gì?',
    options: [
      { text: 'Có đủ tiền để an toàn tài chính', value: 'financial_security', score: 5 },
      { text: 'Giúp đỡ được nhiều người khác', value: 'service', score: 5 },
      { text: 'Đạt được mục tiêu nghề nghiệp', value: 'career', score: 4 },
      { text: 'Có cuộc sống gia đình hạnh phúc', value: 'family', score: 4 },
    ],
  },
  {
    id: 4,
    question: 'Bạn sẵn sàng hy sinh điều gì để theo đuổi ước mơ?',
    options: [
      { text: 'Thời gian nghỉ ngơi để tập trung phát triển', value: 'personal_growth', score: 3 },
      { text: 'Sự thoải mái để khám phá điều mới', value: 'adventure', score: 3 },
      { text: 'Thu nhập hiện tại để theo đuổi đam mê', value: 'creativity', score: 3 },
      { text: 'Không muốn hy sinh gì cả', value: 'financial_security', score: 2 },
    ],
  },
  {
    id: 5,
    question: 'Động lực lớn nhất thúc đẩy bạn mỗi ngày là gì?',
    options: [
      { text: 'Mong muốn tạo ra tác động tích cực', value: 'service', score: 5 },
      { text: 'Khát khao trở thành phiên bản tốt nhất', value: 'personal_growth', score: 4 },
      { text: 'Trách nhiệm với gia đình', value: 'family', score: 4 },
      { text: 'Đam mê công việc', value: 'career', score: 3 },
    ],
  },
  {
    id: 6,
    question: 'Khi đưa ra quyết định quan trọng, yếu tố nào bạn cân nhắc đầu tiên?',
    options: [
      { text: 'Tác động đến sức khỏe và hạnh phúc', value: 'health', score: 4 },
      { text: 'Ảnh hưởng đến người thân', value: 'relationships', score: 4 },
      { text: 'Lợi ích tài chính dài hạn', value: 'financial_security', score: 3 },
      { text: 'Cơ hội học hỏi và phát triển', value: 'personal_growth', score: 3 },
    ],
  },
  {
    id: 7,
    question: 'Môi trường làm việc lý tưởng của bạn là gì?',
    options: [
      { text: 'Không gian sáng tạo và tự do', value: 'creativity', score: 5 },
      { text: 'Nơi có thể giúp đỡ người khác', value: 'service', score: 4 },
      { text: 'Môi trường thử thách và năng động', value: 'adventure', score: 3 },
      { text: 'Nơi ổn định và bảo đảm', value: 'financial_security', score: 3 },
    ],
  },
  {
    id: 8,
    question: 'Điều gì làm bạn cảm thấy hoàn thành nhất?',
    options: [
      { text: 'Tạo ra điều gì đó mới và độc đáo', value: 'creativity', score: 5 },
      { text: 'Đạt được mục tiêu cá nhân', value: 'personal_growth', score: 4 },
      { text: 'Giúp người khác thành công', value: 'service', score: 4 },
      { text: 'Duy trì sức khỏe tốt', value: 'health', score: 3 },
    ],
  },
  {
    id: 9,
    question: 'Nếu có 1 triệu đô la, bạn sẽ làm gì đầu tiên?',
    options: [
      { text: 'Đầu tư cho tương lai gia đình', value: 'family', score: 5 },
      { text: 'Khởi nghiệp hoặc đầu tư kinh doanh', value: 'career', score: 4 },
      { text: 'Du lịch vòng quanh thế giới', value: 'adventure', score: 4 },
      { text: 'Ủng hộ các tổ chức từ thiện', value: 'service', score: 3 },
    ],
  },
  {
    id: 10,
    question: 'Khi căng thẳng, bạn tìm đến điều gì để thư giãn?',
    options: [
      { text: 'Thiền định hoặc tâm linh', value: 'spirituality', score: 5 },
      { text: 'Tập thể dục hoặc yoga', value: 'health', score: 4 },
      { text: 'Trò chuyện với bạn bè', value: 'relationships', score: 3 },
      { text: 'Làm việc sáng tạo', value: 'creativity', score: 3 },
    ],
  },
  {
    id: 11,
    question: 'Bạn muốn được nhớ đến vì điều gì?',
    options: [
      { text: 'Tác động tích cực đến cộng đồng', value: 'service', score: 5 },
      { text: 'Là người gia đình tuyệt vời', value: 'family', score: 4 },
      { text: 'Thành tựu trong lĩnh vực chuyên môn', value: 'career', score: 3 },
      { text: 'Sự sáng tạo và nghệ thuật', value: 'creativity', score: 3 },
    ],
  },
  {
    id: 12,
    question: 'Điều gì khiến bạn lo lắng nhất về tương lai?',
    options: [
      { text: 'Không đủ tiền để chăm sóc gia đình', value: 'financial_security', score: 4 },
      { text: 'Sức khỏe xấu đi theo tuổi tác', value: 'health', score: 4 },
      { text: 'Mất kết nối với người thân', value: 'relationships', score: 3 },
      { text: 'Không đạt được tiềm năng', value: 'personal_growth', score: 3 },
    ],
  },
  {
    id: 13,
    question: 'Trong một ngày hoàn hảo, bạn sẽ dành thời gian như thế nào?',
    options: [
      { text: 'Khám phá địa điểm mới lạ', value: 'adventure', score: 4 },
      { text: 'Sáng tạo hoặc học điều mới', value: 'creativity', score: 4 },
      { text: 'Chăm sóc sức khỏe và thư giãn', value: 'health', score: 3 },
      { text: 'Ở bên gia đình và bạn bè', value: 'family', score: 3 },
    ],
  },
  {
    id: 14,
    question: 'Khi gặp khó khăn, bạn tìm kiếm sự hỗ trợ từ đâu?',
    options: [
      { text: 'Gia đình và người thân', value: 'family', score: 4 },
      { text: 'Bạn bè và đồng nghiệp', value: 'relationships', score: 4 },
      { text: 'Tâm linh hoặc tôn giáo', value: 'spirituality', score: 3 },
      { text: 'Tự giải quyết và học hỏi', value: 'personal_growth', score: 3 },
    ],
  },
  {
    id: 15,
    question: 'Thành công tài chính có ý nghĩa gì với bạn?',
    options: [
      { text: 'Tự do để theo đuổi đam mê', value: 'creativity', score: 4 },
      { text: 'An toàn cho gia đình', value: 'family', score: 4 },
      { text: 'Khả năng giúp đỡ người khác', value: 'service', score: 3 },
      { text: 'Cơ hội trải nghiệm cuộc sống', value: 'adventure', score: 3 },
    ],
  },
  {
    id: 16,
    question: 'Bạn cảm thấy năng lượng nhất khi nào?',
    options: [
      { text: 'Khi làm việc với nhóm để đạt mục tiêu', value: 'relationships', score: 4 },
      { text: 'Khi sáng tạo điều gì đó mới', value: 'creativity', score: 4 },
      { text: 'Khi giúp đỡ người khác', value: 'service', score: 3 },
      { text: 'Khi thử thách bản thân', value: 'personal_growth', score: 3 },
    ],
  },
  {
    id: 17,
    question: 'Nếu phải chọn một điều để cải thiện trong cuộc sống, đó sẽ là gì?',
    options: [
      { text: 'Sức khỏe và thể lực', value: 'health', score: 5 },
      { text: 'Mối quan hệ với người khác', value: 'relationships', score: 4 },
      { text: 'Tình hình tài chính', value: 'financial_security', score: 3 },
      { text: 'Sự phát triển bản thân', value: 'personal_growth', score: 3 },
    ],
  },
  {
    id: 18,
    question: 'Điều gì thúc đẩy bạn thức dậy vào buổi sáng?',
    options: [
      { text: 'Mong muốn tạo ra khác biệt', value: 'service', score: 5 },
      { text: 'Đam mê với công việc hiện tại', value: 'career', score: 4 },
      { text: 'Trách nhiệm với gia đình', value: 'family', score: 3 },
      { text: 'Khát khao khám phá điều mới', value: 'adventure', score: 3 },
    ],
  },
  {
    id: 19,
    question: 'Trong cuộc sống, bạn ưu tiên điều gì nhất?',
    options: [
      { text: 'Cân bằng và hài hòa', value: 'health', score: 4 },
      { text: 'Phát triển và tiến bộ', value: 'personal_growth', score: 4 },
      { text: 'Kết nối và tình yêu', value: 'relationships', score: 3 },
      { text: 'Ý nghĩa và mục đích', value: 'spirituality', score: 3 },
    ],
  },
  {
    id: 20,
    question: 'Khi nhìn lại cuộc đời, bạn muốn cảm thấy thế nào?',
    options: [
      { text: 'Tự hào vì đã sống trọn vẹn', value: 'personal_growth', score: 5 },
      { text: 'Hạnh phúc vì gia đình êm ấm', value: 'family', score: 4 },
      { text: 'Hoàn thành vì đã giúp đỡ nhiều người', value: 'service', score: 4 },
      { text: 'Thỏa mãn vì đã tạo ra những điều đẹp', value: 'creativity', score: 3 },
    ],
  },
];

// Function to calculate values scores
export function calculateValuesScores(answers: { questionId: number; selectedOption: number }[]): ValuesScores {
  const scores: ValuesScores = {
    family: 0,
    career: 0,
    health: 0,
    relationships: 0,
    personal_growth: 0,
    financial_security: 0,
    creativity: 0,
    adventure: 0,
    spirituality: 0,
    service: 0,
  };

  answers.forEach(answer => {
    const question = valuesQuestions.find(q => q.id === answer.questionId);
    if (question) {
      const option = question.options[answer.selectedOption];
      if (option) {
        scores[option.value as keyof ValuesScores] += option.score;
      }
    }
  });

  return scores;
}

// Values interpretation
export const valuesInterpretation = {
  family: {
    high: 'Gia đình là trung tâm của cuộc sống bạn. Bạn đặt mối quan hệ với người thân lên hàng đầu.',
    medium: 'Gia đình quan trọng với bạn nhưng bạn cũng cân bằng với các giá trị khác.',
    low: 'Bạn ít ưu tiên gia đình hơn so với các giá trị khác trong cuộc sống.',
  },
  career: {
    high: 'Sự nghiệp và thành tựu nghề nghiệp là động lực chính của bạn.',
    medium: 'Bạn coi trọng công việc nhưng không để nó áp đảo cuộc sống.',
    low: 'Công việc chỉ là phương tiện, không phải mục đích chính của bạn.',
  },
  health: {
    high: 'Sức khỏe là ưu tiên hàng đầu - bạn đầu tư nhiều vào việc chăm sóc bản thân.',
    medium: 'Bạn quan tâm đến sức khỏe nhưng đôi khi bỏ qua vì các ưu tiên khác.',
    low: 'Bạn ít chú ý đến sức khỏe, có thể cần cân bằng lại.',
  },
  relationships: {
    high: 'Mối quan hệ với bạn bè và đồng nghiệp rất quan trọng với bạn.',
    medium: 'Bạn coi trọng tình bạn nhưng cũng cần thời gian riêng.',
    low: 'Bạn thích độc lập và ít phụ thuộc vào mối quan hệ xã hội.',
  },
  personal_growth: {
    high: 'Phát triển bản thân là đam mê - bạn luôn tìm cách học hỏi và cải thiện.',
    medium: 'Bạn quan tâm đến việc phát triển nhưng không quá áp lực.',
    low: 'Bạn ít tập trung vào việc phát triển bản thân.',
  },
  financial_security: {
    high: 'An toàn tài chính là ưu tiên - bạn thận trọng và có kế hoạch tài chính rõ ràng.',
    medium: 'Bạn quan tâm đến tiền bạc nhưng không để nó chi phối mọi quyết định.',
    low: 'Tiền bạc không phải ưu tiên chính - bạn sống theo đam mê hơn.',
  },
  creativity: {
    high: 'Sáng tạo là linh hồn của bạn - bạn cần môi trường để thể hiện tài năng.',
    medium: 'Bạn thích các hoạt động sáng tạo nhưng không nhất thiết theo đuổi nghiệp nghiệp.',
    low: 'Bạn ít quan tâm đến việc sáng tạo, thích sự ổn định hơn.',
  },
  adventure: {
    high: 'Phiêu lưu và trải nghiệm mới là động lực sống của bạn.',
    medium: 'Bạn thỉnh thoảng thích thử thách nhưng cũng cần sự ổn định.',
    low: 'Bạn thích sự quen thuộc và ổn định hơn là mạo hiểm.',
  },
  spirituality: {
    high: 'Tâm linh và ý nghĩa sâu sắc của cuộc sống rất quan trọng với bạn.',
    medium: 'Bạn quan tâm đến các vấn đề tâm linh nhưng không quá sâu sắc.',
    low: 'Bạn ít quan tâm đến tâm linh, tập trung vào thực tế hơn.',
  },
  service: {
    high: 'Giúp đỡ người khác và đóng góp cho xã hội là mục đích sống của bạn.',
    medium: 'Bạn thích giúp đỡ người khác khi có cơ hội.',
    low: 'Bạn ít tập trung vào việc phục vụ người khác, ưu tiên bản thân trước.',
  },
};
