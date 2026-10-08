const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];

const curriculum = {
  prep: {
    label: 'Chuẩn bị vào lớp 1', short: 'Tiền tiểu học', emoji: '🎒',
    description: 'Làm quen kiến thức nền và kỹ năng học tập, không dạy trước toàn bộ chương trình lớp 1.',
    subjects: {
      math: {
        name: 'Toán', icon: '🔢', color: 'math',
        summary: 'Đếm • So sánh • Hình • Quy luật',
        lessons: [
          L('prep-m-1','Đếm và nhận biết số 0–10','Nhận biết lượng, ghép số với nhóm đồ vật.',['Đếm đúng đến 10','Nhận biết chữ số','Ghép số với lượng'],['choice','match','drag']),
          L('prep-m-2','Nhiều hơn – ít hơn – bằng nhau','So sánh hai nhóm đồ vật trực quan.',['So sánh số lượng','Dùng từ nhiều hơn/ít hơn','Ghép nhóm tương ứng'],['choice','match']),
          L('prep-m-3','Vị trí và định hướng','Trên – dưới, trước – sau, trái – phải.',['Hiểu từ chỉ vị trí','Làm theo hướng dẫn','Quan sát không gian'],['choice','drag']),
          L('prep-m-4','Hình dạng quanh em','Tròn, vuông, tam giác, chữ nhật.',['Nhận biết hình','Phân loại đồ vật','Tìm hình trong đời sống'],['match','drag','choice']),
          L('prep-m-5','Quy luật đơn giản','Tiếp tục chuỗi màu, hình, kích thước.',['Nhận ra quy luật AB/ABB','Chọn phần tử tiếp theo','Tạo chuỗi đơn giản'],['choice','drag']),
          L('prep-m-6','Gộp – tách bằng đồ vật','Làm quen ý tưởng cộng/trừ qua thao tác.',['Gộp hai nhóm','Tách một nhóm','Diễn đạt bằng lời'],['drag','choice'])
        ],
        games: [
          G('prep-count','Bắn bóng đếm số','🎈','Đếm đúng số lượng 0–10','prep-m-1'),
          G('prep-shape','Săn hình bí mật','🔺','Tìm hình theo yêu cầu','prep-m-4'),
          G('prep-pattern','Xếp tàu quy luật','🚂','Hoàn thành chuỗi hình/màu','prep-m-5')
        ]
      },
      vi: {
        name:'Tiếng Việt', icon:'📖', color:'vi', summary:'Âm • Chữ • Vần • Nghe nói',
        lessons:[
          L('prep-v-1','Làm quen bảng chữ cái','Nhận mặt chữ in hoa, in thường.',['Nhận diện chữ cái','Ghép cặp hoa – thường','Phân biệt chữ gần giống'],['choice','match']),
          L('prep-v-2','Nghe và nhận âm đầu','Nghe tiếng, tìm chữ cái đầu.',['Nghe phân biệt âm','Chọn chữ đầu','Nói từ đơn giản'],['listen','choice']),
          L('prep-v-3','Ghép tiếng quen thuộc','Ghép âm đầu với vần đơn giản bằng hình ảnh.',['Nhận âm đầu','Ghép tiếng','Đọc tiếng quen'],['drag','choice']),
          L('prep-v-4','Kể chuyện theo tranh','Sắp xếp 3–4 tranh và kể lại.',['Quan sát tranh','Sắp xếp trình tự','Nói câu trọn ý'],['order','speak']),
          L('prep-v-5','Làm quen nét chữ','Tô nét thẳng, cong, móc, khuyết.',['Đi đúng hướng nét','Cầm bút đúng tư thế','Phối hợp tay – mắt'],['trace'])
        ],
        games:[
          G('prep-letter','Bắt chữ cái','🐝','Tìm đúng chữ được đọc','prep-v-1'),
          G('prep-sound','Nghe âm tìm hình','🎧','Nghe âm đầu rồi chọn hình','prep-v-2'),
          G('prep-story','Xếp tranh kể chuyện','🧩','Sắp xếp trình tự câu chuyện','prep-v-4')
        ]
      },
      en: {
        name:'Tiếng Anh', icon:'🧸', color:'en', summary:'Nghe • Nói • Từ quen thuộc',
        lessons:[
          L('prep-e-1','Hello!','Chào hỏi và giới thiệu tên.',['Hi/Hello','My name is…','Goodbye'],['listen','choice','speak']),
          L('prep-e-2','Colors','Nhận biết màu qua đồ vật.',['red, blue, yellow','Nghe và chỉ màu','Nói từ đơn'],['listen','choice']),
          L('prep-e-3','Numbers 1–10','Nghe, đọc và ghép số.',['Nghe số','Nói số','Ghép số với lượng'],['choice','match']),
          L('prep-e-4','My body','Từ vựng cơ thể qua vận động.',['head, eyes, hands','Nghe – làm theo','Nói từ đơn'],['listen','choice'])
        ],
        games:[
          G('prep-en-listen','Nghe và chạm','🎧','Nghe từ rồi chọn hình','prep-e-1'),
          G('prep-en-color','Cầu vồng tiếng Anh','🌈','Ghép màu với từ','prep-e-2')
        ]
      }
    }
  },
  grade2: {
    label:'Lớp 2', short:'Lớp 2', emoji:'🧒',
    description:'Lộ trình bám các mạch và yêu cầu cần đạt của CTGDPT 2018; thứ tự cụ thể của từng bộ SGK có thể khác.',
    subjects: {
      math: {
        name:'Toán', icon:'🧮', color:'math', summary:'Số • Phép tính • Hình • Đo lường',
        lessons:[
          L('g2-m-1','Ôn số đến 100 & tính nhẩm trong 20','Củng cố kiến thức nền trước khi vào nội dung lớp 2.',['Đọc – viết số đến 100','Cộng trừ nhẩm trong 20','Bài toán thực tế đơn giản'],['choice','fill','word']),
          L('g2-m-2','Số và cấu tạo thập phân đến 1000','Đếm, đọc, viết; trăm – chục – đơn vị; số tròn trăm; tia số.',['Đọc – viết số ≤ 1000','Phân tích trăm/chục/đơn vị','Số liền trước/sau, tia số'],['choice','fill','drag']),
          L('g2-m-3','So sánh, sắp xếp & ước lượng','So sánh số đến 1000, tìm lớn nhất/nhỏ nhất, ước lượng theo chục.',['So sánh hai số','Sắp xếp tối đa 4 số','Ước lượng theo nhóm chục'],['choice','order','drag']),
          L('g2-m-4','Cộng trong phạm vi 1000','Cộng không nhớ và có nhớ không quá một lượt.',['Đặt tính đúng','Cộng theo hàng','Vận dụng tình huống'],['fill','choice','word']),
          L('g2-m-5','Trừ trong phạm vi 1000','Trừ không nhớ và có nhớ không quá một lượt.',['Đặt tính đúng','Trừ theo hàng','Kiểm tra kết quả'],['fill','choice','word']),
          L('g2-m-6','Hai phép tính & giải quyết vấn đề','Tính từ trái sang phải với hai dấu cộng/trừ; bài toán một bước.',['Tính đúng thứ tự','Chọn phép tính phù hợp','Diễn đạt lời giải'],['fill','word','choice']),
          L('g2-m-7','Làm quen phép nhân','Nhận biết tổng các số hạng bằng nhau, thừa số và tích.',['Hiểu ý nghĩa phép nhân','Đổi cộng lặp thành nhân','Nhận biết thành phần'],['match','choice','drag']),
          L('g2-m-8','Bảng nhân 2 và bảng nhân 5','Vận dụng bảng nhân 2, 5 trong tính toán và tình huống thực tế.',['Nhẩm bảng nhân 2','Nhẩm bảng nhân 5','Bài toán gấp nhóm'],['choice','fill','word']),
          L('g2-m-9','Làm quen phép chia','Chia đều, chia theo nhóm; số bị chia – số chia – thương.',['Hiểu ý nghĩa chia','Nhận biết thành phần','Liên hệ nhân – chia'],['drag','choice','match']),
          L('g2-m-10','Bảng chia 2 và bảng chia 5','Vận dụng bảng chia 2, 5 trong tính và bài toán.',['Nhẩm chia 2','Nhẩm chia 5','Bài toán chia đều'],['choice','fill','word']),
          L('g2-m-11','Hình học trực quan','Điểm, đoạn thẳng, đường thẳng/đường cong/đường gấp khúc, ba điểm thẳng hàng, tứ giác.',['Nhận dạng hình','Đếm đoạn thẳng','Xác định điểm thẳng hàng'],['choice','drag','match']),
          L('g2-m-12','Độ dài, khối lượng & dung tích','Thực hành với cm, dm, m, km; kg; l trong tình huống gần gũi.',['Chọn đơn vị phù hợp','Đọc số đo','Giải quyết bài toán đo lường'],['choice','fill','match']),
          L('g2-m-13','Thời gian & lịch','Ngày, giờ, phút; đọc đồng hồ và thời gian biểu.',['Đọc giờ phù hợp lớp 2','Sắp xếp hoạt động theo thời gian','Dùng lịch đơn giản'],['choice','order','match']),
          L('g2-m-14','Tiền Việt Nam trong đời sống','Nhận biết và sử dụng tiền trong các tình huống mua bán đơn giản.',['Nhận biết tờ tiền','Tính tổng đơn giản','Chọn cách trả phù hợp'],['choice','drag','word']),
          L('g2-m-15','Thống kê bằng tranh','Thu thập, phân loại, kiểm đếm và đọc biểu đồ tranh đơn giản.',['Phân loại dữ liệu','Đếm số lượng','Đọc biểu đồ tranh'],['drag','choice','fill']),
          L('g2-m-16','Chắc chắn – có thể – không thể','Làm quen ngôn ngữ xác suất qua tình huống đời sống.',['Phân biệt 3 khả năng','Giải thích lựa chọn','Dự đoán đơn giản'],['choice','match']),
          L('g2-m-17','Thực hành & trải nghiệm tổng hợp','Kết nối số, phép tính, đo lường và dữ liệu qua nhiệm vụ thực tế.',['Lập kế hoạch nhỏ','Giải bài toán thực tế','Tự kiểm tra kết quả'],['word','drag','fill'])
        ],
        games:[
          G('g2-m-balloons','Bắn bóng số','🎈','Số đến 1000 & so sánh','g2-m-2'),
          G('g2-m-race','Đua xe phép tính','🏎️','Cộng – trừ trong phạm vi 1000','g2-m-4'),
          G('g2-m-times','Xưởng robot nhân 2 & 5','🤖','Bảng nhân 2 và 5','g2-m-8'),
          G('g2-m-divide','Chia bánh công bằng','🍰','Bảng chia 2 và 5','g2-m-10'),
          G('g2-m-clock','Thám tử đồng hồ','⏰','Đọc giờ và thời gian biểu','g2-m-13'),
          G('g2-m-chart','Vườn biểu đồ','📊','Đọc biểu đồ tranh','g2-m-15')
        ]
      },
      vi: {
        name:'Tiếng Việt', icon:'📚', color:'vi', summary:'Đọc • Viết • Nói nghe • Tiếng Việt',
        lessons:[
          L('g2-v-1','Kĩ thuật đọc lớp 2','Đọc đúng, rõ; ngắt nghỉ theo dấu câu; bước đầu đọc lời nhân vật.',['Tốc độ hướng tới 60–70 tiếng/phút','Đọc thầm','Nhận biết lời kể/lời nhân vật'],['read','listen','choice']),
          L('g2-v-2','Bảng chữ cái: tên chữ và âm','Củng cố bảng chữ cái, phân biệt tên chữ cái với âm chữ biểu hiện.',['Thuộc bảng chữ cái','Phân biệt tên chữ/âm','Xếp chữ theo thứ tự'],['choice','order','listen']),
          L('g2-v-3','Đọc hiểu truyện','Tìm nhân vật, sự việc, thời gian, nơi chốn; trả lời câu hỏi.',['Ai? Cái gì? Làm gì?','Khi nào? Ở đâu?','Vì sao? Như thế nào?'],['read','choice','fill']),
          L('g2-v-4','Đọc hiểu thơ','Nhận biết vần, nhịp, hình ảnh và cảm xúc đơn giản trong thơ.',['Ngắt nhịp','Nhận biết vần','Nêu cảm nhận đơn giản'],['read','choice','listen']),
          L('g2-v-5','Đọc văn bản thông tin','Đọc nhan đề, tranh minh hoạ, chú thích; tìm thông tin chính.',['Tìm thông tin trực tiếp','Khai thác hình ảnh','Điền phiếu đọc sách'],['read','choice','fill']),
          L('g2-v-6','Chữ hoa & trình bày','Viết chữ thường, chữ hoa; giữ khoảng cách và trình bày sạch đẹp.',['Viết đúng mẫu','Giữ khoảng cách','Trình bày câu/đoạn'],['trace','fill']),
          L('g2-v-7','Chính tả nghe – viết / nhìn – viết','Luyện viết đúng tiếng, từ và đoạn phù hợp lứa tuổi.',['Nghe và viết','Soát lỗi','Phân biệt âm/vần dễ lẫn'],['listen','fill','choice']),
          L('g2-v-8','Vốn từ theo chủ điểm','Mở rộng từ ngữ về gia đình, trường học, thiên nhiên, cộng đồng…',['Hiểu nghĩa từ trong ngữ cảnh','Xếp từ theo nhóm','Dùng từ đặt câu'],['match','drag','fill']),
          L('g2-v-9','Từ chỉ sự vật, hoạt động, tính chất','Nhận biết và sử dụng ba nhóm từ cơ bản.',['Phân loại từ','Tìm từ phù hợp tranh','Dùng từ trong câu'],['drag','choice','fill']),
          L('g2-v-10','Dấu câu cơ bản','Dấu chấm, chấm hỏi, chấm than và dấu phẩy trong câu đơn giản.',['Chọn dấu kết thúc câu','Dùng dấu phẩy','Đọc câu đúng ngữ điệu'],['choice','fill','listen']),
          L('g2-v-11','Hội thoại & lượt lời','Lắng nghe, chờ lượt, đáp lời phù hợp trong giao tiếp ở nhà và trường.',['Nghe trọn ý','Đáp lời lịch sự','Nói theo lượt'],['listen','choice','speak']),
          L('g2-v-12','Kể lại một sự việc','Viết đoạn ngắn theo gợi ý về một việc đã làm hoặc chứng kiến.',['Sắp xếp ý','Viết câu liên kết','Kiểm tra chính tả'],['order','write']),
          L('g2-v-13','Miêu tả ngắn','Viết đoạn tả đồ vật/loài vật đơn giản theo gợi ý.',['Quan sát đặc điểm','Chọn từ miêu tả','Viết đoạn ngắn'],['drag','write']),
          L('g2-v-14','Nói về tình cảm','Viết/nói đoạn thể hiện tình cảm với người thân, thầy cô, bạn bè.',['Nêu cảm xúc','Nêu lí do','Dùng lời phù hợp'],['speak','write']),
          L('g2-v-15','Văn bản thực dụng','Làm quen bưu thiếp, danh sách, mục lục, thời khoá biểu, thời gian biểu và hướng dẫn đơn giản.',['Đọc đúng cấu trúc','Điền thông tin','Tạo văn bản ngắn'],['read','fill','order']),
          L('g2-v-16','Đọc mở rộng & phiếu đọc sách','Đọc thêm văn bản phù hợp, ghi thông tin quan trọng và chia sẻ điều thích.',['Chọn sách phù hợp','Ghi phiếu đọc','Chia sẻ cảm nhận'],['read','write','speak'])
        ],
        games:[
          G('g2-v-words','Ghép từ đúng nhóm','🧩','Từ chỉ sự vật/hoạt động/tính chất','g2-v-9'),
          G('g2-v-punct','Thám tử dấu câu','🔎','Chấm, hỏi, than, phẩy','g2-v-10'),
          G('g2-v-sentence','Xếp câu thần tốc','🚂','Sắp xếp từ thành câu','g2-v-12'),
          G('g2-v-read','Kho báu đọc hiểu','🗺️','Đọc đoạn ngắn và tìm thông tin','g2-v-3'),
          G('g2-v-spell','Ong tìm chính tả','🐝','Nghe – chọn tiếng viết đúng','g2-v-7')
        ]
      },
      en: {
        name:'Tiếng Anh', icon:'🧸', color:'en', summary:'Làm quen tự chọn • Nghe • Nói',
        lessons:[
          L('g2-e-1','Hello & classroom language','Chào hỏi, giới thiệu tên và mệnh lệnh lớp học đơn giản.',['Hello/Goodbye','My name is…','Stand up / Sit down'],['listen','choice','speak']),
          L('g2-e-2','My family','Từ vựng gia đình và mẫu câu giới thiệu.',['mum, dad, brother, sister','This is my…','Nghe – nhận diện'],['listen','choice','match']),
          L('g2-e-3','My school','Đồ dùng và nơi chốn quen thuộc ở trường.',['book, pen, bag','classroom, school','What is this?'],['listen','match','choice']),
          L('g2-e-4','Animals','Tên động vật gần gũi và mô tả cực ngắn.',['cat, dog, bird, fish','It is a…','Nghe – chọn hình'],['listen','choice','speak']),
          L('g2-e-5','Food & drinks','Một số đồ ăn, thức uống và sở thích.',['apple, rice, milk','I like…','Nghe – chọn'],['listen','choice','match']),
          L('g2-e-6','Review through play','Ôn nghe – nói bằng game ngắn, không đặt nặng ngữ pháp.',['Nghe phản xạ','Nói từ/cụm ngắn','Ôn chủ điểm'],['listen','choice','speak'])
        ],
        games:[
          G('g2-e-listen','Listen & Choose','🎧','Nghe từ rồi chọn hình','g2-e-1'),
          G('g2-e-flash','Flashcard Sprint','🃏','Ghi nhớ từ vựng','g2-e-2'),
          G('g2-e-word','Find the Word','🔤','Tìm từ theo hình','g2-e-3'),
          G('g2-e-guess','Guess the Picture','🐱','Đoán hình qua từ tiếng Anh','g2-e-4')
        ]
      }
    }
  }
};

function L(id,title,desc,objectives,types){return {id,title,desc,objectives,types};}
function G(id,title,icon,desc,unlock){return {id,title,icon,desc,unlock};}

const exerciseTemplates = {
  'g2-m-2': [
    Q('choice','Số nào gồm 4 trăm, 2 chục và 6 đơn vị?',['246','426','462','624'],'426','🧱🧱🧱'),
    Q('fill','Điền số liền sau của 599.','','600','599 → ___'),
    Q('order','Sắp xếp các số theo thứ tự từ bé đến lớn.',['702','270','720','207'],['207','270','702','720']),
    Q('choice','Số nào là số tròn trăm?',['450','700','705','770'],'700','💯'),
    Q('fill','Viết số: tám trăm linh năm.','','805','✍️')
  ],
  'g2-m-4': [
    Q('fill','Tính: 246 + 132 = ?','','378','➕'),
    Q('choice','Kết quả của 358 + 221 là:',['569','579','589','599'],'579','🧮'),
    Q('fill','Tính: 475 + 208 = ?','','683','📚'),
    Q('choice','Lan có 235 nhãn vở, mẹ mua thêm 120 nhãn. Lan có tất cả bao nhiêu nhãn?',['345','355','365','455'],'355','🏷️'),
    Q('fill','Điền số còn thiếu: 320 + ___ = 500','','180','🧩')
  ],
  'g2-m-8': [
    Q('choice','2 × 7 = ?',['12','14','16','18'],'14','✌️'),
    Q('fill','5 × 8 = ?','','40','⭐'),
    Q('choice','Có 5 giỏ, mỗi giỏ 2 quả cam. Có tất cả bao nhiêu quả cam?',['7','10','12','15'],'10','🍊'),
    Q('order','Xếp các tích theo thứ tự từ bé đến lớn.',['5×4','2×3','5×2','2×8'],['2×3','5×2','2×8','5×4']),
    Q('fill','2 × ___ = 18','','9','🤖')
  ],
  'g2-m-10': [
    Q('choice','20 : 5 = ?',['2','4','5','10'],'4','🍰'),
    Q('fill','18 : 2 = ?','','9','➗'),
    Q('choice','Chia đều 30 viên bi vào 5 hộp. Mỗi hộp có bao nhiêu viên?',['5','6','8','10'],'6','🔵'),
    Q('fill','___ : 5 = 7','','35','🧩'),
    Q('choice','Phép chia nào có thương bằng 8?',['16:2','20:5','10:2','30:5'],'16:2','🎯')
  ],
  'g2-m-13': [
    Q('choice','Kim phút chỉ số 6, kim giờ ở giữa 7 và 8. Đồng hồ chỉ:',['7 giờ','7 giờ 15','7 giờ 30','8 giờ'],'7 giờ 30','🕢'),
    Q('fill','1 giờ = ___ phút','','60','⏰'),
    Q('order','Xếp hoạt động theo trình tự một ngày.',['Ăn tối','Đi học','Thức dậy','Đi ngủ'],['Thức dậy','Đi học','Ăn tối','Đi ngủ']),
    Q('choice','Hoạt động nào thường diễn ra vào buổi sáng?',['Ăn tối','Đi ngủ','Đến trường','Ngắm trăng'],'Đến trường','🌞'),
    Q('fill','Nửa giờ = ___ phút','','30','⌛')
  ],
  'g2-v-3': [
    Q('read','Đọc đoạn văn rồi trả lời: “Sáng chủ nhật, Minh cùng bố trồng một cây khế trước sân. Minh xúc đất, bố đặt cây vào hố rồi hai bố con cùng tưới nước.” Minh trồng cây cùng ai?',['mẹ','bố','bạn','cô giáo'],'bố','🌱'),
    Q('choice','Việc hai bố con làm sau khi đặt cây vào hố là gì?',['đọc sách','tưới nước','đi chơi','hái quả'],'tưới nước','💧'),
    Q('choice','Câu chuyện diễn ra khi nào?',['sáng chủ nhật','trưa thứ hai','tối thứ bảy','chiều thứ sáu'],'sáng chủ nhật','☀️'),
    Q('fill','Điền từ: Minh dùng xẻng để xúc ___.','','đất','🪴'),
    Q('choice','Ý chính phù hợp nhất là:',['Minh đi mua cây','Hai bố con cùng trồng cây','Minh tưới hoa một mình','Bố sửa sân'],'Hai bố con cùng trồng cây','🌳')
  ],
  'g2-v-7': [
    Q('choice','Chọn từ viết đúng.',['xinh sắn','xinh xắn','sinh xắn','xinh sẵng'],'xinh xắn','✍️'),
    Q('fill','Điền “tr” hoặc “ch”: ___ăm chỉ','','ch','📝'),
    Q('choice','Chọn tiếng phù hợp: “cây ___e”',['che','tre','chre','trê'],'tre','🎋'),
    Q('fill','Điền dấu thanh để thành từ đúng: “ngoi nha” → “ngôi ___”','','nhà','🏠'),
    Q('choice','Từ nào viết đúng chính tả?',['sạch sẽ','xạch sẽ','sạch xẽ','sạch sẻ'],'sạch sẽ','✨')
  ],
  'g2-v-9': [
    Q('choice','Từ nào chỉ hoạt động?',['bàn','chạy','đỏ','hiền'],'chạy','🏃'),
    Q('choice','Từ nào chỉ sự vật?',['học','xanh','quyển sách','nhanh'],'quyển sách','📕'),
    Q('choice','Từ nào chỉ tính chất?',['cây','đẹp','đọc','bạn'],'đẹp','🌟'),
    Q('order','Xếp theo thứ tự: sự vật → hoạt động → tính chất.',['vui','bé','cười'],['bé','cười','vui']),
    Q('fill','Điền một từ chỉ hoạt động: “Chim đang ___ trên cành.”','','hót','🐦')
  ],
  'g2-v-10': [
    Q('choice','Chọn dấu thích hợp: “Bạn tên là gì___”',['.','?','!','‚'],'?','❓'),
    Q('choice','Chọn dấu thích hợp: “Ôi, bông hoa đẹp quá___”',['.','?','!',','],'!','🌸'),
    Q('fill','Điền dấu câu: “Em thích đọc sách___ vẽ tranh và đá bóng.”','',' ,','📚'),
    Q('choice','Câu nào nên kết thúc bằng dấu chấm?',['Bạn đi đâu','Mẹ đã về nhà','Ôi đẹp quá','Bạn khỏe không'],'Mẹ đã về nhà','✅'),
    Q('choice','Dấu phẩy thường dùng để:',['kết thúc câu hỏi','tách các bộ phận cùng chức năng','kết thúc câu cảm','viết tên riêng'],'tách các bộ phận cùng chức năng','🔤')
  ],
  'g2-e-1': [
    Q('choice','“Hello” dùng để:',['chào hỏi','cảm ơn','xin lỗi','đếm số'],'chào hỏi','👋'),
    Q('choice','Chọn câu giới thiệu tên đúng.',['I name Minh.','My name is Minh.','Me Minh.','Name I Minh.'],'My name is Minh.','🙂'),
    Q('choice','“Sit down” nghĩa là:',['đứng lên','ngồi xuống','mở sách','đóng cửa'],'ngồi xuống','🪑'),
    Q('choice','Từ nào dùng để tạm biệt?',['Hello','Goodbye','Please','Book'],'Goodbye','👋'),
    Q('choice','“Stand up” nghĩa là:',['đứng lên','ngồi xuống','chạy','viết'],'đứng lên','🧍')
  ]
};

function Q(type,prompt,options,answer,visual=''){return {type,prompt,options,answer,visual};}

const state = loadState();
function loadState(){
  const base = {track:'grade2', stars:320, streak:5, completed:['g2-m-1'], gamePlayed:0, todayMinutes:18, sound:true, childName:'Bé Minh'};
  try{return {...base,...JSON.parse(localStorage.getItem('be-hoc-vui-state')||'{}')};}catch{return base;}
}
function save(){localStorage.setItem('be-hoc-vui-state',JSON.stringify(state));}

const app = document.getElementById('app');

function subject(trackKey,subKey){return curriculum[trackKey]?.subjects?.[subKey];}
function lessonById(id){
  for(const [tk,t] of Object.entries(curriculum)) for(const [sk,s] of Object.entries(t.subjects)){
    const lesson=s.lessons.find(x=>x.id===id); if(lesson) return {lesson,trackKey:tk,subKey:sk,subject:s};
  }
  return null;
}
function gameById(id){
  for(const [tk,t] of Object.entries(curriculum)) for(const [sk,s] of Object.entries(t.subjects)){
    const game=s.games.find(x=>x.id===id); if(game) return {game,trackKey:tk,subKey:sk,subject:s};
  }
  return null;
}

function topbar(){
  const track=curriculum[state.track];
  return `<header class="topbar">
    <button class="profile-pill" data-action="level"><span class="avatar">${track.emoji}</span><span class="profile-meta"><strong>${state.childName}</strong><small>${track.label}</small></span><span>⌄</span></button>
    <div class="currency-pill">⭐ <span>${state.stars}</span> <span title="Chuỗi ngày">🔥${state.streak}</span></div>
    <nav class="top-actions">
      <button class="icon-btn" data-action="report"><span>📊</span><small>Báo cáo</small></button>
      <button class="icon-btn" data-action="rewards"><span>🏆</span><small>Phần thưởng</small></button>
      <button class="icon-btn" data-action="settings"><span>⚙️</span><small>Cài đặt</small></button>
    </nav>
  </header>`;
}

function home(){
  const track=curriculum[state.track];
  const subs=track.subjects;
  const progress=subjectProgress(state.track);
  app.innerHTML=`${topbar()}
  <main class="max">
    <section class="hero">
      <div class="hero-intro"><div class="wood-sign">Hôm nay<br>con học gì nào?</div><div class="mascot-scene">🧒🏻🐶</div></div>
      <div class="subject-grid">
        ${Object.entries(subs).map(([k,s])=>`<button class="subject-card ${s.color}" data-subject="${k}"><div><div class="subject-icon">${s.icon}</div><h2>${s.name}</h2><p>${s.summary}</p></div><span class="primary-btn">Học ngay ›</span></button>`).join('')}
      </div>
      <div class="quick-stack">
        <button class="quick-card game" data-action="games"><span>🎮</span>Game mini</button>
        <button class="quick-card library" data-action="library"><span>📚</span>Thư viện</button>
        <button class="quick-card reward" data-action="rewards"><span>🏆</span>Phần thưởng</button>
      </div>
    </section>

    <section class="section level-panel">
      <div class="level-copy"><h2>🎒 Chọn lộ trình phù hợp</h2><p>${track.description}</p></div>
      <div class="level-toggle">
        ${Object.entries(curriculum).map(([k,v])=>`<button class="level-btn ${state.track===k?'active':''}" data-track="${k}">${v.label}</button>`).join('')}
      </div>
    </section>

    <section class="section dashboard-grid">
      <article class="today-card">
        <h3>🌟 Học hôm nay – Vững vàng tương lai</h3>
        ${todaySuggestion()}
      </article>
      <article class="progress-card">
        <h3>📈 Tiến độ học tập</h3>
        ${Object.entries(progress).map(([k,p])=>`<div class="report-row"><label>${subs[k].name}</label><div class="progressbar"><i style="width:${p}%"></i></div><b>${p}%</b></div>`).join('')}
        <div class="muted small">Đã học ${state.todayMinutes} phút hôm nay • Hoàn thành ${state.completed.length} bài</div>
      </article>
    </section>
    <div class="footer-note">Nội dung lớp 2 được tổ chức theo các mạch/yêu cầu cần đạt CTGDPT 2018; lộ trình từng bộ SGK có thể sắp xếp khác nhau.</div>
  </main>`;
  bindCommon();
  $$('[data-subject]').forEach(b=>b.onclick=()=>navigate(`subject/${state.track}/${b.dataset.subject}`));
  $$('[data-track]').forEach(b=>b.onclick=()=>{state.track=b.dataset.track;save();home();});
}

function todaySuggestion(){
  const items=[];
  for(const [sk,s] of Object.entries(curriculum[state.track].subjects)){
    const next=s.lessons.find(l=>!state.completed.includes(l.id))||s.lessons[0];
    items.push({sk,s,next});
  }
  const x=items[0];
  return `<div class="continue-card"><div class="continue-emoji">${x.s.icon}</div><div class="grow"><div class="strong">Tiếp tục: ${x.next.title}</div><div class="muted small">${x.next.desc}</div><div class="progressbar" style="margin-top:9px"><i style="width:${subjectProgress(state.track)[x.sk]}%"></i></div></div><button class="pill-btn" data-go="lesson/${x.next.id}">Học tiếp</button></div>`;
}

function subjectProgress(trackKey){
  const out={};
  for(const [k,s] of Object.entries(curriculum[trackKey].subjects)){
    const done=s.lessons.filter(l=>state.completed.includes(l.id)).length;
    out[k]=Math.round(done/s.lessons.length*100);
  }
  return out;
}

function subjectPage(trackKey,subKey){
  const t=curriculum[trackKey], s=subject(trackKey,subKey);
  if(!t||!s) return home();
  state.track=trackKey; save();
  const done=s.lessons.filter(l=>state.completed.includes(l.id)).length;
  app.innerHTML=`${topbar()}<div class="page-head"><button class="back-btn" data-go="home">←</button><div class="page-title"><h1>${s.icon} ${s.name} – ${t.label}</h1><p>${s.summary} • ${done}/${s.lessons.length} bài đã hoàn thành</p></div></div>
  <main class="subject-view">
    <section class="curriculum-card">
      <div class="tabs"><button class="tab active">Bài học</button><button class="tab" data-scroll-games>Luyện tập & game</button><button class="tab" data-go="report">Tiến độ</button></div>
      <div class="notice">📌 <b>Lộ trình chuẩn app:</b> bám các mạch và yêu cầu cần đạt của CTGDPT 2018. Bộ GD&ĐT không ấn định một thứ tự bài học duy nhất cho mọi bộ SGK, vì vậy đây là thứ tự học tiến triển được thiết kế để bao phủ đủ chuẩn.</div>
      <div class="lesson-list">
      ${s.lessons.map((l,i)=>`<button class="lesson-row ${state.completed.includes(l.id)?'done':''}" data-go="lesson/${l.id}">
        <span class="lesson-no">${state.completed.includes(l.id)?'✓':i+1}</span>
        <span><h4>${l.title}</h4><p>${l.desc}</p></span>
        <span class="lesson-meta"><span class="tag">${l.types.slice(0,2).map(typeLabel).join(' • ')}</span><span class="status-star">${state.completed.includes(l.id)?'⭐⭐⭐':'☆ ☆ ☆'}</span><span class="arrow">›</span></span>
      </button>`).join('')}
      </div>
    </section>
    <aside class="side-card" id="mini-games"><h3>🎮 Game mini ${s.name}</h3><p class="muted small">Game bám đúng kỹ năng từng bài. Game khóa sẽ mở sau khi bé hoàn thành bài liên quan.</p><div class="game-list">
      ${s.games.map(g=>{const open=state.completed.includes(g.unlock)||trackKey==='prep';return `<button class="mini-game" ${open?`data-go="game/${g.id}"`:'data-locked="1"'}><span class="gicon">${g.icon}</span><span><b>${open?'': '🔒 '}${g.title}</b><small>${g.desc}</small></span></button>`}).join('')}
    </div></aside>
  </main>`;
  bindCommon();
  const scroll=$('[data-scroll-games]'); if(scroll) scroll.onclick=()=>$('#mini-games')?.scrollIntoView({behavior:'smooth'});
  $$('[data-locked]').forEach(b=>b.onclick=()=>toast('Hoàn thành bài liên quan để mở game nhé! ⭐'));
}

function lessonPage(id){
  const found=lessonById(id); if(!found)return home();
  const {lesson:l,trackKey,subKey,subject:s}=found;
  const hasExercises=!!exerciseTemplates[id];
  app.innerHTML=`${topbar()}<div class="page-head"><button class="back-btn" data-go="subject/${trackKey}/${subKey}">←</button><div class="page-title"><h1>${s.icon} ${l.title}</h1><p>${curriculum[trackKey].label} • ${s.name}</p></div></div>
  <main class="lesson-shell">
    <section class="lesson-banner"><div class="bigicon">${s.icon}</div><div><h1>${l.title}</h1><p>${l.desc}</p></div></section>
    <h3>🎯 Con sẽ làm được</h3><div class="objective-list">${l.objectives.map((o,i)=>`<div class="objective"><b>${['1️⃣','2️⃣','3️⃣'][i]||'⭐'} Mục tiêu</b>${o}</div>`).join('')}</div>
    <h3>🧠 Bài tập đa dạng</h3><div class="exercise-types">${l.types.map(t=>`<div class="exercise-type"><span>${typeIcon(t)}</span><b>${typeLabel(t)}</b></div>`).join('')}</div>
    <div class="notice" style="margin-top:16px">💡 Mỗi bài nên học khoảng 8–12 phút. Sau 2–3 hoạt động học, app xen một game 1–3 phút để củng cố đúng kỹ năng vừa học.</div>
    <div class="cta-row"><button class="ghost-btn" data-go="subject/${trackKey}/${subKey}">Xem lộ trình</button><button class="big-cta" data-go="practice/${id}">${hasExercises?'Bắt đầu luyện tập':'Học thử bài này'} 🚀</button></div>
  </main>`;
  bindCommon();
}

function practicePage(id){
  const found=lessonById(id); if(!found)return home();
  const qs=exerciseTemplates[id] || makeGenericQuestions(found.lesson,found.subKey);
  let idx=0, score=0, locked=false;
  const render=()=>{
    const q=qs[idx];
    app.innerHTML=`${topbar()}<div class="page-head"><button class="back-btn" data-go="lesson/${id}">←</button><div class="page-title"><h1>📝 Luyện tập: ${found.lesson.title}</h1><p>Câu ${idx+1}/${qs.length} • Đúng ${score}</p></div></div>
    <main class="practice-shell"><div class="practice-top"><span>⭐ ${state.stars}</span><div class="progress-steps"><i style="width:${((idx+1)/qs.length)*100}%"></i></div><span>${idx+1}/${qs.length}</span></div>
      <section class="question-card"><h2>${q.prompt}</h2>${q.visual?`<div class="question-visual">${q.visual}</div>`:''}<div id="qbody">${renderQuestion(q)}</div><div id="feedback"></div><div class="next-row"><button class="next-btn" id="nextQ" style="display:none">${idx===qs.length-1?'Hoàn thành':'Câu tiếp theo'} →</button></div></section>
    </main>`;
    bindCommon(); locked=false;
    bindQuestion(q,(answer)=>{
      if(locked)return; locked=true;
      const ok=checkAnswer(q,answer);
      if(ok){score++; state.stars+=3; save();}
      const fb=$('#feedback'); fb.className=`feedback ${ok?'ok':'no'}`; fb.innerHTML=ok?'🎉 Chính xác! +3 ⭐':`💡 Chưa đúng. Đáp án: <b>${Array.isArray(q.answer)?q.answer.join(' → '):q.answer}</b>`;
      const next=$('#nextQ'); next.style.display='inline-block';
      next.onclick=()=>{
        if(idx<qs.length-1){idx++;render();}
        else finishPractice(id,score,qs.length,found);
      };
    });
  };
  render();
}

function renderQuestion(q){
  if(['choice','read'].includes(q.type)) return `<div class="answers">${q.options.map(x=>`<button class="answer-btn" data-answer="${escapeAttr(x)}">${x}</button>`).join('')}</div>`;
  if(q.type==='fill') return `<div class="fill-wrap"><input class="fill-input" id="fillAnswer" autocomplete="off" placeholder="Điền đáp án"><button class="pill-btn" id="submitFill">Kiểm tra</button></div>`;
  if(q.type==='order') return `<p class="muted">Chạm các thẻ theo đúng thứ tự.</p><div class="order-bank">${q.options.map((x,i)=>`<button class="chip-btn" data-order="${i}">${x}</button>`).join('')}</div><div class="order-picked" id="orderPicked"></div><button class="pill-btn" id="submitOrder">Kiểm tra thứ tự</button>`;
  return `<div class="answers">${(q.options||['Đã hiểu','Cần luyện thêm']).map(x=>`<button class="answer-btn" data-answer="${escapeAttr(x)}">${x}</button>`).join('')}</div>`;
}
function bindQuestion(q,done){
  if(['choice','read'].includes(q.type)) $$('[data-answer]').forEach(b=>b.onclick=()=>{b.classList.add(checkAnswer(q,b.dataset.answer)?'correct':'wrong');done(b.dataset.answer);});
  if(q.type==='fill') $('#submitFill').onclick=()=>done($('#fillAnswer').value.trim());
  if(q.type==='order'){
    const chosen=[];
    $$('[data-order]').forEach(b=>b.onclick=()=>{if(b.classList.contains('selected'))return;b.classList.add('selected');chosen.push(q.options[+b.dataset.order]);$('#orderPicked').innerHTML=chosen.map(x=>`<span class="chip-btn">${x}</span>`).join('');});
    $('#submitOrder').onclick=()=>done(chosen);
  }
}
function checkAnswer(q,a){
  if(Array.isArray(q.answer)) return JSON.stringify(a)===JSON.stringify(q.answer);
  return norm(a)===norm(q.answer) || (q.type==='fill' && norm(a).replace(/^,|,$/g,'')===norm(q.answer).replace(/^,|,$/g,''));
}
function norm(x){return String(x||'').trim().toLocaleLowerCase('vi-VN').replace(/\s+/g,' ');}

function finishPractice(id,score,total,found){
  if(score>=Math.ceil(total*.6) && !state.completed.includes(id)) state.completed.push(id);
  const earned=score*3 + (score===total?5:0); if(score===total){state.stars+=5;} state.todayMinutes+=8; save();
  app.innerHTML=`${topbar()}<main class="lesson-shell" style="max-width:620px;text-align:center"><div style="font-size:76px">${score===total?'🌟':'🎉'}</div><h1>Hoàn thành bài học!</h1><p class="muted">Con làm đúng <b>${score}/${total}</b> câu và nhận <b>${earned} ⭐</b>.</p><div class="progressbar" style="height:18px;margin:18px 0"><i style="width:${score/total*100}%"></i></div><div class="cta-row"><button class="ghost-btn" data-go="subject/${found.trackKey}/${found.subKey}">Về lộ trình</button><button class="pill-btn" data-go="games/${found.trackKey}/${found.subKey}">Chơi game củng cố 🎮</button></div></main>`;
  bindCommon();
}

function makeGenericQuestions(l,subKey){
  const opts=l.objectives;
  return [
    Q('choice',`Mục tiêu nào thuộc bài “${l.title}”?`,[opts[0],'Học kiến thức lớp 5','Làm bài thật dài','Ghi nhớ không cần hiểu'],opts[0],typeIcon(l.types[0])),
    Q('choice','Cách học tốt nhất cho bài này là gì?',['Quan sát – làm thử – nhận phản hồi','Chỉ học thuộc đáp án','Bỏ qua bài khó','Làm thật nhanh'], 'Quan sát – làm thử – nhận phản hồi','🧠'),
    Q('choice','Sau khi làm sai, con nên:',['Xem gợi ý và thử lại','Thoát app ngay','Đoán liên tục','Không cần sửa'],'Xem gợi ý và thử lại','💡')
  ];
}

function gamesPage(trackKey=state.track,subKey=''){ 
  const t=curriculum[trackKey]; state.track=trackKey; save();
  const cards=[]; for(const [sk,s] of Object.entries(t.subjects)) if(!subKey||sk===subKey) s.games.forEach(g=>cards.push({g,sk,s}));
  app.innerHTML=`${topbar()}<div class="page-head"><button class="back-btn" data-go="home">←</button><div class="page-title"><h1>🎮 Game mini – ${t.label}</h1><p>Game chỉ củng cố kỹ năng đúng cấp độ và bài đã học.</p></div></div><main class="section"><div class="report-grid">${cards.map(({g,sk,s})=>{const open=state.completed.includes(g.unlock)||trackKey==='prep';return `<button class="stat-card" style="text-align:left" ${open?`data-go="game/${g.id}"`:'data-locked="1"'}><div class="num">${g.icon}</div><h3>${open?'':'🔒 '}${g.title}</h3><p class="muted">${s.name} • ${g.desc}</p></button>`}).join('')}</div></main>`;
  bindCommon(); $$('[data-locked]').forEach(b=>b.onclick=()=>toast('Game này sẽ mở sau khi hoàn thành bài liên quan.'));
}

function gamePage(id){
  const found=gameById(id); if(!found)return home();
  const {game,trackKey,subKey}=found;
  const bank=gameBank(id,subKey); let round=0, score=0;
  const render=()=>{
    const q=bank[round];
    app.innerHTML=`${topbar()}<div class="page-head"><button class="back-btn" data-go="subject/${trackKey}/${subKey}">←</button><div class="page-title"><h1>${game.icon} ${game.title}</h1><p>${game.desc} • Vòng ${round+1}/${bank.length}</p></div></div><main class="game-shell"><div class="game-head"><h1>${game.title}</h1><span class="score-pill">⭐ Điểm: ${score}</span></div><div class="game-field"><div class="game-question">${q.prompt}</div><div class="balloons">${q.options.map(o=>`<button class="balloon" data-game-answer="${escapeAttr(o)}">${o}</button>`).join('')}</div></div></main>`;
    bindCommon(); $$('[data-game-answer]').forEach(b=>b.onclick=()=>{const ok=norm(b.dataset.gameAnswer)===norm(q.answer); if(ok){score+=10;b.textContent='✨';toast('Đúng rồi! +10 điểm');}else{b.textContent='💥';toast('Thử lại ở vòng sau nhé!');}setTimeout(()=>{if(round<bank.length-1){round++;render();}else finishGame();},350);});
  };
  const finishGame=()=>{state.stars+=Math.max(5,Math.floor(score/10));state.gamePlayed++;state.todayMinutes+=3;save();app.innerHTML=`${topbar()}<main class="lesson-shell" style="max-width:620px;text-align:center"><div style="font-size:80px">🏆</div><h1>Game hoàn thành!</h1><p>Điểm của con: <b>${score}/${bank.length*10}</b></p><p class="muted">Game đã củng cố đúng kỹ năng của bài học, không dùng kiến thức vượt lớp.</p><div class="cta-row"><button class="ghost-btn" data-go="subject/${trackKey}/${subKey}">Về môn học</button><button class="pill-btn" data-go="game/${id}">Chơi lại</button></div></main>`;bindCommon();};
  render();
}
function gameBank(id,subKey){
  if(subKey==='math') return [
    {prompt:'426 gồm mấy trăm?',options:['2','4','6','8'],answer:'4'},
    {prompt:'2 × 6 = ?',options:['8','10','12','14'],answer:'12'},
    {prompt:'20 : 5 = ?',options:['2','4','5','10'],answer:'4'},
    {prompt:'350 + 120 = ?',options:['460','470','480','570'],answer:'470'}
  ];
  if(subKey==='vi') return [
    {prompt:'Từ nào chỉ hoạt động?',options:['bàn','chạy','đẹp','xanh'],answer:'chạy'},
    {prompt:'“Bạn khỏe không__” chọn dấu gì?',options:['.','?','!',','],answer:'?'},
    {prompt:'Từ nào viết đúng?',options:['xạch sẽ','sạch sẽ','sạch xẽ','sạch sẻ'],answer:'sạch sẽ'},
    {prompt:'Từ nào chỉ sự vật?',options:['vui','đọc','quyển vở','nhanh'],answer:'quyển vở'}
  ];
  return [
    {prompt:'Hello = ?',options:['xin chào','cảm ơn','xin lỗi','tạm biệt'],answer:'xin chào'},
    {prompt:'cat = ?',options:['chó','mèo','chim','cá'],answer:'mèo'},
    {prompt:'blue = ?',options:['đỏ','xanh dương','vàng','đen'],answer:'xanh dương'},
    {prompt:'Goodbye = ?',options:['xin chào','tạm biệt','cảm ơn','mời'],answer:'tạm biệt'}
  ];
}

function reportPage(){
  const t=curriculum[state.track], p=subjectProgress(state.track);
  app.innerHTML=`${topbar()}<div class="page-head"><button class="back-btn" data-go="home">←</button><div class="page-title"><h1>📊 Báo cáo học tập</h1><p>${state.childName} • ${t.label}</p></div></div><main class="section"><div class="report-grid"><div class="stat-card"><div class="num">${state.completed.length}</div><b>Bài đã hoàn thành</b></div><div class="stat-card"><div class="num">${state.gamePlayed}</div><b>Game đã chơi</b></div><div class="stat-card"><div class="num">${state.todayMinutes}'</div><b>Thời gian hôm nay</b></div></div><h3>Tiến độ theo môn</h3>${Object.entries(p).map(([k,v])=>`<div class="report-row"><label>${t.subjects[k].name}</label><div class="progressbar"><i style="width:${v}%"></i></div><b>${v}%</b></div>`).join('')}<div class="notice" style="margin-top:18px">👨‍👩‍👧 Gợi ý phụ huynh: ưu tiên duy trì 15–25 phút/ngày, xen kẽ học và game ngắn; không ép bé học liên tục quá lâu.</div></main>`;bindCommon();
}
function rewardsPage(){
  const badges=[['🌟','Ngôi sao chăm học',state.completed.length>=1],['🎮','Cao thủ mini game',state.gamePlayed>=3],['📚','Bạn của sách',state.completed.length>=5],['🔥','Chuỗi 5 ngày',state.streak>=5],['🧮','Nhà toán học',state.completed.some(x=>x.startsWith('g2-m-'))],['✍️','Bút nhỏ chăm chỉ',state.completed.some(x=>x.startsWith('g2-v-'))],['🎧','Tai nghe siêu cấp',state.completed.some(x=>x.startsWith('g2-e-'))],['🏆','Hoàn thành xuất sắc',state.completed.length>=10]];
  app.innerHTML=`${topbar()}<div class="page-head"><button class="back-btn" data-go="home">←</button><div class="page-title"><h1>🏆 Phần thưởng của con</h1><p>Dùng sao để mở huy hiệu và đồ trang trí.</p></div></div><main class="section"><div class="badge-grid">${badges.map(([i,n,ok])=>`<div class="badge" style="opacity:${ok?1:.45}"><span>${ok?i:'🔒'}</span><b>${n}</b><div class="muted small">${ok?'Đã nhận':'Chưa mở'}</div></div>`).join('')}</div></main>`;bindCommon();
}
function libraryPage(){
  const books=[['🐢','Thỏ và rùa','Truyện ngụ ngôn'],['🎋','Sự tích cây tre','Truyện dân gian'],['🦆','Chú vịt con','Truyện thiếu nhi'],['🌳','Cây táo của em','Văn bản miêu tả'],['🐘','Thế giới động vật','Văn bản thông tin'],['🌈','A Colorful Day','Tiếng Anh làm quen']];
  app.innerHTML=`${topbar()}<div class="page-head"><button class="back-btn" data-go="home">←</button><div class="page-title"><h1>📚 Thư viện truyện</h1><p>Ngữ liệu ngắn, dễ đọc, phù hợp lứa tuổi.</p></div></div><main class="section"><div class="report-grid">${books.map(([i,n,t])=>`<button class="stat-card" data-book="${n}" style="text-align:left"><div class="num">${i}</div><h3>${n}</h3><p class="muted">${t}</p></button>`).join('')}</div></main>`;bindCommon();$$('[data-book]').forEach(b=>b.onclick=()=>toast(`“${b.dataset.book}” sẽ được bổ sung nội dung đọc đầy đủ ở bản nội dung tiếp theo.`));
}

function settingsModal(){
  const el=document.createElement('div'); el.className='modal-backdrop'; el.innerHTML=`<div class="modal"><h2>⚙️ Cài đặt</h2><div class="settings-grid"><label class="setting-row"><span><b>Tên của bé</b><div class="muted small">Hiển thị trên hồ sơ</div></span><input id="childName" class="fill-input" style="font-size:16px;min-width:180px" value="${escapeAttr(state.childName)}"></label><label class="setting-row"><span><b>Âm thanh</b><div class="muted small">Hiệu ứng và đọc từ</div></span><input id="soundToggle" type="checkbox" ${state.sound?'checked':''}></label><div class="setting-row"><span><b>Đặt lại tiến độ demo</b><div class="muted small">Xóa bài đã hoàn thành trên thiết bị này</div></span><button class="ghost-btn" id="resetProgress">Đặt lại</button></div><div class="setting-row"><span><b>Về chương trình</b><div class="muted small">CTGDPT 2018 • một chương trình, nhiều SGK</div></span><button class="ghost-btn" id="aboutCurriculum">Xem ghi chú</button></div></div><div class="modal-actions"><button class="ghost-btn" id="closeSettings">Đóng</button><button class="pill-btn" id="saveSettings">Lưu</button></div></div>`;document.body.appendChild(el);
  $('#closeSettings',el).onclick=()=>el.remove(); el.onclick=e=>{if(e.target===el)el.remove();};
  $('#saveSettings',el).onclick=()=>{state.childName=$('#childName',el).value.trim()||'Bé Minh';state.sound=$('#soundToggle',el).checked;save();el.remove();route();};
  $('#resetProgress',el).onclick=()=>{state.completed=[];state.gamePlayed=0;state.stars=100;save();toast('Đã đặt lại tiến độ demo.');el.remove();route();};
  $('#aboutCurriculum',el).onclick=()=>alert('Lớp 2 bám CTGDPT 2018 theo yêu cầu cần đạt. Chương trình không ấn định một trình tự bài giống nhau cho mọi bộ SGK. Tiếng Anh lớp 1–2 được triển khai theo hướng tự chọn/làm quen ở nơi có điều kiện.');
}
function levelModal(){
  const el=document.createElement('div');el.className='modal-backdrop';el.innerHTML=`<div class="modal"><h2>🎒 Chọn lộ trình</h2><p class="muted">Chọn đúng cấp độ để bài học và mini game không vượt quá khả năng của bé.</p><div class="settings-grid">${Object.entries(curriculum).map(([k,v])=>`<button class="lesson-row" data-level="${k}"><span class="lesson-no">${v.emoji}</span><span><h4>${v.label}</h4><p>${v.description}</p></span><span class="arrow">›</span></button>`).join('')}</div><div class="modal-actions"><button class="ghost-btn" data-close>Đóng</button></div></div>`;document.body.appendChild(el);$('[data-close]',el).onclick=()=>el.remove();$$('[data-level]',el).forEach(b=>b.onclick=()=>{state.track=b.dataset.level;save();el.remove();home();});
}

function typeIcon(t){return ({choice:'✅',fill:'✏️',order:'🔢',match:'🧩',drag:'🖐️',listen:'🎧',read:'📖',write:'📝',speak:'🎙️',trace:'〰️',word:'💬'})[t]||'⭐';}
function typeLabel(t){return ({choice:'Chọn đáp án',fill:'Điền đáp án',order:'Sắp xếp',match:'Nối cặp',drag:'Kéo thả',listen:'Nghe – chọn',read:'Đọc hiểu',write:'Viết đoạn',speak:'Nói – kể',trace:'Tô nét',word:'Bài toán thực tế'})[t]||'Hoạt động';}
function escapeAttr(s){return String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;');}
function toast(msg){
  const old=$('.toast');if(old)old.remove();const t=document.createElement('div');t.className='toast';t.textContent=msg;document.body.appendChild(t);setTimeout(()=>t.remove(),2200);
}

function navigate(path){location.hash=path==='home'?'':`#${path}`; if(path==='home'&&!location.hash)home();}
function bindCommon(){
  $$('[data-go]').forEach(b=>b.onclick=()=>navigate(b.dataset.go));
  $$('[data-action]').forEach(b=>b.onclick=()=>{
    const a=b.dataset.action; if(a==='level')levelModal(); else if(a==='settings')settingsModal(); else if(a==='report')navigate('report'); else if(a==='rewards')navigate('rewards'); else if(a==='games')navigate(`games/${state.track}`); else if(a==='library')navigate('library');
  });
}
function route(){
  const h=location.hash.replace(/^#/,''); if(!h){home();return;}
  const p=h.split('/');
  if(p[0]==='subject') subjectPage(p[1]||state.track,p[2]||'math');
  else if(p[0]==='lesson') lessonPage(p[1]);
  else if(p[0]==='practice') practicePage(p[1]);
  else if(p[0]==='game') gamePage(p[1]);
  else if(p[0]==='games') gamesPage(p[1]||state.track,p[2]||'');
  else if(p[0]==='report') reportPage();
  else if(p[0]==='rewards') rewardsPage();
  else if(p[0]==='library') libraryPage();
  else home();
}
window.addEventListener('hashchange',route);
window.addEventListener('DOMContentLoaded',()=>{
  route();
  if('serviceWorker' in navigator && location.protocol!=='file:') navigator.serviceWorker.register('./service-worker.js').catch(()=>{});
});
