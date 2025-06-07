import { chapters, quizzes, chatMessages, type Chapter, type Quiz, type ChatMessage, type InsertChapter, type InsertQuiz, type InsertChatMessage } from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  // Chapter methods
  getChapters(): Promise<Chapter[]>;
  getChapter(id: number): Promise<Chapter | undefined>;
  
  // Quiz methods
  getQuizByChapterId(chapterId: number): Promise<Quiz | undefined>;
  
  // Chat methods
  saveChatMessage(message: InsertChatMessage): Promise<ChatMessage>;
  getChatHistory(sessionId: string): Promise<ChatMessage[]>;
}

export class MemStorage implements IStorage {
  private chapters: Map<number, Chapter>;
  private quizzes: Map<number, Quiz>;
  private chatMessages: Map<number, ChatMessage>;
  private currentId: number;
  private currentChatId: number;

  constructor() {
    this.chapters = new Map();
    this.quizzes = new Map();
    this.chatMessages = new Map();
    this.currentId = 1;
    this.currentChatId = 1;
    
    this.initializeData();
  }

  private initializeData() {
    // Initialize chapters data
    const chaptersData: Chapter[] = [
      {
        id: 1,
        title: "Nhập Môn Chủ Nghĩa Xã Hội Khoa Học",
        description: "Tìm hiểu về sự ra đời, phát triển và ý nghĩa của Chủ nghĩa xã hội khoa học",
        content: `**MỤC TIÊU:**

**1. Về kiến thức:** Sinh viên có kiến thức cơ bản, hệ thống về sự ra đời, các giai đoạn phát triển; đối tượng, phương pháp và ý nghĩa của việc học tập, nghiên cứu chủ nghĩa xã hội khoa học, một trong ba bộ phận hợp thành chủ nghĩa Mác-Lênin.

**2. Về kỹ năng:** Sinh viên biết vận dụng những tri thức đã học vào vận dụng và giải thích những vấn đề chính trị-xã hội trong đời sống hiện nay.

**3. Về tư tưởng:** Sinh viên có thái độ tích cực với việc học tập các môn lý luận chính trị; có niềm tin vào mục tiêu, lý tưởng và sự thành công của công cuộc đổi mới do Đảng Cộng sản Việt Nam khởi xướng và lãnh đạo.

**NỘI DUNG:**

**1. Sự ra đời của Chủ nghĩa xã hội khoa học**

Chủ nghĩa xã hội khoa học được hiểu theo hai nghĩa:

- **Theo nghĩa rộng:** Chủ nghĩa xã hội khoa học là chủ nghĩa Mác-Lênin, luận giải từ các góc độ triết học, kinh tế học chính trị và chính trị-xã hội về sự chuyển biến tất yếu của xã hội loài người từ chủ nghĩa tư bản lên chủ nghĩa xã hội và chủ nghĩa cộng sản.

- **Theo nghĩa hẹp:** Chủ nghĩa xã hội khoa học là một trong ba bộ phận hợp thành chủ nghĩa Mác-Lênin. V.I.Lênin khẳng định: "Nó là người thừa kế chính đáng của tất cả những cái tốt đẹp nhất mà loài người đã tạo ra hồi thế kỷ XIX, đó là triết học Đức, kinh tế chính trị học Anh và chủ nghĩa xã hội Pháp".

**1.1. Hoàn cảnh lịch sử ra đời**

**1.1.1. Điều kiện kinh tế - xã hội**

Vào những năm 40 của thế kỷ XIX, cuộc cách mạng công nghiệp đã hoàn thành ở nước Anh và bắt đầu chuyển sang nước Pháp, Đức làm xuất hiện nền đại công nghiệp. Sự phát triển này làm cho phương thức sản xuất tư bản chủ nghĩa có bước phát triển vượt bậc.

Cùng với quá trình phát triển của nền đại công nghiệp, sự ra đời hai giai cấp có lợi ích cơ bản đối lập nhau: giai cấp tư sản và giai cấp vô sản (giai cấp công nhân). Cuộc đấu tranh của giai cấp vô sản chống lại sự thống trị áp bức của giai cấp tư sản ngày càng phát triển mạnh mẽ:

- Phong trào Hiến chương của những người lao động ở nước Anh (1836-1848)
- Phong trào công nhân dệt ở thành phố Xi-lê-đi, nước Đức (1844)  
- Phong trào công nhân dệt thành phố Li-on, nước Pháp (1831, 1834)

**1.1.2. Tiền đề khoa học tự nhiên và tư tưởng lý luận**

Cuối thế kỷ XVIII, đầu thế kỷ XIX, nhân loại đã đạt nhiều thành tựu to lớn:

**Khoa học tự nhiên:**
- Học thuyết Tiến hóa
- Định luật Bảo toàn và chuyển hóa năng lượng  
- Học thuyết tế bào

**Tư tưởng lý luận:**
- Triết học cổ điển Đức (Ph.Hêghen, L.Phoiơbắc)
- Kinh tế chính trị học cổ điển Anh (A.Smith, D.Ricardo)
- Chủ nghĩa xã hội không tưởng Pháp (Xanh Ximông, S.Phuriê, R.Oen)

Những tiền đề này tạo cơ sở khoa học và phương pháp luận cho các nhà sáng lập Chủ nghĩa xã hội khoa học nghiên cứu những vấn đề lý luận chính trị-xã hội đương thời.`,
        duration: 45,
        order: 1,
        isLocked: false,
      },
      {
        id: 2,
        title: "Sứ Mệnh Lịch Sử của Giai Cấp Công Nhân", 
        description: "Nghiên cứu vai trò, vị trí và sứ mệnh của giai cấp công nhân trong lịch sử",
        content: `**Sứ mệnh lịch sử của giai cấp công nhân**

Giai cấp công nhân là lực lượng xã hội tiên tiến nhất, có sứ mệnh lịch sử đặc biệt trong việc xây dựng xã hội mới.

**Đặc điểm của giai cấp công nhân:**

1. **Về mặt kinh tế:** Giai cấp công nhân không sở hữu tư liệu sản xuất, chỉ có sức lao động để bán cho giai cấp tư sản nhằm duy trì cuộc sống.

2. **Về mặt xã hội:** Là giai cấp bị áp bức, bóc lột trong xã hội tư bản chủ nghĩa, nhưng đồng thời là lực lượng sản xuất chính tạo ra của cải vật chất.

3. **Về mặt chính trị:** Có lợi ích giai cấp rõ ràng, thống nhất và có khả năng tổ chức cao.

**Sứ mệnh lịch sử:**

- Lật đổ chế độ tư bản chủ nghĩa
- Xây dựng chế độ xã hội chủ nghĩa
- Giải phóng bản thân và toàn xã hội
- Xóa bỏ chế độ bóc lột con người

**Điều kiện thực hiện sứ mệnh:**

1. **Điều kiện khách quan:** Sự phát triển của lực lượng sản xuất và mâu thuẫn của chế độ tư bản chủ nghĩa
2. **Điều kiện chủ quan:** Ý thức giai cấp, tổ chức và lãnh đạo của đảng cộng sản

Giai cấp công nhân cần có đảng cách mạng lãnh đạo, có lý luận khoa học chỉ đạo và liên minh với các tầng lớp nhân dân khác để hoàn thành sứ mệnh lịch sử của mình.`,
        duration: 50,
        order: 2,
        isLocked: false,
      },
      {
        id: 3,
        title: "Dân Chủ Xã Hội Chủ Nghĩa và Nhà Nước Xã Hội Chủ Nghĩa",
        description: "Tìm hiểu về bản chất, đặc điểm của dân chủ và nhà nước xã hội chủ nghĩa",
        content: `**Dân chủ xã hội chủ nghĩa và Nhà nước xã hội chủ nghĩa**

**I. DÂN CHỦ XÃ HỘI CHỦ NGHĨA**

**1. Khái niệm và bản chất**

Dân chủ xã hội chủ nghĩa là hình thức tổ chức chính trị của xã hội, trong đó quyền lực thực sự thuộc về nhân dân, do nhân dân và vì nhân dân.

**2. Đặc điểm cơ bản:**

- Quyền lực thuộc về nhân dân lao động
- Đảm bảo quyền làm chủ của nhân dân trong mọi lĩnh vực
- Kết hợp dân chủ trực tiếp và dân chủ đại diện
- Đảm bảo quyền con người và quyền công dân

**3. Nội dung cơ bản:**

- Dân chủ kinh tế: Nhân dân làm chủ về tư liệu sản xuất và quá trình sản xuất
- Dân chủ chính trị: Nhân dân tham gia quản lý nhà nước và xã hội
- Dân chủ xã hội: Bình đẳng về cơ hội phát triển
- Dân chủ tư tưởng: Tự do tư tưởng trong khuôn khổ pháp luật

**II. NHÀ NƯỚC XÃ HỘI CHỦ NGHĨA**

**1. Bản chất:**

Nhà nước xã hội chủ nghĩa là nhà nước của nhân dân, do nhân dân và vì nhân dân, thể hiện ý chí và lợi ích của giai cấp công nhân và nhân dân lao động.

**2. Đặc điểm:**

- Giai cấp lãnh đạo: Giai cấp công nhân
- Lực lượng nòng cốt: Liên minh công nhân-nông dân
- Mặt trận thống nhất: Toàn dân tộc
- Đảng lãnh đạo: Đảng cộng sản

**3. Chức năng cơ bản:**

- Chức năng đối nội: Tổ chức xây dựng kinh tế, văn hóa, xã hội
- Chức năng đối ngoại: Bảo vệ độc lập, chủ quyền dân tộc
- Chức năng bảo vệ pháp chế xã hội chủ nghĩa

**4. Nguyên tắc tổ chức và hoạt động:**

- Tập trung dân chủ
- Tập thể lãnh đạo, cá nhân phụ trách
- Pháp chế xã hội chủ nghĩa
- Công khai, minh bạch

Mối quan hệ giữa dân chủ xã hội chủ nghĩa và nhà nước xã hội chủ nghĩa là mối quan hệ thống nhất biện chứng, trong đó dân chủ là mục tiêu, nhà nước là công cụ thực hiện.`,
        duration: 60,
        order: 3,
        isLocked: false,
      },
      {
        id: 4,
        title: "Cơ Cấu Xã Hội - Giai Cấp và Liên Minh Giai Cấp",
        description: "Phân tích cơ cấu xã hội, mối quan hệ giai cấp trong thời kỳ quá độ",
        content: `**Cơ cấu xã hội - giai cấp và liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên chủ nghĩa xã hội**

**I. CƠ CẤU XÃ HỘI TRONG THỜI KỲ QUÁ ĐỘ**

**1. Đặc điểm chung:**

Cơ cấu xã hội trong thời kỳ quá độ lên chủ nghĩa xã hội có tính phức tạp, đa dạng với sự tồn tại đồng thời của nhiều giai cấp, tầng lớp xã hội khác nhau.

**2. Các giai cấp, tầng lớp cơ bản:**

- **Giai cấp công nhân:** Lực lượng lãnh đạo xã hội
- **Giai cấp nông dân:** Đồng minh chủ yếu của giai cấp công nhân
- **Tầng lớp trí thức:** Lực lượng quan trọng trong xây dựng đất nước
- **Các tầng lớp khác:** Tiểu thương, thủ công nghiệp, doanh nhân...

**II. LIÊN MINH GIAI CẤP**

**1. Liên minh công nhân - nông dân:**

- **Cơ sở:** Lợi ích cơ bản thống nhất trong việc chống bóc lột, áp bức
- **Nội dung:** Hợp tác trong sản xuất, đấu tranh chính trị, xây dựng xã hội mới
- **Nguyên tắc:** Giai cấp công nhân lãnh đạo, nông dân là đồng minh chủ yếu

**2. Liên minh với tầng lớp trí thức:**

- **Ý nghĩa:** Đảm bảo nguồn nhân lực trí tuệ cho sự nghiệp xây dựng đất nước
- **Hình thức:** Thu hút, đoàn kết, giáo dục và cải tạo
- **Mục tiêu:** Xây dựng đội ngũ trí thức cách mạng, phục vụ nhân dân

**III. CHÍNH SÁCH ĐỐI VỚI CÁC GIAI CẤP, TẦNG LỚP**

**1. Đối với giai cấp công nhân:**

- Nâng cao ý thức giai cấp và trình độ
- Tăng cường vai trò lãnh đạo
- Cải thiện điều kiện sống và làm việc

**2. Đối với giai cấp nông dân:**

- Cải cách ruộng đất, hợp tác hóa nông nghiệp
- Nâng cao trình độ kỹ thuật và ý thức
- Cải thiện đời sống nông thôn

**3. Đối với tầng lớp trí thức:**

- Chính sách đoàn kết, giáo dục, cải tạo
- Tạo điều kiện phát huy tài năng
- Xây dựng đội ngũ trí thức mới

**4. Đối với các tầng lớp khác:**

- Chính sách linh hoạt, phù hợp với từng tầng lớp
- Hạn chế và cải tạo các yếu tố tiêu cực
- Thu hút tham gia xây dựng đất nước

Sự thống nhất và liên minh giữa các giai cấp, tầng lớp là điều kiện quan trọng đảm bảo thành công của sự nghiệp cách mạng xã hội chủ nghĩa.`,
        duration: 55,
        order: 4,
        isLocked: true,
      },
      {
        id: 5,
        title: "Vấn Đề Dân Tộc và Tôn Giáo",
        description: "Nghiên cứu chính sách dân tộc và tôn giáo trong thời kỳ quá độ lên chủ nghĩa xã hội",
        content: `**Vấn đề dân tộc và tôn giáo trong thời kỳ quá độ lên chủ nghĩa xã hội**

**I. VẤN ĐỀ DÂN TỘC**

**1. Quan điểm về dân tộc:**

- Dân tộc là cộng đồng người có chung ngôn ngữ, lãnh thổ, đời sống kinh tế và những nét đặc trưng tâm lý văn hóa được biểu hiện trong cộng đồng văn hóa
- Dân tộc là hiện tượng lịch sử-xã hội, có quá trình hình thành, phát triển và biến đổi

**2. Đặc điểm của vấn đề dân tộc trong thời kỳ quá độ:**

- Tính phức tạp: Do sự tồn tại đồng thời của nhiều dân tộc khác nhau
- Tính nhạy cảm: Liên quan đến truyền thống, văn hóa, tôn giáo
- Tính lâu dài: Cần thời gian để giải quyết triệt để

**3. Nguyên tắc giải quyết vấn đề dân tộc:**

- **Bình đẳng:** Tất cả các dân tộc đều bình đẳng về quyền và nghĩa vụ
- **Đoàn kết:** Tăng cường đoàn kết, gắn bó giữa các dân tộc
- **Tự do:** Tôn trọng quyền tự quyết của các dân tộc
- **Cùng phát triển:** Hỗ trợ các dân tộc ít người phát triển

**4. Chính sách dân tộc:**

- Xóa bỏ mọi hình thức phân biệt dân tộc
- Phát triển kinh tế-xã hội vùng dân tộc thiểu số
- Bảo tồn và phát huy bản sắc văn hóa dân tộc
- Đào tạo đội ngũ cán bộ dân tộc thiểu số

**II. VẤN ĐỀ TÔN GIÁO**

**1. Quan điểm về tôn giáo:**

- Tôn giáo là hiện tượng xã hội có nguồn gốc lịch sử sâu xa
- Tôn giáo có vai trò tích cực và tiêu cực trong xã hội
- Tôn giáo sẽ tồn tại lâu dài trong xã hội loài người

**2. Nguyên tắc giải quyết vấn đề tôn giáo:**

- **Tự do tín ngưỡng, tôn giáo:** Công dân có quyền tự do tín ngưỡng hoặc không tín ngưỡng
- **Bình đẳng:** Không phân biệt đối xử vì lý do tôn giáo
- **Tôn trọng:** Tôn trọng các tín ngưỡng, tôn giáo hợp pháp
- **Không can thiệp:** Nhà nước không can thiệp vào hoạt động tôn giáo hợp pháp

**3. Chính sách tôn giáo:**

- Đảm bảo quyền tự do tín ngưỡng, tôn giáo
- Tôn trọng và bảo vệ di tích tôn giáo
- Khuyến khích tôn giáo tham gia các hoạt động xã hội tích cực
- Ngăn chặn các hoạt động lợi dụng tôn giáo để chống phá

**III. MỐI QUAN HỆ GIỮA VẤN ĐỀ DÂN TỘC VÀ TÔN GIÁO**

- Vấn đề dân tộc và tôn giáo thường gắn kết chặt chẽ với nhau
- Cần giải quyết đồng bộ, không tách rời
- Phải cân nhắc cẩn trọng để tránh xung đột
- Sử dụng vai trò tích cực của tôn giáo trong việc đoàn kết dân tộc

Giải quyết tốt vấn đề dân tộc và tôn giáo là điều kiện quan trọng để xây dựng xã hội đoàn kết, thống nhất và phát triển bền vững.`,
        duration: 65,
        order: 5,
        isLocked: true,
      },
      {
        id: 6,
        title: "Vấn Đề Gia Đình Trong Thời Kỳ Quá Độ",
        description: "Phân tích vai trò và những thay đổi của gia đình trong xã hội mới",
        content: `**Vấn đề gia đình trong thời kỳ quá độ lên chủ nghĩa xã hội**

**I. KHÁI NIỆM VÀ VỊ TRÍ CỦA GIA ĐÌNH**

**1. Khái niệm:**

Gia đình là tế bào cơ bản của xã hội, là cộng đồng những người có quan hệ hôn nhân, huyết thống hoặc nuôi dưỡng, cùng chung sống và có nghĩa vụ, trách nhiệm với nhau.

**2. Vị trí, vai trò:**

- Gia đình là đơn vị cơ bản của xã hội
- Là nơi sinh sản, nuôi dưỡng thế hệ trẻ
- Là môi trường giáo dục đạo đức, nhân cách
- Là đơn vị kinh tế cơ bản trong một số lĩnh vực

**II. ĐỘC ĐIỂM CỦA GIA ĐÌNH TRONG THỜI KỲ QUÁ ĐỘ**

**1. Sự thay đổi về cấu trúc:**

- Từ gia đình đa thế hệ sang gia đình hạt nhân
- Quy mô gia đình có xu hướng giảm
- Cơ cấu quyền lực trong gia đình thay đổi

**2. Sự thay đổi về chức năng:**

- Chức năng kinh tế: Từ đơn vị sản xuất độc lập sang đơn vị tiêu dùng
- Chức năng xã hội: Tăng cường vai trò giáo dục, chăm sóc
- Chức năng tâm lý: Nơi nghỉ ngơi, chia sẻ tinh thần

**3. Những vấn đề mới nảy sinh:**

- Xung đột giữa các thế hệ
- Vấn đề cân bằng giữa công việc và gia đình
- Ảnh hưởng của đô thị hóa, công nghiệp hóa

**III. CHÍNH SÁCH ĐỐI VỚI GIA ĐÌNH**

**1. Mục tiêu:**

- Xây dựng gia đình văn minh, hạnh phúc, bền vững
- Phát huy vai trò tích cực của gia đình trong xã hội
- Bảo vệ quyền lợi hợp pháp của các thành viên gia đình

**2. Các chính sách cụ thể:**

**a) Về hôn nhân:**
- Tự do trong hôn nhân
- Bình đẳng giới trong gia đình
- Khuyến khích kết hôn muộn, sinh con có kế hoạch

**b) Về nuôi dạy con:**
- Đảm bảo quyền trẻ em
- Giáo dục toàn diện cho trẻ
- Hỗ trợ gia đình trong việc nuôi dạy con

**c) Về người cao tuổi:**
- Khuyến khích hiếu thảo, chăm sóc cha mẹ
- Xây dựng hệ thống an sinh xã hội
- Phát huy vai trò của người cao tuổi

**3. Các biện pháp hỗ trợ:**

- Phát triển các dịch vụ xã hội hóa
- Cải thiện điều kiện nhà ở, y tế, giáo dục
- Xây dựng văn hóa gia đình tốt đẹp

**IV. GIẢI PHÓNG PHỤ NỮ VÀ BÌNH ĐẲNG GIỚI**

**1. Vị trí, vai trò của phụ nữ:**

- Phụ nữ chiếm một nửa dân số, là lực lượng quan trọng
- Có vai trò đặc biệt trong sinh sản, nuôi dạy con
- Cần được giải phóng khỏi mọi sự áp bức, bất bình đẳng

**2. Nội dung giải phóng phụ nữ:**

- Giải phóng kinh tế: Tham gia lao động xã hội, độc lập kinh tế
- Giải phóng chính trị: Tham gia quản lý nhà nước, xã hội
- Giải phóng văn hóa: Được học tập, nâng cao trình độ
- Giải phóng gia đình: Bình đẳng trong hôn nhân, gia đình

**3. Biện pháp thực hiện:**

- Đảm bảo cơ hội việc làm cho phụ nữ
- Phát triển các dịch vụ xã hội hóa việc nhà
- Giáo dục thay đổi quan niệm về vai trò phụ nữ
- Xây dựng pháp luật bảo vệ quyền lợi phụ nữ

Gia đình ổn định, hạnh phúc là nền tảng của xã hội ổn định và phát triển. Việc giải quyết tốt các vấn đề gia đình góp phần quan trọng vào việc xây dựng xã hội mới.`,
        duration: 70,
        order: 6,
        isLocked: true,
      },
      {
        id: 7,
        title: "Tổng Kết Chủ Nghĩa Xã Hội Khoa Học",
        description: "Ôn tập, hệ thống hóa và đánh giá toàn bộ kiến thức đã học",
        content: `**Tổng kết Chủ nghĩa xã hội khoa học**

**I. TỔNG QUAN VỀ CHỦ NGHĨA XÃ HỘI KHOA HỌC**

**1. Bản chất và ý nghĩa:**

Chủ nghĩa xã hội khoa học là hệ thống lý luận khoa học về sự phát triển của xã hội loài người, về con đường và phương pháp chuyển từ chủ nghĩa tư bản lên chủ nghĩa xã hội và chủ nghĩa cộng sản.

**2. Các thành tựu chính:**

- Khám phá ra quy luật phát triển của xã hội loài người
- Chứng minh tính tất yếu của chủ nghĩa xã hội
- Xác định lực lượng và con đường cách mạng
- Vạch ra những nguyên tắc cơ bản của xã hội mới

**II. HỆ THỐNG KIẾN THỨC CƠ BẢN**

**1. Về sự ra đời và phát triển:**

- Điều kiện lịch sử ra đời
- Cơ sở khoa học tự nhiên và xã hội
- Quá trình phát triển và hoàn thiện

**2. Về lực lượng cách mạng:**

- Giai cấp công nhân và sứ mệnh lịch sử
- Vai trò của Đảng cộng sản
- Liên minh các giai cấp, tầng lớp

**3. Về xã hội xã hội chủ nghĩa:**

- Dân chủ xã hội chủ nghĩa
- Nhà nước xã hội chủ nghĩa
- Cơ cấu xã hội trong thời kỳ quá độ

**4. Về các vấn đề xã hội:**

- Vấn đề dân tộc và tôn giáo
- Vấn đề gia đình và giải phóng phụ nữ
- Các vấn đề xã hội khác

**III. Ý NGHĨA THỰC TIỄN**

**1. Đối với việc nhận thức thế giới:**

- Cung cấp thế giới quan khoa học
- Giúp hiểu đúng quy luật phát triển xã hội
- Định hướng tư duy và hành động

**2. Đối với thực tiễn cách mạng:**

- Làm cơ sở lý luận cho hoạt động thực tiễn
- Hướng dẫn xây dựng chiến lược, đường lối
- Định hướng công tác tuyên truyền, giáo dục

**3. Đối với Việt Nam hiện tại:**

- Cơ sở lý luận cho công cuộc đổi mới
- Hướng dẫn xây dựng chủ nghĩa xã hội ở Việt Nam
- Định hướng phát triển đất nước

**IV. NHỮNG VẤN ĐỀ ĐẶT RA TRONG THỜI ĐẠI MỚI**

**1. Thách thức:**

- Toàn cầu hóa và hội nhập quốc tế
- Phát triển khoa học - công nghệ
- Biến đổi khí hậu và môi trường
- An ninh, quốc phòng trong thời đại mới

**2. Nhiệm vụ:**

- Vận dụng sáng tạo lý luận vào thực tiễn
- Phát triển và hoàn thiện lý luận
- Đào tạo thế hệ trẻ có bản lĩnh vững vàng
- Đấu tranh chống các quan điểm sai trái

**V. KẾT LUẬN**

Chủ nghĩa xã hội khoa học không chỉ là hệ thống lý luận khoa học mà còn là kim chỉ nam cho hành động cách mạng. Trong điều kiện mới, cần tiếp tục nghiên cứu, vận dụng và phát triển sáng tạo những nguyên lý cơ bản của chủ nghĩa xã hội khoa học để phục vụ sự nghiệp xây dựng và bảo vệ Tổ quốc, xây dựng chủ nghĩa xã hội ở Việt Nam.

**Câu hỏi ôn tập:**

1. Trình bày hoàn cảnh lịch sử ra đời của chủ nghĩa xã hội khoa học
2. Phân tích sứ mệnh lịch sử của giai cấp công nhân
3. Bản chất của dân chủ xã hội chủ nghĩa là gì?
4. Đặc điểm cơ cấu xã hội trong thời kỳ quá độ lên chủ nghĩa xã hội
5. Nguyên tắc giải quyết vấn đề dân tộc và tôn giáo
6. Vai trò của gia đình trong xã hội xã hội chủ nghĩa
7. Ý nghĩa của việc học tập chủ nghĩa xã hội khoa học đối với sinh viên hiện nay`,
        duration: 90,
        order: 7,
        isLocked: true,
      },
    ];

    chaptersData.forEach(chapter => {
      this.chapters.set(chapter.id, chapter);
    });

    // Initialize quiz data
    const quizzesData: Quiz[] = [
      {
        id: 1,
        chapterId: 1,
        title: "Bài Kiểm Tra: Nhập Môn Chủ Nghĩa Xã Hội Khoa Học",
        questions: [
          {
            id: "q1_1",
            text: "Chủ nghĩa xã hội khoa học theo nghĩa hẹp là gì?",
            options: [
              { value: "A", text: "Toàn bộ hệ thống chủ nghĩa Mác-Lênin" },
              { value: "B", text: "Một trong ba bộ phận hợp thành chủ nghĩa Mác-Lênin" },
              { value: "C", text: "Chỉ bao gồm triết học Đức" },
              { value: "D", text: "Chỉ bao gồm kinh tế chính trị học Anh" }
            ],
            correctAnswer: "B",
            explanation: "Theo nghĩa hẹp, chủ nghĩa xã hội khoa học là một trong ba bộ phận hợp thành chủ nghĩa Mác-Lênin, cùng với triết học Mác và kinh tế chính trị học Mác."
          },
          {
            id: "q1_2",
            text: "Cuộc cách mạng công nghiệp vào những năm 40 của thế kỷ XIX đã tạo ra điều gì?",
            options: [
              { value: "A", text: "Sự phát triển của nông nghiệp" },
              { value: "B", text: "Nền đại công nghiệp và hai giai cấp đối lập" },
              { value: "C", text: "Sự thống nhất giữa các giai cấp" },
              { value: "D", text: "Chế độ phong kiến mạnh mẽ" }
            ],
            correctAnswer: "B",
            explanation: "Cuộc cách mạng công nghiệp đã làm xuất hiện nền đại công nghiệp và hai giai cấp có lợi ích cơ bản đối lập: giai cấp tư sản và giai cấp vô sản (công nhân)."
          },
          {
            id: "q1_3",
            text: "Theo V.I.Lênin, chủ nghĩa Mác-Lênin là người thừa kế của những gì?",
            options: [
              { value: "A", text: "Triết học Đức, kinh tế chính trị học Anh, chủ nghĩa xã hội Pháp" },
              { value: "B", text: "Chỉ triết học Đức" },
              { value: "C", text: "Chỉ kinh tế chính trị học Anh" },
              { value: "D", text: "Chỉ chủ nghĩa xã hội Pháp" }
            ],
            correctAnswer: "A",
            explanation: "V.I.Lênin khẳng định chủ nghĩa Mác-Lênin là người thừa kế chính đáng của tất cả những cái tốt đẹp nhất mà loài người đã tạo ra hồi thế kỷ XIX: triết học Đức, kinh tế chính trị học Anh và chủ nghĩa xã hội Pháp."
          }
        ]
      },
      {
        id: 2,
        chapterId: 2,
        title: "Bài Kiểm Tra: Sứ Mệnh Lịch Sử của Giai Cấp Công Nhân",
        questions: [
          {
            id: "q2_1",
            text: "Đặc điểm cơ bản về mặt kinh tế của giai cấp công nhân là gì?",
            options: [
              { value: "A", text: "Sở hữu nhiều tư liệu sản xuất" },
              { value: "B", text: "Không sở hữu tư liệu sản xuất, chỉ có sức lao động" },
              { value: "C", text: "Chỉ làm việc trong nông nghiệp" },
              { value: "D", text: "Chỉ làm việc trong thương mại" }
            ],
            correctAnswer: "B",
            explanation: "Về mặt kinh tế, giai cấp công nhân không sở hữu tư liệu sản xuất, chỉ có sức lao động để bán cho giai cấp tư sản nhằm duy trì cuộc sống."
          },
          {
            id: "q2_2",
            text: "Sứ mệnh lịch sử của giai cấp công nhân bao gồm những gì?",
            options: [
              { value: "A", text: "Chỉ lật đổ chế độ tư bản chủ nghĩa" },
              { value: "B", text: "Lật đổ chế độ tư bản chủ nghĩa và xây dựng chế độ xã hội chủ nghĩa" },
              { value: "C", text: "Chỉ bảo vệ lợi ích riêng của mình" },
              { value: "D", text: "Chỉ cải thiện điều kiện làm việc" }
            ],
            correctAnswer: "B",
            explanation: "Sứ mệnh lịch sử của giai cấp công nhân bao gồm: lật đổ chế độ tư bản chủ nghĩa, xây dựng chế độ xã hội chủ nghĩa, giải phóng bản thân và toàn xã hội, xóa bỏ chế độ bóc lột con người."
          },
          {
            id: "q2_3",
            text: "Điều kiện chủ quan để giai cấp công nhân thực hiện sứ mệnh lịch sử là gì?",
            options: [
              { value: "A", text: "Chỉ cần có lực lượng đông đảo" },
              { value: "B", text: "Ý thức giai cấp, tổ chức và lãnh đạo của đảng cộng sản" },
              { value: "C", text: "Chỉ cần có tiền bạc" },
              { value: "D", text: "Chỉ cần có vũ khí" }
            ],
            correctAnswer: "B",
            explanation: "Điều kiện chủ quan để giai cấp công nhân thực hiện sứ mệnh lịch sử là ý thức giai cấp, tổ chức và lãnh đạo của đảng cộng sản, cùng với liên minh với các tầng lớp nhân dân khác."
          }
        ]
      },
      {
        id: 3,
        chapterId: 3,
        title: "Bài Kiểm Tra: Dân Chủ và Nhà Nước Xã Hội Chủ Nghĩa",
        questions: [
          {
            id: "q3_1",
            text: "Bản chất của dân chủ xã hội chủ nghĩa là gì?",
            options: [
              { value: "A", text: "Quyền lực thuộc về giai cấp tư sản" },
              { value: "B", text: "Quyền lực thực sự thuộc về nhân dân, do nhân dân và vì nhân dân" },
              { value: "C", text: "Quyền lực thuộc về một nhóm nhỏ người" },
              { value: "D", text: "Quyền lực thuộc về quân đội" }
            ],
            correctAnswer: "B",
            explanation: "Dân chủ xã hội chủ nghĩa là hình thức tổ chức chính trị của xã hội, trong đó quyền lực thực sự thuộc về nhân dân, do nhân dân và vì nhân dân."
          },
          {
            id: "q3_2",
            text: "Giai cấp lãnh đạo trong nhà nước xã hội chủ nghĩa là giai cấp nào?",
            options: [
              { value: "A", text: "Giai cấp tư sản" },
              { value: "B", text: "Giai cấp công nhân" },
              { value: "C", text: "Giai cấp phong kiến" },
              { value: "D", text: "Giai cấp tiểu tư sản" }
            ],
            correctAnswer: "B",
            explanation: "Trong nhà nước xã hội chủ nghĩa, giai cấp lãnh đạo là giai cấp công nhân, với lực lượng nòng cốt là liên minh công nhân-nông dân."
          },
          {
            id: "q3_3",
            text: "Nguyên tắc tổ chức và hoạt động cơ bản của nhà nước xã hội chủ nghĩa là gì?",
            options: [
              { value: "A", text: "Tập trung dân chủ" },
              { value: "B", text: "Cá nhân chuyên quyền" },
              { value: "C", text: "Tự do tuyệt đối" },
              { value: "D", text: "Tập trung tuyệt đối" }
            ],
            correctAnswer: "A",
            explanation: "Các nguyên tắc tổ chức và hoạt động cơ bản của nhà nước xã hội chủ nghĩa bao gồm: tập trung dân chủ, tập thể lãnh đạo cá nhân phụ trách, pháp chế xã hội chủ nghĩa, công khai minh bạch."
          }
        ]
      },
      {
        id: 4,
        chapterId: 4,
        title: "Bài Kiểm Tra: Cơ Cấu Xã Hội và Liên Minh Giai Cấp",
        questions: [
          {
            id: "q4_1",
            text: "Đặc điểm của cơ cấu xã hội trong thời kỳ quá độ lên chủ nghĩa xã hội là gì?",
            options: [
              { value: "A", text: "Đơn giản, chỉ có một giai cấp" },
              { value: "B", text: "Phức tạp, đa dạng với nhiều giai cấp tầng lớp khác nhau" },
              { value: "C", text: "Chỉ có giai cấp công nhân" },
              { value: "D", text: "Chỉ có giai cấp nông dân" }
            ],
            correctAnswer: "B",
            explanation: "Cơ cấu xã hội trong thời kỳ quá độ lên chủ nghĩa xã hội có tính phức tạp, đa dạng với sự tồn tại đồng thời của nhiều giai cấp, tầng lớp xã hội khác nhau."
          },
          {
            id: "q4_2",
            text: "Cơ sở của liên minh công nhân - nông dân là gì?",
            options: [
              { value: "A", text: "Lợi ích kinh tế khác nhau" },
              { value: "B", text: "Lợi ích cơ bản thống nhất trong việc chống bóc lột, áp bức" },
              { value: "C", text: "Không có lợi ích chung" },
              { value: "D", text: "Chỉ do áp đặt từ trên xuống" }
            ],
            correctAnswer: "B",
            explanation: "Cơ sở của liên minh công nhân - nông dân là lợi ích cơ bản thống nhất trong việc chống bóc lột, áp bức và xây dựng xã hội mới."
          },
          {
            id: "q4_3",
            text: "Ý nghĩa của liên minh với tầng lớp trí thức là gì?",
            options: [
              { value: "A", text: "Không có ý nghĩa gì" },
              { value: "B", text: "Đảm bảo nguồn nhân lực trí tuệ cho sự nghiệp xây dựng đất nước" },
              { value: "C", text: "Chỉ để trang trí" },
              { value: "D", text: "Để kiểm soát trí thức" }
            ],
            correctAnswer: "B",
            explanation: "Liên minh với tầng lớp trí thức có ý nghĩa đảm bảo nguồn nhân lực trí tuệ cho sự nghiệp xây dựng đất nước và xây dựng đội ngũ trí thức cách mạng phục vụ nhân dân."
          }
        ]
      },
      {
        id: 5,
        chapterId: 5,
        title: "Bài Kiểm Tra: Vấn Đề Dân Tộc và Tôn Giáo",
        questions: [
          {
            id: "q5_1",
            text: "Dân tộc được hiểu như thế nào?",
            options: [
              { value: "A", text: "Chỉ là nhóm người cùng màu da" },
              { value: "B", text: "Cộng đồng người có chung ngôn ngữ, lãnh thổ, đời sống kinh tế và đặc trưng tâm lý văn hóa" },
              { value: "C", text: "Chỉ là nhóm người cùng tôn giáo" },
              { value: "D", text: "Chỉ là nhóm người cùng nghề nghiệp" }
            ],
            correctAnswer: "B",
            explanation: "Dân tộc là cộng đồng người có chung ngôn ngữ, lãnh thổ, đời sống kinh tế và những nét đặc trưng tâm lý văn hóa được biểu hiện trong cộng đồng văn hóa."
          },
          {
            id: "q5_2",
            text: "Nguyên tắc cơ bản trong giải quyết vấn đề dân tộc là gì?",
            options: [
              { value: "A", text: "Phân biệt đối xử giữa các dân tộc" },
              { value: "B", text: "Bình đẳng, đoàn kết, tự do và cùng phát triển" },
              { value: "C", text: "Ưu tiên một dân tộc duy nhất" },
              { value: "D", text: "Tách biệt các dân tộc" }
            ],
            correctAnswer: "B",
            explanation: "Các nguyên tắc giải quyết vấn đề dân tộc bao gồm: bình đẳng (tất cả các dân tộc đều bình đẳng), đoàn kết, tự do và cùng phát triển."
          },
          {
            id: "q5_3",
            text: "Nguyên tắc về tự do tín ngưỡng, tôn giáo được hiểu như thế nào?",
            options: [
              { value: "A", text: "Buộc mọi người phải theo một tôn giáo" },
              { value: "B", text: "Công dân có quyền tự do tín ngưỡng hoặc không tín ngưỡng" },
              { value: "C", text: "Cấm tất cả tôn giáo" },
              { value: "D", text: "Chỉ cho phép một tôn giáo duy nhất" }
            ],
            correctAnswer: "B",
            explanation: "Nguyên tắc tự do tín ngưỡng, tôn giáo có nghĩa là công dân có quyền tự do tín ngưỡng hoặc không tín ngưỡng, không phân biệt đối xử vì lý do tôn giáo."
          }
        ]
      },
      {
        id: 6,
        chapterId: 6,
        title: "Bài Kiểm Tra: Vấn Đề Gia Đình Trong Thời Kỳ Quá Độ",
        questions: [
          {
            id: "q6_1",
            text: "Gia đình được định nghĩa như thế nào?",
            options: [
              { value: "A", text: "Chỉ là nhóm người sống chung nhà" },
              { value: "B", text: "Tế bào cơ bản của xã hội, cộng đồng người có quan hệ hôn nhân, huyết thống hoặc nuôi dưỡng" },
              { value: "C", text: "Chỉ là đơn vị kinh tế" },
              { value: "D", text: "Chỉ là tổ chức chính trị" }
            ],
            correctAnswer: "B",
            explanation: "Gia đình là tế bào cơ bản của xã hội, là cộng đồng những người có quan hệ hôn nhân, huyết thống hoặc nuôi dưỡng, cùng chung sống và có nghĩa vụ, trách nhiệm với nhau."
          },
          {
            id: "q6_2",
            text: "Xu hướng thay đổi cấu trúc gia đình trong thời kỳ quá độ là gì?",
            options: [
              { value: "A", text: "Từ gia đình hạt nhân sang gia đình đa thế hệ" },
              { value: "B", text: "Từ gia đình đa thế hệ sang gia đình hạt nhân" },
              { value: "C", text: "Không có sự thay đổi" },
              { value: "D", text: "Gia đình ngày càng lớn hơn" }
            ],
            correctAnswer: "B",
            explanation: "Trong thời kỳ quá độ, cấu trúc gia đình có xu hướng thay đổi từ gia đình đa thế hệ sang gia đình hạt nhân, với quy mô gia đình có xu hướng giảm."
          },
          {
            id: "q6_3",
            text: "Nội dung cơ bản của giải phóng phụ nữ bao gồm những gì?",
            options: [
              { value: "A", text: "Chỉ giải phóng kinh tế" },
              { value: "B", text: "Giải phóng kinh tế, chính trị, văn hóa và gia đình" },
              { value: "C", text: "Chỉ giải phóng chính trị" },
              { value: "D", text: "Chỉ giải phóng văn hóa" }
            ],
            correctAnswer: "B",
            explanation: "Nội dung giải phóng phụ nữ bao gồm: giải phóng kinh tế (tham gia lao động xã hội), giải phóng chính trị (tham gia quản lý), giải phóng văn hóa (được học tập) và giải phóng gia đình (bình đẳng trong hôn nhân)."
          }
        ]
      },
      {
        id: 7,
        chapterId: 7,
        title: "Bài Kiểm Tra Tổng Hợp: Chủ Nghĩa Xã Hội Khoa Học",
        questions: [
          {
            id: "q7_1",
            text: "Chủ nghĩa xã hội khoa học đã khám phá ra điều gì quan trọng nhất?",
            options: [
              { value: "A", text: "Các quy luật vật lý" },
              { value: "B", text: "Quy luật phát triển của xã hội loài người" },
              { value: "C", text: "Các quy luật toán học" },
              { value: "D", text: "Các quy luật sinh học" }
            ],
            correctAnswer: "B",
            explanation: "Thành tựu quan trọng nhất của chủ nghĩa xã hội khoa học là đã khám phá ra quy luật phát triển của xã hội loài người và chứng minh tính tất yếu của chủ nghĩa xã hội."
          },
          {
            id: "q7_2",
            text: "Ý nghĩa thực tiễn của chủ nghĩa xã hội khoa học đối với Việt Nam hiện tại là gì?",
            options: [
              { value: "A", text: "Không có ý nghĩa gì" },
              { value: "B", text: "Cơ sở lý luận cho công cuộc đổi mới và xây dựng chủ nghĩa xã hội" },
              { value: "C", text: "Chỉ có ý nghĩa lịch sử" },
              { value: "D", text: "Chỉ dùng để nghiên cứu" }
            ],
            correctAnswer: "B",
            explanation: "Đối với Việt Nam hiện tại, chủ nghĩa xã hội khoa học là cơ sở lý luận cho công cuộc đổi mới, hướng dẫn xây dựng chủ nghĩa xã hội ở Việt Nam và định hướng phát triển đất nước."
          },
          {
            id: "q7_3",
            text: "Nhiệm vụ của thế hệ trẻ trong việc vận dụng chủ nghĩa xã hội khoa học là gì?",
            options: [
              { value: "A", text: "Chỉ cần học thuộc lòng" },
              { value: "B", text: "Vận dụng sáng tạo vào thực tiễn và đấu tranh chống quan điểm sai trái" },
              { value: "C", text: "Không cần quan tâm" },
              { value: "D", text: "Chỉ cần đọc sách" }
            ],
            correctAnswer: "B",
            explanation: "Nhiệm vụ của thế hệ trẻ là vận dụng sáng tạo lý luận vào thực tiễn, phát triển và hoàn thiện lý luận, có bản lĩnh vững vàng và đấu tranh chống các quan điểm sai trái."
          }
        ]
      }
    ];

    quizzesData.forEach(quiz => {
      this.quizzes.set(quiz.id, quiz);
    });

    this.currentId = chaptersData.length + 1;
  }

  async getChapters(): Promise<Chapter[]> {
    return Array.from(this.chapters.values()).sort((a, b) => a.order - b.order);
  }

  async getChapter(id: number): Promise<Chapter | undefined> {
    return this.chapters.get(id);
  }

  async getQuizByChapterId(chapterId: number): Promise<Quiz | undefined> {
    return Array.from(this.quizzes.values()).find(quiz => quiz.chapterId === chapterId);
  }

  async saveChatMessage(insertMessage: InsertChatMessage): Promise<ChatMessage> {
    const id = this.currentChatId++;
    const message: ChatMessage = { ...insertMessage, id };
    this.chatMessages.set(id, message);
    return message;
  }

  async getChatHistory(sessionId: string): Promise<ChatMessage[]> {
    return Array.from(this.chatMessages.values())
      .filter(msg => msg.sessionId === sessionId)
      .sort((a, b) => a.timestamp - b.timestamp);
  }
}

export const storage = new MemStorage();
