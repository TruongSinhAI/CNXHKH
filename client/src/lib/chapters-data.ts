import type { Chapter, Quiz } from "@shared/schema";

const structuredChapters: Chapter[] = [
  // --- CHƯƠNG 1: NHẬP MÔN CHỦ NGHĨA XÃ HỘI KHOA HỌC ---
  {
  "id": 1,
  "title": "Nhập Môn Chủ Nghĩa Xã Hội Khoa Học",
  "description": "Cung cấp kiến thức cơ bản, hệ thống về sự ra đời, các giai đoạn phát triển; đối tượng, phương pháp và ý nghĩa của việc học tập, nghiên cứu Chủ nghĩa xã hội khoa học, một trong ba bộ phận hợp thành chủ nghĩa Mác - Lênin.",
  "duration": 45,
  "order": 1,
  "isLocked": false,
  "content": [
    {
      "type": "paragraph",
      "text": "Chủ nghĩa xã hội khoa học (CNXHKH) được hiểu theo hai nghĩa. Theo nghĩa rộng, CNXHKH là chủ nghĩa Mác - Lênin, luận giải từ các giác độ triết học, kinh tế chính trị và chính trị - xã hội về sự chuyển biến tất yếu của xã hội loài người từ chủ nghĩa tư bản lên chủ nghĩa xã hội. Theo nghĩa hẹp, CNXHKH là một trong ba bộ phận hợp thành chủ nghĩa Mác - Lênin (Triết học, Kinh tế chính trị và CNXHKH)."
    },
    {
      "type": "heading",
      "level": 2,
      "text": "I. Sự ra đời của Chủ nghĩa xã hội khoa học"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "1. Hoàn cảnh lịch sử ra đời"
    },
    {
      "type": "heading",
      "level": 4,
      "text": "a) Điều kiện kinh tế - xã hội"
    },
    {
      "type": "paragraph",
      "text": "Vào những năm 40 của thế kỷ XIX, cuộc cách mạng công nghiệp phát triển mạnh mẽ ở các nước Tây Âu (Anh, Pháp, Đức) đã tạo ra một lực lượng sản xuất mới là nền đại công nghiệp. Sự phát triển này làm bộc lộ sâu sắc mâu thuẫn giữa lực lượng sản xuất mang tính xã hội hóa ngày càng cao với quan hệ sản xuất tư bản chủ nghĩa dựa trên chế độ chiếm hữu tư nhân về tư liệu sản xuất."
    },
    {
      "type": "paragraph",
      "text": "Hệ quả là sự ra đời của giai cấp vô sản (giai cấp công nhân) và mâu thuẫn đối kháng giữa họ với giai cấp tư sản. Phong trào đấu tranh của giai cấp công nhân phát triển mạnh mẽ, chuyển từ tự phát sang tự giác, từ mục tiêu kinh tế sang mục tiêu chính trị. Các phong trào tiêu biểu:"
    },
    {
      "type": "list",
      "items": [
        "Phong trào Hiến chương ở Anh (1836 - 1848).",
        "Phong trào công nhân dệt ở Xilêdi, Đức (1844).",
        "Phong trào công nhân dệt ở Lion, Pháp (1831 và 1834). Phong trào này đã chuyển từ khẩu hiệu kinh tế \"Sống có việc làm hay là chết trong đấu tranh\" (1831) sang khẩu hiệu chính trị \"Cộng hòa hay là chết\" (1834)."
      ]
    },
    {
      "type": "paragraph",
      "text": "Thực tiễn này chứng tỏ giai cấp công nhân đã trở thành một lực lượng chính trị độc lập, đòi hỏi phải có một lý luận khoa học soi đường và một cương lĩnh chính trị làm kim chỉ nam cho hành động."
    },
    {
      "type": "heading",
      "level": 4,
      "text": "b) Tiền đề khoa học tự nhiên và tư tưởng lý luận"
    },
    {
      "type": "list",
      "items": [
        "Tiền đề khoa học tự nhiên: Ba phát minh vĩ đại của khoa học tự nhiên thế kỷ XIX (Học thuyết tiến hóa của Darwin, Định luật bảo toàn và chuyển hóa năng lượng của Mayer, Học thuyết tế bào của Schleiden và Schwann) đã cung cấp cơ sở khoa học cho sự ra đời của chủ nghĩa duy vật biện chứng và chủ nghĩa duy vật lịch sử.",
        "Tiền đề tư tưởng lý luận: CNXHKH kế thừa trực tiếp ba nguồn lý luận lớn: Triết học cổ điển Đức (phép biện chứng của Hêghen và chủ nghĩa duy vật của Phơ-bách), Kinh tế chính trị học cổ điển Anh (A.Smith, D.Ricardo), và đặc biệt là Chủ nghĩa xã hội không tưởng-phê phán (Xanh Ximông, Phuriê, Ôoen)."
      ]
    },
    {
      "type": "blockquote",
      "text": "Chủ nghĩa xã hội không tưởng-phê phán có nhiều giá trị: thể hiện tinh thần nhân đạo, phê phán sâu sắc xã hội tư bản, đưa ra nhiều dự báo thiên tài về xã hội tương lai. Tuy nhiên, hạn chế lớn nhất là đã không phát hiện ra được quy luật vận động của xã hội và sứ mệnh lịch sử của giai cấp công nhân, không chỉ ra được con đường, biện pháp hiện thực để cải tạo xã hội."
    },
    {
      "type": "heading",
      "level": 3,
      "text": "2. Vai trò của Các Mác và Phriđrích Ăngghen"
    },
    {
      "type": "paragraph",
      "text": "Trên cơ sở tổng kết thực tiễn và kế thừa các giá trị khoa học trước đó, C.Mác và Ph.Ăngghen đã có sự chuyển biến lập trường từ duy tâm sang duy vật, từ dân chủ cách mạng sang cộng sản chủ nghĩa. Bằng trí tuệ thiên tài, hai ông đã thực hiện một cuộc cách mạng trong lý luận, đưa chủ nghĩa xã hội từ không tưởng thành khoa học thông qua ba phát kiến vĩ đại:"
    },
    {
      "type": "list",
      "items": [
        "Phát kiến thứ nhất (Chủ nghĩa duy vật lịch sử): Đã vạch ra quy luật chung của sự vận động xã hội, khẳng định về mặt triết học sự sụp đổ của CNTB và sự thắng lợi của CNXH là tất yếu như nhau.",
        "Phát kiến thứ hai (Học thuyết về giá trị thặng dư): Đã vạch trần bản chất bóc lột của CNTB, khẳng định về mặt kinh tế sự diệt vong không tránh khỏi của CNTB.",
        "Phát kiến thứ ba (Học thuyết về sứ mệnh lịch sử toàn thế giới của giai cấp công nhân): Đã tìm ra lực lượng xã hội có khả năng xóa bỏ CNTB và xây dựng thành công CNXH. Đây là phát kiến đã khắc phục triệt để hạn chế của chủ nghĩa xã hội không tưởng."
      ]
    },
    {
      "type": "blockquote",
      "text": "Tác phẩm \"Tuyên ngôn của Đảng Cộng sản\" (tháng 2/1848) được coi là cương lĩnh chính trị, là kim chỉ nam hành động của phong trào cộng sản và công nhân quốc tế, đánh dấu sự ra đời của Chủ nghĩa xã hội khoa học."
    },
    {
      "type": "heading",
      "level": 2,
      "text": "II. Các giai đoạn phát triển cơ bản của Chủ nghĩa xã hội khoa học"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "1. C. Mác và Ph. Ăngghen phát triển CNXHKH"
    },
    {
      "type": "list",
      "items": [
        "Thời kỳ từ 1848 đến Công xã Pari (1871): Tổng kết kinh nghiệm các cuộc cách mạng, phát triển tư tưởng về đập tan bộ máy nhà nước tư sản và liên minh công-nông.",
        "Thời kỳ sau Công xã Pari đến 1895: Tổng kết kinh nghiệm Công xã Pari, phát triển toàn diện CNXHKH (tác phẩm \"Phê phán Cương lĩnh Gôta\", \"Chống Đuyrinh\")."
      ]
    },
    {
      "type": "heading",
      "level": 3,
      "text": "2. V.I. Lênin vận dụng và phát triển CNXHKH trong điều kiện mới"
    },
    {
      "type": "paragraph",
      "text": "V.I. Lênin đã bảo vệ và phát triển sáng tạo chủ nghĩa Mác trong thời đại đế quốc chủ nghĩa và cách mạng vô sản, biến CNXH từ lý luận thành hiện thực với thắng lợi của Cách mạng Tháng Mười Nga (1917)."
    },
    {
      "type": "list",
      "items": [
        "Trước Cách mạng Tháng Mười: Đấu tranh chống các trào lưu phi mácxít, xây dựng lý luận về đảng kiểu mới của giai cấp công nhân, phát triển lý luận về cách mạng XHCN và chuyên chính vô sản, phát hiện ra quy luật phát triển không đều của CNTB và khả năng thắng lợi của cách mạng ở một nước riêng lẻ.",
        "Sau Cách mạng Tháng Mười: Lãnh đạo công cuộc xây dựng CNXH ở nước Nga Xôviết, phát triển lý luận về thời kỳ quá độ, về chính sách kinh tế mới (NEP), về nhà nước, dân chủ, vấn đề dân tộc và vai trò của văn hóa."
      ]
    },
    {
      "type": "heading",
      "level": 3,
      "text": "3. Sự vận dụng và phát triển sáng tạo từ sau Lênin đến nay"
    },
    {
      "type": "paragraph",
      "text": "Sau khi Lênin qua đời, hệ thống XHCN thế giới hình thành và đạt nhiều thành tựu. Tuy nhiên, cuối thế kỷ XX, mô hình CNXH ở Liên Xô và Đông Âu sụp đổ. Trong bối cảnh đó, các nước XHCN còn lại như Trung Quốc, Việt Nam, Cuba, Lào... đã tiến hành cải cách, đổi mới, tiếp tục kiên định con đường XHCN và có những đóng góp quan trọng vào việc bổ sung, phát triển lý luận về CNXH trong thực tiễn."
    },
    {
      "type": "heading",
      "level": 2,
      "text": "III. Đối tượng, phương pháp và ý nghĩa của việc nghiên cứu CNXHKH"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "1. Đối tượng nghiên cứu"
    },
    {
      "type": "paragraph",
      "text": "Đối tượng nghiên cứu của CNXHKH là những quy luật và tính quy luật chính trị - xã hội của quá trình phát sinh, hình thành và phát triển của hình thái kinh tế - xã hội cộng sản chủ nghĩa; những nguyên tắc cơ bản, những điều kiện, con đường, hình thức và phương pháp đấu tranh cách mạng của giai cấp công nhân và nhân dân lao động nhằm hiện thực hóa sự chuyển biến từ chủ nghĩa tư bản lên chủ nghĩa xã hội và chủ nghĩa cộng sản."
    },
    {
      "type": "heading",
      "level": 3,
      "text": "2. Phương pháp nghiên cứu"
    },
    {
      "type": "list",
      "items": [
        "Phương pháp luận chung: Chủ nghĩa duy vật biện chứng và chủ nghĩa duy vật lịch sử.",
        "Các phương pháp cụ thể: Phương pháp kết hợp lịch sử và lôgíc; phương pháp khảo sát và phân tích về mặt chính trị-xã hội; phương pháp so sánh; các phương pháp có tính liên ngành (thống kê, xã hội học...); phương pháp tổng kết thực tiễn."
      ]
    },
    {
      "type": "heading",
      "level": 3,
      "text": "3. Ý nghĩa của việc nghiên cứu"
    },
    {
      "type": "list",
      "items": [
        "Về mặt lý luận: Trang bị nhận thức chính trị - xã hội khoa học, là vũ khí lý luận của giai cấp công nhân để cải tạo thế giới. Giúp nhận diện và đấu tranh chống lại các quan điểm sai trái, thù địch.",
        "Về mặt thực tiễn: Củng cố niềm tin khoa học vào mục tiêu, lý tưởng xã hội chủ nghĩa và con đường đi lên CNXH, đặc biệt trong bối cảnh thế giới có nhiều biến động. Giáo dục lập trường, bản lĩnh chính trị, hình thành động lực tinh thần cho thế hệ trẻ trong sự nghiệp xây dựng và bảo vệ Tổ quốc."
      ]
    }
  ]
  },
  
  // --- CHƯƠNG 2: SỨ MỆNH LỊCH SỬ CỦA GIAI CẤP CÔNG NHÂN ---
  {
  "id": 2,
  "title": "Sứ Mệnh Lịch Sử Của Giai Cấp Công Nhân",
  "description": "Nắm vững quan điểm cơ bản của chủ nghĩa Mác - Lênin về giai cấp công nhân và sứ mệnh lịch sử thế giới của họ, từ đó có cơ sở lý luận và thực tiễn để củng cố niềm tin, lập trường giai cấp công nhân trong bối cảnh hiện nay.",
  "duration": 50,
  "order": 2,
  "isLocked": false,
  "content": [
    {
      "type": "heading",
      "level": 2,
      "text": "I. Quan điểm cơ bản của chủ nghĩa Mác - Lênin về giai cấp công nhân và sứ mệnh lịch sử của giai cấp công nhân"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "1. Khái niệm và đặc điểm của giai cấp công nhân"
    },
    {
      "type": "heading",
      "level": 4,
      "text": "a) Khái niệm giai cấp công nhân"
    },
    {
      "type": "paragraph",
      "text": "Các Mác và Ph. Ăngghen đã sử dụng nhiều thuật ngữ khác nhau như “giai cấp vô sản”, “giai cấp công nhân hiện đại”, “giai cấp công nhân đại công nghiệp”... để chỉ giai cấp công nhân. Khái niệm này được xác định trên hai phương diện cơ bản:"
    },
    {
      "type": "list",
      "items": [
        "Về phương diện kinh tế - xã hội: Giai cấp công nhân là sản phẩm và là chủ thể của nền sản xuất đại công nghiệp. Họ là những người lao động trực tiếp hay gián tiếp vận hành các công cụ sản xuất có tính chất công nghiệp ngày càng hiện đại và xã hội hóa cao.",
        "Về phương diện chính trị - xã hội: Dưới chế độ tư bản chủ nghĩa, họ là giai cấp không có tư liệu sản xuất, phải bán sức lao động cho nhà tư bản và bị bóc lột giá trị thặng dư. Do đó, lợi ích cơ bản của họ đối lập trực tiếp với lợi ích của giai cấp tư sản."
      ]
    },
    {
      "type": "blockquote",
      "text": "Từ những phân tích trên, có thể định nghĩa: Giai cấp công nhân là một tập đoàn xã hội, hình thành và phát triển cùng với quá trình phát triển của nền công nghiệp hiện đại; họ lao động bằng phương thức công nghiệp và là đại biểu cho phương thức sản xuất mang tính xã hội hóa ngày càng cao. Họ là người làm thuê do không có tư liệu sản xuất, buộc phải bán sức lao động để sống và bị giai cấp tư sản bóc lột giá trị thặng dư. Đó là giai cấp có sứ mệnh phủ định chế độ tư bản chủ nghĩa, xây dựng thành công chủ nghĩa xã hội và chủ nghĩa cộng sản trên toàn thế giới."
    },
    {
      "type": "heading",
      "level": 4,
      "text": "b) Đặc điểm của giai cấp công nhân"
    },
    {
      "type": "list",
      "items": [
        "Lao động bằng phương thức công nghiệp với đặc trưng là máy móc, tạo ra năng suất lao động cao, có tính xã hội hóa.",
        "Là sản phẩm của nền đại công nghiệp, đại biểu cho lực lượng sản xuất và phương thức sản xuất tiên tiến, quyết định sự phát triển của xã hội hiện đại.",
        "Có tính tổ chức, kỷ luật lao động cao, tinh thần hợp tác và tâm lý lao động công nghiệp.",
        "Là giai cấp có tinh thần cách mạng triệt để nhất do có lợi ích đối kháng trực tiếp với giai cấp tư sản."
      ]
    },
    {
      "type": "heading",
      "level": 3,
      "text": "2. Nội dung sứ mệnh lịch sử của giai cấp công nhân"
    },
    {
      "type": "blockquote",
      "text": "Sứ mệnh lịch sử tổng quát của giai cấp công nhân là thông qua chính đảng tiền phong, lãnh đạo nhân dân lao động đấu tranh xóa bỏ chế độ tư bản chủ nghĩa, xóa bỏ chế độ người bóc lột người, giải phóng giai cấp công nhân và toàn thể nhân loại, xây dựng xã hội cộng sản chủ nghĩa văn minh."
    },
    {
      "type": "list",
      "items": [
        "Nội dung kinh tế: Là chủ thể của quá trình sản xuất vật chất hiện đại, giai cấp công nhân có vai trò nòng cốt trong việc giải phóng lực lượng sản xuất, phát triển kinh tế, xây dựng cơ sở vật chất - kỹ thuật cho chủ nghĩa xã hội, tạo ra năng suất lao động xã hội cao hơn.",
        "Nội dung chính trị - xã hội: Lãnh đạo nhân dân lao động lật đổ quyền thống trị của giai cấp tư sản, giành chính quyền về tay mình. Thiết lập nhà nước kiểu mới, xây dựng nền dân chủ xã hội chủ nghĩa, thực hiện quyền lực của nhân dân.",
        "Nội dung văn hóa, tư tưởng: Thực hiện cuộc cách mạng trên lĩnh vực văn hóa, tư tưởng, xây dựng hệ giá trị mới (lao động, công bằng, dân chủ, bình đẳng, tự do). Xây dựng và củng cố ý thức hệ tiên tiến của giai cấp công nhân là chủ nghĩa Mác - Lênin; xây dựng con người mới xã hội chủ nghĩa."
      ]
    },
    {
      "type": "heading",
      "level": 3,
      "text": "3. Điều kiện quy định và thực hiện sứ mệnh lịch sử của giai cấp công nhân"
    },
    {
      "type": "heading",
      "level": 4,
      "text": "a) Điều kiện khách quan"
    },
    {
      "type": "list",
      "items": [
        "Do địa vị kinh tế: Giai cấp công nhân là chủ thể của quá trình sản xuất công nghiệp hiện đại, đại diện cho phương thức sản xuất tiên tiến, quyết định sự tồn tại và phát triển của xã hội hiện đại. Họ là lực lượng phá vỡ quan hệ sản xuất tư bản chủ nghĩa.",
        "Do địa vị chính trị - xã hội: Là giai cấp bị áp bức, bóc lột, có lợi ích cơ bản đối lập trực tiếp với giai cấp tư sản. Điều kiện lao động tập trung đã rèn luyện cho họ tính tổ chức, kỷ luật, đoàn kết và tinh thần cách mạng triệt để."
      ]
    },
    {
      "type": "blockquote",
      "text": "Các Mác và Ph. Ăngghen khẳng định: \"Sự sụp đổ của giai cấp tư sản và thắng lợi của giai cấp vô sản đều là tất yếu như nhau\"."
    },
    {
      "type": "heading",
      "level": 4,
      "text": "b) Điều kiện chủ quan"
    },
    {
      "type": "list",
      "items": [
        "Sự phát triển của bản thân giai cấp công nhân: Bao gồm sự phát triển về số lượng và đặc biệt là về chất lượng (thể hiện ở trình độ giác ngộ lý luận cách mạng, năng lực làm chủ khoa học kỹ thuật).",
        "Vai trò lãnh đạo của Đảng Cộng sản: Đây là nhân tố chủ quan quan trọng nhất. Đảng Cộng sản, đội tiền phong của giai cấp công nhân, ra đời là sự kết hợp giữa chủ nghĩa Mác-Lênin với phong trào công nhân.",
        "Sự liên minh giai cấp: Phải có sự liên minh chặt chẽ giữa giai cấp công nhân với giai cấp nông dân và các tầng lớp lao động khác, tạo thành một khối sức mạnh to lớn dưới sự lãnh đạo của Đảng."
      ]
    },
    {
      "type": "heading",
      "level": 2,
      "text": "II. Giai cấp công nhân và việc thực hiện sứ mệnh lịch sử hiện nay"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "1. Giai cấp công nhân hiện nay"
    },
    {
      "type": "paragraph",
      "text": "Giai cấp công nhân hiện đại vừa có những điểm tương đồng, vừa có những biến đổi, khác biệt so với thế kỷ XIX."
    },
    {
      "type": "list",
      "items": [
        "Những điểm tương đồng: Vẫn là lực lượng sản xuất hàng đầu của xã hội hiện đại; ở các nước tư bản, vẫn bị giai cấp tư sản bóc lột giá trị thặng dư; phong trào của họ vẫn là lực lượng đi đầu trong các cuộc đấu tranh vì hòa bình, dân chủ và tiến bộ xã hội.",
        "Những biến đổi và khác biệt: Có xu hướng \"trí tuệ hóa\" tăng nhanh, hình thành \"công nhân tri thức\". Có xu hướng \"trung lưu hóa\" gia tăng do một bộ phận tham gia sở hữu cổ phần, nhưng bản chất bóc lột không thay đổi. Ở các nước XHCN, họ trở thành giai cấp lãnh đạo, cầm quyền."
      ]
    },
    {
      "type": "heading",
      "level": 3,
      "text": "2. Thực hiện sứ mệnh lịch sử của giai cấp công nhân trên thế giới hiện nay"
    },
    {
      "type": "list",
      "items": [
        "Về kinh tế - xã hội: Đấu tranh chống bất công, bất bình đẳng xã hội, chống bóc lột giá trị thặng dư trong bối cảnh toàn cầu hóa.",
        "Về chính trị - xã hội: Ở các nước tư bản, mục tiêu là đấu tranh vì dân sinh, dân chủ, tiến tới giành chính quyền. Ở các nước XHCN, mục tiêu là lãnh đạo thành công sự nghiệp đổi mới, xây dựng CNXH.",
        "Về văn hóa, tư tưởng: Đấu tranh ý thức hệ giữa CNXH và CNTB; bảo vệ nền tảng tư tưởng của Đảng Cộng sản, củng cố niềm tin vào lý tưởng, mục tiêu XHCN."
      ]
    },
    {
      "type": "heading",
      "level": 2,
      "text": "III. Sứ mệnh lịch sử của giai cấp công nhân Việt Nam"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "1. Đặc điểm của giai cấp công nhân Việt Nam"
    },
    {
      "type": "list",
      "items": [
        "Ra đời trước giai cấp tư sản dân tộc, trực tiếp đối kháng với tư bản thực dân Pháp.",
        "Sớm giác ngộ lý tưởng cách mạng, có tinh thần dân tộc, yêu nước sâu sắc.",
        "Gắn bó mật thiết với giai cấp nông dân và các tầng lớp nhân dân lao động khác.",
        "Sớm có chính đảng của mình lãnh đạo (Đảng Cộng sản Việt Nam), trung thành với sự lãnh đạo của Đảng.",
        "Hiện nay: Tăng nhanh về số lượng và chất lượng, đa dạng về cơ cấu, là lực lượng đi đầu trong sự nghiệp CNH, HĐH."
      ]
    },
    {
      "type": "heading",
      "level": 3,
      "text": "2. Nội dung sứ mệnh lịch sử của giai cấp công nhân Việt Nam hiện nay"
    },
    {
      "type": "blockquote",
      "text": "Đảng ta xác định: GCCN Việt Nam là giai cấp lãnh đạo cách mạng thông qua đội tiền phong là Đảng Cộng sản Việt Nam; giai cấp đại diện cho phương thức sản xuất tiên tiến; giai cấp tiên phong trong sự nghiệp xây dựng CNXH, lực lượng đi đầu trong sự nghiệp CNH, HĐH đất nước."
    },
    {
      "type": "list",
      "items": [
        "Về kinh tế: Là lực lượng đi đầu trong sự nghiệp đẩy mạnh CNH, HĐH đất nước, phát triển kinh tế tri thức.",
        "Về chính trị - xã hội: Giữ vững và tăng cường sự lãnh đạo của Đảng; giữ vững bản chất giai cấp công nhân của Đảng; xây dựng Nhà nước pháp quyền XHCN; củng cố khối liên minh công-nông-trí thức.",
        "Về văn hóa, tư tưởng: Xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc; xây dựng con người mới XHCN; bảo vệ nền tảng tư tưởng của Đảng."
      ]
    },
    {
      "type": "heading",
      "level": 3,
      "text": "3. Phương hướng và giải pháp xây dựng giai cấp công nhân Việt Nam hiện nay"
    },
    {
      "type": "list",
      "items": [
        "Nâng cao nhận thức, kiên định quan điểm giai cấp công nhân là giai cấp lãnh đạo.",
        "Xây dựng giai cấp công nhân lớn mạnh gắn với xây dựng khối liên minh công-nông-trí thức và khối đại đoàn kết toàn dân tộc.",
        "Thực hiện chiến lược xây dựng giai cấp công nhân lớn mạnh, gắn với chiến lược phát triển kinh tế - xã hội, chăm lo đời sống vật chất, tinh thần cho công nhân.",
        "Đào tạo, bồi dưỡng, nâng cao trình độ mọi mặt cho công nhân, không ngừng trí thức hóa giai cấp công nhân.",
        "Đổi mới hoạt động của Đảng, Nhà nước, Công đoàn và toàn hệ thống chính trị trong việc chăm lo xây dựng giai cấp công nhân."
      ]
    }
  ]
  },
  
  // --- CHƯƠNG 3: CHỦ NGHĨA XÃ HỘI VÀ THỜI KỲ QUÁ ĐỘ LÊN CHỦ NGHĨA XÃ HỘI ---
  {
  "id": 3,
  "title": "Chủ Nghĩa Xã Hội và Thời Kỳ Quá Độ Lên Chủ Nghĩa Xã Hội",
  "description": "Nắm được những kiến thức cơ bản về chủ nghĩa xã hội, tính tất yếu và đặc điểm của thời kỳ quá độ lên CNXH. Từ đó, hiểu rõ sự vận dụng sáng tạo của Đảng Cộng sản Việt Nam vào điều kiện cụ thể của đất nước.",
  "duration": 55,
  "order": 3,
  "isLocked": false,
  "content": [
    {
      "type": "heading",
      "level": 2,
      "text": "I. Chủ nghĩa xã hội"
    },
    {
      "type": "paragraph",
      "text": "Chủ nghĩa xã hội (CNXH) được tiếp cận từ các góc độ sau: 1) là phong trào thực tiễn đấu tranh của nhân dân lao động chống áp bức; 2) là trào lưu tư tưởng, lý luận phản ánh lý tưởng giải phóng con người; 3) là một khoa học (Chủ nghĩa xã hội khoa học); 4) là một chế độ xã hội tốt đẹp, giai đoạn đầu của hình thái kinh tế - xã hội cộng sản chủ nghĩa."
    },
    {
      "type": "heading",
      "level": 3,
      "text": "1. Chủ nghĩa xã hội, giai đoạn đầu của hình thái kinh tế - xã hội cộng sản chủ nghĩa"
    },
    {
      "type": "paragraph",
      "text": "Dựa trên học thuyết hình thái kinh tế - xã hội, các nhà sáng lập chủ nghĩa Mác đã chỉ ra sự thay thế hình thái kinh tế - xã hội tư bản chủ nghĩa (TBCN) bằng hình thái kinh tế - xã hội cộng sản chủ nghĩa là một quá trình lịch sử - tự nhiên. Hình thái này được dự báo bao gồm hai giai đoạn phát triển từ thấp lên cao:"
    },
    {
      "type": "list",
      "items": [
        "Giai đoạn thấp: Chủ nghĩa xã hội.",
        "Giai đoạn cao: Chủ nghĩa cộng sản."
      ]
    },
    {
      "type": "heading",
      "level": 3,
      "text": "2. Điều kiện ra đời chủ nghĩa xã hội"
    },
    {
      "type": "list",
      "items": [
        "Điều kiện kinh tế: Sự phát triển của lực lượng sản xuất dưới chủ nghĩa tư bản đạt đến trình độ xã hội hóa cao, mâu thuẫn gay gắt với quan hệ sản xuất dựa trên chế độ chiếm hữu tư nhân TBCN về tư liệu sản xuất.",
        "Điều kiện chính trị - xã hội: Mâu thuẫn trên biểu hiện về mặt xã hội thành mâu thuẫn giữa giai cấp công nhân và giai cấp tư sản. Giai cấp công nhân trưởng thành, cùng với sự ra đời của Đảng Cộng sản, tiến hành cuộc cách mạng vô sản để lật đổ chế độ TBCN."
      ]
    },
    {
      "type": "heading",
      "level": 3,
      "text": "3. Những đặc trưng bản chất của chủ nghĩa xã hội"
    },
    {
      "type": "paragraph",
      "text": "Dựa trên những dự báo của các nhà kinh điển, có thể khái quát những đặc trưng cơ bản của CNXH như sau:"
    },
    {
      "type": "list",
      "items": [
        "Giải phóng giai cấp, giải phóng dân tộc, giải phóng xã hội, giải phóng con người, tạo điều kiện để con người phát triển toàn diện.",
        "Có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và chế độ công hữu về tư liệu sản xuất chủ yếu.",
        "Là chế độ xã hội do nhân dân lao động làm chủ.",
        "Có nhà nước kiểu mới mang bản chất giai cấp công nhân, đại biểu cho lợi ích, quyền lực và ý chí của nhân dân lao động.",
        "Có nền văn hóa phát triển cao, kế thừa và phát huy những giá trị của văn hóa dân tộc và tinh hoa văn hóa nhân loại.",
        "Bảo đảm bình đẳng, đoàn kết giữa các dân tộc và có quan hệ hữu nghị, hợp tác với nhân dân các nước trên thế giới."
      ]
    },
    {
      "type": "heading",
      "level": 2,
      "text": "II. Thời kỳ quá độ lên chủ nghĩa xã hội"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "1. Tính tất yếu khách quan của thời kỳ quá độ"
    },
    {
      "type": "paragraph",
      "text": "CNXH và CNTB khác nhau về bản chất ở mọi phương diện. CNXH không tự phát ra đời từ lòng CNTB mà phải được xây dựng thông qua cuộc cách mạng của giai cấp vô sản. Do đó, tất yếu phải có một thời kỳ quá độ để cải biến cách mạng toàn diện trên mọi lĩnh vực, từ xã hội cũ sang xã hội mới."
    },
    {
      "type": "blockquote",
      "text": "C. Mác khẳng định: \"Giữa xã hội tư bản chủ nghĩa và xã hội cộng sản chủ nghĩa là một thời kỳ cải biến cách mạng từ xã hội nọ sang xã hội kia. Thích ứng với thời kỳ ấy là một thời kỳ quá độ chính trị...\"."
    },
    {
      "type": "paragraph",
      "text": "Có hai hình thức quá độ: (1) Quá độ trực tiếp (từ các nước TBCN phát triển cao) và (2) Quá độ gián tiếp (bỏ qua chế độ TBCN, từ các nước tiền tư bản hoặc TBCN trung bình)."
    },
    {
      "type": "heading",
      "level": 3,
      "text": "2. Đặc điểm của thời kỳ quá độ"
    },
    {
      "type": "paragraph",
      "text": "Thực chất đây là thời kỳ cải tạo cách mạng sâu sắc, toàn diện xã hội TBCN. Đặc điểm bao trùm là sự tồn tại đan xen và đấu tranh giữa những yếu tố của xã hội cũ và những nhân tố mới của CNXH trên các lĩnh vực:"
    },
    {
      "type": "list",
      "items": [
        "Trên lĩnh vực kinh tế: Tồn tại nền kinh tế nhiều thành phần, trong đó có cả các thành phần đối lập. V.I. Lênin chỉ ra ở nước Nga có 5 thành phần kinh tế.",
        "Trên lĩnh vực chính trị: Thiết lập và tăng cường chuyên chính vô sản. Đây là thời kỳ đấu tranh giai cấp gay gắt, quyết liệt giữa giai cấp công nhân đã giành được chính quyền và giai cấp tư sản đã bị đánh đổ nhưng chưa bị tiêu diệt hoàn toàn.",
        "Trên lĩnh vực tư tưởng - văn hóa: Tồn tại đan xen tư tưởng vô sản và tư tưởng tư sản, cùng các tàn dư của hệ tư tưởng cũ. Diễn ra cuộc đấu tranh để xây dựng nền văn hóa mới XHCN.",
        "Trên lĩnh vực xã hội: Tồn tại nhiều giai cấp, tầng lớp xã hội khác nhau, vừa hợp tác vừa đấu tranh với nhau. Còn tồn tại sự khác biệt giữa nông thôn và thành thị, lao động trí óc và lao động chân tay."
      ]
    },
    {
      "type": "heading",
      "level": 2,
      "text": "III. Quá độ lên chủ nghĩa xã hội ở Việt Nam"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "1. Đặc điểm quá độ lên chủ nghĩa xã hội ở Việt Nam là bỏ qua chế độ tư bản chủ nghĩa"
    },
    {
      "type": "paragraph",
      "text": "Việt Nam đi lên CNXH từ một xã hội thuộc địa, nửa phong kiến, lực lượng sản xuất rất thấp, lại trải qua chiến tranh kéo dài. Trong bối cảnh thời đại quá độ từ CNTB lên CNXH trên phạm vi thế giới, con đường này là sự lựa chọn đúng đắn, khoa học, phù hợp với quy luật phát triển khách quan."
    },
    {
      "type": "blockquote",
      "text": "Đảng ta xác định: Quá độ lên CNXH bỏ qua chế độ TBCN là \"bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa, nhưng tiếp thu, kế thừa những thành tựu mà nhân loại đã đạt được dưới chế độ tư bản chủ nghĩa, đặc biệt về khoa học và công nghệ, để phát triển nhanh lực lượng sản xuất, xây dựng nền kinh tế hiện đại\"."
    },
    {
      "type": "heading",
      "level": 3,
      "text": "2. Những đặc trưng của CNXH và phương hướng xây dựng CNXH ở Việt Nam"
    },
    {
      "type": "heading",
      "level": 4,
      "text": "a) Những đặc trưng bản chất của CNXH ở Việt Nam"
    },
    {
      "type": "paragraph",
      "text": "Cương lĩnh (bổ sung, phát triển năm 2011) của Đảng đã xác định mô hình xã hội XHCN mà nhân dân ta xây dựng gồm 8 đặc trưng:"
    },
    {
      "type": "list",
      "items": [
        "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh;",
        "Do nhân dân làm chủ;",
        "Có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và quan hệ sản xuất tiến bộ phù hợp;",
        "Có nền văn hóa tiên tiến, đậm đà bản sắc dân tộc;",
        "Con người có cuộc sống ấm no, tự do, hạnh phúc, có điều kiện phát triển toàn diện;",
        "Các dân tộc trong cộng đồng Việt Nam bình đẳng, đoàn kết, tôn trọng và giúp nhau cùng phát triển;",
        "Có Nhà nước pháp quyền xã hội chủ nghĩa của nhân dân, do nhân dân, vì nhân dân do Đảng Cộng sản lãnh đạo;",
        "Có quan hệ hữu nghị và hợp tác với các nước trên thế giới."
      ]
    },
    {
      "type": "heading",
      "level": 4,
      "text": "b) Phương hướng xây dựng chủ nghĩa xã hội ở Việt Nam"
    },
    {
      "type": "paragraph",
      "text": "Để thực hiện các đặc trưng trên, Cương lĩnh 2011 cũng đã đề ra 8 phương hướng cơ bản:"
    },
    {
      "type": "list",
      "items": [
        "Đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước gắn với phát triển kinh tế tri thức.",
        "Phát triển nền kinh tế thị trường định hướng xã hội chủ nghĩa.",
        "Xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc; xây dựng con người...",
        "Bảo đảm vững chắc quốc phòng và an ninh quốc gia...",
        "Thực hiện đường lối đối ngoại độc lập, tự chủ, hòa bình, hữu nghị...",
        "Xây dựng nền dân chủ xã hội chủ nghĩa, thực hiện đại đoàn kết toàn dân tộc...",
        "Xây dựng Nhà nước pháp quyền xã hội chủ nghĩa của nhân dân, do nhân dân, vì nhân dân.",
        "Xây dựng Đảng trong sạch, vững mạnh."
      ]
    },
    {
      "type": "paragraph",
      "text": "Đồng thời, Đảng yêu cầu phải đặc biệt chú trọng nắm vững và giải quyết tốt các mối quan hệ lớn (quan hệ giữa đổi mới, ổn định và phát triển; giữa kinh tế và chính trị...)."
    }
  ]
  },
  
  // Các chương còn lại đã được cập nhật đầy đủ bên dưới.
  {
  "id": 4,
  "title": "Dân Chủ Xã Hội Chủ Nghĩa và Nhà Nước Xã Hội Chủ Nghĩa",
  "description": "Nắm được những kiến thức cơ bản về dân chủ và dân chủ XHCN, nhà nước và nhà nước XHCN. Từ đó, có thái độ tích cực trong việc góp phần xây dựng nền dân chủ và nhà nước pháp quyền XHCN ở Việt Nam.",
  "duration": 60,
  "order": 4,
  "isLocked": false,
  "content": [
    {
      "type": "heading",
      "level": 2,
      "text": "I. Dân chủ và Dân chủ xã hội chủ nghĩa"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "1. Dân chủ và sự ra đời, phát triển của dân chủ"
    },
    {
      "type": "heading",
      "level": 4,
      "text": "a) Quan niệm về dân chủ"
    },
    {
      "type": "paragraph",
      "text": "Thuật ngữ dân chủ (demokratos) ra đời ở Hy Lạp cổ đại, có nghĩa là \"quyền lực của nhân dân\" hay \"nhân dân cai trị\". Theo quan điểm của chủ nghĩa Mác-Lênin, dân chủ được hiểu trên các phương diện:"
    },
    {
      "type": "list",
      "items": [
        "Về phương diện quyền lực: Dân chủ là quyền lực thuộc về nhân dân, nhân dân là chủ nhân của nhà nước.",
        "Về phương diện chế độ xã hội: Dân chủ là một hình thái nhà nước, một chế độ chính trị.",
        "Về phương diện tổ chức và quản lý xã hội: Dân chủ là một nguyên tắc (nguyên tắc dân chủ).",
        "Với tư cách là một giá trị xã hội: Dân chủ là mục tiêu, tiền đề và phương tiện để vươn tới tự do, giải phóng con người."
      ]
    },
    {
      "type": "heading",
      "level": 4,
      "text": "b) Sự ra đời, phát triển của dân chủ"
    },
    {
      "type": "paragraph",
      "text": "Dân chủ là một phạm trù lịch sử, gắn liền với sự ra đời và phát triển của nhà nước. Lịch sử xã hội có giai cấp đã trải qua các nền dân chủ sau:"
    },
    {
      "type": "list",
      "items": [
        "Dân chủ nguyên thủy (trong xã hội chưa có giai cấp).",
        "Nền dân chủ chủ nô: Dân chủ cho thiểu số là giai cấp chủ nô.",
        "Nền dân chủ tư sản: Là một bước tiến lớn của nhân loại, nhưng về bản chất vẫn là nền dân chủ của thiểu số (giai cấp tư sản) đối với đại đa số nhân dân lao động.",
        "Nền dân chủ xã hội chủ nghĩa: Ra đời sau thắng lợi của cách mạng XHCN, là nền dân chủ cao nhất, thực hiện quyền lực của đại đa số nhân dân."
      ]
    },
    {
      "type": "heading",
      "level": 3,
      "text": "2. Dân chủ xã hội chủ nghĩa"
    },
    {
      "type": "paragraph",
      "text": "Dân chủ xã hội chủ nghĩa (XHCN) chính thức được xác lập với thắng lợi của Cách mạng Tháng Mười Nga (1917). Đây là nền dân chủ cao hơn về chất so với các nền dân chủ trước đó, là nền dân chủ mà ở đó, mọi quyền lực thuộc về nhân dân, đặt dưới sự lãnh đạo của Đảng Cộng sản."
    },
    {
      "type": "blockquote",
      "text": "V.I. Lênin nhận xét: \"Chế độ dân chủ vô sản so với bất cứ chế độ dân chủ tư sản nào, cũng dân chủ hơn gấp triệu lần\"."
    },
    {
      "type": "heading",
      "level": 4,
      "text": "Bản chất của nền dân chủ xã hội chủ nghĩa"
    },
    {
      "type": "list",
      "items": [
        "Bản chất chính trị: Mang bản chất của giai cấp công nhân. Là sự lãnh đạo chính trị của giai cấp công nhân thông qua Đảng Cộng sản để thực hiện quyền lực và lợi ích của toàn thể nhân dân. Do đó, dân chủ XHCN mang tính nhất nguyên về chính trị.",
        "Bản chất kinh tế: Dựa trên chế độ công hữu về những tư liệu sản xuất chủ yếu, nhằm thỏa mãn ngày càng cao nhu cầu vật chất và tinh thần của toàn thể nhân dân. Chế độ phân phối lợi ích theo kết quả lao động là chủ yếu.",
        "Bản chất tư tưởng - văn hóa - xã hội: Lấy hệ tư tưởng của giai cấp công nhân là chủ nghĩa Mác-Lênin làm chủ đạo. Kế thừa và phát huy tinh hoa văn hóa dân tộc và nhân loại; kết hợp hài hòa lợi ích giữa cá nhân, tập thể và xã hội."
      ]
    },
    {
      "type": "heading",
      "level": 2,
      "text": "II. Nhà nước xã hội chủ nghĩa"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "1. Sự ra đời, bản chất, chức năng của nhà nước xã hội chủ nghĩa"
    },
    {
      "type": "heading",
      "level": 4,
      "text": "a) Sự ra đời của nhà nước XHCN"
    },
    {
      "type": "paragraph",
      "text": "Nhà nước XHCN ra đời là kết quả của cuộc cách mạng do giai cấp vô sản và nhân dân lao động tiến hành dưới sự lãnh đạo của Đảng Cộng sản. Đây là tổ chức thực hiện quyền lực của nhân dân, là cơ quan đại diện cho ý chí của nhân dân, đặt dưới sự lãnh đạo của Đảng."
    },
    {
      "type": "heading",
      "level": 4,
      "text": "b) Bản chất của nhà nước XHCN"
    },
    {
      "type": "paragraph",
      "text": "Đây là một nhà nước kiểu mới, có bản chất khác với các nhà nước bóc lột:"
    },
    {
      "type": "list",
      "items": [
        "Về chính trị: Mang bản chất của giai cấp công nhân, giai cấp có lợi ích phù hợp với lợi ích của đại đa số nhân dân.",
        "Về kinh tế: Chịu sự quy định của cơ sở kinh tế là chế độ công hữu về tư liệu sản xuất chủ yếu, không còn quan hệ sản xuất bóc lột.",
        "Về văn hóa, xã hội: Dựa trên nền tảng tinh thần là chủ nghĩa Mác-Lênin và các giá trị văn hóa tiên tiến của nhân loại."
      ]
    },
    {
      "type": "blockquote",
      "text": "Vì là nhà nước của đại đa số trấn áp thiểu số, nó không còn là nhà nước theo đúng nghĩa mà chỉ là một \"nửa nhà nước\"."
    },
    {
      "type": "heading",
      "level": 4,
      "text": "c) Chức năng của nhà nước XHCN"
    },
    {
      "type": "paragraph",
      "text": "Căn cứ vào tính chất của quyền lực nhà nước, có hai chức năng cơ bản:"
    },
    {
      "type": "list",
      "items": [
        "Chức năng giai cấp (trấn áp): Dùng bạo lực để trấn áp sự phản kháng của các giai cấp bóc lột đã bị lật đổ và các phần tử chống đối cách mạng.",
        "Chức năng xã hội (tổ chức và xây dựng): Đây là chức năng quan trọng và quyết định nhất. Nhà nước tổ chức, quản lý và xây dựng xã hội mới trên mọi lĩnh vực kinh tế, văn hóa, xã hội."
      ]
    },
    {
      "type": "heading",
      "level": 3,
      "text": "2. Mối quan hệ giữa dân chủ XHCN và nhà nước XHCN"
    },
    {
      "type": "list",
      "items": [
        "Dân chủ XHCN là cơ sở, nền tảng cho việc xây dựng và hoạt động của nhà nước XHCN.",
        "Nhà nước XHCN là công cụ quan trọng cho việc thực thi quyền làm chủ của người dân, là phương thức thể hiện và thực hiện dân chủ."
      ]
    },
    {
      "type": "heading",
      "level": 2,
      "text": "III. Dân chủ XHCN và Nhà nước pháp quyền XHCN ở Việt Nam"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "1. Dân chủ xã hội chủ nghĩa ở Việt Nam"
    },
    {
      "type": "paragraph",
      "text": "Đảng ta khẳng định: \"Dân chủ xã hội chủ nghĩa là bản chất của chế độ ta, vừa là mục tiêu, vừa là động lực của sự phát triển đất nước\". Bản chất dân chủ XHCN ở Việt Nam được thực hiện thông qua hai hình thức:"
    },
    {
      "type": "list",
      "items": [
        "Dân chủ gián tiếp (dân chủ đại diện): Nhân dân thực hiện quyền lực thông qua Quốc hội và Hội đồng nhân dân các cấp.",
        "Dân chủ trực tiếp: Nhân dân trực tiếp tham gia quản lý nhà nước và xã hội thông qua các quy chế, cơ chế như \"Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng\"."
      ]
    },
    {
      "type": "heading",
      "level": 3,
      "text": "2. Nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam"
    },
    {
      "type": "paragraph",
      "text": "Xây dựng Nhà nước pháp quyền XHCN là một phương hướng cơ bản của quá trình đổi mới. Nhà nước pháp quyền XHCN Việt Nam có các đặc điểm cơ bản:"
    },
    {
      "type": "list",
      "items": [
        "Là Nhà nước của dân, do dân, vì dân.",
        "Được tổ chức và hoạt động trên cơ sở Hiến pháp và pháp luật, đảm bảo tính tối thượng của pháp luật.",
        "Quyền lực nhà nước là thống nhất, có sự phân công, phối hợp, kiểm soát giữa các cơ quan trong việc thực hiện các quyền lập pháp, hành pháp, tư pháp.",
        "Do Đảng Cộng sản Việt Nam lãnh đạo.",
        "Tôn trọng, bảo đảm và bảo vệ quyền con người, quyền công dân.",
        "Tổ chức và hoạt động theo nguyên tắc tập trung dân chủ."
      ]
    },
    {
      "type": "heading",
      "level": 3,
      "text": "3. Phát huy dân chủ và xây dựng Nhà nước pháp quyền XHCN ở Việt Nam hiện nay"
    },
    {
      "type": "paragraph",
      "text": "Các phương hướng chính bao gồm:"
    },
    {
      "type": "list",
      "items": [
        "Hoàn thiện thể chế kinh tế thị trường định hướng XHCN.",
        "Xây dựng Đảng Cộng sản Việt Nam trong sạch, vững mạnh.",
        "Xây dựng Nhà nước pháp quyền XHCN tinh gọn, hiệu lực, hiệu quả.",
        "Nâng cao vai trò của Mặt trận Tổ quốc và các tổ chức chính trị - xã hội.",
        "Xây dựng đội ngũ cán bộ, công chức trong sạch, có năng lực; đấu tranh phòng, chống tham nhũng, lãng phí."
      ]
    }
  ]
  },
  {
  "id": 5,
  "title": "Cơ Cấu Xã Hội - Giai Cấp và Liên Minh Giai Cấp, Tầng Lớp trong Thời kỳ Quá độ lên Chủ nghĩa xã hội",
  "description": "Nắm được những kiến thức nền tảng về cơ cấu xã hội - giai cấp và liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên CNXH, từ đó nhận diện được những biến đổi và nội dung của liên minh ở Việt Nam hiện nay.",
  "duration": 55,
  "order": 5,
  "isLocked": false,
  "content": [
    {
      "type": "heading",
      "level": 2,
      "text": "I. Cơ cấu xã hội - giai cấp trong thời kỳ quá độ lên chủ nghĩa xã hội"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "1. Khái niệm và vị trí của cơ cấu xã hội - giai cấp"
    },
    {
      "type": "heading",
      "level": 4,
      "text": "a) Khái niệm cơ cấu xã hội và cơ cấu xã hội - giai cấp"
    },
    {
      "type": "paragraph",
      "text": "Cơ cấu xã hội là những cộng đồng người cùng toàn bộ những mối quan hệ xã hội do sự tác động lẫn nhau của các cộng đồng ấy tạo nên. Có nhiều loại cơ cấu xã hội như: dân cư, nghề nghiệp, dân tộc, tôn giáo, giai cấp..."
    },
    {
      "type": "paragraph",
      "text": "Cơ cấu xã hội - giai cấp là hệ thống các giai cấp, tầng lớp xã hội tồn tại khách quan trong một chế độ xã hội nhất định, thông qua những mối quan hệ về sở hữu tư liệu sản xuất, về tổ chức quản lý sản xuất, và về địa vị chính trị - xã hội."
    },
    {
      "type": "heading",
      "level": 4,
      "text": "b) Vị trí của cơ cấu xã hội - giai cấp"
    },
    {
      "type": "paragraph",
      "text": "Trong hệ thống các cơ cấu xã hội, cơ cấu xã hội - giai cấp giữ vị trí quan trọng hàng đầu, chi phối các loại hình cơ cấu xã hội khác vì nó liên quan trực tiếp đến quyền sở hữu tư liệu sản xuất, quyền lực chính trị và nhà nước. Sự biến đổi của nó tất yếu sẽ ảnh hưởng đến sự biến đổi của toàn bộ xã hội."
    },
    {
      "type": "heading",
      "level": 3,
      "text": "2. Sự biến đổi có tính quy luật của cơ cấu xã hội - giai cấp trong thời kỳ quá độ"
    },
    {
      "type": "list",
      "items": [
        "Biến đổi gắn liền và bị quy định bởi cơ cấu kinh tế: Cơ cấu kinh tế thay đổi (chuyển dịch cơ cấu ngành, thành phần kinh tế...) sẽ dẫn đến sự biến đổi trong cơ cấu xã hội - giai cấp. Đây là quy luật cơ bản nhất.",
        "Biến đổi phức tạp, đa dạng, làm xuất hiện các tầng lớp xã hội mới: Do tồn tại nền kinh tế nhiều thành phần, nên ngoài các giai cấp, tầng lớp cơ bản, còn xuất hiện các tầng lớp xã hội mới như tầng lớp doanh nhân, tiểu chủ, tầng lớp trung lưu...",
        "Biến đổi trong mối quan hệ vừa đấu tranh, vừa liên minh, từng bước xích lại gần nhau: Các giai cấp, tầng lớp vừa hợp tác để xây dựng xã hội mới, vừa đấu tranh để giải quyết các mâu thuẫn về lợi ích, hướng tới xóa bỏ bất bình đẳng xã hội."
      ]
    },
    {
      "type": "heading",
      "level": 2,
      "text": "II. Liên minh giai cấp, tầng lớp trong thời kỳ quá độ lên chủ nghĩa xã hội"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "1. Tính tất yếu của liên minh"
    },
    {
      "type": "paragraph",
      "text": "Liên minh giữa giai cấp công nhân với giai cấp nông dân và các tầng lớp lao động khác là một tất yếu khách quan, một quy luật phổ biến của cách mạng XHCN."
    },
    {
      "type": "list",
      "items": [
        "Xét từ góc độ chính trị - xã hội: Cuộc đấu tranh giai cấp đòi hỏi phải tập hợp lực lượng, tạo sức mạnh tổng hợp để giành và giữ vững chính quyền.",
        "Xét từ góc độ kinh tế: Quá trình xây dựng CNXH, đặc biệt là CNH, HĐH, đòi hỏi sự hợp tác, gắn kết chặt chẽ giữa các ngành, các lĩnh vực (công nghiệp, nông nghiệp, khoa học, dịch vụ...) để tạo ra một nền kinh tế quốc dân thống nhất. Đây là nhân tố quyết định sự thắng lợi của CNXH."
      ]
    },
    {
      "type": "blockquote",
      "text": "V.I. Lênin khẳng định: \"Nguyên tắc cao nhất của chuyên chính là duy trì khối liên minh giữa giai cấp vô sản và nông dân để giai cấp vô sản có thể giữ được vai trò lãnh đạo và chính quyền nhà nước\"."
    },
    {
      "type": "heading",
      "level": 3,
      "text": "2. Nội dung của liên minh giai cấp, tầng lớp"
    },
    {
      "type": "list",
      "items": [
        "Nội dung kinh tế (cơ bản nhất, quyết định nhất): Hợp tác phát triển kinh tế, xây dựng cơ sở vật chất-kỹ thuật cho CNXH. Nội dung này nhằm thỏa mãn các lợi ích kinh tế thiết thân của các chủ thể, tạo cơ sở vật chất vững chắc cho khối liên minh.",
        "Nội dung chính trị: Giữ vững lập trường chính trị-tư tưởng của giai cấp công nhân, vai trò lãnh đạo của Đảng, xây dựng nhà nước XHCN, bảo vệ chế độ và thành quả cách mạng.",
        "Nội dung văn hóa - xã hội: Xây dựng nền văn hóa mới và con người mới XHCN, thực hiện tiến bộ và công bằng xã hội, nâng cao đời sống vật chất và tinh thần cho nhân dân."
      ]
    },
    {
      "type": "heading",
      "level": 2,
      "text": "III. Cơ cấu xã hội - giai cấp và liên minh ở Việt Nam"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "1. Cơ cấu xã hội - giai cấp ở Việt Nam hiện nay"
    },
    {
      "type": "paragraph",
      "text": "Do tác động của công cuộc đổi mới, cơ cấu xã hội - giai cấp Việt Nam đang biến đổi mạnh mẽ, vừa theo quy luật chung vừa mang tính đặc thù. Các giai cấp, tầng lớp cơ bản bao gồm:"
    },
    {
      "type": "list",
      "items": [
        "Giai cấp công nhân: Giữ vai trò lãnh đạo, là lực lượng đi đầu trong sự nghiệp CNH, HĐH.",
        "Giai cấp nông dân: Có vị trí chiến lược, là chủ thể của quá trình phát triển nông nghiệp, xây dựng nông thôn mới.",
        "Đội ngũ trí thức: Lực lượng lao động sáng tạo đặc biệt quan trọng, là một lực lượng trong khối liên minh.",
        "Đội ngũ doanh nhân: Lực lượng có vai trò quan trọng trong phát triển kinh tế, giải quyết việc làm, an sinh xã hội."
      ]
    },
    {
      "type": "heading",
      "level": 3,
      "text": "2. Liên minh giai cấp, tầng lớp ở Việt Nam hiện nay"
    },
    {
      "type": "blockquote",
      "text": "Đảng ta khẳng định: \"Đại đoàn kết toàn dân tộc là đường lối chiến lược của cách mạng Việt Nam, là động lực và nguồn lực to lớn trong xây dựng và bảo vệ Tổ quốc. Tăng cường khối đại đoàn kết toàn dân tộc trên nền tảng liên minh giai cấp công nhân với giai cấp nông dân và đội ngũ trí thức do Đảng lãnh đạo\"."
    },
    {
      "type": "paragraph",
      "text": "Nội dung và phương hướng cơ bản để tăng cường khối liên minh ở Việt Nam:"
    },
    {
      "type": "list",
      "items": [
        "Đẩy mạnh CNH, HĐH; giải quyết tốt mối quan hệ giữa tăng trưởng kinh tế và công bằng xã hội.",
        "Xây dựng và thực hiện hệ thống chính sách xã hội tổng thể, quan tâm đến lợi ích của các giai cấp, tầng lớp.",
        "Hoàn thiện thể chế kinh tế thị trường định hướng XHCN, đẩy mạnh phát triển khoa học - công nghệ.",
        "Đổi mới hoạt động của Đảng, Nhà nước, Mặt trận Tổ quốc Việt Nam nhằm tăng cường khối liên minh và xây dựng khối đại đoàn kết toàn dân."
      ]
    }
  ]
  },
  {
  "id": 6,
  "title": "Vấn Đề Dân Tộc và Tôn Giáo Trong Thời Kỳ Quá Độ Lên Chủ Nghĩa Xã Hội",
  "description": "Nắm được quan điểm cơ bản của chủ nghĩa Mác - Lênin, tư tưởng Hồ Chí Minh và chính sách của Đảng, Nhà nước Việt Nam về hai vấn đề phức tạp và nhạy cảm là dân tộc và tôn giáo, cũng như mối quan hệ giữa chúng.",
  "duration": 65,
  "order": 6,
  "isLocked": false,
  "content": [
    {
      "type": "heading",
      "level": 2,
      "text": "I. Dân tộc trong thời kỳ quá độ lên chủ nghĩa xã hội"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "1. Khái niệm, đặc trưng cơ bản của dân tộc"
    },
    {
      "type": "paragraph",
      "text": "Dân tộc là quá trình phát triển lâu dài của xã hội loài người. Theo quan điểm của chủ nghĩa Mác - Lênin, dân tộc được hiểu theo hai nghĩa:"
    },
    {
      "type": "list",
      "items": [
        "Nghĩa rộng (Quốc gia - Nation): Là cộng đồng người ổn định làm thành nhân dân một nước, có chung lãnh thổ, kinh tế, ngôn ngữ, văn hóa và một nhà nước. Ví dụ: dân tộc Việt Nam, dân tộc Trung Hoa.",
        "Nghĩa hẹp (Tộc người - Ethnie): Là cộng đồng người được hình thành trong lịch sử, có mối liên hệ chặt chẽ, bền vững, có chung ý thức tự giác tộc người, ngôn ngữ và văn hóa. Ví dụ: Việt Nam có 54 dân tộc (tộc người)."
      ]
    },
    {
      "type": "heading",
      "level": 3,
      "text": "2. Chủ nghĩa Mác - Lênin về vấn đề dân tộc"
    },
    {
      "type": "heading",
      "level": 4,
      "text": "a) Hai xu hướng khách quan của sự phát triển quan hệ dân tộc"
    },
    {
      "type": "list",
      "items": [
        "Xu hướng thứ nhất: Cộng đồng dân cư muốn tách ra để hình thành cộng đồng dân tộc độc lập. Xu hướng này nổi lên trong phong trào đấu tranh giành độc lập dân tộc.",
        "Xu hướng thứ hai: Các dân tộc trong từng quốc gia, thậm chí các dân tộc ở nhiều quốc gia muốn liên hiệp lại với nhau. Xu hướng này nổi lên do sự phát triển của lực lượng sản xuất và giao lưu kinh tế, văn hóa."
      ]
    },
    {
      "type": "heading",
      "level": 4,
      "text": "b) Cương lĩnh dân tộc của chủ nghĩa Mác - Lênin"
    },
    {
      "type": "paragraph",
      "text": "Trên cơ sở phân tích hai xu hướng trên, V.I. Lênin đã khái quát Cương lĩnh dân tộc với 3 nội dung cơ bản, có mối quan hệ biện chứng với nhau:"
    },
    {
      "type": "list",
      "items": [
        "Các dân tộc hoàn toàn bình đẳng: Đây là quyền thiêng liêng, không phân biệt dân tộc lớn hay nhỏ, trình độ phát triển cao hay thấp. Quyền bình đẳng là cơ sở để thực hiện quyền tự quyết.",
        "Các dân tộc được quyền tự quyết: Là quyền của các dân tộc tự quyết định vận mệnh của mình, bao gồm quyền tách ra thành lập quốc gia độc lập và quyền tự nguyện liên hiệp với dân tộc khác.",
        "Liên hiệp công nhân tất cả các dân tộc: Phản ánh sự thống nhất giữa giải phóng dân tộc và giải phóng giai cấp, là cơ sở để đoàn kết các dân tộc trong cuộc đấu tranh chung."
      ]
    },
    {
      "type": "heading",
      "level": 3,
      "text": "3. Dân tộc và quan hệ dân tộc ở Việt Nam"
    },
    {
      "type": "paragraph",
      "text": "Việt Nam là một quốc gia đa dân tộc với những đặc điểm nổi bật: có sự chênh lệch về số dân giữa các tộc người; các dân tộc cư trú xen kẽ nhau; các dân tộc thiểu số phân bố chủ yếu ở địa bàn có vị trí chiến lược quan trọng; trình độ phát triển không đều; có truyền thống đoàn kết, gắn bó lâu đời; và mỗi dân tộc có bản sắc văn hóa riêng tạo nên sự đa dạng trong thống nhất của văn hóa Việt Nam."
    },
    {
      "type": "blockquote",
      "text": "Chính sách dân tộc của Đảng và Nhà nước Việt Nam luôn nhất quán thực hiện theo nguyên tắc: Bình đẳng, đoàn kết, tôn trọng, giúp nhau cùng phát triển, vì mục tiêu dân giàu, nước mạnh, dân chủ, công bằng, văn minh."
    },
    {
      "type": "heading",
      "level": 2,
      "text": "II. Tôn giáo trong thời kỳ quá độ lên chủ nghĩa xã hội"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "1. Quan điểm của chủ nghĩa Mác - Lênin về tôn giáo"
    },
    {
      "type": "heading",
      "level": 4,
      "text": "a) Bản chất, nguồn gốc và tính chất của tôn giáo"
    },
    {
      "type": "list",
      "items": [
        "Bản chất của tôn giáo: Là một hình thái ý thức xã hội phản ánh hư ảo hiện thực khách quan. Ph. Ăngghen cho rằng đó là \"sự phản ánh trong đó những lực lượng ở trần thế đã mang hình thức những lực lượng siêu trần thế\".",
        "Nguồn gốc của tôn giáo: Bao gồm nguồn gốc tự nhiên, kinh tế-xã hội (sự bất lực của con người trước thiên nhiên và xã hội); nguồn gốc nhận thức (sự giới hạn trong nhận thức); và nguồn gốc tâm lý (sợ hãi, lòng biết ơn...).",
        "Tính chất của tôn giáo: Có tính lịch sử (có ra đời, tồn tại, biến đổi và sẽ mất đi); tính quần chúng (phổ biến, thu hút đông đảo người tham gia); và tính chính trị (chỉ xuất hiện trong xã hội có giai cấp, thường bị các giai cấp thống trị lợi dụng)."
      ]
    },
    {
      "type": "heading",
      "level": 4,
      "text": "b) Nguyên tắc giải quyết vấn đề tôn giáo"
    },
    {
      "type": "list",
      "items": [
        "Tôn trọng, bảo đảm quyền tự do tín ngưỡng và không tín ngưỡng của nhân dân.",
        "Khắc phục dần những ảnh hưởng tiêu cực của tôn giáo phải gắn liền với quá trình cải tạo xã hội cũ, xây dựng xã hội mới. Phải xóa bỏ nguồn gốc sinh ra ảo tưởng tôn giáo.",
        "Phân biệt hai mặt chính trị và tư tưởng trong tôn giáo để có thái độ ứng xử phù hợp.",
        "Phải có quan điểm lịch sử cụ thể khi xem xét, đánh giá và ứng xử với từng tôn giáo."
      ]
    },
    {
      "type": "heading",
      "level": 3,
      "text": "2. Tôn giáo ở Việt Nam và chính sách tôn giáo của Đảng, Nhà nước"
    },
    {
      "type": "paragraph",
      "text": "Tôn giáo ở Việt Nam có những đặc điểm: là quốc gia có nhiều tôn giáo; các tôn giáo đa dạng, đan xen, chung sống hòa bình; tín đồ phần lớn là nhân dân lao động yêu nước; chức sắc có vai trò quan trọng; các tôn giáo đều có quan hệ với nước ngoài."
    },
    {
      "type": "blockquote",
      "text": "Chính sách của Đảng, Nhà nước ta về tôn giáo: Tín ngưỡng, tôn giáo là nhu cầu tinh thần của một bộ phận nhân dân, sẽ tồn tại lâu dài. Thực hiện nhất quán chính sách đại đoàn kết dân tộc. Nội dung cốt lõi của công tác tôn giáo là công tác vận động quần chúng. Đây là trách nhiệm của cả hệ thống chính trị."
    },
    {
      "type": "heading",
      "level": 2,
      "text": "III. Quan hệ dân tộc và tôn giáo ở Việt Nam"
    },
    {
      "type": "paragraph",
      "text": "Quan hệ dân tộc và tôn giáo ở Việt Nam có những đặc điểm đặc thù: được thiết lập và củng cố trên cơ sở cộng đồng quốc gia - dân tộc thống nhất; chịu sự chi phối mạnh mẽ bởi tín ngưỡng truyền thống (đặc biệt là tín ngưỡng thờ cúng tổ tiên); và gần đây có sự xuất hiện các hiện tượng tôn giáo mới phức tạp."
    },
    {
      "type": "paragraph",
      "text": "Để giải quyết tốt mối quan hệ này, cần quán triệt các quan điểm: tăng cường mối quan hệ tốt đẹp giữa dân tộc và tôn giáo, củng cố khối đại đoàn kết toàn dân; giải quyết vấn đề tôn giáo phải đặt trong lợi ích chung của cộng đồng quốc gia - dân tộc; đảm bảo quyền tự do tín ngưỡng, đồng thời kiên quyết đấu tranh chống lợi dụng vấn đề dân tộc, tôn giáo vào mục đích chính trị, phá hoại đất nước."
    }
  ]
  },
  {
  "id": 7,
  "title": "Vấn Đề Gia Đình Trong Thời Kỳ Quá Độ Lên Chủ Nghĩa Xã Hội",
  "description": "Nắm được những quan điểm cơ bản của chủ nghĩa Mác - Lênin về gia đình, cơ sở xây dựng gia đình trong thời kỳ quá độ lên CNXH, từ đó phân tích những biến đổi và phương hướng xây dựng gia đình Việt Nam hiện nay.",
  "duration": 70,
  "order": 7,
  "isLocked": false,
  "content": [
    {
      "type": "heading",
      "level": 2,
      "text": "I. Khái niệm, vị trí và chức năng của gia đình"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "1. Khái niệm gia đình"
    },
    {
      "type": "paragraph",
      "text": "Gia đình là một hình thức cộng đồng xã hội đặc biệt, được hình thành, duy trì và củng cố chủ yếu dựa trên cơ sở hôn nhân, quan hệ huyết thống và quan hệ nuôi dưỡng, cùng với những quy định về quyền và nghĩa vụ của các thành viên trong gia đình."
    },
    {
      "type": "heading",
      "level": 3,
      "text": "2. Vị trí của gia đình trong xã hội"
    },
    {
      "type": "list",
      "items": [
        "Gia đình là tế bào của xã hội: Gia đình có vai trò quyết định đối với sự tồn tại và phát triển của xã hội thông qua việc tái sản xuất ra con người. Gia đình tốt thì xã hội mới tốt.",
        "Gia đình là tổ ấm, mang lại các giá trị hạnh phúc: Là môi trường yêu thương, nuôi dưỡng, chăm sóc, là chỗ dựa tình cảm quan trọng cho mỗi cá nhân.",
        "Gia đình là cầu nối giữa cá nhân với xã hội: Là cộng đồng xã hội đầu tiên mà mỗi cá nhân sinh sống, học hỏi và thực hiện các quan hệ xã hội. Gia đình là một trong những cộng đồng để xã hội tác động đến cá nhân."
      ]
    },
    {
      "type": "heading",
      "level": 3,
      "text": "3. Chức năng cơ bản của gia đình"
    },
    {
      "type": "list",
      "items": [
        "Chức năng tái sản xuất ra con người: Đây là chức năng đặc thù, quyết định sự tồn tại và phát triển của xã hội, không một cộng đồng nào có thể thay thế.",
        "Chức năng nuôi dưỡng, giáo dục (xã hội hóa): Gia đình là môi trường đầu tiên và quan trọng nhất trong việc hình thành nhân cách, đạo đức, lối sống của mỗi người.",
        "Chức năng kinh tế và tổ chức tiêu dùng: Gia đình vừa là đơn vị tham gia sản xuất, tạo ra của cải vật chất, vừa là đơn vị tiêu dùng trong xã hội.",
        "Chức năng thỏa mãn nhu cầu tâm sinh lý, duy trì tình cảm: Là chỗ dựa tình cảm, đảm bảo sự cân bằng tâm lý và hạnh phúc cho các thành viên."
      ]
    },
    {
      "type": "heading",
      "level": 2,
      "text": "II. Cơ sở xây dựng gia đình trong thời kỳ quá độ lên chủ nghĩa xã hội"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "1. Cơ sở kinh tế - xã hội"
    },
    {
      "type": "paragraph",
      "text": "Là sự xóa bỏ dần chế độ tư hữu về tư liệu sản xuất, xác lập chế độ sở hữu xã hội (công hữu). Điều này xóa bỏ nguồn gốc của sự áp bức, bất bình đẳng trong gia đình, giải phóng phụ nữ, và làm cho hôn nhân được xây dựng trên cơ sở tình yêu chứ không phải vì lý do kinh tế."
    },
    {
      "type": "heading",
      "level": 3,
      "text": "2. Cơ sở chính trị - xã hội"
    },
    {
      "type": "paragraph",
      "text": "Là việc thiết lập chính quyền nhà nước của giai cấp công nhân và nhân dân lao động. Nhà nước XHCN ban hành hệ thống pháp luật, chính sách xã hội tiến bộ (Luật Hôn nhân và Gia đình, chính sách bình đẳng giới, dân số, việc làm...) để bảo vệ hạnh phúc gia đình."
    },
    {
      "type": "heading",
      "level": 3,
      "text": "3. Cơ sở văn hóa"
    },
    {
      "type": "paragraph",
      "text": "Là việc xây dựng một nền văn hóa mới XHCN dựa trên hệ tư tưởng của giai cấp công nhân. Sự phát triển của giáo dục, khoa học giúp nâng cao dân trí, hình thành những giá trị, chuẩn mực mới, tiến bộ để điều chỉnh các mối quan hệ gia đình."
    },
    {
      "type": "heading",
      "level": 3,
      "text": "4. Chế độ hôn nhân tiến bộ"
    },
    {
      "type": "list",
      "items": [
        "Hôn nhân tự nguyện: Hôn nhân xuất phát từ tình yêu chân chính giữa nam và nữ, không có sự ép buộc.",
        "Hôn nhân một vợ một chồng, vợ chồng bình đẳng: Thực hiện sự giải phóng đối với phụ nữ, vợ và chồng có quyền và nghĩa vụ ngang nhau về mọi mặt.",
        "Hôn nhân được đảm bảo về pháp lý: Việc kết hôn phải được pháp luật thừa nhận và bảo vệ, thể hiện trách nhiệm của cá nhân với gia đình và xã hội."
      ]
    },
    {
      "type": "heading",
      "level": 2,
      "text": "III. Xây dựng gia đình Việt Nam trong thời kỳ quá độ lên chủ nghĩa xã hội"
    },
    {
      "type": "heading",
      "level": 3,
      "text": "1. Sự biến đổi của gia đình Việt Nam hiện nay"
    },
    {
      "type": "paragraph",
      "text": "Dưới tác động của CNH, HĐH, kinh tế thị trường và toàn cầu hóa, gia đình Việt Nam đang có những biến đổi sâu sắc:"
    },
    {
      "type": "list",
      "items": [
        "Biến đổi về quy mô, kết cấu: Gia đình đơn (gia đình hạt nhân) gồm hai thế hệ ngày càng phổ biến, thay thế cho gia đình truyền thống nhiều thế hệ.",
        "Biến đổi trong thực hiện các chức năng: Chức năng kinh tế của gia đình trở nên đa dạng hơn nhưng cũng đối mặt với cạnh tranh; chức năng giáo dục có xu hướng giảm sút vai trò do tác động của xã hội; quan hệ tình cảm trong gia đình trở nên lỏng lẻo hơn ở một số nơi.",
        "Biến đổi trong các mối quan hệ gia đình: Quan hệ vợ chồng bình đẳng hơn nhưng cũng đối mặt với các thách thức như tỷ lệ ly hôn gia tăng, ngoại tình... Quan hệ giữa các thế hệ cũng có những thay đổi."
      ]
    },
    {
      "type": "heading",
      "level": 3,
      "text": "2. Phương hướng cơ bản xây dựng và phát triển gia đình Việt Nam"
    },
    {
      "type": "blockquote",
      "text": "Đảng và Nhà nước ta chủ trương xây dựng gia đình Việt Nam \"no ấm, tiến bộ, hạnh phúc, văn minh\", thực sự là tế bào lành mạnh của xã hội, là tổ ấm của mỗi người."
    },
    {
      "type": "paragraph",
      "text": "Các phương hướng cơ bản bao gồm:"
    },
    {
      "type": "list",
      "items": [
        "Tăng cường sự lãnh đạo của Đảng, nâng cao nhận thức của xã hội về vai trò của gia đình.",
        "Đẩy mạnh phát triển kinh tế - xã hội, nâng cao đời sống vật chất, kinh tế hộ gia đình; có chính sách hỗ trợ các gia đình khó khăn.",
        "Kế thừa những giá trị của gia đình truyền thống tốt đẹp, đồng thời tiếp thu những tiến bộ của nhân loại về gia đình để xây dựng gia đình hiện đại.",
        "Tiếp tục phát triển và nâng cao chất lượng phong trào xây dựng \"Gia đình văn hóa\", làm cho phong trào đi vào thực chất, tránh hình thức, bệnh thành tích."
      ]
    }
  ]
  },
];


const structuredQuizzes: Quiz[] = [
  // --- Quiz Chương 1 ---
  {
    "id": 1,
    "chapterId": 1,
    "title": "Kiểm Tra Chương 1: Nhập Môn CNXHKH",
    "questions": [
      {
        "id": "q1_1",
        "text": "Tác phẩm nào được coi là đánh dấu sự ra đời của Chủ nghĩa xã hội khoa học?",
        "options": [
          { "value": "A", "text": "Hệ tư tưởng Đức" },
          { "value": "B", "text": "Tuyên ngôn của Đảng Cộng sản" },
          { "value": "C", "text": "Tư bản" },
          { "value": "D", "text": "Chống Đuy-rinh" }
        ],
        "correctAnswer": "B",
        "explanation": "Tác phẩm 'Tuyên ngôn của Đảng Cộng sản' (tháng 2/1848) của C.Mác và Ph.Ăngghen được coi là văn kiện có tính cương lĩnh đầu tiên, đánh dấu sự ra đời của Chủ nghĩa xã hội khoa học."
      },
      {
        "id": "q1_2",
        "text": "Phát kiến nào của C.Mác và Ph.Ăngghen đã luận giải về phương diện kinh tế sự diệt vong tất yếu của chủ nghĩa tư bản?",
        "options": [
          { "value": "A", "text": "Chủ nghĩa duy vật lịch sử" },
          { "value": "B", "text": "Học thuyết về giá trị thặng dư" },
          { "value": "C", "text": "Học thuyết về sứ mệnh lịch sử của giai cấp công nhân" },
          { "value": "D", "text": "Phép biện chứng duy vật" }
        ],
        "correctAnswer": "B",
        "explanation": "Học thuyết về giá trị thặng dư đã vạch trần bản chất bóc lột của chủ nghĩa tư bản, từ đó luận giải về mặt kinh tế sự diệt vong không tránh khỏi của nó."
      },
      {
        "id": "q1_3",
        "text": "Theo chủ nghĩa Mác - Lênin, CNXHKH được hiểu theo nghĩa hẹp là gì?",
        "options": [
          { "value": "A", "text": "Toàn bộ học thuyết của C.Mác và Ph.Ăngghen" },
          { "value": "B", "text": "Một trong ba bộ phận hợp thành chủ nghĩa Mác - Lênin" },
          { "value": "C", "text": "Lý luận về cách mạng không ngừng" },
          { "value": "D", "text": "Lý luận về đấu tranh giai cấp" }
        ],
        "correctAnswer": "B",
        "explanation": "Theo nghĩa hẹp, CNXHKH là một trong ba bộ phận hợp thành chủ nghĩa Mác-Lênin, bên cạnh Triết học Mác-Lênin và Kinh tế chính trị Mác-Lênin."
      },
      {
        "id": "q1_4",
        "text": "Điều kiện kinh tế - xã hội nào là cơ sở trực tiếp cho sự ra đời của CNXHKH?",
        "options": [
          { "value": "A", "text": "Sự phát triển của nền đại công nghiệp và sự lớn mạnh của giai cấp vô sản" },
          { "value": "B", "text": "Sự ra đời của các thành thị trung đại" },
          { "value": "C", "text": "Các cuộc phát kiến địa lý" },
          { "value": "D", "text": "Sự sụp đổ của chế độ phong kiến" }
        ],
        "correctAnswer": "A",
        "explanation": "Cuộc cách mạng công nghiệp đã tạo ra nền đại công nghiệp và giai cấp vô sản, làm nảy sinh mâu thuẫn giữa tư sản và vô sản, đây là điều kiện kinh tế - xã hội trực tiếp cho sự ra đời của CNXHKH."
      },
      {
        "id": "q1_5",
        "text": "Nguồn gốc lý luận trực tiếp của CNXHKH là gì? (Chọn các đáp án đúng)",
        "options": [
          { "value": "A", "text": "Triết học cổ điển Đức" },
          { "value": "B", "text": "Kinh tế chính trị học cổ điển Anh" },
          { "value": "C", "text": "Chủ nghĩa xã hội không tưởng phê phán Pháp" },
          { "value": "D", "text": "Học thuyết tiến hóa" }
        ],
        "correctAnswer": "ABC",
        "explanation": "Triết học cổ điển Đức, Kinh tế chính trị học cổ điển Anh, và Chủ nghĩa xã hội không tưởng là ba nguồn gốc lý luận trực tiếp mà C.Mác và Ph.Ăngghen đã kế thừa để sáng lập ra chủ nghĩa Mác."
      },
      {
        "id": "q1_6",
        "text": "Phát kiến vĩ đại nào của C.Mác và Ph.Ăngghen đã chỉ ra lực lượng xã hội có khả năng thực hiện cuộc cách mạng xóa bỏ chủ nghĩa tư bản?",
        "options": [
          { "value": "A", "text": "Học thuyết về giá trị thặng dư" },
          { "value": "B", "text": "Chủ nghĩa duy vật lịch sử" },
          { "value": "C", "text": "Học thuyết về sứ mệnh lịch sử của giai cấp công nhân" },
          { "value": "D", "text": "Phép biện chứng duy vật" }
        ],
        "correctAnswer": "C",
        "explanation": "Học thuyết về sứ mệnh lịch sử của giai cấp công nhân đã chỉ ra rằng giai cấp công nhân là lực lượng xã hội duy nhất có khả năng và sứ mệnh lật đổ CNTB và xây dựng CNXH."
      },
      {
        "id": "q1_7",
        "text": "Ai là người có công lao biến Chủ nghĩa xã hội từ lý luận thành hiện thực?",
        "options": [
          { "value": "A", "text": "C. Mác" },
          { "value": "B", "text": "Ph. Ăngghen" },
          { "value": "C", "text": "V.I. Lênin" },
          { "value": "D", "text": "Hồ Chí Minh" }
        ],
        "correctAnswer": "C",
        "explanation": "V.I. Lênin đã vận dụng và phát triển sáng tạo chủ nghĩa Mác, lãnh đạo thành công Cách mạng Tháng Mười Nga (1917), đưa CNXH từ lý luận trở thành hiện thực."
      },
      {
        "id": "q1_8",
        "text": "Đối tượng nghiên cứu của CNXHKH là gì?",
        "options": [
          { "value": "A", "text": "Quy luật vận động của tự nhiên" },
          { "value": "B", "text": "Quy luật của tư duy" },
          { "value": "C", "text": "Quy luật kinh tế của xã hội tư bản" },
          { "value": "D", "text": "Quy luật chính trị - xã hội của quá trình phát sinh, phát triển hình thái kinh tế - xã hội cộng sản chủ nghĩa" }
        ],
        "correctAnswer": "D",
        "explanation": "Đối tượng nghiên cứu của CNXHKH tập trung vào các quy luật, tính quy luật chính trị - xã hội của quá trình cách mạng XHCN và xây dựng CNXH."
      },
      {
        "id": "q1_9",
        "text": "Phương pháp luận chung nhất của CNXHKH là gì?",
        "options": [
          { "value": "A", "text": "Phương pháp logic" },
          { "value": "B", "text": "Phương pháp lịch sử" },
          { "value": "C", "text": "Chủ nghĩa duy vật biện chứng và chủ nghĩa duy vật lịch sử" },
          { "value": "D", "text": "Phương pháp phân tích và tổng hợp" }
        ],
        "correctAnswer": "C",
        "explanation": "CNXHKH sử dụng phương pháp luận chung nhất của triết học Mác - Lênin là chủ nghĩa duy vật biện chứng và chủ nghĩa duy vật lịch sử."
      },
      {
        "id": "q1_10",
        "text": "Hạn chế cơ bản của Chủ nghĩa xã hội không tưởng là gì?",
        "options": [
          { "value": "A", "text": "Không phê phán chủ nghĩa tư bản" },
          { "value": "B", "text": "Không phát hiện ra sứ mệnh lịch sử của giai cấp công nhân" },
          { "value": "C", "text": "Không đưa ra được mô hình xã hội tương lai" },
          { "value": "D", "text": "Không có tinh thần nhân đạo" }
        ],
        "correctAnswer": "B",
        "explanation": "Hạn chế lớn nhất của CNXH không tưởng là không phát hiện được lực lượng xã hội tiên phong (giai cấp công nhân) có thể thực hiện cuộc chuyển biến cách mạng từ CNTB lên CNXH."
      },
      {
        "id": "q1_11",
        "text": "Phong trào đấu tranh nào của giai cấp công nhân đã chuyển từ mục tiêu kinh tế sang mục tiêu chính trị rõ nét?",
        "options": [
          { "value": "A", "text": "Phong trào công nhân dệt ở Lion (Pháp)" },
          { "value": "B", "text": "Phong trào Hiến chương ở Anh" },
          { "value": "C", "text": "Phong trào công nhân ở Chicago (Mỹ)" },
          { "value": "D", "text": "Công xã Pari" }
        ],
        "correctAnswer": "A",
        "explanation": "Phong trào công nhân dệt ở Lion (Pháp) đã chuyển từ khẩu hiệu kinh tế (1831) sang khẩu hiệu chính trị 'Cộng hòa hay là chết' (1834), thể hiện sự trưởng thành về ý thức chính trị."
      },
      {
        "id": "q1_12",
        "text": "Sự kiện nào đánh dấu sự sụp đổ của mô hình CNXH ở Liên Xô và Đông Âu?",
        "options": [
          { "value": "A", "text": "Cuối những năm 60 của thế kỷ XX" },
          { "value": "B", "text": "Đầu những năm 70 của thế kỷ XX" },
          { "value": "C", "text": "Cuối những năm 80, đầu những năm 90 của thế kỷ XX" },
          { "value": "D", "text": "Đầu thế kỷ XXI" }
        ],
        "correctAnswer": "C",
        "explanation": "Vào cuối thập niên 80, đầu thập niên 90 của thế kỷ XX, do nhiều nguyên nhân, mô hình CNXH ở Liên Xô và các nước Đông Âu đã sụp đổ."
      },
      {
        "id": "q1_13",
        "text": "Phương pháp nghiên cứu đặc trưng và quan trọng của CNXHKH là gì?",
        "options": [
          { "value": "A", "text": "Phương pháp điều tra xã hội học" },
          { "value": "B", "text": "Phương pháp thống kê" },
          { "value": "C", "text": "Phương pháp kết hợp lịch sử và lôgic" },
          { "value": "D", "text": "Phương pháp thực nghiệm" }
        ],
        "correctAnswer": "C",
        "explanation": "Phương pháp kết hợp lịch sử và lôgic là phương pháp đặc trưng, giúp rút ra được lôgic của lịch sử từ các sự kiện, tư liệu thực tiễn, thay vì chỉ liệt kê sự thật."
      },
      {
        "id": "q1_14",
        "text": "Nghiên cứu CNXHKH có ý nghĩa gì về mặt lý luận?",
        "options": [
          { "value": "A", "text": "Trang bị nhận thức chính trị - xã hội và phương pháp luận khoa học" },
          { "value": "B", "text": "Chỉ giúp giải thích thế giới" },
          { "value": "C", "text": "Chỉ có giá trị với thế kỷ XIX" },
          { "value": "D", "text": "Chỉ dùng để phê phán chủ nghĩa tư bản" }
        ],
        "correctAnswer": "A",
        "explanation": "Về lý luận, CNXHKH trang bị nhận thức chính trị - xã hội khoa học về quá trình tất yếu lịch sử dẫn đến CNXH, là vũ khí lý luận của giai cấp công nhân."
      },
      {
        "id": "q1_15",
        "text": "Ở Việt Nam, Đảng Cộng sản Việt Nam ra đời là kết quả của sự kết hợp những yếu tố nào?",
        "options": [
          { "value": "A", "text": "Chủ nghĩa Mác - Lênin với phong trào công nhân" },
          { "value": "B", "text": "Chủ nghĩa Mác - Lênin với phong trào yêu nước" },
          { "value": "C", "text": "Chủ nghĩa Mác - Lênin với phong trào công nhân và phong trào yêu nước" },
          { "value": "D", "text": "Phong trào công nhân với phong trào nông dân" }
        ],
        "correctAnswer": "C",
        "explanation": "Đây là một sự phát triển sáng tạo và quan trọng của Hồ Chí Minh, phản ánh tính đặc thù của Việt Nam: Đảng Cộng sản Việt Nam ra đời là kết quả của sự kết hợp giữa chủ nghĩa Mác - Lênin với phong trào công nhân và phong trào yêu nước."
      },
      {
        "id": "q1_16",
        "text": "V.I. Lênin đã phát triển lý luận của chủ nghĩa Mác trong bối cảnh lịch sử nào?",
        "options": [
          { "value": "A", "text": "Chủ nghĩa tư bản tự do cạnh tranh" },
          { "value": "B", "text": "Chủ nghĩa đế quốc và cách mạng vô sản" },
          { "value": "C", "text": "Toàn cầu hóa" },
          { "value": "D", "text": "Chiến tranh lạnh" }
        ],
        "correctAnswer": "B",
        "explanation": "Công lao của V.I. Lênin là đã bảo vệ và phát triển sáng tạo chủ nghĩa Mác trong điều kiện lịch sử mới, thời đại chủ nghĩa tư bản đã phát triển thành chủ nghĩa đế quốc và thời đại của các cuộc cách mạng vô sản."
      },
      {
        "id": "q1_17",
        "text": "Nhiệm vụ của CNXHKH theo Ph. Ăngghen là gì?",
        "options": [
          { "value": "A", "text": "Nghiên cứu những điều kiện lịch sử để làm cho giai cấp bị áp bức hiểu rõ sự nghiệp của chính họ" },
          { "value": "B", "text": "Chỉ tập trung vào việc mô tả xã hội tương lai" },
          { "value": "C", "text": "Xây dựng một hệ thống giáo điều bất biến" },
          { "value": "D", "text": "Phê phán tất cả các học thuyết trước đó" }
        ],
        "correctAnswer": "A",
        "explanation": "Ph. Ăngghen đã khái quát nhiệm vụ của CNXHKH là nghiên cứu các điều kiện lịch sử, bản chất của sự biến đổi, và qua đó làm cho giai cấp công nhân hiểu rõ được điều kiện và bản chất sự nghiệp của chính mình."
      },
      {
        "id": "q1_18",
        "text": "Nghiên cứu CNXHKH có ý nghĩa thực tiễn như thế nào đối với Việt Nam hiện nay?",
        "options": [
          { "value": "A", "text": "Củng cố bản lĩnh, tự tin vào con đường đi lên CNXH" },
          { "value": "B", "text": "Chỉ mang tính tham khảo, không có giá trị thực tiễn" },
          { "value": "C", "text": "Làm cho quá trình hội nhập quốc tế chậm lại" },
          { "value": "D", "text": "Gây ra mâu thuẫn trong xã hội" }
        ],
        "correctAnswer": "A",
        "explanation": "Trong bối cảnh phức tạp hiện nay, việc nghiên cứu CNXHKH giúp chúng ta củng cố bản lĩnh kiên định, tự tin tiếp tục sự nghiệp xây dựng và bảo vệ Tổ quốc theo định hướng XHCN mà Đảng và Chủ tịch Hồ Chí Minh đã lựa chọn."
      },
      {
        "id": "q1_19",
        "text": "Trong ba bộ phận cấu thành chủ nghĩa Mác, bộ phận nào trực tiếp nghiên cứu về sứ mệnh lịch sử của giai cấp công nhân?",
        "options": [
          { "value": "A", "text": "Triết học Mác - Lênin" },
          { "value": "B", "text": "Kinh tế chính trị Mác - Lênin" },
          { "value": "C", "text": "Chủ nghĩa xã hội khoa học" },
          { "value": "D", "text": "Cả ba bộ phận đều nghiên cứu như nhau" }
        ],
        "correctAnswer": "C",
        "explanation": "CNXHKH là học thuyết chính trị - xã hội, trực tiếp nghiên cứu, luận chứng sứ mệnh lịch sử của giai cấp công nhân, những điều kiện, con đường để họ hoàn thành sứ mệnh lịch sử của mình."
      },
      {
        "id": "q1_20",
        "text": "Sự ra đời của Đảng Cộng sản Trung Quốc và Đảng Cộng sản Việt Nam thể hiện sự vận dụng và phát triển CNXHKH ở khu vực nào?",
        "options": [
          { "value": "A", "text": "Châu Âu" },
          { "value": "B", "text": "Châu Mỹ La-tinh" },
          { "value": "C", "text": "Các nước thuộc địa và phụ thuộc ở phương Đông" },
          { "value": "D", "text": "Châu Phi" }
        ],
        "correctAnswer": "C",
        "explanation": "Sự ra đời và lãnh đạo của các Đảng Cộng sản ở Trung Quốc và Việt Nam là minh chứng cho sự vận dụng và phát triển sáng tạo chủ nghĩa Mác - Lênin vào điều kiện cụ thể của các nước thuộc địa, nửa phong kiến ở phương Đông."
      }
    ]
  },
  // --- Quiz Chương 2 ---
  {
    "id": 2,
    "chapterId": 2,
    "title": "Kiểm Tra Chương 2: Sứ Mệnh Lịch Sử Của GCCN",
    "questions": [
      {
        "id": "q2_1",
        "text": "Điều kiện chủ quan nào giữ vai trò quan trọng nhất để giai cấp công nhân thực hiện thắng lợi sứ mệnh lịch sử?",
        "options": [
          { "value": "A", "text": "Sự phát triển về số lượng" },
          { "value": "B", "text": "Sự liên minh với giai cấp nông dân" },
          { "value": "C", "text": "Sự ra đời và vai trò lãnh đạo của Đảng Cộng sản" },
          { "value": "D", "text": "Sự phát triển về chất lượng, tay nghề" }
        ],
        "correctAnswer": "C",
        "explanation": "Trong các điều kiện chủ quan, vai trò lãnh đạo của Đảng Cộng sản - đội tiên phong của giai cấp công nhân - là nhân tố quan trọng nhất đảm bảo cho giai cấp công nhân hoàn thành sứ mệnh lịch sử của mình."
      },
      {
        "id": "q2_2",
        "text": "Nội dung sứ mệnh lịch sử của giai cấp công nhân về mặt chính trị - xã hội là gì?",
        "options": [
          { "value": "A", "text": "Xóa bỏ chế độ tư hữu, thiết lập chế độ công hữu" },
          { "value": "B", "text": "Lật đổ quyền thống trị của giai cấp tư sản, giành chính quyền" },
          { "value": "C", "text": "Xây dựng nền văn hóa và con người mới xã hội chủ nghĩa" },
          { "value": "D", "text": "Phát triển lực lượng sản xuất, nâng cao năng suất lao động" }
        ],
        "correctAnswer": "B",
        "explanation": "Về chính trị - xã hội, sứ mệnh của giai cấp công nhân là lật đổ ách thống trị của giai cấp tư sản, giành chính quyền về tay mình và nhân dân lao động, xây dựng nhà nước kiểu mới."
      },
      {
        "id": "q2_3",
        "text": "Theo chủ nghĩa Mác-Lênin, giai cấp công nhân được xác định trên mấy phương diện cơ bản?",
        "options": [
          { "value": "A", "text": "Một phương diện (kinh tế)" },
          { "value": "B", "text": "Hai phương diện (kinh tế - xã hội và chính trị - xã hội)" },
          { "value": "C", "text": "Ba phương diện (kinh tế, chính trị, văn hóa)" },
          { "value": "D", "text": "Bốn phương diện (kinh tế, chính trị, xã hội, tư tưởng)" }
        ],
        "correctAnswer": "B",
        "explanation": "Giai cấp công nhân được xác định trên hai phương diện cơ bản: phương diện kinh tế - xã hội (vị trí trong nền sản xuất) và phương diện chính trị - xã hội (quan hệ sản xuất, địa vị trong xã hội)."
      },
      {
        "id": "q2_4",
        "text": "Điều kiện khách quan nào quy định sứ mệnh lịch sử của giai cấp công nhân?",
        "options": [
          { "value": "A", "text": "Do họ là giai cấp nghèo khổ nhất" },
          { "value": "B", "text": "Do họ chiếm số đông trong dân cư" },
          { "value": "C", "text": "Do địa vị kinh tế và địa vị chính trị - xã hội của họ" },
          { "value": "D", "text": "Do họ được các giai cấp khác ủng hộ" }
        ],
        "correctAnswer": "C",
        "explanation": "Điều kiện khách quan quy định sứ mệnh lịch sử của GCCN là địa vị kinh tế (đại biểu cho LLSX tiên tiến) và địa vị chính trị - xã hội (giai cấp cách mạng triệt để, có lợi ích đối kháng với GCTS)."
      },
      {
        "id": "q2_5",
        "text": "Đặc điểm nào KHÔNG phải là đặc điểm của giai cấp công nhân Việt Nam?",
        "options": [
          { "value": "A", "text": "Ra đời trước giai cấp tư sản dân tộc" },
          { "value": "B", "text": "Gắn bó mật thiết với các tầng lớp nhân dân" },
          { "value": "C", "text": "Chịu ba tầng áp bức, bóc lột" },
          { "value": "D", "text": "Ra đời sau giai cấp tư sản dân tộc" }
        ],
        "correctAnswer": "D",
        "explanation": "Một đặc điểm đặc thù của GCCN Việt Nam là ra đời trước giai cấp tư sản dân tộc, trong cuộc khai thác thuộc địa của thực dân Pháp."
      },
      {
        "id": "q2_6",
        "text": "Nội dung kinh tế trong sứ mệnh lịch sử của giai cấp công nhân là gì?",
        "options": [
          { "value": "A", "text": "Lãnh đạo nhân dân lật đổ chính quyền tư sản" },
          { "value": "B", "text": "Giải phóng lực lượng sản xuất, thúc đẩy năng suất lao động xã hội" },
          { "value": "C", "text": "Xây dựng hệ giá trị mới, con người mới" },
          { "value": "D", "text": "Đấu tranh trên lĩnh vực tư tưởng" }
        ],
        "correctAnswer": "B",
        "explanation": "Về kinh tế, sứ mệnh của GCCN là tổ chức lại sản xuất, giải phóng và thúc đẩy lực lượng sản xuất phát triển, tạo ra năng suất lao động cao hơn CNTB, xây dựng cơ sở vật chất-kỹ thuật cho CNXH."
      },
      {
        "id": "q2_7",
        "text": "Sự ra đời của Đảng Cộng sản là sự kết hợp giữa chủ nghĩa Mác - Lênin với phong trào nào?",
        "options": [
          { "value": "A", "text": "Phong trào nông dân" },
          { "value": "B", "text": "Phong trào công nhân" },
          { "value": "C", "text": "Phong trào yêu nước" },
          { "value": "D", "text": "Phong trào giải phóng dân tộc" }
        ],
        "correctAnswer": "B",
        "explanation": "Quy luật chung, phổ biến cho sự ra đời của Đảng Cộng sản là sự kết hợp giữa chủ nghĩa xã hội khoa học (chủ nghĩa Mác-Lênin) với phong trào công nhân."
      },
      {
        "id": "q2_8",
        "text": "Hiện nay, giai cấp công nhân hiện đại đang có những xu hướng biến đổi nào? (Chọn các đáp án đúng)",
        "options": [
          { "value": "A", "text": "Xu hướng \"trí tuệ hóa\"" },
          { "value": "B", "text": "Xu hướng \"trung lưu hóa\"" },
          { "value": "C", "text": "Xu hướng giảm sút về số lượng tuyệt đối" },
          { "value": "D", "text": "Xu hướng mất đi vai trò lãnh đạo" }
        ],
        "correctAnswer": "AB",
        "explanation": "Gắn với kinh tế tri thức, GCCN có xu hướng \"trí tuệ hóa\". Đồng thời, một bộ phận công nhân có mức sống được cải thiện, tham gia sở hữu cổ phần, dẫn đến xu hướng \"trung lưu hóa\"."
      },
      {
        "id": "q2_9",
        "text": "Lực lượng nào được coi là nòng cốt trong khối liên minh giai cấp ở Việt Nam?",
        "options": [
          { "value": "A", "text": "Giai cấp công nhân, giai cấp nông dân và đội ngũ doanh nhân" },
          { "value": "B", "text": "Giai cấp công nhân, giai cấp nông dân và đội ngũ trí thức" },
          { "value": "C", "text": "Giai cấp công nhân và đội ngũ trí thức" },
          { "value": "D", "text": "Giai cấp nông dân và đội ngũ doanh nhân" }
        ],
        "correctAnswer": "B",
        "explanation": "Đảng ta xác định nền tảng của khối đại đoàn kết toàn dân tộc là liên minh giữa giai cấp công nhân với giai cấp nông dân và đội ngũ trí thức."
      },
      {
        "id": "q2_10",
        "text": "Theo Đảng Cộng sản Việt Nam, nhiệm vụ hàng đầu của giai cấp công nhân Việt Nam hiện nay là gì?",
        "options": [
          { "value": "A", "text": "Là lực lượng đi đầu trong sự nghiệp công nghiệp hóa, hiện đại hóa" },
          { "value": "B", "text": "Chỉ tập trung vào đấu tranh chính trị" },
          { "value": "C", "text": "Chỉ quan tâm đến đời sống vật chất của bản thân" },
          { "value": "D", "text": "Lãnh đạo phong trào công nhân thế giới" }
        ],
        "correctAnswer": "A",
        "explanation": "Đảng ta xác định GCCN Việt Nam là lực lượng đi đầu trong sự nghiệp công nghiệp hóa, hiện đại hóa đất nước, vì mục tiêu dân giàu, nước mạnh, dân chủ, công bằng, văn minh."
      },
      {
        "id": "q2_11",
        "text": "Tại sao nói giai cấp công nhân có tinh thần cách mạng triệt để nhất?",
        "options": [
          { "value": "A", "text": "Vì họ là giai cấp đông đảo nhất" },
          { "value": "B", "text": "Vì họ bị áp bức, bóc lột nặng nề và có lợi ích đối kháng trực tiếp với giai cấp tư sản" },
          { "value": "C", "text": "Vì họ có trình độ văn hóa cao nhất" },
          { "value": "D", "text": "Vì họ được các giai cấp khác giúp đỡ" }
        ],
        "correctAnswer": "B",
        "explanation": "Tinh thần cách mạng triệt để của GCCN xuất phát từ địa vị kinh tế - xã hội của họ: họ bị bóc lột tận cùng, không còn gì để mất ngoài xiềng xích, và mục tiêu của họ là xóa bỏ tận gốc chế độ tư hữu, nguồn gốc của mọi áp bức."
      },
      {
        "id": "q2_12",
        "text": "Đâu là thuật ngữ C. Mác và Ph. Ăngghen dùng để chỉ giai cấp công nhân?",
        "options": [
          { "value": "A", "text": "Giai cấp vô sản" },
          { "value": "B", "text": "Giai cấp trung lưu" },
          { "value": "C", "text": "Tầng lớp lao động tự do" },
          { "value": "D", "text": "Giai cấp địa chủ" }
        ],
        "correctAnswer": "A",
        "explanation": "C. Mác và Ph. Ăngghen đã sử dụng nhiều thuật ngữ khác nhau để chỉ giai cấp công nhân, trong đó phổ biến nhất là 'giai cấp vô sản' (proletariat)."
      },
      {
        "id": "q2_13",
        "text": "Sứ mệnh lịch sử của giai cấp công nhân kết thúc khi nào?",
        "options": [
          { "value": "A", "text": "Khi giành được chính quyền" },
          { "value": "B", "text": "Khi xây dựng xong chủ nghĩa xã hội" },
          { "value": "C", "text": "Khi xây dựng thành công chủ nghĩa cộng sản, xóa bỏ hoàn toàn giai cấp" },
          { "value": "D", "text": "Khi chủ nghĩa tư bản sụp đổ trên toàn thế giới" }
        ],
        "correctAnswer": "C",
        "explanation": "Sứ mệnh lịch sử của giai cấp công nhân chỉ hoàn thành khi mục tiêu cuối cùng là xây dựng thành công xã hội cộng sản chủ nghĩa, xã hội không còn giai cấp, không còn nhà nước."
      },
      {
        "id": "q2_14",
        "text": "Một trong những phương hướng xây dựng giai cấp công nhân Việt Nam hiện nay là gì?",
        "options": [
          { "value": "A", "text": "Tăng cường số lượng công nhân bằng mọi giá" },
          { "value": "B", "text": "Không ngừng trí thức hóa giai cấp công nhân" },
          { "value": "C", "text": "Chỉ tập trung phát triển công nhân trong khu vực kinh tế nhà nước" },
          { "value": "D", "text": "Hạn chế vai trò của tổ chức Công đoàn" }
        ],
        "correctAnswer": "B",
        "explanation": "Một phương hướng quan trọng là đào tạo, bồi dưỡng, nâng cao trình độ mọi mặt cho công nhân, đặc biệt là không ngừng trí thức hóa giai cấp công nhân để đáp ứng yêu cầu của cách mạng công nghiệp lần thứ tư."
      },
      {
        "id": "q2_15",
        "text": "Tại sao giai cấp công nhân lại là sản phẩm của bản thân nền đại công nghiệp?",
        "options": [
          { "value": "A", "text": "Vì họ tự phát minh ra máy móc" },
          { "value": "B", "text": "Vì nền đại công nghiệp phá hủy sản xuất nhỏ, buộc nông dân, thợ thủ công phải trở thành người làm thuê" },
          { "value": "C", "text": "Vì họ được giai cấp tư sản đào tạo" },
          { "value": "D", "text": "Vì họ là những người có nhiều vốn" }
        ],
        "correctAnswer": "B",
        "explanation": "Nền đại công nghiệp làm phá sản những người sản xuất nhỏ, tách họ khỏi tư liệu sản xuất và biến họ thành những người vô sản, buộc phải bán sức lao động cho các nhà tư bản để sống. Do đó, giai cấp công nhân là sản phẩm của nền đại công nghiệp."
      },
      {
        "id": "q2_16",
        "text": "Ở các nước XHCN, nội dung chính trị - xã hội trong sứ mệnh lịch sử của GCCN hiện nay là gì?",
        "options": [
          { "value": "A", "text": "Lãnh đạo thành công sự nghiệp đổi mới, xây dựng và bảo vệ Tổ quốc" },
          { "value": "B", "text": "Đấu tranh lật đổ chính quyền hiện tại" },
          { "value": "C", "text": "Chỉ tập trung vào xuất khẩu lao động" },
          { "value": "D", "text": "Kêu gọi sự can thiệp từ bên ngoài" }
        ],
        "correctAnswer": "A",
        "explanation": "Tại các nước XHCN, nơi giai cấp công nhân đã trở thành giai cấp cầm quyền, sứ mệnh của họ là lãnh đạo thành công sự nghiệp đổi mới, xây dựng CNXH và bảo vệ vững chắc Tổ quốc XHCN."
      },
      {
        "id": "q2_17",
        "text": "Trong các đặc điểm của GCCN, đặc điểm nào quyết định bản chất cách mạng của họ?",
        "options": [
          { "value": "A", "text": "Là giai cấp đại biểu cho phương thức sản xuất tiên tiến, cho xu thế phát triển của lịch sử" },
          { "value": "B", "text": "Có số lượng đông đảo" },
          { "value": "C", "text": "Lao động chân tay vất vả" },
          { "value": "D", "text": "Xuất thân từ nông dân" }
        ],
        "correctAnswer": "A",
        "explanation": "Bản chất cách mạng của GCCN không phải vì họ nghèo khổ, mà vì họ là giai cấp đại biểu cho lực lượng sản xuất hiện đại, cho phương thức sản xuất tiên tiến, đại diện cho tương lai và xu thế đi lên của lịch sử."
      },
      {
        "id": "q2_18",
        "text": "Tổ chức nào là đội tiên phong, bộ tham mưu chiến đấu của giai cấp công nhân?",
        "options": [
          { "value": "A", "text": "Nhà nước" },
          { "value": "B", "text": "Công đoàn" },
          { "value": "C", "text": "Đoàn Thanh niên" },
          { "value": "D", "text": "Đảng Cộng sản" }
        ],
        "correctAnswer": "D",
        "explanation": "Đảng Cộng sản được xác định là đội tiên phong, bộ tham mưu chiến đấu của giai cấp công nhân, đại biểu trung thành cho lợi ích của giai cấp công nhân, của dân tộc và xã hội."
      },
      {
        "id": "q2_19",
        "text": "Đại hội lần thứ mấy của Đảng Cộng sản Việt Nam đã nhấn mạnh việc \"Xây dựng giai cấp công nhân hiện đại, lớn mạnh\" để thích ứng với Cách mạng công nghiệp lần thứ tư?",
        "options": [
          { "value": "A", "text": "Đại hội X" },
          { "value": "B", "text": "Đại hội XI" },
          { "value": "C", "text": "Đại hội XII" },
          { "value": "D", "text": "Đại hội XIII" }
        ],
        "correctAnswer": "D",
        "explanation": "Văn kiện Đại hội XIII của Đảng đã xác định rõ mục tiêu: \"Xây dựng giai cấp công nhân hiện đại, lớn mạnh; nâng cao bản lĩnh chính trị, trình độ học vấn... thích ứng với cuộc Cách mạng công nghiệp lần thứ tư\"."
      },
      {
        "id": "q2_20",
        "text": "Việc một bộ phận công nhân sở hữu cổ phần trong các công ty tư bản có làm thay đổi bản chất bóc lột của CNTB không?",
        "options": [
          { "value": "A", "text": "Có, nó xóa bỏ hoàn toàn sự bóc lột" },
          { "value": "B", "text": "Không, vì quyền quyết định sản xuất và phân chia lợi nhuận vẫn thuộc về giai cấp tư sản" },
          { "value": "C", "text": "Có, nó làm cho công nhân trở thành nhà tư bản" },
          { "value": "D", "text": "Không, nhưng nó làm giảm mâu thuẫn giai cấp" }
        ],
        "correctAnswer": "B",
        "explanation": "Mặc dù có xu hướng \"trung lưu hóa\", việc công nhân sở hữu một lượng nhỏ cổ phần không làm thay đổi bản chất bóc lột, vì quyền định đoạt quá trình sản xuất và phân phối lợi nhuận vẫn nằm trong tay các cổ đông lớn là giai cấp tư sản."
      }
    ]
  },
  // --- Quiz Chương 3 ---
  {
    "id": 3,
    "chapterId": 3,
    "title": "Kiểm Tra Chương 3: CNXH và Thời Kỳ Quá Độ",
    "questions": [
      {
        "id": "q3_1",
        "text": "Đặc điểm nổi bật về kinh tế trong thời kỳ quá độ lên chủ nghĩa xã hội là gì?",
        "options": [
          { "value": "A", "text": "Chỉ tồn tại kinh tế nhà nước" },
          { "value": "B", "text": "Nền kinh tế hoàn toàn tự cấp tự túc" },
          { "value": "C", "text": "Tồn tại nền kinh tế nhiều thành phần, trong đó có thành phần đối lập" },
          { "value": "D", "text": "Kinh tế phát triển đồng đều ở mọi nơi" }
        ],
        "correctAnswer": "C",
        "explanation": "Một đặc điểm cơ bản của thời kỳ quá độ là sự tồn tại đan xen của nhiều thành phần kinh tế, bao gồm cả thành phần kinh tế xã hội chủ nghĩa và các thành phần kinh tế phi xã hội chủ nghĩa, vừa hợp tác vừa cạnh tranh với nhau."
      },
      {
        "id": "q3_2",
        "text": "Theo chủ nghĩa Mác - Lênin, hình thái kinh tế - xã hội cộng sản chủ nghĩa bao gồm mấy giai đoạn?",
        "options": [
          { "value": "A", "text": "Một giai đoạn duy nhất" },
          { "value": "B", "text": "Hai giai đoạn: giai đoạn thấp (CNXH) và giai đoạn cao (CNCS)" },
          { "value": "C", "text": "Ba giai đoạn: quá độ, CNXH và CNCS" },
          { "value": "D", "text": "Bốn giai đoạn" }
        ],
        "correctAnswer": "B",
        "explanation": "C. Mác và Ph. Ăngghen cho rằng hình thái kinh tế - xã hội cộng sản chủ nghĩa phát triển từ thấp lên cao qua hai giai đoạn: giai đoạn thấp (chủ nghĩa xã hội) và giai đoạn cao (chủ nghĩa cộng sản)."
      },
      {
        "id": "q3_3",
        "text": "Đặc trưng nào sau đây KHÔNG phải là đặc trưng bản chất của chủ nghĩa xã hội?",
        "options": [
          { "value": "A", "text": "Có nền kinh tế phát triển cao dựa trên chế độ công hữu" },
          { "value": "B", "text": "Do nhân dân lao động làm chủ" },
          { "value": "C", "text": "Tồn tại vĩnh viễn sự phân chia giai cấp" },
          { "value": "D", "text": "Con người được giải phóng, phát triển toàn diện" }
        ],
        "correctAnswer": "C",
        "explanation": "Mục tiêu của CNXH là từng bước xóa bỏ sự phân chia giai cấp, tiến tới một xã hội không còn giai cấp, chứ không phải duy trì nó vĩnh viễn."
      },
      {
        "id": "q3_4",
        "text": "Tại sao thời kỳ quá độ lên chủ nghĩa xã hội là một tất yếu khách quan?",
        "options": [
          { "value": "A", "text": "Vì đó là mong muốn của giai cấp công nhân" },
          { "value": "B", "text": "Vì CNXH và CNTB khác nhau về bản chất nên cần thời gian để cải biến xã hội" },
          { "value": "C", "text": "Vì các nước đi lên CNXH đều là nước nghèo" },
          { "value": "D", "text": "Vì CNTB tự động chuyển hóa thành CNXH" }
        ],
        "correctAnswer": "B",
        "explanation": "Sự khác biệt về bản chất trên mọi lĩnh vực giữa CNTB và CNXH đòi hỏi phải có một thời kỳ cải biến cách mạng sâu sắc, toàn diện để xây dựng những tiền đề vật chất và tinh thần cho xã hội mới."
      },
      {
        "id": "q3_5",
        "text": "Đặc điểm bao trùm của thời kỳ quá độ lên chủ nghĩa xã hội là gì?",
        "options": [
          { "value": "A", "text": "Sự ổn định tuyệt đối về chính trị - xã hội" },
          { "value": "B", "text": "Sự phát triển hài hòa, không có mâu thuẫn" },
          { "value": "C", "text": "Sự tồn tại đan xen và đấu tranh giữa cái cũ và cái mới" },
          { "value": "D", "text": "Sự thống nhất hoàn toàn về tư tưởng" }
        ],
        "correctAnswer": "C",
        "explanation": "Đặc điểm cơ bản của thời kỳ quá độ là sự tồn tại đan xen giữa các yếu tố của xã hội cũ (TBCN) và những yếu tố mới (XHCN) đang hình thành, chúng vừa đấu tranh, vừa tác động lẫn nhau."
      },
      {
        "id": "q3_6",
        "text": "Ở Việt Nam, 'bỏ qua chế độ tư bản chủ nghĩa' có nghĩa là gì?",
        "options": [
          { "value": "A", "text": "Bỏ qua tất cả những gì liên quan đến chủ nghĩa tư bản" },
          { "value": "B", "text": "Bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng TBCN" },
          { "value": "C", "text": "Bỏ qua kinh tế thị trường" },
          { "value": "D", "text": "Bỏ qua việc phát triển lực lượng sản xuất" }
        ],
        "correctAnswer": "B",
        "explanation": "Bỏ qua chế độ TBCN có nghĩa là bỏ qua việc xác lập vị trí thống trị của QHSX và KTTT TBCN, nhưng vẫn phải tiếp thu, kế thừa những thành tựu mà nhân loại đạt được dưới chế độ TBCN, đặc biệt là khoa học công nghệ."
      },
      {
        "id": "q3_7",
        "text": "Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH (bổ sung, phát triển năm 2011) đã đưa ra mấy đặc trưng của xã hội XHCN ở Việt Nam?",
        "options": [
          { "value": "A", "text": "5 đặc trưng" },
          { "value": "B", "text": "6 đặc trưng" },
          { "value": "C", "text": "7 đặc trưng" },
          { "value": "D", "text": "8 đặc trưng" }
        ],
        "correctAnswer": "D",
        "explanation": "Đại hội XI của Đảng đã thông qua Cương lĩnh (bổ sung, phát triển năm 2011), trong đó phát triển mô hình CNXH Việt Nam với 8 đặc trưng cơ bản."
      },
      {
        "id": "q3_8",
        "text": "Trên lĩnh vực chính trị, đặc điểm của thời kỳ quá độ là gì?",
        "options": [
          { "value": "A", "text": "Không còn đấu tranh giai cấp" },
          { "value": "B", "text": "Thiết lập, tăng cường chuyên chính vô sản, tiếp tục đấu tranh giai cấp" },
          { "value": "C", "text": "Thực hiện chế độ đa đảng đối lập" },
          { "value": "D", "text": "Nhà nước tự tiêu vong" }
        ],
        "correctAnswer": "B",
        "explanation": "Về chính trị, thời kỳ quá độ là thời kỳ thiết lập và củng cố nhà nước chuyên chính vô sản, cuộc đấu tranh giai cấp vẫn tiếp diễn dưới những hình thức mới, trong điều kiện mới."
      },
      {
        "id": "q3_9",
        "text": "Mục tiêu tổng quát của CNXH mà Việt Nam xây dựng là gì?",
        "options": [
          { "value": "A", "text": "Dân giàu, nước mạnh, công bằng, dân chủ, văn minh" },
          { "value": "B", "text": "Công nghiệp hóa, hiện đại hóa" },
          { "value": "C", "text": "Xã hội không còn nhà nước" },
          { "value": "D", "text": "Hội nhập quốc tế sâu rộng" }
        ],
        "correctAnswer": "A",
        "explanation": "Đặc trưng đầu tiên và cũng là mục tiêu tổng quát được nêu trong Cương lĩnh 2011 là xây dựng một xã hội \"Dân giàu, nước mạnh, dân chủ, công bằng, văn minh\"."
      },
      {
        "id": "q3_10",
        "text": "Đâu là một trong những phương hướng cơ bản để xây dựng CNXH ở Việt Nam?",
        "options": [
          { "value": "A", "text": "Phát triển nền kinh tế thị trường định hướng xã hội chủ nghĩa" },
          { "value": "B", "text": "Đóng cửa, không hội nhập quốc tế" },
          { "value": "C", "text": "Chỉ phát triển kinh tế nhà nước" },
          { "value": "D", "text": "Xóa bỏ hoàn toàn kinh tế tư nhân" }
        ],
        "correctAnswer": "A",
        "explanation": "Phát triển nền kinh tế thị trường định hướng xã hội chủ nghĩa là một trong 8 phương hướng cơ bản đã được Đảng ta xác định để xây dựng CNXH ở Việt Nam."
      },
      {
        "id": "q3_11",
        "text": "Nguyên tắc phân phối chủ yếu trong giai đoạn đầu của xã hội cộng sản (chủ nghĩa xã hội) là gì?",
        "options": [
          { "value": "A", "text": "Làm theo năng lực, hưởng theo nhu cầu" },
          { "value": "B", "text": "Làm theo năng lực, hưởng theo lao động" },
          { "value": "C", "text": "Phân phối bình quân cho mọi người" },
          { "value": "D", "text": "Phân phối theo vốn góp" }
        ],
        "correctAnswer": "B",
        "explanation": "Trong giai đoạn CNXH, do LLSX chưa phát triển đến trình độ rất cao, nguyên tắc phân phối chủ yếu là \"làm theo năng lực, hưởng theo lao động\". Nguyên tắc \"hưởng theo nhu cầu\" chỉ có thể thực hiện ở giai đoạn CNCS."
      },
      {
        "id": "q3_12",
        "text": "Theo V.I. Lênin, đối với những nước tiểu nông đi lên CNXH, cần phải 'bắc những chiếc cầu nhỏ' thông qua hình thức kinh tế nào?",
        "options": [
          { "value": "A", "text": "Kinh tế tự nhiên" },
          { "value": "B", "text": "Chủ nghĩa tư bản nhà nước" },
          { "value": "C", "text": "Kinh tế tập thể" },
          { "value": "D", "text": "Kinh tế phong kiến" }
        ],
        "correctAnswer": "B",
        "explanation": "V.I. Lênin chỉ rõ, đối với những nước chưa có CNTB phát triển, cần thiết phải sử dụng chủ nghĩa tư bản nhà nước như những 'chiếc cầu nhỏ' để quá độ lên CNXH."
      },
      {
        "id": "q3_13",
        "text": "Trong thời kỳ quá độ, trên lĩnh vực tư tưởng-văn hóa, diễn ra điều gì?",
        "options": [
          { "value": "A", "text": "Chỉ tồn tại duy nhất hệ tư tưởng vô sản" },
          { "value": "B", "text": "Tồn tại nhiều tư tưởng khác nhau, chủ yếu là tư tưởng vô sản và tư sản" },
          { "value": "C", "text": "Không có sự đấu tranh về tư tưởng" },
          { "value": "D", "text": "Tất cả các loại hình văn hóa cũ đều bị xóa bỏ" }
        ],
        "correctAnswer": "B",
        "explanation": "Trên lĩnh vực tư tưởng-văn hóa, thời kỳ quá độ còn tồn tại nhiều hệ tư tưởng khác nhau và diễn ra cuộc đấu tranh gay gắt giữa hệ tư tưởng XHCN và các hệ tư tưởng phi XHCN."
      },
      {
        "id": "q3_14",
        "text": "Đặc trưng nào của CNXH ở Việt Nam khẳng định vai trò lãnh đạo của Đảng Cộng sản?",
        "options": [
          { "value": "A", "text": "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh" },
          { "value": "B", "text": "Do nhân dân làm chủ" },
          { "value": "C", "text": "Có Nhà nước pháp quyền xã hội chủ nghĩa... do Đảng Cộng sản lãnh đạo" },
          { "value": "D", "text": "Có nền kinh tế phát triển cao..." }
        ],
        "correctAnswer": "C",
        "explanation": "Đặc trưng thứ 7 trong Cương lĩnh 2011 đã khẳng định rõ: \"Có Nhà nước pháp quyền xã hội chủ nghĩa của nhân dân, do nhân dân, vì nhân dân do Đảng Cộng sản lãnh đạo\"."
      },
      {
        "id": "q3_15",
        "text": "Mục tiêu đến năm 2045 của Việt Nam là gì?",
        "options": [
          { "value": "A", "text": "Trở thành nước đang phát triển, có công nghiệp hiện đại, thu nhập trung bình cao" },
          { "value": "B", "text": "Trở thành nước phát triển, thu nhập cao" },
          { "value": "C", "text": "Trở thành nước công nghiệp theo hướng hiện đại" },
          { "value": "D", "text": "Hoàn thành cơ bản thời kỳ quá độ" }
        ],
        "correctAnswer": "B",
        "explanation": "Đại hội XIII của Đảng đã xác định mục tiêu đến năm 2045, kỷ niệm 100 năm thành lập nước, Việt Nam \"Trở thành nước phát triển, thu nhập cao\"."
      },
      {
        "id": "q3_16",
        "text": "Đặc điểm của xã hội trong thời kỳ quá độ về mặt xã hội là gì?",
        "options": [
          { "value": "A", "text": "Xã hội không còn giai cấp, tầng lớp" },
          { "value": "B", "text": "Xã hội không còn sự khác biệt giữa thành thị và nông thôn" },
          { "value": "C", "text": "Còn tồn tại nhiều giai cấp, tầng lớp và sự khác biệt xã hội" },
          { "value": "D", "text": "Xã hội hoàn toàn đồng nhất" }
        ],
        "correctAnswer": "C",
        "explanation": "Do kết cấu kinh tế nhiều thành phần, trong thời kỳ quá độ còn tồn tại nhiều giai cấp, tầng lớp và sự khác biệt giữa các giai cấp, giữa nông thôn và thành thị, lao động trí óc và chân tay."
      },
      {
        "id": "q3_17",
        "text": "Sự ra đời của hình thái kinh tế - xã hội cộng sản chủ nghĩa có cần thông qua một cuộc cách mạng không?",
        "options": [
          { "value": "A", "text": "Không, nó tự nhiên ra đời" },
          { "value": "B", "text": "Có, nó chỉ được hình thành thông qua cách mạng vô sản" },
          { "value": "C", "text": "Chỉ cần cải cách từ từ" },
          { "value": "D", "text": "Tùy thuộc vào từng quốc gia" }
        ],
        "correctAnswer": "B",
        "explanation": "Do khác về bản chất với các hình thái kinh tế - xã hội trước đó, hình thái KT-XH cộng sản chủ nghĩa không tự nhiên ra đời mà phải được hình thành thông qua cách mạng vô sản dưới sự lãnh đạo của Đảng Cộng sản."
      },
      {
        "id": "q3_18",
        "text": "Đảng ta yêu cầu phải nắm vững và giải quyết tốt bao nhiêu mối quan hệ lớn trong quá trình thực hiện các phương hướng xây dựng CNXH?",
        "options": [
          { "value": "A", "text": "6 mối quan hệ" },
          { "value": "B", "text": "7 mối quan hệ" },
          { "value": "C", "text": "8 mối quan hệ" },
          { "value": "D", "text": "9 mối quan hệ" }
        ],
        "correctAnswer": "C",
        "explanation": "Cương lĩnh 2011 đã chỉ ra 8 mối quan hệ lớn cần nắm vững và giải quyết tốt, như quan hệ giữa đổi mới, ổn định và phát triển; giữa kinh tế và chính trị; giữa kinh tế thị trường và định hướng XHCN..."
      },
      {
        "id": "q3_19",
        "text": "Điều kiện nào được xem là tiền đề vật chất quan trọng nhất cho sự ra đời của CNXH?",
        "options": [
          { "value": "A", "text": "Sự phát triển của lực lượng sản xuất và sự trưởng thành của giai cấp công nhân" },
          { "value": "B", "text": "Sự ủng hộ của các nước trên thế giới" },
          { "value": "C", "text": "Sự khủng hoảng về văn hóa" },
          { "value": "D", "text": "Sự mong muốn của quần chúng nhân dân" }
        ],
        "correctAnswer": "A",
        "explanation": "Sự phát triển của lực lượng sản xuất đến mức xã hội hóa cao và sự trưởng thành của giai cấp công nhân là hai tiền đề vật chất quan trọng nhất, tạo cơ sở cho sự thay thế CNTB bằng CNXH."
      },
      {
        "id": "q3_20",
        "text": "Quan điểm của Đảng Cộng sản Việt Nam về con đường đi lên CNXH được thể hiện rõ nhất trong văn kiện nào?",
        "options": [
          { "value": "A", "text": "Điều lệ Đảng" },
          { "value": "B", "text": "Báo cáo chính trị tại các kỳ Đại hội" },
          { "value": "C", "text": "Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH" },
          { "value": "D", "text": "Hiến pháp nước Cộng hòa xã hội chủ nghĩa Việt Nam" }
        ],
        "correctAnswer": "C",
        "explanation": "Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH (năm 1991 và bổ sung, phát triển năm 2011) là văn kiện quan trọng nhất, thể hiện một cách hệ thống và toàn diện quan điểm của Đảng về CNXH và con đường đi lên CNXH ở Việt Nam."
      }
    ]
  },
  // --- Quiz Chương 4 ---
  {
    "id": 4,
    "chapterId": 4,
    "title": "Kiểm Tra Chương 4: Dân Chủ và Nhà Nước XHCN",
    "questions": [
      {
        "id": "q4_1",
        "text": "Bản chất chính trị của nền dân chủ xã hội chủ nghĩa là gì?",
        "options": [
          { "value": "A", "text": "Mọi quyền lực đều thuộc về một cá nhân lãnh đạo" },
          { "value": "B", "text": "Quyền lực thuộc về nhân dân, đặt dưới sự lãnh đạo của Đảng Cộng sản" },
          { "value": "C", "text": "Dân chủ chỉ dành cho giai cấp công nhân" },
          { "value": "D", "text": "Là nền dân chủ không có sự lãnh đạo của đảng phái nào" }
        ],
        "correctAnswer": "B",
        "explanation": "Bản chất chính trị của dân chủ XHCN là sự lãnh đạo của giai cấp công nhân thông qua chính đảng của nó (Đảng Cộng sản) đối với toàn xã hội, để thực thi quyền lực của nhân dân."
      },
      {
        "id": "q4_2",
        "text": "Nhà nước xã hội chủ nghĩa được coi là nhà nước 'nửa nhà nước' vì sao?",
        "options": [
          { "value": "A", "text": "Vì nó chỉ tồn tại một nửa thời gian" },
          { "value": "B", "text": "Vì nó là nhà nước của đa số nhân dân trấn áp thiểu số bóc lột, và đang trong quá trình tự tiêu vong" },
          { "value": "C", "text": "Vì nó chỉ quản lý một nửa lãnh thổ" },
          { "value": "D", "text": "Vì nó chỉ có một nửa quyền lực" }
        ],
        "correctAnswer": "B",
        "explanation": "Khác với các nhà nước bóc lột (thiểu số trấn áp đa số), nhà nước XHCN là nhà nước của đa số trấn áp thiểu số, nó không còn là nhà nước theo đúng nghĩa và sẽ tự tiêu vong khi xã hội không còn giai cấp."
      },
      {
        "id": "q4_3",
        "text": "Đâu là hình thức dân chủ mà người dân trực tiếp thể hiện quyền làm chủ của mình?",
        "options": [
          { "value": "A", "text": "Dân chủ gián tiếp" },
          { "value": "B", "text": "Dân chủ đại diện" },
          { "value": "C", "text": "Dân chủ trực tiếp" },
          { "value": "D", "text": "Dân chủ nghị viện" }
        ],
        "correctAnswer": "C",
        "explanation": "Hình thức dân chủ trực tiếp là hình thức mà nhân dân bằng hành động của mình thực hiện quyền làm chủ nhà nước và xã hội, ví dụ như tham gia góp ý, biểu quyết, kiểm tra, giám sát."
      },
      {
        "id": "q4_4",
        "text": "Bản chất kinh tế của nền dân chủ xã hội chủ nghĩa dựa trên cơ sở nào?",
        "options": [
          { "value": "A", "text": "Chế độ tư hữu về tư liệu sản xuất" },
          { "value": "B", "text": "Chế độ sở hữu hỗn hợp" },
          { "value": "C", "text": "Chế độ công hữu về những tư liệu sản xuất chủ yếu" },
          { "value": "D", "text": "Chế độ sở hữu của nhà nước" }
        ],
        "correctAnswer": "C",
        "explanation": "Bản chất kinh tế của dân chủ XHCN là dựa trên chế độ công hữu về những tư liệu sản xuất chủ yếu, nhằm xóa bỏ áp bức bóc lột và phân phối vì lợi ích của toàn xã hội."
      },
      {
        "id": "q4_5",
        "text": "Chức năng nào được coi là chủ yếu và quyết định nhất của nhà nước xã hội chủ nghĩa?",
        "options": [
          { "value": "A", "text": "Chức năng trấn áp" },
          { "value": "B", "text": "Chức năng đối ngoại" },
          { "value": "C", "text": "Chức năng tổ chức và xây dựng kinh tế - xã hội" },
          { "value": "D", "text": "Chức năng tư pháp" }
        ],
        "correctAnswer": "C",
        "explanation": "V.I. Lênin cho rằng, sau khi giành chính quyền, chức năng tổ chức, xây dựng kinh tế, tạo ra năng suất lao động cao hơn mới là chức năng chủ yếu và quyết định sự thắng lợi của CNXH."
      },
      {
        "id": "q4_6",
        "text": "Trong Nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam, quyền lực nhà nước được tổ chức như thế nào?",
        "options": [
          { "value": "A", "text": "Tam quyền phân lập" },
          { "value": "B", "text": "Quyền lực tập trung vào cơ quan hành pháp" },
          { "value": "C", "text": "Quyền lực nhà nước là thống nhất, có sự phân công, phối hợp, kiểm soát" },
          { "value": "D", "text": "Quyền lực tập trung vào cơ quan lập pháp" }
        ],
        "correctAnswer": "C",
        "explanation": "Một đặc điểm cơ bản của Nhà nước pháp quyền XHCN Việt Nam là quyền lực nhà nước là thống nhất, có sự phân công, phối hợp, kiểm soát giữa các cơ quan trong việc thực hiện các quyền lập pháp, hành pháp, tư pháp."
      },
      {
        "id": "q4_7",
        "text": "Theo tư tưởng Hồ Chí Minh, mối quan hệ giữa dân và chính phủ là gì?",
        "options": [
          { "value": "A", "text": "Dân là người bị quản lý, chính phủ là người quản lý" },
          { "value": "B", "text": "Dân là chủ, chính phủ là người đầy tớ trung thành của nhân dân" },
          { "value": "C", "text": "Dân và chính phủ có quyền lực ngang nhau" },
          { "value": "D", "text": "Chính phủ có quyền lực tuyệt đối đối với dân" }
        ],
        "correctAnswer": "B",
        "explanation": "Chủ tịch Hồ Chí Minh đã khẳng định: \"Chế độ ta là chế độ dân chủ, tức là nhân dân là người chủ, mà Chính phủ là người đầy tớ trung thành của nhân dân\"."
      },
      {
        "id": "q4_8",
        "text": "Đặc điểm nào sau đây là của Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam?",
        "options": [
          { "value": "A", "text": "Hoạt động theo cơ chế đa đảng đối lập" },
          { "value": "B", "text": "Đặt dưới sự lãnh đạo của Đảng Cộng sản Việt Nam" },
          { "value": "C", "text": "Không thừa nhận quyền con người" },
          { "value": "D", "text": "Pháp luật không có vai trò tối thượng" }
        ],
        "correctAnswer": "B",
        "explanation": "Một đặc điểm cơ bản và khác biệt của Nhà nước pháp quyền XHCN Việt Nam là đặt dưới sự lãnh đạo của một đảng duy nhất là Đảng Cộng sản Việt Nam, được ghi nhận tại Điều 4 Hiến pháp 2013."
      },
      {
        "id": "q4_9",
        "text": "Phương châm nào thể hiện hình thức dân chủ trực tiếp ở Việt Nam?",
        "options": [
          { "value": "A", "text": "Tập trung dân chủ" },
          { "value": "B", "text": "Nhà nước của dân, do dân, vì dân" },
          { "value": "C", "text": "Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng" },
          { "value": "D", "text": "Tất cả quyền lực thuộc về nhân dân" }
        ],
        "correctAnswer": "C",
        "explanation": "Phương châm \"Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng\" là sự cụ thể hóa cơ chế thực hành dân chủ trực tiếp ở cơ sở tại Việt Nam."
      },
      {
        "id": "q4_10",
        "text": "Mối quan hệ giữa dân chủ XHCN và nhà nước XHCN là gì?",
        "options": [
          { "value": "A", "text": "Chúng mâu thuẫn, loại trừ nhau" },
          { "value": "B", "text": "Chúng không liên quan đến nhau" },
          { "value": "C", "text": "Dân chủ là cơ sở của nhà nước, nhà nước là công cụ thực thi dân chủ" },
          { "value": "D", "text": "Nhà nước quyết định dân chủ" }
        ],
        "correctAnswer": "C",
        "explanation": "Giữa dân chủ XHCN và nhà nước XHCN có mối quan hệ biện chứng: Dân chủ là cơ sở, nền tảng cho việc xây dựng và hoạt động của nhà nước. Ngược lại, nhà nước là công cụ quan trọng để thực thi và bảo vệ nền dân chủ."
      },
      {
        "id": "q4_11",
        "text": "Nền dân chủ đầu tiên trong lịch sử xã hội có giai cấp là nền dân chủ nào?",
        "options": [
          { "value": "A", "text": "Dân chủ tư sản" },
          { "value": "B", "text": "Dân chủ chủ nô" },
          { "value": "C", "text": "Dân chủ xã hội chủ nghĩa" },
          { "value": "D", "text": "Dân chủ phong kiến" }
        ],
        "correctAnswer": "B",
        "explanation": "Nền dân chủ chủ nô ra đời trong xã hội chiếm hữu nô lệ là nền dân chủ đầu tiên trong lịch sử xã hội có giai cấp, dù nó rất hạn hẹp."
      },
      {
        "id": "q4_12",
        "text": "Cơ quan nào ở Việt Nam có quyền lập hiến và lập pháp?",
        "options": [
          { "value": "A", "text": "Chính phủ" },
          { "value": "B", "text": "Quốc hội" },
          { "value": "C", "text": "Tòa án nhân dân tối cao" },
          { "value": "D", "text": "Chủ tịch nước" }
        ],
        "correctAnswer": "B",
        "explanation": "Theo Hiến pháp Việt Nam, Quốc hội là cơ quan đại biểu cao nhất của Nhân dân, cơ quan quyền lực nhà nước cao nhất, có quyền lập hiến và lập pháp."
      },
      {
        "id": "q4_13",
        "text": "Nền tảng tư tưởng của dân chủ xã hội chủ nghĩa là gì?",
        "options": [
          { "value": "A", "text": "Chủ nghĩa tự do" },
          { "value": "B", "text": "Chủ nghĩa Mác - Lênin" },
          { "value": "C", "text": "Chủ nghĩa dân tộc" },
          { "value": "D", "text": "Thuyết tam quyền phân lập" }
        ],
        "correctAnswer": "B",
        "explanation": "Bản chất tư tưởng-văn hóa của dân chủ XHCN là lấy hệ tư tưởng của giai cấp công nhân, tức chủ nghĩa Mác - Lênin, làm chủ đạo, làm nền tảng tinh thần."
      },
      {
        "id": "q4_14",
        "text": "Một trong những phương hướng để phát huy dân chủ XHCN ở Việt Nam là gì?",
        "options": [
          { "value": "A", "text": "Hạn chế vai trò của Mặt trận Tổ quốc" },
          { "value": "B", "text": "Giảm bớt sự lãnh đạo của Đảng" },
          { "value": "C", "text": "Xây dựng Đảng Cộng sản Việt Nam trong sạch, vững mạnh" },
          { "value": "D", "text": "Tập trung quyền lực vào một cơ quan duy nhất" }
        ],
        "correctAnswer": "C",
        "explanation": "Để phát huy dân chủ XHCN, điều kiện tiên quyết là phải xây dựng Đảng Cộng sản Việt Nam trong sạch, vững mạnh để Đảng thực sự là đội tiên phong, đủ năng lực lãnh đạo nhà nước và xã hội."
      },
      {
        "id": "q4_15",
        "text": "Nhà nước pháp quyền có đặc trưng cơ bản nhất là gì?",
        "options": [
          { "value": "A", "text": "Sự lãnh đạo của một đảng" },
          { "value": "B", "text": "Sự thượng tôn pháp luật" },
          { "value": "C", "text": "Sự phân chia giai cấp" },
          { "value": "D", "text": "Sự tồn tại của quân đội" }
        ],
        "correctAnswer": "B",
        "explanation": "Đặc trưng cốt lõi của một nhà nước pháp quyền, dù là tư sản hay XHCN, là đề cao vai trò tối thượng của Hiến pháp và pháp luật trong đời sống nhà nước và xã hội."
      },
      {
        "id": "q4_16",
        "text": "Dân chủ XHCN mang tính nhất nguyên về chính trị nghĩa là gì?",
        "options": [
          { "value": "A", "text": "Chỉ có một giai cấp trong xã hội" },
          { "value": "B", "text": "Chỉ có một người lãnh đạo duy nhất" },
          { "value": "C", "text": "Chỉ có một đảng chính trị duy nhất lãnh đạo là Đảng Cộng sản" },
          { "value": "D", "text": "Chỉ có một hệ thống pháp luật duy nhất" }
        ],
        "correctAnswer": "C",
        "explanation": "Tính nhất nguyên về chính trị của dân chủ XHCN thể hiện ở việc thừa nhận và đảm bảo vai trò lãnh đạo duy nhất của Đảng Cộng sản đối với nhà nước và toàn xã hội."
      },
      {
        "id": "q4_17",
        "text": "Trong lịch sử, chế độ chính trị nào không có nền dân chủ?",
        "options": [
          { "value": "A", "text": "Chế độ chiếm hữu nô lệ" },
          { "value": "B", "text": "Chế độ phong kiến chuyên chế" },
          { "value": "C", "text": "Chế độ tư bản chủ nghĩa" },
          { "value": "D", "text": "Chế độ xã hội chủ nghĩa" }
        ],
        "correctAnswer": "B",
        "explanation": "Chế độ phong kiến được đặc trưng bởi sự độc tài, chuyên chế của vua chúa, quyền lực dựa trên thần quyền và quân quyền, do đó không tồn tại một nền dân chủ theo đúng nghĩa."
      },
      {
        "id": "q4_18",
        "text": "Sự khác biệt cơ bản nhất giữa dân chủ XHCN và dân chủ tư sản là gì?",
        "options": [
          { "value": "A", "text": "Ở cơ sở kinh tế và bản chất giai cấp" },
          { "value": "B", "text": "Ở hình thức tổ chức bầu cử" },
          { "value": "C", "text": "Ở việc có hay không có hiến pháp" },
          { "value": "D", "text": "Ở tên gọi của nhà nước" }
        ],
        "correctAnswer": "A",
        "explanation": "Sự khác biệt căn bản nằm ở cơ sở kinh tế (công hữu so với tư hữu) và bản chất giai cấp (nhà nước của đại đa số do GCCN lãnh đạo so với nhà nước của thiểu số là giai cấp tư sản)."
      },
      {
        "id": "q4_19",
        "text": "Một trong những nhiệm vụ cấp bách của việc xây dựng Nhà nước pháp quyền XHCN ở Việt Nam là gì?",
        "options": [
          { "value": "A", "text": "Mở rộng quy mô bộ máy nhà nước" },
          { "value": "B", "text": "Tăng cường thủ tục hành chính" },
          { "value": "C", "text": "Đấu tranh phòng, chống tham nhũng, lãng phí" },
          { "value": "D", "text": "Hạn chế quyền giám sát của nhân dân" }
        ],
        "correctAnswer": "C",
        "explanation": "Đảng và Nhà nước ta xác định phòng, chống tham nhũng, lãng phí là nhiệm vụ cấp bách, lâu dài để xây dựng một nhà nước trong sạch, vững mạnh, củng cố niềm tin của nhân dân."
      },
      {
        "id": "q4_20",
        "text": "Dân chủ sẽ tiêu vong khi nào?",
        "options": [
          { "value": "A", "text": "Khi CNTB sụp đổ" },
          { "value": "B", "text": "Khi nhà nước không còn tồn tại" },
          { "value": "C", "text": "Khi có nền kinh tế phát triển cao" },
          { "value": "D", "text": "Khi xã hội có nhiều đảng phái" }
        ],
        "correctAnswer": "B",
        "explanation": "Dân chủ với tư cách là một hình thái nhà nước, một chế độ chính trị sẽ mất đi tính chính trị của nó và tiêu vong khi nhà nước không còn tồn tại, tức là trong xã hội cộng sản chủ nghĩa phát triển cao."
      }
    ]
  },
  // --- Quiz Chương 5 ---
  {
    "id": 5,
    "chapterId": 5,
    "title": "Kiểm Tra Chương 5: Cơ Cấu Xã Hội - Giai Cấp",
    "questions": [
      {
        "id": "q5_1",
        "text": "Nội dung nào được coi là cơ bản nhất, quyết định nhất của liên minh giai cấp, tầng lớp trong thời kỳ quá độ?",
        "options": [
          { "value": "A", "text": "Nội dung chính trị" },
          { "value": "B", "text": "Nội dung kinh tế" },
          { "value": "C", "text": "Nội dung văn hóa - xã hội" },
          { "value": "D", "text": "Nội dung tư tưởng" }
        ],
        "correctAnswer": "B",
        "explanation": "Nội dung kinh tế (hợp tác phát triển sản xuất, xây dựng cơ sở vật chất-kỹ thuật) là nội dung cơ bản, quyết định nhất, là cơ sở vật chất vững chắc của khối liên minh."
      },
      {
        "id": "q5_2",
        "text": "Loại cơ cấu xã hội nào giữ vị trí quan trọng hàng đầu, chi phối các loại hình cơ cấu xã hội khác?",
        "options": [
          { "value": "A", "text": "Cơ cấu xã hội - dân cư" },
          { "value": "B", "text": "Cơ cấu xã hội - nghề nghiệp" },
          { "value": "C", "text": "Cơ cấu xã hội - giai cấp" },
          { "value": "D", "text": "Cơ cấu xã hội - tôn giáo" }
        ],
        "correctAnswer": "C",
        "explanation": "Cơ cấu xã hội - giai cấp giữ vị trí quan trọng hàng đầu vì nó liên quan đến quyền sở hữu tư liệu sản xuất và quyền lực chính trị, do đó chi phối các cơ cấu xã hội khác."
      },
      {
        "id": "q5_3",
        "text": "Sự biến đổi của cơ cấu xã hội - giai cấp trong thời kỳ quá độ bị quy định bởi yếu tố nào?",
        "options": [
          { "value": "A", "text": "Sự biến đổi của cơ cấu kinh tế" },
          { "value": "B", "text": "Ý muốn chủ quan của giai cấp cầm quyền" },
          { "value": "C", "text": "Sự biến đổi của cơ cấu dân số" },
          { "value": "D", "text": "Sự tác động của văn hóa nước ngoài" }
        ],
        "correctAnswer": "A",
        "explanation": "Quy luật cơ bản nhất là sự biến đổi của cơ cấu xã hội - giai cấp gắn liền và bị quy định bởi sự biến đổi của cơ cấu kinh tế trong thời kỳ quá độ."
      },
      {
        "id": "q5_4",
        "text": "Tính tất yếu của liên minh giai cấp, tầng lớp trong thời kỳ quá độ xuất phát từ đâu?",
        "options": [
          { "value": "A", "text": "Chỉ từ yêu cầu của cuộc đấu tranh chính trị" },
          { "value": "B", "text": "Chỉ từ yêu cầu của quá trình xây dựng kinh tế" },
          { "value": "C", "text": "Từ cả yêu cầu chính trị - xã hội và yêu cầu kinh tế" },
          { "value": "D", "text": "Từ yêu cầu của hội nhập quốc tế" }
        ],
        "correctAnswer": "C",
        "explanation": "Liên minh giai cấp vừa là tất yếu chính trị - xã hội để tập hợp lực lượng cách mạng, vừa là tất yếu kinh tế để xây dựng cơ sở vật chất-kỹ thuật cho CNXH."
      },
      {
        "id": "q5_5",
        "text": "Ở Việt Nam, lực lượng nào được coi là chủ thể của quá trình phát triển nông nghiệp, xây dựng nông thôn mới?",
        "options": [
          { "value": "A", "text": "Giai cấp công nhân" },
          { "value": "B", "text": "Giai cấp nông dân" },
          { "value": "C", "text": "Đội ngũ trí thức" },
          { "value": "D", "text": "Đội ngũ doanh nhân" }
        ],
        "correctAnswer": "B",
        "explanation": "Đảng ta xác định giai cấp nông dân có vị trí chiến lược, là chủ thể của quá trình phát triển nông nghiệp, kinh tế nông thôn và xây dựng nông thôn mới."
      },
      {
        "id": "q5_6",
        "text": "Nội dung chính trị của liên minh giai cấp, tầng lớp ở Việt Nam là gì?",
        "options": [
          { "value": "A", "text": "Giữ vững vai trò lãnh đạo của Đảng và bảo vệ vững chắc chế độ chính trị" },
          { "value": "B", "text": "Phát triển kinh tế, nâng cao đời sống" },
          { "value": "C", "text": "Xây dựng nền văn hóa tiên tiến" },
          { "value": "D", "text": "Giao lưu, hợp tác quốc tế" }
        ],
        "correctAnswer": "A",
        "explanation": "Nội dung chính trị của liên minh là tạo cơ sở chính trị - xã hội vững chắc cho khối đại đoàn kết, giữ vững lập trường chính trị, vai trò lãnh đạo của Đảng, bảo vệ chế độ XHCN."
      },
      {
        "id": "q5_7",
        "text": "Trong thời kỳ quá độ, cơ cấu xã hội - giai cấp biến đổi theo xu hướng nào?",
        "options": [
          { "value": "A", "text": "Ngày càng phân hóa sâu sắc và đối kháng" },
          { "value": "B", "text": "Ổn định, không thay đổi" },
          { "value": "C", "text": "Xích lại gần nhau, hướng tới sự bình đẳng xã hội" },
          { "value": "D", "text": "Tất cả các giai cấp cũ đều bị xóa bỏ ngay lập tức" }
        ],
        "correctAnswer": "C",
        "explanation": "Mặc dù còn đấu tranh, nhưng xu hướng chủ đạo trong sự biến đổi của cơ cấu xã hội - giai cấp trong thời kỳ quá độ là các giai cấp, tầng lớp xích lại gần nhau, từng bước xóa bỏ bất bình đẳng, vươn tới công bằng xã hội."
      },
      {
        "id": "q5_8",
        "text": "Đội ngũ nào được coi là lực lượng lao động sáng tạo đặc biệt quan trọng trong tiến trình đẩy mạnh CNH, HĐH ở Việt Nam?",
        "options": [
          { "value": "A", "text": "Giai cấp công nhân" },
          { "value": "B", "text": "Giai cấp nông dân" },
          { "value": "C", "text": "Đội ngũ trí thức" },
          { "value": "D", "text": "Lực lượng vũ trang" }
        ],
        "correctAnswer": "C",
        "explanation": "Đội ngũ trí thức được xác định là lực lượng lao động sáng tạo đặc biệt quan trọng trong tiến trình CNH, HĐH đất nước và xây dựng kinh tế tri thức."
      },
      {
        "id": "q5_9",
        "text": "Một trong những phương hướng để tăng cường khối liên minh ở Việt Nam hiện nay là gì?",
        "options": [
          { "value": "A", "text": "Chỉ quan tâm đến lợi ích của giai cấp công nhân" },
          { "value": "B", "text": "Hoàn thiện thể chế kinh tế thị trường định hướng XHCN" },
          { "value": "C", "text": "Hạn chế vai trò của đội ngũ doanh nhân" },
          { "value": "D", "text": "Tập trung phát triển nông nghiệp, xem nhẹ công nghiệp" }
        ],
        "correctAnswer": "B",
        "explanation": "Hoàn thiện thể chế kinh tế thị trường định hướng XHCN sẽ tạo ra môi trường và điều kiện thuận lợi để phát huy vai trò của các chủ thể, hài hòa lợi ích, từ đó củng cố khối liên minh."
      },
      {
        "id": "q5_10",
        "text": "Tại sao trong thời kỳ quá độ lại xuất hiện các tầng lớp xã hội mới?",
        "options": [
          { "value": "A", "text": "Do sự du nhập từ nước ngoài" },
          { "value": "B", "text": "Do sự phân hóa của các giai cấp cũ" },
          { "value": "C", "text": "Do sự tồn tại của nền kinh tế nhiều thành phần" },
          { "value": "D", "text": "Do ý muốn của nhà nước" }
        ],
        "correctAnswer": "C",
        "explanation": "Chính kết cấu kinh tế nhiều thành phần, với sự đa dạng về hình thức sở hữu và kinh doanh, đã dẫn đến sự biến đổi phức tạp trong cơ cấu xã hội và làm xuất hiện các tầng lớp xã hội mới như doanh nhân, tiểu chủ..."
      },
      {
        "id": "q5_11",
        "text": "Nền tảng của khối đại đoàn kết toàn dân tộc ở Việt Nam là gì?",
        "options": [
          { "value": "A", "text": "Sự thống nhất về kinh tế" },
          { "value": "B", "text": "Liên minh giai cấp công nhân với giai cấp nông dân và đội ngũ trí thức" },
          { "value": "C", "text": "Sự đoàn kết trong Đảng" },
          { "value": "D", "text": "Sự ổn định của nhà nước" }
        ],
        "correctAnswer": "B",
        "explanation": "Đảng ta luôn khẳng định khối đại đoàn kết toàn dân tộc được xây dựng trên nền tảng là liên minh giai cấp công nhân với giai cấp nông dân và đội ngũ trí thức."
      },
      {
        "id": "q5_12",
        "text": "Giai cấp nào giữ vai trò chủ đạo, tiên phong trong quá trình CNH, HĐH đất nước?",
        "options": [
          { "value": "A", "text": "Giai cấp nông dân" },
          { "value": "B", "text": "Đội ngũ trí thức" },
          { "value": "C", "text": "Giai cấp công nhân" },
          { "value": "D", "text": "Đội ngũ doanh nhân" }
        ],
        "correctAnswer": "C",
        "explanation": "Trong cơ cấu xã hội - giai cấp, giai cấp công nhân, lực lượng tiêu biểu cho phương thức sản xuất mới, giữ vai trò chủ đạo, tiên phong trong quá trình CNH, HĐH đất nước."
      },
      {
        "id": "q5_13",
        "text": "Trong thời kỳ quá độ ở Việt Nam, đội ngũ doanh nhân có vai trò gì?",
        "options": [
          { "value": "A", "text": "Đóng góp tích cực vào phát triển kinh tế - xã hội, giải quyết việc làm" },
          { "value": "B", "text": "Chỉ là đối tượng cần cải tạo" },
          { "value": "C", "text": "Là lực lượng đối lập với giai cấp công nhân" },
          { "value": "D", "text": "Không có vai trò gì đáng kể" }
        ],
        "correctAnswer": "A",
        "explanation": "Đảng ta xác định đội ngũ doanh nhân đang đóng góp tích cực vào việc thực hiện chiến lược phát triển kinh tế - xã hội, giải quyết việc làm, tham gia an sinh xã hội, và là lực lượng cần được xây dựng vững mạnh."
      },
      {
        "id": "q5_14",
        "text": "Nội dung văn hóa - xã hội của liên minh giai cấp, tầng lớp nhằm mục tiêu gì?",
        "options": [
          { "value": "A", "text": "Chỉ nâng cao dân trí" },
          { "value": "B", "text": "Gắn tăng trưởng kinh tế với phát triển văn hóa và thực hiện công bằng xã hội" },
          { "value": "C", "text": "Chỉ xây dựng các thiết chế văn hóa" },
          { "value": "D", "text": "Chỉ xóa đói giảm nghèo" }
        ],
        "correctAnswer": "B",
        "explanation": "Nội dung văn hóa - xã hội của liên minh là một tổng thể, bao gồm việc xây dựng nền văn hóa và con người mới, đồng thời phải gắn tăng trưởng kinh tế với thực hiện tiến bộ, công bằng xã hội, nâng cao chất lượng cuộc sống cho nhân dân."
      },
      {
        "id": "q5_15",
        "text": "Việc C.Mác và Ph.Ăngghen chỉ ra các cuộc đấu tranh của công nhân thất bại do \"đơn độc\" là muốn nhấn mạnh điều gì?",
        "options": [
          { "value": "A", "text": "Sự cần thiết của việc có vũ khí hiện đại" },
          { "value": "B", "text": "Sự cần thiết của việc liên minh với giai cấp nông dân" },
          { "value": "C", "text": "Sự cần thiết của việc đấu tranh hòa bình" },
          { "value": "D", "text": "Sự cần thiết của việc có lãnh tụ tài giỏi" }
        ],
        "correctAnswer": "B",
        "explanation": "Khi phân tích thất bại của các phong trào công nhân, các ông đã chỉ ra nguyên nhân là do giai cấp công nhân 'đơn độc', chưa liên minh được với 'người bạn đồng minh tự nhiên' của mình là giai cấp nông dân."
      },
      {
        "id": "q5_16",
        "text": "Trong thời kỳ quá độ, xu hướng giảm dần về số lượng và tỷ lệ trong cơ cấu xã hội là của giai cấp nào?",
        "options": [
          { "value": "A", "text": "Giai cấp công nhân" },
          { "value": "B", "text": "Giai cấp nông dân" },
          { "value": "C", "text": "Đội ngũ trí thức" },
          { "value": "D", "text": "Đội ngũ doanh nhân" }
        ],
        "correctAnswer": "B",
        "explanation": "Trong quá trình CNH, HĐH, lao động sẽ chuyển dịch từ nông nghiệp sang công nghiệp và dịch vụ, do đó, giai cấp nông dân có xu hướng giảm dần về số lượng và tỷ lệ."
      },
      {
        "id": "q5_17",
        "text": "Để tăng cường khối liên minh, Nhà nước cần làm gì?",
        "options": [
          { "value": "A", "text": "Ban hành các chính sách xã hội tổng thể, phù hợp" },
          { "value": "B", "text": "Tăng thuế đối với nông dân và trí thức" },
          { "value": "C", "text": "Chỉ ưu tiên phát triển kinh tế nhà nước" },
          { "value": "D", "text": "Hạn chế sự phát triển của kinh tế tư nhân" }
        ],
        "correctAnswer": "A",
        "explanation": "Xây dựng và thực hiện một hệ thống chính sách xã hội tổng thể, công bằng, quan tâm đến lợi ích của tất cả các giai cấp, tầng lớp là giải pháp quan trọng để tạo động lực và sự đồng thuận, củng cố khối liên minh."
      },
      {
        "id": "q5_18",
        "text": "Tổ chức nào có vai trò quan trọng trong việc tập hợp, xây dựng khối đại đoàn kết toàn dân tộc ở Việt Nam?",
        "options": [
          { "value": "A", "text": "Chính phủ" },
          { "value": "B", "text": "Quốc hội" },
          { "value": "C", "text": "Mặt trận Tổ quốc Việt Nam" },
          { "value": "D", "text": "Hội đồng nhân dân" }
        ],
        "correctAnswer": "C",
        "explanation": "Mặt trận Tổ quốc Việt Nam và các tổ chức thành viên có vai trò quan trọng trong việc tập hợp, đoàn kết các tầng lớp nhân dân, củng cố và mở rộng khối đại đoàn kết toàn dân tộc."
      },
      {
        "id": "q5_19",
        "text": "Sự biến đổi của cơ cấu kinh tế theo hướng CNH, HĐH tác động như thế nào đến giai cấp công nhân Việt Nam?",
        "options": [
          { "value": "A", "text": "Làm cho giai cấp công nhân bị thu hẹp" },
          { "value": "B", "text": "Làm cho giai cấp công nhân phát triển nhanh cả về số lượng và chất lượng" },
          { "value": "C", "text": "Không có tác động gì đáng kể" },
          { "value": "D", "text": "Làm giảm vai trò của giai cấp công nhân" }
        ],
        "correctAnswer": "B",
        "explanation": "Quá trình CNH, HĐH là môi trường, điều kiện để giai cấp công nhân phát triển mạnh mẽ, tăng nhanh về số lượng, đa dạng về cơ cấu và nâng cao về chất lượng (trình độ, kỹ năng...)."
      },
      {
        "id": "q5_20",
        "text": "Đâu là một biểu hiện của sự biến đổi trong nội bộ giai cấp nông dân Việt Nam hiện nay?",
        "options": [
          { "value": "A", "text": "Tất cả nông dân đều trở thành công nhân" },
          { "value": "B", "text": "Nông dân không còn vai trò gì trong xã hội" },
          { "value": "C", "text": "Xuất hiện các chủ trang trại lớn, đồng thời vẫn còn nông dân mất ruộng đất" },
          { "value": "D", "text": "Thu nhập của mọi nông dân đều như nhau" }
        ],
        "correctAnswer": "C",
        "explanation": "Trong giai cấp nông dân đang diễn ra sự phân hóa: một bộ phận vươn lên thành chủ trang trại, sản xuất hàng hóa lớn; một bộ phận khác gặp khó khăn, mất ruộng đất, phải đi làm thuê. Đây là một biểu hiện của sự biến đổi phức tạp."
      }
    ]
  },
  // --- Quiz Chương 6 ---
  {
    "id": 6,
    "chapterId": 6,
    "title": "Kiểm Tra Chương 6: Vấn Đề Dân Tộc và Tôn Giáo",
    "questions": [
      {
        "id": "q6_1",
        "text": "Cương lĩnh dân tộc của chủ nghĩa Mác - Lênin KHÔNG bao gồm nguyên tắc nào sau đây?",
        "options": [
          { "value": "A", "text": "Các dân tộc hoàn toàn bình đẳng" },
          { "value": "B", "text": "Các dân tộc được quyền tự quyết" },
          { "value": "C", "text": "Các dân tộc phải có nền văn hóa đồng nhất" },
          { "value": "D", "text": "Liên hiệp công nhân tất cả các dân tộc" }
        ],
        "correctAnswer": "C",
        "explanation": "Cương lĩnh dân tộc bao gồm 3 nguyên tắc: bình đẳng, quyền tự quyết và liên hiệp công nhân. Chủ nghĩa Mác-Lênin tôn trọng sự đa dạng văn hóa, không yêu cầu các dân tộc phải đồng nhất văn hóa."
      },
      {
        "id": "q6_2",
        "text": "Theo chủ nghĩa Mác - Lênin, bản chất của tôn giáo là gì?",
        "options": [
          { "value": "A", "text": "Là một hiện tượng có sẵn trong tự nhiên" },
          { "value": "B", "text": "Là sự phản ánh hư ảo hiện thực khách quan vào đầu óc con người" },
          { "value": "C", "text": "Là một công cụ do giai cấp thống trị sáng tạo ra" },
          { "value": "D", "text": "Là một hiện tượng vĩnh viễn, không thay đổi" }
        ],
        "correctAnswer": "B",
        "explanation": "Bản chất của tôn giáo là một hình thái ý thức xã hội, phản ánh một cách hư ảo, sai lệch hiện thực khách quan, trong đó các lực lượng trần thế mang hình thức của các lực lượng siêu trần thế."
      },
      {
        "id": "q6_3",
        "text": "Đâu là hai xu hướng khách quan trong sự phát triển quan hệ dân tộc mà V.I. Lênin đã chỉ ra?",
        "options": [
          { "value": "A", "text": "Tách ra và đồng hóa" },
          { "value": "B", "text": "Tách ra và liên hiệp lại" },
          { "value": "C", "text": "Liên hiệp lại và xung đột" },
          { "value": "D", "text": "Đồng hóa và xung đột" }
        ],
        "correctAnswer": "B",
        "explanation": "V.I. Lênin đã phát hiện ra hai xu hướng khách quan: xu hướng các cộng đồng muốn tách ra để hình thành dân tộc độc lập và xu hướng các dân tộc muốn liên hiệp lại với nhau."
      },
      {
        "id": "q6_4",
        "text": "Chính sách dân tộc của Đảng và Nhà nước Việt Nam được thực hiện trên nguyên tắc nào?",
        "options": [
          { "value": "A", "text": "Bình đẳng, đoàn kết, tôn trọng, giúp nhau cùng phát triển" },
          { "value": "B", "text": "Ưu tiên tuyệt đối cho dân tộc đa số" },
          { "value": "C", "text": "Đồng hóa văn hóa các dân tộc thiểu số" },
          { "value": "D", "text": "Để các dân tộc tự phát triển, không can thiệp" }
        ],
        "correctAnswer": "A",
        "explanation": "Quan điểm nhất quán của Đảng và Nhà nước ta là thực hiện chính sách dân tộc trên nguyên tắc: bình đẳng, đoàn kết, tôn trọng, giúp nhau cùng phát triển."
      },
      {
        "id": "q6_5",
        "text": "Nguồn gốc nào của tôn giáo liên quan đến sự bất lực của con người trước các thế lực tự nhiên và xã hội?",
        "options": [
          { "value": "A", "text": "Nguồn gốc nhận thức" },
          { "value": "B", "text": "Nguồn gốc tâm lý" },
          { "value": "C", "text": "Nguồn gốc tự nhiên, kinh tế - xã hội" },
          { "value": "D", "text": "Nguồn gốc lịch sử" }
        ],
        "correctAnswer": "C",
        "explanation": "Nguồn gốc tự nhiên, kinh tế - xã hội của tôn giáo xuất phát từ sự yếu đuối, bất lực của con người trước sức mạnh của tự nhiên (trong xã hội nguyên thủy) và sự áp bức, bóc lột của các lực lượng xã hội (trong xã hội có giai cấp)."
      },
      {
        "id": "q6_6",
        "text": "Một trong những nguyên tắc cơ bản để giải quyết vấn đề tôn giáo trong thời kỳ quá độ là gì?",
        "options": [
          { "value": "A", "text": "Dùng mệnh lệnh hành chính để xóa bỏ tôn giáo" },
          { "value": "B", "text": "Tôn trọng, bảo đảm quyền tự do tín ngưỡng, không tín ngưỡng của nhân dân" },
          { "value": "C", "text": "Xem nhẹ mặt chính trị của tôn giáo" },
          { "value": "D", "text": "Cấm tất cả các hoạt động tôn giáo" }
        ],
        "correctAnswer": "B",
        "explanation": "Nguyên tắc hàng đầu trong việc giải quyết vấn đề tôn giáo là tôn trọng và bảo đảm quyền tự do tín ngưỡng, theo hoặc không theo một tôn giáo nào của nhân dân."
      },
      {
        "id": "q6_7",
        "text": "Đâu là đặc điểm nổi bật của các dân tộc ở Việt Nam?",
        "options": [
          { "value": "A", "text": "Mỗi dân tộc cư trú trên một lãnh thổ riêng biệt" },
          { "value": "B", "text": "Có truyền thống xung đột, chiến tranh" },
          { "value": "C", "text": "Có truyền thống đoàn kết, gắn bó lâu đời" },
          { "value": "D", "text": "Trình độ phát triển kinh tế-xã hội hoàn toàn đồng đều" }
        ],
        "correctAnswer": "C",
        "explanation": "Một đặc trưng quý báu của cộng đồng các dân tộc Việt Nam là có truyền thống đoàn kết, gắn bó lâu đời trong quá trình dựng nước và giữ nước."
      },
      {
        "id": "q6_8",
        "text": "Phân biệt hai mặt chính trị và tư tưởng trong vấn đề tôn giáo nhằm mục đích gì?",
        "options": [
          { "value": "A", "text": "Để có thái độ ứng xử phù hợp, tránh khuynh hướng cực đoan" },
          { "value": "B", "text": "Để cấm đoán mặt tư tưởng" },
          { "value": "C", "text": "Để ủng hộ mặt chính trị phản động" },
          { "value": "D", "text": "Để xóa bỏ tôn giáo nhanh hơn" }
        ],
        "correctAnswer": "A",
        "explanation": "Việc phân biệt rõ mặt chính trị (lợi dụng tôn giáo) và mặt tư tưởng (niềm tin thuần túy) là cần thiết để có thái độ ứng xử đúng đắn, tập trung đấu tranh với các hành vi lợi dụng tôn giáo, đồng thời tôn trọng nhu cầu tín ngưỡng chính đáng của nhân dân."
      },
      {
        "id": "q6_9",
        "text": "Quan hệ dân tộc và tôn giáo ở Việt Nam chịu sự chi phối mạnh mẽ bởi yếu tố nào?",
        "options": [
          { "value": "A", "text": "Văn hóa phương Tây" },
          { "value": "B", "text": "Tín ngưỡng truyền thống" },
          { "value": "C", "text": "Sự khác biệt về kinh tế" },
          { "value": "D", "text": "Sự can thiệp từ bên ngoài" }
        ],
        "correctAnswer": "B",
        "explanation": "Một đặc thù của Việt Nam là quan hệ dân tộc và tôn giáo chịu sự chi phối mạnh mẽ bởi tín ngưỡng truyền thống, đặc biệt là tín ngưỡng thờ cúng tổ tiên, tạo ra một sự gắn kết cộng đồng sâu sắc."
      },
      {
        "id": "q6_10",
        "text": "Nội dung cốt lõi của công tác tôn giáo ở Việt Nam là gì?",
        "options": [
          { "value": "A", "text": "Công tác quản lý hành chính" },
          { "value": "B", "text": "Công tác vận động quần chúng" },
          { "value": "C", "text": "Công tác đấu tranh tư tưởng" },
          { "value": "D", "text": "Công tác đối ngoại" }
        ],
        "correctAnswer": "B",
        "explanation": "Đảng ta xác định nội dung cốt lõi của công tác tôn giáo là công tác vận động quần chúng, nhằm đoàn kết, động viên đồng bào có đạo thực hiện tốt các chính sách, pháp luật, đóng góp vào sự nghiệp xây dựng đất nước."
      },
      {
        "id": "q6_11",
        "text": "Dân tộc theo nghĩa hẹp (ethnie) có các đặc trưng cơ bản nào? (Chọn các đáp án đúng)",
        "options": [
          { "value": "A", "text": "Cộng đồng về ngôn ngữ" },
          { "value": "B", "text": "Cộng đồng về văn hóa" },
          { "value": "C", "text": "Ý thức tự giác tộc người" },
          { "value": "D", "text": "Có một nhà nước riêng" }
        ],
        "correctAnswer": "ABC",
        "explanation": "Các đặc trưng cơ bản của dân tộc - tộc người là cộng đồng về ngôn ngữ, văn hóa và ý thức tự giác tộc người. Đặc trưng có nhà nước riêng là của dân tộc - quốc gia."
      },
      {
        "id": "q6_12",
        "text": "Theo quan điểm của chủ nghĩa Mác - Lênin, tôn giáo sẽ mất dần vị trí khi nào?",
        "options": [
          { "value": "A", "text": "Khi nhà nước dùng luật pháp cấm đoán" },
          { "value": "B", "text": "Khi các nguồn gốc sinh ra nó (kinh tế-xã hội, nhận thức, tâm lý) được khắc phục" },
          { "value": "C", "text": "Khi tất cả mọi người đều theo một tôn giáo duy nhất" },
          { "value": "D", "text": "Khi có chiến tranh tôn giáo" }
        ],
        "correctAnswer": "B",
        "explanation": "Tôn giáo là hiện tượng lịch sử, nó sẽ dần mất đi vị trí khi các điều kiện tồn tại của nó không còn, tức là khi con người làm chủ được tự nhiên và xã hội, nâng cao trình độ nhận thức, xóa bỏ áp bức bất công."
      },
      {
        "id": "q6_13",
        "text": "Tín ngưỡng khác tôn giáo ở điểm nào?",
        "options": [
          { "value": "A", "text": "Tín ngưỡng không có niềm tin vào siêu nhiên" },
          { "value": "B", "text": "Tín ngưỡng thường không có hệ thống giáo lý, giáo luật, tổ chức chặt chẽ như tôn giáo" },
          { "value": "C", "text": "Tín ngưỡng chỉ có ở các nước phương Đông" },
          { "value": "D", "text": "Tôn giáo không có các nghi lễ thờ cúng" }
        ],
        "correctAnswer": "B",
        "explanation": "Tôn giáo là một thực thể xã hội có đầy đủ 4 yếu tố: giáo lý, giáo luật, lễ nghi, tổ chức giáo hội. Tín ngưỡng là hệ thống niềm tin nhưng thường không có hệ thống tổ chức chặt chẽ và giáo lý hoàn chỉnh như tôn giáo."
      },
      {
        "id": "q6_14",
        "text": "Tính chất nào của tôn giáo chỉ xuất hiện trong xã hội có giai cấp?",
        "options": [
          { "value": "A", "text": "Tính lịch sử" },
          { "value": "B", "text": "Tính quần chúng" },
          { "value": "C", "text": "Tính chính trị" },
          { "value": "D", "text": "Tính nhân văn" }
        ],
        "correctAnswer": "C",
        "explanation": "Tính chính trị của tôn giáo chỉ xuất hiện khi xã hội phân chia giai cấp, khi các giai cấp thống trị, bóc lột bắt đầu lợi dụng tôn giáo để phục vụ cho lợi ích của mình."
      },
      {
        "id": "q6_15",
        "text": "Việc các dân tộc thiểu số Việt Nam cư trú trên các địa bàn trọng yếu đòi hỏi chính sách dân tộc phải kết hợp với điều gì?",
        "options": [
          { "value": "A", "text": "Phát triển kinh tế - xã hội với củng cố an ninh - quốc phòng" },
          { "value": "B", "text": "Chỉ tập trung phát triển kinh tế" },
          { "value": "C", "text": "Chỉ tập trung vào công tác an ninh" },
          { "value": "D", "text": "Khuyến khích di dân ra khỏi các vùng này" }
        ],
        "correctAnswer": "A",
        "explanation": "Do các dân tộc thiểu số cư trú ở các địa bàn có vị trí chiến lược quan trọng, nên chính sách dân tộc phải toàn diện, kết hợp chặt chẽ giữa phát triển kinh tế, văn hóa, xã hội với đảm bảo an ninh, quốc phòng."
      },
      {
        "id": "q6_16",
        "text": "Việc giải quyết tốt mối quan hệ dân tộc và tôn giáo ở Việt Nam nhằm mục đích gì?",
        "options": [
          { "value": "A", "text": "Tạo sự đồng thuận, củng cố khối đại đoàn kết toàn dân tộc" },
          { "value": "B", "text": "Chỉ để phục vụ mục đích đối ngoại" },
          { "value": "C", "text": "Để xóa bỏ các tôn giáo" },
          { "value": "D", "text": "Để đồng hóa các dân tộc" }
        ],
        "correctAnswer": "A",
        "explanation": "Mục đích của việc giải quyết tốt quan hệ dân tộc và tôn giáo là nhằm tạo sự đồng thuận xã hội, củng cố và tăng cường khối đại đoàn kết toàn dân tộc, tạo động lực cho sự nghiệp xây dựng và bảo vệ Tổ quốc."
      },
      {
        "id": "q6_17",
        "text": "Quyền tự quyết của các dân tộc có bao gồm quyền đòi ly khai một cách tùy tiện không?",
        "options": [
          { "value": "A", "text": "Có, đó là quyền tuyệt đối" },
          { "value": "B", "text": "Không, việc thực hiện quyền tự quyết phải đứng trên lập trường của giai cấp công nhân và phù hợp với lợi ích chung" },
          { "value": "C", "text": "Chỉ áp dụng cho các dân tộc lớn" },
          { "value": "D", "text": "Chỉ là khẩu hiệu, không có giá trị thực tế" }
        ],
        "correctAnswer": "B",
        "explanation": "Quyền tự quyết không phải là quyền tuyệt đối, không thể bị lợi dụng để đòi ly khai một cách tùy tiện, chia rẽ quốc gia. Việc thực hiện quyền này phải đảm bảo sự thống nhất giữa lợi ích dân tộc và lợi ích chung của cách mạng."
      },
      {
        "id": "q6_18",
        "text": "Công tác tôn giáo là trách nhiệm của ai?",
        "options": [
          { "value": "A", "text": "Chỉ của Ban Tôn giáo Chính phủ" },
          { "value": "B", "text": "Chỉ của các chức sắc tôn giáo" },
          { "value": "C", "text": "Của cả hệ thống chính trị" },
          { "value": "D", "text": "Chỉ của cơ quan công an" }
        ],
        "correctAnswer": "C",
        "explanation": "Đảng ta xác định công tác tôn giáo là trách nhiệm của toàn bộ hệ thống chính trị, bao gồm Đảng, chính quyền, Mặt trận Tổ quốc và các đoàn thể chính trị - xã hội."
      },
      {
        "id": "q6_19",
        "text": "Niềm tin vào các lực lượng siêu nhiên đến mức mê muội, cuồng tín, dẫn đến hành vi cực đoan, sai lệch được gọi là gì?",
        "options": [
          { "value": "A", "text": "Tín ngưỡng" },
          { "value": "B", "text": "Tôn giáo" },
          { "value": "C", "text": "Mê tín dị đoan" },
          { "value": "D", "text": "Văn hóa" }
        ],
        "correctAnswer": "C",
        "explanation": "Mê tín dị đoan là niềm tin mê muội, cuồng tín vào những điều viển vông, không có cơ sở khoa học, dẫn đến những hành vi tiêu cực, gây hại cho cá nhân và xã hội."
      },
      {
        "id": "q6_20",
        "text": "Đâu là một ví dụ về tín ngưỡng truyền thống ở Việt Nam?",
        "options": [
          { "value": "A", "text": "Công giáo" },
          { "value": "B", "text": "Phật giáo Hòa Hảo" },
          { "value": "C", "text": "Thờ cúng tổ tiên" },
          { "value": "D", "text": "Đạo Tin Lành" }
        ],
        "correctAnswer": "C",
        "explanation": "Thờ cúng tổ tiên là một hình thức tín ngưỡng truyền thống, phổ biến và có vai trò quan trọng trong đời sống tinh thần của người Việt Nam."
      }
    ]
  },
  // --- Quiz Chương 7 ---
  {
    "id": 7,
    "chapterId": 7,
    "title": "Kiểm Tra Chương 7: Vấn Đề Gia Đình",
    "questions": [
      {
        "id": "q7_1",
        "text": "Chức năng nào của gia đình được coi là chức năng đặc thù, quyết định sự tồn tại và phát triển của xã hội?",
        "options": [
          { "value": "A", "text": "Chức năng kinh tế và tổ chức tiêu dùng" },
          { "value": "B", "text": "Chức năng nuôi dưỡng, giáo dục" },
          { "value": "C", "text": "Chức năng tái sản xuất ra con người" },
          { "value": "D", "text": "Chức năng thỏa mãn nhu cầu tâm sinh lý" }
        ],
        "correctAnswer": "C",
        "explanation": "Chức năng tái sản xuất ra con người là chức năng đặc thù mà không một cộng đồng nào khác có thể thay thế được. Nó duy trì sự kế thừa của các thế hệ, đảm bảo sự tồn tại của xã hội."
      },
      {
        "id": "q7_2",
        "text": "Đâu là cơ sở kinh tế - xã hội để xây dựng gia đình trong thời kỳ quá độ lên chủ nghĩa xã hội?",
        "options": [
          { "value": "A", "text": "Sự tồn tại của kinh tế tư nhân" },
          { "value": "B", "text": "Sự phát triển của kinh tế thị trường" },
          { "value": "C", "text": "Việc xóa bỏ chế độ tư hữu, xác lập chế độ công hữu về tư liệu sản xuất chủ yếu" },
          { "value": "D", "text": "Sự gia tăng của cải của cá nhân" }
        ],
        "correctAnswer": "C",
        "explanation": "Cơ sở kinh tế-xã hội của gia đình mới là việc xóa bỏ chế độ tư hữu về tư liệu sản xuất, vì đây là nguồn gốc của sự áp bức, bất bình đẳng trong gia đình, đặc biệt là đối với phụ nữ."
      },
      {
        "id": "q7_3",
        "text": "Vị trí nào sau đây của gia đình thể hiện vai trò quyết định của nó đối với sự tồn tại của xã hội?",
        "options": [
          { "value": "A", "text": "Là tổ ấm" },
          { "value": "B", "text": "Là tế bào của xã hội" },
          { "value": "C", "text": "Là cầu nối giữa cá nhân và xã hội" },
          { "value": "D", "text": "Là đơn vị kinh tế" }
        ],
        "correctAnswer": "B",
        "explanation": "Ví gia đình là 'tế bào của xã hội' nhấn mạnh vai trò nền tảng, cơ sở của gia đình. Gia đình khỏe mạnh thì xã hội mới lành mạnh, phát triển."
      },
      {
        "id": "q7_4",
        "text": "Chế độ hôn nhân tiến bộ trong chủ nghĩa xã hội KHÔNG dựa trên nguyên tắc nào?",
        "options": [
          { "value": "A", "text": "Hôn nhân tự nguyện" },
          { "value": "B", "text": "Hôn nhân một vợ một chồng" },
          { "value": "C", "text": "Hôn nhân dựa trên sự sắp đặt của cha mẹ" },
          { "value": "D", "text": "Hôn nhân được đảm bảo về pháp lý" }
        ],
        "correctAnswer": "C",
        "explanation": "Chế độ hôn nhân tiến bộ đề cao sự tự nguyện, xuất phát từ tình yêu, bác bỏ sự áp đặt, sắp đặt của cha mẹ hay bất kỳ ai khác."
      },
      {
        "id": "q7_5",
        "text": "Sự biến đổi nổi bật về quy mô, kết cấu của gia đình Việt Nam hiện nay là gì?",
        "options": [
          { "value": "A", "text": "Gia đình truyền thống nhiều thế hệ ngày càng phổ biến" },
          { "value": "B", "text": "Gia đình hạt nhân (gia đình đơn) ngày càng trở nên phổ biến" },
          { "value": "C", "text": "Quy mô gia đình ngày càng lớn hơn" },
          { "value": "D", "text": "Không có sự thay đổi nào đáng kể" }
        ],
        "correctAnswer": "B",
        "explanation": "Một trong những biến đổi lớn nhất của gia đình Việt Nam hiện nay là sự thay thế dần gia đình truyền thống nhiều thế hệ bằng mô hình gia đình hạt nhân (hai thế hệ: cha mẹ và con cái) quy mô nhỏ."
      },
      {
        "id": "q7_6",
        "text": "Chức năng nuôi dưỡng, giáo dục của gia đình còn được gọi là chức năng gì?",
        "options": [
          { "value": "A", "text": "Chức năng xã hội hóa" },
          { "value": "B", "text": "Chức năng kinh tế" },
          { "value": "C", "text": "Chức năng sinh học" },
          { "value": "D", "text": "Chức năng chính trị" }
        ],
        "correctAnswer": "A",
        "explanation": "Chức năng nuôi dưỡng, giáo dục của gia đình chính là quá trình xã hội hóa đầu tiên và quan trọng nhất của mỗi cá nhân, giúp họ học các chuẩn mực, giá trị để hòa nhập vào xã hội."
      },
      {
        "id": "q7_7",
        "text": "Cơ sở chính trị - xã hội để xây dựng gia đình mới trong thời kỳ quá độ là gì?",
        "options": [
          { "value": "A", "text": "Sự phát triển của kinh tế" },
          { "value": "B", "text": "Việc thiết lập nhà nước xã hội chủ nghĩa và hệ thống pháp luật tiến bộ" },
          { "value": "C", "text": "Sự nâng cao dân trí" },
          { "value": "D", "text": "Sự giao lưu văn hóa" }
        ],
        "correctAnswer": "B",
        "explanation": "Cơ sở chính trị - xã hội là việc thiết lập chính quyền của nhân dân, nhà nước XHCN ban hành các luật lệ, chính sách tiến bộ (như Luật Hôn nhân và gia đình) để bảo vệ gia đình, giải phóng phụ nữ."
      },
      {
        "id": "q7_8",
        "text": "Một trong những phương hướng cơ bản để xây dựng gia đình Việt Nam hiện nay là gì?",
        "options": [
          { "value": "A", "text": "Xóa bỏ hoàn toàn gia đình truyền thống" },
          { "value": "B", "text": "Phát huy những giá trị của gia đình truyền thống và tiếp thu tiến bộ của nhân loại" },
          { "value": "C", "text": "Chỉ tập trung vào phát triển kinh tế gia đình" },
          { "value": "D", "text": "Để gia đình phát triển tự phát" }
        ],
        "correctAnswer": "B",
        "explanation": "Phương hướng đúng đắn là phải kế thừa, phát huy những giá trị văn hóa tốt đẹp của gia đình truyền thống, đồng thời tiếp thu có chọn lọc những giá trị tiên tiến của gia đình hiện đại trên thế giới."
      },
      {
        "id": "q7_9",
        "text": "Gia đình có những mối quan hệ cơ bản nào?",
        "options": [
          { "value": "A", "text": "Quan hệ hôn nhân và quan hệ huyết thống" },
          { "value": "B", "text": "Quan hệ hàng xóm" },
          { "value": "C", "text": "Quan hệ đồng nghiệp" },
          { "value": "D", "text": "Quan hệ bạn bè" }
        ],
        "correctAnswer": "A",
        "explanation": "Cơ sở hình thành gia đình là hai mối quan hệ cơ bản: quan hệ hôn nhân (vợ - chồng) và quan hệ huyết thống (cha mẹ - con cái)."
      },
      {
        "id": "q7_10",
        "text": "Phong trào nào đã và đang có tác động tích cực đến việc xây dựng gia đình ở Việt Nam?",
        "options": [
          { "value": "A", "text": "Phong trào thi đua sản xuất giỏi" },
          { "value": "B", "text": "Phong trào xây dựng gia đình văn hóa" },
          { "value": "C", "text": "Phong trào toàn dân bảo vệ an ninh Tổ quốc" },
          { "value": "D", "text": "Phong trào thanh niên tình nguyện" }
        ],
        "correctAnswer": "B",
        "explanation": "Phong trào xây dựng gia đình văn hóa đã trở thành một phong trào thi đua rộng khắp, tác động tích cực đến việc xây dựng các gia đình no ấm, hòa thuận, tiến bộ, hạnh phúc."
      },
      {
        "id": "q7_11",
        "text": "Quan điểm \"Nếu không giải phóng phụ nữ là xây dựng chủ nghĩa xã hội chỉ một nửa\" là của ai?",
        "options": [
          { "value": "A", "text": "C. Mác" },
          { "value": "B", "text": "Ph. Ăngghen" },
          { "value": "C", "text": "V.I. Lênin" },
          { "value": "D", "text": "Hồ Chí Minh" }
        ],
        "correctAnswer": "D",
        "explanation": "Đây là khẳng định nổi tiếng của Chủ tịch Hồ Chí Minh, nhấn mạnh tầm quan trọng của việc giải phóng phụ nữ trong sự nghiệp xây dựng gia đình mới và xã hội mới."
      },
      {
        "id": "q7_12",
        "text": "Sự biến đổi của chức năng kinh tế gia đình Việt Nam hiện nay có đặc điểm gì?",
        "options": [
          { "value": "A", "text": "Chức năng kinh tế hoàn toàn biến mất" },
          { "value": "B", "text": "Chuyển từ kinh tế tự cấp tự túc sang kinh tế hàng hóa" },
          { "value": "C", "text": "Gia đình không còn là đơn vị tiêu dùng" },
          { "value": "D", "text": "Chỉ còn các gia đình ở nông thôn làm kinh tế" }
        ],
        "correctAnswer": "B",
        "explanation": "Một bước chuyển mang tính bước ngoặt của kinh tế gia đình là chuyển từ kinh tế tự cấp tự túc, khép kín sang sản xuất hàng hóa để đáp ứng nhu cầu của thị trường và xã hội."
      },
      {
        "id": "q7_13",
        "text": "Tại sao hôn nhân cần được đảm bảo về pháp lý?",
        "options": [
          { "value": "A", "text": "Để hạn chế quyền tự do của cá nhân" },
          { "value": "B", "text": "Để thể hiện trách nhiệm của cá nhân với gia đình và xã hội, và được xã hội bảo vệ" },
          { "value": "C", "text": "Để nhà nước dễ dàng thu thuế" },
          { "value": "D", "text": "Để ngăn cản việc ly hôn" }
        ],
        "correctAnswer": "B",
        "explanation": "Việc thực hiện thủ tục pháp lý trong hôn nhân là cần thiết để thể hiện sự thừa nhận của xã hội, thể hiện trách nhiệm giữa các bên và với xã hội, đồng thời là cơ sở để pháp luật bảo vệ quyền lợi chính đáng của vợ, chồng và con cái."
      },
      {
        "id": "q7_14",
        "text": "Thách thức nào mà các gia đình Việt Nam đang đối mặt trong bối cảnh hiện nay?",
        "options": [
          { "value": "A", "text": "Quan hệ gia đình lỏng lẻo, gia tăng tỷ lệ ly hôn" },
          { "value": "B", "text": "Bạo lực gia đình" },
          { "value": "C", "text": "Mâu thuẫn thế hệ" },
          { "value": "D", "text": "Tất cả các phương án trên" }
        ],
        "correctAnswer": "D",
        "explanation": "Gia đình Việt Nam hiện nay đang đối mặt với nhiều thách thức như quan hệ lỏng lẻo, ly hôn, bạo hành, mâu thuẫn thế hệ, giá trị truyền thống bị coi nhẹ..."
      },
      {
        "id": "q7_15",
        "text": "Việc thực hiện bình đẳng giới trong gia đình là một nội dung của cơ sở nào để xây dựng gia đình mới?",
        "options": [
          { "value": "A", "text": "Cơ sở kinh tế - xã hội" },
          { "value": "B", "text": "Cơ sở chính trị - xã hội" },
          { "value": "C", "text": "Cơ sở văn hóa" },
          { "value": "D", "text": "Cả A, B, C" }
        ],
        "correctAnswer": "D",
        "explanation": "Thực hiện bình đẳng giới là một mục tiêu toàn diện, đòi hỏi phải có cơ sở từ kinh tế (phụ nữ độc lập về kinh tế), chính trị (pháp luật bảo vệ), và văn hóa (thay đổi định kiến, quan niệm lạc hậu)."
      },
      {
        "id": "q7_16",
        "text": "Mục tiêu xây dựng gia đình Việt Nam được Đảng ta xác định là gì?",
        "options": [
          { "value": "A", "text": "No ấm, tiến bộ, hạnh phúc, văn minh" },
          { "value": "B", "text": "Giàu có, quyền lực, danh tiếng" },
          { "value": "C", "text": "Đông con, nhiều phúc" },
          { "value": "D", "text": "Theo mô hình gia đình phương Tây" }
        ],
        "correctAnswer": "A",
        "explanation": "Mục tiêu nhất quán của Đảng và Nhà nước ta là xây dựng gia đình Việt Nam no ấm, tiến bộ, hạnh phúc, văn minh, thực sự là tế bào lành mạnh của xã hội."
      },
      {
        "id": "q7_17",
        "text": "Trong gia đình, ai là người vừa là chủ thể giáo dục, vừa là khách thể chịu sự giáo dục?",
        "options": [
          { "value": "A", "text": "Chỉ có cha mẹ" },
          { "value": "B", "text": "Chỉ có con cái" },
          { "value": "C", "text": "Mỗi thành viên trong gia đình" },
          { "value": "D", "text": "Ông bà" }
        ],
        "correctAnswer": "C",
        "explanation": "Trong gia đình, mỗi thành viên đều có vai trò giáo dục và chịu sự giáo dục từ các thành viên khác. Cha mẹ giáo dục con cái, nhưng cũng học hỏi từ con cái. Anh chị em giáo dục lẫn nhau."
      },
      {
        "id": "q7_18",
        "text": "Nội dung giáo dục gia đình hiện nay có xu hướng thay đổi như thế nào?",
        "options": [
          { "value": "A", "text": "Chỉ tập trung giáo dục đạo đức truyền thống" },
          { "value": "B", "text": "Hướng đến giáo dục kiến thức khoa học hiện đại, kỹ năng hòa nhập" },
          { "value": "C", "text": "Xem nhẹ việc giáo dục" },
          { "value": "D", "text": "Phó mặc hoàn toàn cho nhà trường" }
        ],
        "correctAnswer": "B",
        "explanation": "Nội dung giáo dục gia đình hiện nay không chỉ là giáo dục đạo đức, ứng xử mà còn hướng mạnh đến việc trang bị kiến thức khoa học hiện đại, kỹ năng mềm để con cái hòa nhập với thế giới."
      },
      {
        "id": "q7_19",
        "text": "Xóa bỏ chế độ tư hữu về tư liệu sản xuất có tác động gì đến gia đình?",
        "options": [
          { "value": "A", "text": "Làm cho gia đình tan rã" },
          { "value": "B", "text": "Xóa bỏ nguồn gốc thống trị của đàn ông, tạo cơ sở cho bình đẳng giới" },
          { "value": "C", "text": "Làm cho kinh tế gia đình suy yếu" },
          { "value": "D", "text": "Không có tác động gì" }
        ],
        "correctAnswer": "B",
        "explanation": "Theo Ph. Ăngghen, sự thống trị của đàn ông trong gia đình là kết quả của sự thống trị về kinh tế (sở hữu tư nhân). Do đó, xóa bỏ chế độ tư hữu sẽ xóa bỏ nền tảng của sự bất bình đẳng này."
      },
      {
        "id": "q7_20",
        "text": "Sự tồn tại của các gia đình đơn thân, độc thân, kết hôn đồng tính... hiện nay phản ánh điều gì?",
        "options": [
          { "value": "A", "text": "Sự suy đồi đạo đức" },
          { "value": "B", "text": "Sự biến đổi đa dạng của các hình thái gia đình trong xã hội hiện đại" },
          { "value": "C", "text": "Sự thất bại của chính sách gia đình" },
          { "value": "D", "text": "Sự tác động tiêu cực của văn hóa ngoại lai" }
        ],
        "correctAnswer": "B",
        "explanation": "Đây là biểu hiện của sự biến đổi sâu sắc và đa dạng hóa các hình thái gia đình trong bối cảnh xã hội hiện đại, đặt ra những vấn đề mới cần nghiên cứu và có chính sách phù hợp."
      }
    ]
  }
];

const structuredQuizzesAll: Quiz[] = [
  {
    id: 99,
    chapterId: 99,
    title: "Bài Kiểm Tra Tổng Hợp Toàn Diện",
    questions: [
      {
        id: "q_1716027001",
        text: "Các quan hệ gia đình biến đổi, phát triển phụ thuộc vào điều gì?",
        options: [
          { value: "A", text: "Trình độ phát triển kinh tế và thể chế chính trị - xã hội" },
          { value: "B", text: "Số lượng thành viên trong gia đình" },
          { value: "C", text: "Điều kiện kinh tế của từng cá nhân trong gia đình" },
          { value: "D", text: "Các yếu tố đạo đức của một xã hội" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027002",
        text: "Theo nghĩa hẹp, chủ nghĩa xã hội khoa học được hiểu là gì?",
        options: [
          { value: "A", text: "Là một trong ba bộ phận hợp thành chủ nghĩa Mác - Lênin" },
          { value: "B", text: "Là những thành tựu của con người đạt được trong quá trình đấu tranh giai cấp" },
          { value: "C", text: "Là sự chuyển biến tất yếu của xã hội loài người từ chủ nghĩa tư bản lên một xã hội tốt đẹp hơn" },
          { value: "D", text: "Là một hình thái kinh tế - xã hội" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027003",
        text: "Theo C.Mác và Ph.Ángghen, hình thái kinh tế - xã hội cộng sản chủ nghĩa phát triển như thế nào?",
        options: [
          { value: "A", text: "Phát triên theo hình xoáy ốc" },
          { value: "B", text: "Phát triển ý muốn chủ quan của con người" },
          { value: "C", text: "Phát triển theo sở thích của một đấng siêu nhiên nào đó trong vũ trụ" },
          { value: "D", text: "Phát triển từ thấp lên cao" },
        ],
        correctAnswer: "D",
      },
      {
        id: "q_1716027004",
        text: "Thực chất của thời kỳ quá độ lên chủ nghĩa xã hội là gì?",
        options: [
          { value: "A", text: "Là thời kỳ cải biến cách mạng từ xã hội tiền tư bản và tư bản chủ nghĩa sang xã hội xã hội chủ nghĩa" },
          { value: "B", text: "Là thời kỳ cải biến cách mạng từ xã hội cộng sản nguyên thủy lên xã hội xã hội chủ nghĩa" },
          { value: "C", text: "Là thời kỳ cải biến cách mạng từ xã hội chiếm hữu nô lệ lên xã hội xã hội chủ nghĩa" },
          { value: "D", text: "Là thời kỳ cải biến cách mạng từ xã hội xã hội chủ nghĩa lên xã hội cộng sản chủ nghĩa" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027005",
        text: '"Từ khi bộ Tư bản ra đời - quan niệm duy vật lịch sử không còn là một giả thuyết nữa, mà là một nguyên lý đã được chứng minh một cách khoa học" Nhận định trên là của ai?',
        options: [
          { value: "A", text: "V.I.Lênin" },
          { value: "B", text: "C.Mác" },
          { value: "C", text: "Ph. Ăngghen" },
          { value: "D", text: "S.Phurie" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027006",
        text: "Tại sao nói nhà nước xã hội chủ nghĩa là nhà nước kiểu mới?",
        options: [
          { value: "A", text: "Vì nó xuất hiện trẻ nhất trong các kiểu nhà nước" },
          { value: "B", text: "Vì bản chất của nó đối lập với các kiểu nhà nước bóc lột từng có trong lịch sử" },
          { value: "C", text: "Vì do không tuân theo các quy tắc tố chức nhà nước cổ điển" },
          { value: "D", text: "Vì nó thực hiện dân chủ cho thiếu số nhân dân lao động" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027007",
        text: "Đặc điểm cơ bản của thời kì quá độ lên chủ nghĩa xã hội là gì? chọn 2",
        options: [
          { value: "A", text: "Thời kì cải tạo cách mạng sâu sắc, triệt để xã hội tư bản chủ nghĩa trên mọi lĩnh vực" },
          { value: "B", text: "Thời kì xây dựng từng bước cơ sở vật chất - kỹ thuật và đời sống tinh thần của chủ nghĩa xã hội" },
          { value: "C", text: "Thời kì đấu tranh giai cấp khi tương quan lực lượng cân bằng" },
          { value: "D", text: "Thời kì thực hiện nền chuyên chính lao động" },
        ],
        correctAnswer: "AB",
      },
      {
        id: "q_1716027008",
        text: "Đâu là một trong năm đặc trưng cơ bản của chủ nghĩa xã hội ở Việt Nam được đề cập trong Văn kiện Đại hội đại biểu toàn quốc lần thứ XI của Đảng Cộng sản Việt Nam?",
        options: [
          { value: "A", text: "Dân giàu, nước mạnh, dân chủ, văn minh" },
          { value: "B", text: "Dân giàu, nước mạnh, con người có cuộc sống ấm no" },
          { value: "C", text: "Do nhân dân làm chủ" },
          { value: "D", text: "Nhà nước pháp quyền xã hội chủ nghĩa, nhà nước của nhân dân lao động" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027009",
        text: "Đại hội XI, trong Cương lĩnh xây dựng đất nước trong thời quá độ lên chủ nghĩa xã hội (Bổ sung và phát triển năm 2011) xác định bao nhiêu phương hướng phản ánh con đường đi lên chủ nghĩa xã hội ở nước ta?",
        options: [
          { value: "A", text: "5" },
          { value: "B", text: "6" },
          { value: "C", text: "7" },
          { value: "D", text: "8" },
        ],
        correctAnswer: "D",
      },
      {
        id: "q_1716027010",
        text: "Đại hội XIII của Đảng Cộng sản Việt Nam đã đề ra mục tiêu gì vào năm 2045 trên con đường xây dựng chủ nghĩa xã hội?",
        options: [
          { value: "A", text: "Trở thành nước phát triển, có kinh tế tri thức, thu nhập trung bình cao" },
          { value: "B", text: "Trở thành con rồng Châu Á" },
          { value: "C", text: "Trở thành nước phát triển, thu nhập cao" },
          { value: "D", text: "Trở thành nước đang phát triển, có thu nhập trung bình cao" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027011",
        text: 'Vấn đề sau đây do ai khẳng định: "Trong mọi thời đại lịch sử, sản xuất kinh tế và cơ cấu xã hội - cơ cấu này tất yếu phải do sản xuất kinh tế mà ra, - cả hai cái đó cấu thành cơ sở của lịch sử chính trị và lịch sử tư tưởng của thời đại ấy...?',
        options: [
          { value: "A", text: "Chủ tịch Hồ Chí Minh" },
          { value: "B", text: "V.I.Lênin" },
          { value: "C", text: "C.Mác" },
          { value: "D", text: "Ph Ăngghen" },
        ],
        correctAnswer: "D",
      },
      {
        id: "q_1716027012",
        text: "Quan hệ dân tộc và tôn giáo Việt Nam chịu sự chi phối mạnh mẽ bởi vấn đề gì?",
        options: [
          { value: "A", text: "Mê tín dị đoan" },
          { value: "B", text: "Văn hóa tín ngưỡng" },
          { value: "C", text: "Tín ngưỡng truyền thống" },
          { value: "D", text: "Giáo dục truyền thống" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027013",
        text: "Nguyên tắc phân phối chủ yếu của chủ nghĩa xã hội là gì?",
        options: [
          { value: "A", text: "Làm theo năng lực, hưởng theo nhu cầu" },
          { value: "B", text: "Làm theo năng lực, hưởng theo lao động" },
          { value: "C", text: "Làm theo năng lực, hưởng theo phúc lợi xã hội" },
          { value: "D", text: "Làm theo công việc, hưởng theo tiền lương" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027014",
        text: "Theo nghĩa hẹp, các tiêu chí xác định các đặc trưng cơ bản của một dân tộc - tộc người là gì? Chọn các đáp án đúng.",
        options: [
          { value: "A", text: "Cộng đồng về ngôn ngữ" },
          { value: "B", text: "Cộng đồng về văn hóa" },
          { value: "C", text: "Ý thức tự giác tộc người" },
          { value: "D", text: "Cộng đồng về lãnh thổ" },
        ],
        correctAnswer: "ABC",
      },
      {
        id: "q_1716027015",
        text: "Giai cấp nào được xem là con đẻ của nền đại công nghiệp tư bản chủ nghĩa?",
        options: [
          { value: "A", text: "Tư sản" },
          { value: "B", text: "Nông dân" },
          { value: "C", text: "Công nhân" },
          { value: "D", text: "Bị bóc lột" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027016",
        text: "Theo quan điểm của chủ nghĩa Mác - Lênin, về bản chất, tôn giáo do ai sáng tạo ra?",
        options: [
          { value: "A", text: "Chúa trời" },
          { value: "B", text: "Đức Phật" },
          { value: "C", text: "Các thế lực siêu nhiên" },
          { value: "D", text: "Con người" },
        ],
        correctAnswer: "D",
      },
      {
        id: "q_1716027017",
        text: "Đâu là một trong những nội dung của mối quan hệ lớn trong xây dựng chủ nghĩa xã hội ở Việt Nam hiện nay?",
        options: [
          { value: "A", text: "Giữa tăng trưởng kinh tế, thực hiện tiến bộ, công bằng xã hội, bảo vệ môi trường sống" },
          { value: "B", text: "Giữa tăng trưởng kinh tế và phát triển văn hóa, thực hiện tiến bộ, bảo vệ môi trường, y tế, giáo dục" },
          { value: "C", text: "Giữa tăng trưởng kinh tế và phát triển văn hóa, thực hiện tiến bộ, công bằng xã hội, bảo vệ môi trường" },
          { value: "D", text: "Giữa tăng trưởng kinh tế và phát triển văn hóa, thực hiện tiến bộ, công bằng xã hội" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027018",
        text: "Theo chủ nghĩa Mác - Lênin, để thực hiện được sứ mệnh lịch sử của mình, giai cấp công nhân phải thiết lập được sự liên minh với giai cấp, tầng lớp nào?",
        options: [
          { value: "A", text: "Liên minh với giai cấp nông dân và tầng lớp tiểu tư sản" },
          { value: "B", text: "Liên minh với giai cấp nông dân và các tầng lớp lao động khác" },
          { value: "C", text: "Liên minh với một bộ phận giai cấp tư sản tiến bộ" },
          { value: "D", text: "Liên minh với giai cấp nông dân" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027019",
        text: 'Thuật ngữ "dân chủ" được ra đời khi nào?',
        options: [
          { value: "A", text: "Thế kỷ VI - VII" },
          { value: "B", text: "Thế kỷ VII - VI trước Công nguyên" },
          { value: "C", text: "Thế kỷ V - IV trước Công nguyên" },
          { value: "D", text: "Thế kỷ XXI" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027020",
        text: "Chế độ dân chủ nhân dân ở nước ta được xác lập khi nào?",
        options: [
          { value: "A", text: "Từ khi cách mạng tháng Tám năm 1945 thành công" },
          { value: "B", text: "Từ sau chiến thắng Điện Biên Phủ 1954" },
          { value: "C", text: "Ngay sau khi thống nhất đất nước vào năm 1975" },
          { value: "D", text: "Từ khi tiến hành đổi mới vào năm 1986" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027021",
        text: "Nền sản xuất đại công nghiệp và phương thức sản xuất tiên tiến đã rèn luyện giai cấp công nhân có những phẩm chất gì đặc biệt hơn các giai cấp khác?",
        options: [
          { value: "A", text: "Tính tổ chức, kỷ luật lao động, tinh thần hợp tác cao" },
          { value: "B", text: "Tinh thần yêu thương, đùm bọc lẫn nhau" },
          { value: "C", text: "Sự khổ luyện, kiên trì lao động vì tiền lương" },
          { value: "D", text: "Phẩm chất cần củ, siêng năng và chịu khó" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027022",
        text: "Xét trên phương diện kinh tế - xã hội, giai cấp nào là những người lao động trực tiếp hoặc gián tiếp vận hành các công cụ sản xuất cho tính chất công nghiệp ngày càng hiện đại và xã hội hóa cao?",
        options: [
          { value: "A", text: "Tư sản" },
          { value: "B", text: "Công nhân" },
          { value: "C", text: "Nông dân" },
          { value: "D", text: "Địa chỉ" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027023",
        text: "Sự kiện gì được xem là cuộc cách mạng vô sản đầu tiên trên thế giới xóa bỏ được giai cấp tư sản và thiết lập chính quyền của giai cấp vô sản?",
        options: [
          { value: "A", text: "Công xã Pari" },
          { value: "B", text: "Phong trào Hiến chương Anh" },
          { value: "C", text: "Cách mạng tháng Mười Nga" },
          { value: "D", text: "Sự ra đời của Quốc tế l" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027024",
        text: "Nguyên nhân nào làm xuất hiện các tầng lớp xã hội mới?",
        options: [
          { value: "A", text: "Cơ cấu xã hội biến đổi phức tạp, đa dạng" },
          { value: "B", text: "Cơ cấu giai cấp biến đổi phức tạp, đa dạng" },
          { value: "C", text: "Cơ cấu xã hội - giai cấp thiếu tính đồng bộ" },
          { value: "D", text: "Cơ cấu xã hội - giai cấp biến đổi phức tạp, đa dạng" },
        ],
        correctAnswer: "D",
      },
      {
        id: "q_1716027025",
        text: 'C.Mác và Ph.Ăngghen từng cho rằng: "Quan hệ thứ ba tham dự ngay từ đầu vào quá trình phát triển lịch sử: hằng ngày tái tạo ra đời sống của bản thân mình, con người bắt đầu tạo ra những người khác, sinh sôi nẩy nở" Cụm từ "quan hệ thứ ba" trong câu trên dùng để chi cái gì?',
        options: [
          { value: "A", text: "Phát triển" },
          { value: "B", text: "Sinh nở" },
          { value: "C", text: "Bạn bè" },
          { value: "D", text: "Gia đình" },
        ],
        correctAnswer: "D",
      },
      {
        id: "q_1716027026",
        text: "Nền dân chủ xã hội chủ nghĩa mang bản chất của giai cấp nào?",
        options: [
          { value: "A", text: "Giai cấp tư sản" },
          { value: "B", text: "Giai cấp nông dân" },
          { value: "C", text: "Giai cấp công nhân" },
          { value: "D", text: "Giai cấp tiểu tư sản" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027027",
        text: "Một trong những đặc trưng cơ bản của dân tộc - tộc người là gì?",
        options: [
          { value: "A", text: "Cộng đồng vẽ giáo dục" },
          { value: "B", text: "Cộng đồng về y tế" },
          { value: "C", text: "Cộng đồng về ngôn ngữ" },
          { value: "D", text: "Cộng đồng lao động" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027028",
        text: '"Do lực lượng sản xuất chưa phát triển, con người cảm thấy yếu đuối, bất lực, không giải thích được, nên con người đã bán cho tự nhiên một sức mạnh, quyền lực thần bí, vấn đề này nói lên nguồn gốc nào của tôn giáo?',
        options: [
          { value: "A", text: "Nguồn gốc tâm lý" },
          { value: "B", text: "Nguồn gốc nhận thức" },
          { value: "C", text: "Nguồn gốc tự nhiên, kinh tế - xã hội" },
          { value: "D", text: "Nguồn gốc ý chí" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027029",
        text: 'Các thế lực thù địch sử dụng chiến lược "diễn biến hòa bình" chống phá sự nghiệp xây dựng Tổ quốc xã hội chủ nghĩa của nhân dân ta trên phương diện trọng yếu nào?',
        options: [
          { value: "A", text: "Ngoại giao" },
          { value: "B", text: "Chính trị, tư tưởng" },
          { value: "C", text: "Đạo đức, lối sống" },
          { value: "D", text: "Quân sự, chạy đua vũ trang" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027030",
        text: "Chủ nghĩa xã hội khoa học ra đời dựa trên mấy tiên đề?",
        options: [
          { value: "A", text: "2" },
          { value: "B", text: "3" },
          { value: "C", text: "4" },
          { value: "D", text: "5" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027031",
        text: "Xây dựng gia đình Việt Nam hiện nay là xây dựng mô hình gia đình như thế nào?",
        options: [
          { value: "A", text: "Hiện đại, phù hợp với tiến trình công nghiệp hóa, hiện đại hóa đất nước và hội nhập kinh tế quốc tế" },
          { value: "B", text: "Phù hợp với tiến trình công nghiệp hóa, hiện đại hóa đất nước và hội nhập kinh tế quốc tế" },
          { value: "C", text: "Hiện đại với tiến trình công nghiệp hóa, hiện đại hóa đất nước và hội nhập kinh tế quốc tế" },
          { value: "D", text: "Hiện đại, phù hợp với tiến trình công nghiệp hóa đất nước và hội nhập kinh tế quốc tế" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027032",
        text: "Nền dân chủ xã hội chủ nghĩa đầu tiên chính thức được xác lập khi nào?",
        options: [
          { value: "A", text: "Cách mạng tháng 8 năm 1945 thành công" },
          { value: "B", text: "Bản tuyên ngôn nhân quyền và dân quyền của Pháp (1789)" },
          { value: "C", text: "Tuyên ngôn độc lập của Mỹ (1776)" },
          { value: "D", text: "Cách mạng Tháng Mười Nga thành công với sự ra đời của nhà nước xã hội chủ nghĩa đầu tiên trên thế giới (1917)" },
        ],
        correctAnswer: "D",
      },
      {
        id: "q_1716027033",
        text: "Phương thức căn bản và quan trọng để thực hiện và tăng cường liên minh công - nông - trí thức ở Việt Nam hiện này là gì?",
        options: [
          { value: "A", text: "Đẩy mạnh công nghiệp hóa, hiện đại hóa; xây dựng nông thôn mới; phát triển kinh tế tri thức, nâng cao trình độ khoa học, công nghệ trong các ngành, lĩnh vực" },
          { value: "B", text: "Đẩy mạnh nghiên cứu, sáng tạo các giải pháp mới nhằm thu hẹp nông thôn, mỡ rộng công nghiệp, chuyển đổi nhanh chóng cơ cấu kinh tế theo hướng dịch vụ và công nghiệp" },
          { value: "C", text: "Từng bước xác lập vị trí chủ đạo của nền kinh tế tri thức và vai trò quan trọng bậc nhất của đội ngũ trí thức" },
          { value: "D", text: "Từng bước xác lập vị trí then chốt của kinh tế thị trường và vai trò quan trọng bậc nhất của đội ngũ doanh nhân" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027034",
        text: "Dựa trên phương diện kinh tế - xã hội, giai cấp công nhân được hiểu như thế nào?",
        options: [
          { value: "A", text: "Sản phẩm của nền sản xuất đại công nghiệp" },
          { value: "B", text: "Chủ thể của nền sản xuất đại công nghiệp" },
          { value: "C", text: "Là người mua sức lao động và đi bóc lột giá trị thặng dư" },
          { value: "D", text: "Chủ thể và sản phẩm của nền sản xuất đại công nghiệp" },
        ],
        correctAnswer: "D",
      },
      {
        id: "q_1716027035",
        text: "Phát kiến học thuyết giá trị thặng dư của C.Mác và Ph. Ăngghen có ý nghĩa gì đối với chủ nghĩa xã hội khoa học?",
        options: [
          { value: "A", text: "Chỉ ra sự suy vong tự nhiên của chủ nghĩa tư bản" },
          { value: "B", text: "Chỉ ra con đường đấu tranh giai cấp tiến lên chủ nghĩa xã hội" },
          { value: "C", text: "Khẳng định về phương diện kinh tế sự diệt vong không thể tránh khỏi của chủ nghĩa tư bản và sự ra đời ta yếu của chủ nghĩa xã hội" },
          { value: "D", text: "Khẳng định sự thiết lập nên chuyên chính vô sản bằng cách mạng xã hội là con đường duy nhất tiến đến chủ nghĩa xã hội" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027036",
        text: "Căn cứ vào tính chất của quyền lực nhà nước, chức năng nào của nhà nước xã hội chủ nghĩa là quan trọng nhất, mang ý nghĩa then chốt, quyết định?",
        options: [
          { value: "A", text: "Chức năng giai cấp (trấn áp)" },
          { value: "B", text: "Chức năng đối nội" },
          { value: "C", text: "Chức năng đối ngoại" },
          { value: "D", text: "Chức năng xã hội (tổ chức và xây dựng)" },
        ],
        correctAnswer: "D",
      },
      {
        id: "q_1716027037",
        text: "Trong cơ cấu xã hội - giai cấp ổ Việt Nam hiện nay, giai cấp, tăng lớp nào là lực lượng sản tạo đặc biệt quan trọng trong tiến trình đẩy mạnh công nghiệp hóa, hiện đại hóa, xây dựng nền kinh tế tri thức?",
        options: [
          { value: "A", text: "Giai cấp công nhân" },
          { value: "B", text: "Giai cấp nông dân" },
          { value: "C", text: "Tầng lớp trí thức" },
          { value: "D", text: "Tầng lớp doanh nhân" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027038",
        text: "Hình thức gia đình nào hình thành sớm nhất trong lịch sử?",
        options: [
          { value: "A", text: "Gia đình một vợ một chồng" },
          { value: "B", text: "Gia đình phụ hệ" },
          { value: "C", text: "Đại gia đình phụ hệ" },
          { value: "D", text: "Gia đình mẫu hệ" },
        ],
        correctAnswer: "D",
      },
      {
        id: "q_1716027039",
        text: "Kháng các có cấu xã hội, cơ cấu xã hội nào có vị trí quan trọng hàng đầu, chi phối các loại hình cơ cấu xã hội",
        options: [
          { value: "A", text: "Cơ cấu xã hội - dân tộc" },
          { value: "B", text: "Cơ cấu xã hội dân cư" },
          { value: "C", text: "Cơ cấu xã hội - nghề nghiệp" },
          { value: "D", text: "Cơ cấu xã hội - giai cấp" },
        ],
        correctAnswer: "D",
      },
      {
        id: "q_1716027040",
        text: "Đâu là các đại biểu của chủ nghĩa xã hội không tưởng phê phán Pháp? Lựa chọn các đáp án đúng.",
        options: [
          { value: "A", text: "Xanh Ximông" },
          { value: "B", text: "S. Furie" },
          { value: "C", text: "R.Oen" },
          { value: "D", text: "Ph.Hêghen" },
        ],
        correctAnswer: "ABC",
      },
      {
        id: "q_1716027041",
        text: "Về mặt lý thuyết, con đường cách mạng vô sản nào có thể tiến hành, nhưng vô cùng hiếm, quý và chưa từng xảy ra trên thực tế?",
        options: [
          { value: "A", text: "Con đường bạo lực cách mạng" },
          { value: "B", text: "Con đường hòa bình" },
          { value: "C", text: "Con đường khởi nghĩa vũ trang" },
          { value: "D", text: "Con đường bạo động lật đổ" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027042",
        text: "Theo V.I.Lênin: Giai cấp công nhân nếu không liên minh với giai cấp nào thì không thể có được chính quyền của giai cấp vô sản?",
        options: [
          { value: "A", text: "Nông dân" },
          { value: "B", text: "Bóc lột" },
          { value: "C", text: "Tư sản" },
          { value: "D", text: "Địa chủ" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027043",
        text: "Nội dung cơ bản và trực tiếp để xây dựng gia đình ở Việt Nam hiện nay là gì?",
        options: [
          { value: "A", text: "Nâng cao trình độ dân trí cho nhân dân lao động" },
          { value: "B", text: "Xây dựng gia đình no ấm, bình đẳng, tiến bộ và hạnh phúc" },
          { value: "C", text: "Phát triển kinh tế - xã hội" },
          { value: "D", text: "Giải phóng người phụ nữ" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027044",
        text: 'Vấn đề: "Tập hợp đồng bào theo tín ngưỡng, tôn giáo và đồng bào không theo tín ngưỡng, tôn giáo xây dựng khối đại đoàn kết toàn dân tộc, xây dựng và bảo vệ Tổ quốc" được đề cập trong Luật nào?',
        options: [
          { value: "A", text: "Luật giáo dục" },
          { value: "B", text: "Luật phòng, chống bạo lực gia đình" },
          { value: "C", text: "Luật tín ngưỡng, tôn giáo" },
          { value: "D", text: "Luật mê tín, tôn giáo" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027045",
        text: "Trong quá trình xây dựng chủ nghĩa xã hội, liên minh giữa giai cấp công nhân, giai cấp nông dân và tầng lớp trí thức dưới góc độ nào giữ vai trò quyết định?",
        options: [
          { value: "A", text: "Chính trị" },
          { value: "B", text: "Kinh tế" },
          { value: "C", text: "Văn hóa" },
          { value: "D", text: "Tư tưởng" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027046",
        text: "Chức năng nào được coi là chức năng cơ bản và riêng có của gia đình?",
        options: [
          { value: "A", text: "Tổ chức đời sống gia đình" },
          { value: "B", text: "Tái sản xuất ra con người" },
          { value: "C", text: "Giáo dục gia đình" },
          { value: "D", text: "Thỏa mãn tâm sinh lý" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027047",
        text: "...nếu nghĩa vụ của vợ chồng là phải thương yêu nhau thì nghĩa vụ của những kẻ yêu nhau há chẳng phải là kết hôn với nhau và không được kết hôn với người khác hay sao?\nNhận định trên là của ai?",
        options: [
          { value: "A", text: "Ph. Ăngghen" },
          { value: "B", text: "V.I.Lênin" },
          { value: "C", text: "Chủ tịch Hồ Chí Minh" },
          { value: "D", text: "C.Mác" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027048",
        text: "Trong thời kì quá độ lên chủ nghĩa xã hội, bên cạnh sự liên minh chặt chẽ trên cơ sở thống nhất lợi ích kinh tế giữa giai cấp công nhân, nông dân và trí thức, còn xuất hiện vấn đề gì?",
        options: [
          { value: "A", text: "Xuất hiện những mâu thuẫn lợi ích ở những mức độ khác nhau" },
          { value: "B", text: "Xuất hiện sự đấu tranh kịch liệt trong hệ thống chuyên chính vô sản" },
          { value: "C", text: "Xuất hiện sự chống phá của các giai cấp trong liên minh" },
          { value: "D", text: "Xuất hiện sự chuyên quyền, độc đoán của một bộ phận" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027049",
        text: "Tôn trọng tự do tín ngưỡng cũng chính là tôn trọng vấn đề gì?",
        options: [
          { value: "A", text: "Tôn trọng xã hội" },
          { value: "B", text: "Tôn trọng pháp luật" },
          { value: "C", text: "Tôn trọng quyền con người" },
          { value: "D", text: "Tôn trọng tôn giáo" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027050",
        text: "Nội dung văn hóa - xã hội trong liên minh giai cấp, tầng lớp ở nước ta hiện nay đòi hỏi phải đảm bảo điều gì?",
        options: [
          { value: "A", text: "Gắn tăng trưởng kinh tế với phát triển văn hóa, phát triển con người và thực hiện tiến bộ, công bằng xã hội" },
          { value: "B", text: "Gắn tăng trưởng kinh tế với độc lập, tự do, phát huy nguồn lực lãnh đạo của kinh tế tư nhân" },
          { value: "C", text: "Thực hiện tăng trưởng kinh tế bằng mọi giá, tiến nhanh đến nền kinh tế thị trường hiện đại" },
          { value: "D", text: "Tiếp thu toàn bộ các yếu tố văn hóa nhân loại trong tiến trình hội nhập và tăng trưởng kinh tế" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027051",
        text: "Trong hệ thống chính sách xã hội, các chính sách liên quan đến vấn đề gì được đặt lên vị trí hàng đầu?",
        options: [
          { value: "A", text: "Tôn giáo, y tế" },
          { value: "B", text: "Giáo dục, y tế" },
          { value: "C", text: "Cơ cấu xã hội - giai cấp" },
          { value: "D", text: "Cơ cấu giai cấp, giáo dục" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027052",
        text: "Sứ mệnh của nhà nước xã hội chủ nghĩa là gì?",
        options: [
          { value: "A", text: "Xây dựng thành công chủ nghĩa cộng sản, đưa tất cả các giai cấp, tầng lớp lên địa vị làm chỉ trên tất cả các mặt của đời sống xã hội trong một xã hội phát triển cao - xã hội cộng sản chủ nghĩa" },
          { value: "B", text: "Xây dựng thành công chủ nghĩa xã hội, đưa giai cấp công nhân lên địa vị thống trị trên tất cả các mặt của đời sống xã hội trong một xã hội phát triển cao - xã hội xã hội chủ nghĩa" },
          { value: "C", text: "Xây dựng thành công chủ nghĩa xã hội, đưa nhân dân lao động lên địa vị làm chỉ trên tất cả các mặt của đời sống xã hội trong một xã hội phát triển cao - xã hội xã hội chủ nghĩa" },
          { value: "D", text: "Xây dựng thành công xã hội chủ nghĩa, đưa tất cả các giai cấp, tầng lớp lên địa vị làm chỉ trên tất cả các mặt của đời sống xã hội trong một xã hội phát triển cao - xã hội xã hội chủ nghĩa" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027053",
        text: 'Một bộ phận giai cấp công nhân đã tham gia vào sở hữu một lượng tư liệu sản xuất của xã hội thông qua chế độ cổ phần là một biểu hiện của xu hướng nào của giai cấp công nhân trong thời đại hiện nay?',
        options: [
          { value: "A", text: 'Xu hướng "trí tuệ hóa"' },
          { value: "B", text: 'Xu hướng "trung lưu hóa"' },
          { value: "C", text: "Xu hướng thỏa hiệp" },
          { value: "D", text: "Xu hướng cải cách" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027054",
        text: "Quy mô gia đình ở Việt Nam hiện nay tồn tại theo xu hướng nào?",
        options: [
          { value: "A", text: "Thu nhỏ số lượng thành viên trong gia đình" },
          { value: "B", text: "Mở rộng số lượng thành viên trong gia đình" },
          { value: "C", text: "Liên kết các gia đình đơn" },
          { value: "D", text: "Quy mô nhỏ ở nông thôn và quy mô lớn ở thành thị" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027055",
        text: "Đúng hay sai khi cho rằng dân chủ ở nước ta là mọi công dân đều có quyền tự do tuyệt đối trong tất cả các mặt của đời sống xã hội mà không cần phải tuân theo bất kì điều gì?",
        options: [
          { value: "A", text: "Đúng, dân chủ thật sự phải thực hiện được mọi nguyện vọng của bất kì người dân nào" },
          { value: "B", text: "Không, đó là hệ giá trị dân chủ rộng rãi nhất mà nhân loại hướng tới, nhưng hiện tại ở nước ta chưa đạt tới trình độ đó" },
          { value: "C", text: "Không đúng, dân chủ phải trong khuôn khổ của kỷ cương, pháp luật" },
          { value: "D", text: "Không đúng, vì cần tuân theo nguyên tắc quản lý của giai cấp công nhân" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027056",
        text: "Đâu không phải là một trong những điều kiện kinh tế - xã hội cho sự ra đời của chủ nghĩa xã hội khoa học?",
        options: [
          { value: "A", text: "Các thành tựu khoa học tự nhiên của nhân loại thế kỉ XIX" },
          { value: "B", text: "Sự xuất hiện của nền đại công nghiệp" },
          { value: "C", text: "Sự ra đời của hai giai cấp: giai cấp tư sản và giai cấp vô sản" },
          { value: "D", text: "Phong trào đấu tranh của giai cấp vô sản chống lại sự thống trị áp bức của giai cấp tư sản" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027057",
        text: "Trong giai đoạn hiện nay, lực lượng nào đi đầu trong sự nghiệp đẩy mạnh công nghiệp hóa, hiện đại hóa, gắn với phát triển kinh tế tri thức, bảo vệ tài nguyên và môi trường?",
        options: [
          { value: "A", text: "Giai cấp nông dân" },
          { value: "B", text: "Giai cấp công nhân" },
          { value: "C", text: "Công nhân trí thức" },
          { value: "D", text: "Tiểu tư sản" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027058",
        text: "Nếu thiếu đi cơ sở văn hóa, hoặc cơ sở văn hóa không đi liền với cơ sở kinh tế, chính trị thì việc xây dựng gia đình sẽ bị ảnh hưởng như thế nào?",
        options: [
          { value: "A", text: "Việc xây dựng gia đình sẽ lệch lạc, không đạt hiệu quả" },
          { value: "B", text: "Hệ thống chính sách, pháp luật về xây dựng gia đình sẽ không thể hoàn thiện" },
          { value: "C", text: "Việc xây dựng gia đình không còn dựa trên nền tảng hệ tư tưởng chính trị" },
          { value: "D", text: "Việc xây dựng gia đình sẽ không hướng tới đời sống văn hóa, tinh thần" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027059",
        text: 'Ai đã đưa ra quan niệm "chủ nghĩa xã hội là sự phản kháng và đấu tranh chống sự bóc lột người lao động, một cuộc đấu tranh nhằm hoàn toàn xóa bỏ sự bóc lột"?',
        options: [
          { value: "A", text: "S.Phuriê" },
          { value: "B", text: "V.I.Lênin" },
          { value: "C", text: "Ph.Ănghen" },
          { value: "D", text: "C.Mác" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027060",
        text: "Các chủ trương, chính sách phát triển kinh tế - xã hội miền múi, vùng đồng bào các dân tộc thiểu số ở nước ta nhằm mục đích gì?",
        options: [
          { value: "A", text: "Phát huy tiềm năng phát triển, rút ngắn khoảng cách chênh lệch giữa các vùng, các dân tộc" },
          { value: "B", text: "Bù đắp cho đồng bào ở các nơi này để động viên họ cố gắng giữ gìn bờ cõi quốc gia" },
          { value: "C", text: "Giảm thiểu sự lợi dụng điều kiện sống cực khổ của các nơi này để kích động thực hiện mưu đồ chia rẽ" },
          { value: "D", text: "Tận dụng mọi nguồn lực để tăng trưởng kinh tế khi ở các vùng đồng bằng đã cạn kiệt" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027061",
        text: "Về phương diện thế giới quan, đa số các tôn giáo mang thế giới quan nào?",
        options: [
          { value: "A", text: "Duy tâm" },
          { value: "B", text: "Duy vật" },
          { value: "C", text: "Duy vật biện chứng" },
          { value: "D", text: "Duy vật siêu hình" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027062",
        text: "Điền cụm từ thích hợp vào (.).'Các dân tộc hoàn toàn..., các dân tộc được quyền tự quyết, liên hiệp ... tất cả các dân tộc lại.",
        options: [
          { value: "A", text: "Bình đẳng/ công nhân" },
          { value: "B", text: "Hòa bình/ công nhân" },
          { value: "C", text: "Công nhân/ nông dân" },
          { value: "D", text: "Hòa bình/ bình đẳng" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027063",
        text: "Xu hướng phát triển của mối quan hệ dân tộc nào nổi lên trong giai đoạn chủ nghĩa tư bản đã phát triển thành chủ nghĩa đế quốc đi bóc lột thuộc địa?",
        options: [
          { value: "A", text: "Cộng đồng dân cư muốn tách ra để hình thành cộng đồng dân tộc độc lập" },
          { value: "B", text: "Các dân tộc trong từng quốc gia, thậm chí các dân tộc ở nhiều quốc gia muốn liên hiệp lại với nhau" },
          { value: "C", text: "Cộng đồng dân tộc yếu thế có xu hướng xác nhập với các dân tộc có trình độ phát triển cao hơn" },
          { value: "D", text: "Cộng đồng dân tộc phát triển hưng thịnh sẽ có ý định tách ra hình thành quốc gia - dân tộc độc lập" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027064",
        text: "Các dân tộc đều có quyền và nghĩa vụ ngang nhau trên tất cà các lĩnh vực đời sống xã hội, không phân biệt dân tộc lớn hay nhỏ, trình độ phát triển cao hay thấp là quyền gì trong Cương lĩnh dân tộc của V.I.Lênin?",
        options: [
          { value: "A", text: "Quyền dân tộc tự quyết" },
          { value: "B", text: "Quyền hoàn toàn bình đẳng giữa các dân tộc" },
          { value: "C", text: "Quyền sống, quyền tự do và quyền hạnh phúc của các dân tộc" },
          { value: "D", text: "Quyền công bằng xã hội" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027065",
        text: "Tôn giáo nào du nhập Việt Nam mà không chịu ảnh hưởng của bản sắc văn hóa Việt Nam?",
        options: [
          { value: "A", text: "Phật giáo" },
          { value: "B", text: "Công giáo" },
          { value: "C", text: "Hồi giáo" },
          { value: "D", text: "Không có" },
        ],
        correctAnswer: "D",
      },
      {
        id: "q_1716027066",
        text: "Để tăng cường, củng cố khối đại đoàn kết dân tộc ở nước ta hiện nay thì chính sách cụ thể nào của Đảng và Nhà nước ta được coi là vấn đề cực kỳ quan trọng?",
        options: [
          { value: "A", text: "Phát triển kinh tế hàng hóa ở các vùng dân tộc thiểu số" },
          { value: "B", text: "Tôn trọng lợi ích, truyền thống, văn hóa của các dân tộc" },
          { value: "C", text: "Phát huy truyền thống đoàn kết giữa các dân tộc" },
          { value: "D", text: "Tăng cường bồi dưỡng, đào tạo đội ngũ cán bộ là người dân tộc thiểu số" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027067",
        text: "Ưu tiên đầu tư phát triển kinh tế - xã hội ở các vùng dân tộc và miền núi, trước hết, tập trung vào phát triển vận đề gi?",
        options: [
          { value: "A", text: "Giao thông và kết cấu hạ tầng, xóa đói giảm nghèo" },
          { value: "B", text: "Kết cấu hạ tầng kỹ thuật, xóa đói giảm nghèo, y tế, giáo dục" },
          { value: "C", text: "Giao thông và kiến trúc thượng tầng, xóa đói giảm nghèo" },
          { value: "D", text: "Giao thông và kết cấu hạ tầng, y tế, giáo dục" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027068",
        text: "Dựa vào bản chất chính trị thì yếu tố nào được xem là yếu tố quan trọng để đảm bảo quyền lực thực sự thuộc về nhân dân?",
        options: [
          { value: "A", text: "Giai cấp nông dân lãnh đạo" },
          { value: "B", text: "Đảng Cộng sản lãnh đạo" },
          { value: "C", text: "Nhà nước lãnh đạo" },
          { value: "D", text: "Giai cấp tư sản lãnh đạo" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027069",
        text: "Ở nước ta, nhân dân có quyền bầu ra những người đại diện cho mình để thực thi quyền làm chủ, quyền đó gọi là gì?",
        options: [
          { value: "A", text: "Quyền bãi miễn những đại biểu không xứng đáng" },
          { value: "B", text: "Quyền tự mình tham gia trở thành đại biểu không qua bầu cử" },
          { value: "C", text: "Quyền giải tán hệ thống chính trị" },
          { value: "D", text: "Quyền tự do ngôn luận" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027070",
        text: "Dân chủ với tư cách là một hình thức tổ chức thiết chế chính trị hay một hình thái nhà nước. Nhận định nào sau đây là đúng?",
        options: [
          { value: "A", text: "Phạm trù vĩnh viễn, tồn tại trong mọi chế độ xã hội" },
          { value: "B", text: "Phạm trù lịch sử, mất đi khi nhà nước tiêu vong" },
          { value: "C", text: "Phạm trù lịch sử, mất đi khi tiến lên chủ nghĩa xã hội" },
          { value: "D", text: "Phạm trù lịch sử, tồn tại trong các chế độ xã hội ngoài chế độ quân chủ phong kiến" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027071",
        text: "Nhà nước xã hội chủ nghĩa là nhà nước của ai?",
        options: [
          { value: "A", text: "Nhân dân" },
          { value: "B", text: "Công nhân - Nông dân" },
          { value: "C", text: "Công nhân - Nông dân - Trí thức" },
          { value: "D", text: "Lãnh đạo, Đảng viên" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027072",
        text: "Trong các nền dân chủ đã và đang tồn tại trong lịch sử loài người, thì nền dân chủ nào là nền dân chủ phát triển cao nhất về chất?",
        options: [
          { value: "A", text: "Dân chủ chủ nô" },
          { value: "B", text: "Dân chủ tư sản" },
          { value: "C", text: "Dân chủ xã hội chủ nghĩa" },
          { value: "D", text: "Dân chủ cộng sản chủ nghĩa" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027073",
        text: "Các quy chế dân chủ từ cơ sở đến Trung ương và trong các tổ chức chính trị - xã hội ở nước ta đều thực hiện theo phương châm nào?",
        options: [
          { value: "A", text: "Dân biết, dân bàn, dân kiểm tra, dân hưởng thụ" },
          { value: "B", text: "Dân bàn, dân kiểm tra, dân làm, dân hưởng thụ" },
          { value: "C", text: "Dân biết, dân bàn, dân làm, dân kiểm tra" },
          { value: "D", text: "Dân bàn, dân làm, dân kiểm tra" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027074",
        text: "Đảng Cộng sản Việt Nam chủ trương xây dựng chế độ dân chủ xã hội chủ nghĩa, mở rộng và phát huy quyền làm chủ của nhân dân dựa trên tư tưởng của ai?",
        options: [
          { value: "A", text: "V.I.Lênin" },
          { value: "B", text: "Ph.Ăngghen" },
          { value: "C", text: "C.Mác" },
          { value: "D", text: "Chủ tịch Hồ Chí Minh" },
        ],
        correctAnswer: "D",
      },
      {
        id: "q_1716027075",
        text: "Nhà nước xã hội chủ nghĩa ra đời là kết quả của điều gì?",
        options: [
          { value: "A", text: "Cuộc cách mạng do giai cấp vô sản và nhân dân lao động tiến hành dưới sự lãnh đạo của Đảng Cộng sản" },
          { value: "B", text: "Sự chuyển biến tích cực của nhà nước tư sản" },
          { value: "C", text: "Cuộc cách mạng tư sản do giai cấp tư sản và nhân dân lao động tiến hành dưới sự lãnh đạo của Đảng Cộng sản" },
          { value: "D", text: "Cuộc cách mạng vô sản do giai cấp công nhân tiến hành" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027076",
        text: "Quyền tự do kết hôn trên cơ sở tình yêu và quyền tự do ly hôn là hai quyền thực hiện nguyên tắc nào của chế độ hôn nhân tiến bộ?",
        options: [
          { value: "A", text: "Hôn nhân tự nguyện" },
          { value: "B", text: "Hôn nhân một vợ một chồng, vợ chồng bình đẳng" },
          { value: "C", text: "Hôn nhân được đảm bảo về mặt pháp lý" },
          { value: "D", text: "Hôn nhân được đảm bảo về mặt kinh tế" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027077",
        text: "Nơi nào được xem là cộng đồng xã hội đầu tiên mà mỗi cá nhân sinh sống?",
        options: [
          { value: "A", text: "Gia đình" },
          { value: "B", text: "Trường học" },
          { value: "C", text: "Quê hương" },
          { value: "D", text: "Xã hội" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027078",
        text: "Trong xã hội phong kiến, các mối quan hệ của gia đình có đặc điểm như thế nào?",
        options: [
          { value: "A", text: "Tuyệt đối hóa vai trò của người đàn ông, người chồng, người cha" },
          { value: "B", text: "Tuyệt đối hóa vai trò của người phụ nữ, người vợ, người mẹ" },
          { value: "C", text: "Mối quan hệ bình đẳng, sẻ chia" },
          { value: "D", text: "Các mối quan hệ chịu sự chi phối của điều kiện kinh tế gia đình" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027079",
        text: "Trong quá trình xây dựng chủ nghĩa xã hội, chủ trương bảo vệ chế độ hôn nhân một vợ, một chồng nhằm mục đích gì",
        options: [
          { value: "A", text: "Thực hiện bình đẳng trong gia đình, giải phóng phụ nữ" },
          { value: "B", text: "Điều hòa mâu thuẫn trong gia đình" },
          { value: "C", text: "Hạn chế các tệ nạn xã hội như mại dâm, bạo lực gia đình" },
          { value: "D", text: "Đảm bảo hiệu quả cho sự quản lý nhà nước về gia đình" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027080",
        text: "Nguồn gốc gây nên tình trạng thống trị của người đàn ông trong gia đình, sự bất bình đẳng nam, nữ, giữa vợ chồng, sự nô dịch đối với phụ nữ trong gia đình là gì?",
        options: [
          { value: "A", text: "Là chế độ phong kiến" },
          { value: "B", text: "Là chế độ hôn nhân phụ hệ" },
          { value: "C", text: "Là chế độ tư hữu về tư liệu sản xuất" },
          { value: "D", text: "Là các quan niệm đạo đức lỗi thời" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027081",
        text: "Đầu không phải là hôn nhân tiến bộ?",
        options: [
          { value: "A", text: "Hôn nhân tự nguyện" },
          { value: "B", text: "Hôn nhân một vợ, một chồng, vợ chồng bình đẳng" },
          { value: "C", text: "Hôn nhân một vợ, một chồng, chồng nắm quyền" },
          { value: "D", text: "Hôn nhân được đảm bảo vẽ pháp lý" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027082",
        text: "Chức năng nào của gia đình có ảnh hưởng lâu dài và toàn diện đến cuộc đời của mỗi thành viên trong gia đình?",
        options: [
          { value: "A", text: "Chức năng nuôi dưỡng, giáo dục" },
          { value: "B", text: "Chức năng tại sản xuất ra con người" },
          { value: "C", text: "Chức năng kinh tế và tổ chức tiêu dùng" },
          { value: "D", text: "Chức năng thỏa mãn nhu cầu tâm sinh lý, duy trì tình cảm gia đình" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027083",
        text: "Thách thức lớn nhất đặt ra cho các gia đình Việt Nam hiện nay là gì?",
        options: [
          { value: "A", text: "Vấn đề thất nghiệp, mất ổn định về kinh tế" },
          { value: "B", text: "Vấn đề học tập, phát triển của con cái - thế hệ tương lai" },
          { value: "C", text: "Vấn đề mâu thuẫn giữa các thế hệ do sự khác biệt về tuổi tác" },
          { value: "D", text: "Vấn đề kế hoạch hóa gia đình" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027084",
        text: 'Đánh giá sau được trích trong tác phẩm nào: "tác phẩm chủ yếu và cơ bản ấy trình bày chủ nghĩa xã hội khoa học... những yếu tố từ đó nảy sinh ra chế độ tương lai"?',
        options: [
          { value: "A", text: "Chống Đuyring" },
          { value: "B", text: "Đường Kách mệnh" },
          { value: "C", text: "Tuyên ngôn của Đảng Cộng sản" },
          { value: "D", text: "Tư bản" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027085",
        text: "Sau khi chế độ xã hội chủ nghĩa Liên Xô và Đông Âu sụp đổ, chủ nghĩa xã hội khoa học được bổ sung và phát triển như thế nào?",
        options: [
          { value: "A", text: "Được giới trí thức thế giới nghiên cứu như một học thuyết đã lỗi thời" },
          { value: "B", text: "Được các nước xã hội chủ nghĩa bổ sung và phát triển trong tình hình mới, phù hợp với bối cảnh từng nước" },
          { value: "C", text: "Các nước tư bản chủ nghĩa nghiên cứu chủ nghĩa xã hội khoa học như một học thuyết nhằm khắc phục các khuyết tật của thời đại mới" },
          { value: "D", text: "Được dung hòa cùng với các học thuyết tư sản khác" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027086",
        text: 'Tác phẩm "Tuyên ngôn của Đảng Cộng sản" đã đánh dấu sự ra đời của bộ phận lý luận nào của chủ nghĩa Mác - Lênin?',
        options: [
          { value: "A", text: "Chủ nghĩa Mác - Lênin" },
          { value: "B", text: "Kinh tế chính trị Mác - Lênin" },
          { value: "C", text: "Chủ nghĩa xã hội khoa học" },
          { value: "D", text: "Triết học Mác - Lênin" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027087",
        text: "Từ sau khi V.I.Lênin mất đến năm 1953, ai là người có ảnh hưởng trực tiếp trong việc vận dụng và phát triển chủ nghĩa xã hội khoa học?",
        options: [
          { value: "A", text: "J.Xtalin" },
          { value: "B", text: "G.Đi-mi-trốp" },
          { value: "C", text: "S.Phurie" },
          { value: "D", text: "S.Simon" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027088",
        text: '"Sống có việc làm hay là chết trong đấu tranh" là khẩu hiệu của giai cấp công nhân ở đâu?',
        options: [
          { value: "A", text: "Công xã Pari" },
          { value: "B", text: "Vương Quốc Anh" },
          { value: "C", text: "Đức" },
          { value: "D", text: "Nhà máy dệt Lion" },
        ],
        correctAnswer: "D",
      },
      {
        id: "q_1716027089",
        text: "Chủ nghĩa xã hội khoa học có chức năng giác ngộ và hướng dẫn giai cấp công nhân thực hiện sứ mệnh lịch sử của mình trong thời kỳ nào?",
        options: [
          { value: "A", text: "Thời kỳ đấu tranh lật đổ sự thống trị của giai cấp tư sản, giành chính quyền, xây dựng chủ nghĩa xã hội" },
          { value: "B", text: "Thời kỳ đấu tranh lật đổ sự thống trị của giai cấp địa chủ, giành chính quyền, xây dựng chủ nghĩa xã hội" },
          { value: "C", text: "Thời kỳ đấu tranh lật đổ sự thống trị của giai cấp tư sản, giành chính quyền," },
          { value: "D", text: "Thời kỳ đấu tranh lật đổ sự thống trị của giai cấp chủ nô, giành chính quyền, xây dựng chủ nghĩa xã hội" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027090",
        text: "Tác phẩm nào đánh dấu sự ra đời của chủ nghĩa xã hội khoa học?",
        options: [
          { value: "A", text: "Tuyên ngôn của Đảng Cộng sản" },
          { value: "B", text: "Tình cảnh nước Anh" },
          { value: "C", text: "Bộ Tư bản" },
          { value: "D", text: "Góp phần phê phán triết học pháp quyền của Hêghen - Lời nói đầu" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027091",
        text: "Nhằm xây dựng thành công chủ nghĩa xã hội, Đảng và Nhà nước ta đã xác định cơ chế kinh tế trong thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam hiện nay là gì?",
        options: [
          { value: "A", text: "Kinh tế thị trường định hướng xã hội chủ nghĩa" },
          { value: "B", text: "Kinh tế thị trường" },
          { value: "C", text: "Kinh tế xã hội chủ nghĩa" },
          { value: "D", text: "Kinh tế quản lý thị trường xã hội chủ nghĩa" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027092",
        text: "Nội dung văn hóa - xã hội của liên minh giai cấp, tầng lốp là gi?",
        options: [
          { value: "A", text: "Xây dựng nền văn hóa và con người Việt Nam phát triển toàn diện" },
          { value: "B", text: "Xây dựng nền văn hóa và nhà nước của dân, do dân, vì dân" },
          { value: "C", text: "Xây dựng nền văn hóa và xây dựng Đảng trong sạch, vững mạnh" },
          { value: "D", text: "Xây dựng nền văn hóa và tăng cường bản chất giai cấp công nhân" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027093",
        text: "Đâu không phải là một trong những chính sách đối với đội ngũ trí thức nhằm phát huy vai trò của tầng lớp này trong cơ cấu xã hội - giai cấp ở Việt Nam hiện nay?",
        options: [
          { value: "A", text: "Tôn trọng và phát huy tự do tư tưởng trong hoạt động nghiên cứu, sáng tạo" },
          { value: "B", text: "Đảm bảo tư tưởng của giai cấp công nhân giữ vị trí chủ đạo trong hoạt động nghiên cứu, sáng tạo" },
          { value: "C", text: "Trọng dụng trí thức trên cơ sở đánh giá đúng phẩm chất, năng lực và kết quả cống hiến" },
          { value: "D", text: "Bảo vệ quyền sỡ hữu trí tuệ, đãi ngộ và tôn vinh xứng đáng những cống hiến của đội ngũ trí thức" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027094",
        text: "Trong thời kì quá độ lên chủ nghĩa xã hội, các giai cấp, tầng lớp trong cơ cấu xã hội - giai cấp biến đổi trong mối quan hệ như thế nào?",
        options: [
          { value: "A", text: "Đấu tranh với nhau trong bối cảnh mới" },
          { value: "B", text: "Vừa hợp tác vừa đấu tranh và ngày càng xích lại gần nhau" },
          { value: "C", text: "Hợp tác, liên minh toàn diện với nhau" },
          { value: "D", text: "Không còn sự phân chia giai cấp" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027095",
        text: "Cơ cấu xã hội - giai cấp là gì?",
        options: [
          { value: "A", text: "Là hệ thống giai cấp, tầng lớp xã hội tồn tại khách quan trong một chế độ xã hội nhất định, thông qua những mối quan hệ về sở hữu tư liệu sản xuất, về tổ chức, quản lý quá trình sản xuất, về địa vị chính trị xã hội ... giữa các giai cấp, tầng lớp đó" },
          { value: "B", text: "Là hệ thống giai cấp, tầng lớp xã hội tồn tại chủ quan trong một chế độ xã hội nhất định, thông qua những mối quan hệ về sở hữu tư liệu sản xuất, về tổ chức, quản lý quá trình sản xuất, về địa vị chính trị xã hội ... giữa các giai cấp, tầng lớp đó" },
          { value: "C", text: "Là hệ thống giai cấp, tầng lớp xã hội tồn tại khách quan trong một chế độ xã hội nhất định, thông qua những mối quan hệ về phân chia quyền lực nhà nước ... giữa các giai cấp, tầng lớp đó" },
          { value: "D", text: "Là hệ thống giai cấp, tầng lớp xã hội tồn tại chủ quan trong một chế độ xã hội nhất định,..." },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027096",
        text: "Sự biến đổi của cơ cấu xã hội - giai cấp gắn liền và được quy định bởi sự biến động của cơ cấu nào?",
        options: [
          { value: "A", text: "Cơ cấu dân số" },
          { value: "B", text: "Cơ cấu kinh tế" },
          { value: "C", text: "Cơ cấu dân tộc" },
          { value: "D", text: "Cơ cấu dân cư" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027097",
        text: "Trong cơ cấu xã hội - giai cấp ở Việt Nam hiện nay, giai cấp, tầng lớp nào đang đóng góp tích cực vào việc thực hiện chiến lược phát triển kinh tế - xã hội, tạo việc làm cho người lao động?",
        options: [
          { value: "A", text: "Giai cấp công nhân" },
          { value: "B", text: "Giai cấp nông dân" },
          { value: "C", text: "Tầng lớp trí thức" },
          { value: "D", text: "Tầng lớp doanh nhân" },
        ],
        correctAnswer: "D",
      },
      {
        id: "q_1716027098",
        text: "Dân chủ xã hội chủ nghĩa có bản chất kinh tế khác với dân chủ tư sản ở điểm nào? chọn 2 ĐA",
        options: [
          { value: "A", text: "Chế độ công hữu về tư liệu sản xuất chủ yếu" },
          { value: "B", text: "Thực hiện chế độ phân phối lợi ích theo kết quả lao động là chủ yếu" },
          { value: "C", text: "Sự tổ chức quyền lực nhà nước do đảng cộng sản lãnh đạo" },
          { value: "D", text: "Sự đa dạng, phong phú về chế độ sở hữu chủ yếu" },
        ],
        correctAnswer: "AB",
      },
      {
        id: "q_1716027099",
        text: "Vấn đề nào dễ dẫn tới nguy cơ gây mất ổn định chính trị, xã hội, dễ tạo cơ hội cho các thế lực thù địch bên ngoài can thiệp vào công việc nôi bộ của đất nước?",
        options: [
          { value: "A", text: "Vấn đề tôn giáo và dân tộc" },
          { value: "B", text: "Vấn đề mê tín di đoan và thờ cúng ông bà" },
          { value: "C", text: "Vấn đề ngoại giao" },
          { value: "D", text: "Vấn đề chính trị" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027100",
        text: "Mức độ tác động của gia đình đối với xã hội phụ thuộc vào yếu tố nào? Lựa chọn 3 đáp án đúng.",
        options: [
          { value: "A", text: "Vào bản chất của từng chế độ xã hội" },
          { value: "B", text: "Vào đường lối, chủ trương của giai cấp cầm quyền" },
          { value: "C", text: "Vào bản thân mô hình, kết cấu, đặc điểm của mỗi hình thức gia đình trong lịch sử" },
          { value: "D", text: "Vào ý chí, nguyện vọng của các thành viên trong gia đình" },
        ],
        correctAnswer: "ABC",
      },
      {
        id: "q_1716027101",
        text: "Hành vi nào dưới đây được cho là lợi dụng tín ngưỡng, tôn giáo mà Nhà nước Việt Nam nghiêm cấm? Chọn 3 đáp án đúng.",
        options: [
          { value: "A", text: "Hoạt động mê tín dị đoan" },
          { value: "B", text: "Lợi dụng giáo dân và tôn giáo để hoạt động trái pháp luật và chính sách của Nhà nước" },
          { value: "C", text: "Kích động chia rẽ nhân dân, chia rẽ dân tộc, gây rối, xâm phạm an ninh quốc gia" },
          { value: "D", text: "Kêu gọi sự giúp đỡ từ tổ chức tôn giáo quốc tế đối với các tôn giáo du nhập từ bên ngoài" },
        ],
        correctAnswer: "ABC",
      },
      {
        id: "q_1716027102",
        text: '"Quyền lực nhà nước là thống nhất, có sự phân công, phối hợp, kiểm soát giữa các cơ quan nhà nước trong việc thực hiện các quyền lập pháp, hành pháp, tư pháp" được đề cập tại Đại hội lần thứ bao nhiêu của Đảng?',
        options: [
          { value: "A", text: "X" },
          { value: "B", text: "XI" },
          { value: "C", text: "XII" },
          { value: "D", text: "XIII" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027103",
        text: "Trong sứ mệnh lịch sử của giai cấp công nhân trên lĩnh vực văn hóa, tư tưởng, những giá trị mà nhân loại thừa nhận và phấn đấu thực hiện là gì?",
        options: [
          { value: "A", text: "Lao động; sáng tạo; công bằng; dân chủ; bình đẳng và tự do" },
          { value: "B", text: "Tự do; bình đẳng; bác ái" },
          { value: "C", text: "Độc lập; tự do; dân chủ; văn minh" },
          { value: "D", text: "Dân giàu; nước mạnh; công bằng; dân chủ và văn minh" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027104",
        text: "Chủ nghĩa xã hội khoa học sử dụng phương pháp luận nào?",
        options: [
          { value: "A", text: "Chủ nghĩa duy vật biện chứng và chủ nghĩa duy vật lịch sử" },
          { value: "B", text: "Chủ nghĩa duy vật siêu hình và chủ nghĩa duy vật lịch sử" },
          { value: "C", text: "Chủ nghĩa duy vật chất phác và chủ nghĩa duy vật lịch sử" },
          { value: "D", text: "Chủ nghĩa duy tâm biện chứng và chủ nghĩa duy vật lịch sử" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027105",
        text: "Trong thời đại hiện nay, ở các nước phát triển, sự phát triển của giai cấp công nhân có mối quan hệ như thế nào với phát triển kinh tế?",
        options: [
          { value: "A", text: "Tỷ lệ thuận" },
          { value: "B", text: "Tỷ lệ nghịch" },
          { value: "C", text: "Mâu thuẫn đối kháng" },
          { value: "D", text: "Tỷ lệ thất nghiệp gia tăng, làm tăng nguy cơ khủng hoảng" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027106",
        text: "Ngày nay, giai cấp công nhân Việt Nam đã có biến đổi như thế nào so với thời kỳ mới ra đời?",
        options: [
          { value: "A", text: "Tăng nhanh về số lượng và chất lượng" },
          { value: "B", text: "Tăng nhanh về số lượng và quy mô" },
          { value: "C", text: "Tăng nhanh về chất lượng và học thức" },
          { value: "D", text: "Tăng nhanh về quy mô và tài sản" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027107",
        text: "Tại sao nói giai cấp công nhân là giai cấp có tinh thần cách mạng triệt để nhất?",
        options: [
          { value: "A", text: "Vì giai cấp công nhân có lợi ích cơ bản thống nhất với đại đa số nhân dân lao động, có sứ mệnh lịch sử xóa bỏ mọi chế độ bóc lột, bất công" },
          { value: "B", text: "Vì giai cấp công nhân là giai cấp đông đảo nhất trong xã hội" },
          { value: "C", text: "Vì giai cấp công nhân là giai cấp duy nhất bị bóc lột và có mâu thuẫn đối kháng trực tiếp với giai cấp thống trị" },
          { value: "D", text: "Vì giai cấp công nhân được lãnh đạo bởi Đảng Cộng sản" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027108",
        text: 'Trích dẫn: "___ các giai cấp khác đều suy tàn và tiêu vọng cùng với sự phát triển của đại công nghiệp, còn giai cấp vô sản lại là sản phẩm của bản thân nền đại công nghiệp đó" được C.Mác và Ph. Ăngghen đề cập trong tác phẩm nào?',
        options: [
          { value: "A", text: "Tình cảnh công nhân Anh" },
          { value: "B", text: "Bộ Tư bản" },
          { value: "C", text: "Tuyên ngôn của Đảng Cộng sản" },
          { value: "D", text: "Chống Đuyrinh" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027109",
        text: "Trong thời đại hiện nay, hao phí lao động chủ yếu của giai cấp công nhân đã biến đổi như thế nào?",
        options: [
          { value: "A", text: "Giảm bớt hao phí sức lực cơ bắp, gia tăng hao phí về trí lực" },
          { value: "B", text: "Đồng thời gia tăng cả hao phí sức lực và trí lực" },
          { value: "C", text: "Gia tăng yếu tố tâm lực trong quá trình lao động" },
          { value: "D", text: "Giảm bớt hao phí vẽ trí lực, gia tăng hao phí sức lực" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027110",
        text: "Sứ mệnh lịch sử thế giới của giai cấp công nhân là gì?",
        options: [
          { value: "A", text: "Xóa bỏ sự thống trị áp bức của chủ nghĩa tư bản, xây dựng thành công chế độ xã hội mới - xã hội chủ nghĩa và cộng sản chủ nghĩa, tiến tới một xã hội không còn giai cấp" },
          { value: "B", text: "Xóa bỏ sự thống trị áp bức của chế độ phong kiến, xây dựng thành công chế độ xã hội mới - xã hội chủ nghĩa và cộng sản chủ nghĩa, tiến tới một xã hội không còn giai cấp" },
          { value: "C", text: "Xóa bỏ sự thống trị áp bức của chế độ công xã nguyên thủy, xây dựng thành công chế độ xã hội mới - xã hội chủ nghĩa và công sản chủ nghĩa, tiến tới một xã hội không còn giải cấp" },
          { value: "D", text: "Xóa bỏ sự thống trị áp bức của chủ nghĩa tư bản, xây dựng thành công chế độ xã hội mới - phong kiến" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027111",
        text: "Theo chủ nghĩa Mác - Lênin, hình thái kinh tế - xã hội cộng sản chủ nghĩa có khác biệt đặc trưng nào với các hình thái kinh tế - xã hội chiếm hữu nô lệ, phong kiến và tư bản chủ nghĩa?",
        options: [
          { value: "A", text: "Hình thái kinh tế - xã hội cộng sản chủ nghĩa là giai đoạn phát triển cao nhất và cuối cùng của lịch sử loài người" },
          { value: "B", text: "Hình thái kinh tế - xã hội cộng sản chủ nghĩa khác biệt về chất, đó là xã hội không có giai cấp đối kháng như các xã hội trước đó" },
          { value: "C", text: "Hình thái kinh tế - xã hội cộng sản chủ nghĩa là phiên bản điều chỉnh tốt hơn từ tư bản chủ nghĩa" },
          { value: "D", text: "Hình thái kinh tế - xã hội cộng sản chủ nghĩa là quay trở lại cộng sản nguyên thủy" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027112",
        text: "Đại hội XIII của Đảng Cộng sản Việt Nam đã đề ra mục tiêu gì vào năm 2030 trên con đường xây dựng chủ nghĩa xã hội?",
        options: [
          { value: "A", text: "Là nước đang phát triển, có thu nhập trung bình" },
          { value: "B", text: "Là nước đang phát triển, có công nghiệp hiện đại, thu nhập trung bình cao" },
          { value: "C", text: "Là nước phát triển, có thu nhập trung bình cao" },
          { value: "D", text: "Là nước phát triển, có thu nhập cao" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027113",
        text: "Cho đến nay, hình thức quá độ lên xã hội chủ nghĩa nào đã từng diễn ra trên thực tế ở Việt Nam?",
        options: [
          { value: "A", text: "Quá độ gián tiếp" },
          { value: "B", text: "Quá độ trực tiếp" },
          { value: "C", text: "Quá độ bộ phận" },
          { value: "D", text: "Quá độ toàn diện" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027114",
        text: "Quá độ từ chủ nghĩa tư bản phát triển lên chủ nghĩa xã hội là hình thức quá độ nào?",
        options: [
          { value: "A", text: "Quá độ bộ phận" },
          { value: "B", text: "Quá độ trực tiếp" },
          { value: "C", text: "Quá độ gián tiếp" },
          { value: "D", text: "Quá độ toàn diện" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027115",
        text: "Theo C.Mác và Ph.Ãngghen, khi thực hiện cách mạng xã hội chủ nghĩa xóa bỏ được tình trạng người bóc lột người, giai cấp này bóc lột giai cấp khác thì có thể tiến tới xóa bỏ điều gì?",
        options: [
          { value: "A", text: "Xóa bỏ tình trạng dân tộc này bắt một dân tộc khác" },
          { value: "B", text: "Xóa bỏ sự tồn tại của chế độ sở hữu tư nhân về công cụ lao động" },
          { value: "C", text: "Xóa bỏ được tệ nạn xã hội" },
          { value: "D", text: "Xóa bỏ được tôn giáo" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027116",
        text: "Tại Đại hội X, theo quan điểm của Đảng Cộng sản Việt Nam, quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa ở nước ta có vai trò như thế nào?",
        options: [
          { value: "A", text: "Con đường cách mạng chủ quan, con đường xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội ở nước ta" },
          { value: "B", text: "Con đường cách mạng tất yếu khách quan, con đường xây dựng đất nước trong thời kỳ quá độ lên phong kiến ở nước ta" },
          { value: "C", text: "Con đường cách mạng tất yếu khách quan, con đường xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội ở nước ta" },
          { value: "D", text: "Con đường mong muốn riêng của đất nước ta" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027117",
        text: "Khác biệt vẽ sự ra đời của hình thái kinh tế - xã hội cộng sản chủ nghĩa với sự ra đời của các hình thái kinh tế - xã hội trước dây là gi?",
        options: [
          { value: "A", text: "Phải được thực hiện thông qua cuộc cách mạng vô sản" },
          { value: "B", text: "Phải được thực hiện thông qua cuộc cách mạng tư sản" },
          { value: "C", text: "Phải được thực hiện thông qua một sự cải biến sâu sắc vẽ trình độ phát triển của công nghiệp và người lao động" },
          { value: "D", text: "Phải có sự hội tụ đầy đủ các yếu tố vẽ kinh tế và chính trị" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027118",
        text: 'Khẩu hiệu: "Vô sản tất cả các nước và các dân tộc bị áp bức, đoàn kết lại!" là của ai?',
        options: [
          { value: "A", text: "Các Mác" },
          { value: "B", text: "Ph Ăngghen" },
          { value: "C", text: "V.I.Lênin" },
          { value: "D", text: "Hồ Chí Minh" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027119",
        text: "Thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam là bỏ qua chế độ gì?",
        options: [
          { value: "A", text: "Phong kiến" },
          { value: "B", text: "Tư bản chủ nghĩa" },
          { value: "C", text: "Chiếm hữu nô lệ" },
          { value: "D", text: "Cộng sản nguyên thủy" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027120",
        text: "Tổ chức và hoạt động của bộ máy nhà nước pháp quyền xã hội chủ nghĩa Việt Nam thực hiện theo nguyên tắc nào?",
        options: [
          { value: "A", text: "Nguyên tắc tập trung dân chủ" },
          { value: "B", text: "Nguyên tắc dân chủ rộng rãi" },
          { value: "C", text: "Nguyên tắc cá nhân phụ trách" },
          { value: "D", text: "Nguyên tắc lập pháp" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027121",
        text: "Giải quyết hai vấn đề nào sau đây cần phải đặt trong mối quan hệ với cộng đồng quốc gia - dân tộc thống nhất theo định hướng xã hội chủ nghĩa?",
        options: [
          { value: "A", text: "Văn hóa và hội nhập quốc tế" },
          { value: "B", text: "Tư sản và vô sản" },
          { value: "C", text: "Giáo dục và y tế" },
          { value: "D", text: "Dân tộc và tôn giáo" },
        ],
        correctAnswer: "D",
      },
      {
        id: "q_1716027122",
        text: 'Các khẩu hiệu "sống có việc làm hay là chết trong đấu tranh" (1831) và "cộng hòa hay là chết" (1834) xuất hiện trong phong trào đấu tranh của công nhân dệt ở Lion (Pháp) có ý nghĩa gì?',
        options: [
          { value: "A", text: "Phong trào đấu tranh của giai cấp công nhân đã chuyển từ mục đích kinh tế sang mục đích chính trị" },
          { value: "B", text: "Phong trào đấu tranh của giai cấp công nhân đã có lý luận soi đường" },
          { value: "C", text: "Phong trào đấu tranh của giai cấp công nhân đã có những thắng lợi to lớn" },
          { value: "D", text: "Phong trào đấu tranh của giai cấp công nhân chuyển từ tự phát sang tự giác" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027123",
        text: "Nếu thiếu đi cơ sở văn hóa, hoặc cơ sở văn hóa không đi liền với cơ sở kinh tế, chính trị, thì sẽ ảnh hưởng đến vấn đề gì?",
        options: [
          { value: "A", text: "Việc phát triển xã hội" },
          { value: "B", text: "Việc phát triển tâm sinh lý của con người" },
          { value: "C", text: "Việc xây dựng gia đình sẽ lệch lạc, không đạt hiệu quả cao" },
          { value: "D", text: "Việc nhận thức về thế giới xung quanh của con người bị hạn chế" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027124",
        text: "Đâu không phải là một trong những loại của cơ cấu xã hội?",
        options: [
          { value: "A", text: "Cơ cấu xã hội - giai cấp" },
          { value: "B", text: "Cơ cấu xã hội - nghề nghiệp" },
          { value: "C", text: "Cơ cấu xã hội - hạ tầng" },
          { value: "D", text: "Cơ cấu xã hội - tôn giáo" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027125",
        text: "Có bao nhiêu phương hướng cơ bản xây dựng và phát triển gia đình Việt Nam trong thời kỳ quá độ lên chủ nghĩa xã hội?",
        options: [
          { value: "A", text: "3" },
          { value: "B", text: "4" },
          { value: "C", text: "5" },
          { value: "D", text: "6" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027126",
        text: "Trong 04 chức năng cơ bản của gia đình, thì chức năng nào được xem là chức năng đặc thù của gia đình?",
        options: [
          { value: "A", text: "Chức năng tái sản xuất ra con người" },
          { value: "B", text: "Chức năng nuôi dưỡng, giáo dục" },
          { value: "C", text: "Chức năng kinh tế và tổ chức tiêu dùng" },
          { value: "D", text: "Chức năng thỏa mãn nhu cầu tâm sinh lý, duy trì tình cảm gia đình" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027127",
        text: "Giai cấp nào có sứ mệnh thủ tiêu chủ nghĩa tư bản, xây dựng thành công chủ nghĩa xã hội và chủ nghĩa cộng sản?",
        options: [
          { value: "A", text: "Nông dân" },
          { value: "B", text: "Tư sản" },
          { value: "C", text: "Chủ nô" },
          { value: "D", text: "Công nhân" },
        ],
        correctAnswer: "D",
      },
      {
        id: "q_1716027128",
        text: "Theo quan điểm của chủ nghĩa Mác - Lênin, loài người đã trải qua các hình thức cộng đồng từ thấp đến cao theo thứ tự là gì?",
        options: [
          { value: "A", text: "Thị tộc, bộ lạc, bộ tộc và dân tộc" },
          { value: "B", text: "Bộ tộc, bộ lạc, thị tộc và dân tộc" },
          { value: "C", text: "Dân tộc, thị tộc, bộ lạc và bộ tộc" },
          { value: "D", text: "Bộ lạc, bộ tộc, thị tộc và dân tộc" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027129",
        text: "Mâu thuẫn cơ bản của phương thức sản xuất tư bản chủ nghĩa là gì?",
        options: [
          { value: "A", text: "Mâu thuẫn giữa lực lượng sản xuất xã hội hóa ngày càng rộng lớn với quan hệ sản xuất tư bản chủ nghĩa dựa trên chế độ tư hữu tư bản chủ nghĩa về tư liệu sản xuất" },
          { value: "B", text: "Mâu thuẫn giữa quan hệ sản xuất xã hội hóa ngày càng rộng lớn với lực lượng sản xuất từ bản chủ nghĩa dựa trên chế độ tư hữu tư bản chủ nghĩa về tư liệu sản xuất" },
          { value: "C", text: "Mâu thuẫn giữa cơ sở hạ tầng và kiến trúc thượng tầng" },
          { value: "D", text: "Mâu thuẫn giữa tồn tại xã hội và ý thức xã hội" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027130",
        text: "Trong gia đình Việt Nam hiện nay, người chủ gia đình là ai?",
        options: [
          { value: "A", text: "Người lớn tuổi nhất trong gia đình" },
          { value: "B", text: "Người có trình độ cao nhất trong gia đình" },
          { value: "C", text: "Người lớn tuổi nhất và có trình độ cao nhất trong gia đình" },
          { value: "D", text: "Có thể là người đàn ông, người phụ nữ hoặc cả hai" },
        ],
        correctAnswer: "D",
      },
      {
        id: "q_1716027131",
        text: "Thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam hiện nay đang tồn tại hình thức phân phối nào?",
        options: [
          { value: "A", text: "Phân phối theo tiền lương" },
          { value: "B", text: "Phân phối theo lao động, theo mức độ đóng góp và quỹ phúc lợi xã hội" },
          { value: "C", text: "Phân phối theo tiền lương và phân phối theo nhu cầu" },
          { value: "D", text: "Phân phối theo bao cấp" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027132",
        text: "Quyền nào là cơ sở để thực hiện quyền dân tộc tự quyết và xây dựng mối quan hệ hữu nghị, hợp tác giữa các dân tộc?",
        options: [
          { value: "A", text: "Quyền tự quyết của các dân tộc" },
          { value: "B", text: "Quyền tự do ngôn luận" },
          { value: "C", text: "Quyền bình đẳng giữa các dân tộc" },
          { value: "D", text: "Quyền lập pháp của các dân tộc" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027133",
        text: "Cơ cấu xã hội ở Việt Nam muốn biến đổi theo hướng tích cực phải dựa trên cơ sở gi?",
        options: [
          { value: "A", text: "Tăng trưởng kinh tế bằng mọi giá" },
          { value: "B", text: "Sự giàu mạnh của các tổ chức, tập đoàn kinh tế lớn, cạnh tranh được với nước ngoài" },
          { value: "C", text: "Sự phát triển của thành phần kinh tế nhà nước và tập thể" },
          { value: "D", text: "Tăng trưởng, phát triển kinh tế nhanh và bền vững" },
        ],
        correctAnswer: "D",
      },
      {
        id: "q_1716027134",
        text: "Tiền đề kinh tế - xã hội dẫn đến sự sụp đổ không tránh khỏi của chủ nghĩa tư bản là gì?",
        options: [
          { value: "A", text: "Sự phát triển về lực lượng sản xuất và sự trưởng thành của giai cấp công nhân" },
          { value: "B", text: "Sự phát triển về quan hệ sản xuất và sự trưởng thành của giai cấp công nhân" },
          { value: "C", text: "Sự phát triển về lực lượng sản xuất và sự trưởng thành của giai cấp nông dân" },
          { value: "D", text: "Sự phát triển về lực lượng sản xuất và sự trưởng thành của tầng lớp trí thức" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027135",
        text: "Nội dung giáo dục gia đình hiện nay ở Việt Nam hướng đến giáo dục điều gì?",
        options: [
          { value: "A", text: "Giáo dục kiến thức khoa học hiện đại, trang bị công cụ để con cái hòa nhập với thế giới" },
          { value: "B", text: "Giáo dục tinh thần làm giàu, kinh doanh, sản xuất" },
          { value: "C", text: "Giáo dục con cái hướng đến các giá trị truyền thống xưa" },
          { value: "D", text: "Giáo dục con cái theo hướng công nông hóa" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027136",
        text: "Bản chất dân chủ của chế độ nước ta hiện nay được hiểu như thế nào?",
        options: [
          { value: "A", text: "Chế độ ta là do nhân dân làm chủ, quyền lực thuộc về nhân dân" },
          { value: "B", text: "Chế độ ta là do Đảng Cộng sản Việt Nam làm chủ, là đại diện ý chí, nguyện vọng của nhân dân" },
          { value: "C", text: "Chế độ ta là do giai cấp công nhân làm chủ, quyền lực thuộc ve giai cấp công nhân" },
          { value: "D", text: "Chế độ ta là do cá nhân làm chủ, được hiện thực hóa thông qua vai trò làm chủ duy nhất của Đảng Cộng sản Việt Nam" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027137",
        text: "Trong cách mạng xã hội chủ nghĩa, giai cấp công nhân phải liên minh được với giai cấp nông dân và các tầng lớp nhân dân lao động khác trong giai đoạn nào? Lựa chọn 2 đáp án đúng.",
        options: [
          { value: "A", text: "Giai đoạn giành chính quyền" },
          { value: "B", text: "Giai đoạn xây dựng chế độ xã hội mới" },
          { value: "C", text: "Giai đoạn đấu tranh đòi các quyền tự do, dân chủ" },
          { value: "D", text: "Giai đoạn xóa bỏ giai cấp sau khi xây dựng thành công chủ nghĩa xã hội" },
        ],
        correctAnswer: "AB",
      },
      {
        id: "q_1716027138",
        text: "Cương lĩnh xây dựng đất nước trong thời quá độ lên chủ nghĩa xã hội (Bổ sung và phát triển năm 2011) xác định phương hướng đầu tiên, phản ánh con đường đi lên chủ nghĩa xã hội ở nước ta là gì?",
        options: [
          { value: "A", text: "Đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước gắn với phát triển kinh tế tri thức, bảo vệ tài nguyên, môi trường" },
          { value: "B", text: "Phát triển nền kinh tế thị trường định hướng xã hội chủ nghĩa" },
          { value: "C", text: "Xây dựng nền văn hóa tiên tiến, đậm đà bản sắc dân tộc; xây dựng con người, nâng cao đời sống nhân dân, thực hiện tiến bộ và công bằng xã hội" },
          { value: "D", text: "Bảo đảm vững chắc quốc phòng và an ninh quốc gia, trật tự, an toàn xã hội" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027139",
        text: "Dân chủ xã hội chủ nghĩa đã được phôi thai từ khi nào?",
        options: [
          { value: "A", text: "Thực tiễn đấu tranh giai cấp ở Pháp và Công xã Pari năm 1871" },
          { value: "B", text: "Thực tiễn đấu tranh giai cấp ở Việt Nam" },
          { value: "C", text: "Phong trào cách mạng 1930 - 1931" },
          { value: "D", text: "Thành công của cách mạng tháng 8 năm 1945" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027140",
        text: "Tín đồ có chức vụ, phẩm sắc trong tôn giáo được gọi là gì?",
        options: [
          { value: "A", text: "Lãnh đạo tôn giáo" },
          { value: "B", text: "Quản lý tôn giáo" },
          { value: "C", text: "Giáo chủ tôn giáo" },
          { value: "D", text: "Chức sắc tôn giáo" },
        ],
        correctAnswer: "D",
      },
      {
        id: "q_1716027141",
        text: "Trình độ phát triển của các dân tộc ở Việt Nam như thế nào?",
        options: [
          { value: "A", text: "Đồng đều, có sự hỗ trợ của nhà nước" },
          { value: "B", text: "Không đồng đều, có sự chênh lệch khá lớn" },
          { value: "C", text: "Tương đối đồng đều, trong đó dân tộc Kinh phát triển cao nhất" },
          { value: "D", text: "Không thể so sánh" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027142",
        text: "Hôn nhân xuất phát từ tinh yêu giữa nam và nữ được xem là hôn nhân như thế nào?",
        options: [
          { value: "A", text: "Hôn nhân chậm tiến bộ" },
          { value: "B", text: "Hôn nhân tiến bộ" },
          { value: "C", text: "Hôn nhân không được đàm bảo" },
          { value: "D", text: "Hôn nhân huyết thống" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027143",
        text: "Đối tượng nghiên cứu của chủ nghĩa xã hội khoa học là gì?",
        options: [
          { value: "A", text: "Là những quy luật, tính quy luật chính trị - xã hội của quá trình phát sinh, hình thành và phát triển của hình thái kinh tế - xã hội cộng sản chủ nghĩa" },
          { value: "B", text: "Là những quy luật, tính quy luật chính trị - xã hội của quá trình phát sinh, hình thành và phát triển của hình thái kinh tế - xã hội xã hội chủ nghĩa" },
          { value: "C", text: "Là những quy luật, tính quy luật chính trị - xã hội của quá trình phát sinh, hình thành và phát triển của hình thái kinh tế - xã hội tư bản chủ nghĩa" },
          { value: "D", text: "Là những quy luật, tính quy luật chính trị - xã hội của quá trình phát sinh, hình thành và phát triển của hình thái kinh tế - xã hội tư bản chủ nghĩa và cộng sản chủ nghĩa" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027144",
        text: "Học thuyết về hình thái kinh tế - xã hội do ai khởi xướng, và sau đó được ai bổ sung, phát triển?",
        options: [
          { value: "A", text: "C.Mác - V.I.Lênin khởi xướng, Ph. Ăngghen bổ sung phát triển" },
          { value: "B", text: "C.Mác - Ph.Ăngghen khởi xướng, V.I.Lênin bổ sung phát triển" },
          { value: "C", text: "C.Mác - Ph.Ăngghen khởi xướng, Chủ tịch Hồ Chí Minh bổ sung phát triển" },
          { value: "D", text: "C.Mác khởi xướng, Ph. Ăngghen bổ sung phát triển" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027145",
        text: 'Vấn đề: "Xây dựng nhà nước do nhân dân lao động làm chủ, đó là Nhà nước của dân, do dẫn, vì dân" là đặc điểm thứ mấy trong các đặc điểm của Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam?',
        options: [
          { value: "A", text: "1" },
          { value: "B", text: "3" },
          { value: "C", text: "5" },
          { value: "D", text: "6" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027146",
        text: "Theo cương lĩnh dân tộc của chủ nghĩa Mác - Lênin, trong các nội dung của quyền dân tộc tự quyết thị nội dung nào được coi là cơ bản nhất, tiên quyết nhất?",
        options: [
          { value: "A", text: "Tự quyết về chính trị" },
          { value: "B", text: "Tự quyết về văn hóa" },
          { value: "C", text: "Tự quyết vẽ kinh tế" },
          { value: "D", text: "Tự quyết về lãnh thổ" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027147",
        text: "Trong thời kỳ quá độ lên chủ nghĩa xã hội, yếu tố nào quyết định mỗi quan hệ hợp tác, gắn bó chặt chẽ giữa các giai cấp, tầng lớp?",
        options: [
          { value: "A", text: "Họ cùng nhau cải tạo xã hội cũ, xây dựng xã hội mới trong mọi lĩnh vực của đời sống xã hội" },
          { value: "B", text: "Họ cùng nhau xây dựng xã hội mới trong mọi lĩnh vực của đời sống xã hội" },
          { value: "C", text: "Họ cùng nhau cải tạo xã hội cũ trong mọi lĩnh vực của đời sống xã hội" },
          { value: "D", text: "Họ cùng nhau cải tạo xã hội cũ, xây dựng xã hội mới trong lĩnh vực kinh tế, chính trị" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027148",
        text: "Sự kiện gì đánh dấu việc V. .Lênin đã biến chủ nghĩa xã hội từ khoa học, lý luận thành hiện thực?",
        options: [
          { value: "A", text: "Sự ra đời của nhà nước Nga" },
          { value: "B", text: "Sự chiến thắng của nước Nga trong giai đoạn chiến tranh thế giới" },
          { value: "C", text: "Cách mạng tháng 10 Nga năm 1917 thành công và sự ra đời của Nhà nước Xô viết" },
          { value: "D", text: "Lênin qua đời năm 1924 và sự kế vị của J. Xtalin" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027149",
        text: 'Điền cụm từ thích hợp vào (..): "cần phải có một thời kỳ quá độ khá lâu dài từ ... lên ..."',
        options: [
          { value: "A", text: "Chủ nghĩa tư bản/ Chủ nghĩa xã hội" },
          { value: "B", text: "Chủ nghĩa xã hội/ Chủ nghĩa cộng sản" },
          { value: "C", text: "Giai cấp công nhân/ người nắm chính quyền" },
          { value: "D", text: "Người bị bóc lột/ lên làm chủ" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027150",
        text: "Trong cơ cấu xã hội - giai cấp ở Việt Nam hiện nay, giai cấp, tầng lớp nào có nhiệm vụ phát huy bản sắc văn hóa dân tộc và bảo vệ môi trường sinh thái?",
        options: [
          { value: "A", text: "Giai cấp công nhân" },
          { value: "B", text: "Giai cấp nông dân" },
          { value: "C", text: "Tầng lớp trí thức" },
          { value: "D", text: "Đội ngũ doanh nhân" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027151",
        text: "Tại sao nói dân chủ trong xã hội chiếm hữu nô lệ là dân chủ thiểu số?",
        options: [
          { value: "A", text: "Vì số lượng con người thời đó rất ít" },
          { value: "B", text: "Vì nội hàm của khái niệm \"dân\" chỉ bao gồm giai cấp chủ nô và một bộ phận nhỏ công dân tự do" },
          { value: "C", text: "Vì sức tập trung lãnh thổ của các lãnh chúa nhỏ bé" },
          { value: "D", text: "Vì quyền lực thực sự thuộc vào tay một lãnh chúa lớn nhất" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027152",
        text: "Trong thời đại ngày nay ở Việt Nam, đội ngũ công nhân trong thành phần kinh tế nào là tiêu biểu, đóng vai trò nòng cốt và chủ đạo?",
        options: [
          { value: "A", text: "Thành phần kinh tế tư nhân" },
          { value: "B", text: "Thành phần kinh tế tập thẽ" },
          { value: "C", text: "Thành phần kinh tế nhà nước" },
          { value: "D", text: "Thành phần kinh tế có vốn đầu tư nước ngoài" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027153",
        text: "Trong hệ thống chính sách xã hội của nước ta, các chính sách liên quan đến cơ cấu xã hội nào phải được đặt lên vị trí hàng đầu?",
        options: [
          { value: "A", text: "Cơ cấu xã hội - giai cấp" },
          { value: "B", text: "Cơ cấu xã hội - kinh tế" },
          { value: "C", text: "Cơ cấu xã hội - nghề nghiệp" },
          { value: "D", text: "Cơ cấu xã hội - dân tộc" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027154",
        text: "Tại sao trong thời gian đầu, giai cấp công nhân Việt Nam chậm phát triển?",
        options: [
          { value: "A", text: "Vì sinh ra và lớn lên ở một nước thuộc địa, nửa phong kiến dưới ách thống trị của thực dân Pháp" },
          { value: "B", text: "Vì lực lượng không thực sự đông đảo" },
          { value: "C", text: "Vì không có tinh thần kỷ luật và cách mạng triệt để như đặc điểm chung của giai cấp công nhân các nước tư bản phát triển" },
          { value: "D", text: "Vì chưa có tinh thần đấu tranh giai cấp, đấu tranh giải phóng dân tộc" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027155",
        text: "Trong giai đoạn 1843 - 1844, C. Mác và Ph. Ăngghen đã chuyển biến lập trường của mình như thế nào? CHọn 2 ĐA",
        options: [
          { value: "A", text: "Từ thế giới quan duy tâm sang thế giới quan duy vật" },
          { value: "B", text: "Tự lập trường dân chủ cách mạng sáng lập trường cộng sản chủ nghĩa" },
          { value: "C", text: "Từ lập trường cách mạng dân chủ sáng lập trường dân tộc chủ nghĩa" },
          { value: "D", text: "Từ phương pháp luận siêu hình sang phương pháp luận biện chứng" },
        ],
        correctAnswer: "AB",
      },
      {
        id: "q_1716027156",
        text: "Đâu không phải là hạn chế của chủ nghĩa xã hội không tưởng Pháp?",
        options: [
          { value: "A", text: "Không chỉ ra được những biện pháp để hiện thực hóa học thuyết của mình" },
          { value: "B", text: "Không phát hiện ra quy luật phát triển vận động của xã hội nói chung và của xã hội tư bản chủ nghĩa nói riêng" },
          { value: "C", text: "Không phát hiện ra sứ mệnh lịch sử của giai cấp công nhân" },
          { value: "D", text: "Không biết được vai trò của nô lệ trong cách mạng xã hội" },
        ],
        correctAnswer: "D",
      },
      {
        id: "q_1716027157",
        text: "Về mặt thực tiễn, đâu không phải là một ý nghĩa của việc nghiên cứu chủ nghĩa xã hội khoa học?",
        options: [
          { value: "A", text: "Thấy rõ khoảng cách giữa lý luận chủ nghĩa xã hội khoa học và thực tiễn vận dụng nó" },
          { value: "B", text: "Sự sụp đổ của Liên Xô và Đông Âu là do đã nhận thức và hành động trên nhiều vấn đề trái với chủ nghĩa xã hội khoa học, trái với chủ nghĩa Mác - Lênin chứ không phải là do đi theo chủ nghĩa xã hội khoa học làm cho các nước này khủng hoảng" },
          { value: "C", text: "Cần có bản lĩnh vững vàng, sáng suốt và sáng tạo trong việc vận dụng chủ nghĩa xã hội khoa học và bối cảnh lịch sử cụ thể của từng quốc gia, tránh giáo điều, bảo thủ, duy ý chí" },
          { value: "D", text: "Giúp chúng ta có căn cứ nhận thức khoa học để luôn cảnh giác, phân tích đúng và đấu tranh chống lại những nhận thức sai lệch về chủ nghĩa xã hội" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027158",
        text: "Hôn nhân tiến bộ là hôn nhân xuất phát từ đầu?",
        options: [
          { value: "A", text: "Từ tình yêu giữa nam và nữ" },
          { value: "B", text: "Từ quan hệ kinh tế - xã hội" },
          { value: "C", text: "Từ cơ sở pháp lý được xã hội công nhận" },
          { value: "D", text: "Từ các yếu tố đạo đức truyền thống" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027159",
        text: "Cơ cấu xã hội - giai cấp của nước ta trước thời kì đối mới bao gồm các giai cấp, tầng lớp nào?",
        options: [
          { value: "A", text: "Giai cấp công nhân" },
          { value: "B", text: "Giai cấp nông dân" },
          { value: "C", text: "Đội ngũ trí thức" },
          { value: "D", text: "Đội ngũ đảng viên" },
        ],
        correctAnswer: "ABC",
      },
      {
        id: "q_1716027160",
        text: "Quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa là tạo ra sự biến đổi như thế nào của xã hội trên tất cả các lĩnh vực?",
        options: [
          { value: "A", text: "Biến đổi về lượng" },
          { value: "B", text: "Biến đổi về chất" },
          { value: "C", text: "Khuynh hướng phát triển" },
          { value: "D", text: "Thực hiện bước nhảy" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027161",
        text: "Gia đình Việt Nam hiện đại có mấy thế hệ cùng sống chung?",
        options: [
          { value: "A", text: "1 thế hệ" },
          { value: "B", text: "2 thế hệ" },
          { value: "C", text: "3 thế hệ" },
          { value: "D", text: "4 thế hệ" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027162",
        text: "Bản chất dân chủ xã hội chủ nghĩa ở Việt Nam được thực hiện thông qua hình thức nào?",
        options: [
          { value: "A", text: "Hình thức dân chủ trực tiếp" },
          { value: "B", text: "Hình thức dân chủ gián tiếp" },
          { value: "C", text: "Hình thức dân chủ đại nghị" },
          { value: "D", text: "Hình thức dân chủ công khai" },
        ],
        correctAnswer: "AB",
      },
      {
        id: "q_1716027163",
        text: "Tại sao chủ nghĩa xã hội khoa học tập trung nghiên cứu cơ cấu xã hội - giai cấp mà không phải là các cơ cấu xã hội khác?",
        options: [
          { value: "A", text: "Vì cơ cấu xã hội - giai cấp là cơ cấu phổ biến rộng rãi nhất" },
          { value: "B", text: "Vì bản chất của chủ nghĩa xã hội là trấn áp giai cấp" },
          { value: "C", text: "Vì đó là một trong những cơ sở để nghiên cứu vấn đề liên minh giai cấp - tầng lớp trong một chế độ xã hội nhất định" },
          { value: "D", text: "Vì đó là một trong những cơ so để nghiên cứu vấn đề phân chia quyền lực trong một chế độ xã hội nhất định" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027164",
        text: "Mâu thuẫn cơ bản của hình thái kinh tế - xã hội tư bản chủ nghĩa biểu hiện về mặt xã hội là gì?",
        options: [
          { value: "A", text: "Mâu thuẫn xung đột lợi ích của các nhà tư sản khác nhau" },
          { value: "B", text: "Cuộc đấu tranh của giai cấp công nhân chống lại giai cấp tư sản ngày càng gay gắt" },
          { value: "C", text: "Cuộc cạnh tranh giành việc làm của những người công nhân để tránh không bị thất nghiệp" },
          { value: "D", text: "Cuộc đấu tranh giành quyền điều hành quốc gia của các đảng phái tư sản" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027165",
        text: "Đặc trưng nổi bật trong quan hệ giữa các dân tộc ở nước ta là gì?",
        options: [
          { value: "A", text: "Là sự cố kết dân tộc, hòa hợp dân tộc trong một cộng đồng thống nhất" },
          { value: "B", text: "Là sự phân bố đan xen nhau, không một dân tộc nào có lãnh thổ riêng" },
          { value: "C", text: "Là có sự chênh lệch vẽ trình độ phát triển kinh tế - xã hội giữa các dân tộc" },
          { value: "D", text: "Là các dân tộc có bản sắc văn hóa riêng, đa dạng, phong phú" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027166",
        text: 'Câu nói sau do ai khẳng định: "Nếu không giải phóng phụ nữ là xây dựng chủ nghĩa xã hội chỉ một nửa"?',
        options: [
          { value: "A", text: "V.I.Lênin" },
          { value: "B", text: "C.Mác" },
          { value: "C", text: "Chủ tịch Hồ Chí Minh" },
          { value: "D", text: "Ph Ăngghen" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027167",
        text: "Vấn đề nổi bật nhất đối với việc thực hiện sứ mệnh lịch sử của giai cấp công nhân Việt Nam hiện nay là gì?",
        options: [
          { value: "A", text: "Phát huy vai trò và trách nhiệm của lực lượng đi đầu trong sự nghiệp đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước" },
          { value: "B", text: "Phát huy vai trò của lực lượng đi đầu trong sự nghiệp đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước" },
          { value: "C", text: "Phát huy trách nhiệm của lực lượng đi đầu trong sự nghiệp đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước" },
          { value: "D", text: "Phát huy sức chiến đấu của bản thân trong sự nghiệp đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027168",
        text: "Sự thống trị của giai cấp tư sản, đặc biệt là bộ phận tư sản công nghiệp là điều kiện ban đầu cho sự phát triển của giai cấp nào?",
        options: [
          { value: "A", text: "Sự phát triển giai cấp tư sản" },
          { value: "B", text: "Sự phát triển giai cấp chủ nô" },
          { value: "C", text: "Sự phát triển giai cấp nông dân" },
          { value: "D", text: "Sự phát triển giai cấp công nhân" },
        ],
        correctAnswer: "D",
      },
      {
        id: "q_1716027169",
        text: "Nguyên tắc cơ bản của nền dân chủ xã hội chủ nghĩa là gì?",
        options: [
          { value: "A", text: "Không ngừng mở rộng dân chủ, nâng cao mức độ giải phóng cho người lao động, thu hút họ tham gia tự giác vào công việc quản lý nhà nước, quản lý xã hội" },
          { value: "B", text: "Không ngừng mở rộng dân chủ, hạn chế việc giải phóng cho người lao động, thu hút họ tham gia tự giác vào công việc quản lý nhà nước, quản lý xã hội" },
          { value: "C", text: "Hạn chế việc mở rộng dân chủ, nâng cao mức độ giải phóng cho người lao động, thu hút họ tham gia tự giác vào công việc quản lý nhà nước, quản lý xã hội" },
          { value: "D", text: "Không ngừng mở rộng dân chủ, nâng cao mức độ giải phóng cho người lao động, tuyệt đối không để họ tham gia tự giác vào công việc quản lý nhà nước, quản lý xã hội" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027170",
        text: "Chính sách dân tộc của nước ta về chính trị hướng tới đảm bảo đại đoàn kết toàn dân tộc thống nhất vì mục tiêu chung la gì?",
        options: [
          { value: "A", text: "Lợi ích kinh tế" },
          { value: "B", text: "Điều hòa mâu thuẫn giữa các dân tộc" },
          { value: "C", text: "Dân giàu, nước mạnh, dân chủ, công bằng và văn minh" },
          { value: "D", text: "Lợi ích thiết thân của từng dân tộc" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027171",
        text: "Điều gì vừa là thách thức vừa tạo ra thời cơ cho Việt Nam trong thời kỳ quá độ chủ nghĩa xã hội hiện nay?",
        options: [
          { value: "A", text: "Cuộc cách mạng khoa học công nghệ và xu thế toàn cầu hóa" },
          { value: "B", text: "Sự trỗi dậy của chủ nghĩa xã hội, tiêu biểu là Trung Quốc" },
          { value: "C", text: "Sự thay đổi trật tự thế giới" },
          { value: "D", text: "Sự gia tăng nhanh chóng của lực lượng lao động nước ta" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027172",
        text: "Sau Hội nghị Matxcova (1960), hoạt động lý luận và thực tiễn của Đảng Cộng sản và công nhân như thế nào?",
        options: [
          { value: "A", text: "Không phát triển" },
          { value: "B", text: "Tăng cường hơn trước" },
          { value: "C", text: "Bị chủ nghĩa tư bản thủ tiêu" },
          { value: "D", text: "Chỉ có công nhân phát triển" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027173",
        text: "Trong thời đại hiện nay, ở các nước xã hội chủ nghĩa, nơi các Đảng Cộng Sản đã trở thành đảng cầm quyền, sứ mệnh lịch sử của giai cấp công nhân về chính trị - xã hội là gì?",
        options: [
          { value: "A", text: "Đấu tranh giành chính quyền về tay giai cấp công nhân và nhân dân lao động" },
          { value: "B", text: "Đấu tranh đòi các quyền tự do, dân chủ" },
          { value: "C", text: "Lãnh đạo công cuộc đổi mới, giải quyết thành công các nhiệm vụ trong thời kỳ quá độ lên chủ nghĩa xã hội" },
          { value: "D", text: "Chống bất công, bất bình đẳng xã hội" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027174",
        text: "Cùng với sự phát triển mạnh mẽ của nền đại công nghiệp cơ khí là sự trưởng thành vượt bậc cả về số lượng và chất lượng của giai cấp nào?",
        options: [
          { value: "A", text: "Công nhân" },
          { value: "B", text: "Nông dân" },
          { value: "C", text: "Tư sản" },
          { value: "D", text: "Chủ nô" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027175",
        text: "Theo V.I.Lênin, nguyễn tác cao nhất của chuyên chính vỏ sản ở Nga khi thực hiện cách mạng tháng Mười và cả giai đoạn sau đó là qi?",
        options: [
          { value: "A", text: "Duy trì khối liên minh giữa giai cấp vô sản và nông dân để giai cấp vô sản có thể giữ được vai trò lãnh đạo" },
          { value: "B", text: "Duy trì trấn áp giai cấp, duy trì quyền lãnh đạo duy nhất của giai cấp công nhân" },
          { value: "C", text: "Duy trì khối liên minh tất cả giai cấp, tầng lớp sau khi đã giành được chính quyền" },
          { value: "D", text: "Điều hòa mâu thuẫn giữa các giai cấp, bảo đảm các bên có quyền lợi và nghĩa vụ như nhau" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027176",
        text: "Nếu trước kia, gia đình Việt Nam tiêu dùng sản phẩm do mình làm ra là chính, thì hiện nay, gia đình Việt Nam đang tiến tới xu hướng tiêu dùng chủ yếu nào?",
        options: [
          { value: "A", text: "Xu hướng sử dụng hàng hóa, dịch vụ của phúc lợi Nhà nước" },
          { value: "B", text: "Xu hướng tiêu dùng sản phẩm do người khác làm ra" },
          { value: "C", text: "Xu hướng tiêu dùng sản phẩm nước ngoài" },
          { value: "D", text: "Tiêu dùng sản phẩm được cấp phát" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027177",
        text: "Theo V.I.Lênin, mục đích cao cả nhất mà chủ nghĩa xã hội cần đạt đến là gì? Chọn 3 đáp án đúng",
        options: [
          { value: "A", text: "Xóa bỏ sự phân chia xã hội thành giai cấp" },
          { value: "B", text: "Biến tất cả thành viên trong xã hội thành người lao động" },
          { value: "C", text: "Tiêu diệt cơ sở của mọi tình trạng người bóc lột người" },
          { value: "D", text: "Thiết lập quyền thống trị xã hội của giai cấp công nhân và nhân dân lao động" },
        ],
        correctAnswer: "ACD",
      },
      {
        id: "q_1716027178",
        text: "Đặc trưng bản chất nào của chủ nghĩa xã hội thế hiện đây là chế độ xã hội vì con người, do con người?",
        options: [
          { value: "A", text: "Chủ nghĩa xã hội có nền kinh tế phát triển cao, dựa trên chế độ tư hữu về tư liệu sản xuất chủ yếu" },
          { value: "B", text: "Chủ nghĩa xã hội là chế độ xã hội do nhân dân lao động làm chủ" },
          { value: "C", text: "Chủ nghĩa xã hội giải phóng giai cấp công nhân, nhân dân lao động và đồng thời đàn áp giai cấp thống trị tàn bạo là giai cấp tư sản" },
          { value: "D", text: "Chủ nghĩa xã hội có nhà nước kiểu mới mang bản chất giai cấp công nhân, đại biểu cho lợi ích, quyền lực và ý chí của riêng giai cấp công nhân" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027179",
        text: "Cơ cấu xã hội - giai cấp trong thời kì quá độ lên chủ nghĩa xã hội có sự đan xen giữa cái cũ và cái mới, biểu hiện về mặt kinh tế của nó là gì?",
        options: [
          { value: "A", text: "Tồn tại kết cấu kinh tế nhiều thành phần" },
          { value: "B", text: "Tồn tại nhiều giai cấp, tầng lớp đối lập với nhau" },
          { value: "C", text: "Tồn tại nhiều chủ sở hữu trong cùng một doanh nghiệp" },
          { value: "D", text: "Tồn tại nhiều hình thức liên doanh, liên kết tư bản nước ngoài" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027180",
        text: "Tại sao trong thời kì quá độ lên chủ nghĩa xã hội, cơ cấu xã hội - giai cấp lại biến đổi phức tạp, đa dạng?",
        options: [
          { value: "A", text: "Vì đó là thời kì chuyển tiếp giữa cái cũ và cái mới, có nhiều yếu tố đan xen" },
          { value: "B", text: "Vi các giai cấp cạnh tranh quyền lực lãnh đạo của nhau" },
          { value: "C", text: "Vì sự chống phá của các thế lực thù địch bên ngoài" },
          { value: "D", text: "Vì trong xã hội còn tồn tại nhiều giai cấp, tầng lớp" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027181",
        text: "Theo nghĩa rộng, khái niệm dân tộc được hiểu như thế nào?",
        options: [
          { value: "A", text: "Một quốc gia, toàn bộ nhân dân của một nước" },
          { value: "B", text: "Một dân tộc cụ thể cùng chung sống trong một lãnh thổ quốc gia nhất định" },
          { value: "C", text: "Tất cả các quốc gia đang sinh sống trên trái đất" },
          { value: "D", text: "Một dân tộc có chung văn hóa, có thể sống trên nhiều quốc gia khác nhau" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027182",
        text: "Học thuyết về hình thái kinh tế - xã hội do ai khởi xướng?",
        options: [
          { value: "A", text: "C.Mác và V.I.Lênin" },
          { value: "B", text: "Ph. Ăngghen và V.I Lênin" },
          { value: "C", text: "C.Mác và Ph. Ăngghen" },
          { value: "D", text: "V.I. Lênin và Chủ tịch Hồ Chí Minh" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027183",
        text: "Chức năng văn hóa của gia đình thể hiện điều gì?",
        options: [
          { value: "A", text: "Gia đình là nơi lưu giữ truyền thống văn hóa của dân tộc, là nơi sáng tạo và thụ hưởng những giá trị văn hóa của xã hội" },
          { value: "B", text: "Gia đình là nơi chịu sự chi phối, khế ước của các yếu tố văn hóa cũ và mới đan xen" },
          { value: "C", text: "Gia đình là nơi thực thi các chính sách văn hóa, mang đậm dấu ấn của giai cấp thống trị" },
          { value: "D", text: "Gia đình là nơi giao lưu văn hóa của các cộng đồng tộc người" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027184",
        text: 'Tư duy của Nhà triết học nào được xem là "cái hạt nhân" hợp lý của phép biện chứng?',
        options: [
          { value: "A", text: "V.I.Lênin" },
          { value: "B", text: "C.Mác" },
          { value: "C", text: "G.V.Ph.Hêghen" },
          { value: "D", text: "Ph. Ăngghen" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027185",
        text: "Trong hai mặt của vấn đề tôn giáo, mặt nào phản ánh mâu thuẫn mang tính chất đối kháng giữa các giai cấp và các thế lực lợi dụng tôn giáo chống lại sự nghiệp cách mạng của nhân dân lao động?",
        options: [
          { value: "A", text: "Mặt chính trị" },
          { value: "B", text: "Mặt tư tưởng" },
          { value: "C", text: "Không có mặt nào có tính chất mâu thuẫn đối kháng" },
          { value: "D", text: "Cả hai mặt đều có tính chất mâu thuẫn đối kháng" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027186",
        text: "Vấn đề chiến lược, cơ bản, lâu dài và cấp bách trong việc giải quyết mối quan hệ dân tộc và tôn giáo ở Việt Nam hiện nay là gì?",
        options: [
          { value: "A", text: "Đảm bảo sự lãnh đạo của Đảng Cộng sản Việt Nam, tuân thủ nguyên tắc, lập trường chính trị của giai cấp công nhân" },
          { value: "B", text: "Đảm bảo các tôn giáo, dân tộc chuyển biến tích cực" },
          { value: "C", text: "Đảm bảo hài hòa lợi ích, giảm thiểu tối mức tối đa mâu thuẫn lợi ích, nhất là mâu thuẫn lợi ích kinh tế" },
          { value: "D", text: "Củng cố mối quan hệ tốt đẹp giữa dân tộc và tôn giáo, củng cố khối đại đoàn kết toàn dân tộc và đoàn kết tôn giáo" },
        ],
        correctAnswer: "D",
      },
      {
        id: "q_1716027187",
        text: "Công cuộc đổi mới do Đảng Cộng sản Việt Nam khỏi xướng và lãnh đạo tại Đại hội lần thứ bao nhiêu?",
        options: [
          { value: "A", text: "Lần thứ IV" },
          { value: "B", text: "Lần thứ VI" },
          { value: "C", text: "Lần thứ X" },
          { value: "D", text: "Lần thứ XIII" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027188",
        text: 'Điền cụm từ thích hợp vào (..): *Về lý luận, không thể nghi ngờ gì được rằng giữa ... và .., có một thời kỳ quá độ nhất định"',
        options: [
          { value: "A", text: "Chủ nghĩa tư bản/ chủ nghĩa cộng sản" },
          { value: "B", text: "Chủ nghĩa tư bản/ Giai cấp công nhân" },
          { value: "C", text: "Nhân dân lao động/ chính quyền" },
          { value: "D", text: "Chính trị/ xã hội" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027189",
        text: "Việc thực hiện chức năng nào của gia đình quyết định mật độ dân cư và nguồn lực lao động của một quốc gia và quốc tế?",
        options: [
          { value: "A", text: "Chức năng kinh tế và tổ chức tiêu dùng" },
          { value: "B", text: "Chức năng định củ" },
          { value: "C", text: "Chức năng tái sản xuất ra con người" },
          { value: "D", text: "Chức năng giáo dục, nuôi dưỡng" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027190",
        text: 'Ngày nay, xu hướng "trí tuệ hóa" tăng nhanh, đã tạo ra hệ quả gì cho giai cấp công nhân?',
        options: [
          { value: "A", text: "Nhu cầu vật chất, tinh thần ngày càng tăng, phong phú và đa dạng hơn" },
          { value: "B", text: "Xu hướng đình công, bãi công ngày càng diễn ra rộng rãi" },
          { value: "C", text: "Giai cấp công nhân có trí tuệ cao hơn, có xu hướng chuyển biến thành giai cấp tư sản" },
          { value: "D", text: "Giai cấp công nhân tham gia ở những vị trí, cấp bậc cao hơn trong các công xưởng, doanh nghiệp và ngày cũng có xu hướng thỏa hiệp với giai cấp tư sản" },
        ],
        correctAnswer: "D",
      },
      {
        id: "q_1716027191",
        text: "Thời kỳ quá độ lên chủ nghĩa xã hội là thời kỳ đấu tranh giai cấp trong điều kiện mới, điều kiện đó là gì?",
        options: [
          { value: "A", text: "Giai cấp tư sản đã trở thành lực lượng phản động" },
          { value: "B", text: "Giai cấp công nhân và nhân dân lao động đã trở thành giai cấp cầm quyền" },
          { value: "C", text: "Sự phát triển của công nghiệp hóa dẫn đến thất nghiệp tràn lan" },
          { value: "D", text: "Đảng Cộng sản đã được thành lập, và ngày càng thể hiện vai trò lãnh đạo tích cực trong phong trào đấu tranh giành chính quyền" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027192",
        text: 'Nghị quyết "Về phát huy sức mạnh đại đoàn kết dân tộc vì dân giàu nước mạnh, xã hội công bằng, dân chủ, văn minh" được đề cập đến ở Hội nghị Trung ương nào?',
        options: [
          { value: "A", text: "Hội nghị Trung ương VII khóa IX" },
          { value: "B", text: "Hội nghị Trung ương II khóa VII" },
          { value: "C", text: "Hội nghị Trung ương V khóa VIII" },
          { value: "D", text: "Hội nghị Trung ương VI khóa VIII" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027193",
        text: "Ba bộ phận hợp thành chủ nghĩa Mác - Lênin là gì?",
        options: [
          { value: "A", text: "Triết học Mác - Lênin, Kinh tế chính trị Mác - Lênin và Chủ nghĩa xã hội không tưởng phê phán" },
          { value: "B", text: "Kinh tế chính trị Mác - Lênin, Tư tưởng Hồ Chí Minh và Chủ nghĩa xã hội không tưởng phê phán" },
          { value: "C", text: "Triết học Mác - Lênin, Tư tưởng Hồ Chí Minh và Kinh tế chính trị học có điển Anh" },
          { value: "D", text: "Triết học Mác - Lênin, Kinh tế chính trị Mác - Lênin và Chủ nghĩa xã hội khoa học" },
        ],
        correctAnswer: "D",
      },
      {
        id: "q_1716027194",
        text: "Trong thời đại hiện nay, sứ mệnh lịch sử của giai cấp công nhân trong lĩnh vực văn hóa, tư tưởng là gì?",
        options: [
          { value: "A", text: "Đấu tranh bảo vệ nền tảng tư tưởng của Đảng Cộng sản, giáo dục nhận thức và củng cố niềm tin khoa học đối với lí tưởng, mục tiêu của chủ nghĩa xã hội" },
          { value: "B", text: "Tuyên truyền cho quần chúng lao động về hộ tư tưởng Mác - Lênin đã tiến đến chủ nghĩa cộng sản" },
          { value: "C", text: "Xét lại, bổ sung chủ nghĩa Mác - Lênin để dung hợp với các học thuyết tư sản mới" },
          { value: "D", text: "Dung hòa chủ nghĩa dân tộc và tư tưởng chủ nghĩa xã hội không tưởng" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027195",
        text: 'Vấn đề: "Dân chủ là quyền lực thuộc về nhân dân, nhân dân là chủ nhân của nhà nước" được đề cấp trên phương diện nào theo chủ nghĩa Mác - Lênin về dân chủ?',
        options: [
          { value: "A", text: "Phương diện tổ chức và quản lý xã hội" },
          { value: "B", text: "Phương diện quyền lực" },
          { value: "C", text: "Phương diện chế độ xã hội và trong lĩnh vực chính trị" },
          { value: "D", text: "Phương diện bảo vệ xã hội" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027196",
        text: "Đâu không phải là một tầng lớp xã hội mới xuất hiện và phát triển trong thời kì quá độ lên chủ nghĩa xã hội?",
        options: [
          { value: "A", text: "Tầng lớp doanh nhân, tiểu chủ" },
          { value: "B", text: "Tăng lớp những người giàu có" },
          { value: "C", text: "Tầng lớp trung lưu" },
          { value: "D", text: "Tầng lớp trí thức" },
        ],
        correctAnswer: "D",
      },
      {
        id: "q_1716027197",
        text: "Theo chủ nghĩa Mác - Lênin, chất lượng của giai cấp công nhân được thể hiện thông qua yếu tố nào?",
        options: [
          { value: "A", text: "Sự chuyên nghiệp trong tác phong, kỷ luật lao động" },
          { value: "B", text: "Trình độ trưởng thành về ý thức chính trị của một giai cấp cách mạng" },
          { value: "C", text: "Năng lực tập hợp, vận động và thống trị nhân dân lao động thông qua đội tiên phong của mình - Đảng Cộng sản" },
          { value: "D", text: "Năng lực tổ chức khởi nghĩa giành chính quyền" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027198",
        text: "Chính sách dân tộc của nước ta hiện nay giải quyết vấn đề văn hóa của các dân tộc như thế nào?",
        options: [
          { value: "A", text: "Tăng cường phát huy văn hóa tiên tiến của đồng bào dân tộc Kinh, vì chiếm đa số trong xã hội" },
          { value: "B", text: "Loại bỏ các giá trị văn hóa truyền thống của các dân tộc thiểu số để phù hợp hơn với thời đại" },
          { value: "C", text: "Giữ gìn và phát huy giá trị văn hóa truyền thống của các tộc người, phát triển ngôn ngữ, nâng cao trình độ văn hóa cho nhân dân các dân tộc" },
          { value: "D", text: "Tăng cường cải tạo văn hóa của các dân tộc để thống nhất chung một bản sắc văn hóa Việt Nam" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027199",
        text: "Gia đình được hình thành, củng cố và duy trì dựa trên mối quan hệ nào? Lựa chọn 3 đáp ăn đúng.",
        options: [
          { value: "A", text: "Quan hệ hôn nhân" },
          { value: "B", text: "Quan hệ huyết thống" },
          { value: "C", text: "Quan hệ nuôi dưỡng" },
          { value: "D", text: "Quan hệ kinh tế" },
        ],
        correctAnswer: "ABC",
      },
      {
        id: "q_1716027200",
        text: "Hai yếu tố nào cấu thành cơ sở của lịch sử chính trị và lịch sử tư tưởng của thời đại?",
        options: [
          { value: "A", text: "Chính trị xã hội và văn hóa" },
          { value: "B", text: "Cơ sở hạ tầng và kiến trúc thượng tầng" },
          { value: "C", text: "Sản xuất kinh tế và cơ cấu xã hội" },
          { value: "D", text: "Lực lượng sản xuất và quan hệ sản xuất" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027201",
        text: "Làm sao để xóa bỏ triệt để ngay lập tức các giai cấp, tầng lớp của cơ cấu xã hội - giai cấp trong thời kì quá độ lên chủ nghĩa xã hội?",
        options: [
          { value: "A", text: "Giai cấp công nhân, liên minh cùng với các giai cấp, tầng lớp khác tổ chức nhà nước và thực hiện công cụ chuyên chính vô sản thực thi xóa bỏ ngay lập tức giai cấp tư sản, và sau đó xóa bỏ luôn giai cấp mình" },
          { value: "B", text: "Các giai cấp, tầng lớp chủ động đứng vào hàng ngũ của Đảng Cộng sản để thống nhất xóa bỏ sự tồn tại của giai cấp" },
          { value: "C", text: "Sự tồn tại các giai cấp, tầng lớp trong thời kì quá độ lên chủ nghĩa xã hội là vấn đề mang tính quy luật, chỉ có thể cải tạo dần chứ chưa thể xóa bỏ triệt để, ngay lập tức được" },
          { value: "D", text: "Quốc hữu hóa tất cả tài sản, tịch thu ruộng đất, gia sản của giai cấp tư sản, đồng thời biến họ trở thành nhân dân lao động" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027202",
        text: "Quan hệ dân tộc và tôn giáo ở nước ta được thiết lập và củng cố trên cơ sở nào?",
        options: [
          { value: "A", text: "Sự thống nhất quản lý của Đảng Cộng sản Việt Nam" },
          { value: "B", text: "Sự thống nhất lợi ích kinh tế giữa các giai cấp" },
          { value: "C", text: "Sự thống nhất trong cùng cộng đồng quốc gia - dân tộc" },
          { value: "D", text: "Sự liên minh trong giáo hội và Quốc hội" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027203",
        text: "Theo nghĩa rộng, dân tộc có bao nhiêu đặc trưng cơ bản?",
        options: [
          { value: "A", text: "4" },
          { value: "B", text: "5" },
          { value: "C", text: "6" },
          { value: "D", text: "7" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027204",
        text: "Chủ nghĩa xã hội khoa học ra đời dựa trên mấy tiền đề?",
        options: [
          { value: "A", text: "2" },
          { value: "B", text: "3" },
          { value: "C", text: "4" },
          { value: "D", text: "5" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027205",
        text: "Với tư cách là một hình thái nhà nước, nền dân chủ nào là nền dân chủ của tất cả mọi người?",
        options: [
          { value: "A", text: "Dân chủ chủ nô" },
          { value: "B", text: "Dân chủ tư sản" },
          { value: "C", text: "Dân chủ xã hội chủ nghĩa" },
          { value: "D", text: "Không có bất cứ nền dân chủ nào là của tất cả mọi người" },
        ],
        correctAnswer: "D",
      },
      {
        id: "q_1716027206",
        text: "Cho đến nay, kinh tế gia đình Việt Nam đã có bước chuyển biến mang tính bước ngoặt nào? Chọn 2 đáp án đúng",
        options: [
          { value: "A", text: "Từ kinh tế tự cấp, tự túc thành kinh tế hàng hóa" },
          { value: "B", text: "Từ kinh tế hàng hóa thành kinh tế tự cấp, tự túc" },
          { value: "C", text: "Từ đơn vị kinh tế đáp ứng nhu cầu của thị trường quốc gia thành đơn vị kinh tế đáp ứng nhu cầu của thị trường toàn cầu" },
          { value: "D", text: "Từ kinh tế kế hoạch hóa tập trung sang kinh tế thị trường tự do" },
        ],
        correctAnswer: "AC",
      },
      {
        id: "q_1716027207",
        text: "Đặc trưng cơ bản đầu tiên của chủ nghĩa xã hội là gì?",
        options: [
          { value: "A", text: "Chủ nghĩa xã hội có nhà nước kiểu mới mang bản chất giai cấp công nhân, đại biểu cho lợi ích, quyền lực và ý chí của nhân dân lao động" },
          { value: "B", text: "Chủ nghĩa xã hội giải phóng giai cấp, giải phóng dân tộc, giải thông xã hội, giải phóng con người, tạo điều kiện để con người phát triển toàn diện" },
          { value: "C", text: "Chủ nghĩa xã hội là xã hội do nhân dân lao động làm chủ" },
          { value: "D", text: "Chủ nghĩa xã hội có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và chế độ công hữu về tư liệu sản xuất chủ yếu" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027208",
        text: "Cơ cấu xã hội - giai cấp của nước ta trong thời kì quá độ lên chủ nghĩa xã hội hiện nay bao gồm những giai cấp, tầng lớp cơ bản nào? chọn 3 ĐA",
        options: [
          { value: "A", text: "Giai cấp công nhân" },
          { value: "B", text: "Giai cấp nông dân" },
          { value: "C", text: "Đội ngũ trí thức và đội ngũ doanh nhân" },
          { value: "D", text: "Đội ngũ trí thức và đội ngũ đảng viên" },
        ],
        correctAnswer: "ABC",
      },
      {
        id: "q_1716027209",
        text: "Cuối thế kỷ XIV - đầu thế kỷ XV, giai cấp tư sản với những tư tưởng tiến bộ về tự do, công bằng, dân chủ đã mở đường cho sự ra đời của nền dân chủ nào?",
        options: [
          { value: "A", text: "Dân chủ nông dân" },
          { value: "B", text: "Dân chủ tư sản" },
          { value: "C", text: "Dân chủ vô sản" },
          { value: "D", text: "Dân chủ hòa bình" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027210",
        text: "Theo quan điểm của Đảng Cộng Sản Việt Nam, quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa đòi hỏi phải:",
        options: [
          { value: "A", text: "Tiếp thu, kế thừa những thành tựu mà nhân loại đã đạt được dưới chủ nghĩa tư bản" },
          { value: "B", text: "Tiếp thu, kế thừa những thành tựu mà chế độ phong kiến đã đạt được" },
          { value: "C", text: "Bỏ qua những thành tựu mà nhân loại đã đạt được trong chủ nghĩa tư bản" },
          { value: "D", text: "Loại bỏ tất cả những gì có liên quan đến chủ nghĩa tư bản" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027211",
        text: '"Đạo Cao Đài, Phật giáo Hòa Hảo là hai trong số những tôn giáo nội sinh ở Việt Nam. Lịch sử từng ghi nhận rằng hai tôn giáo này đã cùng với người dân Nam Bộ tham gia kháng chiến chống giặc cứu nước". Vấn đề vừa nêu thuộc đặc điểm thứ mấy trong số các đặc điểm tôn giáo ở Việt Nam?',
        options: [
          { value: "A", text: "1" },
          { value: "B", text: "2" },
          { value: "C", text: "3" },
          { value: "D", text: "4" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027212",
        text: "Về phương diện chính trị - xã hội, giai cấp công nhân có vị trí như thế nào?",
        options: [
          { value: "A", text: "Là những người nắm giữ tư liệu sản xuất của xã hội tư bản chủ nghĩa, tự tổ chức sản xuất kinh doanh lớn mà không hợp tác với giai cấp nào" },
          { value: "B", text: "Là những người không có sở hữu tư liệu sản xuất chủ yếu của xã hội, phải bán sức lao động cho nhà tư bản và bị bóc lột giá trị thặng dư" },
          { value: "C", text: "Là những người sở hữu tư liệu sản xuất, hợp tác với nhà tư bản để kiếm sống" },
          { value: "D", text: "Là những người có sở hữu một số tư liệu sản xuất nhỏ, có thể tự sản xuất, nhưng nhỏ lẻ, dễ phá sản nên phải bán sức lao động cho nhà tư bản là chính" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027213",
        text: "Cơ sở văn hóa để xây dựng gia đình trong chủ nghĩa xã hội là gì?",
        options: [
          { value: "A", text: "Thiết lập chính quyền nhà nước của giai cấp công nhân và nhân dân lao động, nhà nước xã hội chủ nghĩa" },
          { value: "B", text: "Thiết lập chế độ công hữu vẽ tư liệu sản xuất" },
          { value: "C", text: "Giá trị văn hóa được xây dựng trên nền tảng hệ tư tưởng chính trị của giai cấp công nhân" },
          { value: "D", text: "Tất cả các đáp án đều đúng" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027214",
        text: "Cơ sở kinh tế - xã hội để xây dựng gia đình trong thời kỳ quá độ lên chủ nghĩa xã hội là gì?",
        options: [
          { value: "A", text: "Là sự phát triển của lực lượng sản xuất và tương ứng với nó là quan hệ sản xuất mới, xã hội chủ nghĩa" },
          { value: "B", text: "Là sự phát triển của trình độ lao động, khoa học kỹ thuật của xã hội" },
          { value: "C", text: "Là điều kiện lao động, công an, việc làm và thu nhập của công dân" },
          { value: "D", text: "Thiết lập chính quyền nhà nước của giai cấp công nhân và nhân dân lao động" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027215",
        text: "Đâu là một phương hướng trong việc phát huy vai trò của phụ nữ trong cơ cấu xã hội Việt Nam hiện nay?",
        options: [
          { value: "A", text: "Có kế hoạch chăm sóc sức khỏe sinh sản, đảm bảo quyền tự do kế hoạch hóa gia đình của phụ nữ" },
          { value: "B", text: "Tăng tỷ lệ phụ nữ tham gia vào các cấp ủy và bộ máy quản lý các cấp" },
          { value: "C", text: "Có chính sách ưu đãi xã hội đối với nữ giới để đảm bảo quyền bình đẳng" },
          { value: "D", text: "Tăng cường đội ngũ doanh nhân nữ giới" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027216",
        text: 'Vấn đề: "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh" là đặc trưng thứ mấy trong 08 đặc trưng cơ bản của chủ nghĩa xã hội ở Việt Nam? (Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên chủ nghĩa xã hội bổ sung, phát triển năm 2011)',
        options: [
          { value: "A", text: "1" },
          { value: "B", text: "3" },
          { value: "C", text: "6" },
          { value: "D", text: "8" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027217",
        text: "Cơ cấu xã hội là gì?",
        options: [
          { value: "A", text: "Là những cộng đồng người hợp thành một chế độ xã hội" },
          { value: "B", text: "Là những người trong cùng một giai cấp, tăng lớp thực hiện phân chia quyền lực" },
          { value: "C", text: "Là những cộng đồng người dùng toàn bộ những mối quan hệ xã hội do sự tác động lẫn nhau của các công đồng ấy tạo nên" },
          { value: "D", text: "Là những cộng đồng người dùng toàn bộ những mối quan hệ xã hội do sự tác động của cộng đồng người ấy với tự nhiên tạo nên" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027218",
        text: "Sứ mệnh lịch sử của giai cấp công nhân là phạm trù cơ bản nhất của",
        options: [
          { value: "A", text: "Chủ nghĩa xã hội không tưởng" },
          { value: "B", text: "Chủ nghĩa xã hội dân chủ" },
          { value: "C", text: "Chủ nghĩa xã hội khoa học" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027219",
        text: "Lạm phát là hiện tượng kinh tế",
        options: [
          { value: "A", text: "Tác động xấu đến sản xuất và tiêu dùng" },
          { value: "B", text: "Không tác động xấu đến sản xuất và tiêu dùng" },
          { value: "C", text: "Có tác dụng kích thích tăng trưởng kinh tế nhưng với điều kiện lạm phát ở mức thấp" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027220",
        text: "Thực chất của cách mạng xã hội chủ nghĩa có tính chất",
        options: [
          { value: "A", text: "Chính trị" },
          { value: "B", text: "Tư tưởng" },
          { value: "C", text: "Kinh tế" },
          { value: "D", text: "Văn hóa" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027221",
        text: "Thuật ngữ giai cấp công nhân và giai cấp vô sản",
        options: [
          { value: "A", text: "Khác nghĩa" },
          { value: "B", text: "Không liên quan vẽ nghĩa" },
          { value: "C", text: "Đồng nghĩa" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027222",
        text: "Định nghĩa giai cấp của Lênin dựa vào cơ sở nào sau đây",
        options: [
          { value: "A", text: "Chính trị" },
          { value: "B", text: "Xã hội" },
          { value: "C", text: "Kinh tế" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027223",
        text: "Cách mạng xã hội kết thúc dẫn đến",
        options: [
          { value: "A", text: "Thay đổi chế độ chính trị" },
          { value: "B", text: "Thay thế xã hội cũ bằng xã hội mới tiến bộ hơn" },
          { value: "C", text: "Thay đổi thể chế chính trị" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027224",
        text: "Cung là",
        options: [
          { value: "A", text: "Một số sản phẩm nhất định của thị trường" },
          { value: "B", text: "Mọi hàng hóa có khả năng đáp ung nhu cầu thị trường" },
          { value: "C", text: "Mọi sản phẩm của lao động" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027225",
        text: "Trong thời đại hiện nay, ở các nước phát triển, sự phát triển của giai cấp công nhân có mối quan hệ ntn với phát triển kinh tế?",
        options: [
          { value: "A", text: "Tỷ lệ thuận" },
          { value: "B", text: "Tỷ lệ nghịch" },
          { value: "C", text: "Mâu thuẫn đối kháng" },
          { value: "D", text: "Tỷ lệ thất nghiệp gia tăng, làm tăng nguy cơ khủng hoảng" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027226",
        text: "Nhà nước xã hội chủ nghĩa",
        options: [
          { value: "A", text: "Tôn trọng quyền tự do tín ngưỡng, tự do tôn giáo của nhân dân" },
          { value: "B", text: "Kiên quyết không để tôn giáo tồn tại" },
          { value: "C", text: "Thỏa hiệp với tôn giáo" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027227",
        text: "Theo quan điểm Mác-Lênin:",
        options: [
          { value: "A", text: "Giữa chủ nghĩa tư bản và chủ nghĩa cộng sản một số nước phải có một thời kỳ quá độ" },
          { value: "B", text: "Quá độ lên chủ nghĩa xã hội phải trải qua một thời kỳ quá độ" },
          { value: "C", text: "Giữa chủ nghĩa tư bản và chủ nghĩa cộng sản không cần phải có một thời kỳ quá độ" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027228",
        text: "Mâu thuẫn cơ bản của hình thái kinh tế - xã hội tư bản chủ nghĩa biểu hiện về mặt xã hội là :",
        options: [
          { value: "A", text: "Cuộc cạnh tranh giành việc làm của những người công nhân để tránh không bị thất nghiệp" },
          { value: "B", text: "Cuộc đấu tranh giành quyền điều hành quốc gia của các đảng phái tư sản" },
          { value: "C", text: "Cuộc đấu tranh của giai cấp công nhân chống lại giai cấp tư sản ngày càng gay gắt" },
          { value: "D", text: "Mâu thuẫn xung đột lợi ích của các nhà tư sản khác nhau" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027229",
        text: "Về phương diện kinh tế - xã hội, giai cấp công nhân lao động bằng phương thức công nghiệp ngày càng hiện đại với đặc điểm nổi bật nào?",
        options: [
          { value: "A", text: "Tạo ra những tiền đề của cải vật chất cho xã hội mới" },
          { value: "B", text: "Sản xuất bằng máy móc" },
          { value: "C", text: "Tất cả các đáp án đều đúng" },
          { value: "D", text: "Lao động có tính chất xã hội hóa và năng suất lao động cao" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027230",
        text: "Trong thời đại hiện nay, ở các nước tư bản chủ nghĩa, mục tiêu đấu tranh lâu dài để thực hiện sứ mệnh lịch sử của giai cấp công nhân về chính trị - xã hội là gì?",
        options: [
          { value: "A", text: "Chống bất công, bất bình đẳng xã hội" },
          { value: "B", text: "Đấu tranh đòi các quyền tự do, dân chủ" },
          { value: "C", text: "Thỏa hiệp với giai cấp tư sản để tiến tới chủ nghĩa xã hội bằng con đường hòa bình" },
          { value: "D", text: "Giành chính quyền về tay giai cấp công nhân và nhân dân lao động" },
        ],
        correctAnswer: "D",
      },
      {
        id: "q_1716027231",
        text: "Những nhược điểm, hạn chế vốn có do hoàn cảnh lịch sử và nguồn gốc xã hội sinh ra của giai cấp công nhân Việt Nam là gì?",
        options: [
          { value: "A", text: "Tư tưởng dễ thỏa hiệp, không kiên quyết đấu tranh đến cùng" },
          { value: "B", text: "Tâm lý chịu đựng, mê tín dị đoan" },
          { value: "C", text: "Tâm lý tiểu nông, thói quen, tập quán lạc hậu từ truyền thống xã hội nông nghiệp cổ truyền" },
          { value: "D", text: "Sự tự phát, lẻ tẻ trong phong trào công nhân, không được giác ngộ tư tưởng chính trị" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027232",
        text: "Theo quan điểm Mác-Lênin, chủ nghĩa cộng sản chia làm mấy giai đoạn",
        options: [
          { value: "A", text: "2 giai đoạn" },
          { value: "B", text: "3 giai đoạn" },
          { value: "C", text: "4 giai đoạn" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027233",
        text: "Mâu thuẫn cơ bản và chủ yếu trong xã hội tư bản chủ nghĩa, bắt buộc nó phải được thay thế bằng hình thái kinh tế - xã hội khác phù hợp hơn là gì?",
        options: [
          { value: "A", text: "Mâu thuẫn giữa tính chất xã hội hóa của lực lượng sản xuất với chế độ chiếm hữu tư nhân tư bản chủ nghĩa về tư liệu sản xuất" },
          { value: "B", text: "Mâu thuẫn giữa tính chất chuyên môn hóa của lực lượng sản xuất với chế độ chiếm hữu tập thể tư bản chủ nghĩa về tư liệu sản xuất" },
          { value: "D", text: "Mâu thuẫn giữa tính chất xã hội hóa về lực lượng sản xuất với chế độ chiếm hữu công cộng về tư liệu sản xuất" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027234",
        text: "Sau khi lật đổ được sự thống trị của giai cấp thống trị, sứ mệnh lịch sử của giai cấp công nhân được tiếp tục thực hiện như thế nào?",
        options: [
          { value: "A", text: "Thực hiện quyền lực, quyền làm chủ của tuyệt đại đa số nhân dân lao động" },
          { value: "B", text: "Xây dựng nền dân chủ xã hội chủ nghĩa" },
          { value: "C", text: "Thiết lập nhà nước kiểu mới, mang bản chất giai cấp công nhân" },
          { value: "D", text: "Tất cả các đáp án đều đúng" },
        ],
        correctAnswer: "D",
      },
      {
        id: "q_1716027235",
        text: "Công tác tôn giáo ở nước ta hiện nay là trách nhiệm của ai?",
        options: [
          { value: "A", text: "Của Đảng Cộng sản Việt Nam" },
          { value: "B", text: "Của Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam" },
          { value: "C", text: "Của cả hệ thống chính trị" },
          { value: "D", text: "Của quần chúng nhân dân" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027236",
        text: "Đâu được xem là điều kiện tiên quyết để xây dựng nền dân chủ xã hội chủ nghĩa Việt Nam?",
        options: [
          { value: "A", text: "Giải phóng dân tộc, giải phóng giai cấp" },
          { value: "B", text: "Chăm lo giáo dục, y tế cho người dân" },
          { value: "C", text: "Độc lập, tự chủ, hòa bình" },
          { value: "D", text: "Xây dựng Đảng Cộng sản Việt Nam trong sạch, vững mạnh" },
        ],
        correctAnswer: "D",
      },
      {
        id: "q_1716027237",
        text: "Để tạo sức mạnh tổng hợp đảm bảo cho thắng lợi của cuộc cách mạng xã hội chủ nghĩa thì cần phải có sự lãnh đạo của tổ chức nào?",
        options: [
          { value: "A", text: "Công đoàn" },
          { value: "B", text: "Đảng Cộng sản" },
          { value: "C", text: "Hội Thanh niên" },
          { value: "D", text: "Đoàn Thanh niên Cộng sản Hồ Chí Minh" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027238",
        text: "Dân chủ xã hội chủ nghĩa có vai trò như thế nào đối với nhà nước xã hội chủ nghĩa?",
        options: [
          { value: "A", text: "Dân chủ xã hội chủ nghĩa tạo ra cơ chế hạn chế quyền lực của nhà nước xã hội chủ nghĩa" },
          { value: "B", text: "Dân chủ xã hội chủ nghĩa là nguyên nhân sinh ra nhà nước xã hội chủ nghĩa" },
          { value: "C", text: "Dân chủ xã hội chủ nghĩa là cơ sở, nền tảng cho việc xây dựng và hoạt động của nhà nước xã hội chủ nghĩa" },
          { value: "D", text: "Tất cả các đáp án đều đúng" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027239",
        text: "Theo V.I.Lênin, đối với những nước chưa có chủ nghĩa tư bản phát triển cao thì cần phải có một thời kỳ gì để từ chủ nghĩa tư bản lên chủ nghĩa xã hội?",
        options: [
          { value: "A", text: "Thời kỳ khai sáng" },
          { value: "B", text: "Thời kỳ tiến lên" },
          { value: "C", text: "Thời kỳ quá độ" },
          { value: "D", text: "Thời kỳ phát triển" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027240",
        text: 'Thuật ngữ "giai cấp công nhân" được các nhà kinh điển xác định theo bao nhiêu phương diện cơ bản?',
        options: [
          { value: "A", text: "2" },
          { value: "B", text: "3" },
          { value: "C", text: "4" },
          { value: "D", text: "5" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027241",
        text: 'Khi nghiên cứu thực tiễn phong trào đấu tranh của giai cấp công nhân châu Âu từ giữa thế kỉ XIX, C.Mác và Ph. Ang ghen cho rằng giai cấp công nhân thất bại là do đã không liên minh được với "người bạn đồng hành nhiên" của minh. Người bạn đó là giai cấp nào?',
        options: [
          { value: "A", text: "Giai cấp tư sản" },
          { value: "B", text: "Giai cấp nông dân" },
          { value: "C", text: "Giai cấp địa chủ phong kiến" },
          { value: "D", text: "Tầng lớp doanh nhân" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027242",
        text: "Sự ra đời của công nghiệp cơ khí là bước tiến to lớn của lực lượng sản xuất trong cuộc cách mạng công nghiệp lần thứ mấy?",
        options: [
          { value: "A", text: "Cách mạng công nghiệp lần thứ nhất" },
          { value: "B", text: "Cách mạng công nghiệp lần thứ hai" },
          { value: "C", text: "Cách mạng công nghiệp lần thứ ba" },
          { value: "D", text: "Cách mạng công nghiệp lần thứ tư" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027243",
        text: "Đặc trưng bản chất của chủ nghĩa xã hội về phương diện kinh tế là gì? Chọn 2 đáp án đúng",
        options: [
          { value: "A", text: "Nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại" },
          { value: "B", text: "Chế độ công hữu về tư liệu sản xuất chủ yếu" },
          { value: "C", text: "Nền kinh tế phát triển cao dựa trên lực lượng sản xuất công nghiệp cơ khí" },
          { value: "D", text: "Chế độ sở hữu tập thể, hỗn hợp của tư nhân và công cộng" },
        ],
        correctAnswer: "AB",
      },
      {
        id: "q_1716027244",
        text: "Cơ cấu kinh tế trong thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam tuy vận động theo cơ chế thị trường, song có sự quản lý của:",
        options: [
          { value: "A", text: "Giai cấp công nhân" },
          { value: "B", text: "Đảng Cộng sản Việt Nam" },
          { value: "C", text: "Nhà nước pháp quyền xã hội chủ nghĩa" },
          { value: "D", text: "Tầng lớp thống trị trong xã hội" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027245",
        text: "Trong Văn kiện Đại hội đại biểu toàn quốc lần thứ IX, Đảng Cộng sản Việt Nam đã nêu rõ:",
        options: [
          { value: "A", text: "Vấn đề dân tộc có vai trò quan trọng đối với sự nghiệp phát triển kinh tế - xã hội ở nước ta hiện nay" },
          { value: "B", text: "Vấn đề dân tộc và đoàn kết các dân tộc có vị trí quyết định đến sự sống còn của dân tộc ta hiện nay" },
          { value: "C", text: "Vấn đề dân tộc và đoàn kết các dân tộc luôn có vị trí chiến lược trong sự nghiệp cách mạng" },
          { value: "D", text: "Tất cả các đáp án đều đúng" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027246",
        text: "Đặc điểm nào trong 06 đặc điểm dân tộc ở Việt Nam đã tạo điều kiện thuận lợi để các dân tộc tăng cường hiệu biết, mở rộng giao lưu, giúp đỡ nhau cùng phát triển?",
        options: [
          { value: "A", text: "Có sự chênh lệch về dân số giữa các tộc người" },
          { value: "B", text: "Dân tộc thiểu số ở Việt Nam phân bố chủ yếu ở các địa bàn có vị trí chiến lược quan trọng" },
          { value: "C", text: "Dân tộc ở Việt Nam có trình độ phát triển không đều" },
          { value: "D", text: "Các dân tộc cư trú xen kẽ nhau" },
        ],
        correctAnswer: "D",
      },
      {
        id: "q_1716027247",
        text: '"Dân chủ quân sự" dùng để chỉ chế độ dân chủ nào?',
        options: [
          { value: "A", text: "Chế độ cộng sản nguyên thủy" },
          { value: "B", text: "Chế độ tư bản chủ nghĩa" },
          { value: "C", text: "Chế độ phong kiến" },
          { value: "D", text: "Chế độ chiếm hữu nô lệ" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027248",
        text: 'Trong giai đoạn hiện nay, tại sao Nhà nước lại khuyến khích mỗi cặp vợ chồng "nên sinh đủ hai con"?',
        options: [
          { value: "A", text: "Do Việt Nam đang chuyển sang giai đoạn già hóa dân số" },
          { value: "B", text: "Do dân số Việt Nam quá ít so với mật độ trung bình của thế giới" },
          { value: "C", text: "Do tỷ lệ tử vong và tuổi thọ trung bình người Việt Nam quá thấp" },
          { value: "D", text: "Tất cả các đáp án đều đúng" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027249",
        text: "Gia đình có bao nhiêu chức năng cơ bản?",
        options: [
          { value: "A", text: "3" },
          { value: "B", text: "4" },
          { value: "C", text: "5" },
          { value: "D", text: "6" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027250",
        text: "Một trong ba phát kiến vĩ đại của C.Mác và Ph.Ăngghen là gì?",
        options: [
          { value: "A", text: "Thành lập quốc tế cộng sản" },
          { value: "B", text: "Ủng hộ nhân dân lao động" },
          { value: "C", text: "Học thuyết về sứ mệnh lịch sử toàn thế giới của giai cấp công nhân" },
          { value: "D", text: "Nhận định và tìm ra mâu thuẫn giai cấp trong xã hội" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027251",
        text: 'Vấn đề "Giai cấp tư sản, trong quá trình thống trị giai cấp chưa đầy một thế kỷ, đã tạo ra những lực lượng sản xuất nhiều hơn và đồ sộ hơn lực lượng sản xuất của tất cả các thế hệ trước kia gộp lại được C.Mác và Ph Angghen viết trong tác phẩm nào dưới đây?',
        options: [
          { value: "A", text: "Gia đình thần thánh" },
          { value: "B", text: "Tuyên ngôn của Đảng Cộng sản" },
          { value: "C", text: "Tư bản" },
          { value: "D", text: "Góp phần phê phán triết học pháp quyền của Hêghen" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027252",
        text: "Ở nước ta, nội dung chính trị của liên minh công - nông - trí thức thể hiện ở điểm gì?",
        options: [
          { value: "A", text: "Giữ vững lập trường chính trị - tư tưởng của giai cấp công nhân, vai trò lãnh đạo của Đảng Cộng sản Việt Nam, giữ vững độc lập dân tộc và định hướng đi lên chủ nghĩa xã hội" },
          { value: "B", text: "Giữ vững nền kinh tế thị trường theo hướng hiện đại, kiên định con đường đi lên chủ nghĩa xã hội" },
          { value: "C", text: "Giữ vững địa vị thống trị của giai cấp công nhân thông qua Đảng Cộng sản Việt Nam trong mối liên minh giai cấp" },
          { value: "D", text: "Giữ vững vai trò định hướng, kim chỉ nam của kinh tế nhà nước trong nền kinh tế thị trường tự do hiện đại" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027253",
        text: "Xu hướng phát triển cơ cấu xã hội - giai cấp ở Việt Nam trong thời kỳ quá độ mang tính đa dạng và thống nhất chủ yếu do yếu tố nào quyết định?",
        options: [
          { value: "A", text: "Do trình độ phát triển không đồng đều" },
          { value: "B", text: "Do nền kinh tế nhiều thành phần" },
          { value: "C", text: "Do sự mong muốn của giai cấp công nhân" },
          { value: "D", text: "Do lịch sử đấu tranh giai cấp để lại" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027254",
        text: "Yếu tố nào quyết định sự liên minh giữa giai cấp công nhân, giai cấp nông dân và tầng lớp trí thức?",
        options: [
          { value: "A", text: "Do giai cấp công nhân mong muốn" },
          { value: "B", text: "Do có cùng một kẻ thù là giai cấp tư sản" },
          { value: "C", text: "Do mục tiêu về chính trị của giai cấp công nhân" },
          { value: "D", text: "Do có những lợi ích cơ bản thống nhất với nhau" },
        ],
        correctAnswer: "D",
      },
      {
        id: "q_1716027255",
        text: "Giai cấp công nhân Việt Nam ra đời trong bối cảnh nào?",
        options: [
          { value: "A", text: "Trong bối cảnh của các cuộc khai thác thuộc địa của thực dẫn Pháp ở Việt Nam" },
          { value: "B", text: "Trong giai đoạn công nghiệp hóa phát triên mạnh mẽ ở nước ta" },
          { value: "C", text: "Trong phong trào dầu tranh giành chinh quyên từ khi có Đảng Cộng sản" },
          { value: "D", text: "Trong lúc Đảng Công sản đã giảnh dược chính quyền" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027256",
        text: "Những giá trị nào sau đây được nhân loại thừa nhận và phấn đấu thực hiện?",
        options: [
          { value: "A", text: "Lao động, sáng tạo, công bằng, dân chủ, bình đẳng, tự do" },
          { value: "B", text: "Lao động, sáng tạo, công bằng, dân chủ, bình đẳng" },
          { value: "C", text: "Lao động, sáng tạo, công bằng, dân chủ, tự do" },
          { value: "D", text: "Lao động, sáng tạo, công bằng, dân chủ, binh đẳng, phát triển" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027257",
        text: "Trong thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam hiện nay, hình thức phân phối nào",
        options: [
          { value: "A", text: "Phân phối theo lao động" },
          { value: "B", text: "Phân phối quỹ phúc lợi xã hội" },
          { value: "C", text: "Phân phối theo nhu cầu" },
          { value: "D", text: "Phân phối theo bao cấp" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027258",
        text: "Trong thời kì quá độ lên chủ nghĩa xã hội, vấn đề tín ngưỡng và tôn giáo của nhân dân cần được giải quyết trên cơ sở nguyên tắc nào?",
        options: [
          { value: "A", text: "Hạn chế sự tham gia vào tôn giáo của nhân dân bằng các chính sách xã hội, không can thiệp bằng mệnh lệnh hành chính" },
          { value: "B", text: "Quyền tự do tín ngưỡng, tôn giáo được tôn trọng và bảo vệ, không ai có quyền can thiệp bằng bất cứ hình thức nào" },
          { value: "C", text: "Nhà nước liên hiệp với giáo hội các tôn giáo để điều chỉnh họ theo hướng duy vật, vô thần dần dần theo thời gian" },
          { value: "D", text: "Có những ưu tiên đối với công dân không theo bất cứ tôn giáo nào" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027259",
        text: "Trong phạm vi một quốc gia, xu hướng nào thể hiện sự nỗ lực của từng dân tộc để đi tới sự tự do, bình đẳng và phồn vinh của dân tộc mình ?",
        options: [
          { value: "A", text: "Cộng đồng dân cư muốn tách ra để hình thành cộng đồng dân tộc độc lập" },
          { value: "B", text: "Cộng đồng dân cư của một quốc gia thành lập công đồng dân tộc độc lập" },
          { value: "C", text: "Cộng đồng xã hội muốn tách ra để phát triển đất nước" },
          { value: "D", text: "Cộng đồng dân cư muốn tách ra để hình thành công đồng dân tộc" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027260",
        text: "Tính quần chúng của tôn giáo cho thấy điều gì?",
        options: [
          { value: "A", text: "Tôn giáo là một hiện tượng cứu rỗi dành cho những người yếu thế trong xã hội" },
          { value: "B", text: "Tôn giáo là một hiện tượng xã hội phổ biến ở tất cả các quốc gia, dân tộc và châu lục" },
          { value: "C", text: "Tôn giáo tồn tại trong suốt hàng nghìn năm lịch sử và được quần chúng nhân dân xây dựng và phát triển" },
          { value: "D", text: "Tất cả các đáp án đều đúng" },
        ],
        correctAnswer: "D",
      },
      {
        id: "q_1716027261",
        text: "Đâu là một tôn giáo nội sinh của Việt Nam?",
        options: [
          { value: "A", text: "Phật giáo" },
          { value: "B", text: "Tin lành" },
          { value: "C", text: "Hội Thánh Đức chúa trời" },
          { value: "D", text: "Đạo Cao đài" },
        ],
        correctAnswer: "D",
      },
      {
        id: "q_1716027262",
        text: "Quan hệ dân tộc và tôn giáo là gì?",
        options: [
          { value: "A", text: "Là sự liên kết, tác động qua lại, chi phối lẫn nhau giữa dân tộc với tôn giáo trong nội bộ một quốc gia, hoặc giữa các quốc gia với nhau trong mọi lĩnh vực đời sống xã hội" },
          { value: "B", text: "Là sự liên kết, tác động qua lại, chi phối lẫn nhau giữa dân tộc với tôn giáo trong nội bộ một quốc gia trong mọi lĩnh vực đời sống xã hội" },
          { value: "C", text: "Là sự liên kết, tác động qua lại, chi phối lẫn nhau giữa dân tộc với tôn giáo giữa các quốc gia với nhau trong mọi lĩnh vực đời sống xã hội" },
          { value: "D", text: "Là đấu tranh bài trừ lẫn nhau giữa dân tộc với tôn giáo trong nội bộ một quốc gia, hoặc giữa các quốc gia với nhau trong mọi lĩnh vực đời sống xã hội" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027263",
        text: "Nhà nước xã hội chủ nghĩa là nhà nước của",
        options: [
          { value: "A", text: "Thiểu số thống trị đa số" },
          { value: "B", text: "Đa số thống trị thiểu số" },
          { value: "C", text: "Sự dung hòa lợi ích các giai cấp" },
          { value: "D", text: "Sự đấu tranh quyền lực trong bối cảnh mới" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027264",
        text: "Đâu là truyền thống quý báu của các dân tộc ở Việt Nam góp phần quyết định mọi thắng lợi của dân tộc trong các giai đoạn lịch sử?",
        options: [
          { value: "A", text: "Yêu nước, yêu quê hương" },
          { value: "B", text: "Đoàn kết dân tộc" },
          { value: "C", text: "Tinh thần học tập không ngừng" },
          { value: "D", text: "Hiếu thảo với ông bà cha mẹ" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027265",
        text: "Phần lớn các tín đồ tôn giáo ở nước ta có đặc điểm chung là gì?",
        options: [
          { value: "A", text: "Là nhân dân lao động, có lòng yêu nước, tinh thần dân tộc" },
          { value: "B", text: "Là giai cấp yếu thế, có cuộc sống cơ cực, tin vào tôn giáo như một yếu tố giải thoát" },
          { value: "C", text: "Có ý thức chống lại chủ nghĩa duy vật biện chứng" },
          { value: "D", text: "Tham gia vào các phong trào đấu tranh chống chính quyền" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027266",
        text: "Để một tôn giáo ra đời cần bao nhiêu nguồn gốc?",
        options: [
          { value: "A", text: "3" },
          { value: "B", text: "4" },
          { value: "C", text: "5" },
          { value: "D", text: "6" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027267",
        text: "Nhà nước pháp quyền xã hội chủ nghĩa ở Việt Nam mang bản chất giai cấp của giai cấp nào?",
        options: [
          { value: "A", text: "Công nhân" },
          { value: "B", text: "Nông dân" },
          { value: "C", text: "Tư sản" },
          { value: "D", text: "Trí thức" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027268",
        text: "Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam coi yếu tố nào là chủ thể, là trung tâm của sự phát triển?",
        options: [
          { value: "A", text: "Con người" },
          { value: "B", text: "Giai cấp công nhân" },
          { value: "C", text: "Nhân dân lao động" },
          { value: "D", text: "Đảng Cộng sản Việt Nam" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027269",
        text: "Dân chủ trong lĩnh vực nào là quan trọng hàng đầu và nổi bật nhất?",
        options: [
          { value: "A", text: "Trong lĩnh vực kinh tế và chính trị" },
          { value: "B", text: "Trong lĩnh vực văn hóa tinh thần và tư tưởng" },
          { value: "C", text: "Trong lĩnh vực chính trị và tư tưởng" },
          { value: "D", text: "Trong lĩnh vực kinh tế và tư tưởng" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027270",
        text: "Dân chủ xã hội chủ nghĩa được xem là phôi thai từ thực tiễn đấu tranh giai cấp ở quốc gia nào?",
        options: [
          { value: "A", text: "Ở Đức" },
          { value: "B", text: "Ở Pháp" },
          { value: "C", text: "Ở Liên Xô" },
          { value: "D", text: "Ở Trung Quốc" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027271",
        text: "Nâng cao chất lượng đội ngũ cán bộ, công chức về những phẩm chất nào?",
        options: [
          { value: "A", text: "Bản lĩnh kinh tế, phẩm chất đạo đức, năng lực lãnh đạo, điều hành quản lý đất nước" },
          { value: "B", text: "Bản lĩnh chính trị, phẩm chất đạo đức, năng lực lãnh đạo, điều hành quản lý đất nước" },
          { value: "C", text: "Bản lĩnh quốc phòng, phẩm chất đạo đức, năng lực lãnh đạo, điều hành quản lý đất nước" },
          { value: "D", text: "Bản lĩnh xã hội, phẩm chất đạo đức, năng lực lãnh đạo, điều hành quản lý đất nước" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027272",
        text: "Trong bối cảnh hội nhập kinh tế quốc tế và cạnh tranh hàng hóa trong khu vực và thế giới, kinh tế gia đình gặp nhiều khó khăn, trở ngại do nguyên nhân gì?",
        options: [
          { value: "A", text: "Do gia đình ngày càng ít thành viên hơn" },
          { value: "B", text: "Do thói quen, tập quán an phận, ngại thay đổi của nền tảng gia đình cũ" },
          { value: "C", text: "Do kinh tế gia đình phản lớn có quy mô nhỏ, lao động ít, tự sản xuất là chính" },
          { value: "D", text: "Do chính sách điều tiết của Nhà nước thúc đẩy kinh tế hộ gia đình phát triển thành doanh nghiệp" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027273",
        text: "Trong quá trình xây dựng chủ nghĩa xã hội, chủ trương bảo vệ chế độ hôn nhân một vợ, một chồng nhằm mục đích gì",
        options: [
          { value: "A", text: "Thực hiện bình đẳng trong gia đình, giải phóng phụ nữ" },
          { value: "B", text: "Điều hòa mâu thuẫn trong gia đình" },
          { value: "C", text: "Hạn chế các tệ nạn xã hội như mại dâm, bạo lực gia đình" },
          { value: "D", text: "Đảm bảo hiệu quả cho sự quản lý nhà nước về gia đình" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027274",
        text: "Quan hệ nào được coi là quan hệ cơ bản nhất trong gia đình?",
        options: [
          { value: "A", text: "Quan hệ hôn nhân và huyết thống" },
          { value: "B", text: "Quan hệ quần tụ trong một không gian sinh tồn" },
          { value: "C", text: "Quan hệ hôn nhân" },
          { value: "D", text: "Quan hệ nuôi dưỡng" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027275",
        text: "Trong gia đình truyền thống, ai được xem là trụ cột của gia đình?",
        options: [
          { value: "A", text: "Người vợ" },
          { value: "B", text: "Người chồng" },
          { value: "C", text: "Cả vợ và chồng" },
          { value: "D", text: "Người con trong gia đình" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027276",
        text: "Trong các chế độ xã hội trước, sự thống trị của người đàn ông trong gia đình là kết quả của việc gì?",
        options: [
          { value: "A", text: "Của sự thống trị về kinh tế" },
          { value: "B", text: "Của sự phát triển chế độ quân chủ" },
          { value: "C", text: "Của sự thống trị về văn hóa" },
          { value: "D", text: "Của sự thống trị về chính trị" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027277",
        text: "Đáp án nào không phải là một phương pháp nghiên cứu của chủ nghĩa xã hội khoa học?",
        options: [
          { value: "A", text: "Phương pháp trừu tượng hóa khoa học" },
          { value: "B", text: "Phương pháp kết hợp lịch sử và logic" },
          { value: "C", text: "Phương pháp khảo sát và phân tích về mặt chính trị xã hội" },
          { value: "D", text: "Phương pháp so sánh" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027278",
        text: "Theo nghĩa rộng, chủ nghĩa xã hội khoa học được hiểu là gì?",
        options: [
          { value: "A", text: "Là một trong ba bộ phận hợp thành chủ nghĩa Mác - Lênin" },
          { value: "B", text: "Là chủ nghĩa Mác - Lênin, luận giải từ các giác độ triết học, kinh tế học chính trị và chính trị xã hội về sự chuyển biến tất yếu của xã hội loài người từ chủ nghĩa tư bản lên chủ nghĩa xã hội và chủ nghĩa cộng sản" },
          { value: "C", text: "Là một học thuyết trình bày sự ra đời, phát triển và suy vong của chủ nghĩa tư bản" },
          { value: "D", text: "Là một hình thái kinh tế - xã hội trong tiến trình lịch sử tự nhiên của loài người" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027279",
        text: "Trong thời kỳ quá độ lên chủ nghĩa xã hội, các giai cấp, tầng lớp trong cơ cấu xã hội - giai cấp biến đổi trong mỗi quan hệ như thế nào?",
        options: [
          { value: "A", text: "Đấu tranh với nhau bởi cánh mỗi" },
          { value: "B", text: "Vừa hợp tác vừa đấu tranh và ngày càng xích lại gần nhau" },
          { value: "C", text: "Hợp tác, liên minh toàn diện với nhau" },
          { value: "D", text: "Không còn sự phân chia giai cấp" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027280",
        text: "Trong các cơ cấu xã hội, cơ cấu xã hội nào có vị trí quan trọng hàng đầu, chi phối các loại hình cơ cấu xã hội khác?",
        options: [
          { value: "A", text: "Cơ cấu xã hội - dân tộc" },
          { value: "B", text: "Cơ cấu xã hội dân cư" },
          { value: "C", text: "Cơ cấu xã hội - nghề nghiệp" },
          { value: "D", text: "Cơ cấu xã hội - giai cấp" },
        ],
        correctAnswer: "D",
      },
      {
        id: "q_1716027281",
        text: "Trong cơ cấu xã hội - giai cấp ở Việt Nam hiện nay, giai cấp, tầng lớp nào là lực lượng sáng tạo đặc biệt quan trọng trong tiến trình đẩy mạnh công nghiệp hóa, hiện đại hóa, xây dựng nên kinh tế tri thức?",
        options: [
          { value: "A", text: "Giai cấp công nhân" },
          { value: "B", text: "Giai cấp nông dân" },
          { value: "C", text: "Tầng lớp trí thức" },
          { value: "D", text: "Tầng lớp doanh nhân" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027282",
        text: "Đâu không phải là một tầng lớp xã hội mới xuất hiện và phát triển trong thời kỳ quá độ lên chủ nghĩa xã hội?",
        options: [
          { value: "A", text: "Tầng lớp doanh nhân, tiểu chủ" },
          { value: "B", text: "Tầng lớp những người giàu có" },
          { value: "C", text: "Tầng lớp trung lưu" },
          { value: "D", text: "Tầng lớp trí thức" },
        ],
        correctAnswer: "D",
      },
      {
        id: "q_1716027283",
        text: "Theo nghĩa hẹp, các tiêu chí xác định các đặc trưng cơ bản của một dân tộc - tộc người là gì? Lựa chọn các đáp án đúng.",
        options: [
          { value: "A", text: "Cộng đồng về ngôn ngữ" },
          { value: "B", text: "Cộng đồng về văn hóa" },
          { value: "C", text: "Ý thức tự giác tộc người" },
          { value: "D", text: "Cộng đồng về lãnh thổ" },
        ],
        correctAnswer: "ABC",
      },
      {
        id: "q_1716027284",
        text: "Hành vi nào dưới đây được cho là lợi dụng tín ngưỡng, tôn giáo mà Nhà nước Việt Nam nghiêm cấm? Chọn các đáp án đúng.",
        options: [
          { value: "A", text: "Hoạt động mê tín dị đoan" },
          { value: "B", text: "Lợi dụng giáo dân và tôn giáo để hoạt động trái pháp luật và chính sách của Nhà nước" },
          { value: "C", text: "Kích động chia rẽ nhân dân, chia rẽ dân tộc, gây rối, xâm phạm an ninh quốc gia" },
          { value: "D", text: "Kêu gọi sự giúp đỡ từ tổ chức tôn giáo quốc tế đối với các tôn giáo du nhập từ bên ngoài" },
        ],
        correctAnswer: "ABC",
      },
      {
        id: "q_1716027285",
        text: "Cho đến nay, kinh tế gia đình Việt Nam đã có bước chuyển biến mang tính bước ngoặt nào? Chọn các đáp án đúng",
        options: [
          { value: "A", text: "Từ kinh tế tự cấp, tự túc thành kinh tế hàng hóa" },
          { value: "B", text: "Từ kinh tế hàng hóa thành kinh tế tự cấp, tự túc" },
          { value: "C", text: "Từ đơn vị kinh tế đáp ứng nhu cầu của thị trường quốc gia thành đơn vị kinh tế đáp ứng nhu cầu của thị trường toàn cầu" },
          { value: "D", text: "Từ kinh tế kế hoạch hóa tập trung sang kinh tế thị trường tự do" },
        ],
        correctAnswer: "AC",
      },
      {
        id: "q_1716027286",
        text: "Những biến đổi và khác biệt của giai cấp công nhân hiện đại so với giai cấp công nhân thế kỷ XIX là gì?",
        options: [
          { value: "A", text: "Xu hướng trí tuệ hóa tăng nhanh" },
          { value: "B", text: "Xu hướng trung lưu hóa gia tăng" },
          { value: "C", text: "Là giai cấp giữ vai trò lãnh đạo, cầm quyền trong quá trình xây dựng chủ nghĩa xã hội ở một số quốc gia" },
          { value: "D", text: "Xu hướng bản địa hóa gia tăng nhanh chóng" },
        ],
        correctAnswer: "ABC",
      },
      {
        id: "q_1716027287",
        text: "Trong thời kỳ đối mới, giai cấp công nhân nước ta có sứ mệnh lịch sử to lớn là gì?",
        options: [
          { value: "A", text: "Giai cấp lãnh đạo cách mạng thông qua đội tiên phong là Đảng Cộng sản Việt Nam" },
          { value: "B", text: "Giai cấp tiêu biểu cách mạng thông qua đội tiên phong là Đảng Cộng sản Việt Nam" },
          { value: "C", text: "Giai cấp đại diện thông qua đội tiên phong là Đảng Cộng sản Việt Nam" },
          { value: "D", text: "Giai cấp nòng cốt thông qua đội tiên phong là Đảng Cộng sản Việt Nam" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027288",
        text: "Dựa trên phương diện chính trị - xã hội, giai cấp công nhân được hiểu là:",
        options: [
          { value: "A", text: "Là những người nông dân nghèo bị bóc lột sức lao động" },
          { value: "B", text: "Là những người trí thức tham gia vào sản xuất" },
          { value: "C", text: "Là sản phẩm xã hội của quá trình phát triển tư bản chủ nghĩa" },
          { value: "D", text: "A và B đều đúng" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027289",
        text: "Cùng với sự phát triển của đại công nghiệp, các giai cấp khác đều suy tàn và tiêu vong, giai cấp nào là sản phẩm của bản thân nền đại công nghiệp?",
        options: [
          { value: "A", text: "Nó lệ" },
          { value: "B", text: "Tư sản" },
          { value: "C", text: "Công nhân" },
          { value: "D", text: "Nông dân" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027290",
        text: "Giai cấp nào là đại biểu cho lực lượng sản xuất tiên tiến, cho phương thức sản xuất hiện đại?",
        options: [
          { value: "A", text: "Tư sản" },
          { value: "B", text: "Nông dân" },
          { value: "C", text: "Công nhân" },
          { value: "D", text: "Thống trị" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027291",
        text: "Cách mạng vô sản là:",
        options: [
          { value: "A", text: "Cuộc cách mạng của giai cấp nông dân và nhân dân lao động dưới sự lãnh đạo của Đảng Cộng sản, được thực hiện bằng con đường bạo lực cách mạng nhằm lật đổ chế độ tư bản chủ nghĩa, thiết lập nhà nước chuyên chính vô sản." },
          { value: "B", text: "Cuộc cách mạng của giai cấp công nhân và nhân dân lao động dưới sự lãnh đạo của Đảng Cộng sản, trên thực tế được thực hiện bằng con đường tuyên truyền giáo dục nhằm lật đổ chế độ tư bản chủ nghĩa, thiết lập nhà nước chuyên chính vô sản." },
          { value: "C", text: "Cuộc cách mạng của giai cấp công nhân và nhân dân lao động dưới sự lãnh đạo của Đảng Cộng sản, trên thực tế được thực hiện bằng con đường bạo lực cách mạng nhằm lật đổ chế độ phong kiến, thiết lập nhà nước chuyên chính vô sản." },
          { value: "D", text: "Cuộc cách mạng của giai cấp công nhân và nhân dân lao động dưới sự lãnh đạo của Đảng Cộng sản, được thực hiện bằng con đường bạo lực cách mạng nhằm lật đổ chế độ tư bản chủ nghĩa, thiết lập nhà nước chuyên" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027292",
        text: "Thời kỳ quá độ từ tư bản lên chủ nghĩa xã hội còn tồn tại nhiều tư tưởng khác nhau, chủ yếu trong đó là các tư tưởng nào?",
        options: [
          { value: "A", text: "Tư tưởng vô sản và tư tưởng tư sản" },
          { value: "B", text: "Tư tưởng vô sản và tư tưởng địa chủ phong kiến" },
          { value: "C", text: "Tư tưởng chủ nô và tư tưởng tư sản" },
          { value: "D", text: "Tư tưởng vô sản và tư tưởng chủ nô" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027293",
        text: "Quá độ từ xã hội tiên tư bản chủ nghĩa phát triển lên chủ nghĩa xã hội là hình thức quá độ nào?",
        options: [
          { value: "A", text: "Quá độ gián tiếp" },
          { value: "B", text: "Quá độ trực tiếp" },
          { value: "C", text: "Quá độ bộ phận" },
          { value: "D", text: "Quá độ toàn diện" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027294",
        text: "Trên lĩnh vực kinh tế, trong thời kỳ quá độ lên chủ nghĩa xã hội tất yếu tồn tại nên kinh tế như thế nào?",
        options: [
          { value: "A", text: "Kinh tế nhiều thành phần, trong đó có thành phần đối lập" },
          { value: "B", text: "Kinh tế kế hoạch hóa tập trung cao độ" },
          { value: "C", text: "Kinh tế thị trường tự do" },
          { value: "D", text: "Kinh tế hàng hóa giản đơn" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027295",
        text: "Điền cụm từ thích hợp vào (.): Tôn giáo là một hiện tượng .... - .... do con người sáng tạo.",
        options: [
          { value: "A", text: "Xã hội/ văn hóa" },
          { value: "B", text: "Kinh tế/ văn hóa" },
          { value: "C", text: "Chính trị/ xã hội" },
          { value: "D", text: "Giáo dục/ y tế" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027296",
        text: "Theo chủ nghĩa Mác - Lênin, tôn giáo là gì?",
        options: [
          { value: "A", text: "Là một thiết chế xã hội phản ánh chân thật hiện thực khách quan" },
          { value: "B", text: "Là một hình thái ý thức xã hội, phản ánh hư ảo hiện thực khách quan" },
          { value: "C", text: "Là một cơ sở xã hội, phản ánh các ý chí, nguyện vọng của tín đồ theo một giáo lý nào đó" },
          { value: "D", text: "Là một thực thể xã hội, điều chỉnh tâm lý con người hiệu quả" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027297",
        text: "Các tôn giáo ở nước ta có đặc điểm tồn tại như thế nào trong lòng quốc gia - dân tộc?",
        options: [
          { value: "A", text: "Đa dạng, đan xen, chung sống hòa bình và không có xung đột, chiến tranh tôn giáo" },
          { value: "B", text: "Đa dạng, đan xen, cạnh tranh với nhau" },
          { value: "C", text: "Đa dạng, đan xen, đấu tranh với nhau để giành vị trí thống trị" },
          { value: "D", text: "Thống nhất dưới sự thống trị của Đảng Cộng sản Việt Nam" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027298",
        text: "Trong nhà nước xã hội chủ nghĩa Việt Nam, cơ quan nào là cơ quan quyền lực nhà nước cao nhất?",
        options: [
          { value: "A", text: "Chính phủ" },
          { value: "B", text: "Tòa án nhân dân" },
          { value: "C", text: "Viện kiểm sát nhân dân" },
          { value: "D", text: "Quốc hội" },
        ],
        correctAnswer: "D",
      },
      {
        id: "q_1716027299",
        text: "Nhiệm vụ cấp bách, lâu dài của quá trình xây dựng Nhà nước pháp quyền xã hội chủ nghĩa ở nước ta là gì?",
        options: [
          { value: "A", text: "Phòng chống tham nhũng, lãng phí và thực hành tiết kiệm" },
          { value: "B", text: "Miễn nhiệm những người không hoàn thành nhiệm vụ" },
          { value: "C", text: "Nâng cao chất lượng đội ngũ cán bộ, công chức" },
          { value: "D", text: "Có chính sách đãi ngộ, động viên, khuyến khích cán bộ, công chức" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027300",
        text: "Dân chủ được hiểu là:",
        options: [
          { value: "A", text: "Một giá trị xã hội phản ánh các quyền cơ bản của con người; là một hình thức tổ chức nhà nước của giai cấp cầm quyền; có quá trình ra đời, phát triển cùng với lịch sử xã hội nhân loại" },
          { value: "B", text: "Một giá trị xã hội phản ánh các quyền cơ bản của con người; là một hình thức tổ chức nhà nước của giai cấp tư sản cầm quyền; có quá trình ra đời, phát triển cùng với lịch sử xã hội nhân loại" },
          { value: "C", text: "Một giá trị xã hội phản ánh các quyền cơ bản của con người; là một hình thức tổ chức nhà nước của giai cấp thống trị cầm quyền; có quá trình ra đời, phát triển từ xã hội chiếm hữu nô lệ" },
          { value: "D", text: "Một giá trị xã hội phản ánh các quyền cơ bản của con người; là một hình thức tổ chức nhà nước của giai cấp vô sản cầm quyền; có quá trình ra đời, phát triển cùng với lịch sử xã hội nhân loại" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027301",
        text: "Hình thức dân chủ nào ở Việt Nam mà thông qua nó, người dân bằng hành động của mình thực hiện quyền làm chủ nhà nước và xã hội, không thông qua chủ thể trung gian?",
        options: [
          { value: "A", text: "Hình thức dân chủ trực tiếp" },
          { value: "B", text: "Hình thức dân chủ gián tiếp" },
          { value: "C", text: "Hình thức dân chủ đại nghị" },
          { value: "D", text: "Hình thức dân chủ công khai" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027302",
        text: "Gia đình văn hóa là một mô hình gia đình như thê nào?",
        options: [
          { value: "A", text: "Phát triển" },
          { value: "B", text: "Tiến bộ" },
          { value: "C", text: "Huyết thống" },
          { value: "D", text: "Không được bảo vệ" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027303",
        text: "Ở nước ta hiện nay, sự bền vững của hôn nhân phụ thuộc vào yếu tố nào?",
        options: [
          { value: "A", text: "Yếu tố con cái nhiều hay ít" },
          { value: "B", text: "Yếu tố con cái là trai hay gái" },
          { value: "C", text: "Yếu tố truyền thống gia trưởng" },
          { value: "D", text: "Yếu tố tâm lý, tình cảm và kinh tế" },
        ],
        correctAnswer: "D",
      },
      {
        id: "q_1716027304",
        text: "Đâu không phải là một cơ sở xây dựng gia đình trong thời kỳ quá độ lên chủ nghĩa xã hội?",
        options: [
          { value: "A", text: "Cơ sở kinh tế - xã hội" },
          { value: "B", text: "Cơ sở chính trị - xã hội" },
          { value: "C", text: "Cơ sở văn hóa" },
          { value: "D", text: "Cơ sở lao động, sản xuất" },
        ],
        correctAnswer: "D",
      },
      {
        id: "q_1716027305",
        text: "Tại sao trong gia đình Việt Nam truyền thống trước kia lại quan niệm có càng đông con càng tốt và nhất phải có con trai nối dõi?",
        options: [
          { value: "A", text: "Do dân số ít và nam giới quá hiếm" },
          { value: "B", text: "Do không có các biện pháp kế hoạch hóa gia đình" },
          { value: "C", text: "Do con cái mang họ cha" },
          { value: "D", text: "Do ảnh hưởng phong tục, tập quán và nhu cầu sản xuất nông nghiệp" },
        ],
        correctAnswer: "D",
      },
      {
        id: "q_1716027306",
        text: "Sự biến đổi của cơ cấu xã hội - giai cấp tất yếu sẽ ảnh hưởng và tác động như thế nào đến toàn bộ cơ cấu xã hội?",
        options: [
          { value: "A", text: "Ảnh hưởng đến sự biến đổi của các cơ cấu xã hội" },
          { value: "B", text: "Tác động đến sự biến đổi của toàn bộ cơ cấu xã hội" },
          { value: "C", text: "Ảnh hưởng đến sự biến đổi của các cơ cấu xã hội khác và tác động đến sự biến đổi của toàn bộ cơ cấu" },
          { value: "D", text: "Ảnh hưởng đến sự phát triển và quản lý xã hội" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027307",
        text: "Nội dung nào quan trọng nhất trong các nội dung liên minh công-nông-trí thức?",
        options: [
          { value: "A", text: "Chính trị" },
          { value: "B", text: "Kinh tế" },
          { value: "C", text: "Tư tưởng" },
          { value: "D", text: "Văn hóa - xã hội" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027308",
        text: "Cơ cấu xã hội - giai cấp của nước ta trước thời kỳ đổi mới bao gồm các giai cấp, tầng lớp nào?",
        options: [
          { value: "A", text: "Giai cấp công nhân" },
          { value: "B", text: "Giai cấp nông dân" },
          { value: "C", text: "Đội ngũ trí thức" },
          { value: "D", text: "Đội ngũ đảng viên" },
        ],
        correctAnswer: "ABC",
      },
      {
        id: "q_1716027309",
        text: 'Vấn đề .. phải "bắc những nhịp câu nhỏ đi xuyên qua kinh tế tư bản để từng bước xây dựng Chủ nghĩa xã hội. Đồng thời lưu ý "chúng ta phải hiểu những đường lối, thể thức, thủ đoạn và phương sách trung gian cần thiết chuyển từ những quan hệ tiền tư bản chủ nghĩa lên chủ nghĩa xã hội. Đó là mấu chốt của vấn đề". Thông quavấn đề trên hãy cho biết V.I. Lênin muốn đề cập đến đó là hình thức cơ bản nào của thời kỳ quá độ lên chủ nghĩa xã hội?',
        options: [
          { value: "A", text: "Không trải qua" },
          { value: "B", text: "Trực tiếp" },
          { value: "C", text: "Vừa trực tiếp vừa gián tiếp" },
          { value: "D", text: "Gián tiếp" },
        ],
        correctAnswer: "D",
      },
      {
        id: "q_1716027310",
        text: "Trong thời gian qua, việc tăng cường các chương trình đào tạo quốc tế, hướng đến công dân toàn cầu, người lao động có trình độ cao thích ứng với toàn cầu hóa nằm trong giải pháp thứ mấy của các giải pháp xây dựng giai cấp công nhân hiện nay?",
        options: [
          { value: "A", text: "1" },
          { value: "B", text: "2" },
          { value: "C", text: "3" },
          { value: "D", text: "4" },
        ],
        correctAnswer: "D",
      },
      {
        id: "q_1716027311",
        text: 'Chị B tuổi Dần quen với Anh A tuổi Hợi. Anh A đã dẫn chị B về nhà ra mắt gia đình để tính đến chuyện hôn nhân, khi mẹ Anh A biết chị B tuổi Dần, còn bản thân mình tuổi Tỵ thì lập tức phản đối chuyện hôn sự do bà cho rằng "khắc tuổi", nếu Anh A và Chị B đến với nhau thì gia đình sẽ có người "gặp xui xẻo, chết". Đây được xem là niềm tin (loại hình) nào sau đây?',
        options: [
          { value: "A", text: "Tín ngưỡng" },
          { value: "B", text: "Mê tín" },
          { value: "C", text: "Tôn giáo" },
          { value: "D", text: "Mê tín dị đoan" },
        ],
        correctAnswer: "D",
      },
      {
        id: "q_1716027312",
        text: "Theo chủ nghĩa Mác - Lênin, quy luật chung, phổ biến cho sự ra đời của Đảng Cộng sản là gì?",
        options: [
          { value: "A", text: "Là sự kết hợp giữa chủ nghĩa xã hội khoa học với phong trào công nhân" },
          { value: "B", text: "Là sự kết hợp giữa chủ nghĩa xã hội khoa học và phong trào yêu nước" },
          { value: "C", text: "Là sự kết hợp giữa phong trào công nhân và phong trào yêu nước" },
          { value: "D", text: "Là sự kết hợp giữa phong trào công nhân với phong trào nông dân" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027313",
        text: "Thế giới quan điểm của chủ nghĩa Mác - Lênin, từ chủ nghĩa tư bản lên chủ nghĩa xã hội tất yếu phải trải qua thời kỳ",
        options: [
          { value: "A", text: "Phát triển của loài người" },
          { value: "B", text: "Phát triển lực lượng sản xuất và quan hệ sản xuất" },
          { value: "C", text: "Quá độ chính trị" },
          { value: "D", text: "Thay đổi phương thức sản xuất" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027314",
        text: "Theo V.I.Lênin: Thời kỳ quá độ ở nước Nga tồn tại bao nhiêu thành phần kinh tế?",
        options: [
          { value: "A", text: "3" },
          { value: "B", text: "4" },
          { value: "C", text: "5" },
          { value: "D", text: "6" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027315",
        text: "Theo chủ nghĩa Mác - Lênin, sự thay thế hình thái kinh tế - xã hội tư bản chủ nghĩa bằng hình thái kinh tế - xã hội cộng sản chủ nghĩa là:",
        options: [
          { value: "A", text: "Một sự cải biến mang tính chất chủ quan" },
          { value: "B", text: "Một bước ngoặt phát triển mới, đưa nhân loại thoát khỏi lối mòn cũ" },
          { value: "C", text: "Một quá trình lịch sử - tự nhiên" },
          { value: "D", text: "Một quá trình can thiệp của con người bằng ý chí nhằm cải biến lịch sử theo hướng nhân văn, tích cực hơn" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027316",
        text: "Trong thời kỳ quá độ lên chủ nghĩa xã hội, vấn đề tín ngưỡng và tôn giáo của nhân dân cần được giải quyết trên cơ sở nguyên tắc nào?",
        options: [
          { value: "A", text: "Hạn chế sự tham gia vào tôn giáo của nhân dân bằng các chính sách xã hội, không can thiệp bằng mệnh lệnh hành chính" },
          { value: "B", text: "Quyền tự do tín ngưỡng, tôn giáo được tôn trọng và bảo vệ, không ai có quyền can thiệp bằng bất cứ hình thức nào" },
          { value: "C", text: "Nhà nước liên hiệp với giáo hội các tôn giáo để điều chỉnh họ theo hướng duy vật, vô thần dần dần theo thời gian" },
          { value: "D", text: "Có những ưu tiên đối với công dân không theo bất cứ tôn giáo nào" },
        ],
        correctAnswer: "B",
      },
      {
        id: "q_1716027317",
        text: "Hôn nhân một vợ một chồng xuất hiện lần đầu tiên khi nào?",
        options: [
          { value: "A", text: "Khi có sự thắng lợi của chế độ tư hữu đối với chế độ công hữu nguyên thủy" },
          { value: "B", text: "Khi có sự thắng thế của chế độ tư bản đối với chế độ phong kiến" },
          { value: "C", text: "Khi các quốc gia bước vào thời kỳ quá độ lên chủ nghĩa xã hội" },
          { value: "D", text: "Khi con người xuất hiện" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027318",
        text: "Điều kiện và tiên đề kinh tế - xã hội để xảy dụng gia đình trong chủ nghĩa xã hội là gì?",
        options: [
          { value: "A", text: "Xóa bỏ chế độ tư hữu, xác lập chế độ công hữu về tư liệu sản xuất" },
          { value: "B", text: "Phát triển kinh tế - xã hội" },
          { value: "C", text: "Nhà nước xã hội chủ nghĩa ban hành và thực hiện luật hôn nhân và nâng cao trình độ văn hóa và dân trí cho mọi người dân" },
          { value: "D", text: "Tất cả các đáp án đều đúng" },
        ],
        correctAnswer: "D",
      },
      {
        id: "q_1716027319",
        text: "Đâu không phải là một chức năng của gia đình?",
        options: [
          { value: "A", text: "Chức năng kinh tế và tổ chức tiêu dùng" },
          { value: "B", text: "Chức năng nuôi dưỡng, giáo dục" },
          { value: "C", text: "Chức năng thỏa mãn nhu cầu tâm sinh lý, duy trì tình cảm" },
          { value: "D", text: "Chức năng nghề nghiệp" },
        ],
        correctAnswer: "D",
      },
      {
        id: "q_1716027320",
        text: 'C. Mác và Ph. Angghen đánh giá: "Giai cấp tư sản trong quá trình thống trị giai cấp chưa đầy một thế kỷ đã tạo ra một lực lượng sản xuất nhiều hơn và đồ sộ hơn lực lượng của tất cả các thế hệ trước đây gộp lại" trong tác phẩm nào?',
        options: [
          { value: "A", text: "Chống Đuyrinh" },
          { value: "B", text: "Lược khảo khoa kinh tế - chính trị" },
          { value: "C", text: "Tuyên ngôn của Đảng Cộng sản" },
          { value: "D", text: "Bộ Tư bản" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027321",
        text: "Quá trình phát triển của nền dân chủ xã hội chủ nghĩa được diễn ra như thế nào?",
        options: [
          { value: "A", text: "Từ thấp đến cao, từ chưa hoàn thiện đến hoàn thiện" },
          { value: "B", text: "Từ thấp đến cao, từ đơn giản đến phức tạp" },
          { value: "C", text: "Từ thấp đến cao, diễn ra khó khăn" },
          { value: "D", text: "Từ thấp đến cao, diễn ra một cách từ từ" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027322",
        text: "Làm thế nào để có thể tạo sự đồng thuận và phát huy tinh thần đoàn kết thống nhất giữa các lực lượng trong khối liên minh và toàn xã hội Việt Nam hiện nay?",
        options: [
          { value: "A", text: "Xây dựng chủ trương, chính sách phù hợp, đúng đắn, giải quyết hài hòa lợi ích của từng đối tượng liên minh cụ thể và đảm bảo lợi ích chung" },
          { value: "B", text: "Mọi vấn đề, mọi pháp luật khi đưa ra đều phải thông qua tất cả công dân để được ban hành, đảm bảo tính đồng thuận tuyệt đối" },
          { value: "C", text: "Có chính sách gắn kết, ràng buộc lợi ích kinh tế giữa các giai cấp, tầng lớp để họ thống nhất lợi ích kinh tế với nhau, từ đó đồng thuận và đoàn kết trong mọi vấn đề" },
          { value: "D", text: "Tất cả đáp án đều đúng" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027323",
        text: "Trong thời kỳ quá độ lên chủ nghĩa xã hội, giai cấp tư sản có vị thế như thế nào?",
        options: [
          { value: "A", text: "Đã bị loại bỏ hoàn toàn" },
          { value: "B", text: "Đã bị chuyển hóa thành giai cấp công nhân" },
          { value: "C", text: "Đã bị đánh bại nhưng vẫn còn sức mạnh về kinh tế" },
          { value: "D", text: "Đã tự thân mình chuyển biến thành giai cấp liên minh với giai cấp cách mạng" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027324",
        text: "Theo V.I.Lênin, nguyên tắc cao nhất của chuyên chính vô sản ở Nga khi thực hiện cách mạng tháng Mười và giai đoạn sau đó là gì?",
        options: [
          { value: "A", text: "Duy trì khối liên minh giữa giai cấp vô sản và nông dân để giai cấp vô sản có thể giữ được vai trò lãnh đạo" },
          { value: "B", text: "Duy trì trấn áp giai cấp, duy trì quyền lãnh đạo duy nhất của giai cấp công nhân" },
          { value: "C", text: "Duy trì khối liên minh tất cả giai cấp, tăng lớp sau khi đã giành được chính quyền" },
          { value: "D", text: "Điều hòa mâu thuẫn giữa các giai cấp, bảo đảm các bên có quyền lợi và nghĩa vụ như nhau" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027325",
        text: "Làm sao để xóa bỏ triệt để ngay lập tức các giai cấp, tầng lớp của cơ cấu xã hội - giai cấp trong thời kỳ quá độ lên chủ nghĩa xã hội?",
        options: [
          { value: "A", text: "Giai cấp công nhân, liên minh cùng với các giai cấp, tầng lớp khác tổ chức nhà nước và thực hiện công cụ chuyên chính vô sản thực thi xóa bỏ ngay lập tức giai cấp tư sản, và sau đó xóa bỏ luôn giai cấp mình." },
          { value: "B", text: "Giai cấp, tầng lớp chủ động đứng vào hàng ngũ của Đảng Cộng sản để thống nhất xóa bỏ sự tồn tại." },
          { value: "C", text: "Sự tồn tại các giai cấp, tầng lớp trong thời kỳ quá độ lên chủ nghĩa xã hội là vấn đề mang tính quy luật, chỉ có thể cải tạo dần chứ chưa thể xóa bỏ triệt để, ngay lập tức được." },
          { value: "D", text: "Quốc hữu hóa tất cả tài sản, tịch thu ruộng đất, gia sản của giai cấp tư sản, đồng thời biến họ trở thành nhân dân lao động." },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027326",
        text: "Điều kiện khách quan quy định sứ mệnh lịch sử của giai cấp công nhân là gì?",
        options: [
          { value: "A", text: "Địa vị kinh tế của giai cấp công nhân" },
          { value: "B", text: "Địa vị chính trị - xã hội của giai cấp công nhân" },
          { value: "C", text: "Xuất thân từ giai cấp nông dân trong xã hội phong kiến cũ" },
          { value: "D", text: "Là giai cấp có khả năng thống trị được toàn thể xã hội xây dựng xã hội mới" },
        ],
        correctAnswer: "AB",
      },
      {
        id: "q_1716027327",
        text: "Theo quan điểm của chủ nghĩa Mác - Lênin, tôn giáo có các nguồn gốc nào? Chọn các đáp án đúng.",
        options: [
          { value: "A", text: "Nguồn gốc tự nhiên, kinh tế - xã hội" },
          { value: "B", text: "Nguồn gốc nhận thức" },
          { value: "C", text: "Nguồn gốc tâm lý" },
          { value: "D", text: "Nguồn gốc siêu nhiên" },
        ],
        correctAnswer: "ABC",
      },
      {
        id: "q_1716027328",
        text: "Điểm khác biệt cơ bản nhất giữa cách hiểu về dân chủ thời cổ đại và hiện nay là gì?",
        options: [
          { value: "A", text: "Tính chất trực tiếp của mối quan hệ sở hữu quyền lực công cộng" },
          { value: "B", text: "Nội hàm khái niệm nhân dân" },
          { value: "C", text: "Giai cấp tổ chức quyền lực dân chủ" },
          { value: "D", text: "Tính triệt để hay không triệt để của dân chủ" },
        ],
        correctAnswer: "AB",
      },
      {
        id: "q_1716027329",
        text: "Về nội dung văn hóa, tư tưởng, sứ mệnh lịch sử của giai cấp công nhân được thể hiện như thế nào?",
        options: [
          { value: "A", text: "Giai cấp công nhân thực hiện xây dựng con người mỗi xã hội chủ nghĩa" },
          { value: "B", text: "Giai cấp công nhân thực hiện xây dựng đạo đức và lối sống mỗi xã hội chủ nghĩa" },
          { value: "C", text: "Giai cấp công nhân thực hiện xây dựng và củng cố ý thức hệ tiên tiến của mình" },
          { value: "D", text: "Tất cả các đáp án đều đúng" },
        ],
        correctAnswer: "D",
      },
      {
        id: "q_1716027330",
        text: "Theo quan điểm của Đảng Cộng sản Việt Nam, quá độ lên chủ nghĩa xã hội bỏ qua chế độ tư bản chủ nghĩa, tức là:",
        options: [
          { value: "A", text: "Bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa" },
          { value: "B", text: "Bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất tư bản chủ nghĩa" },
          { value: "C", text: "Bỏ qua việc xác lập vị trí thống trị của kiến trúc thượng tầng chủ nghĩa xã hội" },
          { value: "D", text: "Bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng chủ nghĩa xã hội" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027331",
        text: "Đại hội XI đã đề ra phương hướng phát triển nền kinh tế như thế nào trong thời kỳ quá độ lên chủ nghĩa xã hội ở Việt Nam trong giai đoạn tới?",
        options: [
          { value: "A", text: "Phát triển nền kinh tế thị trường xã hội chủ nghĩa" },
          { value: "B", text: "Phát triển nền kinh tế thị trường hiệp đồng" },
          { value: "C", text: "Phát triển nền kinh tế thị trường định hướng xã hội chủ nghĩa" },
          { value: "D", text: "Phát triển nền kinh tế kế hoạch hóa tập trung" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027332",
        text: "Chủ nghĩa xã hội có mấy đặc trưng bản chất?",
        options: [
          { value: "A", text: "4" },
          { value: "B", text: "5" },
          { value: "C", text: "6" },
          { value: "D", text: "7" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027333",
        text: "Theo cấp độ quốc gia, đâu là tín ngưỡng truyền thống quan trọng của dân tộc Việt Nam?",
        options: [
          { value: "A", text: "Tín ngưỡng thờ cúng tổ tiên" },
          { value: "B", text: "Tín ngưỡng thành hoàng" },
          { value: "C", text: "Tín ngưỡng thờ cúng vua Hùng" },
          { value: "D", text: "Tín ngưỡng thờ mẫu" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027334",
        text: "Đảng Cộng sản Việt Nam đã nêu rõ vấn đề nào trong Văn kiện Đại hội đại biểu toàn quốc lần thứ XII?",
        options: [
          { value: "A", text: "Vấn đề dân tộc có vai trò quan trọng đối với sự nghiệp phát triển kinh tế - xã hội ở nước ta hiện nay." },
          { value: "B", text: "Vấn đề dân tộc và đoàn kết 1 các dân tộc có vị trí quyết định đến sự sống còn của dân 2 tộc ta hiện nay." },
          { value: "C", text: "Vấn đề dân tộc và đoàn kết các dân tộc luôn có vị trí chiến lược trong sự nghiệp cách mạng." },
          { value: "D", text: "Vấn đề đoàn kết dân tộc là điều kiện cần cho sự nghiệp cách mạng ở nước ta hiện nay" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027335",
        text: "Hình thức dân chủ ở Việt Nam mà người dân bầu ra cơ quan quyền lực nhà nước cao nhất, ủy quyền cho họ thực hiện quyền lực của nhân dân được gọi là hình thức dân chủ gì?",
        options: [
          { value: "A", text: "Hình thức dân chủ trực tiếp" },
          { value: "B", text: "Hình thức dân chủ gián tiếp" },
          { value: "C", text: "Hình thức dân chủ đại nghị" },
          { value: "D", text: "Hình thức dân chủ công khai" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027336",
        text: "Trong các kiểu nhà nước dưới đây, nhà nước nào là nhà nước của tất cả mọi người, mọi giai cấp?",
        options: [
          { value: "A", text: "Nhà nước chiếm hữu nô lệ" },
          { value: "B", text: "Nhà nước tư sản" },
          { value: "C", text: "Nhà nước xã hội chủ nghĩa" },
          { value: "D", text: "Không có kiểu nhà nước nào là của tất cả giai cấp" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027337",
        text: "Tổ chức quyền lực của Nhà nước pháp quyền xã hội chủ nghĩa đảm bảo quyền lực nhà nước như thế nào?",
        options: [
          { value: "A", text: "Đồng nhất, có sự phân công và phối hợp giữa các cơ quan nhà nước" },
          { value: "B", text: "Cùng nhau, có sự phân công và phối hợp giữa các cơ quan nhà nước" },
          { value: "C", text: "Thống nhất, có sự phân công và phối hợp giữa các cơ quan nhà nước" },
          { value: "D", text: "Chia đều, có sự phân công và phối hợp giữa các cơ quan nhà nước" },
        ],
        correctAnswer: "C",
      },
      {
        id: "q_1716027338",
        text: 'Điền cụm từ thích hợp vào ( ... ): "Giai cấp ..., trong quá trình thống trị giai cấp chưa đầy một thế kỷ, đã tạo ra những ... nhiều hơn và đồ sộ hơn lực lượng sản xuất của tất cả các thế hệ trước kia gộp lại".',
        options: [
          { value: "A", text: "Tư sản / Lực lượng sản xuất" },
          { value: "B", text: "Tư sản / Quan hệ sản xuất" },
          { value: "C", text: "Vô sản / Tư sản" },
          { value: "D", text: "Vô sản / Giai cấp nông dân" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027339",
        text: "Hình thái KTXH được cấu thành từ các yếu tố nào?",
        options: [
          { value: "A", text: "Lực lượng sản xuất, quan hệ sản xuất và kiến trúc thượng tầng" },
          { value: "B", text: "Cơ sở kinh tế và thể chế nhà nước" },
          { value: "C", text: "Cơ sở hạ tầng và lực lượng sản xuất" },
          { value: "D", text: "Lực lượng sản xuất và quan hệ sản xuấ" },
        ],
        correctAnswer: "A",
      },
      {
        id: "q_1716027340",
        text: "Thực chất của liên minh công - nông - trí thức ở nước ta về nội dung kinh tế là gì?",
        options: [
          { value: "A", text: "Là sự hợp tác giữa họ, đồng thời mở rộng liên kết với các lực lượng khác để xây dựng nền kinh tế mới xã hội chủ nghĩa hiện đại." },
          { value: "B", text: "Là sự hợp tác giữa họ, đồng thời mở rộng liên kết với các lực lượng khác để xây dựng nền kinh tế thị trường tự do hiện đại." },
          { value: "C", text: "Là sự hợp tác và đấu tranh giữa họ, đồng thời mở rộng liên kết và đấu tranh với các lực lượng khác để xây dựng nền kinh tế mới." },
          { value: "D", text: "Là sự hợp tác giữa họ, đồng thời mở rộng liên kết với các lực lượng khác để xây dựng nền chính trị dân chủ." },
        ],
        correctAnswer: "A",
      }
]
}
];

export default { structuredChapters, structuredQuizzes, structuredQuizzesAll };