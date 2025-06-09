// Leadership Style Assessment - Đánh giá phong cách lãnh đạo
export interface LeadershipQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    style: string;
    score: number;
  }[];
}

export interface LeadershipScores {
  autocratic: number;
  democratic: number;
  transformational: number;
  servant: number;
  situational: number;
  charismatic: number;
}

export const leadershipQuestions: LeadershipQuestion[] = [
  {
    id: 1,
    question: 'Khi đưa ra quyết định quan trọng, bạn thường:',
    options: [
      { text: 'Quyết định nhanh chóng dựa trên kinh nghiệm và trực giác', style: 'autocratic', score: 4 },
      { text: 'Tham khảo ý kiến nhóm trước khi quyết định', style: 'democratic', score: 4 },
      { text: 'Tập trung vào tầm nhìn dài hạn và tác động', style: 'transformational', score: 4 },
      { text: 'Ưu tiên lợi ích của nhóm và những người liên quan', style: 'servant', score: 4 },
    ],
  },
  {
    id: 2,
    question: 'Cách bạn xử lý một thành viên trong nhóm có hiệu suất kém:',
    options: [
      { text: 'Đưa ra hướng dẫn rõ ràng và yêu cầu cải thiện', style: 'autocratic', score: 3 },
      { text: 'Thảo luận với cả nhóm để tìm giải pháp', style: 'democratic', score: 3 },
      { text: 'Truyền cảm hứng và giúp họ nhìn thấy tiềm năng', style: 'transformational', score: 4 },
      { text: 'Hỗ trợ và phát triển kỹ năng cho họ', style: 'servant', score: 4 },
    ],
  },
  {
    id: 3,
    question: 'Trong cuộc họp nhóm, bạn thường:',
    options: [
      { text: 'Dẫn dắt cuộc thảo luận và đưa ra kết luận', style: 'autocratic', score: 4 },
      { text: 'Khuyến khích mọi người đóng góp ý kiến', style: 'democratic', score: 4 },
      { text: 'Chia sẻ tầm nhìn và truyền cảm hứng cho nhóm', style: 'transformational', score: 4 },
      { text: 'Lắng nghe và hỗ trợ các thành viên khác phát biểu', style: 'servant', score: 4 },
    ],
  },
  {
    id: 4,
    question: 'Khi gặp khủng hoảng, bạn sẽ:',
    options: [
      { text: 'Nhanh chóng đưa ra quyết định và chỉ đạo hành động', style: 'autocratic', score: 5 },
      { text: 'Tập hợp nhóm để cùng bàn bạc giải pháp', style: 'democratic', score: 3 },
      { text: 'Điều chỉnh phong cách tùy theo tình huống cụ thể', style: 'situational', score: 5 },
      { text: 'Sử dụng sức hút cá nhân để động viên và dẫn dắt', style: 'charismatic', score: 4 },
    ],
  },
  {
    id: 5,
    question: 'Động lực chính khiến bạn muốn dẫn dắt người khác là:',
    options: [
      { text: 'Đạt được kết quả và hiệu quả cao', style: 'autocratic', score: 3 },
      { text: 'Tạo ra môi trường làm việc dân chủ và công bằng', style: 'democratic', score: 4 },
      { text: 'Tạo ra thay đổi tích cực và phát triển người khác', style: 'transformational', score: 5 },
      { text: 'Phục vụ và giúp đỡ người khác thành công', style: 'servant', score: 5 },
    ],
  },
  {
    id: 6,
    question: 'Khi giao việc cho nhóm, bạn:',
    options: [
      { text: 'Đưa ra hướng dẫn chi tiết và giám sát chặt chẽ', style: 'autocratic', score: 4 },
      { text: 'Thảo luận mục tiêu và để nhóm tự quyết định cách thực hiện', style: 'democratic', score: 4 },
      { text: 'Truyền cảm hứng về tầm quan trọng của công việc', style: 'transformational', score: 3 },
      { text: 'Điều chỉnh cách giao việc tùy theo năng lực từng người', style: 'situational', score: 4 },
    ],
  },
  {
    id: 7,
    question: 'Bạn thể hiện quyền lực lãnh đạo chủ yếu thông qua:',
    options: [
      { text: 'Chức vụ và thẩm quyền được giao', style: 'autocratic', score: 4 },
      { text: 'Sự đồng thuận và ủng hộ của nhóm', style: 'democratic', score: 4 },
      { text: 'Tầm nhìn và khả năng truyền cảm hứng', style: 'transformational', score: 4 },
      { text: 'Sức hút cá nhân và khả năng thuyết phục', style: 'charismatic', score: 5 },
    ],
  },
  {
    id: 8,
    question: 'Khi nhóm gặp khó khăn trong giao tiếp, bạn sẽ:',
    options: [
      { text: 'Thiết lập quy trình giao tiếp rõ ràng', style: 'autocratic', score: 3 },
      { text: 'Tổ chức họp để mọi người thảo luận mở', style: 'democratic', score: 5 },
      { text: 'Tạo ra môi trường tin tưởng để mọi người chia sẻ', style: 'servant', score: 4 },
      { text: 'Sử dụng kỹ năng giao tiếp để kết nối mọi người', style: 'charismatic', score: 4 },
    ],
  },
  {
    id: 9,
    question: 'Quan điểm của bạn về sự phát triển của nhóm:',
    options: [
      { text: 'Nhóm cần được định hướng rõ ràng để đạt mục tiêu', style: 'autocratic', score: 3 },
      { text: 'Nhóm phát triển tốt nhất khi mọi người tham gia quyết định', style: 'democratic', score: 4 },
      { text: 'Nhóm cần được truyền cảm hứng để vượt qua giới hạn', style: 'transformational', score: 5 },
      { text: 'Sự phát triển của từng cá nhân sẽ mang lại thành công cho nhóm', style: 'servant', score: 5 },
    ],
  },
  {
    id: 10,
    question: 'Khi xử lý xung đột trong nhóm, bạn:',
    options: [
      { text: 'Đưa ra quyết định cuối cùng để giải quyết tranh chấp', style: 'autocratic', score: 4 },
      { text: 'Tạo điều kiện để các bên tự tìm ra giải pháp', style: 'democratic', score: 4 },
      { text: 'Giúp mọi người nhìn thấy mục tiêu chung lớn hơn', style: 'transformational', score: 4 },
      { text: 'Thay đổi phương pháp tùy theo bản chất của xung đột', style: 'situational', score: 5 },
    ],
  },
  {
    id: 11,
    question: 'Cách bạn đánh giá thành công của một nhóm:',
    options: [
      { text: 'Đạt được mục tiêu đề ra trong thời gian quy định', style: 'autocratic', score: 4 },
      { text: 'Mức độ tham gia và hài lòng của các thành viên', style: 'democratic', score: 4 },
      { text: 'Sự phát triển và thay đổi tích cực của nhóm', style: 'transformational', score: 5 },
      { text: 'Mức độ phát triển và hạnh phúc của từng thành viên', style: 'servant', score: 5 },
    ],
  },
  {
    id: 12,
    question: 'Khi một thành viên có ý tưởng sáng tạo, bạn:',
    options: [
      { text: 'Đánh giá tính khả thi và quyết định có áp dụng không', style: 'autocratic', score: 3 },
      { text: 'Đưa ra thảo luận với cả nhóm', style: 'democratic', score: 4 },
      { text: 'Khuyến khích và giúp họ phát triển ý tưởng', style: 'transformational', score: 4 },
      { text: 'Hỗ trợ họ thực hiện và học hỏi từ quá trình', style: 'servant', score: 4 },
    ],
  },
  {
    id: 13,
    question: 'Phong cách giao tiếp của bạn với nhóm là:',
    options: [
      { text: 'Trực tiếp, rõ ràng và có tính chỉ đạo', style: 'autocratic', score: 5 },
      { text: 'Mở cửa, khuyến khích phản hồi hai chiều', style: 'democratic', score: 5 },
      { text: 'Truyền cảm hứng, tạo động lực và tầm nhìn', style: 'transformational', score: 5 },
      { text: 'Thích ứng với từng người và tình huống', style: 'situational', score: 4 },
    ],
  },
  {
    id: 14,
    question: 'Khi đối mặt với sự thay đổi trong tổ chức, bạn:',
    options: [
      { text: 'Đưa ra kế hoạch chi tiết và triển khai nhanh chóng', style: 'autocratic', score: 4 },
      { text: 'Tham khảo ý kiến và xây dựng sự đồng thuận', style: 'democratic', score: 4 },
      { text: 'Giúp mọi người hiểu tại sao thay đổi là cần thiết', style: 'transformational', score: 5 },
      { text: 'Sử dụng sức hút để thuyết phục mọi người ủng hộ', style: 'charismatic', score: 4 },
    ],
  },
  {
    id: 15,
    question: 'Mục tiêu cao nhất của bạn với tư cách là một nhà lãnh đạo:',
    options: [
      { text: 'Đạt được kết quả xuất sắc và hiệu quả cao', style: 'autocratic', score: 3 },
      { text: 'Tạo ra môi trường làm việc dân chủ và công bằng', style: 'democratic', score: 4 },
      { text: 'Tạo ra những thay đổi có ý nghĩa và lâu dài', style: 'transformational', score: 5 },
      { text: 'Phát triển và giúp đỡ người khác đạt tiềm năng', style: 'servant', score: 5 },
    ],
  },
  {
    id: 16,
    question: 'Khi nhóm đạt được thành công, bạn:',
    options: [
      { text: 'Ghi nhận vai trò lãnh đạo trong thành công đó', style: 'autocratic', score: 2 },
      { text: 'Chia sẻ thành công với tất cả thành viên', style: 'democratic', score: 5 },
      { text: 'Sử dụng thành công để tạo động lực cho mục tiêu lớn hơn', style: 'transformational', score: 4 },
      { text: 'Tập trung vào sự phát triển mà nhóm đã đạt được', style: 'servant', score: 5 },
    ],
  },
  {
    id: 17,
    question: 'Cách bạn xây dựng lòng tin với nhóm:',
    options: [
      { text: 'Thông qua năng lực và kết quả công việc', style: 'autocratic', score: 3 },
      { text: 'Bằng sự minh bạch và công bằng', style: 'democratic', score: 5 },
      { text: 'Thông qua tính nhất quán giữa lời nói và hành động', style: 'transformational', score: 4 },
      { text: 'Bằng sự quan tâm chân thành đến từng cá nhân', style: 'servant', score: 5 },
    ],
  },
  {
    id: 18,
    question: 'Khi cần đưa ra quyết định khó khăn, bạn:',
    options: [
      { text: 'Dựa vào kinh nghiệm và quyết định nhanh chóng', style: 'autocratic', score: 4 },
      { text: 'Tham khảo nhiều ý kiến trước khi quyết định', style: 'democratic', score: 4 },
      { text: 'Cân nhắc tác động dài hạn đến tầm nhìn chung', style: 'transformational', score: 4 },
      { text: 'Thay đổi cách tiếp cận tùy theo độ phức tạp', style: 'situational', score: 4 },
    ],
  },
  {
    id: 19,
    question: 'Động lực làm việc của nhóm dưới sự dẫn dắt của bạn chủ yếu đến từ:',
    options: [
      { text: 'Mục tiêu rõ ràng và hệ thống đánh giá', style: 'autocratic', score: 3 },
      { text: 'Sự tham gia và có tiếng nói trong quyết định', style: 'democratic', score: 4 },
      { text: 'Tầm nhìn đầy cảm hứng và ý nghĩa công việc', style: 'transformational', score: 5 },
      { text: 'Sức hút cá nhân và khả năng truyền cảm hứng', style: 'charismatic', score: 5 },
    ],
  },
  {
    id: 20,
    question: 'Khi nhóm gặp thất bại, bạn:',
    options: [
      { text: 'Phân tích nguyên nhân và đưa ra hướng khắc phục', style: 'autocratic', score: 4 },
      { text: 'Cùng nhóm rút ra bài học và tìm giải pháp', style: 'democratic', score: 4 },
      { text: 'Giúp nhóm học hỏi và phát triển từ thất bại', style: 'transformational', score: 4 },
      { text: 'Hỗ trợ tinh thần và giúp mọi người vượt qua', style: 'servant', score: 4 },
    ],
  },
];

// Function to calculate leadership scores
export function calculateLeadershipScores(answers: { questionId: number; selectedOption: number }[]): LeadershipScores {
  const scores: LeadershipScores = {
    autocratic: 0,
    democratic: 0,
    transformational: 0,
    servant: 0,
    situational: 0,
    charismatic: 0,
  };

  answers.forEach(answer => {
    const question = leadershipQuestions.find(q => q.id === answer.questionId);
    if (question) {
      const option = question.options[answer.selectedOption];
      if (option) {
        scores[option.style as keyof LeadershipScores] += option.score;
      }
    }
  });

  return scores;
}

// Leadership style interpretation
export const leadershipInterpretation = {
  autocratic: {
    title: 'Lãnh Đạo Chuyên Quyền',
    description: 'Bạn có xu hướng đưa ra quyết định độc lập và mong đợi sự tuân thủ từ nhóm.',
    strengths: [
      'Quyết định nhanh chóng và hiệu quả',
      'Rõ ràng trong chỉ đạo và mong đợi',
      'Hiệu quả trong tình huống khủng hoảng',
      'Tạo ra kết quả nhanh chóng',
    ],
    challenges: [
      'Có thể hạn chế sáng tạo của nhóm',
      'Khả năng tạo ra động lực dài hạn thấp',
      'Có thể gây căng thẳng trong mối quan hệ',
      'Phụ thuộc nhiều vào năng lực cá nhân',
    ],
    tips: [
      'Lắng nghe ý kiến của nhóm nhiều hơn',
      'Giải thích lý do đằng sau các quyết định',
      'Tạo cơ hội cho nhóm phát triển',
      'Cân bằng giữa kiểm soát và tự do',
    ],
  },
  democratic: {
    title: 'Lãnh Đạo Dân Chủ',
    description: 'Bạn khuyến khích sự tham gia và chia sẻ quyền lực với các thành viên trong nhóm.',
    strengths: [
      'Tạo ra sự cam kết cao từ nhóm',
      'Khuyến khích sáng tạo và đổi mới',
      'Xây dựng kỹ năng cho thành viên',
      'Tạo ra môi trường làm việc tích cực',
    ],
    challenges: [
      'Quá trình ra quyết định có thể chậm',
      'Khó khăn trong tình huống khẩn cấp',
      'Có thể dẫn đến xung đột quan điểm',
      'Cần nhiều thời gian để đạt đồng thuận',
    ],
    tips: [
      'Học cách quyết định nhanh khi cần thiết',
      'Cân bằng giữa tham khảo và quyết đoán',
      'Phát triển kỹ năng quản lý xung đột',
      'Thiết lập quy trình ra quyết định hiệu quả',
    ],
  },
  transformational: {
    title: 'Lãnh Đạo Chuyển Đổi',
    description: 'Bạn tập trung vào việc truyền cảm hứng và tạo ra những thay đổi tích cực lâu dài.',
    strengths: [
      'Tạo ra tầm nhìn đầy cảm hứng',
      'Phát triển tiềm năng của nhóm',
      'Tạo ra những thay đổi có ý nghĩa',
      'Xây dựng lòng tin và cam kết',
    ],
    challenges: [
      'Có thể bỏ qua các chi tiết thực tế',
      'Cần thời gian để thấy kết quả',
      'Có thể quá lý tưởng hóa',
      'Đòi hỏi năng lượng và sự kiên trì cao',
    ],
    tips: [
      'Cân bằng tầm nhìn với thực tế',
      'Đặt ra các mục tiêu ngắn hạn cụ thể',
      'Theo dõi tiến độ thường xuyên',
      'Hỗ trợ nhóm vượt qua khó khăn',
    ],
  },
  servant: {
    title: 'Lãnh Đạo Phục Vụ',
    description: 'Bạn ưu tiên việc phục vụ và phát triển các thành viên trong nhóm.',
    strengths: [
      'Tạo ra môi trường hỗ trợ và tin tưởng',
      'Phát triển tốt nhân tài',
      'Xây dựng mối quan hệ mạnh mẽ',
      'Tạo ra sự cam kết lâu dài',
    ],
    challenges: [
      'Có thể thiếu quyết đoán khi cần',
      'Khó khăn trong việc đưa ra quyết định khó',
      'Có thể bị lợi dụng lòng tốt',
      'Cần cân bằng giữa hỗ trợ và yêu cầu',
    ],
    tips: [
      'Học cách đặt ra ranh giới rõ ràng',
      'Phát triển kỹ năng đưa ra quyết định khó',
      'Cân bằng giữa hỗ trợ và trách nhiệm',
      'Tạo ra hệ thống đánh giá hiệu suất',
    ],
  },
  situational: {
    title: 'Lãnh Đạo Tình Huống',
    description: 'Bạn linh hoạt thay đổi phong cách lãnh đạo tùy theo tình huống và nhóm.',
    strengths: [
      'Linh hoạt và thích ứng cao',
      'Hiệu quả trong nhiều tình huống khác nhau',
      'Tận dụng được điểm mạnh của từng thành viên',
      'Phát triển toàn diện kỹ năng lãnh đạo',
    ],
    challenges: [
      'Có thể gây nhầm lẫn cho nhóm',
      'Cần nhiều thời gian để đánh giá tình huống',
      'Đòi hỏi kỹ năng cao về đọc hiểu người khác',
      'Có thể thiếu nhất quán',
    ],
    tips: [
      'Giao tiếp rõ ràng về phong cách đang sử dụng',
      'Phát triển kỹ năng đánh giá tình huống',
      'Duy trì các giá trị cốt lõi nhất quán',
      'Thu thập phản hồi thường xuyên từ nhóm',
    ],
  },
  charismatic: {
    title: 'Lãnh Đạo Có Sức Hút',
    description: 'Bạn sử dụng sức hút cá nhân và khả năng truyền cảm hứng để dẫn dắt người khác.',
    strengths: [
      'Tạo ra động lực mạnh mẽ cho nhóm',
      'Khả năng thuyết phục và ảnh hưởng cao',
      'Xây dựng được lòng tin nhanh chóng',
      'Hiệu quả trong việc tạo ra thay đổi',
    ],
    challenges: [
      'Có thể phụ thuộc quá nhiều vào cá nhân',
      'Khó khăn khi vắng mặt',
      'Có thể che lấp các vấn đề thực tế',
      'Cần duy trì hình ảnh liên tục',
    ],
    tips: [
      'Phát triển khả năng lãnh đạo cho người khác',
      'Tạo ra hệ thống không phụ thuộc vào cá nhân',
      'Cân bằng giữa cảm hứng và thực tế',
      'Xây dựng đội ngũ lãnh đạo mạnh',
    ],
  },
};
