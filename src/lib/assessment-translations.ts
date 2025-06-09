import { MBTIQuestion } from '@/types';

// Simple translation utility for assessment questions
export const translateMBTIQuestions = (questions: MBTIQuestion[], language: 'en' | 'vi'): MBTIQuestion[] => {
  if (language === 'en') {
    return questions;
  }

  // Vietnamese translations mapping
  const translations: { [key: string]: string } = {
    // Question translations
    'At parties, you usually:': 'Tại các bữa tiệc, bạn thường:',
    'You prefer to work:': 'Bạn thích làm việc:',
    'When making decisions, you:': 'Khi đưa ra quyết định, bạn:',
    'After a long day, you feel energized by:': 'Sau một ngày dài, bạn cảm thấy năng lượng được nạp lại khi:',
    'In meetings, you tend to:': 'Trong cuộc họp, bạn thường:',
    'When learning something new, you prefer to:': 'Khi học điều mới, bạn thích:',
    'You trust more in:': 'Bạn tin tưởng hơn vào:',
    'When solving problems, you typically:': 'Khi giải quyết vấn đề, bạn thường:',
    'You pay more attention to:': 'Bạn chú ý nhiều hơn đến:',
    'At work, you prefer:': 'Trong công việc, bạn thích:',
    'When making important decisions, you prioritize:': 'Khi đưa ra quyết định quan trọng, bạn ưu tiên:',
    'In conflicts, you tend to:': 'Trong xung đột, bạn thường:',
    'You value more:': 'Bạn đánh giá cao hơn:',
    'When giving criticism, you:': 'Khi phê bình ai đó, bạn:',
    'In a team, you typically:': 'Trong nhóm làm việc, bạn thường:',
    'You prefer your life to be:': 'Bạn thích cuộc sống:',
    'When facing deadlines, you usually:': 'Khi có deadline, bạn thường:',
    'For vacations, you prefer to:': 'Trong kỳ nghỉ, bạn thích:',
    'Your workspace is typically:': 'Bàn làm việc của bạn thường:',
    'In your daily life, you:': 'Trong cuộc sống hàng ngày, bạn:',
    
    // Option translations
    'Interact with many people, including strangers': 'Tương tác với nhiều người, kể cả người lạ',
    'Interact with a few people you know well': 'Tương tác với một vài người bạn quen',
    'Try to stay in one conversation': 'Cố gắng ở trong một cuộc trò chuyện',
    'Move around and meet new people': 'Di chuyển xung quanh và gặp gỡ người mới',
    
    'In a team with lots of interaction': 'Trong nhóm với nhiều tương tác',
    'Independently with minimal interruptions': 'Độc lập với ít sự gián đoạn',
    'In small groups': 'Trong các nhóm nhỏ',
    'In dynamic, collaborative environments': 'Trong môi trường năng động, hợp tác',
    
    'Discuss with many people to get input': 'Thảo luận với nhiều người để nghe ý kiến',
    'Think privately before deciding': 'Suy nghĩ riêng trước khi quyết định',
    'Consult with a few trusted people': 'Hỏi ý kiến một vài người tin tưởng',
    'Brainstorm with a group': 'Brainstorm với nhóm',
    
    'Going out and socializing with friends': 'Đi ra ngoài và gặp gỡ bạn bè',
    'Staying home alone or with close family': 'Ở nhà một mình hoặc với người thân',
    'Reading a book or watching a movie': 'Đọc sách hoặc xem phim',
    'Engaging in social activities': 'Tham gia hoạt động xã hội',
    
    'Speak up as ideas come to mind': 'Phát biểu ý kiến ngay khi nghĩ ra',
    'Think carefully before speaking': 'Suy nghĩ kỹ trước khi phát biểu',
    'Only speak when directly asked': 'Chỉ nói khi được hỏi trực tiếp',
    'Enjoy spontaneous discussions': 'Thích thảo luận ngẫu nhiên',
    
    // Sensing vs Intuition
    'Start with practical applications': 'Tìm hiểu các ứng dụng thực tế trước',
    'Begin with the big picture concepts': 'Hiểu khái niệm tổng quát trước',
    'Learn through specific examples': 'Học qua ví dụ cụ thể',
    'Explore new possibilities': 'Khám phá các khả năng mới',
    
    'Experience and proven facts': 'Kinh nghiệm và thực tế đã được chứng minh',
    'Intuition and hunches': 'Trực giác và linh cảm',
    'Concrete data and numbers': 'Dữ liệu và con số cụ thể',
    'Sudden inspirations': 'Cảm hứng đột ngột',
    
    'Follow proven step-by-step methods': 'Làm theo các bước đã được chứng minh',
    'Look for new and creative approaches': 'Tìm cách tiếp cận mới và sáng tạo',
    'Use past experience as a guide': 'Sử dụng kinh nghiệm từ quá khứ',
    'Try different experimental ideas': 'Thử nghiệm các ý tưởng khác nhau',
    
    'Details and specific information': 'Chi tiết và thông tin cụ thể',
    'The big picture and patterns': 'Bức tranh tổng thể và xu hướng',
    'What is happening right now': 'Những gì đang xảy ra ngay bây giờ',
    'Future possibilities': 'Khả năng tương lai',
    
    'Specific tasks with clear instructions': 'Các nhiệm vụ cụ thể với hướng dẫn rõ ràng',
    'Open-ended projects with creative freedom': 'Các dự án mở với nhiều khả năng sáng tạo',
    'Work with measurable outcomes': 'Công việc có thể đo lường được kết quả',
    'Opportunities to innovate and experiment': 'Cơ hội để đổi mới và thử nghiệm',
    
    // Thinking vs Feeling
    'Logic and objective analysis': 'Logic và phân tích khách quan',
    'Feelings and personal values': 'Cảm xúc và giá trị cá nhân',
    'Data and evidence': 'Dữ liệu và bằng chứng',
    'Impact on people': 'Tác động đến người khác',
      'Focus on facts and logic': 'Tập trung vào sự thật và logic',
    'Try to maintain harmony and understanding': 'Cố gắng duy trì hòa hợp và hiểu biết',
    'Analyze the root cause': 'Phân tích nguyên nhân gốc rễ',
    "Consider everyone's feelings": 'Quan tâm đến cảm xúc của mọi người',
    
    'Fairness and consistency': 'Công bằng và nhất quán',
    'Compassion and understanding': 'Lòng trắc ẩn và thấu hiểu',
    'Efficiency and results': 'Hiệu quả và kết quả',
    'Harmony and collective happiness': 'Hài hòa và hạnh phúc chung',
    
    'Focus on specific behaviors and outcomes': 'Tập trung vào hành vi và kết quả cụ thể',
    'Consider their feelings and motivations': 'Quan tâm đến cảm xúc và động lực của họ',
    'Give objective feedback': 'Đưa ra phản hồi khách quan',
    'Try to be encouraging and supportive': 'Cố gắng khuyến khích và hỗ trợ',
    
    'Focus on tasks and goals': 'Tập trung vào nhiệm vụ và mục tiêu',
    'Pay attention to team morale and relationships': 'Chú ý đến tinh thần và mối quan hệ nhóm',
    'Ensure efficient processes': 'Đảm bảo quy trình làm việc hiệu quả',
    'Create a positive environment for everyone': 'Tạo môi trường tích cực cho mọi người',
    
    // Judging vs Perceiving
    'Planned and structured': 'Có kế hoạch và cấu trúc rõ ràng',
    'Flexible and spontaneous': 'Linh hoạt và tự phát',
    'Have a fixed schedule': 'Có thời gian biểu cố định',
    'Keep options open': 'Mở ra nhiều tùy chọn',
    
    'Plan ahead and finish early': 'Lập kế hoạch và hoàn thành sớm',
    'Work best under pressure at the last minute': 'Làm vào phút chót nhưng tốt nhất có thể',
    'Break tasks into timed segments': 'Chia nhỏ công việc theo thời gian',
    'Wait for inspiration to strike': 'Chờ đến khi có cảm hứng',
    
    'Plan detailed itineraries in advance': 'Lên kế hoạch chi tiết trước',
    'Let things happen naturally': 'Để mọi thứ tự nhiên diễn ra',
    'Have some basic plans': 'Có một số kế hoạch cơ bản',
    'Decide based on mood': 'Quyết định tùy theo tâm trạng',
    
    'Neat and organized': 'Gọn gàng và có tổ chức',
    'Somewhat messy but you know where everything is': 'Hơi bừa bộn nhưng bạn biết mọi thứ ở đâu',
    'Arranged in systems': 'Được sắp xếp theo hệ thống',
    'Changes based on current projects': 'Thay đổi tùy theo dự án',
    
    'Like routine and predictability': 'Thích thói quen và tính dự đoán được',
    'Enjoy variety and spontaneity': 'Thích sự đa dạng và tự phát',
    'Prefer planned activities': 'Thích các hoạt động đã được lên kế hoạch',
    'Like to go with the flow': 'Thích để mọi thứ diễn ra tự nhiên'
  };

  return questions.map(question => ({
    ...question,
    question: translations[question.question] || question.question,
    options: question.options.map(option => ({
      ...option,
      text: translations[option.text] || option.text
    }))
  }));
};

// Add other assessment translation functions here
export const translateBigFiveQuestions = (questions: any[], language: 'en' | 'vi') => {
  // TODO: Implement Big Five translations
  if (language === 'vi') {
    // Add Vietnamese translations for Big Five questions here
    return questions; // For now, return original questions
  }
  return questions;
};

// DISC Question Translations
const discQuestionTranslations: Record<number, { question: string; options: string[] }> = {
  1: {
    question: "Khi đưa ra quyết định, tôi có xu hướng:",
    options: [
      "Đưa ra quyết định nhanh chóng và quyết đoán",
      "Xem xét tác động đến người khác trước tiên",
      "Dành thời gian suy nghĩ kỹ lưỡng",
      "Phân tích tất cả sự kiện và chi tiết"
    ]
  },
  2: {
    question: "Trong cuộc họp nhóm, tôi thường:",
    options: [
      "Chủ động lãnh đạo và điều hành cuộc thảo luận",
      "Khuyến khích sự tham gia và duy trì năng lượng cao",
      "Lắng nghe cẩn thận và hỗ trợ sự hòa hợp trong nhóm",
      "Tập trung vào chương trình nghị sự và tính chính xác của thông tin"
    ]
  },
  3: {
    question: "Khi đối mặt với thách thức, tôi thích:",
    options: [
      "Đối mặt trực tiếp với quyết tâm",
      "Tập hợp sự hỗ trợ từ người khác để cùng giải quyết",
      "Sử dụng các phương pháp đã được chứng minh và có cách tiếp cận ổn định",
      "Nghiên cứu kỹ lưỡng trước khi hành động"
    ]
  },
  4: {
    question: "Môi trường làm việc lý tưởng của tôi là:",
    options: [
      "Nhịp độ nhanh với cơ hội lãnh đạo",
      "Hợp tác và tương tác xã hội",
      "Ổn định với kỳ vọng rõ ràng",
      "Có tổ chức với sự chú ý đến chất lượng"
    ]
  },
  5: {
    question: "Khi giao tiếp với người khác, tôi:",
    options: [
      "Đi thẳng vào vấn đề",
      "Sử dụng sự nhiệt tình và câu chuyện cá nhân",
      "Nói một cách suy tư và lắng nghe tốt",
      "Cung cấp thông tin chi tiết và chính xác"
    ]
  },
  6: {
    question: "Dưới áp lực, tôi có xu hướng:",
    options: [
      "Trở nên quyết đoán và đòi hỏi hơn",
      "Cố gắng làm dịu tâm trạng và động viên người khác",
      "Giữ bình tĩnh và tìm kiếm sự ổn định",
      "Tập trung hơn vào chi tiết và tránh sai lầm"
    ]
  },
  7: {
    question: "Tôi được thúc đẩy bởi:",
    options: [
      "Chiến thắng và đạt được kết quả",
      "Sự công nhận và chấp thuận xã hội",
      "An toàn và sự đánh giá cao",
      "Tiêu chuẩn chính xác và chất lượng"
    ]
  },
  8: {
    question: "Khi học điều gì đó mới, tôi thích:",
    options: [
      "Nhảy vào và học bằng cách làm",
      "Học với người khác trong môi trường nhóm",
      "Học từng bước theo tốc độ của riêng mình",
      "Nghiên cứu tất cả tài liệu một cách kỹ lưỡng trước"
    ]
  },
  9: {
    question: "Điểm mạnh lớn nhất của tôi là:",
    options: [
      "Đạt được kết quả nhanh chóng",
      "Truyền cảm hứng và thúc đẩy người khác",
      "Đáng tin cậy và hỗ trợ",
      "Kỹ lưỡng và chính xác"
    ]
  },
  10: {
    question: "Khi làm việc trong dự án, tôi:",
    options: [
      "Tập trung vào kết quả cuối cùng và thời hạn",
      "Thích động não và hợp tác sáng tạo",
      "Thích tiến độ nhất quán và sự ổn định",
      "Đảm bảo chất lượng cao và tuân thủ quy trình"
    ]
  },
  11: {
    question: "Mọi người sẽ mô tả tôi là:",
    options: [
      "Trực tiếp và hướng đến kết quả",
      "Nhiệt tình và tập trung vào con người",
      "Kiên nhẫn và hỗ trợ",
      "Cẩn thận và chú ý đến chi tiết"
    ]
  },
  12: {
    question: "Khi giao nhiệm vụ, tôi:",
    options: [
      "Đưa ra kỳ vọng rõ ràng và mong đợi kết quả",
      "Truyền cảm hứng và khuyến khích nhóm",
      "Cung cấp hỗ trợ và hướng dẫn liên tục",
      "Đưa ra hướng dẫn chi tiết và các điểm kiểm tra"
    ]
  },
  13: {
    question: "Cách tiếp cận của tôi với thay đổi là:",
    options: [
      "Chấp nhận nó như một cơ hội",
      "Tìm kiếm những khả năng tích cực",
      "Thích chuyển đổi dần dần, có kế hoạch tốt",
      "Phân tích rủi ro và chuẩn bị kỹ lưỡng"
    ]
  },
  14: {
    question: "Trong tình huống xung đột, tôi:",
    options: [
      "Giải quyết vấn đề một cách trực tiếp và kiên quyết",
      "Cố gắng tìm điểm chung và duy trì mối quan hệ",
      "Tránh đối đầu và tìm kiếm thỏa hiệp",
      "Tập trung vào sự kiện và giải pháp hợp lý"
    ]
  },
  15: {
    question: "Phong cách quản lý thời gian của tôi là:",
    options: [
      "Tập trung vào ưu tiên và các nhiệm vụ khẩn cấp",
      "Linh hoạt, thích ứng với các cơ hội",
      "Ổn định và nhất quán với các thói quen",
      "Có kế hoạch và tổ chức với lịch trình"
    ]
  },
  16: {
    question: "Khi thuyết trình, tôi:",
    options: [
      "Giữ ngắn gọn và tập trung vào các điểm chính",
      "Làm cho nó hấp dẫn và tương tác",
      "Chuẩn bị kỹ lưỡng và nói rõ ràng",
      "Bao gồm dữ liệu và chi tiết toàn diện"
    ]
  },
  17: {
    question: "Tôi thể hiện tốt nhất khi:",
    options: [
      "Được trao quyền tự chủ và các mục tiêu thách thức",
      "Làm việc với các thành viên nhóm nhiệt tình",
      "Trong môi trường ổn định, hỗ trợ",
      "Tiêu chuẩn và kỳ vọng rõ ràng"
    ]
  },
  18: {
    question: "Quá trình ra quyết định của tôi bao gồm:",
    options: [
      "Phân tích nhanh và hành động quyết đoán",
      "Tìm kiếm ý kiến từ người khác",
      "Xem xét cẩn thận tất cả các yếu tố",
      "Nghiên cứu và phân tích kỹ lưỡng"
    ]
  },
  19: {
    question: "Khi nhận phản hồi, tôi thích nó:",
    options: [
      "Trực tiếp và tập trung vào kết quả",
      "Tích cực và khuyến khích",
      "Nhẹ nhàng và hỗ trợ",
      "Cụ thể và dựa trên sự kiện"
    ]
  },
  20: {
    question: "Phong cách lãnh đạo của tôi là:",
    options: [
      "Nắm quyền và thúc đẩy kết quả",
      "Truyền cảm hứng và thúc đẩy thông qua tầm nhìn",
      "Lãnh đạo bằng gương mẫu và hỗ trợ người khác",
      "Cung cấp cấu trúc và duy trì tiêu chuẩn"
    ]
  },
  21: {
    question: "Khi làm việc với thời hạn, tôi:",
    options: [
      "Phát triển dưới áp lực và thúc đẩy hoàn thành",
      "Tập hợp nhóm để đáp ứng thách thức",
      "Làm việc ổn định và lập kế hoạch trước",
      "Tạo lịch trình chi tiết và theo dõi tiến độ"
    ]
  },
  22: {
    question: "Trong các tình huống xã hội, tôi có xu hướng:",
    options: [
      "Kiểm soát cuộc trò chuyện",
      "Là linh hồn của bữa tiệc",
      "Lắng nghe nhiều hơn nói",
      "Tham gia vào các cuộc thảo luận có ý nghĩa, tập trung"
    ]
  },
  23: {
    question: "Nỗi sợ lớn nhất của tôi trong tình huống làm việc là:",
    options: [
      "Mất kiểm soát hoặc bị quản lý vi mô",
      "Bị bỏ qua hoặc từ chối bởi người khác",
      "Thay đổi đột ngột hoặc bất ổn",
      "Mắc lỗi hoặc bị chỉ trích"
    ]
  },
  24: {
    question: "Khi giải quyết vấn đề, tôi:",
    options: [
      "Tìm giải pháp nhanh nhất và thực hiện nó",
      "Động não với người khác để tìm giải pháp sáng tạo",
      "Sử dụng các phương pháp đã được thử nghiệm",
      "Phân tích vấn đề một cách có hệ thống"
    ]
  },
  25: {
    question: "Tôi được tiếp thêm năng lượng bởi:",
    options: [
      "Cạnh tranh và thách thức",
      "Tương tác xã hội và sự đa dạng",
      "Môi trường yên bình, hài hòa",
      "Các hoạt động có tổ chức, có cấu trúc"
    ]
  },
  26: {
    question: "Khi đưa ra hướng dẫn, tôi:",
    options: [
      "Nêu rõ những gì cần được thực hiện",
      "Giải thích tầm nhìn và truyền cảm hứng hành động",
      "Cung cấp hỗ trợ và khuyến khích",
      "Đưa ra hướng dẫn chi tiết, từng bước"
    ]
  },
  27: {
    question: "Cách tiếp cận của tôi với rủi ro là:",
    options: [
      "Chấp nhận rủi ro có tính toán để có phần thưởng lớn",
      "Chấp nhận rủi ro nếu người khác ủng hộ ý tưởng",
      "Thích cách tiếp cận ít rủi ro, ổn định",
      "Giảm thiểu rủi ro thông qua kế hoạch cẩn thận"
    ]
  },
  28: {
    question: "Vào cuối một dự án thành công, tôi cảm thấy hài lòng nhất khi:",
    options: [
      "Chúng ta đạt được kết quả xuất sắc",
      "Nhóm làm việc tốt cùng nhau",
      "Mọi người đều đóng góp và cảm thấy được đánh giá cao",
      "Mọi thứ được thực hiện chính xác và hoàn chỉnh"
    ]
  }
};

export function translateDISCQuestions(questions: any[], language: string): any[] {
  if (language !== 'vi') return questions;
  
  return questions.map(question => {
    const translation = discQuestionTranslations[question.id];
    if (translation) {
      return {
        ...question,
        question: translation.question,
        options: question.options.map((option: any, index: number) => ({
          ...option,
          text: translation.options[index] || option.text
        }))
      };
    }
    return question;
  });
}

// Enneagram Question Translations
export function translateEnneagramQuestions(questions: any[], language: string) {
  if (language !== 'vi') return questions;

  const translations: { [key: string]: { question: string; options: string[] } } = {
    'When facing a difficult situation, I usually:': {
      question: 'Khi đối mặt với tình huống khó khăn, tôi thường:',
      options: [
        'Cố gắng cải thiện hoặc sửa chữa những gì sai',
        'Tìm cách giúp đỡ những người liên quan',
        'Tập trung vào những gì cần được hoàn thành',
        'Thể hiện cảm xúc và tìm kiếm sự chân thật',
        'Thu thập thông tin và phân tích tình huống',
        'Tìm kiếm hướng dẫn và hỗ trợ từ các nguồn đáng tin cậy',
        'Tìm kiếm khả năng và lựa chọn tích cực',
        'Đảm nhận trách nhiệm và khẳng định vị trí của mình',
        'Cố gắng duy trì hòa hợp và tránh xung đột'
      ]
    },
    'My biggest fear is:': {
      question: 'Nỗi sợ lớn nhất của tôi là:',
      options: [
        'Bị hỏng, khiếm khuyết hoặc sai lầm',
        'Không được yêu thương hoặc không được mong muốn',
        'Trở nên vô giá trị mà không có giá trị ngoài thành tích',
        'Không có bản sắc hoặc ý nghĩa cá nhân',
        'Trở nên vô dụng, bất lực hoặc không có khả năng',
        'Không có sự hỗ trợ hoặc hướng dẫn',
        'Bị mắc kẹt trong đau khổ hoặc thiếu thốn',
        'Bị kiểm soát hoặc dễ bị tổn thương trước người khác',
        'Mất kết nối và bị phân mảnh'
      ]
    },
    'People would describe me as someone who:': {
      question: 'Mọi người sẽ mô tả tôi là người:',
      options: [
        'Có tiêu chuẩn cao và chú ý đến chi tiết',
        'Quan tâm, hữu ích và đặt người khác lên trước',
        'Có tham vọng, hiệu quả và quan tâm đến hình ảnh',
        'Độc đáo, giàu cảm xúc và nội tâm',
        'Trí tuệ, riêng tư và độc lập',
        'Trung thành, có trách nhiệm và hướng đến an ninh',
        'Nhiệt tình, đa năng và tự phát',
        'Mạnh mẽ, quyết đoán và tự tin',
        'Hòa bình, hỗ trợ và hài hòa'
      ]
    },
    'When I\'m stressed, I tend to:': {
      question: 'Khi tôi căng thẳng, tôi có xu hướng:',
      options: [
        'Trở nên phê phán và cáu kỉnh hơn',
        'Trở nên đòi hỏi và thao túng hơn',
        'Trở nên cạnh tranh và không kiên nhẫn hơn',
        'Trở nên u sầu và rút lui hơn',
        'Trở nên căng thẳng và tiêu cực hơn',
        'Trở nên lo lắng và nghi ngờ hơn',
        'Trở nên phân tán và bốc đồng hơn',
        'Trở nên hung hăng và áp đảo hơn',
        'Trở nên bướng bỉnh và thụ động hơn'
      ]
    },
    'My core motivation is:': {
      question: 'Động lực cốt lõi của tôi là:',
      options: [
        'Trở nên hoàn hảo và đúng đắn',
        'Cảm thấy được yêu thương và cần thiết',
        'Cảm thấy có giá trị và được khâm phục',
        'Tìm thấy bản thân và ý nghĩa của mình',
        'Trở nên có năng lực và hiểu biết',
        'Có an ninh và hỗ trợ',
        'Duy trì hạnh phúc và sự hài lòng',
        'Tự chủ và kiểm soát số phận của mình',
        'Duy trì hòa bình nội tâm và hòa hợp'
      ]
    },
    'In relationships, I:': {
      question: 'Trong các mối quan hệ, tôi:',
      options: [
        'Mong đợi tiêu chuẩn cao và có thể phê phán',
        'Tập trung vào nhu cầu của người khác',
        'Muốn được khâm phục và thành công',
        'Tìm kiếm sự hiểu biết sâu sắc và kết nối chân thật',
        'Cần không gian cá nhân và có thể rút lui',
        'Trung thành nhưng có thể nghi ngờ',
        'Mang lại năng lượng và sự phấn khích',
        'Có thể áp đảo nhưng bảo vệ những người tôi yêu',
        'Tránh xung đột và tìm cách duy trì hòa bình'
      ]
    },
    'When making decisions, I:': {
      question: 'Khi đưa ra quyết định, tôi:',
      options: [
        'Cân nhắc kỹ lưỡng và tìm kiếm giải pháp đúng đắn',
        'Xem xét tác động đến người khác',
        'Tập trung vào hiệu quả và kết quả',
        'Đi theo trực giác và cảm xúc của mình',
        'Thu thập và phân tích tất cả thông tin có sẵn',
        'Tìm kiếm lời khuyên và tìm hiểu rủi ro',
        'Giữ cho các lựa chọn mở và linh hoạt',
        'Quyết định nhanh chóng và tự tin',
        'Tránh những quyết định khó khăn hoặc gây tranh cãi'
      ]
    },
    'My greatest strength is:': {
      question: 'Điểm mạnh lớn nhất của tôi là:',
      options: [
        'Khả năng nhìn thấy cách mọi thứ có thể được cải thiện',
        'Khả năng quan tâm và hỗ trợ người khác',
        'Khả năng đạt được mục tiêu và truyền cảm hứng cho người khác',
        'Khả năng nhìn thấy vẻ đẹp và độc đáo trong cuộc sống',
        'Khả năng hiểu các hệ thống phức tạp',
        'Khả năng dự đoán vấn đề và chuẩn bị cho chúng',
        'Khả năng tìm thấy niềm vui và khả năng trong mọi tình huống',
        'Khả năng đảm nhận trách nhiệm và bảo vệ người khác',
        'Khả năng nhìn thấy tất cả các quan điểm và tạo ra sự đồng thuận'
      ]
    },
    'When I\'m at my best, I am:': {
      question: 'Khi tôi ở trạng thái tốt nhất, tôi:',
      options: [
        'Khôn ngoan, thực tế và chấp nhận',
        'Vô tư, yêu thương và khiêm tốn',
        'Chân thật, chấp nhận bản thân và từ bi',
        'Sáng tạo, được truyền cảm hứng và đổi mới',
        'Tầm nhìn xa, tiên phong và cởi mở',
        'Tự tin, mạnh mẽ và can đảm',
        'Tập trung, hài lòng và biết ơn',
        'Tự chủ, đại độ và bảo vệ',
        'Tự động, tham gia và kết nối'
      ]
    },
    'My attention naturally goes to:': {
      question: 'Sự chú ý của tôi tự nhiên hướng đến:',
      options: [
        'Lỗi, thiếu sót và những gì cần được sửa chữa',
        'Nhu cầu và cảm xúc của người khác',
        'Mục tiêu, nhiệm vụ và hình ảnh',
        'Những gì còn thiếu hoặc không chân thật',
        'Thông tin, ý tưởng và hiểu biết',
        'Rủi ro tiềm ẩn và các kịch bản xấu nhất',
        'Khả năng, lựa chọn và trải nghiệm tích cực',
        'Công bằng, bất công và động lực quyền lực',
        'Hòa hợp, sự thoải mái và tránh xung đột'
      ]
    },
    'People might criticize me for being:': {
      question: 'Mọi người có thể chỉ trích tôi vì:',
      options: [
        'Quá phê phán hoặc cầu toàn',
        'Quá can thiệp hoặc đòi hỏi',
        'Quá cạnh tranh hoặc hời hợt',
        'Quá khó khăn hoặc u sầu',
        'Quá rút lui hoặc tách biệt',
        'Quá lo lắng hoặc nghi ngờ',
        'Quá phân tán hoặc không tập trung',
        'Quá hung hăng hoặc áp đảo',
        'Quá thụ động hoặc ngoan cố'
      ]
    },
    'When I feel secure, I:': {
      question: 'Khi tôi cảm thấy an toàn, tôi:',
      options: [
        'Trở nên vui tươi và tự phát hơn',
        'Trở nên tự chăm sóc và tự khẳng định hơn',
        'Trở nên hợp tác và cam kết hơn',
        'Trở nên có mục đích và có kỷ luật hơn',
        'Trở nên tự tin và quyết đoán hơn',
        'Trở nên thư giãn và tích cực hơn',
        'Trở nên tập trung và cống hiến hơn',
        'Trở nên quan tâm và bảo vệ hơn',
        'Trở nên tự động và tích cực hơn'
      ]
    },
    'My communication style is:': {
      question: 'Phong cách giao tiếp của tôi là:',
      options: [
        'Chính xác, có cấu trúc và khách quan',
        'Ấm áp, cá nhân và hỗ trợ',
        'Tích cực, thuyết phục và hướng mục tiêu',
        'Biểu cảm, cá nhân và chân thật',
        'Cô đọng, thông tin và có phần dè dặt',
        'Thận trọng, có trách nhiệm và tìm kiếm sự đảm bảo',
        'Nhiệt tình, linh hoạt và lạc quan',
        'Trực tiếp, mạnh mẽ và tự tin',
        'Nhẹ nhàng, hài hòa và không đối đầu'
      ]
    },
    'What drives me most is:': {
      question: 'Điều thúc đẩy tôi nhất là:',
      options: [
        'Mong muốn làm đúng và cải thiện mọi thứ',
        'Mong muốn được yêu thương và cần thiết',
        'Mong muốn thành công và được công nhận',
        'Mong muốn tìm thấy ý nghĩa và bản sắc',
        'Mong muốn hiểu biết và năng lực',
        'Mong muốn an ninh và hướng dẫn',
        'Mong muốn hạnh phúc và trải nghiệm',
        'Mong muốn quyền lực và tự chủ',
        'Mong muốn hòa bình và hòa hợp'
      ]
    },
    'In conflict, I tend to:': {
      question: 'Trong xung đột, tôi có xu hướng:',
      options: [
        'Tập trung vào nguyên tắc và điều đúng đắn',
        'Cố gắng giải quyết và khôi phục hòa hợp',
        'Thích nghi và tìm cách giành chiến thắng',
        'Thể hiện cảm xúc mạnh mẽ và rút lui nếu bị tổn thương',
        'Phân tích tình huống và rút lui cảm xúc',
        'Tìm kiếm hỗ trợ và lo lắng về hậu quả',
        'Chuyển hướng chú ý hoặc tìm cách thoát ra',
        'Đối mặt trực tiếp và kiểm soát tình huống',
        'Tránh hoặc trì hoãn và tìm cách hòa giải'
      ]
    }
  };

  return questions.map(question => {
    const translation = translations[question.question];
    if (translation) {
      return {
        ...question,
        question: translation.question,
        options: question.options.map((option: any, index: number) => ({
          ...option,
          text: translation.options[index] || option.text
        }))
      };
    }
    return question;
  });
}

// And so on for other assessments...
